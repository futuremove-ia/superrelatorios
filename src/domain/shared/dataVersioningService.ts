import { supabase } from "@/lib/supabase";
import type {
  ChangeType,
  ValidationStatus,
  ValidationRequest,
  ValidationResult,
  DataVersion,
} from "./blueprintExtractionService";

const DEFAULT_CHANGE_THRESHOLDS = {
  percent: 20,
  currency: 15,
  count: 25,
  ratio: 30,
  days: 30,
  score: 15,
};

const DEFAULT_CONFIDENCE_THRESHOLD = 0.7;

export interface VersionHistoryOptions {
  organizationId: string;
  tableName: string;
  recordId?: string;
  fieldName?: string;
  limit?: number;
}

export interface DataComparison {
  field: string;
  oldValue: unknown;
  newValue: unknown;
  changePercent?: number;
  isSignificant: boolean;
  requiresValidation: boolean;
}

export interface ValidationQueueItem {
  id: string;
  organizationId: string;
  tableName: string;
  recordId: string;
  fieldName: string;
  oldValue: unknown;
  newValue: unknown;
  changePercent?: number;
  confidenceScore: number;
  changeType: ChangeType;
  sourceDocumentId?: string;
  suggestedAction: "approve" | "reject" | "review";
  reason: string;
  createdAt: Date;
}

export class DataVersioningService {
  private static instance: DataVersioningService;
  private validationQueue: ValidationQueueItem[] = [];

  static getInstance(): DataVersioningService {
    if (!DataVersioningService.instance) {
      DataVersioningService.instance = new DataVersioningService();
    }
    return DataVersioningService.instance;
  }

  calculateChangePercent(oldValue: number, newValue: number): number {
    if (oldValue === 0 || oldValue === null || oldValue === undefined) {
      return newValue > 0 ? 100 : 0;
    }
    return Math.abs(((newValue - oldValue) / oldValue) * 100);
  }

  determineValidationRequired(
    fieldName: string,
    oldValue: unknown,
    newValue: unknown,
    confidenceScore: number,
    changeType: ChangeType,
  ): { required: boolean; reason: string } {
    if (changeType === "manual" || changeType === "ai_correction") {
      return { required: false, reason: "Manual/AI changes auto-approved" };
    }

    if (confidenceScore < DEFAULT_CONFIDENCE_THRESHOLD) {
      return {
        required: true,
        reason: `Baixa confiança (${(confidenceScore * 100).toFixed(0)}%)`,
      };
    }

    if (typeof oldValue === "number" && typeof newValue === "number") {
      const changePercent = this.calculateChangePercent(oldValue, newValue);
      const threshold = this.getThresholdForField(fieldName);

      if (changePercent > threshold) {
        return {
          required: true,
          reason: `Mudança significativa: ${changePercent.toFixed(1)}% (threshold: ${threshold}%)`,
        };
      }
    }

    if (oldValue !== newValue && oldValue !== undefined && oldValue !== null) {
      return {
        required: true,
        reason: `Valor alterado: ${JSON.stringify(oldValue)} → ${JSON.stringify(newValue)}`,
      };
    }

    return { required: false, reason: "Sem mudança significativa" };
  }

  private getThresholdForField(fieldName: string): number {
    const fieldThresholds: Record<string, number> = {
      revenue: 15,
      mrr: 15,
      costs: 20,
      employees: 25,
      churn_rate: 20,
      cac: 30,
      ltv: 25,
    };

    const normalizedField = fieldName.toLowerCase().replace(/[_-]/g, "");
    return (
      fieldThresholds[normalizedField] || DEFAULT_CHANGE_THRESHOLDS.percent
    );
  }

