import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { PriorityScore } from '@/types/business';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { useTranslation } from 'react-i18next';

interface ScoreAdjusterProps {
  score: PriorityScore;
  onChange: (newScore: PriorityScore) => void;
}

export const ScoreAdjuster: React.FC<ScoreAdjusterProps> = ({ score, onChange }) => {
  const { t } = useTranslation();
  
  const updateScore = (key: keyof Omit<PriorityScore, 'calculatedValue'>, value: number) => {
    const newScore = { ...score, [key]: value };
    newScore.calculatedValue = Math.round(
      (newScore.impact * newScore.urgency * newScore.confidence) / newScore.effort
    );
    onChange(newScore);
  };

  const fields = [
    { key: 'impact', label: t('priorities.validation_modal.rice.impact'), tooltip: t('priorities.validation_modal.rice.impact_tip') },
    { key: 'urgency', label: t('priorities.validation_modal.rice.urgency'), tooltip: t('priorities.validation_modal.rice.urgency_tip') },
    { key: 'confidence', label: t('priorities.validation_modal.rice.confidence'), tooltip: t('priorities.validation_modal.rice.confidence_tip') },
    { key: 'effort', label: t('priorities.validation_modal.rice.effort'), tooltip: t('priorities.validation_modal.rice.effort_tip') },
  ] as const;

  return (
    <div className="space-y-6 py-4">
      <div className="grid grid-cols-1 gap-6">
        {fields.map((field) => (
          <div key={field.key} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {field.label}
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-xs">{field.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span className="text-lg font-mono font-bold text-primary">
                {score[field.key]}
              </span>
            </div>
            <Slider
              value={[score[field.key]]}
              min={1}
              max={10}
              step={1}
              onValueChange={([val]) => updateScore(field.key, val)}
              className="py-2"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-primary/60 tracking-widest">{t('priorities.validation_modal.rice.final_score')}</p>
          <p className="text-sm text-muted-foreground">{t('priorities.validation_modal.rice.formula')}</p>
        </div>
        <div className="text-3xl font-black text-primary">
          {score.calculatedValue}
        </div>
      </div>
    </div>
  );
};

