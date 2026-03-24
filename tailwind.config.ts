import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        heading: ["Fira Sans", "sans-serif"],
        body: ["Fira Sans", "sans-serif"],
        metric: ["Fira Code", "monospace"],
      },
      spacing: {
        section: "2rem", // DSP section
        element: "1rem", // DSP element
        tight: "0.5rem", // DSP tight
        // Manter existentes + adicionar DSP
      },
      colors: {
        // DSP Semântica de Fundo e Superfície
        background: {
          light: "#FFFFFF",
          dark: "#0B0B0C",
          subtle: { light: "#F9FAFB", dark: "#121214" },
        },
        foreground: {
          light: "#0F172A", // Slate 900
          dark: "#FAFAFA",
          muted: { light: "#64748B", dark: "#A1A1AA" },
        },
        border: {
          light: "#E2E8F0",
          dark: "#1F1F23",
        },
        // Primary: Azul mais escuro da paleta existente (usando CSS variables)
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          states: {
            hover: {
              light: "hsl(var(--primary))",
              dark: "hsl(var(--primary))",
            },
          },
        },
        // Acento Estratégico (DSP) - usando CSS variables
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          states: {
            hover: { light: "hsl(var(--accent))", dark: "hsl(var(--accent))" },
          },
        },
        // Status Operacionais (Mapeamento Inteligente) - usando CSS variables
        status: {
          positive: "hsl(var(--status-positive))",
          negative: "hsl(var(--status-negative))",
          neutral: "hsl(var(--status-neutral))",
          pending: "hsl(var(--status-pending))",
        },
        // Cores legadas para compatibilidade (mapeamento)
        success: "#10B981",
        destructive: "#EF4444",
        info: "#3B82F6",
        warning: "#F59E0B",
        // Cores existentes mantidas para compatibilidade
        card: "hsl(var(--card))",
        popover: "hsl(var(--popover))",
        popoverForeground: "hsl(var(--popover-foreground))",
        secondary: "hsl(var(--secondary))",
        secondaryForeground: "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        mutedForeground: "hsl(var(--muted-foreground))",
        ring: "hsl(var(--ring))",
        input: "hsl(var(--input))",
        brand: {
          super: "hsl(var(--brand-super))",
          relatorios: "hsl(var(--brand-relatorios))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
