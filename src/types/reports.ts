export type BlockType = 
  | 'HERO' 
  | 'SUMMARY' 
  | 'KPI_GRID' 
  | 'CHART' 
  | 'CHART_DONNUT' 
  | 'CHART_BAR_HORIZONTAL' 
  | 'AI_INSIGHT' 
  | 'ACTION_PLAN' 
  | 'TABLE' 
  | 'CALLOUT' 
  | 'MARKDOWN' 
  | 'BENCHMARK_COMPARISON';

export interface ReportBlock {
  id: string;
  type: BlockType;
  layout: {
    w: number; // 1-12 columns
    h?: number;
  };
  content: {
    title: string;
    description?: string;
    body?: string; // For text-based blocks
    settings: Record<string, unknown>; // Visual settings (colors, options)
    data?: unknown; // Hardcoded data or snapshot from AI
    dataSourceKey?: string; // Reference to raw data mapping
  };
}

export interface ReportTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  defaultBlocks: ReportBlock[];
}

export interface Report {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'completed' | 'shared';
  thumbnail?: string;
  description: string;
  templateId: string;
  blocks: ReportBlock[];
  rawData?: Record<string, unknown>;
}
