import { describe, it, expect } from 'vitest';
import { contextDetectorService } from './contextDetectorService';

describe('ContextDetectorService', () => {
  describe('detectDomain', () => {
    it('should detect finance domain from financial keywords', () => {
      const financialData = [
        { receita: 100000, lucro: 15000, caixa: 50000 },
        { receita: 120000, margem: 0.15, fluxo: 25000 }
      ];

      const domain = contextDetectorService.detectDomain(financialData);

      expect(domain).toBe('finance');
    });

    it('should detect sales domain from sales keywords', () => {
      const salesData = [
        { venda: 5000, cliente: 'João', conversão: 0.15 },
        { venda: 7500, lead: 50, fechamento: 10 }
      ];

      const domain = contextDetectorService.detectDomain(salesData);

      expect(domain).toBe('sales');
    });

    it('should detect marketing domain from marketing keywords', () => {
      const marketingData = [
        { campanha: 'Google Ads', tráfego: 1000, ctr: 0.02 },
        { campanha: 'Facebook', cpc: 5.50, roi: 3.2 }
      ];

      const domain = contextDetectorService.detectDomain(marketingData);

      expect(domain).toBe('marketing');
    });

    it('should detect ops domain from operational keywords', () => {
      const opsData = [
        { produção: 1000, estoque: 500, eficiência: 0.85 },
        { produção: 1200, fornecedor: 'ABC', qualidade: 0.95 }
      ];

      const domain = contextDetectorService.detectDomain(opsData);

      expect(domain).toBe('ops');
    });

    it('should default to general for insufficient keywords', () => {
      const generalData = [
        { nome: 'Produto A', quantidade: 100, preço: 50 },
        { nome: 'Produto B', quantidade: 150, preço: 75 }
      ];

      const domain = contextDetectorService.detectDomain(generalData);

      expect(domain).toBe('general');
    });
  });

  describe('mapDataToKPIs', () => {
    it('should map financial data to finance KPIs', () => {
      const financialData = [
        { receita: 100000, lucro: 15000, margem: 0.15 }
      ];

      const kpiCodes = contextDetectorService.mapDataToKPIs(financialData);

      expect(kpiCodes).toContain('NET_PROFIT_MARGIN');
    });

    it('should map sales data to sales KPIs', () => {
      const salesData = [
        { conversão: 0.15, venda: 5000, fechamento: 10 }
      ];

      const kpiCodes = contextDetectorService.mapDataToKPIs(salesData);

      expect(kpiCodes).toContain('SALES_CONVERSION');
    });

    it('should return empty for no matching keywords', () => {
      const noMatchData = [
        { nome: 'Produto A', categoria: 'Eletrônicos' }
      ];

      const kpiCodes = contextDetectorService.mapDataToKPIs(noMatchData);

      expect(kpiCodes).toEqual([]);
    });
  });

  describe('analyzeDataStructure', () => {
    it('should analyze data structure correctly', () => {
      const data = [
        { data: '2024-01-01', receita: 100000, lucro: 15000 },
        { data: '2024-02-01', receita: 120000, lucro: 18000 }
      ];

      const structure = contextDetectorService.analyzeDataStructure(data);

      expect(structure.hasHeaders).toBe(true);
      expect(structure.rowCount).toBe(2);
      expect(structure.columnCount).toBe(3);
      expect(structure.dataTypes).toContain('date');
      expect(structure.dataTypes).toContain('number');
      expect(structure.timeSeries).toBe(true);
    });

    it('should handle empty data', () => {
      const structure = contextDetectorService.analyzeDataStructure([]);

      expect(structure.hasHeaders).toBe(false);
      expect(structure.rowCount).toBe(0);
      expect(structure.columnCount).toBe(0);
      expect(structure.dataTypes).toEqual([]);
      expect(structure.timeSeries).toBe(false);
    });

    it('should detect mixed data types', () => {
      const data = [
        { nome: 'João', idade: 30, ativo: true, salario: 5000.50 }
      ];

      const structure = contextDetectorService.analyzeDataStructure(data);

      expect(structure.dataTypes).toContain('text');
      expect(structure.dataTypes).toContain('number');
      expect(structure.dataTypes).toContain('boolean');
    });
  });

  describe('analyzeDataQuality', () => {
    it('should analyze data quality metrics', () => {
      const data = [
        { receita: 100000, lucro: 15000, margem: 0.15 },
        { receita: 120000, lucro: null, margem: 0.18 },
        { receita: null, lucro: 18000, margem: 0.20 }
      ];

      const quality = contextDetectorService.analyzeDataQuality(data);

      expect(quality.completeness).toBeGreaterThan(0);
      expect(quality.completeness).toBeLessThan(100);
      expect(quality.consistency).toBeGreaterThanOrEqual(0);
      expect(quality.validity).toBeGreaterThanOrEqual(0);
      expect(quality.issues.length).toBeGreaterThanOrEqual(0);
    });

    it('should handle empty data gracefully', () => {
      const quality = contextDetectorService.analyzeDataQuality([]);

      expect(quality.completeness).toBe(0);
      expect(quality.consistency).toBe(0);
      expect(quality.validity).toBe(0);
      expect(quality.issues).toContain('Nenhum dado encontrado');
    });

    it('should give high quality for complete data', () => {
      const data = [
        { receita: 100000, lucro: 15000 },
        { receita: 120000, lucro: 18000 }
      ];

      const quality = contextDetectorService.analyzeDataQuality(data);

      expect(quality.completeness).toBe(100);
      expect(quality.consistency).toBe(100);
      expect(quality.validity).toBe(100);
      expect(quality.issues.length).toBe(0);
    });
  });

  describe('createBusinessContext', () => {
    it('should create complete business context', () => {
      const data = [
        { receita: 100000, lucro: 15000, caixa: 50000 }
      ];

      const context = contextDetectorService.createBusinessContext(data);

      expect(context.domain).toBe('finance');
      expect(context.dataCharacteristics.hasFinancialData).toBe(true);
      expect(context.dataCharacteristics.hasSalesData).toBe(false);
      expect(context.dataCharacteristics.hasOperationalData).toBe(false);
      expect(context.dataCharacteristics.hasMarketingData).toBe(false);
    });

    it('should detect mixed characteristics', () => {
      const data = [
        { receita: 100000, venda: 5000, campanha: 'Google Ads' }
      ];

      const context = contextDetectorService.createBusinessContext(data);

      // Should detect the most prominent domain
      expect(['finance', 'sales', 'marketing']).toContain(context.domain);
    });
  });
});
