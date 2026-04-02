import { useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import {
  KPICalculationEngine,
  CalculationContext,
  CalculationOptions,
  KPIResultSet,
  KPIResult,
  Sector,
  GroupDataPeriod,
  LibraryKPI,
  mapUserDataToKPIFields,
  getFormulasBySector,
} from "../engine";

interface UseKPICalculatorOptions extends CalculationOptions {
  organizationId: string;
  sector?: Sector;
  businessModel?: BusinessModel;
  period?: GroupDataPeriod;
}

type BusinessModel =
  | "b2b"
  | "b2c"
  | "b2b2c"
  | "marketplace"
  | "subscription"
  | "transaction";

interface UseKPICalculationResult {
  calculateKPI: (
    kpiCode: string,
    rawData: Record<string, number | number[]>,
  ) => KPIResult;
  calculateMultiple: (
    kpiCodes: string[],
    rawData: Record<string, number | number[]>,
  ) => KPIResultSet;
  calculateAll: (rawData: Record<string, number | number[]>) => KPIResultSet;
  getAvailableKPIs: (
    rawData: Record<string, number | number[]>,
  ) => { code: string; title: string; readiness: number }[];
  getSuggestedFields: (
    rawData: Record<string, number | number[]>,
  ) => { field: string; description: string; impact: string }[];
  isLoading: boolean;
  error: Error | null;
  kpiLibrary: LibraryKPI[];
}

export const useKPICalculation = (
  options: UseKPICalculatorOptions,
): UseKPICalculationResult => {
  const { organizationId, sector, businessModel, period = "monthly" } = options;

  const {
    data: kpiLibrary = [],
    isLoading,
    error,
  } = useQuery<LibraryKPI[]>({
    queryKey: ["library-kpis"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("library_kpis")
        .select("*")
        .eq("is_active", true)
        .order("code");

      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });

  const context = useMemo<CalculationContext>(
    () => ({
      organizationId,
      sector,
      businessModel,
      period,
    }),
    [organizationId, sector, businessModel, period],
  );

  const calculationOptions = useMemo<CalculationOptions>(
    () => ({
      sector,
      businessModel,
      period,
    }),
    [sector, businessModel, period],
  );

  const engine = useMemo(() => {
    return new KPICalculationEngine(context, calculationOptions, kpiLibrary);
  }, [context, calculationOptions, kpiLibrary]);

  const calculateKPI = useCallback(
    (kpiCode: string, rawData: Record<string, number | number[]>) => {
      return engine.calculateSingle(kpiCode, rawData);
    },
    [engine],
  );

  const calculateMultiple = useCallback(
    (kpiCodes: string[], rawData: Record<string, number | number[]>) => {
      return engine.calculateMultiple(kpiCodes, rawData);
    },
    [engine],
  );

  const calculateAll = useCallback(
    (rawData: Record<string, number | number[]>) => {
      return engine.calculateAllForSector(rawData);
    },
    [engine],
  );

  const getAvailableKPIs = useCallback(
    (rawData: Record<string, number | number[]>) => {
      return engine.getAvailableKPIs(rawData);
    },
    [engine],
  );

  const getSuggestedFields = useCallback(
    (rawData: Record<string, number | number[]>) => {
      return engine.getSuggestedNextSteps(rawData);
    },
    [engine],
  );

  return {
    calculateKPI,
    calculateMultiple,
    calculateAll,
    getAvailableKPIs,
    getSuggestedFields,
    isLoading,
    error: error as Error | null,
    kpiLibrary,
  };
};

export const useQuickKPICalculation = (sector?: Sector) => {
  const calculate = useCallback(
    (
      rawData: Record<string, number | number[]>,
      kpiCodes?: string[],
    ): KPIResultSet => {
      const context: CalculationContext = {
        organizationId: "quick-calc",
        sector,
        period: "monthly",
      };

      const engine = new KPICalculationEngine(context, {}, []);

      if (kpiCodes && kpiCodes.length > 0) {
        return engine.calculateMultiple(kpiCodes, rawData);
      }

      return engine.calculateAllForSector(rawData);
    },
    [sector],
  );

  const getKPIsForData = useCallback(
    (
      rawData: Record<string, number | number[]>,
    ): { code: string; title: string; readiness: number }[] => {
      if (!sector) return [];

      const formulas = getFormulasBySector(sector);
      const mappedData = mapUserDataToKPIFields(rawData, sector);

      return formulas
        .map((formula) => {
          const requiredFields = formula.requiredFields.map((f) => f.name);
          const availableFields = requiredFields.filter(
            (f) => mappedData.mapped[f] !== undefined,
          );
          const readiness =
            requiredFields.length > 0
              ? availableFields.length / requiredFields.length
              : 0;

          return {
            code: formula.code,
            title: formula.description,
            readiness,
          };
        })
        .filter((kpi) => kpi.readiness > 0)
        .sort((a, b) => b.readiness - a.readiness);
    },
    [sector],
  );

  return {
    calculate,
    getKPIsForData,
  };
};

export { KPICalculationEngine };
export type { CalculationContext, CalculationOptions, KPIResult, KPIResultSet };
