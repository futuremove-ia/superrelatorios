import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface AIInlineBoxProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export const AIInlineBox = ({
  title,
  description,
  actionLabel,
  onAction,
  onDismiss,
  className = ""
}: AIInlineBoxProps) => {
  const { t } = useTranslation();

  return (
    <Card className={`bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 overflow-hidden relative group ${className}`}>
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                {title}
                <span className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">
                  Sugestão IA
                </span>
              </h4>
              {onDismiss && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity" 
                  onClick={onDismiss}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {description}
            </p>
            {actionLabel && (
              <Button size="sm" onClick={onAction} className="h-8 text-xs">
                {actionLabel}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
