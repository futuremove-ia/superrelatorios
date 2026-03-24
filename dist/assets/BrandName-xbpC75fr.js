import { u as d, j as s, d as n } from "./index-CZZTgEon.js";
const o = ({ variant: t = "default", className: e }) => {
  const { t: r } = d(),
    a = "font-heading";
  return t === "on-blue"
    ? s.jsxs("span", {
        className: n(a, e),
        children: [
          s.jsx("span", {
            className: "text-primary-dark",
            children: r("brand.super"),
          }),
          s.jsx("span", {
            className: "font-bold text-white",
            children: r("brand.reports"),
          }),
        ],
      })
    : t === "on-dark"
      ? s.jsxs("span", {
          className: n(a, e),
          children: [
            s.jsx("span", {
              className: "text-white",
              children: r("brand.super"),
            }),
            s.jsx("span", {
              className: "font-bold text-primary",
              children: r("brand.reports"),
            }),
          ],
        })
      : t === "header"
        ? s.jsxs("span", {
            className: n(a, "text-xl", e),
            children: [
              s.jsx("span", {
                className: "text-foreground",
                children: r("brand.super"),
              }),
              s.jsx("span", {
                className: "font-bold text-primary",
                children: r("brand.reports"),
              }),
            ],
          })
        : s.jsxs("span", {
            className: n(a, e),
            children: [
              s.jsx("span", {
                className: "text-foreground",
                children: r("brand.super"),
              }),
              s.jsx("span", {
                className: "font-bold text-primary",
                children: r("brand.reports"),
              }),
            ],
          });
};
export { o as B };
