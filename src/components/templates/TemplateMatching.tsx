import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CheckCircle, AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';

interface FileValidation {
  isValid: boolean;
  template?: {
    id: string;
    name: string;
    code: string;
    match_score: number;
    match_reasons: string[];
  };
  errors?: string[];
  warnings?: string[];
  suggestions?: string[];
}

interface TemplateMatchingProps {
  fileData: {
    headers: string[];
    rows: any[][];
    fileName: string;
    fileType: string;
  };
  onTemplateSelected?: (template: any) => void;
}

export const TemplateMatching: React.FC<TemplateMatchingProps> = ({ 
  fileData, 
  onTemplateSelected 
}) => {
  const [validation, setValidation] = useState<FileValidation | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  // Buscar templates disponíveis
  const { data: templates = [] } = useQuery({
    queryKey: ['strategic-templates'],
    queryFn: async () => {
      const { data } = await supabase.rpc('find_best_template', {
        p_file_structure: {
          columns: fileData.headers.map(h => ({ name: h, type: inferColumnType(h, fileData.rows) })),
          row_count: fileData.rows.length
        },
        p_industry: null,
        p_category: null
      });
      
      return data || [];
    }
  });

  // Validar estrutura do arquivo
  const validateFileStructure = useCallback(async () => {
    setIsValidating(true);
    
    try {
      // Inferir indústria e categoria baseado nos headers
      const inferredIndustry = inferIndustry(fileData.headers);
      const inferredCategory = inferCategory(fileData.headers);
      
      // Buscar melhor template via RPC
      const { data: matches } = await supabase.rpc('find_best_template', {
        p_file_structure: {
          columns: fileData.headers.map(h => ({ 
            name: h, 
            type: inferColumnType(h, fileData.rows) 
          })),
          row_count: fileData.rows.length
        },
        p_industry: inferredIndustry,
        p_category: inferredCategory
      });

      if (matches && matches.length > 0) {
        const bestMatch = matches[0];
        
        // Validar se o arquivo realmente corresponde ao template
        const validationErrors = validateAgainstTemplate(fileData, bestMatch);
        
        setValidation({
          isValid: validationErrors.length === 0,
          template: bestMatch,
          errors: validationErrors,
          warnings: generateWarnings(fileData, bestMatch),
          suggestions: generateSuggestions(fileData, bestMatch)
        });
      } else {
        setValidation({
          isValid: false,
          errors: ['Nenhum template compatível encontrado'],
          suggestions: [
            'Verifique se os nomes das colunas estão corretos',
            'Considere criar um template personalizado',
            'Entre em contato com o suporte para ajuda'
          ]
        });
      }
    } catch (error) {
      console.error('Error validating file:', error);
      setValidation({
        isValid: false,
        errors: ['Erro ao validar arquivo. Tente novamente.'],
        suggestions: ['Verifique o formato do arquivo e tente novamente']
      });
    } finally {
      setIsValidating(false);
    }
  }, [fileData, templates]);

  // Inferir tipo de coluna baseado nos dados
  const inferColumnType = (header: string, rows: any[]): string => {
    const sampleValues = rows.slice(0, 10).map(row => row[header]).filter(v => v != null);
    
    if (sampleValues.length === 0) return 'string';
    
    // Verificar se é data
    const dateRegex = /^\d{4}[-/]\d{2}[-/]\d{2}$/;
    if (sampleValues.every(v => dateRegex.test(v))) {
      return 'date';
    }
    
    // Verificar se é número
    const numberRegex = /^-?\d+\.?\d*$/;
    if (sampleValues.every(v => numberRegex.test(v.toString()))) {
      return 'number';
    }
    
    // Verificar se é booleano
    if (sampleValues.every(v => ['true', 'false', 'sim', 'não', 'yes', 'no', '1', '0'].includes(v.toString().toLowerCase()))) {
      return 'boolean';
    }
    
    return 'string';
  };

  // Inferir indústria baseado nos headers
  const inferIndustry = (headers: string[]): string => {
    const headerStr = headers.join(' ').toLowerCase();
    
    if (headerStr.includes('fatura') || headerStr.includes('nota fiscal') || headerStr.includes('cnpj')) {
      return 'varejo';
    }
    if (headerStr.includes('paciente') || headerStr.includes('médico') || headerStr.includes('consulta')) {
      return 'saude';
    }
    if (headerStr.includes('aluno') || headerStr.includes('turma') || headerStr.includes('disciplina')) {
      return 'educacao';
    }
    if (headerStr.includes('matéria-prima') || headerStr.includes('produção') || headerStr.includes('estoque')) {
      return 'manufatura';
    }
    if (headerStr.includes('cliente') || headerStr.includes('venda') || headerStr.includes('produto')) {
      return 'varejo';
    }
    
    return 'general';
  };

  // Inferir categoria baseado nos headers
  const inferCategory = (headers: string[]): string => {
    const headerStr = headers.join(' ').toLowerCase();
    
    if (headerStr.includes('fluxo') || headerStr.includes('caixa') || headerStr.includes('entrada') || headerStr.includes('saída')) {
      return 'financeiro';
    }
    if (headerStr.includes('dre') || headerStr.includes('receita') || headerStr.includes('lucro') || headerStr.includes('margem')) {
      return 'financeiro';
    }
    if (headerStr.includes('venda') || headerStr.includes('cliente') || headerStr.includes('produto')) {
      return 'vendas';
    }
    if (headerStr.includes('conta') || headerStr.includes('pagar') || headerStr.includes('receber')) {
      return 'financeiro';
    }
    if (headerStr.includes('funcionário') || headerStr.includes('salário') || headerStr.includes('rh')) {
      return 'rh';
    }
    
    return 'financeiro';
  };

  // Validar arquivo contra template
  const validateAgainstTemplate = (fileData: any, template: any): string[] => {
    const errors: string[] = [];
    
    // Verificar colunas obrigatórias
    const requiredColumns = template.file_structure?.required_columns || [];
    const fileHeaders = fileData.headers.map(h => h.toLowerCase().trim());
    
    requiredColumns.forEach((col: any) => {
      const found = fileHeaders.includes(col.name.toLowerCase().trim());
      if (!found) {
        errors.push(`Coluna obrigatória ausente: ${col.name}`);
      }
    });
    
    // Verificar número mínimo de linhas
    const minRows = template.file_structure?.min_rows || 1;
    if (fileData.rows.length < minRows) {
      errors.push(`Arquivo precisa ter pelo menos ${minRows} linhas (tem ${fileData.rows.length})`);
    }
    
    // Verificar número máximo de linhas
    const maxRows = template.file_structure?.max_rows || Infinity;
    if (fileData.rows.length > maxRows) {
      errors.push(`Arquivo tem muitas linhas. Máximo permitido: ${maxRows}`);
    }
    
    // Verificar tipo de arquivo
    const allowedTypes = template.file_structure?.file_types || [];
    if (allowedTypes.length > 0 && !allowedTypes.includes(fileData.fileType)) {
      errors.push(`Tipo de arquivo não permitido. Tipos aceitos: ${allowedTypes.join(', ')}`);
    }
    
    return errors;
  };

  // Gerar avisos
  const generateWarnings = (fileData: any, template: any): string[] => {
    const warnings: string[] = [];
    
    // Verificar se há colunas extras não mapeadas
    const templateColumns = [
      ...(template.file_structure?.required_columns || []),
      ...(template.file_structure?.optional_columns || [])
    ].map((c: any) => c.name.toLowerCase());
    
    const extraColumns = fileData.headers.filter(h => !templateColumns.includes(h.toLowerCase()));
    if (extraColumns.length > 0) {
      warnings.push(`Colunas não mapeadas serão ignoradas: ${extraColumns.join(', ')}`);
    }
    
    // Verificar se há muitas linhas vazias
    const emptyRows = fileData.rows.filter(row => row.every(cell => !cell || cell.toString().trim() === ''));
    if (emptyRows.length > fileData.rows.length * 0.1) {
      warnings.push(`${emptyRows.length} linhas vazias detectadas (${(emptyRows.length / fileData.rows.length * 100).toFixed(1)}%)`);
    }
    
    return warnings;
  };

  // Gerar sugestões
  const generateSuggestions = (fileData: any, template: any): string[] => {
    const suggestions: string[] = [];
    
    if (template.match_score < 80) {
      suggestions.push('Considere renomear algumas colunas para melhorar o matching');
    }
    
    if (fileData.rows.length < 50) {
      suggestions.push('Com mais dados, a análise será mais precisa');
    }
    
    const templateCode = template.code;
    if (templateCode.includes('FLUXO_CAIXA')) {
      suggestions.push('Adicione categorias para análise mais detalhada');
    }
    if (templateCode.includes('DRE')) {
      suggestions.push('Inclua dados comparativos do período anterior');
    }
    if (templateCode.includes('VENDAS')) {
      suggestions.push('Adicione informações de região e vendedor para análise geográfica');
    }
    
    return suggestions;
  };

  // Aceitar template
  const handleAcceptTemplate = () => {
    if (validation?.template && onTemplateSelected) {
      // Incrementar uso do template
      supabase.rpc('increment_template_usage', { 
        p_template_id: validation.template.id 
      });
      
      onTemplateSelected(validation.template);
    }
  };

  return (
    <div className="space-y-4">
      {/* Botão de validação */}
      <div className="flex justify-center">
        <Button 
          onClick={validateFileStructure}
          disabled={isValidating}
          className="w-full max-w-md"
        >
          {isValidating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Validando Estrutura...
            </>
          ) : (
            <>
              <Lightbulb className="w-4 h-4 mr-2" />
              Validar e Sugerir Template
            </>
          )}
        </Button>
      </div>

      {/* Resultado da validação */}
      {validation && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Análise do Arquivo
            </CardTitle>
            <Badge 
              variant={validation.isValid ? "default" : "destructive"}
              className={validation.isValid ? "bg-green-100 text-green-800" : ""}
            >
              {validation.isValid ? "Válido" : "Inválido"}
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Template sugerido */}
            {validation.template && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <h4 className="text-lg font-semibold">Template Sugerido</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      Score: {validation.template.match_score}%
                    </Badge>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h5 className="font-semibold text-blue-900">{validation.template.name}</h5>
                      <p className="text-sm text-blue-700 mt-1">{validation.template.description}</p>
                    </div>
                    <Button 
                      size="sm"
                      onClick={handleAcceptTemplate}
                      disabled={!validation.isValid}
                    >
                      Usar este Template
                    </Button>
                  </div>
                  
                  <div className="text-sm text-blue-800">
                    <strong>Código:</strong> {validation.template.code}<br />
                    <strong>Indústria:</strong> {validation.template.industry}<br />
                    <strong>Categoria:</strong> {validation.template.category}
                  </div>
                  
                  {validation.template.match_reasons.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <strong className="text-sm">Motivos do matching:</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        {validation.template.match_reasons.map((reason: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Erros */}
            {validation.errors && validation.errors.length > 0 && (
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <div className="font-medium mb-2">Erros encontrados:</div>
                  <ul className="space-y-1 text-sm">
                    {validation.errors.map((error: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">•</span>
                        {error}
                      </li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {/* Avisos */}
            {validation.warnings && validation.warnings.length > 0 && (
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <div className="font-medium mb-2">Avisos:</div>
                  <ul className="space-y-1 text-sm">
                    {validation.warnings.map((warning: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">•</span>
                        {warning}
                      </li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {/* Sugestões */}
            {validation.suggestions && validation.suggestions.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-gray-600" />
                  Sugestões para Melhorar
                </h4>
                <ul className="space-y-2 text-sm">
                  {validation.suggestions.map((suggestion: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-600 mt-0.5">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
