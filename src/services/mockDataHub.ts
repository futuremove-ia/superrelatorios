import { DataSource } from '@/types/dataHub';

export const mockDataSources: DataSource[] = [
  {
    id: 'ds-001',
    userId: 'user-001',
    folderId: '1',
    name: 'Vendas_Novembro_2025.xlsx',
    type: 'file',
    contentUrl: 'https://supabase.co/storage/v1/object/public/reports/Vendas_Novembro_2025.xlsx',
    metadata: {
      size: 1024000,
      extension: 'xlsx',
      rowCount: 1250,
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    },
    linkedReportIds: ['1-4'],
    createdAt: '2025-12-01T10:00:00Z',
    updatedAt: '2025-12-01T10:00:00Z'
  },
  {
    id: 'ds-002',
    userId: 'user-001',
    folderId: '2',
    name: 'Google Analytics - Q4 Marketing',
    type: 'url',
    contentUrl: 'https://analytics.google.com/q4-marketing-dashboard',
    metadata: {
      lastSynced: '2026-01-10T15:30:00Z'
    },
    linkedReportIds: [],
    createdAt: '2026-01-05T09:00:00Z',
    updatedAt: '2026-01-10T15:30:00Z'
  },
  {
    id: 'ds-003',
    userId: 'user-001',
    name: 'Notas da Reunião de Diretoria',
    type: 'raw_text',
    rawContent: 'Pautas: Expansão para o Sul, Corte de custos operacionais em 10%, Lançamento v2.0...',
    metadata: {
      size: 1500,
    },
    linkedReportIds: [],
    createdAt: '2026-03-15T14:00:00Z',
    updatedAt: '2026-03-15T14:00:00Z'
  }
];
