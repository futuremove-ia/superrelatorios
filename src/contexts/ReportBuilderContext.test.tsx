import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ReportBuilderProvider, useReportBuilderContext } from './ReportBuilderContext';
import * as aiService from '@/services/aiService';

// Polyfill crypto.randomUUID if needed
if (typeof crypto === 'undefined') {
  (global as any).crypto = {
    randomUUID: () => 'test-uuid-' + Math.random().toString(36).substr(2, 9)
  };
} else if (!crypto.randomUUID) {
  (crypto as any).randomUUID = () => 'test-uuid-' + Math.random().toString(36).substr(2, 9);
}

// Test component to interact with the context
const TestComponent = () => {
  const { formData, setFormData, runAIAnalysis, blocks, loading, setParsedData } = useReportBuilderContext();

  return (
    <div>
      <div data-testid="title">{formData.title}</div>
      <div data-testid="loading">{loading ? 'true' : 'false'}</div>
      <div data-testid="blocks-count">{blocks.length}</div>
      <button 
        onClick={() => setFormData({ ...formData, title: 'New Title' })}
        data-testid="update-title"
      >
        Update Title
      </button>
      <button 
        onClick={() => setParsedData({ headers: ['h1'], rows: [{ h1: 'v1' }], rowCount: 1, fileType: 'csv' })}
        data-testid="set-data"
      >
        Set Data
      </button>
      <button onClick={runAIAnalysis} data-testid="run-analysis">Run AI</button>
    </div>
  );
};

describe('ReportBuilderContext Integration', () => {
  it('should update state and run AI analysis correctly', async () => {
    const mockAiResult: aiService.AIAnalysisResult = {
      summary: 'Data looks good',
      blocks: [
        { type: 'KPI_GRID', title: 'Metrics', data: { kpi: 100 } }
      ]
    };

    const spy = vi.spyOn(aiService, 'analyzeDataWithAI').mockResolvedValue(mockAiResult);

    render(
      <ReportBuilderProvider>
        <TestComponent />
      </ReportBuilderProvider>
    );

    // Initial state
    expect(screen.getByTestId('title').textContent).toBe('');
    
    // Update title
    await act(async () => {
      screen.getByTestId('update-title').click();
    });
    expect(screen.getByTestId('title').textContent).toBe('New Title');

    // Set data
    await act(async () => {
      screen.getByTestId('set-data').click();
    });

    // Run AI
    await act(async () => {
      screen.getByTestId('run-analysis').click();
    });

    // Wait for loading to be set to false after analysis completes
    await vi.waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    }, { timeout: 3000 });

    expect(screen.getByTestId('blocks-count').textContent).toBe('1');
    expect(spy).toHaveBeenCalled();
  });
});
