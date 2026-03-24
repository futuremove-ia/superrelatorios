import { j as t, d as n, y as h } from "./index-BZzvAVnT.js";
import {
  O as i,
  C as d,
  a as f,
  T as c,
  D as m,
  R as u,
  P as x,
  b as v,
} from "./index-lGW99eWD.js";
import { r as s } from "./vendor-BgR6OOld.js";
import { X as g } from "./utils-C25gojUd.js";
const C = u,
  B = v,
  y = x,
  r = s.forwardRef(({ className: e, ...a }, o) =>
    t.jsx(i, {
      "data-lov-id": "src\\components\\ui\\sheet.tsx:20:2",
      "data-lov-name": "SheetPrimitive.Overlay",
      "data-component-path": "src\\components\\ui\\sheet.tsx",
      "data-component-line": "20",
      "data-component-file": "sheet.tsx",
      "data-component-name": "SheetPrimitive.Overlay",
      "data-component-content": "%7B%7D",
      className: n(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...a,
      ref: o,
    }),
  );
r.displayName = i.displayName;
const b = h(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    },
  ),
  S = s.forwardRef(
    ({ side: e = "right", className: a, children: o, ...p }, l) =>
      t.jsxs(y, {
        "data-lov-id": "src\\components\\ui\\sheet.tsx:58:2",
        "data-lov-name": "SheetPortal",
        "data-component-path": "src\\components\\ui\\sheet.tsx",
        "data-component-line": "58",
        "data-component-file": "sheet.tsx",
        "data-component-name": "SheetPortal",
        "data-component-content": "%7B%7D",
        children: [
          t.jsx(r, {
            "data-lov-id": "src\\components\\ui\\sheet.tsx:59:4",
            "data-lov-name": "SheetOverlay",
            "data-component-path": "src\\components\\ui\\sheet.tsx",
            "data-component-line": "59",
            "data-component-file": "sheet.tsx",
            "data-component-name": "SheetOverlay",
            "data-component-content": "%7B%7D",
          }),
          t.jsxs(d, {
            "data-lov-id": "src\\components\\ui\\sheet.tsx:60:4",
            "data-lov-name": "SheetPrimitive.Content",
            "data-component-path": "src\\components\\ui\\sheet.tsx",
            "data-component-line": "60",
            "data-component-file": "sheet.tsx",
            "data-component-name": "SheetPrimitive.Content",
            "data-component-content": "%7B%7D",
            ref: l,
            className: n(b({ side: e }), a),
            ...p,
            children: [
              o,
              t.jsxs(f, {
                "data-lov-id": "src\\components\\ui\\sheet.tsx:66:6",
                "data-lov-name": "SheetPrimitive.Close",
                "data-component-path": "src\\components\\ui\\sheet.tsx",
                "data-component-line": "66",
                "data-component-file": "sheet.tsx",
                "data-component-name": "SheetPrimitive.Close",
                "data-component-content":
                  "%7B%22className%22%3A%22absolute%20right-4%20top-4%20rounded-sm%20opacity-70%20ring-offset-background%20transition-opacity%20hover%3Aopacity-100%20focus%3Aoutline-none%20focus%3Aring-2%20focus%3Aring-ring%20focus%3Aring-offset-2%20disabled%3Apointer-events-none%20data-%5Bstate%3Dopen%5D%3Abg-secondary%22%7D",
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  t.jsx(g, {
                    "data-lov-id": "src\\components\\ui\\sheet.tsx:67:8",
                    "data-lov-name": "X",
                    "data-component-path": "src\\components\\ui\\sheet.tsx",
                    "data-component-line": "67",
                    "data-component-file": "sheet.tsx",
                    "data-component-name": "X",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                    className: "h-4 w-4",
                  }),
                  t.jsx("span", {
                    "data-lov-id": "src\\components\\ui\\sheet.tsx:68:8",
                    "data-lov-name": "span",
                    "data-component-path": "src\\components\\ui\\sheet.tsx",
                    "data-component-line": "68",
                    "data-component-file": "sheet.tsx",
                    "data-component-name": "span",
                    "data-component-content":
                      "%7B%22text%22%3A%22Close%22%2C%22className%22%3A%22sr-only%22%7D",
                    className: "sr-only",
                    children: "Close",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
  );
S.displayName = d.displayName;
const N = s.forwardRef(({ className: e, ...a }, o) =>
  t.jsx(c, {
    "data-lov-id": "src\\components\\ui\\sheet.tsx:107:2",
    "data-lov-name": "SheetPrimitive.Title",
    "data-component-path": "src\\components\\ui\\sheet.tsx",
    "data-component-line": "107",
    "data-component-file": "sheet.tsx",
    "data-component-name": "SheetPrimitive.Title",
    "data-component-content": "%7B%7D",
    ref: o,
    className: n("text-lg font-semibold text-foreground", e),
    ...a,
  }),
);
N.displayName = c.displayName;
const D = s.forwardRef(({ className: e, ...a }, o) =>
  t.jsx(m, {
    "data-lov-id": "src\\components\\ui\\sheet.tsx:119:2",
    "data-lov-name": "SheetPrimitive.Description",
    "data-component-path": "src\\components\\ui\\sheet.tsx",
    "data-component-line": "119",
    "data-component-file": "sheet.tsx",
    "data-component-name": "SheetPrimitive.Description",
    "data-component-content": "%7B%7D",
    ref: o,
    className: n("text-sm text-muted-foreground", e),
    ...a,
  }),
);
D.displayName = m.displayName;
export { C as S, B as a, S as b };
