import { createClient } from '@/lib/supabase'
import { z } from 'zod'

// Schema Types
export const riskRegistrySchema = z.object({
  id: z.string().uuid(),
  organization_id: z.string().uuid(),
  kpi_id: z.string().uuid().nullable(),
  title: z.string(),
  description: z.string(),
  origin_type: z.enum(['internal', 'external']),
  category: z.enum([
    'strategic', 'operational', 'compliance', 'financial',
    'regulatory', 'economical', 'demand', 'sociopolitical', 'environmental'
  ]),
  likelihood: z.number().min(1).max(10),
  impact: z.number().min(1).max(10),
  risk_score: z.number(),
  status: z.enum(['identified', 'active', 'mitigated', 'occurred', 'archived']),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})

export type Risk = z.infer<typeof riskRegistrySchema>

export const riskMitigationSchema = z.object({
  id: z.string().uuid(),
  risk_id: z.string().uuid(),
  title: z.string(),
  action_plan: z.string(),
  responsible_id: z.string().uuid().nullable(),
  deadline: z.string().datetime().nullable(),
  status: z.enum(['pending', 'in_progress', 'completed', 'failed']),
  cost_estimated: z.number().nullable(),
  created_at: z.string().datetime(),
})

export type RiskMitigation = z.infer<typeof riskMitigationSchema>

export const riskCreateSchema = z.object({
  organization_id: z.string().uuid(),
  kpi_id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  origin_type: z.enum(['internal', 'external']),
  category: z.enum([
    'strategic', 'operational', 'compliance', 'financial',
    'regulatory', 'economical', 'demand', 'sociopolitical', 'environmental'
  ]),
  likelihood: z.number().min(1).max(10),
  impact: z.number().min(1).max(10),
})

export type RiskCreate = z.infer<typeof riskCreateSchema>

export const mitigationCreateSchema = z.object({
  risk_id: z.string().uuid(),
  title: z.string(),
  action_plan: z.string(),
  responsible_id: z.string().uuid().optional(),
  deadline: z.string().datetime().optional(),
  status: z.enum(['pending', 'in_progress', 'completed', 'failed']).default('pending'),
  cost_estimated: z.number().optional(),
})

export type MitigationCreate = z.infer<typeof mitigationCreateSchema>

export interface RiskMatrix {
  risks: Risk[]
  matrix: Array<Array<{
    x: number
    y: number
    risks: Risk[]
    count: number
    color: string
  }>>
  summary: {
    total: number
    byStatus: Record<string, number>
    byCategory: Record<string, number>
    highRisk: number
    mediumRisk: number
    lowRisk: number
  }
}

