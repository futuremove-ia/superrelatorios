import { supabase } from '@/lib/supabase';
import { ExtractedKPI } from './kpiExtractionService';

/**
 * Dados do relatório a ser salvo
 */
export interface ReportSaveData {
  title: string;
  description?: string;
  category: string;
  template_id?: string;
  blocks: any[];
  data_json?: any;
  status?: 'completed' | 'draft' | 'shared';
}

/**
 * Diagnóstico enriquecido com códigos padronizados
 */
export interface EnrichedDiagnostic {
  title: string;
  description: string;
  causes?: string[];
  implications?: string[];
  challenge_code: string;
  suggested_lever_code?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidence?: number;
}

/**
 * Resultado da persistência em cascata
 */
export interface CascadedSaveResult {
  report: any;
  metricsCount: number;
  challengeCreated: boolean;
  challengeId?: string;
}

/**
 * Salva relatório com persistência em cascata:
 * 1. Insere relatório
 * 2. Insere métricas (user_metrics)
 * 3. Cria/atualiza desafio (user_challenges)
 */
export const saveReportWithMetrics = async (
  reportData: ReportSaveData,
  kpis: ExtractedKPI[],
  diagnostic: EnrichedDiagnostic,
  userId: string
): Promise<CascadedSaveResult> => {
  // Buscar organization_id do usuário
  const { data: orgMember, error: orgError } = await supabase
    .from('organization_members')
    .select('organization_id')
    .eq('user_id', userId)
    .single();

  if (orgError || !orgMember?.organization_id) {
    throw new Error('Usuário não está associado a uma organização');
  }

  const organizationId = orgMember.organization_id;

  // 1. Inserir relatório
  const { data: report, error: reportError } = await supabase
    .from('reports')
    .insert({
      user_id: userId,
      title: reportData.title,
      description: reportData.description,
      category: reportData.category,
      template_id: reportData.template_id,
      blocks: reportData.blocks,
      status: reportData.status || 'completed',
      data_json: {
        ...reportData.data_json,
        diagnostic: diagnostic,
        extracted_kpis: kpis
      }
    })
    .select()
    .single();

  if (reportError) {
    console.error('Erro ao salvar relatório:', reportError);
    throw new Error(`Erro ao salvar relatório: ${reportError.message}`);
  }

  // 2. Inserir métricas (user_metrics)
  let metricsCount = 0;
  if (kpis.length > 0) {
    const metricsData = kpis.map(kpi => ({
      organization_id: organizationId,
      report_id: report.id,
      kpi_code: kpi.code,
      value: kpi.value,
      unit: kpi.unit,
      benchmark_value: kpi.benchmarkValue,
      delta_percentage: kpi.deltaPercentage,
      extracted_confidence: kpi.confidence,
      source_block_index: kpi.sourceBlockIndex,
      reference_period: getCurrentPeriod()
    }));

    const { error: metricsError } = await supabase
      .from('user_metrics')
      .insert(metricsData);

    if (metricsError) {
      console.error('Erro ao salvar métricas:', metricsError);
      // Não falhar completamente, apenas logar
    } else {
      metricsCount = kpis.length;
    }
  }

  // 3. Criar ou atualizar desafio (user_challenges)
  let challengeCreated = false;
  let challengeId: string | undefined;

  try {
    // Verificar se já existe desafio ativo para este código
    const { data: existingChallenge } = await supabase
      .from('user_challenges')
      .select('id, status')
      .eq('organization_id', organizationId)
      .eq('challenge_code', diagnostic.challenge_code)
      .in('status', ['detected', 'acknowledged', 'in_progress'])
      .maybeSingle();

    if (existingChallenge) {
      // Atualizar desafio existente com novo relatório
      const { data: updatedChallenge, error: updateError } = await supabase
        .from('user_challenges')
        .update({
          detected_in_report_id: report.id,
          detected_at: new Date().toISOString(),
          confidence_score: diagnostic.confidence || 0.8,
          ai_diagnostic_data: diagnostic,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingChallenge.id)
        .select()
        .single();

      if (!updateError) {
        challengeId = updatedChallenge?.id;
        challengeCreated = true;
      }
    } else {
      // Criar novo desafio
      const { data: newChallenge, error: challengeError } = await supabase
        .from('user_challenges')
        .insert({
          organization_id: organizationId,
          challenge_code: diagnostic.challenge_code,
          title: diagnostic.title,
          description: diagnostic.description,
          severity: diagnostic.severity,
          status: 'detected',
          detected_in_report_id: report.id,
          suggested_lever_code: diagnostic.suggested_lever_code,
          confidence_score: diagnostic.confidence || 0.8,
          ai_diagnostic_data: diagnostic,
          expected_resolution_days: 30 // Default
        })
        .select()
        .single();

      if (challengeError) {
        console.error('Erro ao criar desafio:', challengeError);
      } else {
        challengeId = newChallenge?.id;
        challengeCreated = true;
      }
    }
  } catch (error) {
    console.error('Erro ao processar desafio:', error);
    // Não falhar completamente
  }

  return {
    report,
    metricsCount,
    challengeCreated,
    challengeId
  };
};

/**
 * Atualiza métricas de um relatório existente
 * Útil para reprocessamento ou edição
 */
export const updateReportMetrics = async (
  reportId: string,
  kpis: ExtractedKPI[]
): Promise<number> => {
  // Buscar relatório para pegar organization_id
  const { data: report } = await supabase
    .from('reports')
    .select('user_id')
    .eq('id', reportId)
    .single();

  if (!report) {
    throw new Error('Relatório não encontrado');
  }

  // Buscar organization_id
  const { data: orgMember } = await supabase
    .from('organization_members')
    .select('organization_id')
    .eq('user_id', report.user_id)
    .single();

  const organizationId = orgMember?.organization_id;

  // Deletar métricas antigas
  await supabase
    .from('user_metrics')
    .delete()
    .eq('report_id', reportId);

  // Inserir novas métricas
  if (kpis.length > 0) {
    const metricsData = kpis.map(kpi => ({
      organization_id: organizationId,
      report_id: reportId,
      kpi_code: kpi.code,
      value: kpi.value,
      unit: kpi.unit,
      benchmark_value: kpi.benchmarkValue,
      delta_percentage: kpi.deltaPercentage,
      extracted_confidence: kpi.confidence,
      source_block_index: kpi.sourceBlockIndex,
      reference_period: getCurrentPeriod()
    }));

    const { error } = await supabase
      .from('user_metrics')
      .insert(metricsData);

    if (error) {
      throw new Error(`Erro ao atualizar métricas: ${error.message}`);
    }
  }

  return kpis.length;
};

/**
 * Busca métricas de um relatório específico
 */
export const getReportMetrics = async (reportId: string): Promise<any[]> => {
  const { data, error } = await supabase
    .from('user_metrics')
    .select('*')
    .eq('report_id', reportId)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Erro ao buscar métricas: ${error.message}`);
  }

  return data || [];
};

/**
 * Retorna o período atual no formato YYYY-MM
 */
const getCurrentPeriod = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
};

/**
 * Calcula o impacto estimado baseado nos desafios ativos e alavancas sugeridas
 */
export const calculateEstimatedImpact = async (
  organizationId: string
): Promise<{ value: number; currency: string }> => {
  try {
    // Buscar desafios ativos com alavancas sugeridas
    const { data: challenges } = await supabase
      .from('user_challenges')
      .select('suggested_lever_code')
      .eq('organization_id', organizationId)
      .in('status', ['detected', 'acknowledged', 'in_progress'])
      .not('suggested_lever_code', 'is', null);

    if (!challenges?.length) {
      return { value: 0, currency: 'R$' };
    }

    // Extrair códigos únicos de alavancas
    const leverCodes = [...new Set(challenges.map(c => c.suggested_lever_code))];

    // Buscar impactos esperados das alavancas
    const { data: levers } = await supabase
      .from('library_levers')
      .select('expected_impact_description, impact_level')
      .in('code', leverCodes);

    if (!levers?.length) {
      return { value: 0, currency: 'R$' };
    }

    // Calcular impacto total (simplificado - extração de valores numéricos)
    let totalImpact = 0;

    levers.forEach(lever => {
      const impact = lever.expected_impact_description;
      
      // Tentar extrair valor monetário ou percentual
      const monetaryMatch = impact?.match(/R\$\s*([\d.,]+)\s*(mil|k|milhões?|mi)?/i);
      const percentMatch = impact?.match(/(\d+[.,]?\d*)\s*%/);

      if (monetaryMatch) {
        let value = parseFloat(monetaryMatch[1].replace(',', '.'));
        if (impact.toLowerCase().includes('milhão') || impact.toLowerCase().includes('mi')) {
          value *= 1000000;
        } else if (impact.toLowerCase().includes('mil') || impact.toLowerCase().includes('k')) {
          value *= 1000;
        }
        totalImpact += value;
      } else if (percentMatch && lever.impact_level === 'high') {
        // Se é percentual e alto impacto, estimar valor base (placeholder)
        totalImpact += 5000; // Valor base estimado
      }
    });

    return {
      value: Math.round(totalImpact),
      currency: 'R$'
    };
  } catch (error) {
    console.error('Erro ao calcular impacto:', error);
    return { value: 0, currency: 'R$' };
  }
};
