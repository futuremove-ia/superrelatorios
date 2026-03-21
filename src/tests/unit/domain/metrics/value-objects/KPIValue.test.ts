import { describe, it, expect, beforeEach } from 'vitest';
import { KPIValue, KPIValueFactory, Threshold } from '../../../../../domain/metrics/value-objects';

describe('KPIValue', () => {
  describe('KPIValueFactory', () => {
    let threshold: Threshold;

    beforeEach(() => {
      threshold = { critical: 5, warning: 10, good: 15 };
    });

    it('should create KPI value with all required fields', () => {
      const kpiValue = KPIValueFactory.create(12.5, '%', threshold, 'up');

      expect(kpiValue.value).toBe(12.5);
      expect(kpiValue.unit).toBe('%');
      expect(kpiValue.threshold).toEqual(threshold);
      expect(kpiValue.trend).toBe('up');
    });

    it('should use stable trend by default', () => {
      const kpiValue = KPIValueFactory.create(12.5, '%', threshold);

      expect(kpiValue.trend).toBe('stable');
    });

    it('should update trend correctly', () => {
      const base = KPIValueFactory.create(12.5, '%', threshold);
      const withUpTrend = KPIValueFactory.withTrend(base, 'up');
      const withDownTrend = KPIValueFactory.withTrend(base, 'down');

      expect(withUpTrend.trend).toBe('up');
      expect(withDownTrend.trend).toBe('down');
      expect(withUpTrend.value).toBe(base.value);
      expect(withDownTrend.value).toBe(base.value);
    });

    describe('getStatus', () => {
      it('should return critical when value <= critical threshold', () => {
        const kpiValue = KPIValueFactory.create(3, '%', threshold);
        
        expect(KPIValueFactory.getStatus(kpiValue)).toBe('critical');
      });

      it('should return warning when value <= warning threshold', () => {
        const kpiValue = KPIValueFactory.create(7, '%', threshold);
        
        expect(KPIValueFactory.getStatus(kpiValue)).toBe('warning');
      });

      it('should return good when value > warning threshold', () => {
        const kpiValue = KPIValueFactory.create(12, '%', threshold);
        
        expect(KPIValueFactory.getStatus(kpiValue)).toBe('good');
      });

      it('should handle edge case at warning threshold', () => {
        const kpiValue = KPIValueFactory.create(10, '%', threshold);
        
        expect(KPIValueFactory.getStatus(kpiValue)).toBe('warning');
      });

      it('should handle edge case at critical threshold', () => {
        const kpiValue = KPIValueFactory.create(5, '%', threshold);
        
        expect(KPIValueFactory.getStatus(kpiValue)).toBe('critical');
      });
    });

    describe('getColor', () => {
      it('should return red for critical status', () => {
        const color = KPIValueFactory.getColor('critical');
        
        expect(color).toBe('#ef4444');
      });

      it('should return amber for warning status', () => {
        const color = KPIValueFactory.getColor('warning');
        
        expect(color).toBe('#f59e0b');
      });

      it('should return emerald for good status', () => {
        const color = KPIValueFactory.getColor('good');
        
        expect(color).toBe('#10b981');
      });
    });

    describe('getTrendIcon', () => {
      it('should return up arrow for up trend', () => {
        const icon = KPIValueFactory.getTrendIcon('up');
        
        expect(icon).toBe('↗️');
      });

      it('should return down arrow for down trend', () => {
        const icon = KPIValueFactory.getTrendIcon('down');
        
        expect(icon).toBe('↘️');
      });

      it('should return right arrow for stable trend', () => {
        const icon = KPIValueFactory.getTrendIcon('stable');
        
        expect(icon).toBe('→');
      });
    });
  });
});
