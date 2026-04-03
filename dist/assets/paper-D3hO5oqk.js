import { j as s, c as d } from "./index-DJVek99o.js";
import { r as c } from "./vendor-Bp-AcFIh.js";
const i = c.forwardRef(
  (
    {
      orientation: a = "portrait",
      size: e = "a4",
      children: p,
      className: r,
      padding: t = "md",
    },
    l,
  ) => {
    const o = {
        a4: { portrait: "aspect-[3/4.24]", landscape: "aspect-[4.24/3]" },
        letter: { portrait: "aspect-[3/3.9]", landscape: "aspect-[3.9/3]" },
      },
      m = {
        none: "",
        sm: "p-2 sm:p-3",
        md: "p-3 sm:p-4 lg:p-6",
        lg: "p-4 sm:p-6 lg:p-8",
      };
    return s.jsx("div", {
      ref: l,
      className: d(
        "bg-white border-2 shadow-lg rounded-lg overflow-hidden",
        "w-full max-w-full",
        "md:" + o[e][a],
        "min-h-[400px] sm:min-h-[500px]",
        m[t],
        r,
      ),
      children: s.jsx("div", {
        className: "h-full w-full flex flex-col min-h-0",
        children: p,
      }),
    });
  },
);
i.displayName = "Paper";
export { i as P };