export class RiskService {
  private supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || '',
    import.meta.env.VITE_SUPABASE_ANON_KEY || ''
  )

  /**
   * Get all risks for an organization
   */
  async getRisks(organizationId: string): Promise<Risk[]> {
    const { data, error } = await this.supabase
      .from('risk_registry')
      .select('*')
      .eq('organization_id', organizationId)
      .order('risk_score', { ascending: false })

    if (error) {
      console.error('Error fetching risks:', error)
      throw new Error(`Failed to fetch risks: ${error.message}`)
    }

    return riskRegistrySchema.array().parse(data || [])
  }

  /**
   * Get risks by status
   */
  async getRisksByStatus(organizationId: string, status: string): Promise<Risk[]> {
    const { data, error } = await this.supabase
      .from('risk_registry')
      .select('*')
      .eq('organization_id', organizationId)
      .eq('status', status)
      .order('risk_score', { ascending: false })

    if (error) {
      console.error('Error fetching risks by status:', error)
      throw new Error(`Failed to fetch risks by status: ${error.message}`)
    }

    return riskRegistrySchema.array().parse(data || [])
  }

  /**
   * Get risk by ID
   */
  async getRiskById(id: string): Promise<Risk | null> {
    const { data, error } = await this.supabase
      .from('risk_registry')
      .select('*')
      .eq('id', id)
      .maybeSingle()

    if (error) {
      console.error('Error fetching risk:', error)
      throw new Error(`Failed to fetch risk: ${error.message}`)
    }

    return riskRegistrySchema.safeParse(data).success ? data : null
  }

  /**
   * Create new risk
   */
  async createRisk(risk: RiskCreate): Promise<Risk> {
    const { data, error } = await this.supabase
      .from('risk_registry')
      .insert(risk)
      .select()
      .single()

    if (error) {
      console.error('Error creating risk:', error)
      throw new Error(`Failed to create risk: ${error.message}`)
    }

    const parsed = riskRegistrySchema.safeParse(data)
    if (!parsed.success) {
      throw new Error(`Invalid risk data returned: ${parsed.error.message}`)
    }

    return parsed.data
  }

  /**
   * Update existing risk
   */
  async updateRisk(id: string, updates: Partial<RiskCreate>): Promise<Risk> {
    const { data, error } = await this.supabase
      .from('risk_registry')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating risk:', error)
      throw new Error(`Failed to update risk: ${error.message}`)
    }

    const parsed = riskRegistrySchema.safeParse(data)
    if (!parsed.success) {
      throw new Error(`Invalid risk data returned: ${parsed.error.message}`)
    }

    return parsed.data
  }

  /**
   * Update risk status
   */
  async updateRiskStatus(id: string, status: Risk['status']): Promise<Risk> {
    const { data, error } = await this.supabase
      .from('risk_registry')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating risk status:', error)
      throw new Error(`Failed to update risk status: ${error.message}`)
    }

    const parsed = riskRegistrySchema.safeParse(data)
    if (!parsed.success) {
      throw new Error(`Invalid risk data returned: ${parsed.error.message}`)
    }

    return parsed.data
  }

  /**
   * Delete risk
   */
  async deleteRisk(id: string): Promise<void> {
    const { error } = await this.supabase
      .from('risk_registry')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting risk:', error)
      throw new Error(`Failed to delete risk: ${error.message}`)
    }
  }

  /**
   * Get mitigations for a risk
   */
  async getMitigations(riskId: string): Promise<RiskMitigation[]> {
    const { data, error } = await this.supabase
      .from('risk_mitigations')
      .select('*')
      .eq('risk_id', riskId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching mitigations:', error)
      throw new Error(`Failed to fetch mitigations: ${error.message}`)
    }

    return riskMitigationSchema.array().parse(data || [])
  }

  /**
   * Get all mitigations for an organization
   */
  async getAllMitigations(organizationId: string): Promise<RiskMitigation[]> {
    // First get risk IDs for the organization
    const { data: riskData, error: riskError } = await this.supabase
      .from('risk_registry')
      .select('id')
      .eq('organization_id', organizationId)

    if (riskError) {
      console.error('Error fetching risk IDs:', riskError)
      throw new Error(`Failed to fetch risk IDs: ${riskError.message}`)
    }

    const riskIds = riskData?.map(r => r.id) || []

    // Then get mitigations for those risks
    const { data, error } = await this.supabase
      .from('risk_mitigations')
      .select(`
        *,
        risk_registry (
          id,
          title,
          status,
          risk_score
        )
      `)
      .in('risk_id', riskIds)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching all mitigations:', error)
      throw new Error(`Failed to fetch all mitigations: ${error.message}`)
    }

    return riskMitigationSchema.array().parse(data || [])
  }

  /**
   * Create new mitigation
   */
  async createMitigation(mitigation: MitigationCreate): Promise<RiskMitigation> {
    const { data, error } = await this.supabase
      .from('risk_mitigations')
      .insert(mitigation)
      .select()
      .single()

    if (error) {
      console.error('Error creating mitigation:', error)
      throw new Error(`Failed to create mitigation: ${error.message}`)
    }

    const parsed = riskMitigationSchema.safeParse(data)
    if (!parsed.success) {
      throw new Error(`Invalid mitigation data returned: ${parsed.error.message}`)
    }

    return parsed.data
  }

  /**
   * Update mitigation
   */
  async updateMitigation(id: string, updates: Partial<MitigationCreate>): Promise<RiskMitigation> {
    const { data, error } = await this.supabase
      .from('risk_mitigations')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating mitigation:', error)
      throw new Error(`Failed to update mitigation: ${error.message}`)
    }

    const parsed = riskMitigationSchema.safeParse(data)
    if (!parsed.success) {
      throw new Error(`Invalid mitigation data returned: ${parsed.error.message}`)
    }

    return parsed.data
  }

  /**
   * Update mitigation status
   */
  async updateMitigationStatus(id: string, status: RiskMitigation['status']): Promise<RiskMitigation> {
    const { data, error } = await this.supabase
      .from('risk_mitigations')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating mitigation status:', error)
      throw new Error(`Failed to update mitigation status: ${error.message}`)
    }

    const parsed = riskMitigationSchema.safeParse(data)
    if (!parsed.success) {
      throw new Error(`Invalid mitigation data returned: ${parsed.error.message}`)
    }

    return parsed.data
  }

  /**
   * Delete mitigation
   */
  async deleteMitigation(id: string): Promise<void> {
    const { error } = await this.supabase
      .from('risk_mitigations')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting mitigation:', error)
      throw new Error(`Failed to delete mitigation: ${error.message}`)
    }
  }

  /**
   * Generate risk matrix
   */
  async generateRiskMatrix(organizationId: string): Promise<RiskMatrix> {
    const risks = await this.getRisks(organizationId)
    
    // Create 10x10 matrix (impact x likelihood)
    const matrix = Array(10).fill(null).map((_, i) => 
      Array(10).fill(null).map((_, j) => {
        const impact = j + 1
        const likelihood = 10 - i
        const cellRisks = risks.filter(r => r.impact === impact && r.likelihood === likelihood)
        
        // Determine color based on risk score
        let color = 'bg-gray-50'
        if (cellRisks.length > 0) {
          const avgScore = cellRisks.reduce((sum, r) => sum + r.risk_score, 0) / cellRisks.length
          if (avgScore >= 70) color = 'bg-red-500'
          else if (avgScore >= 50) color = 'bg-orange-400'
          else if (avgScore >= 30) color = 'bg-yellow-300'
          else color = 'bg-green-200'
        }
        
        return {
          x: impact,
          y: likelihood,
          risks: cellRisks,
          count: cellRisks.length,
          color
        }
      })
    )

    // Generate summary
    const summary = {
      total: risks.length,
      byStatus: risks.reduce((acc, risk) => {
        acc[risk.status] = (acc[risk.status] || 0) + 1
        return acc
      }, {} as Record<string, number>),
      byCategory: risks.reduce((acc, risk) => {
        acc[risk.category] = (acc[risk.category] || 0) + 1
        return acc
      }, {} as Record<string, number>),
      highRisk: risks.filter(r => r.risk_score >= 70).length,
      mediumRisk: risks.filter(r => r.risk_score >= 30 && r.risk_score < 70).length,
      lowRisk: risks.filter(r => r.risk_score < 30).length
    }

    return {
      risks,
      matrix,
      summary
    }
  }

  /**
   * Get risk alerts
   */
  async getRiskAlerts(organizationId: string): Promise<Array<{
    risk: Risk
    alertLevel: 'critical' | 'high' | 'medium' | 'low'
    message: string
    recommendedActions: string[]
  }>> {
    const risks = await this.getRisksByStatus(organizationId, 'active')
    const alerts = []

    for (const risk of risks) {
      let alertLevel: 'critical' | 'high' | 'medium' | 'low'
      let message = ''
      let recommendedActions: string[] = []

      if (risk.risk_score >= 80) {
        alertLevel = 'critical'
        message = `Risco crítico: ${risk.title}`
        recommendedActions = [
          'Ação imediata necessária',
          'Comunicar stakeholders',
          'Implementar plano de contingência'
        ]
      } else if (risk.risk_score >= 60) {
        alertLevel = 'high'
        message = `Risco alto: ${risk.title}`
        recommendedActions = [
          'Monitorar closely',
          'Preparar plano de ação',
          'Alocar recursos'
        ]
      } else if (risk.risk_score >= 40) {
        alertLevel = 'medium'
        message = `Risco médio: ${risk.title}`
        recommendedActions = [
          'Manter vigilância',
          'Revisar periodicamente',
          'Documentar planos'
        ]
      } else {
        alertLevel = 'low'
        message = `Risco baixo: ${risk.title}`
        recommendedActions = [
          'Monitorar rotineiramente',
          'Manter registros',
          'Revisar anualmente'
        ]
      }

      alerts.push({
        risk,
        alertLevel,
        message,
        recommendedActions
      })
    }

    return alerts
  }

  /**
   * Get risk dashboard data
   */
  async getRiskDashboard(organizationId: string): Promise<{
    summary: RiskMatrix['summary']
    recentRisks: Risk[]
    upcomingDeadlines: Array<{
      mitigation: RiskMitigation
      risk: Risk
      daysUntilDeadline: number
    }>
    alerts: Array<{
      risk: Risk
      alertLevel: 'critical' | 'high' | 'medium' | 'low'
      message: string
    }>
  }> {
    const matrix = await this.generateRiskMatrix(organizationId)
    const allMitigations = await this.getAllMitigations(organizationId)
    
    // Get recent risks (last 30 days)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    
    const recentRisks = matrix.risks.filter(risk => 
      new Date(risk.created_at) >= thirtyDaysAgo
    )

    // Get upcoming deadlines (next 30 days)
    const thirtyDaysFromNow = new Date()
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30)
    
    const upcomingDeadlines = allMitigations
      .filter(m => 
        m.deadline && 
        new Date(m.deadline) >= new Date() && 
        new Date(m.deadline) <= thirtyDaysFromNow &&
        m.status !== 'completed'
      )
      .map(m => {
        const risk = matrix.risks.find(r => r.id === m.risk_id)
        const daysUntilDeadline = m.deadline 
          ? Math.ceil((new Date(m.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
          : 0
        
        return {
          mitigation: m,
          risk: risk || null,
          daysUntilDeadline
        }
      })
      .sort((a, b) => a.daysUntilDeadline - b.daysUntilDeadline)

    // Get alerts
    const alerts = await this.getRiskAlerts(organizationId)

    return {
      summary: matrix.summary,
      recentRisks,
      upcomingDeadlines,
      alerts: alerts.map(a => ({
        risk: a.risk,
        alertLevel: a.alertLevel,
        message: a.message
      }))
    }
  }
}

// Export singleton instance
export const riskService = new RiskService()
