import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, TrendingDown, Minus, Target } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BenchmarkCardProps {
  title: string
  actualValue: number
  benchmarkValue: number
  unit: string
  currency?: string
  trend?: {
    value: number
    isPositive: boolean
    label?: string
  }
  className?: string
}

export function BenchmarkCard({ 
  title, 
  actualValue, 
  benchmarkValue, 
  unit, 
  currency, 
  trend,
  className 
}: BenchmarkCardProps) {
  const formatValue = (value: number) => {
    if (unit === 'BRL' || unit === 'USD' || unit === 'EUR') {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency || 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value)
    }
    
    if (unit === '%') {
      return `${value.toFixed(1)}%`
    }
    
    if (unit === 'pontos') {
      return `${value.toFixed(1)} pts`
    }
    
    return value.toLocaleString('pt-BR')
  }

  const percentage = (actualValue / benchmarkValue) * 100
  const isGood = actualValue >= benchmarkValue
  
  const getPerformanceColor = () => {
    if (percentage >= 120) return 'text-green-600'
    if (percentage >= 100) return 'text-green-500'
    if (percentage >= 80) return 'text-yellow-600'
    if (percentage >= 60) return 'text-orange-600'
    return 'text-red-600'
  }

  const getProgressColor = () => {
    if (percentage >= 120) return 'bg-green-600'
    if (percentage >= 100) return 'bg-green-500'
    if (percentage >= 80) return 'bg-yellow-600'
    if (percentage >= 60) return 'bg-orange-600'
    return 'bg-red-600'
  }

  const getBadgeVariant = () => {
    if (percentage >= 120) return 'default'
    if (percentage >= 100) return 'default'
    if (percentage >= 80) return 'secondary'
    if (percentage >= 60) return 'destructive'
    return 'destructive'
  }

  const getTrendIcon = () => {
    if (!trend) return <Minus className="h-4 w-4 text-gray-500" />
    
    if (trend.isPositive) {
      return <TrendingUp className="h-4 w-4 text-green-500" />
    } else {
      return <TrendingDown className="h-4 w-4 text-red-500" />
    }
  }

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="flex items-center space-x-2">
          {trend && (
            <div className="flex items-center space-x-1">
              {getTrendIcon()}
              {trend.label && (
                <span className="text-xs text-muted-foreground">
                  {trend.label}
                </span>
              )}
            </div>
          )}
          <Target className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Valor Atual */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Atual</span>
          <span className={cn('text-2xl font-bold', getPerformanceColor())}>
            {formatValue(actualValue)}
          </span>
        </div>

        {/* Meta */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Meta</span>
          <span className="text-sm font-medium">
            {formatValue(benchmarkValue)}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Progress 
            value={Math.min(percentage, 150)} 
            className="h-2"
            // @ts-ignore - Custom color prop
            style={{
              '--progress-background': getProgressColor()
            }}
          />
          <div className="flex justify-between items-center">
            <Badge variant={getBadgeVariant()}>
              {percentage >= 150 ? '>150%' : `${percentage.toFixed(0)}%`}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {isGood ? '✓ Meta alcançada' : '▼ Abaixo da meta'}
            </span>
          </div>
        </div>

        {/* Gap Analysis */}
        {actualValue !== benchmarkValue && (
          <div className="pt-2 border-t">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground">Gap</span>
              <span className={cn('font-medium', isGood ? 'text-green-600' : 'text-red-600')}>
                {isGood ? '+' : '-'}{formatValue(Math.abs(actualValue - benchmarkValue))}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
