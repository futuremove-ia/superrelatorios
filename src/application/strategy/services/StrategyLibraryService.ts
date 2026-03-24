/**
 * SuperRelatórios - Strategy Library Service
 * Serviço unificado para gerenciar todas as bibliotecas estratégicas
 * Fase 3: Integração Frontend-Backend
 */

import { supabase } from '@/lib/supabase';
import { 
  KPI, 
  Challenge, 
  Goal, 
  Lever, 
  Action, 
  StrategicTemplate,
  StrategyFocus,
  UserActionHistory
} from '@/types/strategy';

export interface KPIFilters {
  domain?: string;
  is_active?: boolean;
  search?: string;
}

export interface ChallengeFilters {
  domain?: string;
  severity?: number;
  search?: string;
}

export interface TemplateFilters {
  industry?: string;
  category?: string;
  is_public?: boolean;
  search?: string;
}

export interface ActionFilters {
  lever_id?: string;
  quick_win?: boolean;
  priority?: number;
}

/**
 * Serviço principal para gerenciar bibliotecas estratégicas
 */
export class StrategyLibraryService {
  
  // =====================================================
  // KPI MASTER LIBRARY
  // =====================================================
  
  /**
   * Obter todos os KPIs com filtros opcionais
   */
  static async getKPIs(filters?: KPIFilters): Promise<KPI[]> {
    try {
      let query = supabase
        .from('kpi_master_unified')
        .select('*')
        .eq('is_active', filters?.is_active ?? true)
        .order('domain', { ascending: true })
        .order('title', { ascending: true });

      if (filters?.domain) {
        query = query.eq('domain', filters.domain);
      }

      if (filters?.search) {
        query = query.or(`title.ilike.%${filters.search}%,code.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching KPIs:', error);
        throw new Error(`Failed to fetch KPIs: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Unexpected error in getKPIs:', err);
      throw err;
    }
  }

  /**
   * Obter KPI por código
   */
  static async getKPIByCode(code: string): Promise<KPI | null> {
    try {
      const { data, error } = await supabase
        .from('kpi_master_unified')
        .select('*')
        .eq('code', code.toUpperCase())
        .eq('is_active', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // No rows returned
        }
        throw new Error(`Failed to fetch KPI: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in getKPIByCode:', err);
      throw err;
    }
  }

  /**
   * Obter KPIs por domínio
   */
  static async getKPIsByDomain(domain: string): Promise<KPI[]> {
    return this.getKPIs({ domain });
  }

  // =====================================================
  // LIBRARY CHALLENGES
  // =====================================================
  
  /**
   * Obter todos os desafios com filtros opcionais
   */
  static async getChallenges(filters?: ChallengeFilters): Promise<Challenge[]> {
    try {
      let query = supabase
        .from('library_challenges')
        .select('*')
        .order('severity_default', { ascending: false })
        .order('title', { ascending: true });

      if (filters?.domain) {
        query = query.eq('domain', filters.domain);
      }

      if (filters?.severity) {
        query = query.eq('severity_default', filters.severity);
      }

      if (filters?.search) {
        query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(`Failed to fetch challenges: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getChallenges:', err);
      throw err;
    }
  }

  /**
   * Obter desafio por código
   */
  static async getChallengeByCode(code: string): Promise<Challenge | null> {
    try {
      const { data, error } = await supabase
        .from('library_challenges')
        .select('*')
        .eq('code', code)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to fetch challenge: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in getChallengeByCode:', err);
      throw err;
    }
  }

  // =====================================================
  // LIBRARY GOALS
  // =====================================================
  
  /**
   * Obter todos os objetivos
   */
  static async getGoals(challengeId?: string): Promise<Goal[]> {
    try {
      let query = supabase
        .from('library_goals')
        .select('*')
        .order('title', { ascending: true });

      if (challengeId) {
        // Se challengeId fornecido, buscar goals relacionados através de strategic_templates
        const { data: templates } = await supabase
          .from('strategic_templates')
          .select('recommended_goal_id')
          .eq('challenge_id', challengeId);

        if (templates && templates.length > 0) {
          const goalIds = templates.map(t => t.recommended_goal_id);
          query = query.in('id', goalIds);
        }
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(`Failed to fetch goals: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getGoals:', err);
      throw err;
    }
  }

  /**
   * Obter objetivo por código
   */
  static async getGoalByCode(code: string): Promise<Goal | null> {
    try {
      const { data, error } = await supabase
        .from('library_goals')
        .select('*')
        .eq('code', code)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to fetch goal: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in getGoalByCode:', err);
      throw err;
    }
  }

  // =====================================================
  // LIBRARY LEVERS
  // =====================================================
  
  /**
   * Obter todas as alavancas com filtros opcionais
   */
  static async getLevers(challengeId?: string, goalId?: string): Promise<Lever[]> {
    try {
      let query = supabase
        .from('library_levers')
        .select('*')
        .eq('is_active', true)
        .order('category', { ascending: true })
        .order('title', { ascending: true });

      if (challengeId) {
        // Buscar levers relacionados ao challenge
        const { data: mappings } = await supabase
          .from('lever_challenge_mapping')
          .select('lever_id, priority')
          .eq('challenge_id', challengeId)
          .order('priority', { ascending: true });

        if (mappings && mappings.length > 0) {
          const leverIds = mappings.map(m => m.lever_id);
          query = query.in('id', leverIds);
        }
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(`Failed to fetch levers: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getLevers:', err);
      throw err;
    }
  }

  /**
   * Obter alavanca por código
   */
  static async getLeverByCode(code: string): Promise<Lever | null> {
    try {
      const { data, error } = await supabase
        .from('library_levers')
        .select('*')
        .eq('code', code)
        .eq('is_active', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to fetch lever: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in getLeverByCode:', err);
      throw err;
    }
  }

  // =====================================================
  // LIBRARY ACTIONS
  // =====================================================
  
  /**
   * Obter ações com filtros opcionais
   */
  static async getActions(filters?: ActionFilters): Promise<Action[]> {
    try {
      let query = supabase
        .from('library_actions')
        .select(`
          *,
          library_levers!inner (
            id,
            code,
            title,
            category,
            target_kpi_code
          )
        `)
        .eq('is_active', true)
        .order('priority_score', { ascending: false })
        .order('title', { ascending: true });

      if (filters?.lever_id) {
        query = query.eq('lever_id', filters.lever_id);
      }

      if (filters?.quick_win !== undefined) {
        query = query.eq('quick_win', filters.quick_win);
      }

      if (filters?.priority) {
        query = query.eq('priority_score', filters.priority);
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(`Failed to fetch actions: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getActions:', err);
      throw err;
    }
  }

  /**
   * Obter ações recomendadas para um desafio
   */
  static async getRecommendedActionsForChallenge(
    challengeId: string,
    organizationId?: string
  ): Promise<Action[]> {
    try {
      const { data, error } = await supabase
        .rpc('get_recommended_actions_for_challenge', {
          p_challenge_id: challengeId,
          p_organization_id: organizationId || null
        });

      if (error) {
        throw new Error(`Failed to fetch recommended actions: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getRecommendedActionsForChallenge:', err);
      throw err;
    }
  }

  // =====================================================
  // STRATEGIC TEMPLATES
  // =====================================================
  
  /**
   * Obter templates estratégicos
   */
  static async getTemplates(filters?: TemplateFilters): Promise<StrategicTemplate[]> {
    try {
      let query = supabase
        .from('strategic_templates')
        .select('*')
        .eq('is_active', true)
        .order('usage_count', { ascending: false })
        .order('rating', { ascending: false });

      if (filters?.industry) {
        query = query.eq('industry', filters.industry);
      }

      if (filters?.category) {
        query = query.eq('category', filters.category);
      }

      if (filters?.is_public !== undefined) {
        query = query.eq('is_public', filters.is_public);
      }

      if (filters?.search) {
        query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%,tags.cs.{${filters.search}}`);
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(`Failed to fetch templates: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getTemplates:', err);
      throw err;
    }
  }

  /**
   * Obter templates populares
   */
  static async getPopularTemplates(limit: number = 10): Promise<StrategicTemplate[]> {
    try {
      const { data, error } = await supabase
        .from('popular_templates')
        .select('*')
        .limit(limit);

      if (error) {
        throw new Error(`Failed to fetch popular templates: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getPopularTemplates:', err);
      throw err;
    }
  }

  /**
   * Obter templates por indústria
   */
  static async getTemplatesByIndustry(industry: string): Promise<StrategicTemplate[]> {
    return this.getTemplates({ industry });
  }

  /**
   * Sugerir template para upload
   */
  static async suggestTemplateForUpload(
    fileStructure: any,
    industryHint?: string,
    organizationId?: string
  ): Promise<StrategicTemplate[]> {
    try {
      const { data, error } = await supabase
        .rpc('suggest_template_for_upload', {
          p_file_structure: fileStructure,
          p_industry_hint: industryHint || null,
          p_organization_id: organizationId || null
        });

      if (error) {
        throw new Error(`Failed to suggest template: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in suggestTemplateForUpload:', err);
      throw err;
    }
  }

  /**
   * Registrar uso de template
   */
  static async recordTemplateUsage(
    templateId: string,
    organizationId: string,
    rating?: number
  ): Promise<void> {
    try {
      const { error } = await supabase
        .rpc('record_template_usage', {
          p_template_id: templateId,
          p_organization_id: organizationId,
          p_rating: rating || null
        });

      if (error) {
        throw new Error(`Failed to record template usage: ${error.message}`);
      }
    } catch (err) {
      console.error('Error in recordTemplateUsage:', err);
      throw err;
    }
  }

  // =====================================================
  // USER STRATEGY FOCUS
  // =====================================================
  
  /**
   * Obter foco estratégico atual da organização
   */
  static async getCurrentStrategyFocus(organizationId: string): Promise<StrategyFocus | null> {
    try {
      const { data, error } = await supabase
        .from('user_strategy_focus')
        .select(`
          *,
          library_challenges!inner (
            id,
            code,
            title,
            description,
            domain,
            severity_default
          ),
          library_goals!inner (
            id,
            code,
            title,
            description,
            success_definition,
            suggested_timeframe_days
          )
        `)
        .eq('organization_id', organizationId)
        .eq('status', 'active')
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to fetch strategy focus: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in getCurrentStrategyFocus:', err);
      throw err;
    }
  }

  /**
   * Definir foco estratégico
   */
  static async setStrategyFocus(
    organizationId: string,
    challengeId: string,
    goalId: string,
    contextNotes?: string
  ): Promise<StrategyFocus> {
    try {
      // Primeiro, desativar focos anteriores
      await supabase
        .from('user_strategy_focus')
        .update({ status: 'paused' })
        .eq('organization_id', organizationId)
        .eq('status', 'active');

      // Criar novo foco
      const { data, error } = await supabase
        .from('user_strategy_focus')
        .insert({
          organization_id: organizationId,
          challenge_id: challengeId,
          goal_id: goalId,
          status: 'active',
          context_notes: contextNotes,
          progress_percentage: 0
        })
        .select(`
          *,
          library_challenges!inner (
            id,
            code,
            title,
            description,
            domain,
            severity_default
          ),
          library_goals!inner (
            id,
            code,
            title,
            description,
            success_definition,
            suggested_timeframe_days
          )
        `)
        .single();

      if (error) {
        throw new Error(`Failed to set strategy focus: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in setStrategyFocus:', err);
      throw err;
    }
  }

  // =====================================================
  // USER ACTION HISTORY
  // =====================================================
  
  /**
   * Obter histórico de ações
   */
  static async getActionHistory(
    organizationId: string,
    status?: string
  ): Promise<UserActionHistory[]> {
    try {
      let query = supabase
        .from('user_action_history')
        .select(`
          *,
          library_actions!inner (
            id,
            code,
            title,
            description,
            step_by_step,
            estimated_effort_hours,
            quick_win
          ),
          library_levers!inner (
            id,
            code,
            title,
            category
          ),
          library_challenges!inner (
            id,
            code,
            title,
            domain
          ),
          library_goals!inner (
            id,
            code,
            title,
            success_definition
          )
        `)
        .eq('organization_id', organizationId)
        .order('created_at', { ascending: false });

      if (status) {
        query = query.eq('status', status);
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(`Failed to fetch action history: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getActionHistory:', err);
      throw err;
    }
  }

  /**
   * Registrar sugestão de ação
   */
  static async recordActionSuggestion(
    organizationId: string,
    userId: string,
    actionId: string,
    challengeId: string,
    goalId: string
  ): Promise<string> {
    try {
      const { data, error } = await supabase
        .rpc('record_action_suggestion', {
          p_organization_id: organizationId,
          p_user_id: userId,
          p_action_id: actionId,
          p_challenge_id: challengeId,
          p_goal_id: goalId
        });

      if (error) {
        throw new Error(`Failed to record action suggestion: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in recordActionSuggestion:', err);
      throw err;
    }
  }

  /**
   * Atualizar status de ação
   */
  static async updateActionStatus(
    actionHistoryId: string,
    status: 'suggested' | 'accepted' | 'in_progress' | 'completed' | 'abandoned' | 'failed',
    notes?: string,
    resultsSummary?: string,
    effectivenessRating?: number
  ): Promise<void> {
    try {
      const updateData: any = {
        status,
        updated_at: new Date().toISOString()
      };

      if (status === 'in_progress') {
        updateData.started_at = new Date().toISOString();
      }

      if (status === 'completed') {
        updateData.completed_at = new Date().toISOString();
      }

      if (notes) {
        updateData.notes = notes;
      }

      if (resultsSummary) {
        updateData.results_summary = resultsSummary;
      }

      if (effectivenessRating) {
        updateData.effectiveness_rating = effectivenessRating;
      }

      const { error } = await supabase
        .from('user_action_history')
        .update(updateData)
        .eq('id', actionHistoryId);

      if (error) {
        throw new Error(`Failed to update action status: ${error.message}`);
      }
    } catch (err) {
      console.error('Error in updateActionStatus:', err);
      throw err;
    }
  }

  // =====================================================
  // UTILITÁRIOS
  // =====================================================
  
  /**
   * Obter resumo estratégico completo
   */
  static async getStrategicSummary(organizationId: string): Promise<any> {
    try {
      const { data, error } = await supabase
        .from('strategic_dashboard')
        .select('*')
        .eq('organization_id', organizationId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to fetch strategic summary: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in getStrategicSummary:', err);
      throw err;
    }
  }

  /**
   * Detectar desafios automaticamente
   */
  static async detectChallenges(organizationId: string): Promise<Challenge[]> {
    try {
      const { data, error } = await supabase
        .rpc('detect_challenges_auto', {
          p_organization_id: organizationId
        });

      if (error) {
        throw new Error(`Failed to detect challenges: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in detectChallenges:', err);
      throw err;
    }
  }

  /**
   * Calcular progresso estratégico
   */
  static async calculateStrategyProgress(
    focusId: string,
    currentReportId: string
  ): Promise<number> {
    try {
      const { data, error } = await supabase
        .rpc('calculate_strategy_progress', {
          p_focus_id: focusId,
          p_current_report_id: currentReportId
        });

      if (error) {
        throw new Error(`Failed to calculate strategy progress: ${error.message}`);
      }

      return data || 0;
    } catch (err) {
      console.error('Error in calculateStrategyProgress:', err);
      throw err;
    }
  }
}
