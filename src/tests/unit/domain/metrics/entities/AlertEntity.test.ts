import { describe, it, expect } from 'vitest';
import { AlertEntity, AlertEntityFactory } from '../../../../../domain/metrics/entities';

describe('AlertEntity', () => {
  describe('AlertEntityFactory', () => {
    it('should create critical alert with all required fields', () => {
      const alert = AlertEntityFactory.critical(
        'netProfitMargin',
        'Margem de Lucro Crítica',
        'Margem abaixo de 5% indica risco financeiro',
        3,
        5
      );

      expect(alert.id).toBeTruthy();
      expect(typeof alert.id).toBe('string');
      expect(alert.id).toContain('-');
      const parts = alert.id.split('-');
      expect(parts.length).toBe(5);
      expect(alert.kpi).toBe('netProfitMargin');
      expect(alert.level).toBe('critical');
      expect(alert.title).toBe('Margem de Lucro Crítica');
      expect(alert.description).toBe('Margem abaixo de 5% indica risco financeiro');
      expect(alert.currentValue).toBe(3);
      expect(alert.threshold).toBe(5);
      expect(alert.triggeredAt).toBeInstanceOf(Date);
      expect(alert.recommendation).toContain('Reduza custos imediatamente');
    });

    it('should create warning alert with custom recommendation', () => {
      const customRecommendation = 'Custom action needed';
      const alert = AlertEntityFactory.warning(
        'cashBurnRate',
        'Burn Rate Elevado',
        'Queima de caixa acima do ideal',
        8000,
        5000,
        customRecommendation
      );

      expect(alert.level).toBe('warning');
      expect(alert.recommendation).toBe(customRecommendation);
    });

    it('should create info alert with default recommendation', () => {
      const alert = AlertEntityFactory.info(
        'salesConversion',
        'Conversão Estável',
        'Taxa de conversão dentro do esperado',
        18,
        15
      );

      expect(alert.level).toBe('info');
      expect(alert.recommendation).toBeTruthy();
      expect(typeof alert.recommendation).toBe('string');
      expect(alert.recommendation.length).toBeGreaterThan(10);
    });

    it('should acknowledge alert', () => {
      const baseAlert = AlertEntityFactory.critical(
        'netProfitMargin',
        'Test Alert',
        'Test Description',
        3,
        5
      );

      const acknowledgedAlert = AlertEntityFactory.acknowledge(baseAlert);

      expect(acknowledgedAlert.acknowledgedAt).toBeInstanceOf(Date);
      expect(acknowledgedAlert.acknowledgedAt!.getTime()).toBeGreaterThanOrEqual(baseAlert.triggeredAt.getTime());
    });

    it('should resolve alert', () => {
      const baseAlert = AlertEntityFactory.critical(
        'netProfitMargin',
        'Test Alert',
        'Test Description',
        3,
        5
      );

      const resolvedAlert = AlertEntityFactory.resolve(baseAlert);

      expect(resolvedAlert.resolvedAt).toBeInstanceOf(Date);
      expect(resolvedAlert.resolvedAt!.getTime()).toBeGreaterThanOrEqual(baseAlert.triggeredAt.getTime());
    });

    it('should provide default recommendations for all KPIs', () => {
      const kpis = ['netProfitMargin', 'cashBurnRate', 'runway', 'salesConversion', 'customerAcquisitionCost'];
      
      kpis.forEach(kpi => {
        const alert = AlertEntityFactory.critical(kpi, 'Test', 'Test', 0, 1);
        expect(alert.recommendation).toBeTruthy();
        expect(typeof alert.recommendation).toBe('string');
        expect(alert.recommendation.length).toBeGreaterThan(10);
      });
    });
  });
});