  async createVersion(
    organizationId: string,
    tableName: string,
    recordId: string,
    fieldName: string,
    oldValue: unknown,
    newValue: unknown,
    options: {
      changeType: ChangeType;
      sourceDocumentId?: string;
      confidenceScore: number;
      changeReason?: string;
    },
  ): Promise<DataVersion> {
    const validationRequired = this.determineValidationRequired(
      fieldName,
      oldValue,
      newValue,
      options.confidenceScore,
      options.changeType,
    );

    const changePercent =
      typeof oldValue === "number" && typeof newValue === "number"
        ? this.calculateChangePercent(oldValue, newValue)
        : undefined;

    const validationStatus: ValidationStatus = validationRequired.required
      ? "pending"
      : "auto_approved";

    const versionRecord: Omit<DataVersion, "id" | "createdAt"> = {
      organizationId,
      fieldName,
      tableName,
      recordId,
      oldValue,
      newValue,
      changeType: options.changeType,
      sourceDocumentId: options.sourceDocumentId,
      confidenceScore: options.confidenceScore,
      changeReason: options.changeReason || validationRequired.reason,
      validationStatus,
      verifiedBy: undefined,
      verifiedAt: undefined,
    };

    const { data, error } = await supabase
      .from("data_versions")
      .insert(versionRecord)
      .select()
      .single();

    if (error) {
      console.error("Failed to create version:", error);
      throw error;
    }

    if (validationRequired.required) {
      await this.addToValidationQueue({
        id: data.id,
        organizationId,
        tableName,
        recordId,
        fieldName,
        oldValue,
        newValue,
        changePercent,
        confidenceScore: options.confidenceScore,
        changeType: options.changeType,
        sourceDocumentId: options.sourceDocumentId,
        suggestedAction: this.determineSuggestedAction(
          changePercent,
          options.confidenceScore,
        ),
        reason: validationRequired.reason,
        createdAt: new Date(),
      });
    }

    return data;
  }

  private determineSuggestedAction(
    changePercent?: number,
    confidenceScore?: number,
  ): "approve" | "reject" | "review" {
    if (changePercent !== undefined && changePercent > 50) {
      return "review";
    }
    if (confidenceScore !== undefined && confidenceScore < 0.5) {
      return "review";
    }
    if (changePercent !== undefined && changePercent < 10) {
      return "approve";
    }
    return "review";
  }

  private async addToValidationQueue(item: ValidationQueueItem): Promise<void> {
    this.validationQueue.push(item);

    await supabase.from("validation_queue").upsert({
      id: item.id,
      organization_id: item.organizationId,
      table_name: item.tableName,
      record_id: item.recordId,
      field_name: item.fieldName,
      old_value: JSON.stringify(item.oldValue),
      new_value: JSON.stringify(item.newValue),
      change_percent: item.changePercent,
      confidence_score: item.confidenceScore,
      change_type: item.changeType,
      source_document_id: item.sourceDocumentId,
      suggested_action: item.suggestedAction,
      reason: item.reason,
      status: "pending",
      created_at: item.createdAt.toISOString(),
    });
  }

  async getVersionHistory(
    options: VersionHistoryOptions,
  ): Promise<DataVersion[]> {
    let query = supabase
      .from("data_versions")
      .select("*")
      .eq("organization_id", options.organizationId)
      .order("created_at", { ascending: false });

    if (options.tableName) {
      query = query.eq("table_name", options.tableName);
    }
    if (options.recordId) {
      query = query.eq("record_id", options.recordId);
    }
    if (options.fieldName) {
      query = query.eq("field_name", options.fieldName);
    }
    if (options.limit) {
      query = query.limit(options.limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Failed to get version history:", error);
      return [];
    }

    return data || [];
  }

  async validateVersion(
    versionId: string,
    userId: string,
    result: ValidationResult,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const updateData = {
        validation_status: result.approved ? "approved" : "rejected",
        verified_by: userId,
        verified_at:
          result.validatedAt?.toISOString() || new Date().toISOString(),
      };

      const { error } = await supabase
        .from("data_versions")
        .update(updateData)
        .eq("id", versionId);

      if (error) throw error;

      await supabase
        .from("validation_queue")
        .update({
          status: result.approved ? "approved" : "rejected",
          validated_by: userId,
          validated_at: new Date().toISOString(),
          notes: result.notes,
        })
        .eq("id", versionId);

      if (result.approved) {
        await this.applyVersionedChange(versionId);
      }

      this.validationQueue = this.validationQueue.filter(
        (v) => v.id !== versionId,
      );

      return { success: true };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro desconhecido";
      return { success: false, error: message };
    }
  }

  private async applyVersionedChange(versionId: string): Promise<void> {
    const { data: version } = await supabase
      .from("data_versions")
      .select("*")
      .eq("id", versionId)
      .single();

    if (!version) return;

    const tableMapping: Record<string, string> = {
      user_metrics: "user_metrics",
      library_kpis: "library_kpis",
      company_blueprints: "company_blueprints",
      radar_items: "radar_items",
      action_items: "action_items",
    };

    const tableName = tableMapping[version.table_name] || version.table_name;

    const updateField = version.field_name.replace(/_([a-z])/g, (_, letter) =>
      letter.toUpperCase(),
    );

    const { error } = await supabase
      .from(tableName)
      .update({ [version.field_name]: version.newValue })
      .eq("id", version.recordId);

    if (error) {
      console.error("Failed to apply versioned change:", error);
    }
  }

