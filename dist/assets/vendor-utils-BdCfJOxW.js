import { r as we } from "./vendor-react-Ju9LKgAZ.js";
function qt(n) {
  var e,
    t,
    a = "";
  if (typeof n == "string" || typeof n == "number") a += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var r = n.length;
      for (e = 0; e < r; e++)
        n[e] && (t = qt(n[e])) && (a && (a += " "), (a += t));
    } else for (t in n) n[t] && (a && (a += " "), (a += t));
  return a;
}
function ra() {
  for (var n, e, t = 0, a = "", r = arguments.length; t < r; t++)
    (n = arguments[t]) && (e = qt(n)) && (a && (a += " "), (a += e));
  return a;
}
const dt = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  lt = ra,
  gr = (n, e) => (t) => {
    var a;
    if ((e == null ? void 0 : e.variants) == null)
      return lt(
        n,
        t == null ? void 0 : t.class,
        t == null ? void 0 : t.className,
      );
    const { variants: r, defaultVariants: s } = e,
      i = Object.keys(r).map((c) => {
        const l = t == null ? void 0 : t[c],
          h = s == null ? void 0 : s[c];
        if (l === null) return null;
        const k = dt(l) || dt(h);
        return r[c][k];
      }),
      o =
        t &&
        Object.entries(t).reduce((c, l) => {
          let [h, k] = l;
          return (k === void 0 || (c[h] = k), c);
        }, {}),
      d =
        e == null || (a = e.compoundVariants) === null || a === void 0
          ? void 0
          : a.reduce((c, l) => {
              let { class: h, className: k, ...y } = l;
              return Object.entries(y).every((p) => {
                let [M, T] = p;
                return Array.isArray(T)
                  ? T.includes({ ...s, ...o }[M])
                  : { ...s, ...o }[M] === T;
              })
                ? [...c, h, k]
                : c;
            }, []);
    return lt(
      n,
      i,
      d,
      t == null ? void 0 : t.class,
      t == null ? void 0 : t.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sa = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ht = (...n) =>
    n
      .filter((e, t, a) => !!e && e.trim() !== "" && a.indexOf(e) === t)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ia = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oa = we.forwardRef(
  (
    {
      color: n = "currentColor",
      size: e = 24,
      strokeWidth: t = 2,
      absoluteStrokeWidth: a,
      className: r = "",
      children: s,
      iconNode: i,
      ...o
    },
    d,
  ) =>
    we.createElement(
      "svg",
      {
        ref: d,
        ...ia,
        width: e,
        height: e,
        stroke: n,
        strokeWidth: a ? (Number(t) * 24) / Number(e) : t,
        className: Ht("lucide", r),
        ...o,
      },
      [
        ...i.map(([c, l]) => we.createElement(c, l)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u = (n, e) => {
  const t = we.forwardRef(({ className: a, ...r }, s) =>
    we.createElement(oa, {
      ref: s,
      iconNode: e,
      className: Ht(`lucide-${sa(n)}`, a),
      ...r,
    }),
  );
  return ((t.displayName = `${n}`), t);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yr = u("Accessibility", [
  ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
  ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mr = u("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kr = u("Archive", [
  [
    "rect",
    { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" },
  ],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vr = u("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xr = u("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const br = u("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wr = u("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _r = u("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mr = u("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Or = u("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sr = u("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cr = u("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lr = u("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tr = u("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nr = u("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pr = u("ChartLine", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = u("ChartNoAxesColumnIncreasing", [
  ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ar = u("ChartPie", [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu",
    },
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jr = u("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Er = u("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dr = u("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $r = u("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ir = u("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fr = u("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vr = u("CircleArrowDown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zr = u("CircleArrowUp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zr = u("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qr = u("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hr = u("CircleDollarSign", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wr = u("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yr = u("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ur = u("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Br = u("ClipboardCheck", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kr = u("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jr = u("Cloud", [
  [
    "path",
    { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gr = u("Component", [
  [
    "path",
    {
      d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
      key: "1uwlt4",
    },
  ],
  [
    "path",
    {
      d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",
      key: "10291m",
    },
  ],
  [
    "path",
    {
      d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",
      key: "1tqoq1",
    },
  ],
  [
    "path",
    {
      d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
      key: "1x6lto",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qr = u("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xr = u("Cpu", [
  [
    "rect",
    { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" },
  ],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const es = u("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ts = u("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const as = u("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ns = u("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rs = u("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ss = u("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const is = u("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const os = u("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cs = u("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ds = u("FileJson", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    {
      d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
      key: "1oajmo",
    },
  ],
  [
    "path",
    {
      d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
      key: "mpwhp6",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ls = u("FileSpreadsheet", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const us = u("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hs = u("Filter", [
  [
    "polygon",
    { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fs = u("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ps = u("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gs = u("Gauge", [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ys = u("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ms = u("Grid3x3", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ks = u("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vs = u("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xs = u("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bs = u("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ws = u("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _s = u("Key", [
  [
    "path",
    {
      d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
      key: "g0fldk",
    },
  ],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ms = u("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw",
    },
  ],
  [
    "path",
    { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
  ],
  [
    "path",
    { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Os = u("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  [
    "rect",
    { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
  ],
  [
    "rect",
    { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
  ],
  [
    "rect",
    { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ss = u("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cs = u("LayoutTemplate", [
  [
    "rect",
    { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" },
  ],
  [
    "rect",
    { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" },
  ],
  [
    "rect",
    { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ls = u("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ts = u("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ns = u("Link", [
  [
    "path",
    {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo",
    },
  ],
  [
    "path",
    {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ps = u("ListChecks", [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rs = u("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const As = u("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const js = u("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Es = u("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ds = u("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $s = u("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Is = u("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fs = u("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vs = u("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zs = u("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zs = u("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw",
    },
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qs = u("Palette", [
  [
    "circle",
    { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
  ],
  [
    "circle",
    { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
  ],
  [
    "circle",
    { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
  ],
  [
    "circle",
    { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
  ],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hs = u("PanelsTopLeft", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ws = u("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ys = u("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Us = u("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bs = u("Radar", [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ks = u("RefreshCcw", [
  [
    "path",
    { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  [
    "path",
    { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" },
  ],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Js = u("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gs = u("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qs = u("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476",
    },
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xs = u("Scale", [
  [
    "path",
    { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" },
  ],
  [
    "path",
    { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" },
  ],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ei = u("SearchCode", [
  ["path", { d: "m13 13.5 2-2.5-2-2.5", key: "1rvxrh" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ["path", { d: "M9 8.5 7 11l2 2.5", key: "6ffwbx" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ti = u("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ai = u("Settings2", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ni = u("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ri = u("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const si = u("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ii = u("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oi = u("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ci = u("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const di = u("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const li = u("Table", [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ui = u("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  [
    "circle",
    { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hi = u("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fi = u("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pi = u("ToggleLeft", [
  [
    "rect",
    {
      width: "20",
      height: "12",
      x: "2",
      y: "6",
      rx: "6",
      ry: "6",
      key: "f2vt7d",
    },
  ],
  ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gi = u("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yi = u("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mi = u("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ki = u("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vi = u("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xi = u("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bi = u("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wi = u("UserMinus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _i = u("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mi = u("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oi = u("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Si = u("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  x = (n) => typeof n == "string",
  ke = () => {
    let n, e;
    const t = new Promise((a, r) => {
      ((n = a), (e = r));
    });
    return ((t.resolve = n), (t.reject = e), t);
  },
  ut = (n) => (n == null ? "" : "" + n),
  ca = (n, e, t) => {
    n.forEach((a) => {
      e[a] && (t[a] = e[a]);
    });
  },
  da = /###/g,
  ht = (n) => (n && n.indexOf("###") > -1 ? n.replace(da, ".") : n),
  ft = (n) => !n || x(n),
  _e = (n, e, t) => {
    const a = x(e) ? e.split(".") : e;
    let r = 0;
    for (; r < a.length - 1; ) {
      if (ft(n)) return {};
      const s = ht(a[r]);
      (!n[s] && t && (n[s] = new t()),
        Object.prototype.hasOwnProperty.call(n, s) ? (n = n[s]) : (n = {}),
        ++r);
    }
    return ft(n) ? {} : { obj: n, k: ht(a[r]) };
  },
  pt = (n, e, t) => {
    const { obj: a, k: r } = _e(n, e, Object);
    if (a !== void 0 || e.length === 1) {
      a[r] = t;
      return;
    }
    let s = e[e.length - 1],
      i = e.slice(0, e.length - 1),
      o = _e(n, i, Object);
    for (; o.obj === void 0 && i.length; )
      ((s = `${i[i.length - 1]}.${s}`),
        (i = i.slice(0, i.length - 1)),
        (o = _e(n, i, Object)),
        o != null &&
          o.obj &&
          typeof o.obj[`${o.k}.${s}`] < "u" &&
          (o.obj = void 0));
    o.obj[`${o.k}.${s}`] = t;
  },
  la = (n, e, t, a) => {
    const { obj: r, k: s } = _e(n, e, Object);
    ((r[s] = r[s] || []), r[s].push(t));
  },
  Ae = (n, e) => {
    const { obj: t, k: a } = _e(n, e);
    if (t && Object.prototype.hasOwnProperty.call(t, a)) return t[a];
  },
  ua = (n, e, t) => {
    const a = Ae(n, t);
    return a !== void 0 ? a : Ae(e, t);
  },
  Wt = (n, e, t) => {
    for (const a in e)
      a !== "__proto__" &&
        a !== "constructor" &&
        (a in n
          ? x(n[a]) ||
            n[a] instanceof String ||
            x(e[a]) ||
            e[a] instanceof String
            ? t && (n[a] = e[a])
            : Wt(n[a], e[a], t)
          : (n[a] = e[a]));
    return n;
  },
  re = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var ha = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const fa = (n) => (x(n) ? n.replace(/[&<>"'\/]/g, (e) => ha[e]) : n);
class pa {
  constructor(e) {
    ((this.capacity = e),
      (this.regExpMap = new Map()),
      (this.regExpQueue = []));
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0) return t;
    const a = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, a),
      this.regExpQueue.push(e),
      a
    );
  }
}
const ga = [" ", ",", "?", "!", ";"],
  ya = new pa(20),
  ma = (n, e, t) => {
    ((e = e || ""), (t = t || ""));
    const a = ga.filter((i) => e.indexOf(i) < 0 && t.indexOf(i) < 0);
    if (a.length === 0) return !0;
    const r = ya.getRegExp(
      `(${a.map((i) => (i === "?" ? "\\?" : i)).join("|")})`,
    );
    let s = !r.test(n);
    if (!s) {
      const i = n.indexOf(t);
      i > 0 && !r.test(n.substring(0, i)) && (s = !0);
    }
    return s;
  },
  Je = (n, e, t = ".") => {
    if (!n) return;
    if (n[e]) return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
    const a = e.split(t);
    let r = n;
    for (let s = 0; s < a.length; ) {
      if (!r || typeof r != "object") return;
      let i,
        o = "";
      for (let d = s; d < a.length; ++d)
        if ((d !== s && (o += t), (o += a[d]), (i = r[o]), i !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof i) > -1 &&
            d < a.length - 1
          )
            continue;
          s += d - s + 1;
          break;
        }
      r = i;
    }
    return r;
  },
  Se = (n) => (n == null ? void 0 : n.replace(/_/g, "-")),
  ka = {
    type: "logger",
    log(n) {
      this.output("log", n);
    },
    warn(n) {
      this.output("warn", n);
    },
    error(n) {
      this.output("error", n);
    },
    output(n, e) {
      var t, a;
      (a =
        (t = console == null ? void 0 : console[n]) == null
          ? void 0
          : t.apply) == null || a.call(t, console, e);
    },
  };
class je {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    ((this.prefix = t.prefix || "i18next:"),
      (this.logger = e || ka),
      (this.options = t),
      (this.debug = t.debug));
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, a, r) {
    return r && !this.debug
      ? null
      : (x(e[0]) && (e[0] = `${a}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new je(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new je(this.logger, e)
    );
  }
}
var W = new je();
class He {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return (
      e.split(" ").forEach((a) => {
        this.observers[a] || (this.observers[a] = new Map());
        const r = this.observers[a].get(t) || 0;
        this.observers[a].set(t, r + 1);
      }),
      this
    );
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    (this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach(([r, s]) => {
        for (let i = 0; i < s; i++) r(...t);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([r, s]) => {
          for (let i = 0; i < s; i++) r.apply(r, [e, ...t]);
        }));
  }
}
class gt extends He {
  constructor(e, t = { ns: ["translation"], defaultNS: "translation" }) {
    (super(),
      (this.data = e || {}),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, a, r = {}) {
    var c, l;
    const s =
        r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
      i =
        r.ignoreJSONStructure !== void 0
          ? r.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let o;
    e.indexOf(".") > -1
      ? (o = e.split("."))
      : ((o = [e, t]),
        a &&
          (Array.isArray(a)
            ? o.push(...a)
            : x(a) && s
              ? o.push(...a.split(s))
              : o.push(a)));
    const d = Ae(this.data, o);
    return (
      !d &&
        !t &&
        !a &&
        e.indexOf(".") > -1 &&
        ((e = o[0]), (t = o[1]), (a = o.slice(2).join("."))),
      d || !i || !x(a)
        ? d
        : Je(
            (l = (c = this.data) == null ? void 0 : c[e]) == null
              ? void 0
              : l[t],
            a,
            s,
          )
    );
  }
  addResource(e, t, a, r, s = { silent: !1 }) {
    const i =
      s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let o = [e, t];
    (a && (o = o.concat(i ? a.split(i) : a)),
      e.indexOf(".") > -1 && ((o = e.split(".")), (r = t), (t = o[1])),
      this.addNamespaces(t),
      pt(this.data, o, r),
      s.silent || this.emit("added", e, t, a, r));
  }
  addResources(e, t, a, r = { silent: !1 }) {
    for (const s in a)
      (x(a[s]) || Array.isArray(a[s])) &&
        this.addResource(e, t, s, a[s], { silent: !0 });
    r.silent || this.emit("added", e, t, a);
  }
  addResourceBundle(e, t, a, r, s, i = { silent: !1, skipCopy: !1 }) {
    let o = [e, t];
    (e.indexOf(".") > -1 && ((o = e.split(".")), (r = a), (a = t), (t = o[1])),
      this.addNamespaces(t));
    let d = Ae(this.data, o) || {};
    (i.skipCopy || (a = JSON.parse(JSON.stringify(a))),
      r ? Wt(d, a, s) : (d = { ...d, ...a }),
      pt(this.data, o, d),
      i.silent || this.emit("added", e, t, a));
  }
  removeResourceBundle(e, t) {
    (this.hasResourceBundle(e, t) && delete this.data[e][t],
      this.removeNamespaces(t),
      this.emit("removed", e, t));
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return (t || (t = this.options.defaultNS), this.getResource(e, t));
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!((t && Object.keys(t)) || []).find(
      (r) => t[r] && Object.keys(t[r]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var Yt = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, a, r) {
    return (
      n.forEach((s) => {
        var i;
        e =
          ((i = this.processors[s]) == null ? void 0 : i.process(e, t, a, r)) ??
          e;
      }),
      e
    );
  },
};
const Ut = Symbol("i18next/PATH_KEY");
function va() {
  const n = [],
    e = Object.create(null);
  let t;
  return (
    (e.get = (a, r) => {
      var s;
      return (
        (s = t == null ? void 0 : t.revoke) == null || s.call(t),
        r === Ut ? n : (n.push(r), (t = Proxy.revocable(a, e)), t.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), e).proxy
  );
}
function Me(n, e) {
  const { [Ut]: t } = n(va()),
    a = (e == null ? void 0 : e.keySeparator) ?? ".",
    r = (e == null ? void 0 : e.nsSeparator) ?? ":";
  if (t.length > 1 && r) {
    const s = e == null ? void 0 : e.ns;
    if ((s ? (Array.isArray(s) ? s : [s]) : []).includes(t[0]))
      return `${t[0]}${r}${t.slice(1).join(a)}`;
  }
  return t.join(a);
}
const yt = {},
  We = (n) => !x(n) && typeof n != "boolean" && typeof n != "number";
class Ee extends He {
  constructor(e, t = {}) {
    (super(),
      ca(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        e,
        this,
      ),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = W.create("translator")));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = { interpolation: {} }) {
    const a = { ...t };
    if (e == null) return !1;
    const r = this.resolve(e, a);
    if ((r == null ? void 0 : r.res) === void 0) return !1;
    const s = We(r.res);
    return !(a.returnObjects === !1 && s);
  }
  extractFromKey(e, t) {
    let a = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    a === void 0 && (a = ":");
    const r =
      t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let s = t.ns || this.options.defaultNS || [];
    const i = a && e.indexOf(a) > -1,
      o =
        !this.options.userDefinedKeySeparator &&
        !t.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !t.nsSeparator &&
        !ma(e, a, r);
    if (i && !o) {
      const d = e.match(this.interpolator.nestingRegexp);
      if (d && d.length > 0) return { key: e, namespaces: x(s) ? [s] : s };
      const c = e.split(a);
      ((a !== r || (a === r && this.options.ns.indexOf(c[0]) > -1)) &&
        (s = c.shift()),
        (e = c.join(r)));
    }
    return { key: e, namespaces: x(s) ? [s] : s };
  }
  translate(e, t, a) {
    let r = typeof t == "object" ? { ...t } : t;
    if (
      (typeof r != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (r = this.options.overloadTranslationOptionHandler(arguments)),
      typeof r == "object" && (r = { ...r }),
      r || (r = {}),
      e == null)
    )
      return "";
    (typeof e == "function" && (e = Me(e, { ...this.options, ...r })),
      Array.isArray(e) || (e = [String(e)]),
      (e = e.map((D) =>
        typeof D == "function" ? Me(D, { ...this.options, ...r }) : String(D),
      )));
    const s =
        r.returnDetails !== void 0
          ? r.returnDetails
          : this.options.returnDetails,
      i =
        r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
      { key: o, namespaces: d } = this.extractFromKey(e[e.length - 1], r),
      c = d[d.length - 1];
    let l = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    l === void 0 && (l = ":");
    const h = r.lng || this.language,
      k = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
      return k
        ? s
          ? {
              res: `${c}${l}${o}`,
              usedKey: o,
              exactUsedKey: o,
              usedLng: h,
              usedNS: c,
              usedParams: this.getUsedParamsDetails(r),
            }
          : `${c}${l}${o}`
        : s
          ? {
              res: o,
              usedKey: o,
              exactUsedKey: o,
              usedLng: h,
              usedNS: c,
              usedParams: this.getUsedParamsDetails(r),
            }
          : o;
    const y = this.resolve(e, r);
    let p = y == null ? void 0 : y.res;
    const M = (y == null ? void 0 : y.usedKey) || o,
      T = (y == null ? void 0 : y.exactUsedKey) || o,
      j = ["[object Number]", "[object Function]", "[object RegExp]"],
      N = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
      P = !this.i18nFormat || this.i18nFormat.handleAsObject,
      A = r.count !== void 0 && !x(r.count),
      U = Ee.hasDefaultValue(r),
      Ne = A ? this.pluralResolver.getSuffix(h, r.count, r) : "",
      B =
        r.ordinal && A
          ? this.pluralResolver.getSuffix(h, r.count, { ordinal: !1 })
          : "",
      ge = A && !r.ordinal && r.count === 0,
      I =
        (ge && r[`defaultValue${this.options.pluralSeparator}zero`]) ||
        r[`defaultValue${Ne}`] ||
        r[`defaultValue${B}`] ||
        r.defaultValue;
    let E = p;
    P && !p && U && (E = I);
    const aa = We(E),
      na = Object.prototype.toString.apply(E);
    if (P && E && aa && j.indexOf(na) < 0 && !(x(N) && Array.isArray(E))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const D = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(M, E, { ...r, ns: d })
          : `key '${o} (${this.language})' returned an object instead of string.`;
        return s
          ? ((y.res = D), (y.usedParams = this.getUsedParamsDetails(r)), y)
          : D;
      }
      if (i) {
        const D = Array.isArray(E),
          q = D ? [] : {},
          st = D ? T : M;
        for (const H in E)
          if (Object.prototype.hasOwnProperty.call(E, H)) {
            const K = `${st}${i}${H}`;
            (U && !p
              ? (q[H] = this.translate(K, {
                  ...r,
                  defaultValue: We(I) ? I[H] : void 0,
                  joinArrays: !1,
                  ns: d,
                }))
              : (q[H] = this.translate(K, { ...r, joinArrays: !1, ns: d })),
              q[H] === K && (q[H] = E[H]));
          }
        p = q;
      }
    } else if (P && x(N) && Array.isArray(p))
      ((p = p.join(N)), p && (p = this.extendTranslation(p, e, r, a)));
    else {
      let D = !1,
        q = !1;
      (!this.isValidLookup(p) && U && ((D = !0), (p = I)),
        this.isValidLookup(p) || ((q = !0), (p = o)));
      const H =
          (r.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          q
            ? void 0
            : p,
        K = U && I !== p && this.options.updateMissing;
      if (q || D || K) {
        if (
          (this.logger.log(K ? "updateKey" : "missingKey", h, c, o, K ? I : p),
          i)
        ) {
          const F = this.resolve(o, { ...r, keySeparator: !1 });
          F &&
            F.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let ye = [];
        const Pe = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          r.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && Pe && Pe[0])
          for (let F = 0; F < Pe.length; F++) ye.push(Pe[F]);
        else
          this.options.saveMissingTo === "all"
            ? (ye = this.languageUtils.toResolveHierarchy(
                r.lng || this.language,
              ))
            : ye.push(r.lng || this.language);
        const it = (F, ne, me) => {
          var ct;
          const ot = U && me !== p ? me : H;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(F, c, ne, ot, K, r)
            : (ct = this.backendConnector) != null &&
              ct.saveMissing &&
              this.backendConnector.saveMissing(F, c, ne, ot, K, r),
            this.emit("missingKey", F, c, ne, p));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && A
            ? ye.forEach((F) => {
                const ne = this.pluralResolver.getSuffixes(F, r);
                (ge &&
                  r[`defaultValue${this.options.pluralSeparator}zero`] &&
                  ne.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  ne.push(`${this.options.pluralSeparator}zero`),
                  ne.forEach((me) => {
                    it([F], o + me, r[`defaultValue${me}`] || I);
                  }));
              })
            : it(ye, o, I));
      }
      ((p = this.extendTranslation(p, e, r, y, a)),
        q &&
          p === o &&
          this.options.appendNamespaceToMissingKey &&
          (p = `${c}${l}${o}`),
        (q || D) &&
          this.options.parseMissingKeyHandler &&
          (p = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${c}${l}${o}` : o,
            D ? p : void 0,
            r,
          )));
    }
    return s
      ? ((y.res = p), (y.usedParams = this.getUsedParamsDetails(r)), y)
      : p;
  }
  extendTranslation(e, t, a, r, s) {
    var d, c;
    if ((d = this.i18nFormat) != null && d.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...a },
        a.lng || this.language || r.usedLng,
        r.usedNS,
        r.usedKey,
        { resolved: r },
      );
    else if (!a.skipInterpolation) {
      a.interpolation &&
        this.interpolator.init({
          ...a,
          interpolation: { ...this.options.interpolation, ...a.interpolation },
        });
      const l =
        x(e) &&
        (((c = a == null ? void 0 : a.interpolation) == null
          ? void 0
          : c.skipOnVariables) !== void 0
          ? a.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let h;
      if (l) {
        const y = e.match(this.interpolator.nestingRegexp);
        h = y && y.length;
      }
      let k = a.replace && !x(a.replace) ? a.replace : a;
      if (
        (this.options.interpolation.defaultVariables &&
          (k = { ...this.options.interpolation.defaultVariables, ...k }),
        (e = this.interpolator.interpolate(
          e,
          k,
          a.lng || this.language || r.usedLng,
          a,
        )),
        l)
      ) {
        const y = e.match(this.interpolator.nestingRegexp),
          p = y && y.length;
        h < p && (a.nest = !1);
      }
      (!a.lng && r && r.res && (a.lng = this.language || r.usedLng),
        a.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            (...y) =>
              (s == null ? void 0 : s[0]) === y[0] && !a.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${y[0]} in key: ${t[0]}`,
                  ),
                  null)
                : this.translate(...y, t),
            a,
          )),
        a.interpolation && this.interpolator.reset());
    }
    const i = a.postProcess || this.options.postProcess,
      o = x(i) ? [i] : i;
    return (
      e != null &&
        o != null &&
        o.length &&
        a.applyPostProcessor !== !1 &&
        (e = Yt.handle(
          o,
          e,
          t,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...r,
                  usedParams: this.getUsedParamsDetails(a),
                },
                ...a,
              }
            : a,
          this,
        )),
      e
    );
  }
  resolve(e, t = {}) {
    let a, r, s, i, o;
    return (
      x(e) && (e = [e]),
      Array.isArray(e) &&
        (e = e.map((d) =>
          typeof d == "function" ? Me(d, { ...this.options, ...t }) : d,
        )),
      e.forEach((d) => {
        if (this.isValidLookup(a)) return;
        const c = this.extractFromKey(d, t),
          l = c.key;
        r = l;
        let h = c.namespaces;
        this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
        const k = t.count !== void 0 && !x(t.count),
          y = k && !t.ordinal && t.count === 0,
          p =
            t.context !== void 0 &&
            (x(t.context) || typeof t.context == "number") &&
            t.context !== "",
          M = t.lngs
            ? t.lngs
            : this.languageUtils.toResolveHierarchy(
                t.lng || this.language,
                t.fallbackLng,
              );
        h.forEach((T) => {
          var j, N;
          this.isValidLookup(a) ||
            ((o = T),
            !yt[`${M[0]}-${T}`] &&
              (j = this.utils) != null &&
              j.hasLoadedNamespace &&
              !((N = this.utils) != null && N.hasLoadedNamespace(o)) &&
              ((yt[`${M[0]}-${T}`] = !0),
              this.logger.warn(
                `key "${r}" for languages "${M.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            M.forEach((P) => {
              var Ne;
              if (this.isValidLookup(a)) return;
              i = P;
              const A = [l];
              if ((Ne = this.i18nFormat) != null && Ne.addLookupKeys)
                this.i18nFormat.addLookupKeys(A, l, P, T, t);
              else {
                let B;
                k && (B = this.pluralResolver.getSuffix(P, t.count, t));
                const ge = `${this.options.pluralSeparator}zero`,
                  I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (k &&
                    (t.ordinal &&
                      B.indexOf(I) === 0 &&
                      A.push(l + B.replace(I, this.options.pluralSeparator)),
                    A.push(l + B),
                    y && A.push(l + ge)),
                  p)
                ) {
                  const E = `${l}${this.options.contextSeparator || "_"}${t.context}`;
                  (A.push(E),
                    k &&
                      (t.ordinal &&
                        B.indexOf(I) === 0 &&
                        A.push(E + B.replace(I, this.options.pluralSeparator)),
                      A.push(E + B),
                      y && A.push(E + ge)));
                }
              }
              let U;
              for (; (U = A.pop()); )
                this.isValidLookup(a) ||
                  ((s = U), (a = this.getResource(P, T, U, t)));
            }));
        });
      }),
      { res: a, usedKey: r, exactUsedKey: s, usedLng: i, usedNS: o }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === "")
    );
  }
  getResource(e, t, a, r = {}) {
    var s;
    return (s = this.i18nFormat) != null && s.getResource
      ? this.i18nFormat.getResource(e, t, a, r)
      : this.resourceStore.getResource(e, t, a, r);
  }
  getUsedParamsDetails(e = {}) {
    const t = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      a = e.replace && !x(e.replace);
    let r = a ? e.replace : e;
    if (
      (a && typeof e.count < "u" && (r.count = e.count),
      this.options.interpolation.defaultVariables &&
        (r = { ...this.options.interpolation.defaultVariables, ...r }),
      !a)
    ) {
      r = { ...r };
      for (const s of t) delete r[s];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const a in e)
      if (
        Object.prototype.hasOwnProperty.call(e, a) &&
        t === a.substring(0, t.length) &&
        e[a] !== void 0
      )
        return !0;
    return !1;
  }
}
class mt {
  constructor(e) {
    ((this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = W.create("languageUtils")));
  }
  getScriptPartFromCode(e) {
    if (((e = Se(e)), !e || e.indexOf("-") < 0)) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (((e = Se(e)), !e || e.indexOf("-") < 0)) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (x(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {}
      return (
        t && this.options.lowerCaseLng && (t = t.toLowerCase()),
        t || (this.options.lowerCaseLng ? e.toLowerCase() : e)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return (
      e.forEach((a) => {
        if (t) return;
        const r = this.formatLanguageCode(a);
        (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r);
      }),
      !t &&
        this.options.supportedLngs &&
        e.forEach((a) => {
          if (t) return;
          const r = this.getScriptPartFromCode(a);
          if (this.isSupportedCode(r)) return (t = r);
          const s = this.getLanguagePartFromCode(a);
          if (this.isSupportedCode(s)) return (t = s);
          t = this.options.supportedLngs.find((i) => {
            if (i === s) return i;
            if (
              !(i.indexOf("-") < 0 && s.indexOf("-") < 0) &&
              ((i.indexOf("-") > 0 &&
                s.indexOf("-") < 0 &&
                i.substring(0, i.indexOf("-")) === s) ||
                (i.indexOf(s) === 0 && s.length > 1))
            )
              return i;
          });
        }),
      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
      t
    );
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (
      (typeof e == "function" && (e = e(t)),
      x(e) && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!t) return e.default || [];
    let a = e[t];
    return (
      a || (a = e[this.getScriptPartFromCode(t)]),
      a || (a = e[this.formatLanguageCode(t)]),
      a || (a = e[this.getLanguagePartFromCode(t)]),
      a || (a = e.default),
      a || []
    );
  }
  toResolveHierarchy(e, t) {
    const a = this.getFallbackCodes(
        (t === !1 ? [] : t) || this.options.fallbackLng || [],
        e,
      ),
      r = [],
      s = (i) => {
        i &&
          (this.isSupportedCode(i)
            ? r.push(i)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${i}`,
              ));
      };
    return (
      x(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            s(this.formatLanguageCode(e)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            s(this.getScriptPartFromCode(e)),
          this.options.load !== "currentOnly" &&
            s(this.getLanguagePartFromCode(e)))
        : x(e) && s(this.formatLanguageCode(e)),
      a.forEach((i) => {
        r.indexOf(i) < 0 && s(this.formatLanguageCode(i));
      }),
      r
    );
  }
}
const kt = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  vt = {
    select: (n) => (n === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class xa {
  constructor(e, t = {}) {
    ((this.languageUtils = e),
      (this.options = t),
      (this.logger = W.create("pluralResolver")),
      (this.pluralRulesCache = {}));
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const a = Se(e === "dev" ? "en" : e),
      r = t.ordinal ? "ordinal" : "cardinal",
      s = JSON.stringify({ cleanedCode: a, type: r });
    if (s in this.pluralRulesCache) return this.pluralRulesCache[s];
    let i;
    try {
      i = new Intl.PluralRules(a, { type: r });
    } catch {
      if (typeof Intl > "u")
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"),
          vt
        );
      if (!e.match(/-|_/)) return vt;
      const d = this.languageUtils.getLanguagePartFromCode(e);
      i = this.getRule(d, t);
    }
    return ((this.pluralRulesCache[s] = i), i);
  }
  needsPlural(e, t = {}) {
    let a = this.getRule(e, t);
    return (
      a || (a = this.getRule("dev", t)),
      (a == null ? void 0 : a.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(e, t, a = {}) {
    return this.getSuffixes(e, a).map((r) => `${t}${r}`);
  }
  getSuffixes(e, t = {}) {
    let a = this.getRule(e, t);
    return (
      a || (a = this.getRule("dev", t)),
      a
        ? a
            .resolvedOptions()
            .pluralCategories.sort((r, s) => kt[r] - kt[s])
            .map(
              (r) =>
                `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`,
            )
        : []
    );
  }
  getSuffix(e, t, a = {}) {
    const r = this.getRule(e, a);
    return r
      ? `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}`
      : (this.logger.warn(`no plural rule found for: ${e}`),
        this.getSuffix("dev", t, a));
  }
}
const xt = (n, e, t, a = ".", r = !0) => {
    let s = ua(n, e, t);
    return (
      !s && r && x(t) && ((s = Je(n, t, a)), s === void 0 && (s = Je(e, t, a))),
      s
    );
  },
  Ye = (n) => n.replace(/\$/g, "$$$$");
class bt {
  constructor(e = {}) {
    var t;
    ((this.logger = W.create("interpolator")),
      (this.options = e),
      (this.format =
        ((t = e == null ? void 0 : e.interpolation) == null
          ? void 0
          : t.format) || ((a) => a)),
      this.init(e));
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: t,
      escapeValue: a,
      useRawValueToEscape: r,
      prefix: s,
      prefixEscaped: i,
      suffix: o,
      suffixEscaped: d,
      formatSeparator: c,
      unescapeSuffix: l,
      unescapePrefix: h,
      nestingPrefix: k,
      nestingPrefixEscaped: y,
      nestingSuffix: p,
      nestingSuffixEscaped: M,
      nestingOptionsSeparator: T,
      maxReplaces: j,
      alwaysFormat: N,
    } = e.interpolation;
    ((this.escape = t !== void 0 ? t : fa),
      (this.escapeValue = a !== void 0 ? a : !0),
      (this.useRawValueToEscape = r !== void 0 ? r : !1),
      (this.prefix = s ? re(s) : i || "{{"),
      (this.suffix = o ? re(o) : d || "}}"),
      (this.formatSeparator = c || ","),
      (this.unescapePrefix = l ? "" : h || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : l || ""),
      (this.nestingPrefix = k ? re(k) : y || re("$t(")),
      (this.nestingSuffix = p ? re(p) : M || re(")")),
      (this.nestingOptionsSeparator = T || ","),
      (this.maxReplaces = j || 1e3),
      (this.alwaysFormat = N !== void 0 ? N : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, a) =>
      (t == null ? void 0 : t.source) === a
        ? ((t.lastIndex = 0), t)
        : new RegExp(a, "g");
    ((this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
      )));
  }
  interpolate(e, t, a, r) {
    var y;
    let s, i, o;
    const d =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      c = (p) => {
        if (p.indexOf(this.formatSeparator) < 0) {
          const N = xt(
            t,
            d,
            p,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(N, void 0, a, { ...r, ...t, interpolationkey: p })
            : N;
        }
        const M = p.split(this.formatSeparator),
          T = M.shift().trim(),
          j = M.join(this.formatSeparator).trim();
        return this.format(
          xt(
            t,
            d,
            T,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          j,
          a,
          { ...r, ...t, interpolationkey: T },
        );
      };
    this.resetRegExp();
    const l =
        (r == null ? void 0 : r.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      h =
        ((y = r == null ? void 0 : r.interpolation) == null
          ? void 0
          : y.skipOnVariables) !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (p) => Ye(p) },
        {
          regex: this.regexp,
          safeValue: (p) => (this.escapeValue ? Ye(this.escape(p)) : Ye(p)),
        },
      ].forEach((p) => {
        for (o = 0; (s = p.regex.exec(e)); ) {
          const M = s[1].trim();
          if (((i = c(M)), i === void 0))
            if (typeof l == "function") {
              const j = l(e, s, r);
              i = x(j) ? j : "";
            } else if (r && Object.prototype.hasOwnProperty.call(r, M)) i = "";
            else if (h) {
              i = s[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${M} for interpolating ${e}`,
              ),
                (i = ""));
          else !x(i) && !this.useRawValueToEscape && (i = ut(i));
          const T = p.safeValue(i);
          if (
            ((e = e.replace(s[0], T)),
            h
              ? ((p.regex.lastIndex += i.length),
                (p.regex.lastIndex -= s[0].length))
              : (p.regex.lastIndex = 0),
            o++,
            o >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, t, a = {}) {
    let r, s, i;
    const o = (d, c) => {
      const l = this.nestingOptionsSeparator;
      if (d.indexOf(l) < 0) return d;
      const h = d.split(new RegExp(`${re(l)}[ ]*{`));
      let k = `{${h[1]}`;
      ((d = h[0]), (k = this.interpolate(k, i)));
      const y = k.match(/'/g),
        p = k.match(/"/g);
      ((((y == null ? void 0 : y.length) ?? 0) % 2 === 0 && !p) ||
        ((p == null ? void 0 : p.length) ?? 0) % 2 !== 0) &&
        (k = k.replace(/'/g, '"'));
      try {
        ((i = JSON.parse(k)), c && (i = { ...c, ...i }));
      } catch (M) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${d}`,
            M,
          ),
          `${d}${l}${k}`
        );
      }
      return (
        i.defaultValue &&
          i.defaultValue.indexOf(this.prefix) > -1 &&
          delete i.defaultValue,
        d
      );
    };
    for (; (r = this.nestingRegexp.exec(e)); ) {
      let d = [];
      ((i = { ...a }),
        (i = i.replace && !x(i.replace) ? i.replace : i),
        (i.applyPostProcessor = !1),
        delete i.defaultValue);
      const c = /{.*}/.test(r[1])
        ? r[1].lastIndexOf("}") + 1
        : r[1].indexOf(this.formatSeparator);
      if (
        (c !== -1 &&
          ((d = r[1]
            .slice(c)
            .split(this.formatSeparator)
            .map((l) => l.trim())
            .filter(Boolean)),
          (r[1] = r[1].slice(0, c))),
        (s = t(o.call(this, r[1].trim(), i), i)),
        s && r[0] === e && !x(s))
      )
        return s;
      (x(s) || (s = ut(s)),
        s ||
          (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),
          (s = "")),
        d.length &&
          (s = d.reduce(
            (l, h) =>
              this.format(l, h, a.lng, { ...a, interpolationkey: r[1].trim() }),
            s.trim(),
          )),
        (e = e.replace(r[0], s)),
        (this.regexp.lastIndex = 0));
    }
    return e;
  }
}
const ba = (n) => {
    let e = n.toLowerCase().trim();
    const t = {};
    if (n.indexOf("(") > -1) {
      const a = n.split("(");
      e = a[0].toLowerCase().trim();
      const r = a[1].substring(0, a[1].length - 1);
      e === "currency" && r.indexOf(":") < 0
        ? t.currency || (t.currency = r.trim())
        : e === "relativetime" && r.indexOf(":") < 0
          ? t.range || (t.range = r.trim())
          : r.split(";").forEach((i) => {
              if (i) {
                const [o, ...d] = i.split(":"),
                  c = d
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  l = o.trim();
                (t[l] || (t[l] = c),
                  c === "false" && (t[l] = !1),
                  c === "true" && (t[l] = !0),
                  isNaN(c) || (t[l] = parseInt(c, 10)));
              }
            });
    }
    return { formatName: e, formatOptions: t };
  },
  wt = (n) => {
    const e = {};
    return (t, a, r) => {
      let s = r;
      r &&
        r.interpolationkey &&
        r.formatParams &&
        r.formatParams[r.interpolationkey] &&
        r[r.interpolationkey] &&
        (s = { ...s, [r.interpolationkey]: void 0 });
      const i = a + JSON.stringify(s);
      let o = e[i];
      return (o || ((o = n(Se(a), r)), (e[i] = o)), o(t));
    };
  },
  wa = (n) => (e, t, a) => n(Se(t), a)(e);
class _a {
  constructor(e = {}) {
    ((this.logger = W.create("formatter")), (this.options = e), this.init(e));
  }
  init(e, t = { interpolation: {} }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const a = t.cacheInBuiltFormats ? wt : wa;
    this.formats = {
      number: a((r, s) => {
        const i = new Intl.NumberFormat(r, { ...s });
        return (o) => i.format(o);
      }),
      currency: a((r, s) => {
        const i = new Intl.NumberFormat(r, { ...s, style: "currency" });
        return (o) => i.format(o);
      }),
      datetime: a((r, s) => {
        const i = new Intl.DateTimeFormat(r, { ...s });
        return (o) => i.format(o);
      }),
      relativetime: a((r, s) => {
        const i = new Intl.RelativeTimeFormat(r, { ...s });
        return (o) => i.format(o, s.range || "day");
      }),
      list: a((r, s) => {
        const i = new Intl.ListFormat(r, { ...s });
        return (o) => i.format(o);
      }),
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = wt(t);
  }
  format(e, t, a, r = {}) {
    const s = t.split(this.formatSeparator);
    if (
      s.length > 1 &&
      s[0].indexOf("(") > 1 &&
      s[0].indexOf(")") < 0 &&
      s.find((o) => o.indexOf(")") > -1)
    ) {
      const o = s.findIndex((d) => d.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, o)].join(this.formatSeparator);
    }
    return s.reduce((o, d) => {
      var h;
      const { formatName: c, formatOptions: l } = ba(d);
      if (this.formats[c]) {
        let k = o;
        try {
          const y =
              ((h = r == null ? void 0 : r.formatParams) == null
                ? void 0
                : h[r.interpolationkey]) || {},
            p = y.locale || y.lng || r.locale || r.lng || a;
          k = this.formats[c](o, p, { ...l, ...r, ...y });
        } catch (y) {
          this.logger.warn(y);
        }
        return k;
      } else this.logger.warn(`there was no format function for ${c}`);
      return o;
    }, e);
  }
}
const Ma = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class Oa extends He {
  constructor(e, t, a, r = {}) {
    var s, i;
    (super(),
      (this.backend = e),
      (this.store = t),
      (this.services = a),
      (this.languageUtils = a.languageUtils),
      (this.options = r),
      (this.logger = W.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = r.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
      (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (i = (s = this.backend) == null ? void 0 : s.init) == null ||
        i.call(s, a, r.backend, r));
  }
  queueLoad(e, t, a, r) {
    const s = {},
      i = {},
      o = {},
      d = {};
    return (
      e.forEach((c) => {
        let l = !0;
        (t.forEach((h) => {
          const k = `${c}|${h}`;
          !a.reload && this.store.hasResourceBundle(c, h)
            ? (this.state[k] = 2)
            : this.state[k] < 0 ||
              (this.state[k] === 1
                ? i[k] === void 0 && (i[k] = !0)
                : ((this.state[k] = 1),
                  (l = !1),
                  i[k] === void 0 && (i[k] = !0),
                  s[k] === void 0 && (s[k] = !0),
                  d[h] === void 0 && (d[h] = !0)));
        }),
          l || (o[c] = !0));
      }),
      (Object.keys(s).length || Object.keys(i).length) &&
        this.queue.push({
          pending: i,
          pendingCount: Object.keys(i).length,
          loaded: {},
          errors: [],
          callback: r,
        }),
      {
        toLoad: Object.keys(s),
        pending: Object.keys(i),
        toLoadLanguages: Object.keys(o),
        toLoadNamespaces: Object.keys(d),
      }
    );
  }
  loaded(e, t, a) {
    const r = e.split("|"),
      s = r[0],
      i = r[1];
    (t && this.emit("failedLoading", s, i, t),
      !t &&
        a &&
        this.store.addResourceBundle(s, i, a, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = t ? -1 : 2),
      t && a && (this.state[e] = 0));
    const o = {};
    (this.queue.forEach((d) => {
      (la(d.loaded, [s], i),
        Ma(d, e),
        t && d.errors.push(t),
        d.pendingCount === 0 &&
          !d.done &&
          (Object.keys(d.loaded).forEach((c) => {
            o[c] || (o[c] = {});
            const l = d.loaded[c];
            l.length &&
              l.forEach((h) => {
                o[c][h] === void 0 && (o[c][h] = !0);
              });
          }),
          (d.done = !0),
          d.errors.length ? d.callback(d.errors) : d.callback()));
    }),
      this.emit("loaded", o),
      (this.queue = this.queue.filter((d) => !d.done)));
  }
  read(e, t, a, r = 0, s = this.retryTimeout, i) {
    if (!e.length) return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: a,
        tried: r,
        wait: s,
        callback: i,
      });
      return;
    }
    this.readingCalls++;
    const o = (c, l) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const h = this.waitingReads.shift();
          this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
        }
        if (c && l && r < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, t, a, r + 1, s * 2, i);
          }, s);
          return;
        }
        i(c, l);
      },
      d = this.backend[a].bind(this.backend);
    if (d.length === 2) {
      try {
        const c = d(e, t);
        c && typeof c.then == "function"
          ? c.then((l) => o(null, l)).catch(o)
          : o(null, c);
      } catch (c) {
        o(c);
      }
      return;
    }
    return d(e, t, o);
  }
  prepareLoading(e, t, a = {}, r) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        r && r()
      );
    (x(e) && (e = this.languageUtils.toResolveHierarchy(e)), x(t) && (t = [t]));
    const s = this.queueLoad(e, t, a, r);
    if (!s.toLoad.length) return (s.pending.length || r(), null);
    s.toLoad.forEach((i) => {
      this.loadOne(i);
    });
  }
  load(e, t, a) {
    this.prepareLoading(e, t, {}, a);
  }
  reload(e, t, a) {
    this.prepareLoading(e, t, { reload: !0 }, a);
  }
  loadOne(e, t = "") {
    const a = e.split("|"),
      r = a[0],
      s = a[1];
    this.read(r, s, "read", void 0, void 0, (i, o) => {
      (i &&
        this.logger.warn(
          `${t}loading namespace ${s} for language ${r} failed`,
          i,
        ),
        !i &&
          o &&
          this.logger.log(`${t}loaded namespace ${s} for language ${r}`, o),
        this.loaded(e, i, o));
    });
  }
  saveMissing(e, t, a, r, s, i = {}, o = () => {}) {
    var d, c, l, h, k;
    if (
      (c = (d = this.services) == null ? void 0 : d.utils) != null &&
      c.hasLoadedNamespace &&
      !(
        (h = (l = this.services) == null ? void 0 : l.utils) != null &&
        h.hasLoadedNamespace(t)
      )
    ) {
      this.logger.warn(
        `did not save key "${a}" as the namespace "${t}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(a == null || a === "")) {
      if ((k = this.backend) != null && k.create) {
        const y = { ...i, isUpdate: s },
          p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let M;
            (p.length === 5 ? (M = p(e, t, a, r, y)) : (M = p(e, t, a, r)),
              M && typeof M.then == "function"
                ? M.then((T) => o(null, T)).catch(o)
                : o(null, M));
          } catch (M) {
            o(M);
          }
        else p(e, t, a, r, o, y);
      }
      !e || !e[0] || this.store.addResource(e[0], t, a, r);
    }
  }
}
const Ue = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (n) => {
      let e = {};
      if (
        (typeof n[1] == "object" && (e = n[1]),
        x(n[1]) && (e.defaultValue = n[1]),
        x(n[2]) && (e.tDescription = n[2]),
        typeof n[2] == "object" || typeof n[3] == "object")
      ) {
        const t = n[3] || n[2];
        Object.keys(t).forEach((a) => {
          e[a] = t[a];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (n) => n,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  _t = (n) => {
    var e, t;
    return (
      x(n.ns) && (n.ns = [n.ns]),
      x(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]),
      x(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]),
      ((t = (e = n.supportedLngs) == null ? void 0 : e.indexOf) == null
        ? void 0
        : t.call(e, "cimode")) < 0 &&
        (n.supportedLngs = n.supportedLngs.concat(["cimode"])),
      typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate),
      n
    );
  },
  Re = () => {},
  Sa = (n) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
      typeof n[t] == "function" && (n[t] = n[t].bind(n));
    });
  },
  Bt = "__i18next_supportNoticeShown",
  Ca = () => typeof globalThis < "u" && !!globalThis[Bt],
  La = () => {
    typeof globalThis < "u" && (globalThis[Bt] = !0);
  },
  Ta = (n) => {
    var e, t, a, r, s, i, o, d, c, l, h, k, y;
    return !!(
      ((a =
        (t =
          (e = n == null ? void 0 : n.modules) == null ? void 0 : e.backend) ==
        null
          ? void 0
          : t.name) == null
        ? void 0
        : a.indexOf("Locize")) > 0 ||
      ((o =
        (i =
          (s =
            (r = n == null ? void 0 : n.modules) == null
              ? void 0
              : r.backend) == null
            ? void 0
            : s.constructor) == null
          ? void 0
          : i.name) == null
        ? void 0
        : o.indexOf("Locize")) > 0 ||
      ((c =
        (d = n == null ? void 0 : n.options) == null ? void 0 : d.backend) !=
        null &&
        c.backends &&
        n.options.backend.backends.some((p) => {
          var M, T, j;
          return (
            ((M = p == null ? void 0 : p.name) == null
              ? void 0
              : M.indexOf("Locize")) > 0 ||
            ((j =
              (T = p == null ? void 0 : p.constructor) == null
                ? void 0
                : T.name) == null
              ? void 0
              : j.indexOf("Locize")) > 0
          );
        })) ||
      ((h =
        (l = n == null ? void 0 : n.options) == null ? void 0 : l.backend) !=
        null &&
        h.projectId) ||
      ((y =
        (k = n == null ? void 0 : n.options) == null ? void 0 : k.backend) !=
        null &&
        y.backendOptions &&
        n.options.backend.backendOptions.some((p) =>
          p == null ? void 0 : p.projectId,
        ))
    );
  };
class Oe extends He {
  constructor(e = {}, t) {
    if (
      (super(),
      (this.options = _t(e)),
      (this.services = {}),
      (this.logger = W),
      (this.modules = { external: [] }),
      Sa(this),
      t && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(e, t), this);
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    ((this.isInitializing = !0),
      typeof e == "function" && ((t = e), (e = {})),
      e.defaultNS == null &&
        e.ns &&
        (x(e.ns)
          ? (e.defaultNS = e.ns)
          : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0])));
    const a = Ue();
    ((this.options = { ...a, ...this.options, ..._t(e) }),
      (this.options.interpolation = {
        ...a.interpolation,
        ...this.options.interpolation,
      }),
      e.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = e.keySeparator),
      e.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = e.nsSeparator),
      typeof this.options.overloadTranslationOptionHandler != "function" &&
        (this.options.overloadTranslationOptionHandler =
          a.overloadTranslationOptionHandler),
      this.options.showSupportNotice !== !1 &&
        !Ta(this) &&
        !Ca() &&
        (typeof console < "u" &&
          typeof console.info < "u" &&
          console.info(
            "🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙",
          ),
        La()));
    const r = (c) => (c ? (typeof c == "function" ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? W.init(r(this.modules.logger), this.options)
        : W.init(null, this.options);
      let c;
      this.modules.formatter ? (c = this.modules.formatter) : (c = _a);
      const l = new mt(this.options);
      this.store = new gt(this.options.resources, this.options);
      const h = this.services;
      ((h.logger = W),
        (h.resourceStore = this.store),
        (h.languageUtils = l),
        (h.pluralResolver = new xa(l, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== a.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
          ),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === a.interpolation.format) &&
          ((h.formatter = r(c)),
          h.formatter.init && h.formatter.init(h, this.options),
          (this.options.interpolation.format = h.formatter.format.bind(
            h.formatter,
          ))),
        (h.interpolator = new bt(this.options)),
        (h.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (h.backendConnector = new Oa(
          r(this.modules.backend),
          h.resourceStore,
          h,
          this.options,
        )),
        h.backendConnector.on("*", (y, ...p) => {
          this.emit(y, ...p);
        }),
        this.modules.languageDetector &&
          ((h.languageDetector = r(this.modules.languageDetector)),
          h.languageDetector.init &&
            h.languageDetector.init(h, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((h.i18nFormat = r(this.modules.i18nFormat)),
          h.i18nFormat.init && h.i18nFormat.init(this)),
        (this.translator = new Ee(this.services, this.options)),
        this.translator.on("*", (y, ...p) => {
          this.emit(y, ...p);
        }),
        this.modules.external.forEach((y) => {
          y.init && y.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      t || (t = Re),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = (...l) => this.store[c](...l);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = (...l) => (this.store[c](...l), this);
      }));
    const o = ke(),
      d = () => {
        const c = (l, h) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            o.resolve(h),
            t(l, h));
        };
        if (this.languages && !this.isInitialized)
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? d()
        : setTimeout(d, 0),
      o
    );
  }
  loadResources(e, t = Re) {
    var s, i;
    let a = t;
    const r = x(e) ? e : this.language;
    if (
      (typeof e == "function" && (a = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (r == null ? void 0 : r.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return a();
      const o = [],
        d = (c) => {
          if (!c || c === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(c).forEach((h) => {
            h !== "cimode" && o.indexOf(h) < 0 && o.push(h);
          });
        };
      (r
        ? d(r)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => d(l)),
        (i = (s = this.options.preload) == null ? void 0 : s.forEach) == null ||
          i.call(s, (c) => d(c)),
        this.services.backendConnector.load(o, this.options.ns, (c) => {
          (!c &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            a(c));
        }));
    } else a(null);
  }
  reloadResources(e, t, a) {
    const r = ke();
    return (
      typeof e == "function" && ((a = e), (e = void 0)),
      typeof t == "function" && ((a = t), (t = void 0)),
      e || (e = this.languages),
      t || (t = this.options.ns),
      a || (a = Re),
      this.services.backendConnector.reload(e, t, (s) => {
        (r.resolve(), a(s));
      }),
      r
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!e.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      e.type === "backend" && (this.modules.backend = e),
      (e.type === "logger" || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === "languageDetector" && (this.modules.languageDetector = e),
      e.type === "i18nFormat" && (this.modules.i18nFormat = e),
      e.type === "postProcessor" && Yt.addPostProcessor(e),
      e.type === "formatter" && (this.modules.formatter = e),
      e.type === "3rdParty" && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const a = this.languages[t];
        if (
          !(["cimode", "dev"].indexOf(a) > -1) &&
          this.store.hasLanguageSomeTranslations(a)
        ) {
          this.resolvedLanguage = a;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(e) < 0 &&
        this.store.hasLanguageSomeTranslations(e) &&
        ((this.resolvedLanguage = e), this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const a = ke();
    this.emit("languageChanging", e);
    const r = (o) => {
        ((this.language = o),
          (this.languages = this.services.languageUtils.toResolveHierarchy(o)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(o));
      },
      s = (o, d) => {
        (d
          ? this.isLanguageChangingTo === e &&
            (r(d),
            this.translator.changeLanguage(d),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", d),
            this.logger.log("languageChanged", d))
          : (this.isLanguageChangingTo = void 0),
          a.resolve((...c) => this.t(...c)),
          t && t(o, (...c) => this.t(...c)));
      },
      i = (o) => {
        var l, h;
        !e && !o && this.services.languageDetector && (o = []);
        const d = x(o) ? o : o && o[0],
          c = this.store.hasLanguageSomeTranslations(d)
            ? d
            : this.services.languageUtils.getBestMatchFromCodes(x(o) ? [o] : o);
        (c &&
          (this.language || r(c),
          this.translator.language || this.translator.changeLanguage(c),
          (h =
            (l = this.services.languageDetector) == null
              ? void 0
              : l.cacheUserLanguage) == null || h.call(l, c)),
          this.loadResources(c, (k) => {
            s(k, c);
          }));
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? i(this.services.languageDetector.detect())
        : !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(i)
            : this.services.languageDetector.detect(i)
          : i(e),
      a
    );
  }
  getFixedT(e, t, a) {
    const r = (s, i, ...o) => {
      let d;
      (typeof i != "object"
        ? (d = this.options.overloadTranslationOptionHandler([s, i].concat(o)))
        : (d = { ...i }),
        (d.lng = d.lng || r.lng),
        (d.lngs = d.lngs || r.lngs),
        (d.ns = d.ns || r.ns),
        d.keyPrefix !== "" && (d.keyPrefix = d.keyPrefix || a || r.keyPrefix));
      const c = this.options.keySeparator || ".";
      let l;
      return (
        d.keyPrefix && Array.isArray(s)
          ? (l = s.map(
              (h) => (
                typeof h == "function" &&
                  (h = Me(h, { ...this.options, ...i })),
                `${d.keyPrefix}${c}${h}`
              ),
            ))
          : (typeof s == "function" && (s = Me(s, { ...this.options, ...i })),
            (l = d.keyPrefix ? `${d.keyPrefix}${c}${s}` : s)),
        this.t(l, d)
      );
    };
    return (
      x(e) ? (r.lng = e) : (r.lngs = e),
      (r.ns = t),
      (r.keyPrefix = a),
      r
    );
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const a = t.lng || this.resolvedLanguage || this.languages[0],
      r = this.options ? this.options.fallbackLng : !1,
      s = this.languages[this.languages.length - 1];
    if (a.toLowerCase() === "cimode") return !0;
    const i = (o, d) => {
      const c = this.services.backendConnector.state[`${o}|${d}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, i);
      if (o !== void 0) return o;
    }
    return !!(
      this.hasResourceBundle(a, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (i(a, e) && (!r || i(s, e)))
    );
  }
  loadNamespaces(e, t) {
    const a = ke();
    return this.options.ns
      ? (x(e) && (e = [e]),
        e.forEach((r) => {
          this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
        }),
        this.loadResources((r) => {
          (a.resolve(), t && t(r));
        }),
        a)
      : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const a = ke();
    x(e) && (e = [e]);
    const r = this.options.preload || [],
      s = e.filter(
        (i) =>
          r.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i),
      );
    return s.length
      ? ((this.options.preload = r.concat(s)),
        this.loadResources((i) => {
          (a.resolve(), t && t(i));
        }),
        a)
      : (t && t(), Promise.resolve());
  }
  dir(e) {
    var r, s;
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (((r = this.languages) == null ? void 0 : r.length) > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return "rtl";
    try {
      const i = new Intl.Locale(e);
      if (i && i.getTextInfo) {
        const o = i.getTextInfo();
        if (o && o.direction) return o.direction;
      }
    } catch {}
    const t = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      a =
        ((s = this.services) == null ? void 0 : s.languageUtils) ||
        new mt(Ue());
    return e.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : t.indexOf(a.getLanguagePartFromCode(e)) > -1 ||
          e.toLowerCase().indexOf("-arab") > 1
        ? "rtl"
        : "ltr";
  }
  static createInstance(e = {}, t) {
    const a = new Oe(e, t);
    return ((a.createInstance = Oe.createInstance), a);
  }
  cloneInstance(e = {}, t = Re) {
    const a = e.forkResourceStore;
    a && delete e.forkResourceStore;
    const r = { ...this.options, ...e, isClone: !0 },
      s = new Oe(r);
    if (
      ((e.debug !== void 0 || e.prefix !== void 0) &&
        (s.logger = s.logger.clone(e)),
      ["store", "services", "language"].forEach((o) => {
        s[o] = this[o];
      }),
      (s.services = { ...this.services }),
      (s.services.utils = { hasLoadedNamespace: s.hasLoadedNamespace.bind(s) }),
      a)
    ) {
      const o = Object.keys(this.store.data).reduce(
        (d, c) => (
          (d[c] = { ...this.store.data[c] }),
          (d[c] = Object.keys(d[c]).reduce(
            (l, h) => ((l[h] = { ...d[c][h] }), l),
            d[c],
          )),
          d
        ),
        {},
      );
      ((s.store = new gt(o, r)), (s.services.resourceStore = s.store));
    }
    if (e.interpolation) {
      const d = {
          ...Ue().interpolation,
          ...this.options.interpolation,
          ...e.interpolation,
        },
        c = { ...r, interpolation: d };
      s.services.interpolator = new bt(c);
    }
    return (
      (s.translator = new Ee(s.services, r)),
      s.translator.on("*", (o, ...d) => {
        s.emit(o, ...d);
      }),
      s.init(r, t),
      (s.translator.options = r),
      (s.translator.backendConnector.services.utils = {
        hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
      }),
      s
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const $ = Oe.createInstance();
$.createInstance;
$.dir;
$.init;
$.loadResources;
$.reloadResources;
$.use;
$.changeLanguage;
$.getFixedT;
$.t;
$.exists;
$.setDefaultNamespace;
$.hasLoadedNamespace;
$.loadNamespaces;
$.loadLanguages;
function O(n) {
  const e = Object.prototype.toString.call(n);
  return n instanceof Date || (typeof n == "object" && e === "[object Date]")
    ? new n.constructor(+n)
    : typeof n == "number" ||
        e === "[object Number]" ||
        typeof n == "string" ||
        e === "[object String]"
      ? new Date(n)
      : new Date(NaN);
}
function V(n, e) {
  return n instanceof Date ? new n.constructor(e) : new Date(e);
}
function Kt(n, e) {
  const t = O(n);
  return isNaN(e) ? V(n, NaN) : (e && t.setDate(t.getDate() + e), t);
}
function Na(n, e) {
  const t = O(n);
  if (isNaN(e)) return V(n, NaN);
  if (!e) return t;
  const a = t.getDate(),
    r = V(n, t.getTime());
  r.setMonth(t.getMonth() + e + 1, 0);
  const s = r.getDate();
  return a >= s ? r : (t.setFullYear(r.getFullYear(), r.getMonth(), a), t);
}
const nt = 6048e5,
  Pa = 864e5;
let Ra = {};
function Te() {
  return Ra;
}
function ie(n, e) {
  var o, d, c, l;
  const t = Te(),
    a =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((d = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) ==
      null
        ? void 0
        : d.weekStartsOn) ??
      t.weekStartsOn ??
      ((l = (c = t.locale) == null ? void 0 : c.options) == null
        ? void 0
        : l.weekStartsOn) ??
      0,
    r = O(n),
    s = r.getDay(),
    i = (s < a ? 7 : 0) + s - a;
  return (r.setDate(r.getDate() - i), r.setHours(0, 0, 0, 0), r);
}
function De(n) {
  return ie(n, { weekStartsOn: 1 });
}
function Jt(n) {
  const e = O(n),
    t = e.getFullYear(),
    a = V(n, 0);
  (a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0));
  const r = De(a),
    s = V(n, 0);
  (s.setFullYear(t, 0, 4), s.setHours(0, 0, 0, 0));
  const i = De(s);
  return e.getTime() >= r.getTime()
    ? t + 1
    : e.getTime() >= i.getTime()
      ? t
      : t - 1;
}
function $e(n) {
  const e = O(n);
  return (e.setHours(0, 0, 0, 0), e);
}
function Ie(n) {
  const e = O(n),
    t = new Date(
      Date.UTC(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        e.getMinutes(),
        e.getSeconds(),
        e.getMilliseconds(),
      ),
    );
  return (t.setUTCFullYear(e.getFullYear()), +n - +t);
}
function Aa(n, e) {
  const t = $e(n),
    a = $e(e),
    r = +t - Ie(t),
    s = +a - Ie(a);
  return Math.round((r - s) / Pa);
}
function ja(n) {
  const e = Jt(n),
    t = V(n, 0);
  return (t.setFullYear(e, 0, 4), t.setHours(0, 0, 0, 0), De(t));
}
function Ci(n, e) {
  const t = e * 7;
  return Kt(n, t);
}
function Li(n, e) {
  return Na(n, e * 12);
}
function Ti(n) {
  let e;
  return (
    n.forEach(function (t) {
      const a = O(t);
      (e === void 0 || e < a || isNaN(Number(a))) && (e = a);
    }),
    e || new Date(NaN)
  );
}
function Ni(n) {
  let e;
  return (
    n.forEach((t) => {
      const a = O(t);
      (!e || e > a || isNaN(+a)) && (e = a);
    }),
    e || new Date(NaN)
  );
}
function Pi(n, e) {
  const t = $e(n),
    a = $e(e);
  return +t == +a;
}
function Ea(n) {
  return (
    n instanceof Date ||
    (typeof n == "object" &&
      Object.prototype.toString.call(n) === "[object Date]")
  );
}
function Da(n) {
  if (!Ea(n) && typeof n != "number") return !1;
  const e = O(n);
  return !isNaN(Number(e));
}
function Ri(n, e) {
  const t = O(n),
    a = O(e),
    r = t.getFullYear() - a.getFullYear(),
    s = t.getMonth() - a.getMonth();
  return r * 12 + s;
}
function $a(n, e, t) {
  const a = ie(n, t),
    r = ie(e, t),
    s = +a - Ie(a),
    i = +r - Ie(r);
  return Math.round((s - i) / nt);
}
function Ai(n) {
  const e = O(n),
    t = e.getMonth();
  return (
    e.setFullYear(e.getFullYear(), t + 1, 0),
    e.setHours(23, 59, 59, 999),
    e
  );
}
function Ia(n) {
  const e = O(n);
  return (e.setDate(1), e.setHours(0, 0, 0, 0), e);
}
function Fa(n) {
  const e = O(n),
    t = V(n, 0);
  return (t.setFullYear(e.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t);
}
function Va(n, e) {
  var o, d, c, l;
  const t = Te(),
    a =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((d = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) ==
      null
        ? void 0
        : d.weekStartsOn) ??
      t.weekStartsOn ??
      ((l = (c = t.locale) == null ? void 0 : c.options) == null
        ? void 0
        : l.weekStartsOn) ??
      0,
    r = O(n),
    s = r.getDay(),
    i = (s < a ? -7 : 0) + 6 - (s - a);
  return (r.setDate(r.getDate() + i), r.setHours(23, 59, 59, 999), r);
}
function ji(n) {
  return Va(n, { weekStartsOn: 1 });
}
const za = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  Za = (n, e, t) => {
    let a;
    const r = za[n];
    return (
      typeof r == "string"
        ? (a = r)
        : e === 1
          ? (a = r.one)
          : (a = r.other.replace("{{count}}", e.toString())),
      t != null && t.addSuffix
        ? t.comparison && t.comparison > 0
          ? "in " + a
          : a + " ago"
        : a
    );
  };
function Be(n) {
  return (e = {}) => {
    const t = e.width ? String(e.width) : n.defaultWidth;
    return n.formats[t] || n.formats[n.defaultWidth];
  };
}
const qa = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Ha = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Wa = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Ya = {
    date: Be({ formats: qa, defaultWidth: "full" }),
    time: Be({ formats: Ha, defaultWidth: "full" }),
    dateTime: Be({ formats: Wa, defaultWidth: "full" }),
  },
  Ua = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Ba = (n, e, t, a) => Ua[n];
function ve(n) {
  return (e, t) => {
    const a = t != null && t.context ? String(t.context) : "standalone";
    let r;
    if (a === "formatting" && n.formattingValues) {
      const i = n.defaultFormattingWidth || n.defaultWidth,
        o = t != null && t.width ? String(t.width) : i;
      r = n.formattingValues[o] || n.formattingValues[i];
    } else {
      const i = n.defaultWidth,
        o = t != null && t.width ? String(t.width) : n.defaultWidth;
      r = n.values[o] || n.values[i];
    }
    const s = n.argumentCallback ? n.argumentCallback(e) : e;
    return r[s];
  };
}
const Ka = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Ja = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Ga = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  Qa = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Xa = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  en = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  tn = (n, e) => {
    const t = Number(n),
      a = t % 100;
    if (a > 20 || a < 10)
      switch (a % 10) {
        case 1:
          return t + "st";
        case 2:
          return t + "nd";
        case 3:
          return t + "rd";
      }
    return t + "th";
  },
  an = {
    ordinalNumber: tn,
    era: ve({ values: Ka, defaultWidth: "wide" }),
    quarter: ve({
      values: Ja,
      defaultWidth: "wide",
      argumentCallback: (n) => n - 1,
    }),
    month: ve({ values: Ga, defaultWidth: "wide" }),
    day: ve({ values: Qa, defaultWidth: "wide" }),
    dayPeriod: ve({
      values: Xa,
      defaultWidth: "wide",
      formattingValues: en,
      defaultFormattingWidth: "wide",
    }),
  };
function xe(n) {
  return (e, t = {}) => {
    const a = t.width,
      r = (a && n.matchPatterns[a]) || n.matchPatterns[n.defaultMatchWidth],
      s = e.match(r);
    if (!s) return null;
    const i = s[0],
      o = (a && n.parsePatterns[a]) || n.parsePatterns[n.defaultParseWidth],
      d = Array.isArray(o) ? rn(o, (h) => h.test(i)) : nn(o, (h) => h.test(i));
    let c;
    ((c = n.valueCallback ? n.valueCallback(d) : d),
      (c = t.valueCallback ? t.valueCallback(c) : c));
    const l = e.slice(i.length);
    return { value: c, rest: l };
  };
}
function nn(n, e) {
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && e(n[t])) return t;
}
function rn(n, e) {
  for (let t = 0; t < n.length; t++) if (e(n[t])) return t;
}
function sn(n) {
  return (e, t = {}) => {
    const a = e.match(n.matchPattern);
    if (!a) return null;
    const r = a[0],
      s = e.match(n.parsePattern);
    if (!s) return null;
    let i = n.valueCallback ? n.valueCallback(s[0]) : s[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const o = e.slice(r.length);
    return { value: i, rest: o };
  };
}
const on = /^(\d+)(th|st|nd|rd)?/i,
  cn = /\d+/i,
  dn = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  ln = { any: [/^b/i, /^(a|c)/i] },
  un = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  hn = { any: [/1/i, /2/i, /3/i, /4/i] },
  fn = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  pn = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  gn = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  yn = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  mn = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  kn = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  vn = {
    ordinalNumber: sn({
      matchPattern: on,
      parsePattern: cn,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: xe({
      matchPatterns: dn,
      defaultMatchWidth: "wide",
      parsePatterns: ln,
      defaultParseWidth: "any",
    }),
    quarter: xe({
      matchPatterns: un,
      defaultMatchWidth: "wide",
      parsePatterns: hn,
      defaultParseWidth: "any",
      valueCallback: (n) => n + 1,
    }),
    month: xe({
      matchPatterns: fn,
      defaultMatchWidth: "wide",
      parsePatterns: pn,
      defaultParseWidth: "any",
    }),
    day: xe({
      matchPatterns: gn,
      defaultMatchWidth: "wide",
      parsePatterns: yn,
      defaultParseWidth: "any",
    }),
    dayPeriod: xe({
      matchPatterns: mn,
      defaultMatchWidth: "any",
      parsePatterns: kn,
      defaultParseWidth: "any",
    }),
  },
  xn = {
    code: "en-US",
    formatDistance: Za,
    formatLong: Ya,
    formatRelative: Ba,
    localize: an,
    match: vn,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function bn(n) {
  const e = O(n);
  return Aa(e, Fa(e)) + 1;
}
function wn(n) {
  const e = O(n),
    t = +De(e) - +ja(e);
  return Math.round(t / nt) + 1;
}
function Gt(n, e) {
  var l, h, k, y;
  const t = O(n),
    a = t.getFullYear(),
    r = Te(),
    s =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((h = (l = e == null ? void 0 : e.locale) == null ? void 0 : l.options) ==
      null
        ? void 0
        : h.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((y = (k = r.locale) == null ? void 0 : k.options) == null
        ? void 0
        : y.firstWeekContainsDate) ??
      1,
    i = V(n, 0);
  (i.setFullYear(a + 1, 0, s), i.setHours(0, 0, 0, 0));
  const o = ie(i, e),
    d = V(n, 0);
  (d.setFullYear(a, 0, s), d.setHours(0, 0, 0, 0));
  const c = ie(d, e);
  return t.getTime() >= o.getTime()
    ? a + 1
    : t.getTime() >= c.getTime()
      ? a
      : a - 1;
}
function _n(n, e) {
  var o, d, c, l;
  const t = Te(),
    a =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((d = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      t.firstWeekContainsDate ??
      ((l = (c = t.locale) == null ? void 0 : c.options) == null
        ? void 0
        : l.firstWeekContainsDate) ??
      1,
    r = Gt(n, e),
    s = V(n, 0);
  return (s.setFullYear(r, 0, a), s.setHours(0, 0, 0, 0), ie(s, e));
}
function Mn(n, e) {
  const t = O(n),
    a = +ie(t, e) - +_n(t, e);
  return Math.round(a / nt) + 1;
}
function L(n, e) {
  const t = n < 0 ? "-" : "",
    a = Math.abs(n).toString().padStart(e, "0");
  return t + a;
}
const G = {
    y(n, e) {
      const t = n.getFullYear(),
        a = t > 0 ? t : 1 - t;
      return L(e === "yy" ? a % 100 : a, e.length);
    },
    M(n, e) {
      const t = n.getMonth();
      return e === "M" ? String(t + 1) : L(t + 1, 2);
    },
    d(n, e) {
      return L(n.getDate(), e.length);
    },
    a(n, e) {
      const t = n.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return t.toUpperCase();
        case "aaa":
          return t;
        case "aaaaa":
          return t[0];
        case "aaaa":
        default:
          return t === "am" ? "a.m." : "p.m.";
      }
    },
    h(n, e) {
      return L(n.getHours() % 12 || 12, e.length);
    },
    H(n, e) {
      return L(n.getHours(), e.length);
    },
    m(n, e) {
      return L(n.getMinutes(), e.length);
    },
    s(n, e) {
      return L(n.getSeconds(), e.length);
    },
    S(n, e) {
      const t = e.length,
        a = n.getMilliseconds(),
        r = Math.trunc(a * Math.pow(10, t - 3));
      return L(r, e.length);
    },
  },
  ce = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Mt = {
    G: function (n, e, t) {
      const a = n.getFullYear() > 0 ? 1 : 0;
      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return t.era(a, { width: "abbreviated" });
        case "GGGGG":
          return t.era(a, { width: "narrow" });
        case "GGGG":
        default:
          return t.era(a, { width: "wide" });
      }
    },
    y: function (n, e, t) {
      if (e === "yo") {
        const a = n.getFullYear(),
          r = a > 0 ? a : 1 - a;
        return t.ordinalNumber(r, { unit: "year" });
      }
      return G.y(n, e);
    },
    Y: function (n, e, t, a) {
      const r = Gt(n, a),
        s = r > 0 ? r : 1 - r;
      if (e === "YY") {
        const i = s % 100;
        return L(i, 2);
      }
      return e === "Yo" ? t.ordinalNumber(s, { unit: "year" }) : L(s, e.length);
    },
    R: function (n, e) {
      const t = Jt(n);
      return L(t, e.length);
    },
    u: function (n, e) {
      const t = n.getFullYear();
      return L(t, e.length);
    },
    Q: function (n, e, t) {
      const a = Math.ceil((n.getMonth() + 1) / 3);
      switch (e) {
        case "Q":
          return String(a);
        case "QQ":
          return L(a, 2);
        case "Qo":
          return t.ordinalNumber(a, { unit: "quarter" });
        case "QQQ":
          return t.quarter(a, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return t.quarter(a, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return t.quarter(a, { width: "wide", context: "formatting" });
      }
    },
    q: function (n, e, t) {
      const a = Math.ceil((n.getMonth() + 1) / 3);
      switch (e) {
        case "q":
          return String(a);
        case "qq":
          return L(a, 2);
        case "qo":
          return t.ordinalNumber(a, { unit: "quarter" });
        case "qqq":
          return t.quarter(a, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return t.quarter(a, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return t.quarter(a, { width: "wide", context: "standalone" });
      }
    },
    M: function (n, e, t) {
      const a = n.getMonth();
      switch (e) {
        case "M":
        case "MM":
          return G.M(n, e);
        case "Mo":
          return t.ordinalNumber(a + 1, { unit: "month" });
        case "MMM":
          return t.month(a, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return t.month(a, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return t.month(a, { width: "wide", context: "formatting" });
      }
    },
    L: function (n, e, t) {
      const a = n.getMonth();
      switch (e) {
        case "L":
          return String(a + 1);
        case "LL":
          return L(a + 1, 2);
        case "Lo":
          return t.ordinalNumber(a + 1, { unit: "month" });
        case "LLL":
          return t.month(a, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return t.month(a, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return t.month(a, { width: "wide", context: "standalone" });
      }
    },
    w: function (n, e, t, a) {
      const r = Mn(n, a);
      return e === "wo" ? t.ordinalNumber(r, { unit: "week" }) : L(r, e.length);
    },
    I: function (n, e, t) {
      const a = wn(n);
      return e === "Io" ? t.ordinalNumber(a, { unit: "week" }) : L(a, e.length);
    },
    d: function (n, e, t) {
      return e === "do"
        ? t.ordinalNumber(n.getDate(), { unit: "date" })
        : G.d(n, e);
    },
    D: function (n, e, t) {
      const a = bn(n);
      return e === "Do"
        ? t.ordinalNumber(a, { unit: "dayOfYear" })
        : L(a, e.length);
    },
    E: function (n, e, t) {
      const a = n.getDay();
      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return t.day(a, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return t.day(a, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return t.day(a, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return t.day(a, { width: "wide", context: "formatting" });
      }
    },
    e: function (n, e, t, a) {
      const r = n.getDay(),
        s = (r - a.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "e":
          return String(s);
        case "ee":
          return L(s, 2);
        case "eo":
          return t.ordinalNumber(s, { unit: "day" });
        case "eee":
          return t.day(r, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return t.day(r, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return t.day(r, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return t.day(r, { width: "wide", context: "formatting" });
      }
    },
    c: function (n, e, t, a) {
      const r = n.getDay(),
        s = (r - a.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "c":
          return String(s);
        case "cc":
          return L(s, e.length);
        case "co":
          return t.ordinalNumber(s, { unit: "day" });
        case "ccc":
          return t.day(r, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return t.day(r, { width: "narrow", context: "standalone" });
        case "cccccc":
          return t.day(r, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return t.day(r, { width: "wide", context: "standalone" });
      }
    },
    i: function (n, e, t) {
      const a = n.getDay(),
        r = a === 0 ? 7 : a;
      switch (e) {
        case "i":
          return String(r);
        case "ii":
          return L(r, e.length);
        case "io":
          return t.ordinalNumber(r, { unit: "day" });
        case "iii":
          return t.day(a, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return t.day(a, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return t.day(a, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return t.day(a, { width: "wide", context: "formatting" });
      }
    },
    a: function (n, e, t) {
      const r = n.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return t.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return t
            .dayPeriod(r, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return t.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return t.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    b: function (n, e, t) {
      const a = n.getHours();
      let r;
      switch (
        (a === 12
          ? (r = ce.noon)
          : a === 0
            ? (r = ce.midnight)
            : (r = a / 12 >= 1 ? "pm" : "am"),
        e)
      ) {
        case "b":
        case "bb":
          return t.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return t
            .dayPeriod(r, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return t.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return t.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    B: function (n, e, t) {
      const a = n.getHours();
      let r;
      switch (
        (a >= 17
          ? (r = ce.evening)
          : a >= 12
            ? (r = ce.afternoon)
            : a >= 4
              ? (r = ce.morning)
              : (r = ce.night),
        e)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return t.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return t.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return t.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    h: function (n, e, t) {
      if (e === "ho") {
        let a = n.getHours() % 12;
        return (a === 0 && (a = 12), t.ordinalNumber(a, { unit: "hour" }));
      }
      return G.h(n, e);
    },
    H: function (n, e, t) {
      return e === "Ho"
        ? t.ordinalNumber(n.getHours(), { unit: "hour" })
        : G.H(n, e);
    },
    K: function (n, e, t) {
      const a = n.getHours() % 12;
      return e === "Ko" ? t.ordinalNumber(a, { unit: "hour" }) : L(a, e.length);
    },
    k: function (n, e, t) {
      let a = n.getHours();
      return (
        a === 0 && (a = 24),
        e === "ko" ? t.ordinalNumber(a, { unit: "hour" }) : L(a, e.length)
      );
    },
    m: function (n, e, t) {
      return e === "mo"
        ? t.ordinalNumber(n.getMinutes(), { unit: "minute" })
        : G.m(n, e);
    },
    s: function (n, e, t) {
      return e === "so"
        ? t.ordinalNumber(n.getSeconds(), { unit: "second" })
        : G.s(n, e);
    },
    S: function (n, e) {
      return G.S(n, e);
    },
    X: function (n, e, t) {
      const a = n.getTimezoneOffset();
      if (a === 0) return "Z";
      switch (e) {
        case "X":
          return St(a);
        case "XXXX":
        case "XX":
          return se(a);
        case "XXXXX":
        case "XXX":
        default:
          return se(a, ":");
      }
    },
    x: function (n, e, t) {
      const a = n.getTimezoneOffset();
      switch (e) {
        case "x":
          return St(a);
        case "xxxx":
        case "xx":
          return se(a);
        case "xxxxx":
        case "xxx":
        default:
          return se(a, ":");
      }
    },
    O: function (n, e, t) {
      const a = n.getTimezoneOffset();
      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Ot(a, ":");
        case "OOOO":
        default:
          return "GMT" + se(a, ":");
      }
    },
    z: function (n, e, t) {
      const a = n.getTimezoneOffset();
      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Ot(a, ":");
        case "zzzz":
        default:
          return "GMT" + se(a, ":");
      }
    },
    t: function (n, e, t) {
      const a = Math.trunc(n.getTime() / 1e3);
      return L(a, e.length);
    },
    T: function (n, e, t) {
      const a = n.getTime();
      return L(a, e.length);
    },
  };
function Ot(n, e = "") {
  const t = n > 0 ? "-" : "+",
    a = Math.abs(n),
    r = Math.trunc(a / 60),
    s = a % 60;
  return s === 0 ? t + String(r) : t + String(r) + e + L(s, 2);
}
function St(n, e) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + L(Math.abs(n) / 60, 2) : se(n, e);
}
function se(n, e = "") {
  const t = n > 0 ? "-" : "+",
    a = Math.abs(n),
    r = L(Math.trunc(a / 60), 2),
    s = L(a % 60, 2);
  return t + r + e + s;
}
const Ct = (n, e) => {
    switch (n) {
      case "P":
        return e.date({ width: "short" });
      case "PP":
        return e.date({ width: "medium" });
      case "PPP":
        return e.date({ width: "long" });
      case "PPPP":
      default:
        return e.date({ width: "full" });
    }
  },
  Qt = (n, e) => {
    switch (n) {
      case "p":
        return e.time({ width: "short" });
      case "pp":
        return e.time({ width: "medium" });
      case "ppp":
        return e.time({ width: "long" });
      case "pppp":
      default:
        return e.time({ width: "full" });
    }
  },
  On = (n, e) => {
    const t = n.match(/(P+)(p+)?/) || [],
      a = t[1],
      r = t[2];
    if (!r) return Ct(n, e);
    let s;
    switch (a) {
      case "P":
        s = e.dateTime({ width: "short" });
        break;
      case "PP":
        s = e.dateTime({ width: "medium" });
        break;
      case "PPP":
        s = e.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        s = e.dateTime({ width: "full" });
        break;
    }
    return s.replace("{{date}}", Ct(a, e)).replace("{{time}}", Qt(r, e));
  },
  Sn = { p: Qt, P: On },
  Cn = /^D+$/,
  Ln = /^Y+$/,
  Tn = ["D", "DD", "YY", "YYYY"];
function Nn(n) {
  return Cn.test(n);
}
function Pn(n) {
  return Ln.test(n);
}
function Rn(n, e, t) {
  const a = An(n, e, t);
  if ((console.warn(a), Tn.includes(n))) throw new RangeError(a);
}
function An(n, e, t) {
  const a = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${a} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const jn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  En = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Dn = /^'([^]*?)'?$/,
  $n = /''/g,
  In = /[a-zA-Z]/;
function Ei(n, e, t) {
  var l, h, k, y, p, M, T, j;
  const a = Te(),
    r = (t == null ? void 0 : t.locale) ?? a.locale ?? xn,
    s =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((h = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) ==
      null
        ? void 0
        : h.firstWeekContainsDate) ??
      a.firstWeekContainsDate ??
      ((y = (k = a.locale) == null ? void 0 : k.options) == null
        ? void 0
        : y.firstWeekContainsDate) ??
      1,
    i =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((M = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) ==
      null
        ? void 0
        : M.weekStartsOn) ??
      a.weekStartsOn ??
      ((j = (T = a.locale) == null ? void 0 : T.options) == null
        ? void 0
        : j.weekStartsOn) ??
      0,
    o = O(n);
  if (!Da(o)) throw new RangeError("Invalid time value");
  let d = e
    .match(En)
    .map((N) => {
      const P = N[0];
      if (P === "p" || P === "P") {
        const A = Sn[P];
        return A(N, r.formatLong);
      }
      return N;
    })
    .join("")
    .match(jn)
    .map((N) => {
      if (N === "''") return { isToken: !1, value: "'" };
      const P = N[0];
      if (P === "'") return { isToken: !1, value: Fn(N) };
      if (Mt[P]) return { isToken: !0, value: N };
      if (P.match(In))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            P +
            "`",
        );
      return { isToken: !1, value: N };
    });
  r.localize.preprocessor && (d = r.localize.preprocessor(o, d));
  const c = { firstWeekContainsDate: s, weekStartsOn: i, locale: r };
  return d
    .map((N) => {
      if (!N.isToken) return N.value;
      const P = N.value;
      ((!(t != null && t.useAdditionalWeekYearTokens) && Pn(P)) ||
        (!(t != null && t.useAdditionalDayOfYearTokens) && Nn(P))) &&
        Rn(P, e, String(n));
      const A = Mt[P[0]];
      return A(o, P, r.localize, c);
    })
    .join("");
}
function Fn(n) {
  const e = n.match(Dn);
  return e ? e[1].replace($n, "'") : n;
}
function Vn(n) {
  const e = O(n),
    t = e.getFullYear(),
    a = e.getMonth(),
    r = V(n, 0);
  return (r.setFullYear(t, a + 1, 0), r.setHours(0, 0, 0, 0), r.getDate());
}
function Di(n) {
  return Math.trunc(+O(n) / 1e3);
}
function zn(n) {
  const e = O(n),
    t = e.getMonth();
  return (e.setFullYear(e.getFullYear(), t + 1, 0), e.setHours(0, 0, 0, 0), e);
}
function $i(n, e) {
  return $a(zn(n), Ia(n), e) + 1;
}
function Ii(n, e) {
  const t = O(n),
    a = O(e);
  return t.getTime() > a.getTime();
}
function Fi(n, e) {
  const t = O(n),
    a = O(e);
  return +t < +a;
}
function Vi(n, e) {
  const t = O(n),
    a = O(e);
  return t.getFullYear() === a.getFullYear() && t.getMonth() === a.getMonth();
}
function zi(n, e) {
  const t = O(n),
    a = O(e);
  return t.getFullYear() === a.getFullYear();
}
function Zi(n, e) {
  return Kt(n, -e);
}
function qi(n, e) {
  const t = O(n),
    a = t.getFullYear(),
    r = t.getDate(),
    s = V(n, 0);
  (s.setFullYear(a, e, 15), s.setHours(0, 0, 0, 0));
  const i = Vn(s);
  return (t.setMonth(e, Math.min(r, i)), t);
}
function Hi(n, e) {
  const t = O(n);
  return isNaN(+t) ? V(n, NaN) : (t.setFullYear(e), t);
}
var C;
(function (n) {
  n.assertEqual = (r) => {};
  function e(r) {}
  n.assertIs = e;
  function t(r) {
    throw new Error();
  }
  ((n.assertNever = t),
    (n.arrayToEnum = (r) => {
      const s = {};
      for (const i of r) s[i] = i;
      return s;
    }),
    (n.getValidEnumValues = (r) => {
      const s = n.objectKeys(r).filter((o) => typeof r[r[o]] != "number"),
        i = {};
      for (const o of s) i[o] = r[o];
      return n.objectValues(i);
    }),
    (n.objectValues = (r) =>
      n.objectKeys(r).map(function (s) {
        return r[s];
      })),
    (n.objectKeys =
      typeof Object.keys == "function"
        ? (r) => Object.keys(r)
        : (r) => {
            const s = [];
            for (const i in r)
              Object.prototype.hasOwnProperty.call(r, i) && s.push(i);
            return s;
          }),
    (n.find = (r, s) => {
      for (const i of r) if (s(i)) return i;
    }),
    (n.isInteger =
      typeof Number.isInteger == "function"
        ? (r) => Number.isInteger(r)
        : (r) =>
            typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r));
  function a(r, s = " | ") {
    return r.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(s);
  }
  ((n.joinValues = a),
    (n.jsonStringifyReplacer = (r, s) =>
      typeof s == "bigint" ? s.toString() : s));
})(C || (C = {}));
var Lt;
(function (n) {
  n.mergeShapes = (e, t) => ({ ...e, ...t });
})(Lt || (Lt = {}));
const m = C.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Q = (n) => {
    switch (typeof n) {
      case "undefined":
        return m.undefined;
      case "string":
        return m.string;
      case "number":
        return Number.isNaN(n) ? m.nan : m.number;
      case "boolean":
        return m.boolean;
      case "function":
        return m.function;
      case "bigint":
        return m.bigint;
      case "symbol":
        return m.symbol;
      case "object":
        return Array.isArray(n)
          ? m.array
          : n === null
            ? m.null
            : n.then &&
                typeof n.then == "function" &&
                n.catch &&
                typeof n.catch == "function"
              ? m.promise
              : typeof Map < "u" && n instanceof Map
                ? m.map
                : typeof Set < "u" && n instanceof Set
                  ? m.set
                  : typeof Date < "u" && n instanceof Date
                    ? m.date
                    : m.object;
      default:
        return m.unknown;
    }
  },
  f = C.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class J extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    (super(),
      (this.issues = []),
      (this.addIssue = (a) => {
        this.issues = [...this.issues, a];
      }),
      (this.addIssues = (a = []) => {
        this.issues = [...this.issues, ...a];
      }));
    const t = new.target.prototype;
    (Object.setPrototypeOf
      ? Object.setPrototypeOf(this, t)
      : (this.__proto__ = t),
      (this.name = "ZodError"),
      (this.issues = e));
  }
  format(e) {
    const t =
        e ||
        function (s) {
          return s.message;
        },
      a = { _errors: [] },
      r = (s) => {
        for (const i of s.issues)
          if (i.code === "invalid_union") i.unionErrors.map(r);
          else if (i.code === "invalid_return_type") r(i.returnTypeError);
          else if (i.code === "invalid_arguments") r(i.argumentsError);
          else if (i.path.length === 0) a._errors.push(t(i));
          else {
            let o = a,
              d = 0;
            for (; d < i.path.length; ) {
              const c = i.path[d];
              (d === i.path.length - 1
                ? ((o[c] = o[c] || { _errors: [] }), o[c]._errors.push(t(i)))
                : (o[c] = o[c] || { _errors: [] }),
                (o = o[c]),
                d++);
            }
          }
      };
    return (r(this), a);
  }
  static assert(e) {
    if (!(e instanceof J)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, C.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {},
      a = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const s = r.path[0];
        ((t[s] = t[s] || []), t[s].push(e(r)));
      } else a.push(e(r));
    return { formErrors: a, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
J.create = (n) => new J(n);
const Ge = (n, e) => {
  let t;
  switch (n.code) {
    case f.invalid_type:
      n.received === m.undefined
        ? (t = "Required")
        : (t = `Expected ${n.expected}, received ${n.received}`);
      break;
    case f.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(n.expected, C.jsonStringifyReplacer)}`;
      break;
    case f.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${C.joinValues(n.keys, ", ")}`;
      break;
    case f.invalid_union:
      t = "Invalid input";
      break;
    case f.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${C.joinValues(n.options)}`;
      break;
    case f.invalid_enum_value:
      t = `Invalid enum value. Expected ${C.joinValues(n.options)}, received '${n.received}'`;
      break;
    case f.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case f.invalid_return_type:
      t = "Invalid function return type";
      break;
    case f.invalid_date:
      t = "Invalid date";
      break;
    case f.invalid_string:
      typeof n.validation == "object"
        ? "includes" in n.validation
          ? ((t = `Invalid input: must include "${n.validation.includes}"`),
            typeof n.validation.position == "number" &&
              (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`))
          : "startsWith" in n.validation
            ? (t = `Invalid input: must start with "${n.validation.startsWith}"`)
            : "endsWith" in n.validation
              ? (t = `Invalid input: must end with "${n.validation.endsWith}"`)
              : C.assertNever(n.validation)
        : n.validation !== "regex"
          ? (t = `Invalid ${n.validation}`)
          : (t = "Invalid");
      break;
    case f.too_small:
      n.type === "array"
        ? (t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)`)
        : n.type === "string"
          ? (t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)`)
          : n.type === "number"
            ? (t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}`)
            : n.type === "bigint"
              ? (t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}`)
              : n.type === "date"
                ? (t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}`)
                : (t = "Invalid input");
      break;
    case f.too_big:
      n.type === "array"
        ? (t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)`)
        : n.type === "string"
          ? (t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)`)
          : n.type === "number"
            ? (t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}`)
            : n.type === "bigint"
              ? (t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}`)
              : n.type === "date"
                ? (t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}`)
                : (t = "Invalid input");
      break;
    case f.custom:
      t = "Invalid input";
      break;
    case f.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case f.not_multiple_of:
      t = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case f.not_finite:
      t = "Number must be finite";
      break;
    default:
      ((t = e.defaultError), C.assertNever(n));
  }
  return { message: t };
};
let Zn = Ge;
function qn() {
  return Zn;
}
const Hn = (n) => {
  const { data: e, path: t, errorMaps: a, issueData: r } = n,
    s = [...t, ...(r.path || [])],
    i = { ...r, path: s };
  if (r.message !== void 0) return { ...r, path: s, message: r.message };
  let o = "";
  const d = a
    .filter((c) => !!c)
    .slice()
    .reverse();
  for (const c of d) o = c(i, { data: e, defaultError: o }).message;
  return { ...r, path: s, message: o };
};
function g(n, e) {
  const t = qn(),
    a = Hn({
      issueData: e,
      data: n.data,
      path: n.path,
      errorMaps: [
        n.common.contextualErrorMap,
        n.schemaErrorMap,
        t,
        t === Ge ? void 0 : Ge,
      ].filter((r) => !!r),
    });
  n.common.issues.push(a);
}
class z {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const a = [];
    for (const r of t) {
      if (r.status === "aborted") return b;
      (r.status === "dirty" && e.dirty(), a.push(r.value));
    }
    return { status: e.value, value: a };
  }
  static async mergeObjectAsync(e, t) {
    const a = [];
    for (const r of t) {
      const s = await r.key,
        i = await r.value;
      a.push({ key: s, value: i });
    }
    return z.mergeObjectSync(e, a);
  }
  static mergeObjectSync(e, t) {
    const a = {};
    for (const r of t) {
      const { key: s, value: i } = r;
      if (s.status === "aborted" || i.status === "aborted") return b;
      (s.status === "dirty" && e.dirty(),
        i.status === "dirty" && e.dirty(),
        s.value !== "__proto__" &&
          (typeof i.value < "u" || r.alwaysSet) &&
          (a[s.value] = i.value));
    }
    return { status: e.value, value: a };
  }
}
const b = Object.freeze({ status: "aborted" }),
  be = (n) => ({ status: "dirty", value: n }),
  Z = (n) => ({ status: "valid", value: n }),
  Tt = (n) => n.status === "aborted",
  Nt = (n) => n.status === "dirty",
  le = (n) => n.status === "valid",
  Fe = (n) => typeof Promise < "u" && n instanceof Promise;
var v;
(function (n) {
  ((n.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (n.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message));
})(v || (v = {}));
class te {
  constructor(e, t, a, r) {
    ((this._cachedPath = []),
      (this.parent = e),
      (this.data = t),
      (this._path = a),
      (this._key = r));
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Pt = (n, e) => {
  if (le(e)) return { success: !0, data: e.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const t = new J(n.common.issues);
      return ((this._error = t), this._error);
    },
  };
};
function _(n) {
  if (!n) return {};
  const {
    errorMap: e,
    invalid_type_error: t,
    required_error: a,
    description: r,
  } = n;
  if (e && (t || a))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return e
    ? { errorMap: e, description: r }
    : {
        errorMap: (i, o) => {
          const { message: d } = n;
          return i.code === "invalid_enum_value"
            ? { message: d ?? o.defaultError }
            : typeof o.data > "u"
              ? { message: d ?? a ?? o.defaultError }
              : i.code !== "invalid_type"
                ? { message: o.defaultError }
                : { message: d ?? t ?? o.defaultError };
        },
        description: r,
      };
}
class S {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Q(e.data);
  }
  _getOrReturnCtx(e, t) {
    return (
      t || {
        common: e.parent.common,
        data: e.data,
        parsedType: Q(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new z(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Q(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Fe(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const a = this.safeParse(e, t);
    if (a.success) return a.data;
    throw a.error;
  }
  safeParse(e, t) {
    const a = {
        common: {
          issues: [],
          async: (t == null ? void 0 : t.async) ?? !1,
          contextualErrorMap: t == null ? void 0 : t.errorMap,
        },
        path: (t == null ? void 0 : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Q(e),
      },
      r = this._parseSync({ data: e, path: a.path, parent: a });
    return Pt(a, r);
  }
  "~validate"(e) {
    var a, r;
    const t = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Q(e),
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: e, path: [], parent: t });
        return le(s) ? { value: s.value } : { issues: t.common.issues };
      } catch (s) {
        ((r =
          (a = s == null ? void 0 : s.message) == null
            ? void 0
            : a.toLowerCase()) != null &&
          r.includes("encountered") &&
          (this["~standard"].async = !0),
          (t.common = { issues: [], async: !0 }));
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((s) =>
      le(s) ? { value: s.value } : { issues: t.common.issues },
    );
  }
  async parseAsync(e, t) {
    const a = await this.safeParseAsync(e, t);
    if (a.success) return a.data;
    throw a.error;
  }
  async safeParseAsync(e, t) {
    const a = {
        common: {
          issues: [],
          contextualErrorMap: t == null ? void 0 : t.errorMap,
          async: !0,
        },
        path: (t == null ? void 0 : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Q(e),
      },
      r = this._parse({ data: e, path: a.path, parent: a }),
      s = await (Fe(r) ? r : Promise.resolve(r));
    return Pt(a, s);
  }
  refine(e, t) {
    const a = (r) =>
      typeof t == "string" || typeof t > "u"
        ? { message: t }
        : typeof t == "function"
          ? t(r)
          : t;
    return this._refinement((r, s) => {
      const i = e(r),
        o = () => s.addIssue({ code: f.custom, ...a(r) });
      return typeof Promise < "u" && i instanceof Promise
        ? i.then((d) => (d ? !0 : (o(), !1)))
        : i
          ? !0
          : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((a, r) =>
      e(a) ? !0 : (r.addIssue(typeof t == "function" ? t(a, r) : t), !1),
    );
  }
  _refinement(e) {
    return new fe({
      schema: this,
      typeName: w.ZodEffects,
      effect: { type: "refinement", refinement: e },
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    ((this.spa = this.safeParseAsync),
      (this._def = e),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (t) => this["~validate"](t),
      }));
  }
  optional() {
    return ee.create(this, this._def);
  }
  nullable() {
    return pe.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Y.create(this);
  }
  promise() {
    return qe.create(this, this._def);
  }
  or(e) {
    return ze.create([this, e], this._def);
  }
  and(e) {
    return Ze.create(this, e, this._def);
  }
  transform(e) {
    return new fe({
      ..._(this._def),
      schema: this,
      typeName: w.ZodEffects,
      effect: { type: "transform", transform: e },
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new et({
      ..._(this._def),
      innerType: this,
      defaultValue: t,
      typeName: w.ZodDefault,
    });
  }
  brand() {
    return new fr({ typeName: w.ZodBranded, type: this, ..._(this._def) });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new tt({
      ..._(this._def),
      innerType: this,
      catchValue: t,
      typeName: w.ZodCatch,
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({ ...this._def, description: e });
  }
  pipe(e) {
    return rt.create(this, e);
  }
  readonly() {
    return at.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Wn = /^c[^\s-]{8,}$/i,
  Yn = /^[0-9a-z]+$/,
  Un = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Bn =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Kn = /^[a-z0-9_-]{21}$/i,
  Jn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Gn =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Qn =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Xn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ke;
const er =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  tr =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  ar =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  nr =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  rr = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  sr = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Xt =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  ir = new RegExp(`^${Xt}$`);
function ea(n) {
  let e = "[0-5]\\d";
  n.precision
    ? (e = `${e}\\.\\d{${n.precision}}`)
    : n.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = n.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function or(n) {
  return new RegExp(`^${ea(n)}$`);
}
function cr(n) {
  let e = `${Xt}T${ea(n)}`;
  const t = [];
  return (
    t.push(n.local ? "Z?" : "Z"),
    n.offset && t.push("([+-]\\d{2}:?\\d{2})"),
    (e = `${e}(${t.join("|")})`),
    new RegExp(`^${e}$`)
  );
}
function dr(n, e) {
  return !!(
    ((e === "v4" || !e) && er.test(n)) ||
    ((e === "v6" || !e) && ar.test(n))
  );
}
function lr(n, e) {
  if (!Jn.test(n)) return !1;
  try {
    const [t] = n.split(".");
    if (!t) return !1;
    const a = t
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(t.length + ((4 - (t.length % 4)) % 4), "="),
      r = JSON.parse(atob(a));
    return !(
      typeof r != "object" ||
      r === null ||
      ("typ" in r && (r == null ? void 0 : r.typ) !== "JWT") ||
      !r.alg ||
      (e && r.alg !== e)
    );
  } catch {
    return !1;
  }
}
function ur(n, e) {
  return !!(
    ((e === "v4" || !e) && tr.test(n)) ||
    ((e === "v6" || !e) && nr.test(n))
  );
}
class X extends S {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== m.string)
    ) {
      const s = this._getOrReturnCtx(e);
      return (
        g(s, {
          code: f.invalid_type,
          expected: m.string,
          received: s.parsedType,
        }),
        b
      );
    }
    const a = new z();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value &&
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            code: f.too_small,
            minimum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "max")
        e.data.length > s.value &&
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            code: f.too_big,
            maximum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "length") {
        const i = e.data.length > s.value,
          o = e.data.length < s.value;
        (i || o) &&
          ((r = this._getOrReturnCtx(e, r)),
          i
            ? g(r, {
                code: f.too_big,
                maximum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : o &&
              g(r, {
                code: f.too_small,
                minimum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          a.dirty());
      } else if (s.kind === "email")
        Qn.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            validation: "email",
            code: f.invalid_string,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "emoji")
        (Ke || (Ke = new RegExp(Xn, "u")),
          Ke.test(e.data) ||
            ((r = this._getOrReturnCtx(e, r)),
            g(r, {
              validation: "emoji",
              code: f.invalid_string,
              message: s.message,
            }),
            a.dirty()));
      else if (s.kind === "uuid")
        Bn.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            validation: "uuid",
            code: f.invalid_string,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "nanoid")
        Kn.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            validation: "nanoid",
            code: f.invalid_string,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "cuid")
        Wn.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            validation: "cuid",
            code: f.invalid_string,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "cuid2")
        Yn.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            validation: "cuid2",
            code: f.invalid_string,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "ulid")
        Un.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            validation: "ulid",
            code: f.invalid_string,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          ((r = this._getOrReturnCtx(e, r)),
            g(r, {
              validation: "url",
              code: f.invalid_string,
              message: s.message,
            }),
            a.dirty());
        }
      else
        s.kind === "regex"
          ? ((s.regex.lastIndex = 0),
            s.regex.test(e.data) ||
              ((r = this._getOrReturnCtx(e, r)),
              g(r, {
                validation: "regex",
                code: f.invalid_string,
                message: s.message,
              }),
              a.dirty()))
          : s.kind === "trim"
            ? (e.data = e.data.trim())
            : s.kind === "includes"
              ? e.data.includes(s.value, s.position) ||
                ((r = this._getOrReturnCtx(e, r)),
                g(r, {
                  code: f.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message,
                }),
                a.dirty())
              : s.kind === "toLowerCase"
                ? (e.data = e.data.toLowerCase())
                : s.kind === "toUpperCase"
                  ? (e.data = e.data.toUpperCase())
                  : s.kind === "startsWith"
                    ? e.data.startsWith(s.value) ||
                      ((r = this._getOrReturnCtx(e, r)),
                      g(r, {
                        code: f.invalid_string,
                        validation: { startsWith: s.value },
                        message: s.message,
                      }),
                      a.dirty())
                    : s.kind === "endsWith"
                      ? e.data.endsWith(s.value) ||
                        ((r = this._getOrReturnCtx(e, r)),
                        g(r, {
                          code: f.invalid_string,
                          validation: { endsWith: s.value },
                          message: s.message,
                        }),
                        a.dirty())
                      : s.kind === "datetime"
                        ? cr(s).test(e.data) ||
                          ((r = this._getOrReturnCtx(e, r)),
                          g(r, {
                            code: f.invalid_string,
                            validation: "datetime",
                            message: s.message,
                          }),
                          a.dirty())
                        : s.kind === "date"
                          ? ir.test(e.data) ||
                            ((r = this._getOrReturnCtx(e, r)),
                            g(r, {
                              code: f.invalid_string,
                              validation: "date",
                              message: s.message,
                            }),
                            a.dirty())
                          : s.kind === "time"
                            ? or(s).test(e.data) ||
                              ((r = this._getOrReturnCtx(e, r)),
                              g(r, {
                                code: f.invalid_string,
                                validation: "time",
                                message: s.message,
                              }),
                              a.dirty())
                            : s.kind === "duration"
                              ? Gn.test(e.data) ||
                                ((r = this._getOrReturnCtx(e, r)),
                                g(r, {
                                  validation: "duration",
                                  code: f.invalid_string,
                                  message: s.message,
                                }),
                                a.dirty())
                              : s.kind === "ip"
                                ? dr(e.data, s.version) ||
                                  ((r = this._getOrReturnCtx(e, r)),
                                  g(r, {
                                    validation: "ip",
                                    code: f.invalid_string,
                                    message: s.message,
                                  }),
                                  a.dirty())
                                : s.kind === "jwt"
                                  ? lr(e.data, s.alg) ||
                                    ((r = this._getOrReturnCtx(e, r)),
                                    g(r, {
                                      validation: "jwt",
                                      code: f.invalid_string,
                                      message: s.message,
                                    }),
                                    a.dirty())
                                  : s.kind === "cidr"
                                    ? ur(e.data, s.version) ||
                                      ((r = this._getOrReturnCtx(e, r)),
                                      g(r, {
                                        validation: "cidr",
                                        code: f.invalid_string,
                                        message: s.message,
                                      }),
                                      a.dirty())
                                    : s.kind === "base64"
                                      ? rr.test(e.data) ||
                                        ((r = this._getOrReturnCtx(e, r)),
                                        g(r, {
                                          validation: "base64",
                                          code: f.invalid_string,
                                          message: s.message,
                                        }),
                                        a.dirty())
                                      : s.kind === "base64url"
                                        ? sr.test(e.data) ||
                                          ((r = this._getOrReturnCtx(e, r)),
                                          g(r, {
                                            validation: "base64url",
                                            code: f.invalid_string,
                                            message: s.message,
                                          }),
                                          a.dirty())
                                        : C.assertNever(s);
    return { status: a.value, value: e.data };
  }
  _regex(e, t, a) {
    return this.refinement((r) => e.test(r), {
      validation: t,
      code: f.invalid_string,
      ...v.errToObj(a),
    });
  }
  _addCheck(e) {
    return new X({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...v.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...v.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...v.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...v.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...v.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...v.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...v.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...v.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...v.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: "base64url", ...v.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...v.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...v.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...v.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
                ? void 0
                : e.precision,
          offset: (e == null ? void 0 : e.offset) ?? !1,
          local: (e == null ? void 0 : e.local) ?? !1,
          ...v.errToObj(e == null ? void 0 : e.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string"
      ? this._addCheck({ kind: "time", precision: null, message: e })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
                ? void 0
                : e.precision,
          ...v.errToObj(e == null ? void 0 : e.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...v.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: "regex", regex: e, ...v.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...v.errToObj(t == null ? void 0 : t.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: "startsWith", value: e, ...v.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: "endsWith", value: e, ...v.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e, ...v.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e, ...v.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: "length", value: e, ...v.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, v.errToObj(e));
  }
  trim() {
    return new X({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new X({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new X({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
X.create = (n) =>
  new X({
    checks: [],
    typeName: w.ZodString,
    coerce: (n == null ? void 0 : n.coerce) ?? !1,
    ..._(n),
  });
function hr(n, e) {
  const t = (n.toString().split(".")[1] || "").length,
    a = (e.toString().split(".")[1] || "").length,
    r = t > a ? t : a,
    s = Number.parseInt(n.toFixed(r).replace(".", "")),
    i = Number.parseInt(e.toFixed(r).replace(".", ""));
  return (s % i) / 10 ** r;
}
class ue extends S {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== m.number)
    ) {
      const s = this._getOrReturnCtx(e);
      return (
        g(s, {
          code: f.invalid_type,
          expected: m.number,
          received: s.parsedType,
        }),
        b
      );
    }
    let a;
    const r = new z();
    for (const s of this._def.checks)
      s.kind === "int"
        ? C.isInteger(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          g(a, {
            code: f.invalid_type,
            expected: "integer",
            received: "float",
            message: s.message,
          }),
          r.dirty())
        : s.kind === "min"
          ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
            ((a = this._getOrReturnCtx(e, a)),
            g(a, {
              code: f.too_small,
              minimum: s.value,
              type: "number",
              inclusive: s.inclusive,
              exact: !1,
              message: s.message,
            }),
            r.dirty())
          : s.kind === "max"
            ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
              ((a = this._getOrReturnCtx(e, a)),
              g(a, {
                code: f.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message,
              }),
              r.dirty())
            : s.kind === "multipleOf"
              ? hr(e.data, s.value) !== 0 &&
                ((a = this._getOrReturnCtx(e, a)),
                g(a, {
                  code: f.not_multiple_of,
                  multipleOf: s.value,
                  message: s.message,
                }),
                r.dirty())
              : s.kind === "finite"
                ? Number.isFinite(e.data) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  g(a, { code: f.not_finite, message: s.message }),
                  r.dirty())
                : C.assertNever(s);
    return { status: r.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, v.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, v.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, v.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, v.toString(t));
  }
  setLimit(e, t, a, r) {
    return new ue({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: a, message: v.toString(r) },
      ],
    });
  }
  _addCheck(e) {
    return new ue({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: v.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: v.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: v.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: v.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: v.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: v.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: v.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: v.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: v.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && C.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (const a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf")
        return !0;
      a.kind === "min"
        ? (t === null || a.value > t) && (t = a.value)
        : a.kind === "max" && (e === null || a.value < e) && (e = a.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
ue.create = (n) =>
  new ue({
    checks: [],
    typeName: w.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ..._(n),
  });
class Ce extends S {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== m.bigint) return this._getInvalidInput(e);
    let a;
    const r = new z();
    for (const s of this._def.checks)
      s.kind === "min"
        ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
          ((a = this._getOrReturnCtx(e, a)),
          g(a, {
            code: f.too_small,
            type: "bigint",
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          r.dirty())
        : s.kind === "max"
          ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
            ((a = this._getOrReturnCtx(e, a)),
            g(a, {
              code: f.too_big,
              type: "bigint",
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            r.dirty())
          : s.kind === "multipleOf"
            ? e.data % s.value !== BigInt(0) &&
              ((a = this._getOrReturnCtx(e, a)),
              g(a, {
                code: f.not_multiple_of,
                multipleOf: s.value,
                message: s.message,
              }),
              r.dirty())
            : C.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return (
      g(t, {
        code: f.invalid_type,
        expected: m.bigint,
        received: t.parsedType,
      }),
      b
    );
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, v.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, v.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, v.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, v.toString(t));
  }
  setLimit(e, t, a, r) {
    return new Ce({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: a, message: v.toString(r) },
      ],
    });
  }
  _addCheck(e) {
    return new Ce({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: v.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: v.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: v.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: v.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: v.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Ce.create = (n) =>
  new Ce({
    checks: [],
    typeName: w.ZodBigInt,
    coerce: (n == null ? void 0 : n.coerce) ?? !1,
    ..._(n),
  });
class Qe extends S {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        g(a, {
          code: f.invalid_type,
          expected: m.boolean,
          received: a.parsedType,
        }),
        b
      );
    }
    return Z(e.data);
  }
}
Qe.create = (n) =>
  new Qe({
    typeName: w.ZodBoolean,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ..._(n),
  });
class Ve extends S {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== m.date)
    ) {
      const s = this._getOrReturnCtx(e);
      return (
        g(s, {
          code: f.invalid_type,
          expected: m.date,
          received: s.parsedType,
        }),
        b
      );
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return (g(s, { code: f.invalid_date }), b);
    }
    const a = new z();
    let r;
    for (const s of this._def.checks)
      s.kind === "min"
        ? e.data.getTime() < s.value &&
          ((r = this._getOrReturnCtx(e, r)),
          g(r, {
            code: f.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: "date",
          }),
          a.dirty())
        : s.kind === "max"
          ? e.data.getTime() > s.value &&
            ((r = this._getOrReturnCtx(e, r)),
            g(r, {
              code: f.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: "date",
            }),
            a.dirty())
          : C.assertNever(s);
    return { status: a.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new Ve({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: v.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: v.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
Ve.create = (n) =>
  new Ve({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: w.ZodDate,
    ..._(n),
  });
class Rt extends S {
  _parse(e) {
    if (this._getType(e) !== m.symbol) {
      const a = this._getOrReturnCtx(e);
      return (
        g(a, {
          code: f.invalid_type,
          expected: m.symbol,
          received: a.parsedType,
        }),
        b
      );
    }
    return Z(e.data);
  }
}
Rt.create = (n) => new Rt({ typeName: w.ZodSymbol, ..._(n) });
class At extends S {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const a = this._getOrReturnCtx(e);
      return (
        g(a, {
          code: f.invalid_type,
          expected: m.undefined,
          received: a.parsedType,
        }),
        b
      );
    }
    return Z(e.data);
  }
}
At.create = (n) => new At({ typeName: w.ZodUndefined, ..._(n) });
class jt extends S {
  _parse(e) {
    if (this._getType(e) !== m.null) {
      const a = this._getOrReturnCtx(e);
      return (
        g(a, {
          code: f.invalid_type,
          expected: m.null,
          received: a.parsedType,
        }),
        b
      );
    }
    return Z(e.data);
  }
}
jt.create = (n) => new jt({ typeName: w.ZodNull, ..._(n) });
class Et extends S {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(e) {
    return Z(e.data);
  }
}
Et.create = (n) => new Et({ typeName: w.ZodAny, ..._(n) });
class Dt extends S {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(e) {
    return Z(e.data);
  }
}
Dt.create = (n) => new Dt({ typeName: w.ZodUnknown, ..._(n) });
class ae extends S {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return (
      g(t, { code: f.invalid_type, expected: m.never, received: t.parsedType }),
      b
    );
  }
}
ae.create = (n) => new ae({ typeName: w.ZodNever, ..._(n) });
class $t extends S {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const a = this._getOrReturnCtx(e);
      return (
        g(a, {
          code: f.invalid_type,
          expected: m.void,
          received: a.parsedType,
        }),
        b
      );
    }
    return Z(e.data);
  }
}
$t.create = (n) => new $t({ typeName: w.ZodVoid, ..._(n) });
class Y extends S {
  _parse(e) {
    const { ctx: t, status: a } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== m.array)
      return (
        g(t, {
          code: f.invalid_type,
          expected: m.array,
          received: t.parsedType,
        }),
        b
      );
    if (r.exactLength !== null) {
      const i = t.data.length > r.exactLength.value,
        o = t.data.length < r.exactLength.value;
      (i || o) &&
        (g(t, {
          code: i ? f.too_big : f.too_small,
          minimum: o ? r.exactLength.value : void 0,
          maximum: i ? r.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        a.dirty());
    }
    if (
      (r.minLength !== null &&
        t.data.length < r.minLength.value &&
        (g(t, {
          code: f.too_small,
          minimum: r.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        a.dirty()),
      r.maxLength !== null &&
        t.data.length > r.maxLength.value &&
        (g(t, {
          code: f.too_big,
          maximum: r.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        a.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((i, o) => r.type._parseAsync(new te(t, i, t.path, o))),
      ).then((i) => z.mergeArray(a, i));
    const s = [...t.data].map((i, o) =>
      r.type._parseSync(new te(t, i, t.path, o)),
    );
    return z.mergeArray(a, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Y({
      ...this._def,
      minLength: { value: e, message: v.toString(t) },
    });
  }
  max(e, t) {
    return new Y({
      ...this._def,
      maxLength: { value: e, message: v.toString(t) },
    });
  }
  length(e, t) {
    return new Y({
      ...this._def,
      exactLength: { value: e, message: v.toString(t) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Y.create = (n, e) =>
  new Y({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: w.ZodArray,
    ..._(e),
  });
function de(n) {
  if (n instanceof R) {
    const e = {};
    for (const t in n.shape) {
      const a = n.shape[t];
      e[t] = ee.create(de(a));
    }
    return new R({ ...n._def, shape: () => e });
  } else
    return n instanceof Y
      ? new Y({ ...n._def, type: de(n.element) })
      : n instanceof ee
        ? ee.create(de(n.unwrap()))
        : n instanceof pe
          ? pe.create(de(n.unwrap()))
          : n instanceof oe
            ? oe.create(n.items.map((e) => de(e)))
            : n;
}
class R extends S {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      t = C.objectKeys(e);
    return ((this._cached = { shape: e, keys: t }), this._cached);
  }
  _parse(e) {
    if (this._getType(e) !== m.object) {
      const c = this._getOrReturnCtx(e);
      return (
        g(c, {
          code: f.invalid_type,
          expected: m.object,
          received: c.parsedType,
        }),
        b
      );
    }
    const { status: a, ctx: r } = this._processInputParams(e),
      { shape: s, keys: i } = this._getCached(),
      o = [];
    if (
      !(this._def.catchall instanceof ae && this._def.unknownKeys === "strip")
    )
      for (const c in r.data) i.includes(c) || o.push(c);
    const d = [];
    for (const c of i) {
      const l = s[c],
        h = r.data[c];
      d.push({
        key: { status: "valid", value: c },
        value: l._parse(new te(r, h, r.path, c)),
        alwaysSet: c in r.data,
      });
    }
    if (this._def.catchall instanceof ae) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const l of o)
          d.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: r.data[l] },
          });
      else if (c === "strict")
        o.length > 0 &&
          (g(r, { code: f.unrecognized_keys, keys: o }), a.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const l of o) {
        const h = r.data[l];
        d.push({
          key: { status: "valid", value: l },
          value: c._parse(new te(r, h, r.path, l)),
          alwaysSet: l in r.data,
        });
      }
    }
    return r.common.async
      ? Promise.resolve()
          .then(async () => {
            const c = [];
            for (const l of d) {
              const h = await l.key,
                k = await l.value;
              c.push({ key: h, value: k, alwaysSet: l.alwaysSet });
            }
            return c;
          })
          .then((c) => z.mergeObjectSync(a, c))
      : z.mergeObjectSync(a, d);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      v.errToObj,
      new R({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (t, a) => {
                var s, i;
                const r =
                  ((i = (s = this._def).errorMap) == null
                    ? void 0
                    : i.call(s, t, a).message) ?? a.defaultError;
                return t.code === "unrecognized_keys"
                  ? { message: v.errToObj(e).message ?? r }
                  : { message: r };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new R({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new R({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new R({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new R({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: w.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new R({ ...this._def, catchall: e });
  }
  pick(e) {
    const t = {};
    for (const a of C.objectKeys(e))
      e[a] && this.shape[a] && (t[a] = this.shape[a]);
    return new R({ ...this._def, shape: () => t });
  }
  omit(e) {
    const t = {};
    for (const a of C.objectKeys(this.shape)) e[a] || (t[a] = this.shape[a]);
    return new R({ ...this._def, shape: () => t });
  }
  deepPartial() {
    return de(this);
  }
  partial(e) {
    const t = {};
    for (const a of C.objectKeys(this.shape)) {
      const r = this.shape[a];
      e && !e[a] ? (t[a] = r) : (t[a] = r.optional());
    }
    return new R({ ...this._def, shape: () => t });
  }
  required(e) {
    const t = {};
    for (const a of C.objectKeys(this.shape))
      if (e && !e[a]) t[a] = this.shape[a];
      else {
        let s = this.shape[a];
        for (; s instanceof ee; ) s = s._def.innerType;
        t[a] = s;
      }
    return new R({ ...this._def, shape: () => t });
  }
  keyof() {
    return ta(C.objectKeys(this.shape));
  }
}
R.create = (n, e) =>
  new R({
    shape: () => n,
    unknownKeys: "strip",
    catchall: ae.create(),
    typeName: w.ZodObject,
    ..._(e),
  });
R.strictCreate = (n, e) =>
  new R({
    shape: () => n,
    unknownKeys: "strict",
    catchall: ae.create(),
    typeName: w.ZodObject,
    ..._(e),
  });
R.lazycreate = (n, e) =>
  new R({
    shape: n,
    unknownKeys: "strip",
    catchall: ae.create(),
    typeName: w.ZodObject,
    ..._(e),
  });
class ze extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      a = this._def.options;
    function r(s) {
      for (const o of s) if (o.result.status === "valid") return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return (t.common.issues.push(...o.ctx.common.issues), o.result);
      const i = s.map((o) => new J(o.ctx.common.issues));
      return (g(t, { code: f.invalid_union, unionErrors: i }), b);
    }
    if (t.common.async)
      return Promise.all(
        a.map(async (s) => {
          const i = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return {
            result: await s._parseAsync({
              data: t.data,
              path: t.path,
              parent: i,
            }),
            ctx: i,
          };
        }),
      ).then(r);
    {
      let s;
      const i = [];
      for (const d of a) {
        const c = { ...t, common: { ...t.common, issues: [] }, parent: null },
          l = d._parseSync({ data: t.data, path: t.path, parent: c });
        if (l.status === "valid") return l;
        (l.status === "dirty" && !s && (s = { result: l, ctx: c }),
          c.common.issues.length && i.push(c.common.issues));
      }
      if (s) return (t.common.issues.push(...s.ctx.common.issues), s.result);
      const o = i.map((d) => new J(d));
      return (g(t, { code: f.invalid_union, unionErrors: o }), b);
    }
  }
  get options() {
    return this._def.options;
  }
}
ze.create = (n, e) => new ze({ options: n, typeName: w.ZodUnion, ..._(e) });
function Xe(n, e) {
  const t = Q(n),
    a = Q(e);
  if (n === e) return { valid: !0, data: n };
  if (t === m.object && a === m.object) {
    const r = C.objectKeys(e),
      s = C.objectKeys(n).filter((o) => r.indexOf(o) !== -1),
      i = { ...n, ...e };
    for (const o of s) {
      const d = Xe(n[o], e[o]);
      if (!d.valid) return { valid: !1 };
      i[o] = d.data;
    }
    return { valid: !0, data: i };
  } else if (t === m.array && a === m.array) {
    if (n.length !== e.length) return { valid: !1 };
    const r = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s],
        o = e[s],
        d = Xe(i, o);
      if (!d.valid) return { valid: !1 };
      r.push(d.data);
    }
    return { valid: !0, data: r };
  } else
    return t === m.date && a === m.date && +n == +e
      ? { valid: !0, data: n }
      : { valid: !1 };
}
class Ze extends S {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e),
      r = (s, i) => {
        if (Tt(s) || Tt(i)) return b;
        const o = Xe(s.value, i.value);
        return o.valid
          ? ((Nt(s) || Nt(i)) && t.dirty(), { status: t.value, value: o.data })
          : (g(a, { code: f.invalid_intersection_types }), b);
      };
    return a.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseAsync({
            data: a.data,
            path: a.path,
            parent: a,
          }),
        ]).then(([s, i]) => r(s, i))
      : r(
          this._def.left._parseSync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseSync({ data: a.data, path: a.path, parent: a }),
        );
  }
}
Ze.create = (n, e, t) =>
  new Ze({ left: n, right: e, typeName: w.ZodIntersection, ..._(t) });
class oe extends S {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.array)
      return (
        g(a, {
          code: f.invalid_type,
          expected: m.array,
          received: a.parsedType,
        }),
        b
      );
    if (a.data.length < this._def.items.length)
      return (
        g(a, {
          code: f.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        b
      );
    !this._def.rest &&
      a.data.length > this._def.items.length &&
      (g(a, {
        code: f.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      t.dirty());
    const s = [...a.data]
      .map((i, o) => {
        const d = this._def.items[o] || this._def.rest;
        return d ? d._parse(new te(a, i, a.path, o)) : null;
      })
      .filter((i) => !!i);
    return a.common.async
      ? Promise.all(s).then((i) => z.mergeArray(t, i))
      : z.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new oe({ ...this._def, rest: e });
  }
}
oe.create = (n, e) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new oe({ items: n, typeName: w.ZodTuple, rest: null, ..._(e) });
};
class It extends S {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.map)
      return (
        g(a, { code: f.invalid_type, expected: m.map, received: a.parsedType }),
        b
      );
    const r = this._def.keyType,
      s = this._def.valueType,
      i = [...a.data.entries()].map(([o, d], c) => ({
        key: r._parse(new te(a, o, a.path, [c, "key"])),
        value: s._parse(new te(a, d, a.path, [c, "value"])),
      }));
    if (a.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const d of i) {
          const c = await d.key,
            l = await d.value;
          if (c.status === "aborted" || l.status === "aborted") return b;
          ((c.status === "dirty" || l.status === "dirty") && t.dirty(),
            o.set(c.value, l.value));
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = new Map();
      for (const d of i) {
        const c = d.key,
          l = d.value;
        if (c.status === "aborted" || l.status === "aborted") return b;
        ((c.status === "dirty" || l.status === "dirty") && t.dirty(),
          o.set(c.value, l.value));
      }
      return { status: t.value, value: o };
    }
  }
}
It.create = (n, e, t) =>
  new It({ valueType: e, keyType: n, typeName: w.ZodMap, ..._(t) });
class Le extends S {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.set)
      return (
        g(a, { code: f.invalid_type, expected: m.set, received: a.parsedType }),
        b
      );
    const r = this._def;
    (r.minSize !== null &&
      a.data.size < r.minSize.value &&
      (g(a, {
        code: f.too_small,
        minimum: r.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      r.maxSize !== null &&
        a.data.size > r.maxSize.value &&
        (g(a, {
          code: f.too_big,
          maximum: r.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty()));
    const s = this._def.valueType;
    function i(d) {
      const c = new Set();
      for (const l of d) {
        if (l.status === "aborted") return b;
        (l.status === "dirty" && t.dirty(), c.add(l.value));
      }
      return { status: t.value, value: c };
    }
    const o = [...a.data.values()].map((d, c) =>
      s._parse(new te(a, d, a.path, c)),
    );
    return a.common.async ? Promise.all(o).then((d) => i(d)) : i(o);
  }
  min(e, t) {
    return new Le({
      ...this._def,
      minSize: { value: e, message: v.toString(t) },
    });
  }
  max(e, t) {
    return new Le({
      ...this._def,
      maxSize: { value: e, message: v.toString(t) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Le.create = (n, e) =>
  new Le({
    valueType: n,
    minSize: null,
    maxSize: null,
    typeName: w.ZodSet,
    ..._(e),
  });
class Ft extends S {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Ft.create = (n, e) => new Ft({ getter: n, typeName: w.ZodLazy, ..._(e) });
class Vt extends S {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return (
        g(t, {
          received: t.data,
          code: f.invalid_literal,
          expected: this._def.value,
        }),
        b
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Vt.create = (n, e) => new Vt({ value: n, typeName: w.ZodLiteral, ..._(e) });
function ta(n, e) {
  return new he({ values: n, typeName: w.ZodEnum, ..._(e) });
}
class he extends S {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e),
        a = this._def.values;
      return (
        g(t, {
          expected: C.joinValues(a),
          received: t.parsedType,
          code: f.invalid_type,
        }),
        b
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(e.data))
    ) {
      const t = this._getOrReturnCtx(e),
        a = this._def.values;
      return (
        g(t, { received: t.data, code: f.invalid_enum_value, options: a }),
        b
      );
    }
    return Z(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return he.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return he.create(
      this.options.filter((a) => !e.includes(a)),
      { ...this._def, ...t },
    );
  }
}
he.create = ta;
class zt extends S {
  _parse(e) {
    const t = C.getValidEnumValues(this._def.values),
      a = this._getOrReturnCtx(e);
    if (a.parsedType !== m.string && a.parsedType !== m.number) {
      const r = C.objectValues(t);
      return (
        g(a, {
          expected: C.joinValues(r),
          received: a.parsedType,
          code: f.invalid_type,
        }),
        b
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(C.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      const r = C.objectValues(t);
      return (
        g(a, { received: a.data, code: f.invalid_enum_value, options: r }),
        b
      );
    }
    return Z(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
zt.create = (n, e) => new zt({ values: n, typeName: w.ZodNativeEnum, ..._(e) });
class qe extends S {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== m.promise && t.common.async === !1)
      return (
        g(t, {
          code: f.invalid_type,
          expected: m.promise,
          received: t.parsedType,
        }),
        b
      );
    const a = t.parsedType === m.promise ? t.data : Promise.resolve(t.data);
    return Z(
      a.then((r) =>
        this._def.type.parseAsync(r, {
          path: t.path,
          errorMap: t.common.contextualErrorMap,
        }),
      ),
    );
  }
}
qe.create = (n, e) => new qe({ type: n, typeName: w.ZodPromise, ..._(e) });
class fe extends S {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === w.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e),
      r = this._def.effect || null,
      s = {
        addIssue: (i) => {
          (g(a, i), i.fatal ? t.abort() : t.dirty());
        },
        get path() {
          return a.path;
        },
      };
    if (((s.addIssue = s.addIssue.bind(s)), r.type === "preprocess")) {
      const i = r.transform(a.data, s);
      if (a.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (t.value === "aborted") return b;
          const d = await this._def.schema._parseAsync({
            data: o,
            path: a.path,
            parent: a,
          });
          return d.status === "aborted"
            ? b
            : d.status === "dirty" || t.value === "dirty"
              ? be(d.value)
              : d;
        });
      {
        if (t.value === "aborted") return b;
        const o = this._def.schema._parseSync({
          data: i,
          path: a.path,
          parent: a,
        });
        return o.status === "aborted"
          ? b
          : o.status === "dirty" || t.value === "dirty"
            ? be(o.value)
            : o;
      }
    }
    if (r.type === "refinement") {
      const i = (o) => {
        const d = r.refinement(o, s);
        if (a.common.async) return Promise.resolve(d);
        if (d instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return o;
      };
      if (a.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        return o.status === "aborted"
          ? b
          : (o.status === "dirty" && t.dirty(),
            i(o.value),
            { status: t.value, value: o.value });
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((o) =>
            o.status === "aborted"
              ? b
              : (o.status === "dirty" && t.dirty(),
                i(o.value).then(() => ({ status: t.value, value: o.value }))),
          );
    }
    if (r.type === "transform")
      if (a.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        if (!le(i)) return b;
        const o = r.transform(i.value, s);
        if (o instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: t.value, value: o };
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((i) =>
            le(i)
              ? Promise.resolve(r.transform(i.value, s)).then((o) => ({
                  status: t.value,
                  value: o,
                }))
              : b,
          );
    C.assertNever(r);
  }
}
fe.create = (n, e, t) =>
  new fe({ schema: n, typeName: w.ZodEffects, effect: e, ..._(t) });
fe.createWithPreprocess = (n, e, t) =>
  new fe({
    schema: e,
    effect: { type: "preprocess", transform: n },
    typeName: w.ZodEffects,
    ..._(t),
  });
class ee extends S {
  _parse(e) {
    return this._getType(e) === m.undefined
      ? Z(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ee.create = (n, e) =>
  new ee({ innerType: n, typeName: w.ZodOptional, ..._(e) });
class pe extends S {
  _parse(e) {
    return this._getType(e) === m.null
      ? Z(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
pe.create = (n, e) =>
  new pe({ innerType: n, typeName: w.ZodNullable, ..._(e) });
class et extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let a = t.data;
    return (
      t.parsedType === m.undefined && (a = this._def.defaultValue()),
      this._def.innerType._parse({ data: a, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
et.create = (n, e) =>
  new et({
    innerType: n,
    typeName: w.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ..._(e),
  });
class tt extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      a = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({
        data: a.data,
        path: a.path,
        parent: { ...a },
      });
    return Fe(r)
      ? r.then((s) => ({
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new J(a.common.issues);
                  },
                  input: a.data,
                }),
        }))
      : {
          status: "valid",
          value:
            r.status === "valid"
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new J(a.common.issues);
                  },
                  input: a.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
tt.create = (n, e) =>
  new tt({
    innerType: n,
    typeName: w.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ..._(e),
  });
class Zt extends S {
  _parse(e) {
    if (this._getType(e) !== m.nan) {
      const a = this._getOrReturnCtx(e);
      return (
        g(a, { code: f.invalid_type, expected: m.nan, received: a.parsedType }),
        b
      );
    }
    return { status: "valid", value: e.data };
  }
}
Zt.create = (n) => new Zt({ typeName: w.ZodNaN, ..._(n) });
class fr extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      a = t.data;
    return this._def.type._parse({ data: a, path: t.path, parent: t });
  }
  unwrap() {
    return this._def.type;
  }
}
class rt extends S {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        return s.status === "aborted"
          ? b
          : s.status === "dirty"
            ? (t.dirty(), be(s.value))
            : this._def.out._parseAsync({
                data: s.value,
                path: a.path,
                parent: a,
              });
      })();
    {
      const r = this._def.in._parseSync({
        data: a.data,
        path: a.path,
        parent: a,
      });
      return r.status === "aborted"
        ? b
        : r.status === "dirty"
          ? (t.dirty(), { status: "dirty", value: r.value })
          : this._def.out._parseSync({
              data: r.value,
              path: a.path,
              parent: a,
            });
    }
  }
  static create(e, t) {
    return new rt({ in: e, out: t, typeName: w.ZodPipeline });
  }
}
class at extends S {
  _parse(e) {
    const t = this._def.innerType._parse(e),
      a = (r) => (le(r) && (r.value = Object.freeze(r.value)), r);
    return Fe(t) ? t.then((r) => a(r)) : a(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
at.create = (n, e) =>
  new at({ innerType: n, typeName: w.ZodReadonly, ..._(e) });
R.lazycreate;
var w;
(function (n) {
  ((n.ZodString = "ZodString"),
    (n.ZodNumber = "ZodNumber"),
    (n.ZodNaN = "ZodNaN"),
    (n.ZodBigInt = "ZodBigInt"),
    (n.ZodBoolean = "ZodBoolean"),
    (n.ZodDate = "ZodDate"),
    (n.ZodSymbol = "ZodSymbol"),
    (n.ZodUndefined = "ZodUndefined"),
    (n.ZodNull = "ZodNull"),
    (n.ZodAny = "ZodAny"),
    (n.ZodUnknown = "ZodUnknown"),
    (n.ZodNever = "ZodNever"),
    (n.ZodVoid = "ZodVoid"),
    (n.ZodArray = "ZodArray"),
    (n.ZodObject = "ZodObject"),
    (n.ZodUnion = "ZodUnion"),
    (n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (n.ZodIntersection = "ZodIntersection"),
    (n.ZodTuple = "ZodTuple"),
    (n.ZodRecord = "ZodRecord"),
    (n.ZodMap = "ZodMap"),
    (n.ZodSet = "ZodSet"),
    (n.ZodFunction = "ZodFunction"),
    (n.ZodLazy = "ZodLazy"),
    (n.ZodLiteral = "ZodLiteral"),
    (n.ZodEnum = "ZodEnum"),
    (n.ZodEffects = "ZodEffects"),
    (n.ZodNativeEnum = "ZodNativeEnum"),
    (n.ZodOptional = "ZodOptional"),
    (n.ZodNullable = "ZodNullable"),
    (n.ZodDefault = "ZodDefault"),
    (n.ZodCatch = "ZodCatch"),
    (n.ZodPromise = "ZodPromise"),
    (n.ZodBranded = "ZodBranded"),
    (n.ZodPipeline = "ZodPipeline"),
    (n.ZodReadonly = "ZodReadonly"));
})(w || (w = {}));
const Wi = X.create,
  Yi = ue.create,
  Ui = Qe.create;
ae.create;
Y.create;
const Bi = R.create;
R.strictCreate;
ze.create;
Ze.create;
oe.create;
const Ki = he.create;
qe.create;
ee.create;
pe.create;
export {
  As as $,
  mr as A,
  oi as B,
  jr as C,
  ns as D,
  cs as E,
  ls as F,
  ys as G,
  xs as H,
  Js as I,
  Sr as J,
  $r as K,
  Ls as L,
  Fs as M,
  Yr as N,
  qr as O,
  Ys as P,
  Qr as Q,
  Ks as R,
  si as S,
  vi as T,
  bi as U,
  ks as V,
  gi as W,
  Oi as X,
  ai as Y,
  Si as Z,
  Mr as _,
  gr as a,
  xn as a$,
  ts as a0,
  vr as a1,
  ci as a2,
  ui as a3,
  Lr as a4,
  is as a5,
  mi as a6,
  ws as a7,
  Vr as a8,
  zr as a9,
  os as aA,
  bs as aB,
  Os as aC,
  Es as aD,
  Ms as aE,
  xi as aF,
  Gr as aG,
  _r as aH,
  zs as aI,
  yr as aJ,
  Dr as aK,
  Er as aL,
  Pi as aM,
  Zi as aN,
  Kt as aO,
  Aa as aP,
  Ia as aQ,
  Ai as aR,
  $e as aS,
  Na as aT,
  Ri as aU,
  Vi as aV,
  Fi as aW,
  Ii as aX,
  Di as aY,
  $i as aZ,
  Ci as a_,
  ps as aa,
  Hr as ab,
  ei as ac,
  Tr as ad,
  _i as ae,
  Ds as af,
  Cr as ag,
  Or as ah,
  wr as ai,
  Qs as aj,
  ii as ak,
  Jr as al,
  _s as am,
  Ns as an,
  qs as ao,
  Ss as ap,
  Ps as aq,
  Ur as ar,
  Vs as as,
  Ws as at,
  rs as au,
  wi as av,
  di as aw,
  Rr as ax,
  Hs as ay,
  Bs as az,
  Zr as b,
  zi as b0,
  qi as b1,
  Hi as b2,
  Fa as b3,
  Ti as b4,
  Ni as b5,
  ji as b6,
  Va as b7,
  De as b8,
  ie as b9,
  Wi as bA,
  Ki as bB,
  Ui as bC,
  Yi as bD,
  wn as ba,
  Mn as bb,
  Ei as bc,
  Ea as bd,
  Li as be,
  fi as bf,
  yi as bg,
  es as bh,
  li as bi,
  ds as bj,
  Wr as bk,
  pi as bl,
  vs as bm,
  Ir as bn,
  fs as bo,
  Pr as bp,
  Ts as bq,
  Gs as br,
  kr as bs,
  Cs as bt,
  Zs as bu,
  Xs as bv,
  br as bw,
  Is as bx,
  Xr as by,
  Bi as bz,
  ra as c,
  hi as d,
  ni as e,
  ki as f,
  us as g,
  Nr as h,
  $ as i,
  Br as j,
  Mi as k,
  as as l,
  Ar as m,
  Kr as n,
  js as o,
  $s as p,
  Us as q,
  gs as r,
  xr as s,
  Fr as t,
  hs as u,
  ti as v,
  ms as w,
  Rs as x,
  ss as y,
  ri as z,
};
