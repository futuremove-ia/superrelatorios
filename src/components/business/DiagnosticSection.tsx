import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Diagnostic } from '@/types/business';
import { AlertTriangle, Info, Zap, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface DiagnosticSectionProps {
  diagnostic: Diagnostic;
  onPrioritize?: (diagnosticId: string) => void;
}

export const DiagnosticSection: React.FC<DiagnosticSectionProps> = ({ diagnostic, onPrioritize }) => {
  return (
    <Card className="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50/20 to-transparent">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            Alerta Crítico
          </Badge>
          <span className="text-xs text-muted-foreground">Diagnóstico gerado pela IA</span>
        </div>
        <CardTitle className="text-xl">{diagnostic.title}</CardTitle>
        <CardDescription className="text-sm font-medium">
          {diagnostic.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-1 bg-amber-100 rounded-full">
              <ArrowDownCircle className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">Causas Prováveis</h4>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                {diagnostic.causes.map((cause, idx) => (
                  <li key={idx}>{cause}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-1 bg-red-100 rounded-full">
              <ArrowUpCircle className="h-4 w-4 text-red-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">Implicações no Negócio</h4>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                {diagnostic.implications.map((imp, idx) => (
                  <li key={idx}>{imp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
