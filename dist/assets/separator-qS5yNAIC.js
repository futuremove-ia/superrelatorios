import { j as s, P as l, d as v } from "./index-BZzvAVnT.js";
import { r as p } from "./vendor-BgR6OOld.js";
var f = "Separator",
  i = "horizontal",
  x = ["horizontal", "vertical"],
  c = p.forwardRef((a, o) => {
    const { decorative: r, orientation: t = i, ...e } = a,
      n = u(t) ? t : i,
      d = r
        ? { role: "none" }
        : {
            "aria-orientation": n === "vertical" ? n : void 0,
            role: "separator",
          };
    return s.jsx(l.div, { "data-orientation": n, ...d, ...e, ref: o });
  });
c.displayName = f;
function u(a) {
  return x.includes(a);
}
var m = c;
const N = p.forwardRef(
  (
    { className: a, orientation: o = "horizontal", decorative: r = !0, ...t },
    e,
  ) =>
    s.jsx(m, {
      "data-lov-id": "src\\components\\ui\\separator.tsx:14:4",
      "data-lov-name": "SeparatorPrimitive.Root",
      "data-component-path": "src\\components\\ui\\separator.tsx",
      "data-component-line": "14",
      "data-component-file": "separator.tsx",
      "data-component-name": "SeparatorPrimitive.Root",
      "data-component-content": "%7B%7D",
      ref: e,
      decorative: r,
      orientation: o,
      className: v(
        "shrink-0 bg-border",
        o === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        a,
      ),
      ...t,
    }),
);
N.displayName = m.displayName;
export { N as S };
