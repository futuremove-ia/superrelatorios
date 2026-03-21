import { describe, it, expect, vi, beforeEach } from 'vitest';
import { analyzeDataWithAI, generateAIDiagnostic } from './aiService';

// Mock fetch
global.fetch = vi.fn();

describe('AI Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('analyzeDataWithAI Integration', () => {
    it('should integrate strategy library in analysis', async () => {
      // Mock data
      const testData = [
        { receita: 100000, lucro: 15000, caixa: 50000 }
      ];

      // Mock API response
      const mockResponse = {
        candidates: [{
          content: {
            parts: [{
              text: JSON.stringify({
                summary: 'Análise financeira mostra margem saudável de 15%',
                blocks: [
                  {
                    type: 'KPI_GRID',
                    title: 'Principais Métricas Financeiras',
                    description: 'Métricas estratégicas mais relevantes',
                    data: { metrics: [] },
                    settings: {}
                  }
                ]
              })
            }]
          }
        }]
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      // Execute function
      const result = await analyzeDataWithAI(testData, 'Test context');

      // Verify API call
      expect(fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          body: expect.stringContaining('ESPECIALIZAÇÃO:')
        })
      );

      // Verify result
      expect(result.summary).toBe('Análise financeira mostra margem saudável de 15%');
      expect(result.blocks).toHaveLength(1);
      expect(result.blocks[0].type).toBe('KPI_GRID');
    });

    it('should handle different domains appropriately', async () => {
      const salesData = [
        { venda: 5000, cliente: 'João', conversão: 0.15 }
      ];

      // Mock API response
      const mockResponse = {
        candidates: [{
          content: {
            parts: [{
              text: JSON.stringify({
                summary: 'Análise de vendas mostra conversão de 15%',
                blocks: []
              })
            }]
          }
        }]
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await analyzeDataWithAI(salesData, 'Sales context');

      expect(result.summary).toContain('vendas');
    });
  });

  describe('generateAIDiagnostic Integration', () => {
    it('should integrate strategy library in diagnostic', async () => {
      const testData = [
        { receita: 100000, lucro: 5000, caixa: 10000 }
      ];

      // Mock API response
      const mockResponse = {
        candidates: [{
          content: {
            parts: [{
              text: JSON.stringify({
                diagnostic: {
                  title: 'Margem de Lucro Baixa',
                  description: 'A margem de 5% está abaixo do ideal',
                  causes: ['Custos elevados', 'Preços baixos'],
                  implications: ['Risco de caixa', 'Dificuldade de crescimento']
                },
                suggestedPriority: {
                  title: 'Otimizar Margens',
                  explanation: 'Focar em redução de custos e revisão de preços',
                  level: 'high',
                  score: {
                    impact: 8,
                    urgency: 7,
                    effort: 5,
                    confidence: 9,
                    calculatedValue: (8 * 7 * 9) / 5
                  }
                }
              })
            }]
          }
        }]
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await generateAIDiagnostic(testData, 'Diagnostic context');

      expect(result.diagnostic.title).toBe('Margem de Lucro Baixa');
      expect(result.suggestedPriority.level).toBe('high');
      expect(result.suggestedPriority.score.impact).toBe(8);
    });
  });

  describe('Error Handling', () => {
    it('should handle API errors gracefully', async () => {
      const testData = [{ receita: 100000 }];

      (global.fetch as any).mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({ error: { message: 'API Error' } })
      });

      await expect(analyzeDataWithAI(testData, 'Test')).rejects.toThrow('API Error');
    });

    it('should handle malformed JSON response', async () => {
      const testData = [{ receita: 100000 }];

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          candidates: [{
            content: {
              parts: [{
                text: 'NOT_VALID_JSON'
              }]
            }
          }]
        })
      });

      await expect(analyzeDataWithAI(testData, 'Test')).rejects.toThrow();
    });
  });
});
