import { u as c, a as H, j as t, B as s, H as b } from "./index-BZzvAVnT.js";
import { S as y, a as F, b as E } from "./sheet-BaoXq4Bv.js";
import { L as m } from "./router-D2JcpG7e.js";
import { B as x } from "./BrandName-3XvNqLPU.js";
import { L as A } from "./LogoIcon-DLwUl9vD.js";
import { D as I, a as C, b as T, c as W } from "./dropdown-menu-DR3vwdOX.js";
import {
  G as _,
  C as B,
  M as P,
  P as L,
  a as i,
  Z as O,
  b as g,
  S as j,
  U as z,
  c as M,
  D as w,
  d as f,
  F as $,
  e as D,
  f as R,
  T as q,
  L as U,
  g as G,
  h as S,
  i as J,
  E as k,
  j as K,
  k as V,
  l as Y,
  m as Z,
} from "./utils-C25gojUd.js";
import { C as l, a as u } from "./card-DCmFy9yX.js";
import { P as N } from "./paper-SMOssrFO.js";
import "./vendor-BgR6OOld.js";
import "./index-lGW99eWD.js";
import "./index-DaXQxPyL.js";
import "./index-CIr2Jy9Y.js";
import "./index-DUaPDS5r.js";
const Q = ({
    className: e = "",
    variant: n = "ghost",
    size: a = "default",
  }) => {
    const { i18n: o } = c(),
      { changeLanguage: p } = H(),
      r = o.language,
      h = [
        { code: "pt-BR", label: "Português", short: "PT" },
        { code: "en-US", label: "English", short: "EN" },
        { code: "es-ES", label: "Español", short: "ES" },
      ],
      v = h.find((d) => d.code === r) || h[0];
    return t.jsxs(I, {
      "data-lov-id": "src\\components\\LanguageToggle.tsx:39:4",
      "data-lov-name": "DropdownMenu",
      "data-component-path": "src\\components\\LanguageToggle.tsx",
      "data-component-line": "39",
      "data-component-file": "LanguageToggle.tsx",
      "data-component-name": "DropdownMenu",
      "data-component-content": "%7B%7D",
      children: [
        t.jsx(C, {
          "data-lov-id": "src\\components\\LanguageToggle.tsx:40:6",
          "data-lov-name": "DropdownMenuTrigger",
          "data-component-path": "src\\components\\LanguageToggle.tsx",
          "data-component-line": "40",
          "data-component-file": "LanguageToggle.tsx",
          "data-component-name": "DropdownMenuTrigger",
          "data-component-content": "%7B%7D",
          asChild: !0,
          children: t.jsxs(s, {
            "data-lov-id": "src\\components\\LanguageToggle.tsx:41:8",
            "data-lov-name": "Button",
            "data-component-path": "src\\components\\LanguageToggle.tsx",
            "data-component-line": "41",
            "data-component-file": "LanguageToggle.tsx",
            "data-component-name": "Button",
            "data-component-content": "%7B%7D",
            variant: n,
            size: a,
            className: `flex items-center gap-2 px-3 hover:bg-white/10 transition-all duration-200 ${e}`,
            children: [
              t.jsx(_, {
                "data-lov-id": "src\\components\\LanguageToggle.tsx:46:10",
                "data-lov-name": "Globe",
                "data-component-path": "src\\components\\LanguageToggle.tsx",
                "data-component-line": "46",
                "data-component-file": "LanguageToggle.tsx",
                "data-component-name": "Globe",
                "data-component-content":
                  "%7B%22className%22%3A%22h-4%20w-4%20text-white%2F70%22%7D",
                className: "h-4 w-4 text-white/70",
              }),
              t.jsx("span", {
                "data-lov-id": "src\\components\\LanguageToggle.tsx:47:10",
                "data-lov-name": "span",
                "data-component-path": "src\\components\\LanguageToggle.tsx",
                "data-component-line": "47",
                "data-component-file": "LanguageToggle.tsx",
                "data-component-name": "span",
                "data-component-content":
                  "%7B%22className%22%3A%22font-semibold%20text-sm%20tracking-tight%20text-white%22%7D",
                className: "font-semibold text-sm tracking-tight text-white",
                children: v.short,
              }),
            ],
          }),
        }),
        t.jsx(T, {
          "data-lov-id": "src\\components\\LanguageToggle.tsx:52:6",
          "data-lov-name": "DropdownMenuContent",
          "data-component-path": "src\\components\\LanguageToggle.tsx",
          "data-component-line": "52",
          "data-component-file": "LanguageToggle.tsx",
          "data-component-name": "DropdownMenuContent",
          "data-component-content":
            "%7B%22className%22%3A%22w-40%20bg-background%2F95%20backdrop-blur-md%20border-border%2F50%20shadow-xl%22%7D",
          align: "end",
          className:
            "w-40 bg-background/95 backdrop-blur-md border-border/50 shadow-xl",
          children: h.map((d) =>
            t.jsxs(
              W,
              {
                "data-lov-id": "src\\components\\LanguageToggle.tsx:57:10",
                "data-lov-name": "DropdownMenuItem",
                "data-component-path": "src\\components\\LanguageToggle.tsx",
                "data-component-line": "57",
                "data-component-file": "LanguageToggle.tsx",
                "data-component-name": "DropdownMenuItem",
                "data-component-content": "%7B%7D",
                className: `flex items-center justify-between cursor-pointer focus:bg-primary/10 transition-colors ${r === d.code ? "font-bold text-primary" : "text-foreground/70"}`,
                onClick: () => p(d.code),
                children: [
                  t.jsx("span", {
                    "data-lov-id": "src\\components\\LanguageToggle.tsx:66:12",
                    "data-lov-name": "span",
                    "data-component-path":
                      "src\\components\\LanguageToggle.tsx",
                    "data-component-line": "66",
                    "data-component-file": "LanguageToggle.tsx",
                    "data-component-name": "span",
                    "data-component-content": "%7B%7D",
                    children: d.label,
                  }),
                  r === d.code &&
                    t.jsx(B, {
                      "data-lov-id":
                        "src\\components\\LanguageToggle.tsx:68:14",
                      "data-lov-name": "Check",
                      "data-component-path":
                        "src\\components\\LanguageToggle.tsx",
                      "data-component-line": "68",
                      "data-component-file": "LanguageToggle.tsx",
                      "data-component-name": "Check",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-4%20w-4%20ml-2%22%7D",
                      className: "h-4 w-4 ml-2",
                    }),
                ],
              },
              d.code,
            ),
          ),
        }),
      ],
    });
  },
  X = () => {
    const { t: e, i18n: n } = c();
    return t.jsx("header", {
      "data-lov-id": "src\\components\\Header.tsx:13:4",
      "data-lov-name": "header",
      "data-component-path": "src\\components\\Header.tsx",
      "data-component-line": "13",
      "data-component-file": "Header.tsx",
      "data-component-name": "header",
      "data-component-content":
        "%7B%22className%22%3A%22fixed%20top-0%20left-0%20right-0%20z-50%20bg-background%2F95%20backdrop-blur-sm%20border-b%20border-border%22%7D",
      className:
        "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\Header.tsx:14:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\Header.tsx",
        "data-component-line": "14",
        "data-component-file": "Header.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-3%20flex%20items-center%20justify-between%22%7D",
        className:
          "container mx-auto px-4 py-3 flex items-center justify-between",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\Header.tsx:15:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Header.tsx",
            "data-component-line": "15",
            "data-component-file": "Header.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
            className: "flex items-center gap-3",
            children: [
              t.jsx(A, {
                "data-lov-id": "src\\components\\Header.tsx:16:10",
                "data-lov-name": "LogoIcon",
                "data-component-path": "src\\components\\Header.tsx",
                "data-component-line": "16",
                "data-component-file": "Header.tsx",
                "data-component-name": "LogoIcon",
                "data-component-content": "%7B%7D",
                size: "md",
              }),
              t.jsx(x, {
                "data-lov-id": "src\\components\\Header.tsx:17:10",
                "data-lov-name": "BrandName",
                "data-component-path": "src\\components\\Header.tsx",
                "data-component-line": "17",
                "data-component-file": "Header.tsx",
                "data-component-name": "BrandName",
                "data-component-content": "%7B%7D",
                variant: "header",
              }),
            ],
          }),
          t.jsxs("nav", {
            "data-lov-id": "src\\components\\Header.tsx:20:8",
            "data-lov-name": "nav",
            "data-component-path": "src\\components\\Header.tsx",
            "data-component-line": "20",
            "data-component-file": "Header.tsx",
            "data-component-name": "nav",
            "data-component-content":
              "%7B%22className%22%3A%22hidden%20md%3Aflex%20items-center%20gap-6%22%7D",
            className: "hidden md:flex items-center gap-6",
            children: [
              t.jsx("a", {
                "data-lov-id": "src\\components\\Header.tsx:21:10",
                "data-lov-name": "a",
                "data-component-path": "src\\components\\Header.tsx",
                "data-component-line": "21",
                "data-component-file": "Header.tsx",
                "data-component-name": "a",
                "data-component-content":
                  "%7B%22className%22%3A%22text-muted-foreground%20hover%3Atext-foreground%20transition-colors%22%7D",
                href: "#recursos",
                className:
                  "text-muted-foreground hover:text-foreground transition-colors",
                children: e("landing.nav_links.features"),
              }),
              t.jsx("a", {
                "data-lov-id": "src\\components\\Header.tsx:27:10",
                "data-lov-name": "a",
                "data-component-path": "src\\components\\Header.tsx",
                "data-component-line": "27",
                "data-component-file": "Header.tsx",
                "data-component-name": "a",
                "data-component-content":
                  "%7B%22className%22%3A%22text-muted-foreground%20hover%3Atext-foreground%20transition-colors%22%7D",
                href: "#como-funciona",
                className:
                  "text-muted-foreground hover:text-foreground transition-colors",
                children: e("landing.nav_links.how_it_works"),
              }),
              t.jsx("a", {
                "data-lov-id": "src\\components\\Header.tsx:33:10",
                "data-lov-name": "a",
                "data-component-path": "src\\components\\Header.tsx",
                "data-component-line": "33",
                "data-component-file": "Header.tsx",
                "data-component-name": "a",
                "data-component-content":
                  "%7B%22className%22%3A%22text-muted-foreground%20hover%3Atext-foreground%20transition-colors%22%7D",
                href: "#precos",
                className:
                  "text-muted-foreground hover:text-foreground transition-colors",
                children: e("landing.nav_links.pricing"),
              }),
            ],
          }),
          t.jsxs("div", {
            "data-lov-id": "src\\components\\Header.tsx:41:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Header.tsx",
            "data-component-line": "41",
            "data-component-file": "Header.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
            className: "flex items-center gap-2",
            children: [
              t.jsx(Q, {
                "data-lov-id": "src\\components\\Header.tsx:42:10",
                "data-lov-name": "LanguageToggle",
                "data-component-path": "src\\components\\Header.tsx",
                "data-component-line": "42",
                "data-component-file": "Header.tsx",
                "data-component-name": "LanguageToggle",
                "data-component-content": "%7B%22className%22%3A%22mr-2%22%7D",
                variant: "ghost",
                size: "sm",
                className: "mr-2",
              }),
              t.jsx(s, {
                "data-lov-id": "src\\components\\Header.tsx:43:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\components\\Header.tsx",
                "data-component-line": "43",
                "data-component-file": "Header.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22font-semibold%20hidden%20sm%3Ainline-flex%22%7D",
                variant: "accent",
                className: "font-semibold hidden sm:inline-flex",
                asChild: !0,
                children: t.jsx(m, {
                  "data-lov-id": "src\\components\\Header.tsx:48:12",
                  "data-lov-name": "Link",
                  "data-component-path": "src\\components\\Header.tsx",
                  "data-component-line": "48",
                  "data-component-file": "Header.tsx",
                  "data-component-name": "Link",
                  "data-component-content": "%7B%7D",
                  to: `/${n.language}/app/reports/new`,
                  children: e("landing.nav_links.cta"),
                }),
              }),
              t.jsxs(y, {
                "data-lov-id": "src\\components\\Header.tsx:54:10",
                "data-lov-name": "Sheet",
                "data-component-path": "src\\components\\Header.tsx",
                "data-component-line": "54",
                "data-component-file": "Header.tsx",
                "data-component-name": "Sheet",
                "data-component-content": "%7B%7D",
                children: [
                  t.jsx(F, {
                    "data-lov-id": "src\\components\\Header.tsx:55:12",
                    "data-lov-name": "SheetTrigger",
                    "data-component-path": "src\\components\\Header.tsx",
                    "data-component-line": "55",
                    "data-component-file": "Header.tsx",
                    "data-component-name": "SheetTrigger",
                    "data-component-content": "%7B%7D",
                    asChild: !0,
                    children: t.jsx(s, {
                      "data-lov-id": "src\\components\\Header.tsx:56:14",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\components\\Header.tsx",
                      "data-component-line": "56",
                      "data-component-file": "Header.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22md%3Ahidden%22%7D",
                      variant: "ghost",
                      size: "icon",
                      className: "md:hidden",
                      "aria-label": e("landing.nav_links.aria_menu"),
                      children: t.jsx(P, {
                        "data-lov-id": "src\\components\\Header.tsx:62:16",
                        "data-lov-name": "Menu",
                        "data-component-path": "src\\components\\Header.tsx",
                        "data-component-line": "62",
                        "data-component-file": "Header.tsx",
                        "data-component-name": "Menu",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                        className: "h-5 w-5",
                      }),
                    }),
                  }),
                  t.jsx(E, {
                    "data-lov-id": "src\\components\\Header.tsx:66:12",
                    "data-lov-name": "SheetContent",
                    "data-component-path": "src\\components\\Header.tsx",
                    "data-component-line": "66",
                    "data-component-file": "Header.tsx",
                    "data-component-name": "SheetContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-%5B300px%5D%20sm%3Aw-%5B400px%5D%22%7D",
                    side: "right",
                    className: "w-[300px] sm:w-[400px]",
                    children: t.jsxs("nav", {
                      "data-lov-id": "src\\components\\Header.tsx:67:14",
                      "data-lov-name": "nav",
                      "data-component-path": "src\\components\\Header.tsx",
                      "data-component-line": "67",
                      "data-component-file": "Header.tsx",
                      "data-component-name": "nav",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20flex-col%20gap-4%20mt-8%22%7D",
                      className: "flex flex-col gap-4 mt-8",
                      children: [
                        t.jsx("a", {
                          "data-lov-id": "src\\components\\Header.tsx:68:16",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Header.tsx",
                          "data-component-line": "68",
                          "data-component-file": "Header.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-foreground%20hover%3Atext-primary%20transition-colors%20py-2%20text-lg%22%7D",
                          href: "#recursos",
                          className:
                            "text-foreground hover:text-primary transition-colors py-2 text-lg",
                          children: e("landing.nav_links.features"),
                        }),
                        t.jsx("a", {
                          "data-lov-id": "src\\components\\Header.tsx:74:16",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Header.tsx",
                          "data-component-line": "74",
                          "data-component-file": "Header.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-foreground%20hover%3Atext-primary%20transition-colors%20py-2%20text-lg%22%7D",
                          href: "#como-funciona",
                          className:
                            "text-foreground hover:text-primary transition-colors py-2 text-lg",
                          children: e("landing.nav_links.how_it_works"),
                        }),
                        t.jsx("a", {
                          "data-lov-id": "src\\components\\Header.tsx:80:16",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Header.tsx",
                          "data-component-line": "80",
                          "data-component-file": "Header.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-foreground%20hover%3Atext-primary%20transition-colors%20py-2%20text-lg%22%7D",
                          href: "#precos",
                          className:
                            "text-foreground hover:text-primary transition-colors py-2 text-lg",
                          children: e("landing.nav_links.pricing"),
                        }),
                        t.jsx(s, {
                          "data-lov-id": "src\\components\\Header.tsx:86:16",
                          "data-lov-name": "Button",
                          "data-component-path": "src\\components\\Header.tsx",
                          "data-component-line": "86",
                          "data-component-file": "Header.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22mt-4%22%7D",
                          variant: "accent",
                          className: "mt-4",
                          asChild: !0,
                          children: t.jsx(m, {
                            "data-lov-id": "src\\components\\Header.tsx:87:18",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\components\\Header.tsx",
                            "data-component-line": "87",
                            "data-component-file": "Header.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: `/${n.language}/app/reports/new`,
                            children: e("landing.nav_links.cta"),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  tt = () => {
    const { t: e, i18n: n } = c();
    return t.jsxs("section", {
      "data-lov-id": "src\\components\\Hero.tsx:9:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\Hero.tsx",
      "data-component-line": "9",
      "data-component-file": "Hero.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22min-h-%5B85vh%5D%20md%3Amin-h-screen%20bg-primary%20flex%20items-center%20justify-center%20relative%20overflow-hidden%22%7D",
      className:
        "min-h-[85vh] md:min-h-screen bg-primary flex items-center justify-center relative overflow-hidden",
      children: [
        t.jsx("div", {
          "data-lov-id": "src\\components\\Hero.tsx:11:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\Hero.tsx",
          "data-component-line": "11",
          "data-component-file": "Hero.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22absolute%20inset-0%20opacity-50%22%7D",
          className: "absolute inset-0 opacity-50",
          children: t.jsx("div", {
            "data-lov-id": "src\\components\\Hero.tsx:12:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Hero.tsx",
            "data-component-line": "12",
            "data-component-file": "Hero.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22w-full%20h-full%20bg-white%2F5%22%7D",
            className: "w-full h-full bg-white/5",
          }),
        }),
        t.jsx("div", {
          "data-lov-id": "src\\components\\Hero.tsx:15:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\Hero.tsx",
          "data-component-line": "15",
          "data-component-file": "Hero.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-16%20md%3Apy-20%20text-center%20relative%20z-10%22%7D",
          className:
            "container mx-auto px-4 py-16 md:py-20 text-center relative z-10",
          children: t.jsxs("div", {
            "data-lov-id": "src\\components\\Hero.tsx:16:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Hero.tsx",
            "data-component-line": "16",
            "data-component-file": "Hero.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
            className: "max-w-4xl mx-auto",
            children: [
              t.jsx("h1", {
                "data-lov-id": "src\\components\\Hero.tsx:17:10",
                "data-lov-name": "h1",
                "data-component-path": "src\\components\\Hero.tsx",
                "data-component-line": "17",
                "data-component-file": "Hero.tsx",
                "data-component-name": "h1",
                "data-component-content":
                  "%7B%22className%22%3A%22text-3xl%20sm%3Atext-4xl%20md%3Atext-6xl%20font-bold%20text-white%20mb-6%20leading-tight%22%7D",
                className:
                  "text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight",
                children: e("landing.hero.title"),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\Hero.tsx:21:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\Hero.tsx",
                "data-component-line": "21",
                "data-component-file": "Hero.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-lg%20sm%3Atext-xl%20md%3Atext-2xl%20text-white%2F90%20mb-6%20max-w-3xl%20mx-auto%20leading-relaxed%22%7D",
                className:
                  "text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed",
                children: e("landing.hero.subtitle"),
              }),
              t.jsx("div", {
                "data-lov-id": "src\\components\\Hero.tsx:25:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\Hero.tsx",
                "data-component-line": "25",
                "data-component-file": "Hero.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22bg-white%2F10%20backdrop-blur-sm%20rounded-lg%20px-6%20py-3%20mb-8%20max-w-2xl%20mx-auto%22%7D",
                className:
                  "bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 mb-8 max-w-2xl mx-auto",
                children: t.jsx("p", {
                  "data-lov-id": "src\\components\\Hero.tsx:26:12",
                  "data-lov-name": "p",
                  "data-component-path": "src\\components\\Hero.tsx",
                  "data-component-line": "26",
                  "data-component-file": "Hero.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-base%20sm%3Atext-lg%20text-white%20font-semibold%22%7D",
                  className: "text-base sm:text-lg text-white font-semibold",
                  children: e("landing.hero.badge"),
                }),
              }),
              t.jsxs("div", {
                "data-lov-id": "src\\components\\Hero.tsx:31:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\Hero.tsx",
                "data-component-line": "31",
                "data-component-file": "Hero.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-4%20justify-center%20items-center%20mb-12%22%7D",
                className:
                  "flex flex-col sm:flex-row gap-4 justify-center items-center mb-12",
                children: [
                  t.jsx(s, {
                    "data-lov-id": "src\\components\\Hero.tsx:32:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\components\\Hero.tsx",
                    "data-component-line": "32",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-base%20sm%3Atext-lg%20px-6%20sm%3Apx-8%20py-4%20w-full%20sm%3Aw-auto%22%7D",
                    variant: "accent",
                    size: "lg",
                    className:
                      "text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto",
                    asChild: !0,
                    children: t.jsx(m, {
                      "data-lov-id": "src\\components\\Hero.tsx:38:14",
                      "data-lov-name": "Link",
                      "data-component-path": "src\\components\\Hero.tsx",
                      "data-component-line": "38",
                      "data-component-file": "Hero.tsx",
                      "data-component-name": "Link",
                      "data-component-content": "%7B%7D",
                      to: `/${n.language}/app/reports/new?template=executive-quarterly`,
                      children: e("landing.hero.cta_main"),
                    }),
                  }),
                  t.jsxs(s, {
                    "data-lov-id": "src\\components\\Hero.tsx:45:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\components\\Hero.tsx",
                    "data-component-line": "45",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-base%20sm%3Atext-lg%20px-6%20sm%3Apx-8%20py-4%20bg-white%2F10%20border-white%2F30%20text-white%20hover%3Abg-white%2F20%20w-full%20sm%3Aw-auto%22%7D",
                    variant: "outline",
                    size: "lg",
                    className:
                      "text-base sm:text-lg px-6 sm:px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto",
                    onClick: () => {
                      var a;
                      return (a = document.getElementById("exemplos")) == null
                        ? void 0
                        : a.scrollIntoView({ behavior: "smooth" });
                    },
                    children: [
                      t.jsx(L, {
                        "data-lov-id": "src\\components\\Hero.tsx:55:14",
                        "data-lov-name": "Play",
                        "data-component-path": "src\\components\\Hero.tsx",
                        "data-component-line": "55",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "Play",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-5%20h-5%20mr-2%22%7D",
                        className: "w-5 h-5 mr-2",
                      }),
                      e("landing.hero.cta_sec"),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                "data-lov-id": "src\\components\\Hero.tsx:60:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\Hero.tsx",
                "data-component-line": "60",
                "data-component-file": "Hero.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-4%20sm%3Agap-6%20justify-center%20items-center%20text-white%2F80%20text-sm%22%7D",
                className:
                  "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-white/80 text-sm",
                children: [
                  t.jsxs("div", {
                    "data-lov-id": "src\\components\\Hero.tsx:61:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\Hero.tsx",
                    "data-component-line": "61",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      t.jsx(i, {
                        "data-lov-id": "src\\components\\Hero.tsx:62:14",
                        "data-lov-name": "CheckCircle",
                        "data-component-path": "src\\components\\Hero.tsx",
                        "data-component-line": "62",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "CheckCircle",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20text-accent%22%7D",
                        className: "w-4 h-4 text-accent",
                      }),
                      t.jsx("span", {
                        "data-lov-id": "src\\components\\Hero.tsx:63:14",
                        "data-lov-name": "span",
                        "data-component-path": "src\\components\\Hero.tsx",
                        "data-component-line": "63",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%7D",
                        children: e("landing.hero.features.clicks"),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    "data-lov-id": "src\\components\\Hero.tsx:66:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\Hero.tsx",
                    "data-component-line": "66",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      t.jsx(i, {
                        "data-lov-id": "src\\components\\Hero.tsx:67:14",
                        "data-lov-name": "CheckCircle",
                        "data-component-path": "src\\components\\Hero.tsx",
                        "data-component-line": "67",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "CheckCircle",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20text-accent%22%7D",
                        className: "w-4 h-4 text-accent",
                      }),
                      t.jsx("span", {
                        "data-lov-id": "src\\components\\Hero.tsx:68:14",
                        "data-lov-name": "span",
                        "data-component-path": "src\\components\\Hero.tsx",
                        "data-component-line": "68",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%7D",
                        children: e("landing.hero.features.insights"),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    "data-lov-id": "src\\components\\Hero.tsx:71:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\Hero.tsx",
                    "data-component-line": "71",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      t.jsx(i, {
                        "data-lov-id": "src\\components\\Hero.tsx:72:14",
                        "data-lov-name": "CheckCircle",
                        "data-component-path": "src\\components\\Hero.tsx",
                        "data-component-line": "72",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "CheckCircle",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20text-accent%22%7D",
                        className: "w-4 h-4 text-accent",
                      }),
                      t.jsx("span", {
                        "data-lov-id": "src\\components\\Hero.tsx:73:14",
                        "data-lov-name": "span",
                        "data-component-path": "src\\components\\Hero.tsx",
                        "data-component-line": "73",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%7D",
                        children: e("landing.hero.features.security"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  et = () => {
    const { t: e } = c(),
      n = [
        {
          icon: O,
          title: e("landing.features_section.items.context.title"),
          description: e("landing.features_section.items.context.desc"),
        },
        {
          icon: g,
          title: e("landing.features_section.items.decisions.title"),
          description: e("landing.features_section.items.decisions.desc"),
        },
        {
          icon: j,
          title: e("landing.features_section.items.privacy.title"),
          description: e("landing.features_section.items.privacy.desc"),
        },
      ];
    return t.jsx("section", {
      "data-lov-id": "src\\components\\Features.tsx:30:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\Features.tsx",
      "data-component-line": "30",
      "data-component-file": "Features.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-20%20bg-background%22%7D",
      id: "recursos",
      className: "py-20 bg-background",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\Features.tsx:31:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\Features.tsx",
        "data-component-line": "31",
        "data-component-file": "Features.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\Features.tsx:32:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Features.tsx",
            "data-component-line": "32",
            "data-component-file": "Features.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              t.jsx("h2", {
                "data-lov-id": "src\\components\\Features.tsx:33:10",
                "data-lov-name": "h2",
                "data-component-path": "src\\components\\Features.tsx",
                "data-component-line": "33",
                "data-component-file": "Features.tsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-foreground%20mb-4%22%7D",
                className:
                  "text-3xl md:text-4xl font-bold text-foreground mb-4",
                children: e("landing.features_section.title", {
                  brand: t.jsx(x, {
                    "data-lov-id": "src\\components\\Features.tsx:34:58",
                    "data-lov-name": "BrandName",
                    "data-component-path": "src\\components\\Features.tsx",
                    "data-component-line": "34",
                    "data-component-file": "Features.tsx",
                    "data-component-name": "BrandName",
                    "data-component-content": "%7B%7D",
                    variant: "default",
                  }),
                }),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\Features.tsx:36:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\Features.tsx",
                "data-component-line": "36",
                "data-component-file": "Features.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-xl%20text-muted-foreground%20max-w-2xl%20mx-auto%22%7D",
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children: e("landing.features_section.subtitle"),
              }),
            ],
          }),
          t.jsx("div", {
            "data-lov-id": "src\\components\\Features.tsx:42:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Features.tsx",
            "data-component-line": "42",
            "data-component-file": "Features.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%20max-w-6xl%20mx-auto%22%7D",
            className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
            children: n.map((a, o) =>
              t.jsxs(
                l,
                {
                  "data-lov-id": "src\\components\\Features.tsx:44:12",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\components\\Features.tsx",
                  "data-component-line": "44",
                  "data-component-file": "Features.tsx",
                  "data-component-name": "Card",
                  "data-component-content":
                    "%7B%22className%22%3A%22p-8%20text-center%20bg-card%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover%3Ascale-%5B1.02%5D%22%7D",
                  className:
                    "p-8 text-center bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]",
                  children: [
                    t.jsx("div", {
                      "data-lov-id": "src\\components\\Features.tsx:45:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\components\\Features.tsx",
                      "data-component-line": "45",
                      "data-component-file": "Features.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-16%20h-16%20bg-primary%20rounded-2xl%20flex%20items-center%20justify-center%20mx-auto%20mb-6%22%7D",
                      className:
                        "w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6",
                      children: t.jsx(a.icon, {
                        "data-lov-id": "src\\components\\Features.tsx:46:16",
                        "data-lov-name": "feature.icon",
                        "data-component-path": "src\\components\\Features.tsx",
                        "data-component-line": "46",
                        "data-component-file": "Features.tsx",
                        "data-component-name": "feature.icon",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D",
                        className: "w-8 h-8 text-white",
                      }),
                    }),
                    t.jsx("h3", {
                      "data-lov-id": "src\\components\\Features.tsx:48:14",
                      "data-lov-name": "h3",
                      "data-component-path": "src\\components\\Features.tsx",
                      "data-component-line": "48",
                      "data-component-file": "Features.tsx",
                      "data-component-name": "h3",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-xl%20font-semibold%20text-foreground%20mb-4%22%7D",
                      className: "text-xl font-semibold text-foreground mb-4",
                      children: a.title,
                    }),
                    t.jsx("p", {
                      "data-lov-id": "src\\components\\Features.tsx:51:14",
                      "data-lov-name": "p",
                      "data-component-path": "src\\components\\Features.tsx",
                      "data-component-line": "51",
                      "data-component-file": "Features.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-muted-foreground%20leading-relaxed%22%7D",
                      className: "text-muted-foreground leading-relaxed",
                      children: a.description,
                    }),
                  ],
                },
                o,
              ),
            ),
          }),
        ],
      }),
    });
  },
  at = () => {
    const { t: e } = c(),
      n = [
        {
          step: 1,
          icon: z,
          title: e("landing.how_it_works.steps.upload.title"),
          description: e("landing.how_it_works.steps.upload.desc"),
        },
        {
          step: 2,
          icon: M,
          title: e("landing.how_it_works.steps.target.title"),
          description: e("landing.how_it_works.steps.target.desc"),
        },
        {
          step: 3,
          icon: w,
          title: e("landing.how_it_works.steps.receive.title"),
          description: e("landing.how_it_works.steps.receive.desc"),
        },
      ];
    return t.jsx("section", {
      "data-lov-id": "src\\components\\HowItWorks.tsx:33:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\HowItWorks.tsx",
      "data-component-line": "33",
      "data-component-file": "HowItWorks.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-20%20bg-secondary%2F30%22%7D",
      id: "como-funciona",
      className: "py-20 bg-secondary/30",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\HowItWorks.tsx:34:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\HowItWorks.tsx",
        "data-component-line": "34",
        "data-component-file": "HowItWorks.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\HowItWorks.tsx:35:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\HowItWorks.tsx",
            "data-component-line": "35",
            "data-component-file": "HowItWorks.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              t.jsx("h2", {
                "data-lov-id": "src\\components\\HowItWorks.tsx:36:10",
                "data-lov-name": "h2",
                "data-component-path": "src\\components\\HowItWorks.tsx",
                "data-component-line": "36",
                "data-component-file": "HowItWorks.tsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-foreground%20mb-4%22%7D",
                className:
                  "text-3xl md:text-4xl font-bold text-foreground mb-4",
                children: e("landing.how_it_works.title"),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\HowItWorks.tsx:39:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\HowItWorks.tsx",
                "data-component-line": "39",
                "data-component-file": "HowItWorks.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-xl%20text-muted-foreground%20max-w-2xl%20mx-auto%22%7D",
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children: e("landing.how_it_works.subtitle"),
              }),
            ],
          }),
          t.jsx("div", {
            "data-lov-id": "src\\components\\HowItWorks.tsx:45:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\HowItWorks.tsx",
            "data-component-line": "45",
            "data-component-file": "HowItWorks.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%20max-w-6xl%20mx-auto%22%7D",
            className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
            children: n.map((a, o) =>
              t.jsxs(
                "div",
                {
                  "data-lov-id": "src\\components\\HowItWorks.tsx:47:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\components\\HowItWorks.tsx",
                  "data-component-line": "47",
                  "data-component-file": "HowItWorks.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22relative%22%7D",
                  className: "relative",
                  children: [
                    t.jsxs(l, {
                      "data-lov-id": "src\\components\\HowItWorks.tsx:48:14",
                      "data-lov-name": "Card",
                      "data-component-path": "src\\components\\HowItWorks.tsx",
                      "data-component-line": "48",
                      "data-component-file": "HowItWorks.tsx",
                      "data-component-name": "Card",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-8%20text-center%20border-0%20bg-card%20hover%3Ashadow-lg%20transition-all%20duration-300%22%7D",
                      className:
                        "p-8 text-center border-0 bg-card hover:shadow-lg transition-all duration-300",
                      children: [
                        t.jsx("div", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:49:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "49",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22relative%20mb-6%22%7D",
                          className: "relative mb-6",
                          children: t.jsx("div", {
                            "data-lov-id":
                              "src\\components\\HowItWorks.tsx:50:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\HowItWorks.tsx",
                            "data-component-line": "50",
                            "data-component-file": "HowItWorks.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-16%20h-16%20bg-primary%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20shadow-lg%22%7D",
                            className:
                              "w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg",
                            children: t.jsx(a.icon, {
                              "data-lov-id":
                                "src\\components\\HowItWorks.tsx:51:20",
                              "data-lov-name": "step.icon",
                              "data-component-path":
                                "src\\components\\HowItWorks.tsx",
                              "data-component-line": "51",
                              "data-component-file": "HowItWorks.tsx",
                              "data-component-name": "step.icon",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D",
                              className: "w-8 h-8 text-white",
                            }),
                          }),
                        }),
                        t.jsxs("div", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:55:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "55",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22mb-4%22%7D",
                          className: "mb-4",
                          children: [
                            t.jsxs("h3", {
                              "data-lov-id":
                                "src\\components\\HowItWorks.tsx:56:18",
                              "data-lov-name": "h3",
                              "data-component-path":
                                "src\\components\\HowItWorks.tsx",
                              "data-component-line": "56",
                              "data-component-file": "HowItWorks.tsx",
                              "data-component-name": "h3",
                              "data-component-content":
                                "%7B%22text%22%3A%22Passo%22%2C%22className%22%3A%22text-xl%20md%3Atext-2xl%20text-primary%20font-semibold%20mb-2%22%7D",
                              className:
                                "text-xl md:text-2xl text-primary font-semibold mb-2",
                              children: ["Passo ", a.step],
                            }),
                            t.jsx("h4", {
                              "data-lov-id":
                                "src\\components\\HowItWorks.tsx:57:18",
                              "data-lov-name": "h4",
                              "data-component-path":
                                "src\\components\\HowItWorks.tsx",
                              "data-component-line": "57",
                              "data-component-file": "HowItWorks.tsx",
                              "data-component-name": "h4",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-lg%20font-semibold%20text-foreground%22%7D",
                              className:
                                "text-lg font-semibold text-foreground",
                              children: a.title,
                            }),
                          ],
                        }),
                        t.jsx("p", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:63:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "63",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-muted-foreground%20leading-relaxed%22%7D",
                          className: "text-muted-foreground leading-relaxed",
                          children: a.description,
                        }),
                      ],
                    }),
                    o < n.length - 1 &&
                      t.jsx("div", {
                        "data-lov-id": "src\\components\\HowItWorks.tsx:69:16",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\HowItWorks.tsx",
                        "data-component-line": "69",
                        "data-component-file": "HowItWorks.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22hidden%20md%3Ablock%20absolute%20top-1%2F2%20-right-4%20w-8%20h-0.5%20bg-primary%2F30%20transform%20-translate-y-1%2F2%20z-10%22%7D",
                        className:
                          "hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2 z-10",
                      }),
                  ],
                },
                o,
              ),
            ),
          }),
          t.jsxs("div", {
            "data-lov-id": "src\\components\\HowItWorks.tsx:76:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\HowItWorks.tsx",
            "data-component-line": "76",
            "data-component-file": "HowItWorks.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22mt-16%22%7D",
            className: "mt-16",
            children: [
              t.jsx("h3", {
                "data-lov-id": "src\\components\\HowItWorks.tsx:77:10",
                "data-lov-name": "h3",
                "data-component-path": "src\\components\\HowItWorks.tsx",
                "data-component-line": "77",
                "data-component-file": "HowItWorks.tsx",
                "data-component-name": "h3",
                "data-component-content":
                  "%7B%22className%22%3A%22text-2xl%20font-bold%20text-center%20text-foreground%20mb-8%22%7D",
                className:
                  "text-2xl font-bold text-center text-foreground mb-8",
                children: e("landing.how_it_works.quick_start.title"),
              }),
              t.jsxs("div", {
                "data-lov-id": "src\\components\\HowItWorks.tsx:81:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\HowItWorks.tsx",
                "data-component-line": "81",
                "data-component-file": "HowItWorks.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-6%20max-w-4xl%20mx-auto%22%7D",
                className: "grid md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                children: [
                  t.jsx(l, {
                    "data-lov-id": "src\\components\\HowItWorks.tsx:82:12",
                    "data-lov-name": "Card",
                    "data-component-path": "src\\components\\HowItWorks.tsx",
                    "data-component-line": "82",
                    "data-component-file": "HowItWorks.tsx",
                    "data-component-name": "Card",
                    "data-component-content":
                      "%7B%22className%22%3A%22card-hover%20text-center%20border-0%20bg-gradient-to-br%20from-blue-50%20to-blue-100%20dark%3Afrom-blue-950%2F20%20dark%3Ato-blue-900%2F20%22%7D",
                    className:
                      "card-hover text-center border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
                    children: t.jsxs(u, {
                      "data-lov-id": "src\\components\\HowItWorks.tsx:83:14",
                      "data-lov-name": "CardContent",
                      "data-component-path": "src\\components\\HowItWorks.tsx",
                      "data-component-line": "83",
                      "data-component-file": "HowItWorks.tsx",
                      "data-component-name": "CardContent",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-6%22%7D",
                      className: "p-6",
                      children: [
                        t.jsx("div", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:84:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "84",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-12%20h-12%20bg-blue-500%20rounded-xl%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                          className:
                            "w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4",
                          children: t.jsx(g, {
                            "data-lov-id":
                              "src\\components\\HowItWorks.tsx:85:18",
                            "data-lov-name": "Target",
                            "data-component-path":
                              "src\\components\\HowItWorks.tsx",
                            "data-component-line": "85",
                            "data-component-file": "HowItWorks.tsx",
                            "data-component-name": "Target",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D",
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                        t.jsx("h4", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:87:16",
                          "data-lov-name": "h4",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "87",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "h4",
                          "data-component-content":
                            "%7B%22className%22%3A%22font-semibold%20text-foreground%20mb-2%22%7D",
                          className: "font-semibold text-foreground mb-2",
                          children: e(
                            "landing.how_it_works.quick_start.exec.title",
                          ),
                        }),
                        t.jsx("p", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:88:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "88",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20mb-4%22%7D",
                          className: "text-sm text-muted-foreground mb-4",
                          children: e(
                            "landing.how_it_works.quick_start.exec.desc",
                          ),
                        }),
                        t.jsx(s, {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:91:16",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "91",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-full%22%7D",
                          variant: "default",
                          size: "sm",
                          asChild: !0,
                          className: "w-full",
                          children: t.jsx(m, {
                            "data-lov-id":
                              "src\\components\\HowItWorks.tsx:92:18",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\components\\HowItWorks.tsx",
                            "data-component-line": "92",
                            "data-component-file": "HowItWorks.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: "/app/novo-relatorio?template=executivo",
                            children: e("landing.how_it_works.quick_start.cta"),
                          }),
                        }),
                      ],
                    }),
                  }),
                  t.jsx(l, {
                    "data-lov-id": "src\\components\\HowItWorks.tsx:100:12",
                    "data-lov-name": "Card",
                    "data-component-path": "src\\components\\HowItWorks.tsx",
                    "data-component-line": "100",
                    "data-component-file": "HowItWorks.tsx",
                    "data-component-name": "Card",
                    "data-component-content":
                      "%7B%22className%22%3A%22card-hover%20text-center%20border-0%20bg-gradient-to-br%20from-indigo-50%20to-indigo-100%20dark%3Afrom-indigo-950%2F20%20dark%3Ato-indigo-900%2F20%22%7D",
                    className:
                      "card-hover text-center border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20",
                    children: t.jsxs(u, {
                      "data-lov-id": "src\\components\\HowItWorks.tsx:101:14",
                      "data-lov-name": "CardContent",
                      "data-component-path": "src\\components\\HowItWorks.tsx",
                      "data-component-line": "101",
                      "data-component-file": "HowItWorks.tsx",
                      "data-component-name": "CardContent",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-6%22%7D",
                      className: "p-6",
                      children: [
                        t.jsx("div", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:102:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "102",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-12%20h-12%20bg-indigo-500%20rounded-xl%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                          className:
                            "w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4",
                          children: t.jsx(f, {
                            "data-lov-id":
                              "src\\components\\HowItWorks.tsx:103:18",
                            "data-lov-name": "TrendingUp",
                            "data-component-path":
                              "src\\components\\HowItWorks.tsx",
                            "data-component-line": "103",
                            "data-component-file": "HowItWorks.tsx",
                            "data-component-name": "TrendingUp",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D",
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                        t.jsx("h4", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:105:16",
                          "data-lov-name": "h4",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "105",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "h4",
                          "data-component-content":
                            "%7B%22className%22%3A%22font-semibold%20text-foreground%20mb-2%22%7D",
                          className: "font-semibold text-foreground mb-2",
                          children: e(
                            "landing.how_it_works.quick_start.sales.title",
                          ),
                        }),
                        t.jsx("p", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:106:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "106",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20mb-4%22%7D",
                          className: "text-sm text-muted-foreground mb-4",
                          children: e(
                            "landing.how_it_works.quick_start.sales.desc",
                          ),
                        }),
                        t.jsx(s, {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:109:16",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "109",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-full%22%7D",
                          variant: "default",
                          size: "sm",
                          asChild: !0,
                          className: "w-full",
                          children: t.jsx(m, {
                            "data-lov-id":
                              "src\\components\\HowItWorks.tsx:110:18",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\components\\HowItWorks.tsx",
                            "data-component-line": "110",
                            "data-component-file": "HowItWorks.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: "/app/novo-relatorio?template=vendas",
                            children: e("landing.how_it_works.quick_start.cta"),
                          }),
                        }),
                      ],
                    }),
                  }),
                  t.jsx(l, {
                    "data-lov-id": "src\\components\\HowItWorks.tsx:118:12",
                    "data-lov-name": "Card",
                    "data-component-path": "src\\components\\HowItWorks.tsx",
                    "data-component-line": "118",
                    "data-component-file": "HowItWorks.tsx",
                    "data-component-name": "Card",
                    "data-component-content":
                      "%7B%22className%22%3A%22card-hover%20text-center%20border-0%20bg-gradient-to-br%20from-violet-50%20to-violet-100%20dark%3Afrom-violet-950%2F20%20dark%3Ato-violet-900%2F20%22%7D",
                    className:
                      "card-hover text-center border-0 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/20 dark:to-violet-900/20",
                    children: t.jsxs(u, {
                      "data-lov-id": "src\\components\\HowItWorks.tsx:119:14",
                      "data-lov-name": "CardContent",
                      "data-component-path": "src\\components\\HowItWorks.tsx",
                      "data-component-line": "119",
                      "data-component-file": "HowItWorks.tsx",
                      "data-component-name": "CardContent",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-6%22%7D",
                      className: "p-6",
                      children: [
                        t.jsx("div", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:120:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "120",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-12%20h-12%20bg-violet-500%20rounded-xl%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                          className:
                            "w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4",
                          children: t.jsx($, {
                            "data-lov-id":
                              "src\\components\\HowItWorks.tsx:121:18",
                            "data-lov-name": "FileSpreadsheet",
                            "data-component-path":
                              "src\\components\\HowItWorks.tsx",
                            "data-component-line": "121",
                            "data-component-file": "HowItWorks.tsx",
                            "data-component-name": "FileSpreadsheet",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D",
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                        t.jsx("h4", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:123:16",
                          "data-lov-name": "h4",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "123",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "h4",
                          "data-component-content":
                            "%7B%22className%22%3A%22font-semibold%20text-foreground%20mb-2%22%7D",
                          className: "font-semibold text-foreground mb-2",
                          children: e(
                            "landing.how_it_works.quick_start.full.title",
                          ),
                        }),
                        t.jsx("p", {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:124:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "124",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20mb-4%22%7D",
                          className: "text-sm text-muted-foreground mb-4",
                          children: e(
                            "landing.how_it_works.quick_start.full.desc",
                          ),
                        }),
                        t.jsx(s, {
                          "data-lov-id":
                            "src\\components\\HowItWorks.tsx:127:16",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\components\\HowItWorks.tsx",
                          "data-component-line": "127",
                          "data-component-file": "HowItWorks.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-full%22%7D",
                          variant: "outline",
                          size: "sm",
                          asChild: !0,
                          className: "w-full",
                          children: t.jsx(m, {
                            "data-lov-id":
                              "src\\components\\HowItWorks.tsx:128:18",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\components\\HowItWorks.tsx",
                            "data-component-line": "128",
                            "data-component-file": "HowItWorks.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: "/app/novo-relatorio",
                            children: e("landing.how_it_works.quick_start.cta"),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  nt = () => {
    const { t: e } = c(),
      n = {
        title: e("landing.examples.main.title"),
        subtitle: e("landing.examples.main.subtitle"),
        sections: [
          {
            title: e("landing.examples.main.sections.summary.title"),
            icon: D,
            content: e("landing.examples.main.sections.summary.desc"),
          },
          {
            title: e("landing.examples.main.sections.highlights.title"),
            icon: i,
            content: e("landing.examples.main.sections.highlights.desc"),
          },
          {
            title: e("landing.examples.main.sections.analysis.title"),
            icon: R,
            content: e("landing.examples.main.sections.analysis.desc"),
          },
          {
            title: e("landing.examples.main.sections.risks.title"),
            icon: q,
            content: e("landing.examples.main.sections.risks.desc"),
          },
          {
            title: e("landing.examples.main.sections.insights.title"),
            icon: U,
            content: e("landing.examples.main.sections.insights.desc"),
          },
          {
            title: e("landing.examples.main.sections.checklist.title"),
            icon: G,
            content: e("landing.examples.main.sections.checklist.desc"),
          },
        ],
      },
      a = [
        {
          icon: f,
          title: e("landing.examples.others.sales.title"),
          description: e("landing.examples.others.sales.desc"),
          color: "bg-primary",
          template: "sales-monthly",
        },
        {
          icon: S,
          title: e("landing.examples.others.clients.title"),
          description: e("landing.examples.others.clients.desc"),
          color: "bg-accent",
          template: "executive-quarterly",
        },
        {
          icon: J,
          title: e("landing.examples.others.financial.title"),
          description: e("landing.examples.others.financial.desc"),
          color: "bg-primary-dark",
          template: "financial-monthly",
        },
      ];
    return t.jsx("section", {
      "data-lov-id": "src\\components\\ReportExamples.tsx:76:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\ReportExamples.tsx",
      "data-component-line": "76",
      "data-component-file": "ReportExamples.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-20%20bg-background%22%7D",
      className: "py-20 bg-background",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\ReportExamples.tsx:77:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\ReportExamples.tsx",
        "data-component-line": "77",
        "data-component-file": "ReportExamples.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\ReportExamples.tsx:78:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\ReportExamples.tsx",
            "data-component-line": "78",
            "data-component-file": "ReportExamples.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              t.jsx("h2", {
                "data-lov-id": "src\\components\\ReportExamples.tsx:79:10",
                "data-lov-name": "h2",
                "data-component-path": "src\\components\\ReportExamples.tsx",
                "data-component-line": "79",
                "data-component-file": "ReportExamples.tsx",
                "data-component-name": "h2",
                "data-component-content": "%7B%22className%22%3A%22mb-4%22%7D",
                className: "mb-4",
                children: e("landing.examples.title"),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\ReportExamples.tsx:80:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\ReportExamples.tsx",
                "data-component-line": "80",
                "data-component-file": "ReportExamples.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-xl%20text-muted-foreground%20max-w-3xl%20mx-auto%22%7D",
                className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                children: e("landing.examples.subtitle"),
              }),
            ],
          }),
          t.jsxs("div", {
            "data-lov-id": "src\\components\\ReportExamples.tsx:85:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\ReportExamples.tsx",
            "data-component-line": "85",
            "data-component-file": "ReportExamples.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22max-w-7xl%20mx-auto%22%7D",
            className: "max-w-7xl mx-auto",
            children: [
              t.jsx("div", {
                "data-lov-id": "src\\components\\ReportExamples.tsx:87:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\ReportExamples.tsx",
                "data-component-line": "87",
                "data-component-file": "ReportExamples.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22mb-12%22%7D",
                className: "mb-12",
                children: t.jsxs(l, {
                  "data-lov-id": "src\\components\\ReportExamples.tsx:88:12",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\components\\ReportExamples.tsx",
                  "data-component-line": "88",
                  "data-component-file": "ReportExamples.tsx",
                  "data-component-name": "Card",
                  "data-component-content":
                    "%7B%22className%22%3A%22overflow-hidden%20border%20shadow-xl%22%7D",
                  className: "overflow-hidden border shadow-xl",
                  children: [
                    t.jsx("div", {
                      "data-lov-id":
                        "src\\components\\ReportExamples.tsx:90:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\components\\ReportExamples.tsx",
                      "data-component-line": "90",
                      "data-component-file": "ReportExamples.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22bg-primary%20p-6%20sm%3Ap-8%20text-white%22%7D",
                      className: "bg-primary p-6 sm:p-8 text-white",
                      children: t.jsxs("div", {
                        "data-lov-id":
                          "src\\components\\ReportExamples.tsx:91:16",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ReportExamples.tsx",
                        "data-component-line": "91",
                        "data-component-file": "ReportExamples.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-center%22%7D",
                        className: "text-center",
                        children: [
                          t.jsx("h3", {
                            "data-lov-id":
                              "src\\components\\ReportExamples.tsx:92:18",
                            "data-lov-name": "h3",
                            "data-component-path":
                              "src\\components\\ReportExamples.tsx",
                            "data-component-line": "92",
                            "data-component-file": "ReportExamples.tsx",
                            "data-component-name": "h3",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-2xl%20font-bold%20mb-2%22%7D",
                            className: "text-2xl font-bold mb-2",
                            children: n.title,
                          }),
                          t.jsx("p", {
                            "data-lov-id":
                              "src\\components\\ReportExamples.tsx:93:18",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\components\\ReportExamples.tsx",
                            "data-component-line": "93",
                            "data-component-file": "ReportExamples.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-white%2F90%22%7D",
                            className: "text-white/90",
                            children: n.subtitle,
                          }),
                        ],
                      }),
                    }),
                    t.jsxs("div", {
                      "data-lov-id":
                        "src\\components\\ReportExamples.tsx:98:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\components\\ReportExamples.tsx",
                      "data-component-line": "98",
                      "data-component-file": "ReportExamples.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-6%20sm%3Ap-8%22%7D",
                      className: "p-6 sm:p-8",
                      children: [
                        t.jsx("div", {
                          "data-lov-id":
                            "src\\components\\ReportExamples.tsx:99:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\ReportExamples.tsx",
                          "data-component-line": "99",
                          "data-component-file": "ReportExamples.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                          children: n.sections.map((o, p) =>
                            t.jsxs(
                              "div",
                              {
                                "data-lov-id":
                                  "src\\components\\ReportExamples.tsx:101:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportExamples.tsx",
                                "data-component-line": "101",
                                "data-component-file": "ReportExamples.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-3%22%7D",
                                className: "space-y-3",
                                children: [
                                  t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportExamples.tsx:102:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportExamples.tsx",
                                    "data-component-line": "102",
                                    "data-component-file": "ReportExamples.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                    className: "flex items-center gap-3",
                                    children: [
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportExamples.tsx:103:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportExamples.tsx",
                                        "data-component-line": "103",
                                        "data-component-file":
                                          "ReportExamples.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-10%20h-10%20bg-primary%2F10%20rounded-lg%20flex%20items-center%20justify-center%22%7D",
                                        className:
                                          "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",
                                        children: t.jsx(o.icon, {
                                          "data-lov-id":
                                            "src\\components\\ReportExamples.tsx:104:26",
                                          "data-lov-name": "section.icon",
                                          "data-component-path":
                                            "src\\components\\ReportExamples.tsx",
                                          "data-component-line": "104",
                                          "data-component-file":
                                            "ReportExamples.tsx",
                                          "data-component-name": "section.icon",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-5%20h-5%20text-primary%22%7D",
                                          className: "w-5 h-5 text-primary",
                                        }),
                                      }),
                                      t.jsx("h4", {
                                        "data-lov-id":
                                          "src\\components\\ReportExamples.tsx:106:24",
                                        "data-lov-name": "h4",
                                        "data-component-path":
                                          "src\\components\\ReportExamples.tsx",
                                        "data-component-line": "106",
                                        "data-component-file":
                                          "ReportExamples.tsx",
                                        "data-component-name": "h4",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-semibold%20text-foreground%22%7D",
                                        className:
                                          "font-semibold text-foreground",
                                        children: o.title,
                                      }),
                                    ],
                                  }),
                                  t.jsx("p", {
                                    "data-lov-id":
                                      "src\\components\\ReportExamples.tsx:108:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\components\\ReportExamples.tsx",
                                    "data-component-line": "108",
                                    "data-component-file": "ReportExamples.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20leading-relaxed%20whitespace-pre-line%22%7D",
                                    className:
                                      "text-sm text-muted-foreground leading-relaxed whitespace-pre-line",
                                    children: o.content,
                                  }),
                                ],
                              },
                              p,
                            ),
                          ),
                        }),
                        t.jsx("div", {
                          "data-lov-id":
                            "src\\components\\ReportExamples.tsx:115:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\ReportExamples.tsx",
                          "data-component-line": "115",
                          "data-component-file": "ReportExamples.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22mt-8%20pt-8%20border-t%20border-border%20text-center%22%7D",
                          className:
                            "mt-8 pt-8 border-t border-border text-center",
                          children: t.jsx(s, {
                            "data-lov-id":
                              "src\\components\\ReportExamples.tsx:116:18",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\components\\ReportExamples.tsx",
                            "data-component-line": "116",
                            "data-component-file": "ReportExamples.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%7D",
                            variant: "accent",
                            size: "lg",
                            asChild: !0,
                            children: t.jsxs(m, {
                              "data-lov-id":
                                "src\\components\\ReportExamples.tsx:117:20",
                              "data-lov-name": "Link",
                              "data-component-path":
                                "src\\components\\ReportExamples.tsx",
                              "data-component-line": "117",
                              "data-component-file": "ReportExamples.tsx",
                              "data-component-name": "Link",
                              "data-component-content": "%7B%7D",
                              to: "/app/novo-relatorio",
                              children: [
                                t.jsx(g, {
                                  "data-lov-id":
                                    "src\\components\\ReportExamples.tsx:118:22",
                                  "data-lov-name": "Target",
                                  "data-component-path":
                                    "src\\components\\ReportExamples.tsx",
                                  "data-component-line": "118",
                                  "data-component-file": "ReportExamples.tsx",
                                  "data-component-name": "Target",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-5%20h-5%20mr-2%22%7D",
                                  className: "w-5 h-5 mr-2",
                                }),
                                e("landing.examples.main.cta"),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                "data-lov-id": "src\\components\\ReportExamples.tsx:129:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\ReportExamples.tsx",
                "data-component-line": "129",
                "data-component-file": "ReportExamples.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20md%3Agrid-cols-3%20gap-6%22%7D",
                className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6",
                children: a.map((o, p) =>
                  t.jsxs(
                    l,
                    {
                      "data-lov-id":
                        "src\\components\\ReportExamples.tsx:131:14",
                      "data-lov-name": "Card",
                      "data-component-path":
                        "src\\components\\ReportExamples.tsx",
                      "data-component-line": "131",
                      "data-component-file": "ReportExamples.tsx",
                      "data-component-name": "Card",
                      "data-component-content":
                        "%7B%22className%22%3A%22overflow-hidden%20border%20shadow-lg%20card-hover%22%7D",
                      className: "overflow-hidden border shadow-lg card-hover",
                      children: [
                        t.jsx("div", {
                          "data-lov-id":
                            "src\\components\\ReportExamples.tsx:132:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\ReportExamples.tsx",
                          "data-component-line": "132",
                          "data-component-file": "ReportExamples.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          className: `${o.color} p-6 text-white`,
                          children: t.jsxs("div", {
                            "data-lov-id":
                              "src\\components\\ReportExamples.tsx:133:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\ReportExamples.tsx",
                            "data-component-line": "133",
                            "data-component-file": "ReportExamples.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                            className: "flex items-center gap-3",
                            children: [
                              t.jsx("div", {
                                "data-lov-id":
                                  "src\\components\\ReportExamples.tsx:134:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportExamples.tsx",
                                "data-component-line": "134",
                                "data-component-file": "ReportExamples.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-12%20h-12%20bg-white%2F20%20rounded-xl%20flex%20items-center%20justify-center%22%7D",
                                className:
                                  "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center",
                                children: t.jsx(o.icon, {
                                  "data-lov-id":
                                    "src\\components\\ReportExamples.tsx:135:22",
                                  "data-lov-name": "report.icon",
                                  "data-component-path":
                                    "src\\components\\ReportExamples.tsx",
                                  "data-component-line": "135",
                                  "data-component-file": "ReportExamples.tsx",
                                  "data-component-name": "report.icon",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D",
                                  className: "w-6 h-6 text-white",
                                }),
                              }),
                              t.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ReportExamples.tsx:137:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportExamples.tsx",
                                "data-component-line": "137",
                                "data-component-file": "ReportExamples.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                  t.jsx("h3", {
                                    "data-lov-id":
                                      "src\\components\\ReportExamples.tsx:138:22",
                                    "data-lov-name": "h3",
                                    "data-component-path":
                                      "src\\components\\ReportExamples.tsx",
                                    "data-component-line": "138",
                                    "data-component-file": "ReportExamples.tsx",
                                    "data-component-name": "h3",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22font-semibold%20text-lg%22%7D",
                                    className: "font-semibold text-lg",
                                    children: o.title,
                                  }),
                                  t.jsx("p", {
                                    "data-lov-id":
                                      "src\\components\\ReportExamples.tsx:139:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\components\\ReportExamples.tsx",
                                    "data-component-line": "139",
                                    "data-component-file": "ReportExamples.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-white%2F90%20text-sm%22%7D",
                                    className: "text-white/90 text-sm",
                                    children: o.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        t.jsx("div", {
                          "data-lov-id":
                            "src\\components\\ReportExamples.tsx:143:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\ReportExamples.tsx",
                          "data-component-line": "143",
                          "data-component-file": "ReportExamples.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22p-6%22%7D",
                          className: "p-6",
                          children: t.jsxs("div", {
                            "data-lov-id":
                              "src\\components\\ReportExamples.tsx:144:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\ReportExamples.tsx",
                            "data-component-line": "144",
                            "data-component-file": "ReportExamples.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                            className: "flex gap-2",
                            children: [
                              t.jsx(s, {
                                "data-lov-id":
                                  "src\\components\\ReportExamples.tsx:145:20",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\components\\ReportExamples.tsx",
                                "data-component-line": "145",
                                "data-component-file": "ReportExamples.tsx",
                                "data-component-name": "Button",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex-1%22%7D",
                                variant: "outline",
                                size: "sm",
                                className: "flex-1",
                                asChild: !0,
                                children: t.jsxs(m, {
                                  "data-lov-id":
                                    "src\\components\\ReportExamples.tsx:146:22",
                                  "data-lov-name": "Link",
                                  "data-component-path":
                                    "src\\components\\ReportExamples.tsx",
                                  "data-component-line": "146",
                                  "data-component-file": "ReportExamples.tsx",
                                  "data-component-name": "Link",
                                  "data-component-content": "%7B%7D",
                                  to: `/app/novo-relatorio?template=${o.template}`,
                                  children: [
                                    t.jsx(k, {
                                      "data-lov-id":
                                        "src\\components\\ReportExamples.tsx:147:24",
                                      "data-lov-name": "Eye",
                                      "data-component-path":
                                        "src\\components\\ReportExamples.tsx",
                                      "data-component-line": "147",
                                      "data-component-file":
                                        "ReportExamples.tsx",
                                      "data-component-name": "Eye",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    e("landing.examples.others.view"),
                                  ],
                                }),
                              }),
                              t.jsx(s, {
                                "data-lov-id":
                                  "src\\components\\ReportExamples.tsx:152:20",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\components\\ReportExamples.tsx",
                                "data-component-line": "152",
                                "data-component-file": "ReportExamples.tsx",
                                "data-component-name": "Button",
                                "data-component-content": "%7B%7D",
                                variant: "ghost",
                                size: "sm",
                                children: t.jsx(w, {
                                  "data-lov-id":
                                    "src\\components\\ReportExamples.tsx:153:22",
                                  "data-lov-name": "Download",
                                  "data-component-path":
                                    "src\\components\\ReportExamples.tsx",
                                  "data-component-line": "153",
                                  "data-component-file": "ReportExamples.tsx",
                                  "data-component-name": "Download",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                  className: "w-4 h-4",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    p,
                  ),
                ),
              }),
            ],
          }),
          t.jsxs("div", {
            "data-lov-id": "src\\components\\ReportExamples.tsx:162:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\ReportExamples.tsx",
            "data-component-line": "162",
            "data-component-file": "ReportExamples.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mt-12%22%7D",
            className: "text-center mt-12",
            children: [
              t.jsx(s, {
                "data-lov-id": "src\\components\\ReportExamples.tsx:163:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\components\\ReportExamples.tsx",
                "data-component-line": "163",
                "data-component-file": "ReportExamples.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%22className%22%3A%22px-8%22%7D",
                variant: "accent",
                size: "lg",
                className: "px-8",
                asChild: !0,
                children: t.jsxs(m, {
                  "data-lov-id": "src\\components\\ReportExamples.tsx:164:12",
                  "data-lov-name": "Link",
                  "data-component-path": "src\\components\\ReportExamples.tsx",
                  "data-component-line": "164",
                  "data-component-file": "ReportExamples.tsx",
                  "data-component-name": "Link",
                  "data-component-content": "%7B%7D",
                  to: "/app/novo-relatorio",
                  children: [
                    t.jsx(g, {
                      "data-lov-id":
                        "src\\components\\ReportExamples.tsx:165:14",
                      "data-lov-name": "Target",
                      "data-component-path":
                        "src\\components\\ReportExamples.tsx",
                      "data-component-line": "165",
                      "data-component-file": "ReportExamples.tsx",
                      "data-component-name": "Target",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-5%20h-5%20mr-2%22%7D",
                      className: "w-5 h-5 mr-2",
                    }),
                    e("landing.examples.footer_cta"),
                  ],
                }),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\ReportExamples.tsx:169:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\ReportExamples.tsx",
                "data-component-line": "169",
                "data-component-file": "ReportExamples.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20mt-3%22%7D",
                className: "text-sm text-muted-foreground mt-3",
                children: e("landing.examples.footer_hint"),
              }),
            ],
          }),
        ],
      }),
    });
  },
  ot = () => {
    const { t: e } = c();
    return t.jsx("section", {
      "data-lov-id": "src\\components\\ReportShowcase.tsx:13:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\ReportShowcase.tsx",
      "data-component-line": "13",
      "data-component-file": "ReportShowcase.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-20%20bg-secondary%2F30%22%7D",
      id: "exemplos",
      className: "py-20 bg-secondary/30",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\ReportShowcase.tsx:14:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\ReportShowcase.tsx",
        "data-component-line": "14",
        "data-component-file": "ReportShowcase.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\ReportShowcase.tsx:15:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\ReportShowcase.tsx",
            "data-component-line": "15",
            "data-component-file": "ReportShowcase.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              t.jsx("h2", {
                "data-lov-id": "src\\components\\ReportShowcase.tsx:16:10",
                "data-lov-name": "h2",
                "data-component-path": "src\\components\\ReportShowcase.tsx",
                "data-component-line": "16",
                "data-component-file": "ReportShowcase.tsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-foreground%20mb-4%22%7D",
                className:
                  "text-3xl md:text-4xl font-bold text-foreground mb-4",
                children: e("landing.showcase.title"),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\ReportShowcase.tsx:19:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\ReportShowcase.tsx",
                "data-component-line": "19",
                "data-component-file": "ReportShowcase.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-xl%20text-muted-foreground%20max-w-2xl%20mx-auto%22%7D",
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children: e("landing.showcase.subtitle"),
              }),
            ],
          }),
          t.jsxs("div", {
            "data-lov-id": "src\\components\\ReportShowcase.tsx:25:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\ReportShowcase.tsx",
            "data-component-line": "25",
            "data-component-file": "ReportShowcase.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-8%20lg%3Agap-12%20max-w-6xl%20mx-auto%22%7D",
            className: "grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto",
            children: [
              t.jsxs("div", {
                "data-lov-id": "src\\components\\ReportShowcase.tsx:27:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\ReportShowcase.tsx",
                "data-component-line": "27",
                "data-component-file": "ReportShowcase.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-4%22%7D",
                className: "space-y-4",
                children: [
                  t.jsx("h3", {
                    "data-lov-id": "src\\components\\ReportShowcase.tsx:28:12",
                    "data-lov-name": "h3",
                    "data-component-path":
                      "src\\components\\ReportShowcase.tsx",
                    "data-component-line": "28",
                    "data-component-file": "ReportShowcase.tsx",
                    "data-component-name": "h3",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-xl%20font-semibold%20text-center%22%7D",
                    className: "text-xl font-semibold text-center",
                    children: e("landing.showcase.portrait.title"),
                  }),
                  t.jsxs(N, {
                    "data-lov-id": "src\\components\\ReportShowcase.tsx:30:12",
                    "data-lov-name": "Paper",
                    "data-component-path":
                      "src\\components\\ReportShowcase.tsx",
                    "data-component-line": "30",
                    "data-component-file": "ReportShowcase.tsx",
                    "data-component-name": "Paper",
                    "data-component-content": "%7B%7D",
                    orientation: "portrait",
                    size: "a4",
                    padding: "md",
                    children: [
                      t.jsxs("div", {
                        "data-lov-id":
                          "src\\components\\ReportShowcase.tsx:32:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ReportShowcase.tsx",
                        "data-component-line": "32",
                        "data-component-file": "ReportShowcase.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22border-b%20pb-3%20mb-4%20flex-shrink-0%22%7D",
                        className: "border-b pb-3 mb-4 flex-shrink-0",
                        children: [
                          t.jsx("h4", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:33:16",
                            "data-lov-name": "h4",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "33",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "h4",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-lg%20font-bold%20text-primary%22%7D",
                            className: "text-lg font-bold text-primary",
                            children: e("landing.showcase.portrait.header"),
                          }),
                          t.jsx("p", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:34:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "34",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                            className: "text-sm text-muted-foreground",
                            children: e("landing.showcase.portrait.analysis"),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        "data-lov-id":
                          "src\\components\\ReportShowcase.tsx:39:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ReportShowcase.tsx",
                        "data-component-line": "39",
                        "data-component-file": "ReportShowcase.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex-1%20space-y-4%20min-h-0%22%7D",
                        className: "flex-1 space-y-4 min-h-0",
                        children: [
                          t.jsxs("div", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:40:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "40",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22bg-primary%2F5%20p-3%20rounded%22%7D",
                            className: "bg-primary/5 p-3 rounded",
                            children: [
                              t.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:41:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "41",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  t.jsx(f, {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:42:20",
                                    "data-lov-name": "TrendingUp",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "42",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "TrendingUp",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-4%20h-4%20text-primary%20flex-shrink-0%22%7D",
                                    className:
                                      "w-4 h-4 text-primary flex-shrink-0",
                                  }),
                                  t.jsx("span", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:43:20",
                                    "data-lov-name": "span",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "43",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "span",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22font-semibold%20text-sm%22%7D",
                                    className: "font-semibold text-sm",
                                    children: e(
                                      "landing.showcase.portrait.summary",
                                    ),
                                  }),
                                ],
                              }),
                              t.jsx("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:45:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "45",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20leading-relaxed%22%7D",
                                className:
                                  "text-xs text-muted-foreground leading-relaxed",
                                children: e(
                                  "landing.showcase.portrait.summary_text",
                                ),
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:51:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "51",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22bg-accent%2F5%20p-3%20rounded%22%7D",
                            className: "bg-accent/5 p-3 rounded",
                            children: [
                              t.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:52:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "52",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  t.jsx(R, {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:53:20",
                                    "data-lov-name": "BarChart3",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "53",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "BarChart3",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-4%20h-4%20text-accent%20flex-shrink-0%22%7D",
                                    className:
                                      "w-4 h-4 text-accent flex-shrink-0",
                                  }),
                                  t.jsx("span", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:54:20",
                                    "data-lov-name": "span",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "54",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "span",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22font-semibold%20text-sm%22%7D",
                                    className: "font-semibold text-sm",
                                    children: e(
                                      "landing.showcase.portrait.metrics",
                                    ),
                                  }),
                                ],
                              }),
                              t.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:56:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "56",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-2%20text-xs%22%7D",
                                className: "grid grid-cols-2 gap-2 text-xs",
                                children: [
                                  t.jsx("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:57:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "57",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22bg-background%20p-2%20rounded%20truncate%22%7D",
                                    className:
                                      "bg-background p-2 rounded truncate",
                                    children: e(
                                      "landing.showcase.portrait.revenue",
                                    ),
                                  }),
                                  t.jsx("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:58:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "58",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22bg-background%20p-2%20rounded%20truncate%22%7D",
                                    className:
                                      "bg-background p-2 rounded truncate",
                                    children: e(
                                      "landing.showcase.portrait.growth",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:63:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "63",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22bg-muted%2F50%20p-3%20rounded%22%7D",
                            className: "bg-muted/50 p-3 rounded",
                            children: [
                              t.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:64:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "64",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  t.jsx(K, {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:65:20",
                                    "data-lov-name": "PieChart",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "65",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "PieChart",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-4%20h-4%20text-primary%20flex-shrink-0%22%7D",
                                    className:
                                      "w-4 h-4 text-primary flex-shrink-0",
                                  }),
                                  t.jsx("span", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:66:20",
                                    "data-lov-name": "span",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "66",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "span",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22font-semibold%20text-sm%22%7D",
                                    className: "font-semibold text-sm",
                                    children: e(
                                      "landing.showcase.portrait.dist",
                                    ),
                                  }),
                                ],
                              }),
                              t.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:69:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "69",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-2%20text-xs%22%7D",
                                className: "space-y-2 text-xs",
                                children: [
                                  t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:70:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "70",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%20gap-2%22%7D",
                                    className:
                                      "flex items-center justify-between gap-2",
                                    children: [
                                      t.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:71:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "71",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex-shrink-0%22%7D",
                                        className: "flex-shrink-0",
                                        children: e(
                                          "landing.showcase.portrait.southeast",
                                        ),
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:72:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "72",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-16%20h-2%20bg-primary%20rounded%20flex-shrink-0%22%7D",
                                        className:
                                          "w-16 h-2 bg-primary rounded flex-shrink-0",
                                      }),
                                      t.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:73:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "73",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%2245%25%22%2C%22className%22%3A%22flex-shrink-0%22%7D",
                                        className: "flex-shrink-0",
                                        children: "45%",
                                      }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:76:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "76",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%20gap-2%22%7D",
                                    className:
                                      "flex items-center justify-between gap-2",
                                    children: [
                                      t.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:77:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "77",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex-shrink-0%22%7D",
                                        className: "flex-shrink-0",
                                        children: e(
                                          "landing.showcase.portrait.south",
                                        ),
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:78:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "78",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-12%20h-2%20bg-primary-dark%20rounded%20flex-shrink-0%22%7D",
                                        className:
                                          "w-12 h-2 bg-primary-dark rounded flex-shrink-0",
                                      }),
                                      t.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:79:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "79",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%2230%25%22%2C%22className%22%3A%22flex-shrink-0%22%7D",
                                        className: "flex-shrink-0",
                                        children: "30%",
                                      }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:82:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "82",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%20gap-2%22%7D",
                                    className:
                                      "flex items-center justify-between gap-2",
                                    children: [
                                      t.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:83:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "83",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex-shrink-0%22%7D",
                                        className: "flex-shrink-0",
                                        children: e(
                                          "landing.showcase.portrait.northeast",
                                        ),
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:84:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "84",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-8%20h-2%20bg-accent%20rounded%20flex-shrink-0%22%7D",
                                        className:
                                          "w-8 h-2 bg-accent rounded flex-shrink-0",
                                      }),
                                      t.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:85:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "85",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%2225%25%22%2C%22className%22%3A%22flex-shrink-0%22%7D",
                                        className: "flex-shrink-0",
                                        children: "25%",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        "data-lov-id":
                          "src\\components\\ReportShowcase.tsx:93:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ReportShowcase.tsx",
                        "data-component-line": "93",
                        "data-component-file": "ReportShowcase.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22border-t%20pt-3%20mt-4%20flex-shrink-0%22%7D",
                        className: "border-t pt-3 mt-4 flex-shrink-0",
                        children: t.jsxs("p", {
                          "data-lov-id":
                            "src\\components\\ReportShowcase.tsx:94:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\components\\ReportShowcase.tsx",
                          "data-component-line": "94",
                          "data-component-file": "ReportShowcase.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%20text-center%22%7D",
                          className:
                            "text-xs text-muted-foreground text-center",
                          children: [
                            e("landing.showcase.portrait.generated"),
                            " • ",
                            t.jsx(x, {
                              "data-lov-id":
                                "src\\components\\ReportShowcase.tsx:95:63",
                              "data-lov-name": "BrandName",
                              "data-component-path":
                                "src\\components\\ReportShowcase.tsx",
                              "data-component-line": "95",
                              "data-component-file": "ReportShowcase.tsx",
                              "data-component-name": "BrandName",
                              "data-component-content": "%7B%7D",
                              variant: "default",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                "data-lov-id": "src\\components\\ReportShowcase.tsx:103:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\ReportShowcase.tsx",
                "data-component-line": "103",
                "data-component-file": "ReportShowcase.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-4%22%7D",
                className: "space-y-4",
                children: [
                  t.jsx("h3", {
                    "data-lov-id": "src\\components\\ReportShowcase.tsx:104:12",
                    "data-lov-name": "h3",
                    "data-component-path":
                      "src\\components\\ReportShowcase.tsx",
                    "data-component-line": "104",
                    "data-component-file": "ReportShowcase.tsx",
                    "data-component-name": "h3",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-xl%20font-semibold%20text-center%22%7D",
                    className: "text-xl font-semibold text-center",
                    children: e("landing.showcase.landscape.title"),
                  }),
                  t.jsxs(N, {
                    "data-lov-id": "src\\components\\ReportShowcase.tsx:106:12",
                    "data-lov-name": "Paper",
                    "data-component-path":
                      "src\\components\\ReportShowcase.tsx",
                    "data-component-line": "106",
                    "data-component-file": "ReportShowcase.tsx",
                    "data-component-name": "Paper",
                    "data-component-content": "%7B%7D",
                    orientation: "landscape",
                    size: "a4",
                    padding: "md",
                    children: [
                      t.jsx("div", {
                        "data-lov-id":
                          "src\\components\\ReportShowcase.tsx:108:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ReportShowcase.tsx",
                        "data-component-line": "108",
                        "data-component-file": "ReportShowcase.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22border-b%20pb-3%20mb-4%20flex-shrink-0%22%7D",
                        className: "border-b pb-3 mb-4 flex-shrink-0",
                        children: t.jsxs("div", {
                          "data-lov-id":
                            "src\\components\\ReportShowcase.tsx:109:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\ReportShowcase.tsx",
                          "data-component-line": "109",
                          "data-component-file": "ReportShowcase.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Ajustify-between%20sm%3Aitems-start%20gap-2%22%7D",
                          className:
                            "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2",
                          children: [
                            t.jsxs("div", {
                              "data-lov-id":
                                "src\\components\\ReportShowcase.tsx:110:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\components\\ReportShowcase.tsx",
                              "data-component-line": "110",
                              "data-component-file": "ReportShowcase.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22min-w-0%20flex-1%22%7D",
                              className: "min-w-0 flex-1",
                              children: [
                                t.jsx("h4", {
                                  "data-lov-id":
                                    "src\\components\\ReportShowcase.tsx:111:20",
                                  "data-lov-name": "h4",
                                  "data-component-path":
                                    "src\\components\\ReportShowcase.tsx",
                                  "data-component-line": "111",
                                  "data-component-file": "ReportShowcase.tsx",
                                  "data-component-name": "h4",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-base%20sm%3Atext-lg%20font-bold%20text-primary%20truncate%22%7D",
                                  className:
                                    "text-base sm:text-lg font-bold text-primary truncate",
                                  children: e(
                                    "landing.showcase.landscape.header",
                                  ),
                                }),
                                t.jsx("p", {
                                  "data-lov-id":
                                    "src\\components\\ReportShowcase.tsx:112:20",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\components\\ReportShowcase.tsx",
                                  "data-component-line": "112",
                                  "data-component-file": "ReportShowcase.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-xs%20sm%3Atext-sm%20text-muted-foreground%20truncate%22%7D",
                                  className:
                                    "text-xs sm:text-sm text-muted-foreground truncate",
                                  children: e(
                                    "landing.showcase.landscape.subtitle",
                                  ),
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              "data-lov-id":
                                "src\\components\\ReportShowcase.tsx:114:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\components\\ReportShowcase.tsx",
                              "data-component-line": "114",
                              "data-component-file": "ReportShowcase.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20flex-shrink-0%20sm%3Atext-right%22%7D",
                              className:
                                "text-xs text-muted-foreground flex-shrink-0 sm:text-right",
                              children: [
                                t.jsx("div", {
                                  "data-lov-id":
                                    "src\\components\\ReportShowcase.tsx:115:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\components\\ReportShowcase.tsx",
                                  "data-component-line": "115",
                                  "data-component-file": "ReportShowcase.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22whitespace-nowrap%22%7D",
                                  className: "whitespace-nowrap",
                                  children: e(
                                    "landing.showcase.landscape.generated_on",
                                    { date: "31/01/24" },
                                  ),
                                }),
                                t.jsx("div", {
                                  "data-lov-id":
                                    "src\\components\\ReportShowcase.tsx:116:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\components\\ReportShowcase.tsx",
                                  "data-component-line": "116",
                                  "data-component-file": "ReportShowcase.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22whitespace-nowrap%22%7D",
                                  className: "whitespace-nowrap",
                                  children: e(
                                    "landing.showcase.landscape.period",
                                    { period: "Jan" },
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      t.jsxs("div", {
                        "data-lov-id":
                          "src\\components\\ReportShowcase.tsx:123:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ReportShowcase.tsx",
                        "data-component-line": "123",
                        "data-component-file": "ReportShowcase.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex-1%20grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-3%20lg%3Agap-4%20min-h-0%20overflow-hidden%22%7D",
                        className:
                          "flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 min-h-0 overflow-hidden",
                        children: [
                          t.jsxs("div", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:125:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "125",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-3%20min-h-0%22%7D",
                            className: "space-y-3 min-h-0",
                            children: [
                              t.jsx("h5", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:126:18",
                                "data-lov-name": "h5",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "126",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "h5",
                                "data-component-content":
                                  "%7B%22className%22%3A%22font-semibold%20text-sm%20text-foreground%22%7D",
                                className:
                                  "font-semibold text-sm text-foreground",
                                children: e(
                                  "landing.showcase.landscape.kpi_title",
                                ),
                              }),
                              t.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:128:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "128",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-2%22%7D",
                                className: "space-y-2",
                                children: [
                                  t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:129:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "129",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22bg-primary%2F5%20p-3%20rounded%20overflow-hidden%22%7D",
                                    className:
                                      "bg-primary/5 p-3 rounded overflow-hidden",
                                    children: [
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:130:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "130",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-semibold%20text-xs%20truncate%22%7D",
                                        className:
                                          "font-semibold text-xs truncate",
                                        children: e(
                                          "landing.showcase.landscape.rev_total",
                                        ),
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:131:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "131",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22R%24%20847K%22%2C%22className%22%3A%22text-lg%20font-bold%20text-primary%20truncate%22%7D",
                                        className:
                                          "text-lg font-bold text-primary truncate",
                                        children: "R$ 847K",
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:132:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "132",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22%E2%86%91%2012.5%25%22%2C%22className%22%3A%22text-xs%20text-accent%20truncate%22%7D",
                                        className:
                                          "text-xs text-accent truncate",
                                        children: "↑ 12.5%",
                                      }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:135:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "135",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22bg-accent%2F5%20p-3%20rounded%20overflow-hidden%22%7D",
                                    className:
                                      "bg-accent/5 p-3 rounded overflow-hidden",
                                    children: [
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:136:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "136",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-semibold%20text-xs%20truncate%22%7D",
                                        className:
                                          "font-semibold text-xs truncate",
                                        children: e(
                                          "landing.showcase.landscape.new_clients",
                                        ),
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:137:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "137",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22156%22%2C%22className%22%3A%22text-lg%20font-bold%20text-accent%20truncate%22%7D",
                                        className:
                                          "text-lg font-bold text-accent truncate",
                                        children: "156",
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:138:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "138",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22%E2%86%91%208.2%25%22%2C%22className%22%3A%22text-xs%20text-primary%20truncate%22%7D",
                                        className:
                                          "text-xs text-primary truncate",
                                        children: "↑ 8.2%",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:145:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "145",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-3%20min-h-0%22%7D",
                            className: "space-y-3 min-h-0",
                            children: [
                              t.jsx("h5", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:146:18",
                                "data-lov-name": "h5",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "146",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "h5",
                                "data-component-content":
                                  "%7B%22className%22%3A%22font-semibold%20text-sm%20text-foreground%22%7D",
                                className:
                                  "font-semibold text-sm text-foreground",
                                children: e(
                                  "landing.showcase.landscape.trend_title",
                                ),
                              }),
                              t.jsx("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:148:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "148",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22bg-muted%2F50%20p-3%20rounded%20h-24%20sm%3Ah-28%20flex%20items-end%20justify-between%20gap-1%20overflow-hidden%22%7D",
                                className:
                                  "bg-muted/50 p-3 rounded h-24 sm:h-28 flex items-end justify-between gap-1 overflow-hidden",
                                children: [40, 60, 35, 80, 65, 90, 75].map(
                                  (n, a) =>
                                    t.jsx(
                                      "div",
                                      {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:150:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "150",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22bg-primary%20rounded-t%20w-3%20flex-shrink-0%22%7D",
                                        className:
                                          "bg-primary rounded-t w-3 flex-shrink-0",
                                        style: { height: `${n}%` },
                                      },
                                      a,
                                    ),
                                ),
                              }),
                              t.jsx("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:157:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "157",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Jan%201-31%2C%202024%22%2C%22className%22%3A%22text-xs%20text-center%20text-muted-foreground%20truncate%22%7D",
                                className:
                                  "text-xs text-center text-muted-foreground truncate",
                                children: "Jan 1-31, 2024",
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:161:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "161",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-3%20min-h-0%20md%3Acol-span-2%20lg%3Acol-span-1%22%7D",
                            className:
                              "space-y-3 min-h-0 md:col-span-2 lg:col-span-1",
                            children: [
                              t.jsx("h5", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:162:18",
                                "data-lov-name": "h5",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "162",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "h5",
                                "data-component-content":
                                  "%7B%22className%22%3A%22font-semibold%20text-sm%20text-foreground%22%7D",
                                className:
                                  "font-semibold text-sm text-foreground",
                                children: e(
                                  "landing.showcase.landscape.ai_title",
                                ),
                              }),
                              t.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:163:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "163",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-2%20overflow-hidden%22%7D",
                                className: "space-y-2 overflow-hidden",
                                children: [
                                  t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:164:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "164",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22bg-accent%2F10%20p-3%20rounded%20border-l-2%20border-accent%20overflow-hidden%22%7D",
                                    className:
                                      "bg-accent/10 p-3 rounded border-l-2 border-accent overflow-hidden",
                                    children: [
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:165:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "165",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-semibold%20text-xs%20truncate%22%7D",
                                        className:
                                          "font-semibold text-xs truncate",
                                        children: e(
                                          "landing.showcase.landscape.opportunity",
                                        ),
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:166:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "166",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-xs%20leading-snug%22%7D",
                                        className: "text-xs leading-snug",
                                        children: e(
                                          "landing.showcase.landscape.opp_text",
                                        ),
                                      }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ReportShowcase.tsx:168:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ReportShowcase.tsx",
                                    "data-component-line": "168",
                                    "data-component-file": "ReportShowcase.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22bg-warning%2F10%20p-3%20rounded%20border-l-2%20border-warning%20overflow-hidden%22%7D",
                                    className:
                                      "bg-warning/10 p-3 rounded border-l-2 border-warning overflow-hidden",
                                    children: [
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:169:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "169",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-semibold%20text-xs%20truncate%22%7D",
                                        className:
                                          "font-semibold text-xs truncate",
                                        children: e(
                                          "landing.showcase.landscape.attention",
                                        ),
                                      }),
                                      t.jsx("div", {
                                        "data-lov-id":
                                          "src\\components\\ReportShowcase.tsx:170:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\components\\ReportShowcase.tsx",
                                        "data-component-line": "170",
                                        "data-component-file":
                                          "ReportShowcase.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-xs%20leading-snug%22%7D",
                                        className: "text-xs leading-snug",
                                        children: e(
                                          "landing.showcase.landscape.att_text",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        "data-lov-id":
                          "src\\components\\ReportShowcase.tsx:178:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ReportShowcase.tsx",
                        "data-component-line": "178",
                        "data-component-file": "ReportShowcase.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22border-t%20pt-3%20mt-4%20flex%20flex-col%20sm%3Aflex-row%20justify-between%20items-center%20text-xs%20text-muted-foreground%20gap-2%20flex-shrink-0%22%7D",
                        className:
                          "border-t pt-3 mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-2 flex-shrink-0",
                        children: [
                          t.jsxs("span", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:179:16",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "179",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22truncate%20text-center%20sm%3Atext-left%22%7D",
                            className: "truncate text-center sm:text-left",
                            children: [
                              e("landing.showcase.landscape.ai_footer"),
                              " • ",
                              t.jsx(x, {
                                "data-lov-id":
                                  "src\\components\\ReportShowcase.tsx:180:64",
                                "data-lov-name": "BrandName",
                                "data-component-path":
                                  "src\\components\\ReportShowcase.tsx",
                                "data-component-line": "180",
                                "data-component-file": "ReportShowcase.tsx",
                                "data-component-name": "BrandName",
                                "data-component-content": "%7B%7D",
                                variant: "default",
                              }),
                            ],
                          }),
                          t.jsx("span", {
                            "data-lov-id":
                              "src\\components\\ReportShowcase.tsx:182:16",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\components\\ReportShowcase.tsx",
                            "data-component-line": "182",
                            "data-component-file": "ReportShowcase.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22className%22%3A%22whitespace-nowrap%22%7D",
                            className: "whitespace-nowrap",
                            children: e(
                              "landing.showcase.landscape.page_info",
                              { current: 1, total: 3 },
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t.jsx("div", {
            "data-lov-id": "src\\components\\ReportShowcase.tsx:189:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\ReportShowcase.tsx",
            "data-component-line": "189",
            "data-component-file": "ReportShowcase.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mt-12%22%7D",
            className: "text-center mt-12",
            children: t.jsx(s, {
              "data-lov-id": "src\\components\\ReportShowcase.tsx:190:10",
              "data-lov-name": "Button",
              "data-component-path": "src\\components\\ReportShowcase.tsx",
              "data-component-line": "190",
              "data-component-file": "ReportShowcase.tsx",
              "data-component-name": "Button",
              "data-component-content":
                "%7B%22className%22%3A%22text-lg%20px-8%20py-4%22%7D",
              variant: "accent",
              size: "lg",
              className: "text-lg px-8 py-4",
              asChild: !0,
              children: t.jsxs(m, {
                "data-lov-id": "src\\components\\ReportShowcase.tsx:191:12",
                "data-lov-name": "Link",
                "data-component-path": "src\\components\\ReportShowcase.tsx",
                "data-component-line": "191",
                "data-component-file": "ReportShowcase.tsx",
                "data-component-name": "Link",
                "data-component-content": "%7B%7D",
                to: "/app/novo-relatorio",
                children: [
                  t.jsx(w, {
                    "data-lov-id": "src\\components\\ReportShowcase.tsx:192:14",
                    "data-lov-name": "Download",
                    "data-component-path":
                      "src\\components\\ReportShowcase.tsx",
                    "data-component-line": "192",
                    "data-component-file": "ReportShowcase.tsx",
                    "data-component-name": "Download",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-5%20h-5%20mr-2%22%7D",
                    className: "w-5 h-5 mr-2",
                  }),
                  e("landing.showcase.cta"),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  },
  st = () => {
    const { t: e } = c(),
      n = [
        {
          icon: V,
          title: e("landing.benefits.items.speed.title"),
          description: e("landing.benefits.items.speed.desc"),
        },
        {
          icon: f,
          title: e("landing.benefits.items.action.title"),
          description: e("landing.benefits.items.action.desc"),
        },
        {
          icon: g,
          title: e("landing.benefits.items.design.title"),
          description: e("landing.benefits.items.design.desc"),
        },
        {
          icon: D,
          title: e("landing.benefits.items.viz.title"),
          description: e("landing.benefits.items.viz.desc"),
        },
        {
          icon: k,
          title: e("landing.benefits.items.narrative.title"),
          description: e("landing.benefits.items.narrative.desc"),
        },
        {
          icon: Y,
          title: e("landing.benefits.items.security.title"),
          description: e("landing.benefits.items.security.desc"),
        },
      ];
    return t.jsx("section", {
      "data-lov-id": "src\\components\\Benefits.tsx:43:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\Benefits.tsx",
      "data-component-line": "43",
      "data-component-file": "Benefits.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-20%20bg-background%22%7D",
      className: "py-20 bg-background",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\Benefits.tsx:44:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\Benefits.tsx",
        "data-component-line": "44",
        "data-component-file": "Benefits.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\Benefits.tsx:45:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Benefits.tsx",
            "data-component-line": "45",
            "data-component-file": "Benefits.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              t.jsx("h2", {
                "data-lov-id": "src\\components\\Benefits.tsx:46:10",
                "data-lov-name": "h2",
                "data-component-path": "src\\components\\Benefits.tsx",
                "data-component-line": "46",
                "data-component-file": "Benefits.tsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-foreground%20mb-4%22%7D",
                className:
                  "text-3xl md:text-4xl font-bold text-foreground mb-4",
                children: e("landing.benefits.title"),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\Benefits.tsx:49:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\Benefits.tsx",
                "data-component-line": "49",
                "data-component-file": "Benefits.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-xl%20text-muted-foreground%20max-w-3xl%20mx-auto%22%7D",
                className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                children: e("landing.benefits.subtitle"),
              }),
            ],
          }),
          t.jsx("div", {
            "data-lov-id": "src\\components\\Benefits.tsx:55:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Benefits.tsx",
            "data-component-line": "55",
            "data-component-file": "Benefits.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%20max-w-7xl%20mx-auto%22%7D",
            className:
              "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
            children: n.map((a, o) =>
              t.jsx(
                l,
                {
                  "data-lov-id": "src\\components\\Benefits.tsx:57:12",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\components\\Benefits.tsx",
                  "data-component-line": "57",
                  "data-component-file": "Benefits.tsx",
                  "data-component-name": "Card",
                  "data-component-content":
                    "%7B%22className%22%3A%22p-6%20bg-card%20hover%3Ashadow-lg%20transition-all%20duration-300%20hover%3Ascale-%5B1.02%5D%22%7D",
                  className:
                    "p-6 bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
                  children: t.jsxs("div", {
                    "data-lov-id": "src\\components\\Benefits.tsx:58:14",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\Benefits.tsx",
                    "data-component-line": "58",
                    "data-component-file": "Benefits.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-start%20gap-4%22%7D",
                    className: "flex items-start gap-4",
                    children: [
                      t.jsx("div", {
                        "data-lov-id": "src\\components\\Benefits.tsx:59:16",
                        "data-lov-name": "div",
                        "data-component-path": "src\\components\\Benefits.tsx",
                        "data-component-line": "59",
                        "data-component-file": "Benefits.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-12%20h-12%20bg-primary%2F10%20rounded-lg%20flex%20items-center%20justify-center%20flex-shrink-0%22%7D",
                        className:
                          "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0",
                        children: t.jsx(a.icon, {
                          "data-lov-id": "src\\components\\Benefits.tsx:60:18",
                          "data-lov-name": "benefit.icon",
                          "data-component-path":
                            "src\\components\\Benefits.tsx",
                          "data-component-line": "60",
                          "data-component-file": "Benefits.tsx",
                          "data-component-name": "benefit.icon",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-6%20h-6%20text-primary%22%7D",
                          className: "w-6 h-6 text-primary",
                        }),
                      }),
                      t.jsxs("div", {
                        "data-lov-id": "src\\components\\Benefits.tsx:62:16",
                        "data-lov-name": "div",
                        "data-component-path": "src\\components\\Benefits.tsx",
                        "data-component-line": "62",
                        "data-component-file": "Benefits.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [
                          t.jsx("h3", {
                            "data-lov-id":
                              "src\\components\\Benefits.tsx:63:18",
                            "data-lov-name": "h3",
                            "data-component-path":
                              "src\\components\\Benefits.tsx",
                            "data-component-line": "63",
                            "data-component-file": "Benefits.tsx",
                            "data-component-name": "h3",
                            "data-component-content":
                              "%7B%22className%22%3A%22font-semibold%20text-foreground%20mb-2%22%7D",
                            className: "font-semibold text-foreground mb-2",
                            children: a.title,
                          }),
                          t.jsx("p", {
                            "data-lov-id":
                              "src\\components\\Benefits.tsx:66:18",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\components\\Benefits.tsx",
                            "data-component-line": "66",
                            "data-component-file": "Benefits.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20leading-relaxed%22%7D",
                            className:
                              "text-sm text-muted-foreground leading-relaxed",
                            children: a.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                o,
              ),
            ),
          }),
        ],
      }),
    });
  },
  ct = () => {
    const { t: e } = c(),
      n = [
        {
          icon: j,
          title: e("landing.trust_section.items.privacy.title"),
          description: e("landing.trust_section.items.privacy.desc"),
          highlight: e("landing.trust_section.items.privacy.tag"),
        },
        {
          icon: S,
          title: e("landing.trust_section.items.support.title"),
          description: e("landing.trust_section.items.support.desc"),
          highlight: e("landing.trust_section.items.support.tag"),
        },
        {
          icon: Z,
          title: e("landing.trust_section.items.roadmap.title"),
          description: e("landing.trust_section.items.roadmap.desc"),
          highlight: e("landing.trust_section.items.roadmap.tag"),
        },
      ];
    return t.jsx("section", {
      "data-lov-id": "src\\components\\Trust.tsx:31:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\Trust.tsx",
      "data-component-line": "31",
      "data-component-file": "Trust.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-20%20bg-secondary%2F30%22%7D",
      className: "py-20 bg-secondary/30",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\Trust.tsx:32:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\Trust.tsx",
        "data-component-line": "32",
        "data-component-file": "Trust.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\Trust.tsx:33:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Trust.tsx",
            "data-component-line": "33",
            "data-component-file": "Trust.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              t.jsx("h2", {
                "data-lov-id": "src\\components\\Trust.tsx:34:10",
                "data-lov-name": "h2",
                "data-component-path": "src\\components\\Trust.tsx",
                "data-component-line": "34",
                "data-component-file": "Trust.tsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-foreground%20mb-4%22%7D",
                className:
                  "text-3xl md:text-4xl font-bold text-foreground mb-4",
                children: e("landing.trust_section.title"),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\Trust.tsx:37:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\Trust.tsx",
                "data-component-line": "37",
                "data-component-file": "Trust.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-xl%20text-muted-foreground%20max-w-2xl%20mx-auto%22%7D",
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children: e("landing.trust_section.subtitle"),
              }),
            ],
          }),
          t.jsx("div", {
            "data-lov-id": "src\\components\\Trust.tsx:43:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Trust.tsx",
            "data-component-line": "43",
            "data-component-file": "Trust.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%20max-w-6xl%20mx-auto%22%7D",
            className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
            children: n.map((a, o) =>
              t.jsxs(
                l,
                {
                  "data-lov-id": "src\\components\\Trust.tsx:45:12",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\components\\Trust.tsx",
                  "data-component-line": "45",
                  "data-component-file": "Trust.tsx",
                  "data-component-name": "Card",
                  "data-component-content":
                    "%7B%22className%22%3A%22p-8%20text-center%20bg-card%20hover%3Ashadow-lg%20transition-all%20duration-300%20hover%3Ascale-%5B1.02%5D%22%7D",
                  className:
                    "p-8 text-center bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
                  children: [
                    t.jsx("div", {
                      "data-lov-id": "src\\components\\Trust.tsx:46:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\components\\Trust.tsx",
                      "data-component-line": "46",
                      "data-component-file": "Trust.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-16%20h-16%20bg-primary%20rounded-2xl%20flex%20items-center%20justify-center%20mx-auto%20mb-6%22%7D",
                      className:
                        "w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6",
                      children: t.jsx(a.icon, {
                        "data-lov-id": "src\\components\\Trust.tsx:47:16",
                        "data-lov-name": "pillar.icon",
                        "data-component-path": "src\\components\\Trust.tsx",
                        "data-component-line": "47",
                        "data-component-file": "Trust.tsx",
                        "data-component-name": "pillar.icon",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D",
                        className: "w-8 h-8 text-white",
                      }),
                    }),
                    t.jsxs("div", {
                      "data-lov-id": "src\\components\\Trust.tsx:50:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\components\\Trust.tsx",
                      "data-component-line": "50",
                      "data-component-file": "Trust.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22mb-4%22%7D",
                      className: "mb-4",
                      children: [
                        t.jsx("span", {
                          "data-lov-id": "src\\components\\Trust.tsx:51:16",
                          "data-lov-name": "span",
                          "data-component-path": "src\\components\\Trust.tsx",
                          "data-component-line": "51",
                          "data-component-file": "Trust.tsx",
                          "data-component-name": "span",
                          "data-component-content":
                            "%7B%22className%22%3A%22inline-block%20px-3%20py-1%20bg-accent%2F10%20text-accent%20text-sm%20font-medium%20rounded-full%20mb-3%22%7D",
                          className:
                            "inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3",
                          children: a.highlight,
                        }),
                        t.jsx("h3", {
                          "data-lov-id": "src\\components\\Trust.tsx:54:16",
                          "data-lov-name": "h3",
                          "data-component-path": "src\\components\\Trust.tsx",
                          "data-component-line": "54",
                          "data-component-file": "Trust.tsx",
                          "data-component-name": "h3",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-xl%20font-semibold%20text-foreground%20mb-2%22%7D",
                          className:
                            "text-xl font-semibold text-foreground mb-2",
                          children: a.title,
                        }),
                      ],
                    }),
                    t.jsx("p", {
                      "data-lov-id": "src\\components\\Trust.tsx:59:14",
                      "data-lov-name": "p",
                      "data-component-path": "src\\components\\Trust.tsx",
                      "data-component-line": "59",
                      "data-component-file": "Trust.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-muted-foreground%20leading-relaxed%22%7D",
                      className: "text-muted-foreground leading-relaxed",
                      children: a.description,
                    }),
                  ],
                },
                o,
              ),
            ),
          }),
        ],
      }),
    });
  },
  mt = () => {
    const { t: e } = c(),
      n = [
        {
          name: e("landing.pricing.plans.free.name"),
          price: "R$ 0",
          period: e("landing.pricing.plans.free.period"),
          description: e("landing.pricing.plans.free.desc"),
          features: Array.isArray(e("landing.pricing.plans.free.features"))
            ? e("landing.pricing.plans.free.features")
            : [],
          cta: e("landing.pricing.plans.free.cta"),
          highlighted: !1,
          href: "/app/novo-relatorio",
        },
        {
          name: e("landing.pricing.plans.pro.name"),
          price: "R$ 59",
          period: e("landing.pricing.plans.pro.period"),
          description: e("landing.pricing.plans.pro.desc"),
          features: Array.isArray(e("landing.pricing.plans.pro.features"))
            ? e("landing.pricing.plans.pro.features")
            : [],
          cta: e("landing.pricing.plans.pro.cta"),
          highlighted: !0,
          href: "/app/novo-relatorio",
        },
        {
          name: e("landing.pricing.plans.business.name"),
          price: "R$ 149",
          period: e("landing.pricing.plans.business.period"),
          description: e("landing.pricing.plans.business.desc"),
          features: Array.isArray(e("landing.pricing.plans.business.features"))
            ? e("landing.pricing.plans.business.features")
            : [],
          cta: e("landing.pricing.plans.business.cta"),
          highlighted: !1,
          href: "mailto:contato@superrelatorios.com.br?subject=Plano%20Business",
        },
      ];
    return t.jsx("section", {
      "data-lov-id": "src\\components\\Pricing.tsx:49:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\Pricing.tsx",
      "data-component-line": "49",
      "data-component-file": "Pricing.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-20%20bg-background%22%7D",
      id: "precos",
      className: "py-20 bg-background",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\Pricing.tsx:50:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\Pricing.tsx",
        "data-component-line": "50",
        "data-component-file": "Pricing.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\Pricing.tsx:51:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Pricing.tsx",
            "data-component-line": "51",
            "data-component-file": "Pricing.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              t.jsx("h2", {
                "data-lov-id": "src\\components\\Pricing.tsx:52:10",
                "data-lov-name": "h2",
                "data-component-path": "src\\components\\Pricing.tsx",
                "data-component-line": "52",
                "data-component-file": "Pricing.tsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-foreground%20mb-4%22%7D",
                className:
                  "text-3xl md:text-4xl font-bold text-foreground mb-4",
                children: e("landing.pricing.title"),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\Pricing.tsx:55:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\Pricing.tsx",
                "data-component-line": "55",
                "data-component-file": "Pricing.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-lg%20sm%3Atext-xl%20text-muted-foreground%20max-w-2xl%20mx-auto%22%7D",
                className:
                  "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto",
                children: e("landing.pricing.subtitle"),
              }),
            ],
          }),
          t.jsx("div", {
            "data-lov-id": "src\\components\\Pricing.tsx:60:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Pricing.tsx",
            "data-component-line": "60",
            "data-component-file": "Pricing.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20md%3Agrid-cols-3%20gap-6%20sm%3Agap-8%20max-w-5xl%20mx-auto%20items-start%22%7D",
            className:
              "grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start",
            children: n.map((a, o) =>
              t.jsxs(
                l,
                {
                  "data-lov-id": "src\\components\\Pricing.tsx:62:12",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\components\\Pricing.tsx",
                  "data-component-line": "62",
                  "data-component-file": "Pricing.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  className: `p-6 sm:p-8 border-2 transition-all duration-300 ${a.highlighted ? "border-accent bg-card shadow-xl relative" : "border-border bg-card hover:border-primary/20 hover:shadow-lg"}`,
                  children: [
                    a.highlighted &&
                      t.jsx("div", {
                        "data-lov-id": "src\\components\\Pricing.tsx:68:16",
                        "data-lov-name": "div",
                        "data-component-path": "src\\components\\Pricing.tsx",
                        "data-component-line": "68",
                        "data-component-file": "Pricing.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22absolute%20-top-3%20left-1%2F2%20-translate-x-1%2F2%20bg-accent%20text-accent-foreground%20text-xs%20font-semibold%20px-3%20py-1%20rounded-full%22%7D",
                        className:
                          "absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full",
                        children: e("landing.pricing.recommended"),
                      }),
                    t.jsxs("div", {
                      "data-lov-id": "src\\components\\Pricing.tsx:73:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\components\\Pricing.tsx",
                      "data-component-line": "73",
                      "data-component-file": "Pricing.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-center%20mb-8%22%7D",
                      className: "text-center mb-8",
                      children: [
                        t.jsx("div", {
                          "data-lov-id": "src\\components\\Pricing.tsx:74:16",
                          "data-lov-name": "div",
                          "data-component-path": "src\\components\\Pricing.tsx",
                          "data-component-line": "74",
                          "data-component-file": "Pricing.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22mb-2%22%7D",
                          className: "mb-2",
                          children: t.jsx("span", {
                            "data-lov-id": "src\\components\\Pricing.tsx:75:18",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\components\\Pricing.tsx",
                            "data-component-line": "75",
                            "data-component-file": "Pricing.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-sm%20text-primary%20font-semibold%22%7D",
                            className: "text-sm text-primary font-semibold",
                            children: a.description,
                          }),
                        }),
                        t.jsx("h3", {
                          "data-lov-id": "src\\components\\Pricing.tsx:77:16",
                          "data-lov-name": "h3",
                          "data-component-path": "src\\components\\Pricing.tsx",
                          "data-component-line": "77",
                          "data-component-file": "Pricing.tsx",
                          "data-component-name": "h3",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-2xl%20font-bold%20text-foreground%20mb-2%22%7D",
                          className: "text-2xl font-bold text-foreground mb-2",
                          children: a.name,
                        }),
                        t.jsxs("div", {
                          "data-lov-id": "src\\components\\Pricing.tsx:78:16",
                          "data-lov-name": "div",
                          "data-component-path": "src\\components\\Pricing.tsx",
                          "data-component-line": "78",
                          "data-component-file": "Pricing.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-baseline%20justify-center%22%7D",
                          className: "flex items-baseline justify-center",
                          children: [
                            t.jsx("span", {
                              "data-lov-id":
                                "src\\components\\Pricing.tsx:79:18",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\components\\Pricing.tsx",
                              "data-component-line": "79",
                              "data-component-file": "Pricing.tsx",
                              "data-component-name": "span",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-3xl%20sm%3Atext-4xl%20font-bold%20text-foreground%22%7D",
                              className:
                                "text-3xl sm:text-4xl font-bold text-foreground",
                              children: a.price,
                            }),
                            t.jsx("span", {
                              "data-lov-id":
                                "src\\components\\Pricing.tsx:80:18",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\components\\Pricing.tsx",
                              "data-component-line": "80",
                              "data-component-file": "Pricing.tsx",
                              "data-component-name": "span",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-muted-foreground%20ml-1%22%7D",
                              className: "text-muted-foreground ml-1",
                              children: a.period,
                            }),
                          ],
                        }),
                      ],
                    }),
                    t.jsx("ul", {
                      "data-lov-id": "src\\components\\Pricing.tsx:84:14",
                      "data-lov-name": "ul",
                      "data-component-path": "src\\components\\Pricing.tsx",
                      "data-component-line": "84",
                      "data-component-file": "Pricing.tsx",
                      "data-component-name": "ul",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-3%20sm%3Aspace-y-4%20mb-8%22%7D",
                      className: "space-y-3 sm:space-y-4 mb-8",
                      children:
                        Array.isArray(a.features) &&
                        a.features.map((p, r) =>
                          t.jsxs(
                            "li",
                            {
                              "data-lov-id":
                                "src\\components\\Pricing.tsx:86:18",
                              "data-lov-name": "li",
                              "data-component-path":
                                "src\\components\\Pricing.tsx",
                              "data-component-line": "86",
                              "data-component-file": "Pricing.tsx",
                              "data-component-name": "li",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                              className: "flex items-center gap-3",
                              children: [
                                t.jsx(B, {
                                  "data-lov-id":
                                    "src\\components\\Pricing.tsx:87:20",
                                  "data-lov-name": "Check",
                                  "data-component-path":
                                    "src\\components\\Pricing.tsx",
                                  "data-component-line": "87",
                                  "data-component-file": "Pricing.tsx",
                                  "data-component-name": "Check",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-5%20h-5%20text-accent%20flex-shrink-0%22%7D",
                                  className:
                                    "w-5 h-5 text-accent flex-shrink-0",
                                }),
                                t.jsx("span", {
                                  "data-lov-id":
                                    "src\\components\\Pricing.tsx:88:20",
                                  "data-lov-name": "span",
                                  "data-component-path":
                                    "src\\components\\Pricing.tsx",
                                  "data-component-line": "88",
                                  "data-component-file": "Pricing.tsx",
                                  "data-component-name": "span",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-foreground%20text-sm%20sm%3Atext-base%22%7D",
                                  className:
                                    "text-foreground text-sm sm:text-base",
                                  children: p,
                                }),
                              ],
                            },
                            r,
                          ),
                        ),
                    }),
                    t.jsx(s, {
                      "data-lov-id": "src\\components\\Pricing.tsx:93:14",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\components\\Pricing.tsx",
                      "data-component-line": "93",
                      "data-component-file": "Pricing.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-full%22%7D",
                      variant: a.highlighted ? "accent" : "outline",
                      className: "w-full",
                      size: "lg",
                      asChild: !0,
                      children: t.jsx(m, {
                        "data-lov-id": "src\\components\\Pricing.tsx:99:16",
                        "data-lov-name": "Link",
                        "data-component-path": "src\\components\\Pricing.tsx",
                        "data-component-line": "99",
                        "data-component-file": "Pricing.tsx",
                        "data-component-name": "Link",
                        "data-component-content": "%7B%7D",
                        to: a.href,
                        children: a.cta,
                      }),
                    }),
                  ],
                },
                o,
              ),
            ),
          }),
        ],
      }),
    });
  },
  dt = () => {
    const { t: e, i18n: n } = c();
    return t.jsxs("section", {
      "data-lov-id": "src\\components\\CTA.tsx:10:4",
      "data-lov-name": "section",
      "data-component-path": "src\\components\\CTA.tsx",
      "data-component-line": "10",
      "data-component-file": "CTA.tsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-20%20bg-primary%20relative%20overflow-hidden%22%7D",
      className: "py-20 bg-primary relative overflow-hidden",
      children: [
        t.jsx("div", {
          "data-lov-id": "src\\components\\CTA.tsx:12:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\CTA.tsx",
          "data-component-line": "12",
          "data-component-file": "CTA.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22absolute%20inset-0%20opacity-50%22%7D",
          className: "absolute inset-0 opacity-50",
          children: t.jsx("div", {
            "data-lov-id": "src\\components\\CTA.tsx:13:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\CTA.tsx",
            "data-component-line": "13",
            "data-component-file": "CTA.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22w-full%20h-full%20bg-white%2F5%22%7D",
            className: "w-full h-full bg-white/5",
          }),
        }),
        t.jsx("div", {
          "data-lov-id": "src\\components\\CTA.tsx:16:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\CTA.tsx",
          "data-component-line": "16",
          "data-component-file": "CTA.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22container%20mx-auto%20px-4%20text-center%20relative%20z-10%22%7D",
          className: "container mx-auto px-4 text-center relative z-10",
          children: t.jsxs("div", {
            "data-lov-id": "src\\components\\CTA.tsx:17:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\CTA.tsx",
            "data-component-line": "17",
            "data-component-file": "CTA.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22max-w-3xl%20mx-auto%22%7D",
            className: "max-w-3xl mx-auto",
            children: [
              t.jsx("h2", {
                "data-lov-id": "src\\components\\CTA.tsx:18:10",
                "data-lov-name": "h2",
                "data-component-path": "src\\components\\CTA.tsx",
                "data-component-line": "18",
                "data-component-file": "CTA.tsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22className%22%3A%22text-3xl%20md%3Atext-5xl%20font-bold%20text-white%20mb-6%22%7D",
                className: "text-3xl md:text-5xl font-bold text-white mb-6",
                children: e("landing.cta.title"),
              }),
              t.jsx("p", {
                "data-lov-id": "src\\components\\CTA.tsx:22:10",
                "data-lov-name": "p",
                "data-component-path": "src\\components\\CTA.tsx",
                "data-component-line": "22",
                "data-component-file": "CTA.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-xl%20text-white%2F90%20mb-8%20max-w-2xl%20mx-auto%22%7D",
                className: "text-xl text-white/90 mb-8 max-w-2xl mx-auto",
                children: e("landing.cta.subtitle", {
                  brand: t.jsx(x, {
                    "data-lov-id": "src\\components\\CTA.tsx:24:21",
                    "data-lov-name": "BrandName",
                    "data-component-path": "src\\components\\CTA.tsx",
                    "data-component-line": "24",
                    "data-component-file": "CTA.tsx",
                    "data-component-name": "BrandName",
                    "data-component-content": "%7B%7D",
                    variant: "default",
                  }),
                }),
              }),
              t.jsx(s, {
                "data-lov-id": "src\\components\\CTA.tsx:28:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\components\\CTA.tsx",
                "data-component-line": "28",
                "data-component-file": "CTA.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22text-lg%20px-12%20py-4%20mb-8%22%7D",
                variant: "accent",
                size: "lg",
                className: "text-lg px-12 py-4 mb-8",
                asChild: !0,
                children: t.jsx(m, {
                  "data-lov-id": "src\\components\\CTA.tsx:34:12",
                  "data-lov-name": "Link",
                  "data-component-path": "src\\components\\CTA.tsx",
                  "data-component-line": "34",
                  "data-component-file": "CTA.tsx",
                  "data-component-name": "Link",
                  "data-component-content": "%7B%7D",
                  to: `/${n.language}/app/reports/new`,
                  children: e("landing.cta.button"),
                }),
              }),
              t.jsxs("div", {
                "data-lov-id": "src\\components\\CTA.tsx:39:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\CTA.tsx",
                "data-component-line": "39",
                "data-component-file": "CTA.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-6%20justify-center%20items-center%20text-white%2F80%20text-sm%22%7D",
                className:
                  "flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 text-sm",
                children: [
                  t.jsxs("div", {
                    "data-lov-id": "src\\components\\CTA.tsx:40:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\CTA.tsx",
                    "data-component-line": "40",
                    "data-component-file": "CTA.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      t.jsx(i, {
                        "data-lov-id": "src\\components\\CTA.tsx:41:14",
                        "data-lov-name": "CheckCircle",
                        "data-component-path": "src\\components\\CTA.tsx",
                        "data-component-line": "41",
                        "data-component-file": "CTA.tsx",
                        "data-component-name": "CheckCircle",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20text-accent%22%7D",
                        className: "w-4 h-4 text-accent",
                      }),
                      t.jsx("span", {
                        "data-lov-id": "src\\components\\CTA.tsx:42:14",
                        "data-lov-name": "span",
                        "data-component-path": "src\\components\\CTA.tsx",
                        "data-component-line": "42",
                        "data-component-file": "CTA.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%7D",
                        children: e("landing.cta.features.no_card"),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    "data-lov-id": "src\\components\\CTA.tsx:45:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\CTA.tsx",
                    "data-component-line": "45",
                    "data-component-file": "CTA.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      t.jsx(i, {
                        "data-lov-id": "src\\components\\CTA.tsx:46:14",
                        "data-lov-name": "CheckCircle",
                        "data-component-path": "src\\components\\CTA.tsx",
                        "data-component-line": "46",
                        "data-component-file": "CTA.tsx",
                        "data-component-name": "CheckCircle",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20text-accent%22%7D",
                        className: "w-4 h-4 text-accent",
                      }),
                      t.jsx("span", {
                        "data-lov-id": "src\\components\\CTA.tsx:47:14",
                        "data-lov-name": "span",
                        "data-component-path": "src\\components\\CTA.tsx",
                        "data-component-line": "47",
                        "data-component-file": "CTA.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%7D",
                        children: e("landing.cta.features.cancel_anytime"),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    "data-lov-id": "src\\components\\CTA.tsx:50:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\CTA.tsx",
                    "data-component-line": "50",
                    "data-component-file": "CTA.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      t.jsx(i, {
                        "data-lov-id": "src\\components\\CTA.tsx:51:14",
                        "data-lov-name": "CheckCircle",
                        "data-component-path": "src\\components\\CTA.tsx",
                        "data-component-line": "51",
                        "data-component-file": "CTA.tsx",
                        "data-component-name": "CheckCircle",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20text-accent%22%7D",
                        className: "w-4 h-4 text-accent",
                      }),
                      t.jsx("span", {
                        "data-lov-id": "src\\components\\CTA.tsx:52:14",
                        "data-lov-name": "span",
                        "data-component-path": "src\\components\\CTA.tsx",
                        "data-component-line": "52",
                        "data-component-file": "CTA.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%7D",
                        children: e("landing.cta.features.fast_setup"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  pt = () => {
    const { t: e } = c(),
      n = new Date().getFullYear();
    return t.jsx("footer", {
      "data-lov-id": "src\\components\\Footer.tsx:11:4",
      "data-lov-name": "footer",
      "data-component-path": "src\\components\\Footer.tsx",
      "data-component-line": "11",
      "data-component-file": "Footer.tsx",
      "data-component-name": "footer",
      "data-component-content":
        "%7B%22className%22%3A%22bg-primary-dark%20text-white%20py-12%22%7D",
      className: "bg-primary-dark text-white py-12",
      children: t.jsxs("div", {
        "data-lov-id": "src\\components\\Footer.tsx:13:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\Footer.tsx",
        "data-component-line": "13",
        "data-component-file": "Footer.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\Footer.tsx:14:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Footer.tsx",
            "data-component-line": "14",
            "data-component-file": "Footer.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20md%3Agrid-cols-4%20gap-8%22%7D",
            className: "grid sm:grid-cols-2 md:grid-cols-4 gap-8",
            children: [
              t.jsxs("div", {
                "data-lov-id": "src\\components\\Footer.tsx:15:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\Footer.tsx",
                "data-component-line": "15",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22sm%3Acol-span-2%20md%3Acol-span-1%22%7D",
                className: "sm:col-span-2 md:col-span-1",
                children: [
                  t.jsxs("div", {
                    "data-lov-id": "src\\components\\Footer.tsx:16:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\Footer.tsx",
                    "data-component-line": "16",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-4%22%7D",
                    className: "flex items-center gap-2 mb-4",
                    children: [
                      t.jsx(A, {
                        "data-lov-id": "src\\components\\Footer.tsx:17:14",
                        "data-lov-name": "LogoIcon",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "17",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "LogoIcon",
                        "data-component-content": "%7B%7D",
                        size: "sm",
                      }),
                      t.jsx(x, {
                        "data-lov-id": "src\\components\\Footer.tsx:18:14",
                        "data-lov-name": "BrandName",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "18",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "BrandName",
                        "data-component-content": "%7B%7D",
                        variant: "on-dark",
                      }),
                    ],
                  }),
                  t.jsx("p", {
                    "data-lov-id": "src\\components\\Footer.tsx:20:12",
                    "data-lov-name": "p",
                    "data-component-path": "src\\components\\Footer.tsx",
                    "data-component-line": "20",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-sm%20text-white%2F70%20leading-relaxed%22%7D",
                    className: "text-sm text-white/70 leading-relaxed",
                    children: e("landing.footer.mission"),
                  }),
                ],
              }),
              t.jsxs("div", {
                "data-lov-id": "src\\components\\Footer.tsx:26:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\Footer.tsx",
                "data-component-line": "26",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  t.jsx("h4", {
                    "data-lov-id": "src\\components\\Footer.tsx:27:12",
                    "data-lov-name": "h4",
                    "data-component-path": "src\\components\\Footer.tsx",
                    "data-component-line": "27",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "h4",
                    "data-component-content":
                      "%7B%22className%22%3A%22font-semibold%20mb-4%22%7D",
                    className: "font-semibold mb-4",
                    children: e("landing.footer.sections.product.title"),
                  }),
                  t.jsxs("ul", {
                    "data-lov-id": "src\\components\\Footer.tsx:28:12",
                    "data-lov-name": "ul",
                    "data-component-path": "src\\components\\Footer.tsx",
                    "data-component-line": "28",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "ul",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-3%20text-sm%20text-white%2F70%22%7D",
                    className: "space-y-3 text-sm text-white/70",
                    children: [
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:29:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "29",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:29:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "29",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#recursos",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e(
                            "landing.footer.sections.product.features",
                          ),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:30:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "30",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:30:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "30",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#como-funciona",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e(
                            "landing.footer.sections.product.how_it_works",
                          ),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:31:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "31",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:31:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "31",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#precos",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e(
                            "landing.footer.sections.product.pricing",
                          ),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:32:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "32",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:32:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "32",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e(
                            "landing.footer.sections.product.integrations",
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                "data-lov-id": "src\\components\\Footer.tsx:37:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\Footer.tsx",
                "data-component-line": "37",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  t.jsx("h4", {
                    "data-lov-id": "src\\components\\Footer.tsx:38:12",
                    "data-lov-name": "h4",
                    "data-component-path": "src\\components\\Footer.tsx",
                    "data-component-line": "38",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "h4",
                    "data-component-content":
                      "%7B%22className%22%3A%22font-semibold%20mb-4%22%7D",
                    className: "font-semibold mb-4",
                    children: e("landing.footer.sections.support.title"),
                  }),
                  t.jsxs("ul", {
                    "data-lov-id": "src\\components\\Footer.tsx:39:12",
                    "data-lov-name": "ul",
                    "data-component-path": "src\\components\\Footer.tsx",
                    "data-component-line": "39",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "ul",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-3%20text-sm%20text-white%2F70%22%7D",
                    className: "space-y-3 text-sm text-white/70",
                    children: [
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:40:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "40",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:40:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "40",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e("landing.footer.sections.support.help"),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:41:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "41",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:41:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "41",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e("landing.footer.sections.support.docs"),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:42:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "42",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:42:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "42",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e("landing.footer.sections.support.status"),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:43:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "43",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:43:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "43",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e(
                            "landing.footer.sections.support.contact",
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                "data-lov-id": "src\\components\\Footer.tsx:48:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\Footer.tsx",
                "data-component-line": "48",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  t.jsx("h4", {
                    "data-lov-id": "src\\components\\Footer.tsx:49:12",
                    "data-lov-name": "h4",
                    "data-component-path": "src\\components\\Footer.tsx",
                    "data-component-line": "49",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "h4",
                    "data-component-content":
                      "%7B%22className%22%3A%22font-semibold%20mb-4%22%7D",
                    className: "font-semibold mb-4",
                    children: e("landing.footer.sections.legal.title"),
                  }),
                  t.jsxs("ul", {
                    "data-lov-id": "src\\components\\Footer.tsx:50:12",
                    "data-lov-name": "ul",
                    "data-component-path": "src\\components\\Footer.tsx",
                    "data-component-line": "50",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "ul",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-3%20text-sm%20text-white%2F70%22%7D",
                    className: "space-y-3 text-sm text-white/70",
                    children: [
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:51:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "51",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:51:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "51",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e("landing.footer.sections.legal.privacy"),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:52:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "52",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:52:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "52",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e("landing.footer.sections.legal.terms"),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:53:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "53",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:53:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "53",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e("landing.footer.sections.legal.security"),
                        }),
                      }),
                      t.jsx("li", {
                        "data-lov-id": "src\\components\\Footer.tsx:54:14",
                        "data-lov-name": "li",
                        "data-component-path": "src\\components\\Footer.tsx",
                        "data-component-line": "54",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: t.jsx("a", {
                          "data-lov-id": "src\\components\\Footer.tsx:54:18",
                          "data-lov-name": "a",
                          "data-component-path": "src\\components\\Footer.tsx",
                          "data-component-line": "54",
                          "data-component-file": "Footer.tsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22className%22%3A%22hover%3Atext-white%20transition-colors%20py-1%20inline-block%22%7D",
                          href: "#",
                          className:
                            "hover:text-white transition-colors py-1 inline-block",
                          children: e("landing.footer.sections.legal.cookies"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t.jsx("div", {
            "data-lov-id": "src\\components\\Footer.tsx:60:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\Footer.tsx",
            "data-component-line": "60",
            "data-component-file": "Footer.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22border-t%20border-white%2F20%20mt-8%20pt-8%20text-center%20text-sm%20text-white%2F70%22%7D",
            className:
              "border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70",
            children: e("landing.footer.copyright", {
              year: n,
              brand: t.jsx(x, {
                "data-lov-id": "src\\components\\Footer.tsx:61:69",
                "data-lov-name": "BrandName",
                "data-component-path": "src\\components\\Footer.tsx",
                "data-component-line": "61",
                "data-component-file": "Footer.tsx",
                "data-component-name": "BrandName",
                "data-component-content": "%7B%7D",
                variant: "on-dark",
              }),
            }),
          }),
        ],
      }),
    });
  },
  lt = ({ title: e, description: n, canonicalUrl: a }) => {
    const { t: o } = c(),
      p = o("brand.super") + o("brand.reports"),
      r = `${p} - Relatórios Inteligentes em 3 Cliques`,
      h =
        "Transforme dados em relatórios inteligentes em apenas 3 cliques. Plataforma brasileira para PMEs, profissionais liberais e gestores.",
      v = e ? `${e} | ${p}` : r,
      d = n || h;
    return t.jsxs(b, {
      "data-lov-id": "src\\components\\SEO.tsx:22:4",
      "data-lov-name": "Helmet",
      "data-component-path": "src\\components\\SEO.tsx",
      "data-component-line": "22",
      "data-component-file": "SEO.tsx",
      "data-component-name": "Helmet",
      "data-component-content": "%7B%7D",
      children: [
        t.jsx("title", {
          "data-lov-id": "src\\components\\SEO.tsx:23:6",
          "data-lov-name": "title",
          "data-component-path": "src\\components\\SEO.tsx",
          "data-component-line": "23",
          "data-component-file": "SEO.tsx",
          "data-component-name": "title",
          "data-component-content": "%7B%7D",
          children: v,
        }),
        t.jsx("meta", {
          "data-lov-id": "src\\components\\SEO.tsx:24:6",
          "data-lov-name": "meta",
          "data-component-path": "src\\components\\SEO.tsx",
          "data-component-line": "24",
          "data-component-file": "SEO.tsx",
          "data-component-name": "meta",
          "data-component-content": "%7B%7D",
          name: "description",
          content: d,
        }),
        t.jsx("meta", {
          "data-lov-id": "src\\components\\SEO.tsx:27:6",
          "data-lov-name": "meta",
          "data-component-path": "src\\components\\SEO.tsx",
          "data-component-line": "27",
          "data-component-file": "SEO.tsx",
          "data-component-name": "meta",
          "data-component-content": "%7B%7D",
          property: "og:type",
          content: "website",
        }),
        t.jsx("meta", {
          "data-lov-id": "src\\components\\SEO.tsx:28:6",
          "data-lov-name": "meta",
          "data-component-path": "src\\components\\SEO.tsx",
          "data-component-line": "28",
          "data-component-file": "SEO.tsx",
          "data-component-name": "meta",
          "data-component-content": "%7B%7D",
          property: "og:title",
          content: v,
        }),
        t.jsx("meta", {
          "data-lov-id": "src\\components\\SEO.tsx:29:6",
          "data-lov-name": "meta",
          "data-component-path": "src\\components\\SEO.tsx",
          "data-component-line": "29",
          "data-component-file": "SEO.tsx",
          "data-component-name": "meta",
          "data-component-content": "%7B%7D",
          property: "og:description",
          content: d,
        }),
        t.jsx("meta", {
          "data-lov-id": "src\\components\\SEO.tsx:32:6",
          "data-lov-name": "meta",
          "data-component-path": "src\\components\\SEO.tsx",
          "data-component-line": "32",
          "data-component-file": "SEO.tsx",
          "data-component-name": "meta",
          "data-component-content": "%7B%7D",
          name: "twitter:card",
          content: "summary_large_image",
        }),
        t.jsx("meta", {
          "data-lov-id": "src\\components\\SEO.tsx:33:6",
          "data-lov-name": "meta",
          "data-component-path": "src\\components\\SEO.tsx",
          "data-component-line": "33",
          "data-component-file": "SEO.tsx",
          "data-component-name": "meta",
          "data-component-content": "%7B%7D",
          name: "twitter:title",
          content: v,
        }),
        t.jsx("meta", {
          "data-lov-id": "src\\components\\SEO.tsx:34:6",
          "data-lov-name": "meta",
          "data-component-path": "src\\components\\SEO.tsx",
          "data-component-line": "34",
          "data-component-file": "SEO.tsx",
          "data-component-name": "meta",
          "data-component-content": "%7B%7D",
          name: "twitter:description",
          content: d,
        }),
        a &&
          t.jsx("link", {
            "data-lov-id": "src\\components\\SEO.tsx:37:23",
            "data-lov-name": "link",
            "data-component-path": "src\\components\\SEO.tsx",
            "data-component-line": "37",
            "data-component-file": "SEO.tsx",
            "data-component-name": "link",
            "data-component-content": "%7B%7D",
            rel: "canonical",
            href: a,
          }),
      ],
    });
  },
  rt = () => {
    const { t: e } = c(),
      n = e("brand.super") + e("brand.reports"),
      a = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: n,
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
        description:
          "Gere relatórios profissionais com análises de consultor em minutos. Pare de perder tempo com planilhas e relatórios manuais.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1250",
        },
      },
      o = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: n,
        url: "https://www.superrelatorios.com.br",
        logo: "https://www.superrelatorios.com.br/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/superrelatorios",
          "https://twitter.com/superrelatorios",
        ],
      };
    return t.jsxs(b, {
      "data-lov-id": "src\\components\\StructuredData.tsx:41:4",
      "data-lov-name": "Helmet",
      "data-component-path": "src\\components\\StructuredData.tsx",
      "data-component-line": "41",
      "data-component-file": "StructuredData.tsx",
      "data-component-name": "Helmet",
      "data-component-content": "%7B%7D",
      children: [
        t.jsx("script", {
          "data-lov-id": "src\\components\\StructuredData.tsx:42:6",
          "data-lov-name": "script",
          "data-component-path": "src\\components\\StructuredData.tsx",
          "data-component-line": "42",
          "data-component-file": "StructuredData.tsx",
          "data-component-name": "script",
          "data-component-content": "%7B%7D",
          type: "application/ld+json",
          children: JSON.stringify(a),
        }),
        t.jsx("script", {
          "data-lov-id": "src\\components\\StructuredData.tsx:45:6",
          "data-lov-name": "script",
          "data-component-path": "src\\components\\StructuredData.tsx",
          "data-component-line": "45",
          "data-component-file": "StructuredData.tsx",
          "data-component-name": "script",
          "data-component-content": "%7B%7D",
          type: "application/ld+json",
          children: JSON.stringify(o),
        }),
      ],
    });
  },
  Rt = () => {
    const { t: e } = c();
    return t.jsxs("div", {
      "data-lov-id": "src\\pages\\Index.tsx:21:4",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\Index.tsx",
      "data-component-line": "21",
      "data-component-file": "Index.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%22className%22%3A%22min-h-screen%22%7D",
      className: "min-h-screen",
      children: [
        t.jsx(lt, {
          "data-lov-id": "src\\pages\\Index.tsx:22:6",
          "data-lov-name": "SEO",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "22",
          "data-component-file": "Index.tsx",
          "data-component-name": "SEO",
          "data-component-content": "%7B%7D",
          title: e("seo.index_title"),
          description: e("seo.index_desc"),
        }),
        t.jsx(rt, {
          "data-lov-id": "src\\pages\\Index.tsx:27:6",
          "data-lov-name": "StructuredData",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "27",
          "data-component-file": "Index.tsx",
          "data-component-name": "StructuredData",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(X, {
          "data-lov-id": "src\\pages\\Index.tsx:28:6",
          "data-lov-name": "Header",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "28",
          "data-component-file": "Index.tsx",
          "data-component-name": "Header",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(tt, {
          "data-lov-id": "src\\pages\\Index.tsx:29:6",
          "data-lov-name": "Hero",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "29",
          "data-component-file": "Index.tsx",
          "data-component-name": "Hero",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(et, {
          "data-lov-id": "src\\pages\\Index.tsx:30:6",
          "data-lov-name": "Features",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "30",
          "data-component-file": "Index.tsx",
          "data-component-name": "Features",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(at, {
          "data-lov-id": "src\\pages\\Index.tsx:31:6",
          "data-lov-name": "HowItWorks",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "31",
          "data-component-file": "Index.tsx",
          "data-component-name": "HowItWorks",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(ot, {
          "data-lov-id": "src\\pages\\Index.tsx:32:6",
          "data-lov-name": "ReportShowcase",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "32",
          "data-component-file": "Index.tsx",
          "data-component-name": "ReportShowcase",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(nt, {
          "data-lov-id": "src\\pages\\Index.tsx:33:6",
          "data-lov-name": "ReportExamples",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "33",
          "data-component-file": "Index.tsx",
          "data-component-name": "ReportExamples",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(st, {
          "data-lov-id": "src\\pages\\Index.tsx:34:6",
          "data-lov-name": "Benefits",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "34",
          "data-component-file": "Index.tsx",
          "data-component-name": "Benefits",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(ct, {
          "data-lov-id": "src\\pages\\Index.tsx:35:6",
          "data-lov-name": "Trust",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "35",
          "data-component-file": "Index.tsx",
          "data-component-name": "Trust",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(mt, {
          "data-lov-id": "src\\pages\\Index.tsx:36:6",
          "data-lov-name": "Pricing",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "36",
          "data-component-file": "Index.tsx",
          "data-component-name": "Pricing",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(dt, {
          "data-lov-id": "src\\pages\\Index.tsx:37:6",
          "data-lov-name": "CTA",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "37",
          "data-component-file": "Index.tsx",
          "data-component-name": "CTA",
          "data-component-content": "%7B%7D",
        }),
        t.jsx(pt, {
          "data-lov-id": "src\\pages\\Index.tsx:38:6",
          "data-lov-name": "Footer",
          "data-component-path": "src\\pages\\Index.tsx",
          "data-component-line": "38",
          "data-component-file": "Index.tsx",
          "data-component-name": "Footer",
          "data-component-content": "%7B%7D",
        }),
      ],
    });
  };
export { Rt as default };
