import { BusinessArea, BusinessMetric, BusinessAreaId } from '@/types/bi';

/**
 * SuperRelatórios v2.0 - Central Business Knowledge Library
 * Contains all business areas, metrics, and metadata for professional SME analysis.
 */

export const BUSINESS_AREAS: BusinessArea[] = [
  { id: 'STRATEGY', nameKey: 'bi.areas.strategy.name', descriptionKey: 'bi.areas.strategy.desc', icon: 'Target' },
  { id: 'MANAGEMENT', nameKey: 'bi.areas.management.name', descriptionKey: 'bi.areas.management.desc', icon: 'Layout' },
  { id: 'FINANCE', nameKey: 'bi.areas.finance.name', descriptionKey: 'bi.areas.finance.desc', icon: 'DollarSign' },
  { id: 'SALES', nameKey: 'bi.areas.sales.name', descriptionKey: 'bi.areas.sales.desc', icon: 'ShoppingCart' },
  { id: 'MARKETING', nameKey: 'bi.areas.marketing.name', descriptionKey: 'bi.areas.marketing.desc', icon: 'Megaphone' },
  { id: 'OPERATIONS', nameKey: 'bi.areas.operations.name', descriptionKey: 'bi.areas.operations.desc', icon: 'Activity' },
  { id: 'LOGISTICS', nameKey: 'bi.areas.logistics.name', descriptionKey: 'bi.areas.logistics.desc', icon: 'Truck' },
  { id: 'CUSTOMER_SERVICE', nameKey: 'bi.areas.customer_service.name', descriptionKey: 'bi.areas.customer_service.desc', icon: 'Headset' },
  { id: 'HR', nameKey: 'bi.areas.hr.name', descriptionKey: 'bi.areas.hr.desc', icon: 'Users' },
];

export const BUSINESS_METRICS: BusinessMetric[] = [
  // FINANCE
  { id: 'REV', areaId: 'FINANCE', nameKey: 'bi.metrics.revenue.name', descriptionKey: 'bi.metrics.revenue.desc', unit: 'currency', format: 'BRL' },
  { id: 'GM', areaId: 'FINANCE', nameKey: 'bi.metrics.gross_margin.name', descriptionKey: 'bi.metrics.gross_margin.desc', unit: 'percentage', format: '%' },
  { id: 'EBITDA', areaId: 'FINANCE', nameKey: 'bi.metrics.ebitda.name', descriptionKey: 'bi.metrics.ebitda.desc', unit: 'currency', format: 'BRL' },
  { id: 'BURN_RATE', areaId: 'FINANCE', nameKey: 'bi.metrics.burn_rate.name', descriptionKey: 'bi.metrics.burn_rate.desc', unit: 'currency', format: 'BRL' },
  { id: 'LTM_REV', areaId: 'FINANCE', nameKey: 'bi.metrics.ltm_revenue.name', descriptionKey: 'bi.metrics.ltm_revenue.desc', unit: 'currency', format: 'BRL' },
  
  // SALES
  { id: 'CAC', areaId: 'SALES', nameKey: 'bi.metrics.cac.name', descriptionKey: 'bi.metrics.cac.desc', unit: 'currency', format: 'BRL' },
  { id: 'LTV', areaId: 'SALES', nameKey: 'bi.metrics.ltv.name', descriptionKey: 'bi.metrics.ltv.desc', unit: 'currency', format: 'BRL' },
  { id: 'CVR', areaId: 'SALES', nameKey: 'bi.metrics.conversion_rate.name', descriptionKey: 'bi.metrics.conversion_rate.desc', unit: 'percentage', format: '%' },
  { id: 'SALES_CYCLE', areaId: 'SALES', nameKey: 'bi.metrics.sales_cycle.name', descriptionKey: 'bi.metrics.sales_cycle.desc', unit: 'time', format: 'days' },
  
  // MARKETING
  { id: 'ROAS', areaId: 'MARKETING', nameKey: 'bi.metrics.roas.name', descriptionKey: 'bi.metrics.roas.desc', unit: 'ratio', format: 'x' },
  { id: 'CPA', areaId: 'MARKETING', nameKey: 'bi.metrics.cpa.name', descriptionKey: 'bi.metrics.cpa.desc', unit: 'currency', format: 'BRL' },
  { id: 'TRAFFIC', areaId: 'MARKETING', nameKey: 'bi.metrics.traffic.name', descriptionKey: 'bi.metrics.traffic.desc', unit: 'number', format: 'n' },
  
  // OPERATIONS
  { id: 'CHURN', areaId: 'OPERATIONS', nameKey: 'bi.metrics.churn.name', descriptionKey: 'bi.metrics.churn.desc', unit: 'percentage', format: '%' },
  { id: 'ACTIVE_USERS', areaId: 'OPERATIONS', nameKey: 'bi.metrics.active_users.name', descriptionKey: 'bi.metrics.active_users.desc', unit: 'number', format: 'n' },
  { id: 'UNIT_ECONOMICS', areaId: 'OPERATIONS', nameKey: 'bi.metrics.unit_economics.name', descriptionKey: 'bi.metrics.unit_economics.desc', unit: 'ratio', format: 'x' },

  // HR
  { id: 'TURNOVER', areaId: 'HR', nameKey: 'bi.metrics.turnover.name', descriptionKey: 'bi.metrics.turnover.desc', unit: 'percentage', format: '%' },
  { id: 'HC', areaId: 'HR', nameKey: 'bi.metrics.headcount.name', descriptionKey: 'bi.metrics.headcount.desc', unit: 'number', format: 'n' },
  { id: 'ENPS', areaId: 'HR', nameKey: 'bi.metrics.enps.name', descriptionKey: 'bi.metrics.enps.desc', unit: 'number', format: 'n' },
];

/**
 * Utility to get metrics by area
 */
export const getMetricsByArea = (areaId: BusinessAreaId) => {
  return BUSINESS_METRICS.filter(m => m.areaId === areaId);
};
