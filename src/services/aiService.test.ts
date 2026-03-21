import { describe, it, expect, vi, beforeEach } from 'vitest';
import { analyzeDataWithAI } from './aiService';

// Mock global fetch
global.fetch = vi.fn();

describe('aiService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset the module registry to allow fresh mocking
    vi.resetModules();
  });

  it('should call Gemini API and return parsed result', async () => {
    // Mock config with API key
    vi.doMock('@/config/env', () => ({
      config: {
        gemini: {
          apiKey: 'test-api-key'
        }
      }
    }));

    const { analyzeDataWithAI } = await import('./aiService');

    const mockResponse = {
      candidates: [{
        content: {
          parts: [{
            text: JSON.stringify({
              summary: 'Test summary',
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

    const result = await analyzeDataWithAI([{ id: 1 }], 'Test context');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result.summary).toBe('Test summary');
    expect(result.blocks).toEqual([]);
  });

  it('should throw error if API key is missing', async () => {
    // Mock config without API key
    vi.doMock('@/config/env', () => ({
      config: {
        gemini: {
          apiKey: ''
        }
      }
    }));

    const { analyzeDataWithAI } = await import('./aiService');

    await expect(analyzeDataWithAI([{ id: 1 }], 'Test')).rejects.toThrow('Chave da API do Gemini não configurada');
  });
});
