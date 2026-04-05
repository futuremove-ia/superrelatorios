import { j as e } from "./vendor-radix-C8JHQxE0.js";
import { C, a as p } from "./card-BOBgEvG6.js";
import { B as j } from "./badge-DMwHsW7P.js";
import { c as a } from "./index-DF8MdIXV.js";
import { f as B, a6 as v } from "./vendor-utils-BdCfJOxW.js";
const N = {
    finance: { main: "#10B981", light: "#34D399", bg: "#ECFDF5" },
    commercial: { main: "#3B82F6", light: "#60A5FA", bg: "#EFF6FF" },
    marketing: { main: "#8B5CF6", light: "#A78BFA", bg: "#F5F3FF" },
    operations: { main: "#F59E0B", light: "#FBBF24", bg: "#FFFBEB" },
    people: { main: "#14B8A6", light: "#2DD4BF", bg: "#F0FDFA" },
  },
  y = ({
    title: l,
    value: c,
    icon: m,
    trend: s,
    subtitle: t,
    variant: o = "default",
    domain: i,
    className: d,
    role: x,
    "aria-label": g,
    style: F,
  }) => {
    const r = i ? N[i] : null,
      n = () => {
        if (r) return { borderColor: `${r.main}20`, backgroundColor: r.bg };
        switch (o) {
          case "success":
            return { borderColor: "#86EFAC", backgroundColor: "#F0FDF4" };
          case "warning":
            return { borderColor: "#FDE047", backgroundColor: "#FEFCE8" };
          case "info":
            return { borderColor: "#93C5FD", backgroundColor: "#EFF6FF" };
          default:
            return {};
        }
      },
      u = () => {
        if (r) return r.main;
        switch (o) {
          case "success":
            return "#10B981";
          case "warning":
            return "#F59E0B";
          case "info":
            return "#3B82F6";
          default:
            return "currentColor";
        }
      },
      h = n(),
      b = u(),
      f = r ? "border-l-4" : "";
    return e.jsx(C, {
      className: a("card-hover touch-target border", !r && n(), f, d),
      style: { ...F, ...h, ...(r && { borderLeftColor: r.main }) },
      role: x,
      "aria-label": g,
      children: e.jsxs(p, {
        className: "p-4 sm:p-6",
        children: [
          e.jsxs("div", {
            className: "flex items-start justify-between",
            children: [
              e.jsxs("div", {
                className: "flex-1",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [
                      e.jsx(m, {
                        className: a("h-4 w-4 sm:h-5 sm:w-5"),
                        style: { color: b },
                        "aria-hidden": "true",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xs sm:text-sm font-medium text-muted-foreground",
                        children: l,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-2xl sm:text-3xl font-bold text-foreground",
                        children: c,
                      }),
                      t &&
                        e.jsx("p", {
                          className: "text-xs sm:text-sm text-muted-foreground",
                          children: t,
                        }),
                    ],
                  }),
                ],
              }),
              s &&
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    s.isPositive
                      ? e.jsx(B, {
                          className: "h-3 w-3 sm:h-4 sm:w-4 text-green-600",
                          "aria-hidden": "true",
                        })
                      : e.jsx(v, {
                          className: "h-3 w-3 sm:h-4 sm:w-4 text-red-600",
                          "aria-hidden": "true",
                        }),
                    e.jsxs(j, {
                      variant: "secondary",
                      className: a(
                        "text-xs",
                        s.isPositive
                          ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                          : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
                      ),
                      "aria-label": `Tendência ${s.isPositive ? "positiva" : "negativa"} de ${Math.abs(s.value)}%`,
                      children: [s.isPositive ? "+" : "", s.value, "%"],
                    }),
                  ],
                }),
            ],
          }),
          (s == null ? void 0 : s.label) &&
            e.jsx("p", {
              className: "text-xs text-muted-foreground mt-2",
              children: s.label,
            }),
        ],
      }),
    });
  };
export { y as K };