  async getPendingValidations(
    organizationId: string,
  ): Promise<ValidationQueueItem[]> {
    if (this.validationQueue.length > 0) {
      return this.validationQueue.filter(
        (v) => v.organizationId === organizationId,
      );
    }

    const { data, error } = await supabase
      .from("validation_queue")
      .select("*")
      .eq("organization_id", organizationId)
      .eq("status", "pending")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to get pending validations:", error);
      return [];
    }

    return (data || []).map((item) => ({
      id: item.id,
      organizationId: item.organization_id,
      tableName: item.table_name,
      recordId: item.record_id,
      fieldName: item.field_name,
      oldValue: JSON.parse(item.old_value || "null"),
      newValue: JSON.parse(item.new_value || "null"),
      changePercent: item.change_percent,
      confidenceScore: item.confidence_score,
      changeType: item.change_type,
      sourceDocumentId: item.source_document_id,
      suggestedAction: item.suggested_action,
      reason: item.reason,
      createdAt: new Date(item.created_at),
    }));
  }

  async compareVersions(
    versionId1: string,
    versionId2: string,
  ): Promise<DataComparison[]> {
    const [v1, v2] = await Promise.all([
      supabase.from("data_versions").select("*").eq("id", versionId1).single(),
      supabase.from("data_versions").select("*").eq("id", versionId2).single(),
    ]);

    if (!v1.data || !v2.data) {
      return [];
    }

    const field1 = v1.data.field_name;
    const field2 = v2.data.field_name;

    if (field1 !== field2) {
      return [];
    }

    const oldVal = v1.data.newValue;
    const newVal = v2.data.newValue;

    const changePercent =
      typeof oldVal === "number" && typeof newVal === "number"
        ? this.calculateChangePercent(oldVal, newVal)
        : undefined;

    const threshold = this.getThresholdForField(field1);
    const isSignificant =
      changePercent !== undefined && changePercent > threshold;

    return [
      {
        field: field1,
        oldValue: oldVal,
        newValue: newVal,
        changePercent,
        isSignificant,
        requiresValidation: isSignificant,
      },
    ];
  }

  async autoApproveLowRiskVersions(organizationId: string): Promise<number> {
    const { data: lowRiskVersions } = await supabase
      .from("validation_queue")
      .select("id")
      .eq("organization_id", organizationId)
      .eq("status", "pending")
      .eq("suggested_action", "approve")
      .limit(10);

    if (!lowRiskVersions || lowRiskVersions.length === 0) {
      return 0;
    }

    let approvedCount = 0;

    for (const version of lowRiskVersions) {
      const result = await this.validateVersion(version.id, "system", {
        approved: true,
        validatedBy: "system",
        validatedAt: new Date(),
        notes: "Auto-aprovado: baixo risco",
      });

      if (result.success) {
        approvedCount++;
      }
    }

    return approvedCount;
  }

  getValidationQueueCount(organizationId: string): number {
    return this.validationQueue.filter(
      (v) => v.organizationId === organizationId,
    ).length;
  }
}

export const dataVersioningService = DataVersioningService.getInstance();

export const createDataVersion = async (
  organizationId: string,
  tableName: string,
  recordId: string,
  fieldName: string,
  oldValue: unknown,
  newValue: unknown,
  options: {
    changeType: ChangeType;
    sourceDocumentId?: string;
    confidenceScore: number;
    changeReason?: string;
  },
): Promise<DataVersion> => {
  return dataVersioningService.createVersion(
    organizationId,
    tableName,
    recordId,
    fieldName,
    oldValue,
    newValue,
    options,
  );
};

export const getVersionHistory = (
  options: VersionHistoryOptions,
): Promise<DataVersion[]> => {
  return dataVersioningService.getVersionHistory(options);
};

export const validateDataVersion = (
  versionId: string,
  userId: string,
  result: ValidationResult,
): Promise<{ success: boolean; error?: string }> => {
  return dataVersioningService.validateVersion(versionId, userId, result);
};

export const getPendingValidations = (
  organizationId: string,
): Promise<ValidationQueueItem[]> => {
  return dataVersioningService.getPendingValidations(organizationId);
};
