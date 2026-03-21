import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Priority, PriorityScore } from '@/types/business';
import { ScoreAdjuster } from './ScoreAdjuster';
import { Target, CheckCircle2, AlertCircle } from 'lucide-react';

import { useTranslation } from 'react-i18next';

interface PriorityValidationModalProps {
  priority: Priority;
  isOpen: boolean;
  onClose: () => void;
  onValidate: (id: string, finalScore: PriorityScore) => void;
}

export const PriorityValidationModal: React.FC<PriorityValidationModalProps> = ({
  priority,
  isOpen,
  onClose,
  onValidate,
}) => {
  const { t } = useTranslation();
  const [currentScore, setCurrentScore] = useState<PriorityScore>({ ...priority.score });

  const handleValidate = () => {
    onValidate(priority.id, currentScore);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary mb-2">
            <Target className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">{t('priorities.validation_modal.title')}</span>
          </div>
          <DialogTitle className="text-2xl">{priority.title}</DialogTitle>
          <DialogDescription>
            {t('priorities.validation_modal.description')}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                {t('priorities.validation_modal.why_important')}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {priority.explanation}
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider">{t('priorities.validation_modal.status_label')}</h4>
              <div className="flex items-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 w-fit px-2 py-1 rounded border border-amber-100">
                {t('priorities.card.ai_suggested')}
              </div>
            </div>
          </div>

          <div className="border-l pl-8 border-border/50">
            <ScoreAdjuster score={currentScore} onChange={setCurrentScore} />
          </div>
        </div>

        <DialogFooter className="mt-8 pt-6 border-t">
          <Button variant="ghost" onClick={onClose}>{t('priorities.validation_modal.cta_cancel')}</Button>
          <Button onClick={handleValidate} className="gap-2">
            <CheckCircle2 className="h-4 w-4" />
            {t('priorities.validation_modal.cta_confirm')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

