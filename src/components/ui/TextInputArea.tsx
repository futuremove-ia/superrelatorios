"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface TextInputAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}

const MAX_CHARS = 50000;

export function TextInputArea({
  value = "",
  onChange,
  placeholder = "Cole aqui seus dados... Ex: Receita: R$100.000, Custos: R$50.000",
  disabled = false,
  error,
  className,
}: TextInputAreaProps) {
  const [touched, setTouched] = React.useState(false);

  const charCount = value.length;
  const isOverLimit = charCount > MAX_CHARS;
  const isEmpty = touched && charCount === 0;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.slice(0, MAX_CHARS);
    onChange?.(text);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="relative">
        <textarea
          value={value}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-y",
            isOverLimit && "border-red-500 focus-visible:ring-red-500",
            isEmpty && "border-amber-500 focus-visible:ring-amber-500",
          )}
          aria-invalid={isOverLimit || isEmpty}
          aria-describedby={error ? "text-input-error" : undefined}
        />
        {isEmpty && !isOverLimit && (
          <div className="absolute top-2 right-2">
            <AlertCircle className="h-4 w-4 text-amber-500" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">
          {isOverLimit ? (
            <span className="text-red-500">Limite máximo excedido</span>
          ) : isEmpty ? (
            <span className="text-amber-600">Campo obrigatório</span>
          ) : null}
        </div>
        <div
          className={cn(
            "text-xs",
            isOverLimit
              ? "text-red-500"
              : charCount > MAX_CHARS * 0.9
                ? "text-amber-500"
                : "text-muted-foreground",
          )}
        >
          {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
