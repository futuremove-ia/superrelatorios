import { j as t, c as m } from "./index-BYfWtJYS.js";
import { i as d, d as b, c as u, b as f, bt as h } from "./utils-BB96Jj32.js";
const l = {
    finance: {
      id: "finance",
      label: "Financeiro",
      labelEn: "Finance",
      labelEs: "Finanzas",
      color: "emerald",
      icon: "DollarSign",
    },
    commercial: {
      id: "commercial",
      label: "Comercial",
      labelEn: "Commercial",
      labelEs: "Comercial",
      color: "blue",
      icon: "TrendingUp",
    },
    operations: {
      id: "operations",
      label: "Operacional",
      labelEn: "Operations",
      labelEs: "Operaciones",
      color: "amber",
      icon: "Settings",
    },
    strategy: {
      id: "strategy",
      label: "Estratégia",
      labelEn: "Strategy",
      labelEs: "Estrategia",
      color: "purple",
      icon: "Target",
    },
    marketing: {
      id: "marketing",
      label: "Marketing",
      labelEn: "Marketing",
      labelEs: "Marketing",
      color: "pink",
      icon: "Megaphone",
    },
  },
  g = { DollarSign: d, TrendingUp: b, Settings: u, Target: f, Megaphone: h },
  N = ({
    domain: s,
    size: o = "md",
    variant: i = "default",
    showIcon: n = !0,
    className: x,
  }) => {
    const r = l[s],
      c = g[r.icon],
      e = {
        sm: "text-[10px] px-1.5 py-0.5 gap-1",
        md: "text-xs px-2 py-1 gap-1.5",
        lg: "text-sm px-3 py-1.5 gap-2",
      },
      a = {
        default: `bg-${r.color}-50 text-${r.color}-700 border-${r.color}-200`,
        outline: `bg-transparent text-${r.color}-700 border-${r.color}-300`,
        filled: `bg-${r.color}-500 text-white border-transparent`,
      },
      p = { sm: "h-3 w-3", md: "h-3.5 w-3.5", lg: "h-4 w-4" };
    return t.jsxs("span", {
      className: m(
        "inline-flex items-center font-medium border rounded-full transition-colors",
        e[o],
        a[i],
        x,
      ),
      children: [
        n && c && t.jsx(c, { className: p[o] }),
        t.jsx("span", { children: r.label }),
      ],
    });
  },
  $ = ({ selected: s, onChange: o, className: i }) => {
    const n = Object.keys(l),
      x = (e) => {
        s.includes(e) ? o(s.filter((a) => a !== e)) : o([...s, e]);
      },
      r = () => {
        o(n);
      },
      c = () => {
        o([]);
      };
    return t.jsxs("div", {
      className: m("flex flex-wrap items-center gap-2", i),
      children: [
        t.jsx("span", {
          className: "text-sm text-muted-foreground mr-2",
          children: "Filtrar por:",
        }),
        n.map((e) =>
          t.jsxs(
            "button",
            {
              onClick: () => x(e),
              className: m(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium",
                "transition-all duration-200 border",
                s.includes(e)
                  ? `bg-${l[e].color}-500 text-white border-${l[e].color}-500`
                  : `bg-white text-${l[e].color}-700 border-${l[e].color}-200 hover:bg-${l[e].color}-50`,
              ),
              children: [
                (() => {
                  const a = g[l[e].icon];
                  return a ? t.jsx(a, { className: "h-4 w-4" }) : null;
                })(),
                l[e].label,
              ],
            },
            e,
          ),
        ),
        t.jsxs("div", {
          className: "ml-auto flex gap-2",
          children: [
            t.jsx("button", {
              onClick: r,
              className:
                "text-xs text-muted-foreground hover:text-foreground transition-colors",
              children: "Todos",
            }),
            t.jsx("span", {
              className: "text-muted-foreground",
              children: "|",
            }),
            t.jsx("button", {
              onClick: c,
              className:
                "text-xs text-muted-foreground hover:text-foreground transition-colors",
              children: "Limpar",
            }),
          ],
        }),
      ],
    });
  };
export { $ as D, N as a };
