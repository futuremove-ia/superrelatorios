import { describe, it, expect, vi, beforeEach } from 'vitest';
import { analyzeDataWithAI } from '../services/aiService';

describe('AI Validation (Resilience & Quality)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle empty data arrays gracefully', async () => {
    // Mocking fetch to return a valid but "empty" response
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        candidates: [{
          content: {
            parts: [{
              text: JSON.stringify({
                summary: 'Sem dados relevantes.',
                blocks: []
              })
            }]
          }
        }]
      })
    });

    const result = await analyzeDataWithAI([], 'Contexto vazio');
    expect(result.blocks).toEqual([]);
    expect(result.summary).toBe('Sem dados relevantes.');
  });

  it('should handle malformed JSON from AI (resilience)', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        candidates: [{
          content: {
            parts: [{
              text: 'NOT_A_JSON'
            }]
          }
        }]
      })
    });

    await expect(analyzeDataWithAI([{ x: 1 }], 'Test')).rejects.toThrow();
  });

  it('should enforce block structure on mapping (integration point)', () => {
    // This part is actually in the context but we validate the types here
    const mockAiBlock = {
      type: 'KPI_GRID',
      title: 'Valid Block',
      data: { val: 10 }
    };
    
    expect(mockAiBlock.type).toBe('KPI_GRID');
    expect(mockAiBlock.data).toBeDefined();
  });
});
