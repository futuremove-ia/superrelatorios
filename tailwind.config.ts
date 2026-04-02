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
        sans: ["Inter", "system-ui", "sans-serif"], // DSP: Substituir Montserrat
        mono: ["Geist Mono", "monospace"], // DSP: Adicionar Geist Mono
        heading: ["Inter", "system-ui", "sans-serif"], // DSP: Substituir Montserrat
        body: ["Inter", "system-ui", "sans-serif"], // Mantido Inter
        metric: ["Geist Mono", "monospace"], // DSP: Nova classe para métricas
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
          light: "#0F172A",
          dark: "#FAFAFA",
          muted: { light: "#64748B", dark: "#A1A1AA" },
        },
        border: {
          light: "#E2E8F0",
          dark: "#1F1F23",
        },
        // Primary: Preto (Unicorn Style)
        primary: {
          DEFAULT: "#0A0A0A",
          foreground: "#FFFFFF",
        },
        // Accent: Azul elétrico
        accent: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF",
        },
        // Cores de Domínio (Unicorn Style)
        domain: {
          finance: {
            DEFAULT: "hsl(var(--domain-finance))",
            light: "hsl(var(--domain-finance-light))",
            bg: "hsl(var(--domain-finance-bg))",
          },
          commercial: {
            DEFAULT: "hsl(var(--domain-commercial))",
            light: "hsl(var(--domain-commercial-light))",
            bg: "hsl(var(--domain-commercial-bg))",
          },
          marketing: {
            DEFAULT: "hsl(var(--domain-marketing))",
            light: "hsl(var(--domain-marketing-light))",
            bg: "hsl(var(--domain-marketing-bg))",
          },
          operations: {
            DEFAULT: "hsl(var(--domain-operations))",
            light: "hsl(var(--domain-operations-light))",
            bg: "hsl(var(--domain-operations-bg))",
          },
          people: {
            DEFAULT: "hsl(var(--domain-people))",
            light: "hsl(var(--domain-people-light))",
            bg: "hsl(var(--domain-people-bg))",
          },
        },
        // Status Operacionais
        status: {
          positive: "hsl(var(--status-positive))",
          negative: "hsl(var(--status-negative))",
          neutral: "hsl(var(--status-neutral))",
          pending: "hsl(var(--status-pending))",
        },
        // Cores legadas para compatibilidade
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
