/**
 * Domain Entity for Alerts
 * Represents business alerts triggered by KPI thresholds
 */

export interface AlertEntity {
  readonly id: string;
  readonly kpi: string;
  readonly level: 'critical' | 'warning' | 'info';
  readonly title: string;
  readonly description: string;
  readonly recommendation: string;
  readonly currentValue: number;
  readonly threshold: number;
  readonly triggeredAt: Date;
  readonly acknowledgedAt?: Date;
  readonly resolvedAt?: Date;
}

export class AlertEntityFactory {
  static critical(
    kpi: string,
    title: string,
    description: string,
    currentValue: number,
    threshold: number,
    recommendation?: string
  ): AlertEntity {
    return {
      id: crypto.randomUUID(),
      kpi,
      level: 'critical',
      title,
      description,
      recommendation: recommendation || this.getDefaultRecommendation(kpi, 'critical'),
      currentValue,
      threshold,
      triggeredAt: new Date(),
    };
  }

  static warning(
    kpi: string,
    title: string,
    description: string,
    currentValue: number,
    threshold: number,
    recommendation?: string
  ): AlertEntity {
    return {
      id: crypto.randomUUID(),
      kpi,
      level: 'warning',
      title,
      description,
      recommendation: recommendation || this.getDefaultRecommendation(kpi, 'warning'),
      currentValue,
      threshold,
      triggeredAt: new Date(),
    };
  }

  static info(
    kpi: string,
    title: string,
    description: string,
    currentValue: number,
    threshold: number,
    recommendation?: string
  ): AlertEntity {
    return {
      id: crypto.randomUUID(),
      kpi,
      level: 'info',
      title,
      description,
      recommendation: recommendation || this.getDefaultRecommendation(kpi, 'info'),
      currentValue,
      threshold,
      triggeredAt: new Date(),
    };
  }

  private static getDefaultRecommendation(kpi: string, level: string): string {
    const recommendations: Record<string, Record<string, string>> = {
      netProfitMargin: {
        critical: 'Reduza custos imediatamente e revise precificação. Margem abaixo de 5% é insustentável.',
        warning: 'Analise estrutura de custos e busque eficiências operacionais.',
        info: 'Monitore tendências de margem para manter competitividade.',
      },
      cashBurnRate: {
        critical: 'Corte despesas não essenciais imediatamente. Runway crítico!',
        warning: 'Revise orçamento e priorize gastos essenciais.',
        info: 'Otimize fluxo de caixa para melhorar eficiência.',
      },
      runway: {
        critical: 'Busque capital de emergência imediatamente! Risco de insolvência.',
        warning: 'Acelere esforços de vendas e reduza custos.',
        info: 'Mantenha runway acima de 6 meses para segurança.',
      },
      salesConversion: {
        critical: 'Revise processo de vendas e treinamento da equipe.',
        warning: 'Analise funil e identifique gargalos de conversão.',
        info: 'Continue otimizando processo para melhorar conversão.',
      },
      customerAcquisitionCost: {
        critical: 'Reduza investimento em marketing e foque em canais eficientes.',
        warning: 'Otimize campanhas e melhore segmentação.',
        info: 'Monitore CAC para manter aquisição eficiente.',
      },
    };

    return recommendations[kpi]?.[level] || 'Analise este indicador e tome ações corretivas.';
  }

  static acknowledge(alert: AlertEntity): AlertEntity {
    return {
      ...alert,
      acknowledgedAt: new Date(),
    };
  }

  static resolve(alert: AlertEntity): AlertEntity {
    return {
      ...alert,
      resolvedAt: new Date(),
    };
  }
}
