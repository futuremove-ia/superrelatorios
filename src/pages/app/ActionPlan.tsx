import React, { useState } from 'react';
import { 
  ListChecks, 
  CheckCircle2, 
  Circle, 
  Clock, 
  MoreHorizontal, 
  TrendingUp, 
  Zap, 
  ArrowRight,
  Target,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EmptyState } from '@/components/ui/empty-state';
import { mockActions, mockActionPlan } from '@/services/mockBusiness';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

/**
 * SuperRelatórios v2.0 - Plano de Ação (Smart Checklist)
 * Substitui o Kanban tradicional por uma lista de execução focada em impacto e ROI.
 */
const ActionPlan = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [actions, setActions] = useState<any[]>(mockActions);

  const toggleAction = (id: string) => {
    setActions(prev => prev.map(action => {
      if (action.id === id) {
        const isNowCompleted = action.status !== 'completed';
        
        if (isNowCompleted) {
          toast({
            title: t('action_plan.toast.completed_title'),
            description: t('action_plan.toast.completed_desc'),
            action: (
              <Button size="sm" variant="outline" className="gap-1 border-primary/20 hover:bg-primary/5">
                {t('action_plan.toast.cta_validate')} <Zap className="h-3 w-3 text-primary" />
              </Button>
            ),
          });
        }
        
        return { 
          ...action, 
          status: isNowCompleted ? 'completed' : 'pending' as any,
          updatedAt: new Date().toISOString()
        };
      }
      return action;
    }));
  };

  const completedCount = actions.filter(a => a.status === 'completed').length;
  const progressPercent = Math.round((completedCount / actions.length) * 100);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <ListChecks className="h-8 w-8 text-primary" />
            </div>
            {t('action_plan.title')}
          </h1>
          <p className="text-muted-foreground font-medium">
            {t('action_plan.subtitle')}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="gap-2 font-bold shadow-sm">
            <BarChart3 className="h-5 w-5" />
            {t('action_plan.view_impact')}
          </Button>
          <Button size="lg" className="gap-2 font-bold shadow-md bg-primary hover:bg-primary/90">
            <Zap className="h-5 w-5" />
            {t('action_plan.new_diagnostic')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {actions.length === 0 ? (
            <EmptyState 
              icon={ListChecks}
              title={t('action_plan.empty.title')}
              description={t('action_plan.empty.description')}
              actionLabel={t('action_plan.empty.cta')}
              onAction={() => {}}
            />
          ) : (
            <Card className="border-none shadow-xl bg-card overflow-hidden">
              <CardHeader className="pb-6 border-b bg-muted/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[10px] uppercase font-black tracking-widest px-2 py-0.5">
                      {t('action_plan.active_cycle')}
                    </Badge>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Ref: {mockActionPlan.id}</span>
                  </div>
                  <div className="text-xs font-bold text-muted-foreground">
                    {completedCount}/{actions.length} {t('action_plan.completed_label')}
                  </div>
                </div>
                <CardTitle className="text-2xl font-black tracking-tight">{mockActionPlan.title}</CardTitle>
                <CardDescription className="text-base font-medium text-muted-foreground/80 mt-1">
                  {mockActionPlan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {actions.map(action => (
                    <div 
                      key={action.id} 
                      className={`group p-6 flex items-start gap-5 transition-all duration-300 ${
                        action.status === 'completed' 
                          ? 'bg-muted/10 opacity-60' 
                          : 'hover:bg-primary/[0.02] active:bg-primary/[0.04]'
                      }`}
                    >
                      <button 
                        onClick={() => toggleAction(action.id)}
                        className="mt-1 flex-shrink-0 transition-all active:scale-90"
                      >
                        {action.status === 'completed' ? (
                          <div className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm shadow-green-200">
                            <CheckCircle2 className="h-4 w-4 stroke-[3px]" />
                          </div>
                        ) : (
                          <div className="h-7 w-7 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-primary transition-colors group-hover:bg-primary/5">
                            <Circle className="h-4 w-4 text-transparent" />
                          </div>
                        )}
                      </button>
                      
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-3">
                          <h4 className={`font-bold text-lg leading-none tracking-tight ${
                            action.status === 'completed' ? 'line-through text-muted-foreground decoration-2' : ''
                          }`}>
                            {action.title}
                          </h4>
                          {action.status !== 'completed' && (
                            <Badge className="bg-amber-100 text-amber-700 border-none text-[9px] font-black tracking-widest h-5">
                              {t('action_plan.high_impact_badge')}
                            </Badge>
                          )}
                        </div>
                        <p className={`text-sm leading-relaxed ${
                          action.status === 'completed' ? 'text-muted-foreground/60' : 'text-muted-foreground'
                        }`}>
                          {action.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3">
                          <div className="flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                            <Target className="h-3.5 w-3.5 text-primary/60" />
                            {t('action_plan.metric_label')} <span className="text-foreground">{t('action_plan.metric_value')}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                            <Clock className="h-3.5 w-3.5 text-muted-foreground/60" />
                            {t('action_plan.deadline_label')} <span className="text-foreground">{t('action_plan.deadline_value')}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-muted/5 flex justify-center border-t border-dashed">
                  <Button variant="ghost" size="sm" className="text-xs font-bold text-muted-foreground hover:text-primary gap-2">
                    <div className="h-4 w-4 rounded-full border border-current flex items-center justify-center text-[10px]">+</div>
                    {t('action_plan.add_manual')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card className="bg-primary shadow-2xl border-none text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <TrendingUp className="h-32 w-32 rotate-12" />
            </div>
            <CardHeader className="relative">
              <CardTitle className="text-xl font-black flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {t('action_plan.impact_card.title')}
              </CardTitle>
              <CardDescription className="text-primary-foreground/70 font-medium">
                {t('action_plan.impact_card.desc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative">
               <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                    <span>{t('action_plan.progress_label')}</span>
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                      style={{ width: `${progressPercent}%` }} 
                    />
                  </div>
               </div>

               <div className="grid grid-cols-1 gap-4 pt-2">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-1">{t('action_plan.impact_card.roi')}</p>
                    <p className="text-3xl font-black">{t('action_plan.impact_card.roi_value')}</p>
                  </div>
                  
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-1">{t('action_plan.impact_card.time_saved')}</p>
                    <p className="text-3xl font-black">{t('action_plan.impact_card.time_saved_value')} <span className="text-sm font-normal opacity-60">{t('action_plan.impact_card.time_saved_unit')}</span></p>
                  </div>
               </div>

               <Button className="w-full h-12 gap-2 bg-white text-primary hover:bg-white/90 font-black shadow-lg" variant="secondary">
                  {t('action_plan.impact_card.cta_evolution')}
                  <ArrowRight className="h-4 w-4" />
               </Button>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 bg-muted/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                <Target className="h-4 w-4" />
                {t('action_plan.next_target.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  {t('action_plan.next_target.desc')}
                </p>
                <div className="p-4 bg-background/50 rounded-xl border border-dashed text-center">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('action_plan.next_target.waiting')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;
