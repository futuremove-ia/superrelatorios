import React from 'react';
import { useReportBuilderContext } from '@/contexts/ReportBuilderContext';
import { DynamicBlockRenderer } from '@/components/reports/renderer/DynamicBlockRenderer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GripVertical, Trash2, Plus, Settings2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BlockEditorStep = () => {
  const { blocks, setBlocks, loading } = useReportBuilderContext();
  const { t } = useTranslation();

  const removeBlock = (id: string) => {
    setBlocks(prev => prev.filter(b => b.id !== id));
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= blocks.length) return;
    
    const newBlocks = [...blocks];
    const [movedBlock] = newBlocks.splice(index, 1);
    newBlocks.splice(newIndex, 0, movedBlock);
    setBlocks(newBlocks);
  };

  if (loading && blocks.length === 0) {
    return (
      <div className="space-y-6 py-12 text-center">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold">{t('builder.steps.blocks.loading_title')}</h2>
        <p className="text-muted-foreground">{t('builder.steps.blocks.loading_desc')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('builder.steps.blocks.title')}</h2>
        <p className="text-muted-foreground">
          {t('builder.steps.blocks.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Editor Surface */}
        <div className="lg:col-span-3 space-y-4">
          {blocks.map((block, index) => (
            <div key={block.id} className="relative group animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Block Controls - Floats on hover */}
              <div className="absolute -left-12 top-0 bottom-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 cursor-grab active:cursor-grabbing"
                  onClick={() => {}} // Integration for dnd-kit later
                >
                  <GripVertical className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>

              <Card className="border-border/40 overflow-hidden group/card relative">
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity z-20">
                  <Button variant="outline" size="sm" className="h-7 w-7 p-0 bg-background/80 backdrop-blur-sm" onClick={() => moveBlock(index, 'up')} disabled={index === 0}>
                    <Plus className="h-3 w-3 rotate-45" /> {/* Representative as Up arrow icon alternative or use real icon */}
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 w-7 p-0 bg-background/80 backdrop-blur-sm text-destructive hover:bg-destructive/10" onClick={() => removeBlock(block.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>

                <div className="bg-muted/5 p-2 px-4 border-b border-border/20 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{block.type}</span>
                </div>
                
                <div className="p-4 pointer-events-none opacity-80 scale-[0.98]">
                   <DynamicBlockRenderer blocks={[block]} />
                </div>
              </Card>
            </div>
          ))}
          
          <Button variant="outline" className="w-full border-dashed py-8 border-2 group hover:border-primary/50 hover:bg-primary/5">
            <Plus className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            {t('builder.steps.blocks.add_block')}
          </Button>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Settings2 className="h-4 w-4" />
                {t('builder.steps.blocks.ai_hint_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('builder.steps.blocks.ai_hint_body')}
              </p>
            </CardContent>
          </Card>

          <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
            <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              {t('builder.steps.blocks.auto_mapping_title')}
            </h4>
            <p className="text-[11px] text-muted-foreground">
              {t('builder.steps.blocks.auto_mapping_body')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
