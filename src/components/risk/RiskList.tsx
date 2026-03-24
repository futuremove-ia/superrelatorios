import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  User,
  Calendar,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2
} from 'lucide-react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { type Risk } from '@/services/riskService'
import { cn } from '@/lib/utils'

interface RiskListProps {
  risks: Risk[]
  onRiskClick?: (risk: Risk) => void
  onRiskEdit?: (risk: Risk) => void
  onRiskDelete?: (risk: Risk) => void
  onStatusUpdate?: (risk: Risk, status: Risk['status']) => void
  className?: string
}

export function RiskList({ 
  risks, 
  onRiskClick, 
  onRiskEdit, 
  onRiskDelete, 
  onStatusUpdate,
  className 
}: RiskListProps) {
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null)

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

  const getOriginIcon = (origin: string) => {
    switch (origin) {
      case 'internal':
        return <User className="h-4 w-4 text-blue-500" />
      case 'external':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'identified':
        return <Eye className="h-4 w-4 text-blue-500" />
      case 'active':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case 'mitigated':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'occurred':
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'identified':
        return 'default'
      case 'active':
        return 'destructive'
      case 'mitigated':
        return 'default'
      case 'occurred':
        return 'destructive'
      case 'archived':
        return 'secondary'
      default:
        return 'outline'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const handleStatusUpdate = (risk: Risk, newStatus: Risk['status']) => {
    if (onStatusUpdate) {
      onStatusUpdate(risk, newStatus)
    }
  }

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Riscos ({risks.length})</span>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              {risks.filter(r => r.risk_score >= 70).length} Críticos
            </Badge>
            <Badge variant="secondary">
              {risks.filter(r => r.risk_score >= 50 && r.risk_score < 70).length} Altos
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {risks.map((risk) => (
            <div
              key={risk.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-base line-clamp-2">{risk.title}</h3>
                    <Badge variant={getRiskLevelColor(risk.risk_score)}>
                      {getRiskLevelText(risk.risk_score)}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                    {risk.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <span>Categoria:</span>
                      <span className="font-medium">{risk.category}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {getOriginIcon(risk.origin_type)}
                      <span className="font-medium capitalize">{risk.origin_type}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(risk.created_at)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onRiskClick?.(risk)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalhes
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={() => onRiskEdit?.(risk)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuItem 
                      onClick={() => handleStatusUpdate(risk, 'identified')}
                      disabled={risk.status === 'identified'}
                    >
                      {getStatusIcon('identified')}
                      Identificado
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem 
                      onClick={() => handleStatusUpdate(risk, 'active')}
                      disabled={risk.status === 'active'}
                    >
                      {getStatusIcon('active')}
                      Ativo
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem 
                      onClick={() => handleStatusUpdate(risk, 'mitigated')}
                      disabled={risk.status === 'mitigated'}
                    >
                      {getStatusIcon('mitigated')}
                      Mitigado
                    </DropdownMenuItem>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuItem 
                      onClick={() => onRiskDelete?.(risk)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Status Badge */}
              <div className="flex items-center space-x-2">
                <Badge variant={getStatusColor(risk.status)} className="flex items-center space-x-1">
                  {getStatusIcon(risk.status)}
                  <span className="capitalize">{risk.status}</span>
                </Badge>
                
                <div className="text-xs text-muted-foreground">
                  Score: <span className="font-bold">{risk.risk_score}</span>
                </div>
              </div>

              {/* Expandable Details */}
              <div className="border-t pt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full h-8 text-xs"
                  onClick={() => setExpandedRisk(expandedRisk === risk.id ? null : risk.id)}
                >
                  {expandedRisk === risk.id ? 'Ocultar' : 'Ver'} detalhes
                </Button>
                
                {expandedRisk === risk.id && (
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-muted-foreground">Probabilidade:</span>
                        <span className="font-medium">{risk.likelihood}/10</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impacto:</span>
                        <span className="font-medium">{risk.impact}/10</span>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground">Cálculo do Score:</span>
                      <span className="font-medium">{risk.likelihood} × {risk.impact} = {risk.risk_score}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {risks.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">Nenhum risco identificado</h3>
            <p className="text-sm">
              Comece identificando os riscos da sua organização para gerenciar melhor suas incertezas.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
