import React from "react";
import { Progress } from "@/components/ui/progress";
import { Check, DollarSign, TrendingUp, Users } from "lucide-react";

interface DiagnosisProgressBarProps {
  foundation: number;
  efficiency: number;
  growth: number;
}

const domainConfig = {
  foundation: { label: "Fundação", icon: DollarSign, color: "bg-green-600" },
  efficiency: { label: "Eficiência", icon: TrendingUp, color: "bg-blue-600" },
  growth: { label: "Crescimento", icon: Users, color: "bg-purple-600" },
};

export function DiagnosisProgressBar({ foundation, efficiency, growth }: DiagnosisProgressBarProps) {
  const total = foundation + efficiency + growth;
  const totalPercent = Math.round((total / 3) * 100);

  const domains = [
    { key: "foundation" as const, value: foundation, ...domainConfig.foundation },
    { key: "efficiency" as const, value: efficiency, ...domainConfig.efficiency },
    { key: "growth" as const, value: growth, ...domainConfig.growth },
  ];

  return (
    <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Conclusão do Diagnóstico</span>
        <span className="text-sm font-bold">{totalPercent}%</span>
      </div>
      
      <Progress value={totalPercent} className="h-3" />
      
      <div className="grid grid-cols-3 gap-2 mt-4">
        {domains.map((domain) => {
          const Icon = domain.icon;
          const percent = Math.round(domain.value * 100);
          return (
            <div key={domain.key} className="text-center">
              <div className={`w-10 h-10 rounded-full ${domain.color} flex items-center justify-center mx-auto mb-2`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-xs font-medium">{domain.label}</div>
              <div className="text-xs text-muted-foreground">{percent}%</div>
            </div>
          );
        })}
      </div>

      {totalPercent === 100 && (
        <div className="flex items-center gap-2 text-green-600 mt-2">
          <Check className="h-4 w-4" />
          <span className="text-sm font-medium">Diagnóstico completo!</span>
        </div>
      )}
    </div>
  );
}
