import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { KPIBlock, AIInsightBlock } from './BlockLibrary';
import { ReportBlock } from '@/types/reports';

describe('BlockLibrary Components', () => {
  const mockBlock: ReportBlock = {
    id: '1',
    type: 'KPI_GRID',
    content: {
      title: 'Metrics',
      data: [
        { label: 'Revenue', value: 'R$ 10.000', change: '10%', trend: 'up' }
      ],
      settings: { columns: 1 }
    }
  };

  it('KPIBlock: should render labels and values', () => {
    render(<KPIBlock block={mockBlock} />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('R$ 10.000')).toBeInTheDocument();
    expect(screen.getByText('10%')).toBeInTheDocument();
  });

  it('AIInsightBlock: should render title and insightful text', () => {
    const insightBlock: ReportBlock = {
      id: '2',
      type: 'AI_INSIGHT',
      content: {
        title: 'IA Insight',
        body: 'This is a strategic insight.'
      }
    };
    render(<AIInsightBlock block={insightBlock} />);
    expect(screen.getByText('IA Insight')).toBeInTheDocument();
    expect(screen.getByText('This is a strategic insight.')).toBeInTheDocument();
  });
});
