import { j as e } from "./vendor-data-DuuuwLk5.js";
import { c as h } from "./index-CaCe4Bjh.js";
const x = ({ size: s = "md", className: r, variant: i = "default" }) => {
  const l = { sm: "w-6 h-6", md: "w-10 h-10", lg: "w-12 h-12" },
    t =
      i === "white"
        ? { blue1: "#60A5FA", blue2: "#DBEAFE", green: "#6EE7B7" }
        : { blue1: "#2563EB", blue2: "#1E40AF", green: "#059669" };
  return e.jsxs("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: h(l[s], r),
    "aria-hidden": "true",
    children: [
      e.jsx("rect", {
        x: "4",
        y: "12",
        width: "4",
        height: "8",
        fill: t.blue1,
        rx: "1",
      }),
      e.jsx("rect", {
        x: "10",
        y: "16",
        width: "4",
        height: "4",
        fill: t.blue2,
        rx: "1",
      }),
      e.jsx("rect", {
        x: "16",
        y: "8",
        width: "4",
        height: "12",
        fill: t.green,
        rx: "1",
      }),
    ],
  });
};
export { x as L };
