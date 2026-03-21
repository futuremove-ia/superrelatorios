import { useTranslation } from 'react-i18next';

// Hook especializado para internacionalização do módulo estratégico
export const useStrategyTranslation = () => {
  const { t } = useTranslation();

  return {
    // Challenges
    getChallengeTitle: (code: string) => {
      const titles: Record<string, string> = {
        'LOW_PROFITABILITY': t('strategy.challenges.LOW_PROFITABILITY.title'),
        'CASH_SHORTAGE': t('strategy.challenges.CASH_SHORTAGE.title'),
        'HIGH_FIXED_COSTS': t('strategy.challenges.HIGH_FIXED_COSTS.title'),
        'LATE_RECEIVABLES': t('strategy.challenges.LATE_RECEIVABLES.title'),
        'CUSTOMER_LOSS': t('strategy.challenges.CUSTOMER_LOSS.title'),
        'LOW_SALES_CONVERSION': t('strategy.challenges.LOW_SALES_CONVERSION.title'),
        'HIGH_ACQUISITION_COST': t('strategy.challenges.HIGH_ACQUISITION_COST.title'),
        'STOCK_STAGNATION': t('strategy.challenges.STOCK_STAGNATION.title'),
        'DELIVERY_DELAY': t('strategy.challenges.DELIVERY_DELAY.title'),
      };
      return titles[code] || code;
    },

    getChallengeDescription: (code: string) => {
      const descriptions: Record<string, string> = {
        'LOW_PROFITABILITY': t('strategy.challenges.LOW_PROFITABILITY.short_description'),
        'CASH_SHORTAGE': t('strategy.challenges.CASH_SHORTAGE.short_description'),
        'HIGH_FIXED_COSTS': t('strategy.challenges.HIGH_FIXED_COSTS.short_description'),
        'LATE_RECEIVABLES': t('strategy.challenges.LATE_RECEIVABLES.short_description'),
        'CUSTOMER_LOSS': t('strategy.challenges.CUSTOMER_LOSS.short_description'),
        'LOW_SALES_CONVERSION': t('strategy.challenges.LOW_SALES_CONVERSION.short_description'),
        'HIGH_ACQUISITION_COST': t('strategy.challenges.HIGH_ACQUISITION_COST.short_description'),
        'STOCK_STAGNATION': t('strategy.challenges.STOCK_STAGNATION.short_description'),
        'DELIVERY_DELAY': t('strategy.challenges.DELIVERY_DELAY.short_description'),
      };
      return descriptions[code] || '';
    },

    // Goals
    getGoalTitle: (code: string) => {
      const titles: Record<string, string> = {
        'INCREASE_PROFIT': t('strategy.goals.INCREASE_PROFIT.title'),
        'BALANCE_CASH_FLOW': t('strategy.goals.BALANCE_CASH_FLOW.title'),
        'REDUCE_EXPENSES': t('strategy.goals.REDUCE_EXPENSES.title'),
        'ACCELERATE_RECEIPTS': t('strategy.goals.ACCELERATE_RECEIPTS.title'),
        'IMPROVE_CONVERSION': t('strategy.goals.IMPROVE_CONVERSION.title'),
        'RETAIN_CUSTOMERS': t('strategy.goals.RETAIN_CUSTOMERS.title'),
        'OPTIMIZE_STOCK': t('strategy.goals.OPTIMIZE_STOCK.title'),
        'FAST_OPERATION': t('strategy.goals.FAST_OPERATION.title'),
      };
      return titles[code] || code;
    },

    getGoalDescription: (code: string) => {
      const descriptions: Record<string, string> = {
        'INCREASE_PROFIT': t('strategy.goals.INCREASE_PROFIT.description'),
        'BALANCE_CASH_FLOW': t('strategy.goals.BALANCE_CASH_FLOW.description'),
        'REDUCE_EXPENSES': t('strategy.goals.REDUCE_EXPENSES.description'),
        'ACCELERATE_RECEIPTS': t('strategy.goals.ACCELERATE_RECEIPTS.description'),
        'IMPROVE_CONVERSION': t('strategy.goals.IMPROVE_CONVERSION.description'),
        'RETAIN_CUSTOMERS': t('strategy.goals.RETAIN_CUSTOMERS.description'),
        'OPTIMIZE_STOCK': t('strategy.goals.OPTIMIZE_STOCK.description'),
        'FAST_OPERATION': t('strategy.goals.FAST_OPERATION.description'),
      };
      return descriptions[code] || '';
    },

    // Levers (Alavancas Estratégicas v3.0)
    getLeverTitle: (code: string) => {
      return t(`strategy.levers.${code}.title`);
    },

    getLeverDescription: (code: string) => {
      return t(`strategy.levers.${code}.description`);
    },

    getLeverCategory: (code: string) => {
      return t(`strategy.levers.${code}.category`);
    },

    getLeverImpact: (code: string) => {
      return t(`strategy.levers.${code}.impact`);
    },

    getLeverTimeframe: (code: string) => {
      return t(`strategy.levers.${code}.timeframe`);
    },

    // Actions (Ações Táticas v3.0)
    getActionTitle: (key: string) => {
      return t(`strategy.actions.${key}.title`);
    },

    getActionDescription: (key: string) => {
      return t(`strategy.actions.${key}.description`);
    },

    getActionImpact: (key: string) => {
      return t(`strategy.actions.${key}.impact`);
    },

    getActionComplexity: (key: string) => {
      return t(`strategy.actions.${key}.complexity`);
    },

    getActionTimeframe: (key: string) => {
      return t(`strategy.actions.${key}.timeframe`);
    },

    getActionEffort: (key: string) => {
      return t(`strategy.actions.${key}.effort`);
    },

    isQuickWin: (key: string): boolean => {
      return t(`strategy.actions.${key}.quick_win`) === 'true';
    },

    // Progress Status
    getProgressStatus: (status: string) => {
      return t(`strategy.progress_status.${status}`);
    },

    // UI Elements
    getUILabel: (key: string) => {
      return t(`strategy.ui.${key}`);
    },

    // Alerts
    getAlert: (key: string) => {
      return t(`strategy.alerts.${key}`);
    },

    // Benchmarks
    getBenchmark: (key: string) => {
      return t(`strategy.benchmarks.${key}`);
    },

    // Common terms
    getCommon: (key: string) => {
      return t(`strategy.common.${key}`);
    }
  };
};

// Hook para formatação de dados estratégicos
export const useStrategyFormat = () => {
  const { t } = useTranslation();

  return {
    formatDaysRemaining: (days: number) => {
      return t('strategy.ui.days_remaining', { days });
    },

    formatTrendVector: (status: string, narrative: string, action: string) => {
      return {
        status: t(`strategy.alerts.${status}`),
        narrative,
        action: t(`strategy.alerts.${action}`)
      };
    },

    formatComplexity: (level: string) => {
      const levels: Record<string, string> = {
        'low': t('common.low'),
        'medium': t('common.medium'),
        'high': t('common.high')
      };
      return levels[level] || level;
    }
  };
};
