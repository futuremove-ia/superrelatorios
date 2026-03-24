/**
 * SuperRelatórios - KPI Selector Component
 * Componente para selecionar e exibir KPIs estratégicos
 */

import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { KPI, KPIS_DOMAINS, KPIFilter } from '@/types/strategy';
import { StrategyLibraryService } from '@/application/strategy/services/StrategyLibraryService';

interface KPISelectorProps {
  selectedKPI?: string;
  onKPISelect?: (kpiCode: string) => void;
  domain?: string;
  multiSelect?: boolean;
  showTrends?: boolean;
  placeholder?: string;
  className?: string;
}

export const KPISelector: React.FC<KPISelectorProps> = ({
  selectedKPI,
  onKPISelect,
  domain,
  multiSelect = false,
  showTrends = true,
  placeholder = "Selecione um KPI...",
  className = ""
}) => {
  const [kpis, setKPIs] = useState<KPI[]>([]);
  const [filteredKPIs, setFilteredKPIs] = useState<KPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>(domain || '');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadKPIs();
  }, [selectedDomain]);

  useEffect(() => {
    filterKPIs();
  }, [kpis, searchTerm, selectedDomain]);

  const loadKPIs = async () => {
    try {
      setLoading(true);
      const filters: KPIFilter = {
        domain: selectedDomain || undefined,
        is_active: true
      };
      const data = await StrategyLibraryService.getKPIs(filters);
      setKPIs(data);
    } catch (error) {
      console.error('Error loading KPIs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterKPIs = () => {
    let filtered = kpis;

    if (selectedDomain) {
      filtered = filtered.filter(kpi => kpi.domain === selectedDomain);
    }

    if (searchTerm) {
      filtered = filtered.filter(kpi =>
        kpi.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kpi.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kpi.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredKPIs(filtered);
  };

  const handleKPISelect = (kpiCode: string) => {
    if (multiSelect) {
      // Lógica para multi-select (implementar se necessário)
      console.log('Multi-select not implemented yet');
    } else {
      onKPISelect?.(kpiCode);
      setIsOpen(false);
    }
  };

  const getDomainColor = (domain: string) => {
    const colors = {
      finance: 'bg-blue-100 text-blue-800 border-blue-200',
      sales: 'bg-green-100 text-green-800 border-green-200',
      marketing: 'bg-purple-100 text-purple-800 border-purple-200',
      operations: 'bg-orange-100 text-orange-800 border-orange-200',
      hr: 'bg-pink-100 text-pink-800 border-pink-200',
      strategy: 'bg-indigo-100 text-indigo-800 border-indigo-200'
    };
    return colors[domain as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'higher_is_better':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'lower_is_better':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const formatBenchmark = (kpi: KPI) => {
    if (!kpi.benchmark_target) return null;
    
    return (
      <div className="text-xs text-gray-600 mt-1">
        <div>Alvo: {kpi.benchmark_target}{kpi.unit}</div>
        {kpi.benchmark_good && (
          <div>Bom: {kpi.benchmark_good}{kpi.unit}</div>
        )}
        {kpi.benchmark_warning && (
          <div>Atenção: {kpi.benchmark_warning}{kpi.unit}</div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="animate-pulse space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Filtros */}
      <div className="flex gap-3 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={selectedDomain} onValueChange={setSelectedDomain}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Todos os domínios" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todos os domínios</SelectItem>
            <SelectItem value={KPIS_DOMAINS.FINANCE}>Financeiro</SelectItem>
            <SelectItem value={KPIS_DOMAINS.SALES}>Vendas</SelectItem>
            <SelectItem value={KPIS_DOMAINS.MARKETING}>Marketing</SelectItem>
            <SelectItem value={KPIS_DOMAINS.OPERATIONS}>Operações</SelectItem>
            <SelectItem value={KPIS_DOMAINS.HR}>RH</SelectItem>
            <SelectItem value={KPIS_DOMAINS.STRATEGY}>Estratégia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Lista de KPIs */}
      <div className="max-h-96 overflow-y-auto space-y-2">
        {filteredKPIs.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Filter className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>Nenhum KPI encontrado</p>
            <p className="text-sm">Tente ajustar os filtros</p>
          </div>
        ) : (
          filteredKPIs.map((kpi) => (
            <Card
              key={kpi.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedKPI === kpi.code ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handleKPISelect(kpi.code)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getDomainColor(kpi.domain)}>
                        {kpi.domain}
                      </Badge>
                      {showTrends && getTrendIcon(kpi.trend_direction)}
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {kpi.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {kpi.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        {kpi.code}
                      </span>
                      <span>Unidade: {kpi.unit}</span>
                      <span>Tipo: {kpi.input_type}</span>
                      <span>Período: {kpi.group_data_period}</span>
                    </div>
                    
                    {formatBenchmark(kpi)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Contador */}
      <div className="text-sm text-gray-600 text-center">
        {filteredKPIs.length} KPI{filteredKPIs.length !== 1 ? 's' : ''} encontrado{filteredKPIs.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default KPISelector;
