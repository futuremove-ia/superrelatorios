import { j as s } from "./vendor-radix-C8JHQxE0.js";
import { u as d, c as a } from "./index-DF8MdIXV.js";
const x = ({ variant: t = "default", className: r }) => {
  const { t: e } = d(),
    n = "font-brand font-bold tracking-tight";
  return t === "on-blue"
    ? s.jsxs("span", {
        className: a(n, r),
        children: [
          s.jsx("span", {
            className: "text-[#1E40AF]",
            children: e("brand.super"),
          }),
          s.jsx("span", {
            className: "text-white",
            children: e("brand.reports"),
          }),
        ],
      })
    : t === "on-dark"
      ? s.jsxs("span", {
          className: a(n, r),
          children: [
            s.jsx("span", {
              className: "text-white",
              children: e("brand.super"),
            }),
            s.jsx("span", {
              className: "text-[#60A5FA]",
              children: e("brand.reports"),
            }),
          ],
        })
      : t === "header"
        ? s.jsxs("span", {
            className: a(n, "text-xl", r),
            children: [
              s.jsx("span", {
                className: "text-foreground",
                children: e("brand.super"),
              }),
              s.jsx("span", {
                className: "text-[#2563EB]",
                children: e("brand.reports"),
              }),
            ],
          })
        : s.jsxs("span", {
            className: a(n, r),
            children: [
              s.jsx("span", {
                className: "text-foreground",
                children: e("brand.super"),
              }),
              s.jsx("span", {
                className: "text-[#2563EB]",
                children: e("brand.reports"),
              }),
            ],
          });
};
export { x as B };
