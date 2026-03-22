import { KPIData, Challenge, DetectionResult } from '@/types/strategic';

class DetectionService {
  private static instance: DetectionService;

  static getInstance(): DetectionService {
    if (!DetectionService.instance) {
      DetectionService.instance = new DetectionService();
    }
    return DetectionService.instance;
  }

  // 15 regras de detecção baseadas em thresholds
  private detectionRules = [
    {
      id: 'cash_flow_crunch',
      name: 'Cash Flow Crunch',
      description: 'O dinheiro não chega ao fim do mês',
      kpis: ['RUNWAY', 'BURN_RATE', 'DAYS_TO_RECEIVE'],
      rules: [
        { kpi: 'RUNWAY', operator: '<=', value: 1, weight: 0.4 },
        { kpi: 'BURN_RATE', operator: '>', value: 10000, weight: 0.3 },
        { kpi: 'DAYS_TO_RECEIVE', operator: '>', value: 45, weight: 0.3 }
      ]
    },
    {
      id: 'inefficient_sales',
      name: 'Inefficient Sales Machine',
      description: 'Esforço de vendas alto para pouco retorno',
      kpis: ['LTV_CAC_RATIO', 'SALES_CYCLE_DAYS', 'CAC'],
      rules: [
        { kpi: 'LTV_CAC_RATIO', operator: '<=', value: 1.5, weight: 0.4 },
        { kpi: 'SALES_CYCLE_DAYS', operator: '>', value: 90, weight: 0.3 },
        { kpi: 'CAC', operator: '>', value: 500, weight: 0.3 }
      ]
    },
    {
      id: 'commodity_trap',
      name: 'Commodity Trap',
      description: 'Guerra de preços e margens espremidas',
      kpis: ['NET_PROFIT_MARG', 'CONTRIB_MARGIN'],
      rules: [
        { kpi: 'NET_PROFIT_MARG', operator: '<=', value: 0, weight: 0.5 },
        { kpi: 'CONTRIB_MARGIN', operator: '<=', value: 30, weight: 0.5 }
      ]
    },
    {
      id: 'growth_stagnation',
      name: 'Growth Stagnation',
      description: 'Crescimento estagnado ou em declínio',
      kpis: ['CUSTOMER_LTV', 'CHURN_RATE'],
      rules: [
        { kpi: 'CUSTOMER_LTV', operator: '<=', value: 1000, weight: 0.4 },
        { kpi: 'CHURN_RATE', operator: '>', value: 10, weight: 0.6 }
      ]
    },
    {
      id: 'operational_inefficiency',
      name: 'Operational Inefficiency',
      description: 'Ineficiência operacional afetando produtividade',
      kpis: ['PRODUCTIVITY_PER_EMPLOYEE'],
      rules: [
        { kpi: 'PRODUCTIVITY_PER_EMPLOYEE', operator: '<=', value: 50000, weight: 1.0 }
      ]
    }
  ];

  detectSymptoms(kpis: KPIData[]): DetectionResult {
    const detectedChallenges: Challenge[] = [];
    
    for (const rule of this.detectionRules) {
      const score = this.calculateRuleScore(rule, kpis);
      
      if (score >= 0.5) { // Threshold mínimo para detecção
        const severity = this.calculateSeverity(score);
        
        detectedChallenges.push({
          id: rule.id,
          name: rule.name,
          description: rule.description,
          severity,
          detectedKPIs: rule.kpis,
          confidence: score
        });
      }
    }

    const overallHealth = this.calculateOverallHealth(detectedChallenges);
    const summary = this.generateSummary(detectedChallenges, overallHealth);

    return {
      challenges: detectedChallenges,
      overallHealth,
      summary
    };
  }

  private calculateRuleScore(rule: any, kpis: KPIData[]): number {
    let totalScore = 0;
    let totalWeight = 0;

    for (const ruleCondition of rule.rules) {
      const kpi = kpis.find(k => k.code === ruleCondition.kpi);
      
      if (kpi) {
        const conditionMet = this.evaluateCondition(kpi.value, ruleCondition.operator, ruleCondition.value);
        totalScore += conditionMet ? ruleCondition.weight : 0;
        totalWeight += ruleCondition.weight;
      }
    }

    return totalWeight > 0 ? totalScore / totalWeight : 0;
  }

  private evaluateCondition(value: number, operator: string, threshold: number): boolean {
    switch (operator) {
      case '<=': return value <= threshold;
      case '<': return value < threshold;
      case '>=': return value >= threshold;
      case '>': return value > threshold;
      case '==': return value === threshold;
      default: return false;
    }
  }

  private calculateSeverity(score: number): 'critical' | 'warning' | 'info' {
    if (score >= 0.8) return 'critical';
    if (score >= 0.6) return 'warning';
    return 'info';
  }

  private calculateOverallHealth(challenges: Challenge[]): 'critical' | 'warning' | 'good' {
    const criticalCount = challenges.filter(c => c.severity === 'critical').length;
    const warningCount = challenges.filter(c => c.severity === 'warning').length;
    
    if (criticalCount >= 2) return 'critical';
    if (criticalCount >= 1 || warningCount >= 3) return 'warning';
    return 'good';
  }

  private generateSummary(challenges: Challenge[], overallHealth: string): string {
    const criticalCount = challenges.filter(c => c.severity === 'critical').length;
    const warningCount = challenges.filter(c => c.severity === 'warning').length;
    
    switch (overallHealth) {
      case 'critical':
        return `Situação crítica: ${criticalCount} desafio(s) crítico(s) detectado(s). Ação imediata necessária.`;
      case 'warning':
        return `Atenção requerida: ${criticalCount} desafio(s) crítico(s) e ${warningCount} desafio(s) de alerta.`;
      case 'good':
        return 'Saúde empresarial boa. Monitoramento contínuo recomendado.';
      default:
        return 'Status desconhecido. Verifique os dados.';
    }
  }

  // Método para obter recomendações baseadas nos desafios detectados
  getRecommendations(challenges: Challenge[]): string[] {
    const recommendations: string[] = [];
    
    for (const challenge of challenges) {
      switch (challenge.id) {
        case 'cash_flow_crunch':
          recommendations.push('Implemente controle rigoroso de fluxo de caixa');
          recommendations.push('Renegocie prazos de pagamento com fornecedores');
          recommendations.push('Acelere cobrança de clientes inadimplentes');
          break;
        case 'inefficient_sales':
          recommendations.push('Revise e otimize seu processo de vendas');
          recommendations.push('Qualifique melhor seus leads');
          recommendations.push('Treine a equipe em técnicas de fechamento');
          break;
        case 'commodity_trap':
          recommendations.push('Diferencie seu produto/serviço');
          recommendations.push('Foque em valor em vez de preço');
          recommendations.push('Desenvolva proposta de valor única');
          break;
        case 'growth_stagnation':
          recommendations.push('Invista em retenção de clientes');
          recommendations.push('Explore novos mercados ou segmentos');
          recommendations.push('Inove em produtos ou serviços');
          break;
        case 'operational_inefficiency':
          recommendations.push('Otimize processos operacionais');
          recommendations.push('Invista em tecnologia e automação');
          recommendations.push('Treine e capacite sua equipe');
          break;
      }
    }
    
    return [...new Set(recommendations)]; // Remove duplicatas
  }
}

export default DetectionService;
