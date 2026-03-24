import { j as n, P as i, d, y as m } from "./index-BZzvAVnT.js";
import { r as l } from "./vendor-BgR6OOld.js";
var c = "Label",
  r = l.forwardRef((e, t) =>
    n.jsx(i.label, {
      ...e,
      ref: t,
      onMouseDown: (a) => {
        var o;
        a.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, a),
          !a.defaultPrevented && a.detail > 1 && a.preventDefault());
      },
    }),
  );
r.displayName = c;
var s = r;
const b = m(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  f = l.forwardRef(({ className: e, ...t }, a) =>
    n.jsx(s, {
      "data-lov-id": "src\\components\\ui\\label.tsx:16:2",
      "data-lov-name": "LabelPrimitive.Root",
      "data-component-path": "src\\components\\ui\\label.tsx",
      "data-component-line": "16",
      "data-component-file": "label.tsx",
      "data-component-name": "LabelPrimitive.Root",
      "data-component-content": "%7B%7D",
      ref: a,
      className: d(b(), e),
      ...t,
    }),
  );
f.displayName = s.displayName;
export { f as L };
