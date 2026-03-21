import React, { useMemo } from 'react';
import { ReportBlock } from '@/types/reports';
import { 
  HeroBlock, 
  KPIBlock, 
  AIInsightBlock, 
  ChartBlock, 
  ActionPlanBlock, 
  DonnutChartBlock,
  HorizontalBarChartBlock,
  CalloutBlock,
  MarkdownBlock,
  BenchmarkComparisonBlock,
  FallbackBlock 
} from '../blocks/BlockLibrary';
import { BlockErrorBoundary } from './BlockErrorBoundary';

interface DynamicBlockRendererProps {
  blocks: ReportBlock[];
}

/**
 * Motor de Renderização Dinâmica de Blocos
 * Mapeia cada tipo de bloco do JSON para seu componente React correspondente.
 */
export const DynamicBlockRenderer: React.FC<DynamicBlockRendererProps> = ({ blocks }) => {
  const renderBlock = (block: ReportBlock) => {
    switch (block.type) {
      case 'HERO':
        return <HeroBlock key={block.id} block={block} />;
      case 'KPI_GRID':
        return <KPIBlock key={block.id} block={block} />;
      case 'AI_INSIGHT':
        return <AIInsightBlock key={block.id} block={block} />;
      case 'CHART':
        return <ChartBlock key={block.id} block={block} />;
      case 'CHART_DONNUT':
        return <DonnutChartBlock key={block.id} block={block} />;
      case 'CHART_BAR_HORIZONTAL':
        return <HorizontalBarChartBlock key={block.id} block={block} />;
      case 'ACTION_PLAN':
        return <ActionPlanBlock key={block.id} block={block} />;
      case 'CALLOUT':
        return <CalloutBlock key={block.id} block={block} />;
      case 'MARKDOWN':
        return <MarkdownBlock key={block.id} block={block} />;
      case 'BENCHMARK_COMPARISON':
        return <BenchmarkComparisonBlock key={block.id} block={block} />;
      // Adicionar novos blocos conforme implementados
      default:
        return <FallbackBlock key={block.id} block={block} />;
    }
  };

  return (
    <div className="space-y-4">
      {blocks.map(block => (
        <BlockErrorBoundary key={block.id} blockTitle={block.content.title}>
          <div className="w-full transition-all duration-300">
            {renderBlock(block)}
          </div>
        </BlockErrorBoundary>
      ))}
    </div>
  );
};
