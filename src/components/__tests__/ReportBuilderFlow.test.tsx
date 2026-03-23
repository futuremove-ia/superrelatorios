import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/contexts/AuthContext';
import { ReportBuilderProvider } from '@/contexts/ReportBuilderContext';
import { DataInputStep } from '@/pages/app/components/report-builder/DataInputStep';
import { TemplateSelectionStep } from '@/pages/app/components/report-builder/TemplateSelectionStep';
import { BlockEditorStep } from '@/pages/app/components/report-builder/BlockEditorStep';
import { GenerationStep } from '@/pages/app/components/report-builder/GenerationStep';
import { PreviewStep } from '@/pages/app/components/report-builder/PreviewStep';
import { useTranslation } from 'react-i18next';

// Mock i18n
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock file parser
vi.mock('@/services/fileParserService', () => ({
  parseFile: vi.fn().mockResolvedValue({
    headers: ['col1', 'col2', 'col3'],
    rows: [['data1', 'data2', 'data3']]
  })
}));

// Mock templates
vi.mock('@/services/mockReports', () => ({
  mockTemplates: [
    {
      id: 'executive',
      name: 'Relatório Executivo',
      description: 'Modelo executivo completo',
      category: 'Executivo',
      defaultBlocks: [
        { id: '1', type: 'header', content: 'Header Content' },
        { id: '2', type: 'chart', content: 'Chart Data' }
      ]
    }
  ]
}));

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <ReportBuilderProvider>
            {children}
          </ReportBuilderProvider>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};

describe('Report Builder Flow Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Step 1: Data Input', () => {
    it('renders data source options', () => {
      render(
        <TestWrapper>
          <DataInputStep />
        </TestWrapper>
      );

      expect(screen.getByText('builder.steps.data.sources.upload')).toBeInTheDocument();
      expect(screen.getByText('builder.steps.data.sources.paste')).toBeInTheDocument();
      expect(screen.getByText('builder.steps.data.sources.url')).toBeInTheDocument();
    });

    it('handles file upload correctly', async () => {
      render(
        <TestWrapper>
          <DataInputStep />
        </TestWrapper>
      );

      const uploadCard = screen.getByText('builder.steps.data.sources.upload');
      fireEvent.click(uploadCard);

      const fileInput = screen.getByRole('button');
      const file = new File(['test'], 'test.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      fireEvent.change(fileInput, { target: { files: [file] } });

      await waitFor(() => {
        expect(screen.getByText(/test\.xlsx/)).toBeInTheDocument();
      });
    });

    it('handles text input correctly', async () => {
      render(
        <TestWrapper>
          <DataInputStep />
        </TestWrapper>
      );

      const textCard = screen.getByText('builder.steps.data.sources.paste');
      fireEvent.click(textCard);

      const textArea = screen.getByRole('textbox');
      fireEvent.change(textArea, { target: { value: 'Sample text data' } });

      expect(textArea).toHaveValue('Sample text data');
    });
  });

  describe('Step 2: Template Selection', () => {
    it('displays available templates', () => {
      render(
        <createTestWrapper>
          <TemplateSelectionStep />
        </createTestWrapper>
      );

      expect(screen.getByText('Relatório Executivo')).toBeInTheDocument();
      expect(screen.getByText('Modelo executivo completo')).toBeInTheDocument();
    });

    it('allows template selection', () => {
      render(
        <createTestWrapper>
          <TemplateSelectionStep />
        </createTestWrapper>
      );

      const templateCard = screen.getByText('Relatório Executivo');
      fireEvent.click(templateCard);

      expect(templateCard.closest('.card')).toHaveClass('border-primary');
    });
  });

  describe('Step 3: Block Editor', () => {
    it('renders block editor with blocks', () => {
      render(
        <createTestWrapper>
          <BlockEditorStep />
        </createTestWrapper>
      );

      // Should show loading state initially if no blocks
      expect(screen.getByText('builder.steps.blocks.loading_title')).toBeInTheDocument();
    });

    it('allows block manipulation', () => {
      render(
        <createTestWrapper>
          <BlockEditorStep />
        </createTestWrapper>
      );

      // Test add block button
      const addBlockButton = screen.getByText('builder.steps.blocks.add_block');
      expect(addBlockButton).toBeInTheDocument();
    });
  });

  describe('Step 4: Generation', () => {
    it('renders generation form', () => {
      render(
        <TestWrapper>
          <GenerationStep />
        </TestWrapper>
      );

      expect(screen.getByLabelText('builder.steps.generation.form.title_label')).toBeInTheDocument();
      expect(screen.getByLabelText('builder.steps.generation.form.cat_label')).toBeInTheDocument();
      expect(screen.getByLabelText('builder.steps.generation.form.desc_label')).toBeInTheDocument();
    });

    it('handles form input changes', () => {
      render(
        <TestWrapper>
          <GenerationStep />
        </TestWrapper>
      );

      const titleInput = screen.getByLabelText('builder.steps.generation.form.title_label');
      fireEvent.change(titleInput, { target: { value: 'Test Report Title' } });

      expect(titleInput).toHaveValue('Test Report Title');
    });
  });

  describe('Step 5: Preview', () => {
    it('renders preview step', () => {
      const mockOnConfirm = vi.fn();
      
      render(
        <createTestWrapper>
          <PreviewStep onConfirm={mockOnConfirm} />
        </createTestWrapper>
      );

      expect(screen.getByText('builder.steps.preview.title')).toBeInTheDocument();
      expect(screen.getByText('builder.steps.preview.desc')).toBeInTheDocument();
    });

    it('handles confirmation', () => {
      const mockOnConfirm = vi.fn();
      
      render(
        <createTestWrapper>
          <PreviewStep onConfirm={mockOnConfirm} />
        </createTestWrapper>
      );

      const confirmButton = screen.getByText('builder.steps.preview.cta_initial');
      fireEvent.click(confirmButton);

      expect(mockOnConfirm).toHaveBeenCalled();
    });
  });

  describe('Flow Integration', () => {
    it('maintains state across steps', async () => {
      // Test that context maintains data across steps
      const { rerender } = render(
        <TestWrapper>
          <DataInputStep />
        </TestWrapper>
      );

      // Simulate file upload
      const uploadCard = screen.getByText('builder.steps.data.sources.upload');
      fireEvent.click(uploadCard);

      // Navigate to template selection
      rerender(
        <TestWrapper>
          <TemplateSelectionStep />
        </TestWrapper>
      );

      // Should still have file context
      expect(screen.getByText('builder.steps.template.preview_title')).toBeInTheDocument();
    });

    it('validates required steps', () => {
      // Test validation logic
      render(
        <TestWrapper>
          <GenerationStep />
        </TestWrapper>
      );

      const titleInput = screen.getByLabelText('builder.steps.generation.form.title_label');
      expect(titleInput).toBeRequired();
    });
  });
});
