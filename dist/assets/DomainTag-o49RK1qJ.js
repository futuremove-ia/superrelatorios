import { j as l } from "./vendor-data-DuuuwLk5.js";
import { c as p } from "./index-CaCe4Bjh.js";
import {
  H as d,
  by as x,
  k as u,
  bz as f,
  d as h,
  e as E,
  f as j,
  l as y,
} from "./vendor-utils-CGetvm_l.js";
const s = {
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
    marketing: {
      id: "marketing",
      label: "Marketing",
      labelEn: "Marketing",
      labelEs: "Marketing",
      color: "pink",
      icon: "Megaphone",
    },
    operations: {
      id: "operations",
      label: "Operações",
      labelEn: "Operations",
      labelEs: "Operaciones",
      color: "amber",
      icon: "Settings",
    },
    people: {
      id: "people",
      label: "Pessoas",
      labelEn: "People",
      labelEs: "Personas",
      color: "rose",
      icon: "Users",
    },
    strategy: {
      id: "strategy",
      label: "Estratégia",
      labelEn: "Strategy",
      labelEs: "Estrategia",
      color: "purple",
      icon: "Target",
    },
    technology: {
      id: "technology",
      label: "Tecnologia",
      labelEn: "Technology",
      labelEs: "Tecnología",
      color: "cyan",
      icon: "Cpu",
    },
    customers: {
      id: "customers",
      label: "Clientes",
      labelEn: "Customers",
      labelEs: "Clientes",
      color: "orange",
      icon: "Heart",
    },
    sales: {
      id: "sales",
      label: "Vendas",
      labelEn: "Sales",
      labelEs: "Ventas",
      color: "blue",
      icon: "TrendingUp",
    },
  },
  g = {
    DollarSign: y,
    TrendingUp: j,
    Settings: E,
    Target: h,
    Megaphone: f,
    Users: u,
    Cpu: x,
    Heart: d,
  },
  $ = ({
    domain: t,
    size: r = "md",
    variant: i = "default",
    showIcon: n = !0,
    className: b,
  }) => {
    const o = s[t],
      c = g[o.icon],
      e = {
        sm: "text-[10px] px-1.5 py-0.5 gap-1",
        md: "text-xs px-2 py-1 gap-1.5",
        lg: "text-sm px-3 py-1.5 gap-2",
      },
      a = {
        default: `bg-${o.color}-50 text-${o.color}-700 border-${o.color}-200`,
        outline: `bg-transparent text-${o.color}-700 border-${o.color}-300`,
        filled: `bg-${o.color}-500 text-white border-transparent`,
      },
      m = { sm: "h-3 w-3", md: "h-3.5 w-3.5", lg: "h-4 w-4" };
    return l.jsxs("span", {
      className: p(
        "inline-flex items-center font-medium border rounded-full transition-colors",
        e[r],
        a[i],
        b,
      ),
      children: [
        n && c && l.jsx(c, { className: m[r] }),
        l.jsx("span", { children: o.label }),
      ],
    });
  },
  T = ({ selected: t, onChange: r, className: i }) => {
    const n = Object.keys(s),
      b = (e) => {
        t.includes(e) ? r(t.filter((a) => a !== e)) : r([...t, e]);
      },
      o = () => {
        r(n);
      },
      c = () => {
        r([]);
      };
    return l.jsxs("div", {
      className: p("flex flex-wrap items-center gap-2", i),
      children: [
        l.jsx("span", {
          className: "text-sm text-muted-foreground mr-2",
          children: "Filtrar por:",
        }),
        n.map((e) =>
          l.jsxs(
            "button",
            {
              onClick: () => b(e),
              className: p(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium",
                "transition-all duration-200 border",
                t.includes(e)
                  ? `bg-${s[e].color}-500 text-white border-${s[e].color}-500`
                  : `bg-white text-${s[e].color}-700 border-${s[e].color}-200 hover:bg-${s[e].color}-50`,
              ),
              children: [
                (() => {
                  const a = g[s[e].icon];
                  return a ? l.jsx(a, { className: "h-4 w-4" }) : null;
                })(),
                s[e].label,
              ],
            },
            e,
          ),
        ),
        l.jsxs("div", {
          className: "ml-auto flex gap-2",
          children: [
            l.jsx("button", {
              onClick: o,
              className:
                "text-xs text-muted-foreground hover:text-foreground transition-colors",
              children: "Todos",
            }),
            l.jsx("span", {
              className: "text-muted-foreground",
              children: "|",
            }),
            l.jsx("button", {
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
export { T as D, $ as a };
