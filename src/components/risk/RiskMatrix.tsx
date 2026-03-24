import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  AlertTriangle, 
  AlertCircle, 
  CheckCircle, 
  Info,
  ZoomIn
} from 'lucide-react'
import { type Risk, type RiskMatrix as RiskMatrixType } from '@/services/riskService'
import { cn } from '@/lib/utils'

interface RiskMatrixProps {
  risks: Risk[]
  matrix: RiskMatrixType['matrix']
  onRiskClick?: (risk: Risk) => void
  className?: string
}

export function RiskMatrix({ risks, matrix, onRiskClick, className }: RiskMatrixProps) {
  const getCellColor = (count: number, avgScore: number) => {
    if (count === 0) return 'bg-gray-50 border-gray-200'
    
    if (avgScore >= 70) return 'bg-red-500 border-red-600 text-white'
    if (avgScore >= 50) return 'bg-orange-400 border-orange-500 text-white'
    if (avgScore >= 30) return 'bg-yellow-300 border-yellow-400'
    return 'bg-green-200 border-green-300'
  }

  const getRiskLevelColor = (score: number) => {
    if (score >= 70) return 'destructive'
    if (score >= 50) return 'secondary'
    if (score >= 30) return 'outline'
    return 'default'
  }

  const getRiskLevelText = (score: number) => {
    if (score >= 70) return 'Crítico'
    if (score >= 50) return 'Alto'
    if (score >= 30) return 'Médio'
    return 'Baixo'
  }

  const handleCellClick = (cell: any) => {
    if (cell.risks.length > 0 && onRiskClick) {
      // Open first risk in cell or show list
      onRiskClick(cell.risks[0])
    }
  }

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Matriz de Riscos</span>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded" />
              <span>Crítico</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-orange-400 rounded" />
              <span>Alto</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-yellow-300 rounded" />
              <span>Médio</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-200 rounded" />
              <span>Baixo</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Matrix Grid */}
          <div className="relative">
            {/* Axis Labels */}
            <div className="absolute -top-6 left-8 text-xs text-muted-foreground">
              Impacto →
            </div>
            <div className="absolute -left-8 top-8 text-xs text-muted-foreground transform -rotate-90 origin-center">
              Probabilidade ↓
            </div>
            
            {/* Matrix */}
            <div className="grid grid-cols-11 gap-1 p-8 pt-8">
              {/* Header row */}
              <div className="col-start-2 row-start-1 text-xs text-center font-medium">
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="w-8 h-8 flex items-center justify-center border border-gray-300">
                    {i + 1}
                  </div>
                ))}
              </div>
              
              {/* Matrix rows */}
              {matrix.map((row, i) => (
                <React.Fragment key={i}>
                  {/* Row label */}
                  <div className="col-start-1 row-start-{i + 2} text-xs text-center font-medium">
                    <div className="w-8 h-8 flex items-center justify-center border border-gray-300">
                      {10 - i}
                    </div>
                  </div>
                  
                  {/* Row cells */}
                  {row.map((cell, j) => {
                    const avgScore = cell.risks.length > 0 
                      ? cell.risks.reduce((sum, risk) => sum + risk.risk_score, 0) / cell.risks.length
                      : 0
                    
                    return (
                      <div
                        key={`${i}-${j}`}
                        className={cn(
                          'w-8 h-8 border flex items-center justify-center text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity',
                          getCellColor(cell.count, avgScore)
                        )}
                        onClick={() => handleCellClick(cell)}
                        title={`${cell.count} risco(s) - Score médio: ${avgScore.toFixed(1)}`}
                      >
                        {cell.count > 0 ? (
                          <div className="text-center">
                            <div>{cell.count}</div>
                            {cell.count <= 3 && (
                              <div className="text-xs opacity-75">
                                {avgScore.toFixed(0)}
                              </div>
                            )}
                          </div>
                        ) : (
                          '-'
                        )}
                      </div>
                    )
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Risk Summary */}
          <div className="border-t pt-4">
            <h4 className="text-sm font-medium mb-3">Riscos Identificados</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {risks.slice(0, 6).map((risk) => (
                <div
                  key={risk.id}
                  className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => onRiskClick?.(risk)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium text-sm line-clamp-2">{risk.title}</h5>
                    <Badge variant={getRiskLevelColor(risk.risk_score)}>
                      {getRiskLevelText(risk.risk_score)}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Categoria:</span>
                      <span className="font-medium">{risk.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Origem:</span>
                      <span className="font-medium">{risk.origin_type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Score:</span>
                      <span className="font-medium">{risk.risk_score}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 pt-2 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full h-8 text-xs"
                      onClick={() => onRiskClick?.(risk)}
                    >
                      <ZoomIn className="h-3 w-3 mr-1" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {risks.length > 6 && (
              <div className="mt-3 text-center">
                <Button variant="outline" size="sm">
                  Ver todos os {risks.length} riscos
                </Button>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-medium mb-3">Legenda de Cores</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded" />
                <span>Score ≥ 70 (Crítico)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-400 rounded" />
                <span>Score ≥ 50 (Alto)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-300 rounded" />
                <span>Score ≥ 30 (Médio)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-200 rounded" />
                <span>Score &lt; 30 (Baixo)</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
