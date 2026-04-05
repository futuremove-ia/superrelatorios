import { j as e } from "./vendor-data-DuuuwLk5.js";
import { r as i } from "./vendor-react-DfYPWlel.js";
import { a6 as s, a7 as n } from "./vendor-radix-CfL9Rjb9.js";
import { c as r } from "./index-CaCe4Bjh.js";
const c = i.forwardRef(({ className: a, ...t }, o) =>
  e.jsx(s, {
    className: r(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      a,
    ),
    ...t,
    ref: o,
    children: e.jsx(n, {
      className: r(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
c.displayName = s.displayName;
export { c as S };
