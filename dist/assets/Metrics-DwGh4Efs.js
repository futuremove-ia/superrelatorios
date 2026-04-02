var De = Object.defineProperty;
var Ue = (s, e, t) =>
  e in s
    ? De(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var G = (s, e, t) => Ue(s, typeof e != "symbol" ? e + "" : e, t);
import { j as c, c as ae, a1 as ge, u as Fe } from "./index-BYfWtJYS.js";
import { C as F, a as B, b as ne, c as ie, d as xe } from "./card-DZ7cD3I_.js";
import { B as $e } from "./badge-q469PR5R.js";
import {
  d as Be,
  $ as qe,
  am as We,
  b as Je,
  T as Ge,
  K as He,
} from "./utils-BB96Jj32.js";
import { u as be } from "./useQuery-DdwYXWd4.js";
import { u as Ye } from "./useCurrentOrganization-B2dAq42k.js";
import { S as oe } from "./skeleton-BT2MC5cF.js";
import "./vendor-Bp-AcFIh.js";
import "./router-Db_Yswnp.js";
const Xe = {
  positive: {
    badge: "badge-success",
    border: "border-green-200 dark:border-green-800",
    bg: "bg-green-50 dark:bg-green-950/20",
    text: "text-green-700 dark:text-green-300",
  },
  negative: {
    badge: "badge-error",
    border: "border-red-200 dark:border-red-800",
    bg: "bg-red-50 dark:bg-red-950/20",
    text: "text-red-700 dark:text-red-300",
  },
  neutral: {
    badge: "badge-warning",
    border: "border-yellow-200 dark:border-yellow-800",
    bg: "bg-yellow-50 dark:bg-yellow-950/20",
    text: "text-yellow-700 dark:text-yellow-300",
  },
};
function Qe({
  code: s,
  title: e,
  value: t,
  unit: r,
  status: a = "neutral",
  trend: n,
  className: i,
}) {
  const o = Xe[a];
  return c.jsx(F, {
    className: ae("card-hover", o.border, i),
    children: c.jsx(B, {
      className: "p-4",
      children: c.jsxs("div", {
        className: "space-y-2",
        children: [
          c.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              c.jsxs("p", {
                className: "text-xs font-medium text-muted-foreground",
                children: [
                  s &&
                    c.jsx("span", {
                      className: "mr-1 opacity-70",
                      children: s,
                    }),
                  e,
                ],
              }),
              a !== "neutral" &&
                c.jsx($e, {
                  className: ae("text-xs", o.badge),
                  children:
                    a === "positive"
                      ? "Bom"
                      : a === "negative"
                        ? "Atenção"
                        : "Neutro",
                }),
            ],
          }),
          c.jsxs("div", {
            className: "flex items-baseline gap-1",
            children: [
              c.jsx("p", {
                className: "text-2xl font-bold text-foreground",
                children: t,
              }),
              r &&
                c.jsx("span", {
                  className: "text-sm text-muted-foreground",
                  children: r,
                }),
            ],
          }),
          n &&
            c.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                n.value > 0
                  ? c.jsx(Be, { className: "h-3 w-3 text-green-600" })
                  : n.value < 0
                    ? c.jsx(qe, { className: "h-3 w-3 text-red-600" })
                    : c.jsx(We, { className: "h-3 w-3 text-muted-foreground" }),
                c.jsxs("span", {
                  className: ae(
                    "text-xs",
                    n.value > 0 && "text-green-600",
                    n.value < 0 && "text-red-600",
                    n.value === 0 && "text-muted-foreground",
                  ),
                  children: [n.value > 0 ? "+" : "", n.value, "%"],
                }),
              ],
            }),
        ],
      }),
    }),
  });
}
var b;
(function (s) {
  s.assertEqual = (a) => {};
  function e(a) {}
  s.assertIs = e;
  function t(a) {
    throw new Error();
  }
  ((s.assertNever = t),
    (s.arrayToEnum = (a) => {
      const n = {};
      for (const i of a) n[i] = i;
      return n;
    }),
    (s.getValidEnumValues = (a) => {
      const n = s.objectKeys(a).filter((o) => typeof a[a[o]] != "number"),
        i = {};
      for (const o of n) i[o] = a[o];
      return s.objectValues(i);
    }),
    (s.objectValues = (a) =>
      s.objectKeys(a).map(function (n) {
        return a[n];
      })),
    (s.objectKeys =
      typeof Object.keys == "function"
        ? (a) => Object.keys(a)
        : (a) => {
            const n = [];
            for (const i in a)
              Object.prototype.hasOwnProperty.call(a, i) && n.push(i);
            return n;
          }),
    (s.find = (a, n) => {
      for (const i of a) if (n(i)) return i;
    }),
    (s.isInteger =
      typeof Number.isInteger == "function"
        ? (a) => Number.isInteger(a)
        : (a) =>
            typeof a == "number" && Number.isFinite(a) && Math.floor(a) === a));
  function r(a, n = " | ") {
    return a.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(n);
  }
  ((s.joinValues = r),
    (s.jsonStringifyReplacer = (a, n) =>
      typeof n == "bigint" ? n.toString() : n));
})(b || (b = {}));
var ke;
(function (s) {
  s.mergeShapes = (e, t) => ({ ...e, ...t });
})(ke || (ke = {}));
const f = b.arrayToEnum([
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
  R = (s) => {
    switch (typeof s) {
      case "undefined":
        return f.undefined;
      case "string":
        return f.string;
      case "number":
        return Number.isNaN(s) ? f.nan : f.number;
      case "boolean":
        return f.boolean;
      case "function":
        return f.function;
      case "bigint":
        return f.bigint;
      case "symbol":
        return f.symbol;
      case "object":
        return Array.isArray(s)
          ? f.array
          : s === null
            ? f.null
            : s.then &&
                typeof s.then == "function" &&
                s.catch &&
                typeof s.catch == "function"
              ? f.promise
              : typeof Map < "u" && s instanceof Map
                ? f.map
                : typeof Set < "u" && s instanceof Set
                  ? f.set
                  : typeof Date < "u" && s instanceof Date
                    ? f.date
                    : f.object;
      default:
        return f.unknown;
    }
  },
  d = b.arrayToEnum([
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
class j extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    (super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
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
        function (n) {
          return n.message;
        },
      r = { _errors: [] },
      a = (n) => {
        for (const i of n.issues)
          if (i.code === "invalid_union") i.unionErrors.map(a);
          else if (i.code === "invalid_return_type") a(i.returnTypeError);
          else if (i.code === "invalid_arguments") a(i.argumentsError);
          else if (i.path.length === 0) r._errors.push(t(i));
          else {
            let o = r,
              u = 0;
            for (; u < i.path.length; ) {
              const p = i.path[u];
              (u === i.path.length - 1
                ? ((o[p] = o[p] || { _errors: [] }), o[p]._errors.push(t(i)))
                : (o[p] = o[p] || { _errors: [] }),
                (o = o[p]),
                u++);
            }
          }
      };
    return (a(this), r);
  }
  static assert(e) {
    if (!(e instanceof j)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, b.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {},
      r = [];
    for (const a of this.issues)
      if (a.path.length > 0) {
        const n = a.path[0];
        ((t[n] = t[n] || []), t[n].push(e(a)));
      } else r.push(e(a));
    return { formErrors: r, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
j.create = (s) => new j(s);
const le = (s, e) => {
  let t;
  switch (s.code) {
    case d.invalid_type:
      s.received === f.undefined
        ? (t = "Required")
        : (t = `Expected ${s.expected}, received ${s.received}`);
      break;
    case d.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(s.expected, b.jsonStringifyReplacer)}`;
      break;
    case d.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${b.joinValues(s.keys, ", ")}`;
      break;
    case d.invalid_union:
      t = "Invalid input";
      break;
    case d.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${b.joinValues(s.options)}`;
      break;
    case d.invalid_enum_value:
      t = `Invalid enum value. Expected ${b.joinValues(s.options)}, received '${s.received}'`;
      break;
    case d.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case d.invalid_return_type:
      t = "Invalid function return type";
      break;
    case d.invalid_date:
      t = "Invalid date";
      break;
    case d.invalid_string:
      typeof s.validation == "object"
        ? "includes" in s.validation
          ? ((t = `Invalid input: must include "${s.validation.includes}"`),
            typeof s.validation.position == "number" &&
              (t = `${t} at one or more positions greater than or equal to ${s.validation.position}`))
          : "startsWith" in s.validation
            ? (t = `Invalid input: must start with "${s.validation.startsWith}"`)
            : "endsWith" in s.validation
              ? (t = `Invalid input: must end with "${s.validation.endsWith}"`)
              : b.assertNever(s.validation)
        : s.validation !== "regex"
          ? (t = `Invalid ${s.validation}`)
          : (t = "Invalid");
      break;
    case d.too_small:
      s.type === "array"
        ? (t = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "more than"} ${s.minimum} element(s)`)
        : s.type === "string"
          ? (t = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "over"} ${s.minimum} character(s)`)
          : s.type === "number"
            ? (t = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}`)
            : s.type === "bigint"
              ? (t = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}`)
              : s.type === "date"
                ? (t = `Date must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(s.minimum))}`)
                : (t = "Invalid input");
      break;
    case d.too_big:
      s.type === "array"
        ? (t = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "less than"} ${s.maximum} element(s)`)
        : s.type === "string"
          ? (t = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "under"} ${s.maximum} character(s)`)
          : s.type === "number"
            ? (t = `Number must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}`)
            : s.type === "bigint"
              ? (t = `BigInt must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}`)
              : s.type === "date"
                ? (t = `Date must be ${s.exact ? "exactly" : s.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(s.maximum))}`)
                : (t = "Invalid input");
      break;
    case d.custom:
      t = "Invalid input";
      break;
    case d.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case d.not_multiple_of:
      t = `Number must be a multiple of ${s.multipleOf}`;
      break;
    case d.not_finite:
      t = "Number must be finite";
      break;
    default:
      ((t = e.defaultError), b.assertNever(s));
  }
  return { message: t };
};
let et = le;
function tt() {
  return et;
}
const rt = (s) => {
  const { data: e, path: t, errorMaps: r, issueData: a } = s,
    n = [...t, ...(a.path || [])],
    i = { ...a, path: n };
  if (a.message !== void 0) return { ...a, path: n, message: a.message };
  let o = "";
  const u = r
    .filter((p) => !!p)
    .slice()
    .reverse();
  for (const p of u) o = p(i, { data: e, defaultError: o }).message;
  return { ...a, path: n, message: o };
};
function h(s, e) {
  const t = tt(),
    r = rt({
      issueData: e,
      data: s.data,
      path: s.path,
      errorMaps: [
        s.common.contextualErrorMap,
        s.schemaErrorMap,
        t,
        t === le ? void 0 : le,
      ].filter((a) => !!a),
    });
  s.common.issues.push(r);
}
class I {
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
    const r = [];
    for (const a of t) {
      if (a.status === "aborted") return g;
      (a.status === "dirty" && e.dirty(), r.push(a.value));
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, t) {
    const r = [];
    for (const a of t) {
      const n = await a.key,
        i = await a.value;
      r.push({ key: n, value: i });
    }
    return I.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    const r = {};
    for (const a of t) {
      const { key: n, value: i } = a;
      if (n.status === "aborted" || i.status === "aborted") return g;
      (n.status === "dirty" && e.dirty(),
        i.status === "dirty" && e.dirty(),
        n.value !== "__proto__" &&
          (typeof i.value < "u" || a.alwaysSet) &&
          (r[n.value] = i.value));
    }
    return { status: e.value, value: r };
  }
}
const g = Object.freeze({ status: "aborted" }),
  q = (s) => ({ status: "dirty", value: s }),
  N = (s) => ({ status: "valid", value: s }),
  we = (s) => s.status === "aborted",
  Ie = (s) => s.status === "dirty",
  $ = (s) => s.status === "valid",
  H = (s) => typeof Promise < "u" && s instanceof Promise;
var m;
(function (s) {
  ((s.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (s.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message));
})(m || (m = {}));
class P {
  constructor(e, t, r, a) {
    ((this._cachedPath = []),
      (this.parent = e),
      (this.data = t),
      (this._path = r),
      (this._key = a));
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
const Ne = (s, e) => {
  if ($(e)) return { success: !0, data: e.value };
  if (!s.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const t = new j(s.common.issues);
      return ((this._error = t), this._error);
    },
  };
};
function y(s) {
  if (!s) return {};
  const {
    errorMap: e,
    invalid_type_error: t,
    required_error: r,
    description: a,
  } = s;
  if (e && (t || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return e
    ? { errorMap: e, description: a }
    : {
        errorMap: (i, o) => {
          const { message: u } = s;
          return i.code === "invalid_enum_value"
            ? { message: u ?? o.defaultError }
            : typeof o.data > "u"
              ? { message: u ?? r ?? o.defaultError }
              : i.code !== "invalid_type"
                ? { message: o.defaultError }
                : { message: u ?? t ?? o.defaultError };
        },
        description: a,
      };
}
class x {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return R(e.data);
  }
  _getOrReturnCtx(e, t) {
    return (
      t || {
        common: e.parent.common,
        data: e.data,
        parsedType: R(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new I(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: R(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (H(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const r = this.safeParse(e, t);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(e, t) {
    const r = {
        common: {
          issues: [],
          async: (t == null ? void 0 : t.async) ?? !1,
          contextualErrorMap: t == null ? void 0 : t.errorMap,
        },
        path: (t == null ? void 0 : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: R(e),
      },
      a = this._parseSync({ data: e, path: r.path, parent: r });
    return Ne(r, a);
  }
  "~validate"(e) {
    var r, a;
    const t = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: R(e),
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return $(n) ? { value: n.value } : { issues: t.common.issues };
      } catch (n) {
        ((a =
          (r = n == null ? void 0 : n.message) == null
            ? void 0
            : r.toLowerCase()) != null &&
          a.includes("encountered") &&
          (this["~standard"].async = !0),
          (t.common = { issues: [], async: !0 }));
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) =>
      $(n) ? { value: n.value } : { issues: t.common.issues },
    );
  }
  async parseAsync(e, t) {
    const r = await this.safeParseAsync(e, t);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(e, t) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: t == null ? void 0 : t.errorMap,
          async: !0,
        },
        path: (t == null ? void 0 : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: R(e),
      },
      a = this._parse({ data: e, path: r.path, parent: r }),
      n = await (H(a) ? a : Promise.resolve(a));
    return Ne(r, n);
  }
  refine(e, t) {
    const r = (a) =>
      typeof t == "string" || typeof t > "u"
        ? { message: t }
        : typeof t == "function"
          ? t(a)
          : t;
    return this._refinement((a, n) => {
      const i = e(a),
        o = () => n.addIssue({ code: d.custom, ...r(a) });
      return typeof Promise < "u" && i instanceof Promise
        ? i.then((u) => (u ? !0 : (o(), !1)))
        : i
          ? !0
          : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((r, a) =>
      e(r) ? !0 : (a.addIssue(typeof t == "function" ? t(r, a) : t), !1),
    );
  }
  _refinement(e) {
    return new L({
      schema: this,
      typeName: _.ZodEffects,
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
    return S.create(this, this._def);
  }
  nullable() {
    return D.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return E.create(this);
  }
  promise() {
    return ee.create(this, this._def);
  }
  or(e) {
    return X.create([this, e], this._def);
  }
  and(e) {
    return Q.create(this, e, this._def);
  }
  transform(e) {
    return new L({
      ...y(this._def),
      schema: this,
      typeName: _.ZodEffects,
      effect: { type: "transform", transform: e },
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new fe({
      ...y(this._def),
      innerType: this,
      defaultValue: t,
      typeName: _.ZodDefault,
    });
  }
  brand() {
    return new Nt({ typeName: _.ZodBranded, type: this, ...y(this._def) });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new me({
      ...y(this._def),
      innerType: this,
      catchValue: t,
      typeName: _.ZodCatch,
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({ ...this._def, description: e });
  }
  pipe(e) {
    return _e.create(this, e);
  }
  readonly() {
    return pe.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const st = /^c[^\s-]{8,}$/i,
  at = /^[0-9a-z]+$/,
  nt = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  it =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  ot = /^[a-z0-9_-]{21}$/i,
  dt = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  ct =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  lt =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  ut = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let de;
const ht =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ft =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  mt =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  pt =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  gt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  _t = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Me =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  yt = new RegExp(`^${Me}$`);
function Ke(s) {
  let e = "[0-5]\\d";
  s.precision
    ? (e = `${e}\\.\\d{${s.precision}}`)
    : s.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = s.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function vt(s) {
  return new RegExp(`^${Ke(s)}$`);
}
function xt(s) {
  let e = `${Me}T${Ke(s)}`;
  const t = [];
  return (
    t.push(s.local ? "Z?" : "Z"),
    s.offset && t.push("([+-]\\d{2}:?\\d{2})"),
    (e = `${e}(${t.join("|")})`),
    new RegExp(`^${e}$`)
  );
}
function bt(s, e) {
  return !!(
    ((e === "v4" || !e) && ht.test(s)) ||
    ((e === "v6" || !e) && mt.test(s))
  );
}
function kt(s, e) {
  if (!dt.test(s)) return !1;
  try {
    const [t] = s.split(".");
    if (!t) return !1;
    const r = t
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(t.length + ((4 - (t.length % 4)) % 4), "="),
      a = JSON.parse(atob(r));
    return !(
      typeof a != "object" ||
      a === null ||
      ("typ" in a && (a == null ? void 0 : a.typ) !== "JWT") ||
      !a.alg ||
      (e && a.alg !== e)
    );
  } catch {
    return !1;
  }
}
function wt(s, e) {
  return !!(
    ((e === "v4" || !e) && ft.test(s)) ||
    ((e === "v6" || !e) && pt.test(s))
  );
}
class O extends x {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== f.string)
    ) {
      const n = this._getOrReturnCtx(e);
      return (
        h(n, {
          code: d.invalid_type,
          expected: f.string,
          received: n.parsedType,
        }),
        g
      );
    }
    const r = new I();
    let a;
    for (const n of this._def.checks)
      if (n.kind === "min")
        e.data.length < n.value &&
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            code: d.too_small,
            minimum: n.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: n.message,
          }),
          r.dirty());
      else if (n.kind === "max")
        e.data.length > n.value &&
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            code: d.too_big,
            maximum: n.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: n.message,
          }),
          r.dirty());
      else if (n.kind === "length") {
        const i = e.data.length > n.value,
          o = e.data.length < n.value;
        (i || o) &&
          ((a = this._getOrReturnCtx(e, a)),
          i
            ? h(a, {
                code: d.too_big,
                maximum: n.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: n.message,
              })
            : o &&
              h(a, {
                code: d.too_small,
                minimum: n.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: n.message,
              }),
          r.dirty());
      } else if (n.kind === "email")
        lt.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            validation: "email",
            code: d.invalid_string,
            message: n.message,
          }),
          r.dirty());
      else if (n.kind === "emoji")
        (de || (de = new RegExp(ut, "u")),
          de.test(e.data) ||
            ((a = this._getOrReturnCtx(e, a)),
            h(a, {
              validation: "emoji",
              code: d.invalid_string,
              message: n.message,
            }),
            r.dirty()));
      else if (n.kind === "uuid")
        it.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            validation: "uuid",
            code: d.invalid_string,
            message: n.message,
          }),
          r.dirty());
      else if (n.kind === "nanoid")
        ot.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            validation: "nanoid",
            code: d.invalid_string,
            message: n.message,
          }),
          r.dirty());
      else if (n.kind === "cuid")
        st.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            validation: "cuid",
            code: d.invalid_string,
            message: n.message,
          }),
          r.dirty());
      else if (n.kind === "cuid2")
        at.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            validation: "cuid2",
            code: d.invalid_string,
            message: n.message,
          }),
          r.dirty());
      else if (n.kind === "ulid")
        nt.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            validation: "ulid",
            code: d.invalid_string,
            message: n.message,
          }),
          r.dirty());
      else if (n.kind === "url")
        try {
          new URL(e.data);
        } catch {
          ((a = this._getOrReturnCtx(e, a)),
            h(a, {
              validation: "url",
              code: d.invalid_string,
              message: n.message,
            }),
            r.dirty());
        }
      else
        n.kind === "regex"
          ? ((n.regex.lastIndex = 0),
            n.regex.test(e.data) ||
              ((a = this._getOrReturnCtx(e, a)),
              h(a, {
                validation: "regex",
                code: d.invalid_string,
                message: n.message,
              }),
              r.dirty()))
          : n.kind === "trim"
            ? (e.data = e.data.trim())
            : n.kind === "includes"
              ? e.data.includes(n.value, n.position) ||
                ((a = this._getOrReturnCtx(e, a)),
                h(a, {
                  code: d.invalid_string,
                  validation: { includes: n.value, position: n.position },
                  message: n.message,
                }),
                r.dirty())
              : n.kind === "toLowerCase"
                ? (e.data = e.data.toLowerCase())
                : n.kind === "toUpperCase"
                  ? (e.data = e.data.toUpperCase())
                  : n.kind === "startsWith"
                    ? e.data.startsWith(n.value) ||
                      ((a = this._getOrReturnCtx(e, a)),
                      h(a, {
                        code: d.invalid_string,
                        validation: { startsWith: n.value },
                        message: n.message,
                      }),
                      r.dirty())
                    : n.kind === "endsWith"
                      ? e.data.endsWith(n.value) ||
                        ((a = this._getOrReturnCtx(e, a)),
                        h(a, {
                          code: d.invalid_string,
                          validation: { endsWith: n.value },
                          message: n.message,
                        }),
                        r.dirty())
                      : n.kind === "datetime"
                        ? xt(n).test(e.data) ||
                          ((a = this._getOrReturnCtx(e, a)),
                          h(a, {
                            code: d.invalid_string,
                            validation: "datetime",
                            message: n.message,
                          }),
                          r.dirty())
                        : n.kind === "date"
                          ? yt.test(e.data) ||
                            ((a = this._getOrReturnCtx(e, a)),
                            h(a, {
                              code: d.invalid_string,
                              validation: "date",
                              message: n.message,
                            }),
                            r.dirty())
                          : n.kind === "time"
                            ? vt(n).test(e.data) ||
                              ((a = this._getOrReturnCtx(e, a)),
                              h(a, {
                                code: d.invalid_string,
                                validation: "time",
                                message: n.message,
                              }),
                              r.dirty())
                            : n.kind === "duration"
                              ? ct.test(e.data) ||
                                ((a = this._getOrReturnCtx(e, a)),
                                h(a, {
                                  validation: "duration",
                                  code: d.invalid_string,
                                  message: n.message,
                                }),
                                r.dirty())
                              : n.kind === "ip"
                                ? bt(e.data, n.version) ||
                                  ((a = this._getOrReturnCtx(e, a)),
                                  h(a, {
                                    validation: "ip",
                                    code: d.invalid_string,
                                    message: n.message,
                                  }),
                                  r.dirty())
                                : n.kind === "jwt"
                                  ? kt(e.data, n.alg) ||
                                    ((a = this._getOrReturnCtx(e, a)),
                                    h(a, {
                                      validation: "jwt",
                                      code: d.invalid_string,
                                      message: n.message,
                                    }),
                                    r.dirty())
                                  : n.kind === "cidr"
                                    ? wt(e.data, n.version) ||
                                      ((a = this._getOrReturnCtx(e, a)),
                                      h(a, {
                                        validation: "cidr",
                                        code: d.invalid_string,
                                        message: n.message,
                                      }),
                                      r.dirty())
                                    : n.kind === "base64"
                                      ? gt.test(e.data) ||
                                        ((a = this._getOrReturnCtx(e, a)),
                                        h(a, {
                                          validation: "base64",
                                          code: d.invalid_string,
                                          message: n.message,
                                        }),
                                        r.dirty())
                                      : n.kind === "base64url"
                                        ? _t.test(e.data) ||
                                          ((a = this._getOrReturnCtx(e, a)),
                                          h(a, {
                                            validation: "base64url",
                                            code: d.invalid_string,
                                            message: n.message,
                                          }),
                                          r.dirty())
                                        : b.assertNever(n);
    return { status: r.value, value: e.data };
  }
  _regex(e, t, r) {
    return this.refinement((a) => e.test(a), {
      validation: t,
      code: d.invalid_string,
      ...m.errToObj(r),
    });
  }
  _addCheck(e) {
    return new O({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...m.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...m.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...m.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...m.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...m.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...m.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...m.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...m.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...m.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: "base64url", ...m.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...m.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...m.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...m.errToObj(e) });
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
          ...m.errToObj(e == null ? void 0 : e.message),
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
          ...m.errToObj(e == null ? void 0 : e.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...m.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: "regex", regex: e, ...m.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...m.errToObj(t == null ? void 0 : t.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: "startsWith", value: e, ...m.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: "endsWith", value: e, ...m.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e, ...m.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e, ...m.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: "length", value: e, ...m.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, m.errToObj(e));
  }
  trim() {
    return new O({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new O({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new O({
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
O.create = (s) =>
  new O({
    checks: [],
    typeName: _.ZodString,
    coerce: (s == null ? void 0 : s.coerce) ?? !1,
    ...y(s),
  });
function It(s, e) {
  const t = (s.toString().split(".")[1] || "").length,
    r = (e.toString().split(".")[1] || "").length,
    a = t > r ? t : r,
    n = Number.parseInt(s.toFixed(a).replace(".", "")),
    i = Number.parseInt(e.toFixed(a).replace(".", ""));
  return (n % i) / 10 ** a;
}
class M extends x {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== f.number)
    ) {
      const n = this._getOrReturnCtx(e);
      return (
        h(n, {
          code: d.invalid_type,
          expected: f.number,
          received: n.parsedType,
        }),
        g
      );
    }
    let r;
    const a = new I();
    for (const n of this._def.checks)
      n.kind === "int"
        ? b.isInteger(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            code: d.invalid_type,
            expected: "integer",
            received: "float",
            message: n.message,
          }),
          a.dirty())
        : n.kind === "min"
          ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
            ((r = this._getOrReturnCtx(e, r)),
            h(r, {
              code: d.too_small,
              minimum: n.value,
              type: "number",
              inclusive: n.inclusive,
              exact: !1,
              message: n.message,
            }),
            a.dirty())
          : n.kind === "max"
            ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
              ((r = this._getOrReturnCtx(e, r)),
              h(r, {
                code: d.too_big,
                maximum: n.value,
                type: "number",
                inclusive: n.inclusive,
                exact: !1,
                message: n.message,
              }),
              a.dirty())
            : n.kind === "multipleOf"
              ? It(e.data, n.value) !== 0 &&
                ((r = this._getOrReturnCtx(e, r)),
                h(r, {
                  code: d.not_multiple_of,
                  multipleOf: n.value,
                  message: n.message,
                }),
                a.dirty())
              : n.kind === "finite"
                ? Number.isFinite(e.data) ||
                  ((r = this._getOrReturnCtx(e, r)),
                  h(r, { code: d.not_finite, message: n.message }),
                  a.dirty())
                : b.assertNever(n);
    return { status: a.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, m.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, m.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, m.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, m.toString(t));
  }
  setLimit(e, t, r, a) {
    return new M({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: r, message: m.toString(a) },
      ],
    });
  }
  _addCheck(e) {
    return new M({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: m.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: m.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: m.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: m.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: m.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: m.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: m.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: m.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: m.toString(e),
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
        e.kind === "int" || (e.kind === "multipleOf" && b.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (t === null || r.value > t) && (t = r.value)
        : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
M.create = (s) =>
  new M({
    checks: [],
    typeName: _.ZodNumber,
    coerce: (s == null ? void 0 : s.coerce) || !1,
    ...y(s),
  });
class W extends x {
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
    if (this._getType(e) !== f.bigint) return this._getInvalidInput(e);
    let r;
    const a = new I();
    for (const n of this._def.checks)
      n.kind === "min"
        ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            code: d.too_small,
            type: "bigint",
            minimum: n.value,
            inclusive: n.inclusive,
            message: n.message,
          }),
          a.dirty())
        : n.kind === "max"
          ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
            ((r = this._getOrReturnCtx(e, r)),
            h(r, {
              code: d.too_big,
              type: "bigint",
              maximum: n.value,
              inclusive: n.inclusive,
              message: n.message,
            }),
            a.dirty())
          : n.kind === "multipleOf"
            ? e.data % n.value !== BigInt(0) &&
              ((r = this._getOrReturnCtx(e, r)),
              h(r, {
                code: d.not_multiple_of,
                multipleOf: n.value,
                message: n.message,
              }),
              a.dirty())
            : b.assertNever(n);
    return { status: a.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return (
      h(t, {
        code: d.invalid_type,
        expected: f.bigint,
        received: t.parsedType,
      }),
      g
    );
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, m.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, m.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, m.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, m.toString(t));
  }
  setLimit(e, t, r, a) {
    return new W({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: r, message: m.toString(a) },
      ],
    });
  }
  _addCheck(e) {
    return new W({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: m.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: m.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: m.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: m.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: m.toString(t),
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
W.create = (s) =>
  new W({
    checks: [],
    typeName: _.ZodBigInt,
    coerce: (s == null ? void 0 : s.coerce) ?? !1,
    ...y(s),
  });
class ue extends x {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean)
    ) {
      const r = this._getOrReturnCtx(e);
      return (
        h(r, {
          code: d.invalid_type,
          expected: f.boolean,
          received: r.parsedType,
        }),
        g
      );
    }
    return N(e.data);
  }
}
ue.create = (s) =>
  new ue({
    typeName: _.ZodBoolean,
    coerce: (s == null ? void 0 : s.coerce) || !1,
    ...y(s),
  });
class Y extends x {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== f.date)
    ) {
      const n = this._getOrReturnCtx(e);
      return (
        h(n, {
          code: d.invalid_type,
          expected: f.date,
          received: n.parsedType,
        }),
        g
      );
    }
    if (Number.isNaN(e.data.getTime())) {
      const n = this._getOrReturnCtx(e);
      return (h(n, { code: d.invalid_date }), g);
    }
    const r = new I();
    let a;
    for (const n of this._def.checks)
      n.kind === "min"
        ? e.data.getTime() < n.value &&
          ((a = this._getOrReturnCtx(e, a)),
          h(a, {
            code: d.too_small,
            message: n.message,
            inclusive: !0,
            exact: !1,
            minimum: n.value,
            type: "date",
          }),
          r.dirty())
        : n.kind === "max"
          ? e.data.getTime() > n.value &&
            ((a = this._getOrReturnCtx(e, a)),
            h(a, {
              code: d.too_big,
              message: n.message,
              inclusive: !0,
              exact: !1,
              maximum: n.value,
              type: "date",
            }),
            r.dirty())
          : b.assertNever(n);
    return { status: r.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new Y({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: m.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: m.toString(t),
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
Y.create = (s) =>
  new Y({
    checks: [],
    coerce: (s == null ? void 0 : s.coerce) || !1,
    typeName: _.ZodDate,
    ...y(s),
  });
class Ee extends x {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const r = this._getOrReturnCtx(e);
      return (
        h(r, {
          code: d.invalid_type,
          expected: f.symbol,
          received: r.parsedType,
        }),
        g
      );
    }
    return N(e.data);
  }
}
Ee.create = (s) => new Ee({ typeName: _.ZodSymbol, ...y(s) });
class Te extends x {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const r = this._getOrReturnCtx(e);
      return (
        h(r, {
          code: d.invalid_type,
          expected: f.undefined,
          received: r.parsedType,
        }),
        g
      );
    }
    return N(e.data);
  }
}
Te.create = (s) => new Te({ typeName: _.ZodUndefined, ...y(s) });
class Ce extends x {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const r = this._getOrReturnCtx(e);
      return (
        h(r, {
          code: d.invalid_type,
          expected: f.null,
          received: r.parsedType,
        }),
        g
      );
    }
    return N(e.data);
  }
}
Ce.create = (s) => new Ce({ typeName: _.ZodNull, ...y(s) });
class Ae extends x {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(e) {
    return N(e.data);
  }
}
Ae.create = (s) => new Ae({ typeName: _.ZodAny, ...y(s) });
class je extends x {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(e) {
    return N(e.data);
  }
}
je.create = (s) => new je({ typeName: _.ZodUnknown, ...y(s) });
class Z extends x {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return (
      h(t, { code: d.invalid_type, expected: f.never, received: t.parsedType }),
      g
    );
  }
}
Z.create = (s) => new Z({ typeName: _.ZodNever, ...y(s) });
class Re extends x {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const r = this._getOrReturnCtx(e);
      return (
        h(r, {
          code: d.invalid_type,
          expected: f.void,
          received: r.parsedType,
        }),
        g
      );
    }
    return N(e.data);
  }
}
Re.create = (s) => new Re({ typeName: _.ZodVoid, ...y(s) });
class E extends x {
  _parse(e) {
    const { ctx: t, status: r } = this._processInputParams(e),
      a = this._def;
    if (t.parsedType !== f.array)
      return (
        h(t, {
          code: d.invalid_type,
          expected: f.array,
          received: t.parsedType,
        }),
        g
      );
    if (a.exactLength !== null) {
      const i = t.data.length > a.exactLength.value,
        o = t.data.length < a.exactLength.value;
      (i || o) &&
        (h(t, {
          code: i ? d.too_big : d.too_small,
          minimum: o ? a.exactLength.value : void 0,
          maximum: i ? a.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: a.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (a.minLength !== null &&
        t.data.length < a.minLength.value &&
        (h(t, {
          code: d.too_small,
          minimum: a.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: a.minLength.message,
        }),
        r.dirty()),
      a.maxLength !== null &&
        t.data.length > a.maxLength.value &&
        (h(t, {
          code: d.too_big,
          maximum: a.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: a.maxLength.message,
        }),
        r.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((i, o) => a.type._parseAsync(new P(t, i, t.path, o))),
      ).then((i) => I.mergeArray(r, i));
    const n = [...t.data].map((i, o) =>
      a.type._parseSync(new P(t, i, t.path, o)),
    );
    return I.mergeArray(r, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new E({
      ...this._def,
      minLength: { value: e, message: m.toString(t) },
    });
  }
  max(e, t) {
    return new E({
      ...this._def,
      maxLength: { value: e, message: m.toString(t) },
    });
  }
  length(e, t) {
    return new E({
      ...this._def,
      exactLength: { value: e, message: m.toString(t) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
E.create = (s, e) =>
  new E({
    type: s,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: _.ZodArray,
    ...y(e),
  });
function V(s) {
  if (s instanceof w) {
    const e = {};
    for (const t in s.shape) {
      const r = s.shape[t];
      e[t] = S.create(V(r));
    }
    return new w({ ...s._def, shape: () => e });
  } else
    return s instanceof E
      ? new E({ ...s._def, type: V(s.element) })
      : s instanceof S
        ? S.create(V(s.unwrap()))
        : s instanceof D
          ? D.create(V(s.unwrap()))
          : s instanceof z
            ? z.create(s.items.map((e) => V(e)))
            : s;
}
class w extends x {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      t = b.objectKeys(e);
    return ((this._cached = { shape: e, keys: t }), this._cached);
  }
  _parse(e) {
    if (this._getType(e) !== f.object) {
      const p = this._getOrReturnCtx(e);
      return (
        h(p, {
          code: d.invalid_type,
          expected: f.object,
          received: p.parsedType,
        }),
        g
      );
    }
    const { status: r, ctx: a } = this._processInputParams(e),
      { shape: n, keys: i } = this._getCached(),
      o = [];
    if (!(this._def.catchall instanceof Z && this._def.unknownKeys === "strip"))
      for (const p in a.data) i.includes(p) || o.push(p);
    const u = [];
    for (const p of i) {
      const l = n[p],
        k = a.data[p];
      u.push({
        key: { status: "valid", value: p },
        value: l._parse(new P(a, k, a.path, p)),
        alwaysSet: p in a.data,
      });
    }
    if (this._def.catchall instanceof Z) {
      const p = this._def.unknownKeys;
      if (p === "passthrough")
        for (const l of o)
          u.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: a.data[l] },
          });
      else if (p === "strict")
        o.length > 0 &&
          (h(a, { code: d.unrecognized_keys, keys: o }), r.dirty());
      else if (p !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const p = this._def.catchall;
      for (const l of o) {
        const k = a.data[l];
        u.push({
          key: { status: "valid", value: l },
          value: p._parse(new P(a, k, a.path, l)),
          alwaysSet: l in a.data,
        });
      }
    }
    return a.common.async
      ? Promise.resolve()
          .then(async () => {
            const p = [];
            for (const l of u) {
              const k = await l.key,
                T = await l.value;
              p.push({ key: k, value: T, alwaysSet: l.alwaysSet });
            }
            return p;
          })
          .then((p) => I.mergeObjectSync(r, p))
      : I.mergeObjectSync(r, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      m.errToObj,
      new w({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (t, r) => {
                var n, i;
                const a =
                  ((i = (n = this._def).errorMap) == null
                    ? void 0
                    : i.call(n, t, r).message) ?? r.defaultError;
                return t.code === "unrecognized_keys"
                  ? { message: m.errToObj(e).message ?? a }
                  : { message: a };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new w({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new w({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new w({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new w({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: _.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new w({ ...this._def, catchall: e });
  }
  pick(e) {
    const t = {};
    for (const r of b.objectKeys(e))
      e[r] && this.shape[r] && (t[r] = this.shape[r]);
    return new w({ ...this._def, shape: () => t });
  }
  omit(e) {
    const t = {};
    for (const r of b.objectKeys(this.shape)) e[r] || (t[r] = this.shape[r]);
    return new w({ ...this._def, shape: () => t });
  }
  deepPartial() {
    return V(this);
  }
  partial(e) {
    const t = {};
    for (const r of b.objectKeys(this.shape)) {
      const a = this.shape[r];
      e && !e[r] ? (t[r] = a) : (t[r] = a.optional());
    }
    return new w({ ...this._def, shape: () => t });
  }
  required(e) {
    const t = {};
    for (const r of b.objectKeys(this.shape))
      if (e && !e[r]) t[r] = this.shape[r];
      else {
        let n = this.shape[r];
        for (; n instanceof S; ) n = n._def.innerType;
        t[r] = n;
      }
    return new w({ ...this._def, shape: () => t });
  }
  keyof() {
    return Le(b.objectKeys(this.shape));
  }
}
w.create = (s, e) =>
  new w({
    shape: () => s,
    unknownKeys: "strip",
    catchall: Z.create(),
    typeName: _.ZodObject,
    ...y(e),
  });
w.strictCreate = (s, e) =>
  new w({
    shape: () => s,
    unknownKeys: "strict",
    catchall: Z.create(),
    typeName: _.ZodObject,
    ...y(e),
  });
w.lazycreate = (s, e) =>
  new w({
    shape: s,
    unknownKeys: "strip",
    catchall: Z.create(),
    typeName: _.ZodObject,
    ...y(e),
  });
class X extends x {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      r = this._def.options;
    function a(n) {
      for (const o of n) if (o.result.status === "valid") return o.result;
      for (const o of n)
        if (o.result.status === "dirty")
          return (t.common.issues.push(...o.ctx.common.issues), o.result);
      const i = n.map((o) => new j(o.ctx.common.issues));
      return (h(t, { code: d.invalid_union, unionErrors: i }), g);
    }
    if (t.common.async)
      return Promise.all(
        r.map(async (n) => {
          const i = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return {
            result: await n._parseAsync({
              data: t.data,
              path: t.path,
              parent: i,
            }),
            ctx: i,
          };
        }),
      ).then(a);
    {
      let n;
      const i = [];
      for (const u of r) {
        const p = { ...t, common: { ...t.common, issues: [] }, parent: null },
          l = u._parseSync({ data: t.data, path: t.path, parent: p });
        if (l.status === "valid") return l;
        (l.status === "dirty" && !n && (n = { result: l, ctx: p }),
          p.common.issues.length && i.push(p.common.issues));
      }
      if (n) return (t.common.issues.push(...n.ctx.common.issues), n.result);
      const o = i.map((u) => new j(u));
      return (h(t, { code: d.invalid_union, unionErrors: o }), g);
    }
  }
  get options() {
    return this._def.options;
  }
}
X.create = (s, e) => new X({ options: s, typeName: _.ZodUnion, ...y(e) });
function he(s, e) {
  const t = R(s),
    r = R(e);
  if (s === e) return { valid: !0, data: s };
  if (t === f.object && r === f.object) {
    const a = b.objectKeys(e),
      n = b.objectKeys(s).filter((o) => a.indexOf(o) !== -1),
      i = { ...s, ...e };
    for (const o of n) {
      const u = he(s[o], e[o]);
      if (!u.valid) return { valid: !1 };
      i[o] = u.data;
    }
    return { valid: !0, data: i };
  } else if (t === f.array && r === f.array) {
    if (s.length !== e.length) return { valid: !1 };
    const a = [];
    for (let n = 0; n < s.length; n++) {
      const i = s[n],
        o = e[n],
        u = he(i, o);
      if (!u.valid) return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else
    return t === f.date && r === f.date && +s == +e
      ? { valid: !0, data: s }
      : { valid: !1 };
}
class Q extends x {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e),
      a = (n, i) => {
        if (we(n) || we(i)) return g;
        const o = he(n.value, i.value);
        return o.valid
          ? ((Ie(n) || Ie(i)) && t.dirty(), { status: t.value, value: o.data })
          : (h(r, { code: d.invalid_intersection_types }), g);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([n, i]) => a(n, i))
      : a(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r }),
        );
  }
}
Q.create = (s, e, t) =>
  new Q({ left: s, right: e, typeName: _.ZodIntersection, ...y(t) });
class z extends x {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.array)
      return (
        h(r, {
          code: d.invalid_type,
          expected: f.array,
          received: r.parsedType,
        }),
        g
      );
    if (r.data.length < this._def.items.length)
      return (
        h(r, {
          code: d.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        g
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (h(r, {
        code: d.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      t.dirty());
    const n = [...r.data]
      .map((i, o) => {
        const u = this._def.items[o] || this._def.rest;
        return u ? u._parse(new P(r, i, r.path, o)) : null;
      })
      .filter((i) => !!i);
    return r.common.async
      ? Promise.all(n).then((i) => I.mergeArray(t, i))
      : I.mergeArray(t, n);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new z({ ...this._def, rest: e });
  }
}
z.create = (s, e) => {
  if (!Array.isArray(s))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new z({ items: s, typeName: _.ZodTuple, rest: null, ...y(e) });
};
class Oe extends x {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.map)
      return (
        h(r, { code: d.invalid_type, expected: f.map, received: r.parsedType }),
        g
      );
    const a = this._def.keyType,
      n = this._def.valueType,
      i = [...r.data.entries()].map(([o, u], p) => ({
        key: a._parse(new P(r, o, r.path, [p, "key"])),
        value: n._parse(new P(r, u, r.path, [p, "value"])),
      }));
    if (r.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const u of i) {
          const p = await u.key,
            l = await u.value;
          if (p.status === "aborted" || l.status === "aborted") return g;
          ((p.status === "dirty" || l.status === "dirty") && t.dirty(),
            o.set(p.value, l.value));
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = new Map();
      for (const u of i) {
        const p = u.key,
          l = u.value;
        if (p.status === "aborted" || l.status === "aborted") return g;
        ((p.status === "dirty" || l.status === "dirty") && t.dirty(),
          o.set(p.value, l.value));
      }
      return { status: t.value, value: o };
    }
  }
}
Oe.create = (s, e, t) =>
  new Oe({ valueType: e, keyType: s, typeName: _.ZodMap, ...y(t) });
class J extends x {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.set)
      return (
        h(r, { code: d.invalid_type, expected: f.set, received: r.parsedType }),
        g
      );
    const a = this._def;
    (a.minSize !== null &&
      r.data.size < a.minSize.value &&
      (h(r, {
        code: d.too_small,
        minimum: a.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: a.minSize.message,
      }),
      t.dirty()),
      a.maxSize !== null &&
        r.data.size > a.maxSize.value &&
        (h(r, {
          code: d.too_big,
          maximum: a.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: a.maxSize.message,
        }),
        t.dirty()));
    const n = this._def.valueType;
    function i(u) {
      const p = new Set();
      for (const l of u) {
        if (l.status === "aborted") return g;
        (l.status === "dirty" && t.dirty(), p.add(l.value));
      }
      return { status: t.value, value: p };
    }
    const o = [...r.data.values()].map((u, p) =>
      n._parse(new P(r, u, r.path, p)),
    );
    return r.common.async ? Promise.all(o).then((u) => i(u)) : i(o);
  }
  min(e, t) {
    return new J({
      ...this._def,
      minSize: { value: e, message: m.toString(t) },
    });
  }
  max(e, t) {
    return new J({
      ...this._def,
      maxSize: { value: e, message: m.toString(t) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
J.create = (s, e) =>
  new J({
    valueType: s,
    minSize: null,
    maxSize: null,
    typeName: _.ZodSet,
    ...y(e),
  });
class Se extends x {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Se.create = (s, e) => new Se({ getter: s, typeName: _.ZodLazy, ...y(e) });
class Pe extends x {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return (
        h(t, {
          received: t.data,
          code: d.invalid_literal,
          expected: this._def.value,
        }),
        g
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Pe.create = (s, e) => new Pe({ value: s, typeName: _.ZodLiteral, ...y(e) });
function Le(s, e) {
  return new K({ values: s, typeName: _.ZodEnum, ...y(e) });
}
class K extends x {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e),
        r = this._def.values;
      return (
        h(t, {
          expected: b.joinValues(r),
          received: t.parsedType,
          code: d.invalid_type,
        }),
        g
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(e.data))
    ) {
      const t = this._getOrReturnCtx(e),
        r = this._def.values;
      return (
        h(t, { received: t.data, code: d.invalid_enum_value, options: r }),
        g
      );
    }
    return N(e.data);
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
    return K.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return K.create(
      this.options.filter((r) => !e.includes(r)),
      { ...this._def, ...t },
    );
  }
}
K.create = Le;
class Ze extends x {
  _parse(e) {
    const t = b.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(e);
    if (r.parsedType !== f.string && r.parsedType !== f.number) {
      const a = b.objectValues(t);
      return (
        h(r, {
          expected: b.joinValues(a),
          received: r.parsedType,
          code: d.invalid_type,
        }),
        g
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(b.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      const a = b.objectValues(t);
      return (
        h(r, { received: r.data, code: d.invalid_enum_value, options: a }),
        g
      );
    }
    return N(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ze.create = (s, e) => new Ze({ values: s, typeName: _.ZodNativeEnum, ...y(e) });
class ee extends x {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.promise && t.common.async === !1)
      return (
        h(t, {
          code: d.invalid_type,
          expected: f.promise,
          received: t.parsedType,
        }),
        g
      );
    const r = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
    return N(
      r.then((a) =>
        this._def.type.parseAsync(a, {
          path: t.path,
          errorMap: t.common.contextualErrorMap,
        }),
      ),
    );
  }
}
ee.create = (s, e) => new ee({ type: s, typeName: _.ZodPromise, ...y(e) });
class L extends x {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === _.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e),
      a = this._def.effect || null,
      n = {
        addIssue: (i) => {
          (h(r, i), i.fatal ? t.abort() : t.dirty());
        },
        get path() {
          return r.path;
        },
      };
    if (((n.addIssue = n.addIssue.bind(n)), a.type === "preprocess")) {
      const i = a.transform(r.data, n);
      if (r.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (t.value === "aborted") return g;
          const u = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r,
          });
          return u.status === "aborted"
            ? g
            : u.status === "dirty" || t.value === "dirty"
              ? q(u.value)
              : u;
        });
      {
        if (t.value === "aborted") return g;
        const o = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r,
        });
        return o.status === "aborted"
          ? g
          : o.status === "dirty" || t.value === "dirty"
            ? q(o.value)
            : o;
      }
    }
    if (a.type === "refinement") {
      const i = (o) => {
        const u = a.refinement(o, n);
        if (r.common.async) return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return o;
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return o.status === "aborted"
          ? g
          : (o.status === "dirty" && t.dirty(),
            i(o.value),
            { status: t.value, value: o.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((o) =>
            o.status === "aborted"
              ? g
              : (o.status === "dirty" && t.dirty(),
                i(o.value).then(() => ({ status: t.value, value: o.value }))),
          );
    }
    if (a.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!$(i)) return g;
        const o = a.transform(i.value, n);
        if (o instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: t.value, value: o };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((i) =>
            $(i)
              ? Promise.resolve(a.transform(i.value, n)).then((o) => ({
                  status: t.value,
                  value: o,
                }))
              : g,
          );
    b.assertNever(a);
  }
}
L.create = (s, e, t) =>
  new L({ schema: s, typeName: _.ZodEffects, effect: e, ...y(t) });
L.createWithPreprocess = (s, e, t) =>
  new L({
    schema: e,
    effect: { type: "preprocess", transform: s },
    typeName: _.ZodEffects,
    ...y(t),
  });
class S extends x {
  _parse(e) {
    return this._getType(e) === f.undefined
      ? N(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
S.create = (s, e) => new S({ innerType: s, typeName: _.ZodOptional, ...y(e) });
class D extends x {
  _parse(e) {
    return this._getType(e) === f.null
      ? N(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
D.create = (s, e) => new D({ innerType: s, typeName: _.ZodNullable, ...y(e) });
class fe extends x {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let r = t.data;
    return (
      t.parsedType === f.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
fe.create = (s, e) =>
  new fe({
    innerType: s,
    typeName: _.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...y(e),
  });
class me extends x {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      r = { ...t, common: { ...t.common, issues: [] } },
      a = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return H(a)
      ? a.then((n) => ({
          status: "valid",
          value:
            n.status === "valid"
              ? n.value
              : this._def.catchValue({
                  get error() {
                    return new j(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new j(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
me.create = (s, e) =>
  new me({
    innerType: s,
    typeName: _.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...y(e),
  });
class ze extends x {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const r = this._getOrReturnCtx(e);
      return (
        h(r, { code: d.invalid_type, expected: f.nan, received: r.parsedType }),
        g
      );
    }
    return { status: "valid", value: e.data };
  }
}
ze.create = (s) => new ze({ typeName: _.ZodNaN, ...y(s) });
class Nt extends x {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      r = t.data;
    return this._def.type._parse({ data: r, path: t.path, parent: t });
  }
  unwrap() {
    return this._def.type;
  }
}
class _e extends x {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const n = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return n.status === "aborted"
          ? g
          : n.status === "dirty"
            ? (t.dirty(), q(n.value))
            : this._def.out._parseAsync({
                data: n.value,
                path: r.path,
                parent: r,
              });
      })();
    {
      const a = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return a.status === "aborted"
        ? g
        : a.status === "dirty"
          ? (t.dirty(), { status: "dirty", value: a.value })
          : this._def.out._parseSync({
              data: a.value,
              path: r.path,
              parent: r,
            });
    }
  }
  static create(e, t) {
    return new _e({ in: e, out: t, typeName: _.ZodPipeline });
  }
}
class pe extends x {
  _parse(e) {
    const t = this._def.innerType._parse(e),
      r = (a) => ($(a) && (a.value = Object.freeze(a.value)), a);
    return H(t) ? t.then((a) => r(a)) : r(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
pe.create = (s, e) =>
  new pe({ innerType: s, typeName: _.ZodReadonly, ...y(e) });
w.lazycreate;
var _;
(function (s) {
  ((s.ZodString = "ZodString"),
    (s.ZodNumber = "ZodNumber"),
    (s.ZodNaN = "ZodNaN"),
    (s.ZodBigInt = "ZodBigInt"),
    (s.ZodBoolean = "ZodBoolean"),
    (s.ZodDate = "ZodDate"),
    (s.ZodSymbol = "ZodSymbol"),
    (s.ZodUndefined = "ZodUndefined"),
    (s.ZodNull = "ZodNull"),
    (s.ZodAny = "ZodAny"),
    (s.ZodUnknown = "ZodUnknown"),
    (s.ZodNever = "ZodNever"),
    (s.ZodVoid = "ZodVoid"),
    (s.ZodArray = "ZodArray"),
    (s.ZodObject = "ZodObject"),
    (s.ZodUnion = "ZodUnion"),
    (s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (s.ZodIntersection = "ZodIntersection"),
    (s.ZodTuple = "ZodTuple"),
    (s.ZodRecord = "ZodRecord"),
    (s.ZodMap = "ZodMap"),
    (s.ZodSet = "ZodSet"),
    (s.ZodFunction = "ZodFunction"),
    (s.ZodLazy = "ZodLazy"),
    (s.ZodLiteral = "ZodLiteral"),
    (s.ZodEnum = "ZodEnum"),
    (s.ZodEffects = "ZodEffects"),
    (s.ZodNativeEnum = "ZodNativeEnum"),
    (s.ZodOptional = "ZodOptional"),
    (s.ZodNullable = "ZodNullable"),
    (s.ZodDefault = "ZodDefault"),
    (s.ZodCatch = "ZodCatch"),
    (s.ZodPromise = "ZodPromise"),
    (s.ZodBranded = "ZodBranded"),
    (s.ZodPipeline = "ZodPipeline"),
    (s.ZodReadonly = "ZodReadonly"));
})(_ || (_ = {}));
const v = O.create,
  ye = M.create,
  te = ue.create;
Z.create;
E.create;
const re = w.create;
w.strictCreate;
X.create;
Q.create;
z.create;
const U = K.create;
ee.create;
S.create;
D.create;
const A = re({
  id: v().uuid(),
  code: v(),
  title: v(),
  description: v().optional(),
  calculation_formula: v().optional(),
  unit: v(),
  domain: U(["finance", "sales", "marketing", "operations", "hr", "strategy"]),
  trend_direction: U(["higher_is_better", "lower_is_better", "no_trend"]),
  input_type: U(["cumulative", "non_cumulative"]),
  group_data_period: U(["daily", "weekly", "monthly", "quarterly", "yearly"]),
  total_is: U([
    "sum_of_values",
    "average_of_values",
    "last_value",
    "all_time",
    "ytd_as_of",
  ]),
  is_active: te(),
  created_at: v().datetime(),
  updated_at: v().datetime(),
});
re({
  id: v().uuid(),
  kpi_id: v().uuid(),
  organization_id: v().uuid(),
  period_start: v().datetime(),
  period_end: v().datetime(),
  period_key: v(),
  value: ye(),
  currency: v(),
  data_source: v(),
  is_verified: te(),
  created_at: v().datetime(),
  updated_at: v().datetime(),
  kpi_library: A.optional(),
});
class Et {
  constructor() {
    G(
      this,
      "supabase",
      ge(
        "https://jmekjpytugnetkzphxno.supabase.co",
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4
`,
      ),
    );
  }
  async getKPIs() {
    const { data: e, error: t } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (t)
      throw (
        console.error("Error fetching KPIs:", t),
        new Error(`Failed to fetch KPIs: ${t.message}`)
      );
    return A.array().parse(e || []);
  }
  async getKPIById(e) {
    const { data: t, error: r } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("id", e)
      .maybeSingle();
    if (r)
      throw (
        console.error("Error fetching KPI:", r),
        new Error(`Failed to fetch KPI: ${r.message}`)
      );
    return A.safeParse(t).success ? t : null;
  }
  async getKPIByCode(e) {
    const { data: t, error: r } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("code", e.toUpperCase())
      .maybeSingle();
    if (r)
      throw (
        console.error("Error fetching KPI by code:", r),
        new Error(`Failed to fetch KPI by code: ${r.message}`)
      );
    return A.safeParse(t).success ? t : null;
  }
  async getKPIsByDomain(e) {
    const { data: t, error: r } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", !0)
      .eq("domain", e)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching KPIs by domain:", r),
        new Error(`Failed to fetch KPIs by domain: ${r.message}`)
      );
    return A.array().parse(t || []);
  }
  async createKPI(e) {
    var i;
    const t = { ...e, code: (i = e.code) == null ? void 0 : i.toUpperCase() },
      { data: r, error: a } = await this.supabase
        .from("library_kpis")
        .insert(t)
        .select()
        .single();
    if (a)
      throw (
        console.error("Error creating KPI:", a),
        new Error(`Failed to create KPI: ${a.message}`)
      );
    const n = A.safeParse(r);
    if (!n.success)
      throw new Error(`Invalid KPI data returned: ${n.error.message}`);
    return n.data;
  }
  async updateKPI(e, t) {
    const r = { ...t, ...(t.code && { code: t.code.toUpperCase() }) },
      { data: a, error: n } = await this.supabase
        .from("library_kpis")
        .update(r)
        .eq("id", e)
        .select()
        .single();
    if (n)
      throw (
        console.error("Error updating KPI:", n),
        new Error(`Failed to update KPI: ${n.message}`)
      );
    const i = A.safeParse(a);
    if (!i.success)
      throw new Error(`Invalid KPI data returned: ${i.error.message}`);
    return i.data;
  }
  async deleteKPI(e) {
    const { error: t } = await this.supabase
      .from("library_kpis")
      .update({ is_active: !1 })
      .eq("id", e);
    if (t)
      throw (
        console.error("Error deleting KPI:", t),
        new Error(`Failed to delete KPI: ${t.message}`)
      );
  }
  async hardDeleteKPI(e) {
    const { error: t } = await this.supabase
      .from("library_kpis")
      .delete()
      .eq("id", e);
    if (t)
      throw (
        console.error("Error hard deleting KPI:", t),
        new Error(`Failed to hard delete KPI: ${t.message}`)
      );
  }
  async getKPIDomains() {
    const { data: e, error: t } = await this.supabase
      .from("library_kpis")
      .select("domain")
      .eq("is_active", !0);
    if (t)
      throw (
        console.error("Error fetching KPI domains:", t),
        new Error(`Failed to fetch KPI domains: ${t.message}`)
      );
    return [...new Set((e || []).map((a) => a.domain))];
  }
  async searchKPIs(e) {
    const { data: t, error: r } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", !0)
      .or(`title.ilike.%${e}%,description.ilike.%${e}%`)
      .order("code");
    if (r)
      throw (
        console.error("Error searching KPIs:", r),
        new Error(`Failed to search KPIs: ${r.message}`)
      );
    return A.array().parse(t || []);
  }
}
const Tt = new Et(),
  C = re({
    id: v().uuid(),
    kpi_id: v().uuid(),
    organization_id: v().uuid(),
    period_start: v().datetime(),
    period_end: v().datetime(),
    period_key: v(),
    value: ye(),
    currency: v(),
    data_source: v(),
    is_verified: te(),
    created_at: v().datetime(),
    updated_at: v().datetime(),
    kpi_library: A.optional(),
  });
re({
  kpi_id: v().uuid(),
  organization_id: v().uuid(),
  period_start: v(),
  period_end: v(),
  period_key: v(),
  value: ye(),
  currency: v().default("BRL"),
  data_source: v().default("manual_input"),
  is_verified: te().default(!1),
});
class Ct {
  constructor() {
    G(
      this,
      "supabase",
      ge(
        "https://jmekjpytugnetkzphxno.supabase.co",
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4
`,
      ),
    );
  }
  async getOrganizationKPIs(e) {
    const { data: t, error: r } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", e)
      .order("period_start", { ascending: !1 });
    if (r)
      throw (
        console.error("Error fetching organization KPIs:", r),
        new Error(`Failed to fetch organization KPIs: ${r.message}`)
      );
    return C.array().parse(t || []);
  }
  async getOrganizationKPIsByPeriod(e, t) {
    const { data: r, error: a } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", e)
      .eq("period_key", t)
      .order("period_start", { ascending: !1 });
    if (a)
      throw (
        console.error("Error fetching organization KPIs by period:", a),
        new Error(`Failed to fetch organization KPIs by period: ${a.message}`)
      );
    return C.array().parse(r || []);
  }
  async getLatestOrganizationKPIs(e) {
    const { data: t, error: r } = await this.supabase
      .from("user_metrics")
      .select("kpi_id, period_key")
      .eq("organization_id", e)
      .order("period_key", { ascending: !1 });
    if (r)
      throw (
        console.error("Error fetching latest periods:", r),
        new Error(`Failed to fetch latest periods: ${r.message}`)
      );
    const a = new Map();
    t == null ||
      t.forEach((u) => {
        a.has(u.kpi_id) || a.set(u.kpi_id, u.period_key);
      });
    const n = Array.from(a.values());
    if (n.length === 0) return [];
    const { data: i, error: o } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", e)
      .in("period_key", n)
      .order("period_start", { ascending: !1 });
    if (o)
      throw (
        console.error("Error fetching latest organization KPIs:", o),
        new Error(`Failed to fetch latest organization KPIs: ${o.message}`)
      );
    return C.array().parse(i || []);
  }
  async getOrganizationKPIById(e, t) {
    const { data: r, error: a } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", e)
      .eq("kpi_id", t)
      .order("period_start", { ascending: !1 })
      .limit(1)
      .maybeSingle();
    if (a)
      throw (
        console.error("Error fetching organization KPI:", a),
        new Error(`Failed to fetch organization KPI: ${a.message}`)
      );
    return C.safeParse(r).success ? r : null;
  }
  async createOrganizationKPI(e) {
    const { data: t, error: r } = await this.supabase
      .from("user_metrics")
      .insert(e)
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .single();
    if (r)
      throw (
        console.error("Error creating organization KPI:", r),
        new Error(`Failed to create organization KPI: ${r.message}`)
      );
    const a = C.safeParse(t);
    if (!a.success)
      throw new Error(
        `Invalid organization KPI data returned: ${a.error.message}`,
      );
    return a.data;
  }
  async updateOrganizationKPI(e, t) {
    const { data: r, error: a } = await this.supabase
      .from("user_metrics")
      .update(t)
      .eq("id", e)
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .single();
    if (a)
      throw (
        console.error("Error updating organization KPI:", a),
        new Error(`Failed to update organization KPI: ${a.message}`)
      );
    const n = C.safeParse(r);
    if (!n.success)
      throw new Error(
        `Invalid organization KPI data returned: ${n.error.message}`,
      );
    return n.data;
  }
  async deleteOrganizationKPI(e) {
    const { error: t } = await this.supabase
      .from("user_metrics")
      .delete()
      .eq("id", e);
    if (t)
      throw (
        console.error("Error deleting organization KPI:", t),
        new Error(`Failed to delete organization KPI: ${t.message}`)
      );
  }
  async getKPIHistory(e, t, r = 12) {
    const { data: a, error: n } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", e)
      .eq("kpi_id", t)
      .order("period_start", { ascending: !1 })
      .limit(r);
    if (n)
      throw (
        console.error("Error fetching KPI history:", n),
        new Error(`Failed to fetch KPI history: ${n.message}`)
      );
    return C.array().parse(a || []);
  }
  async getKPITrend(e, t, r = 6) {
    const a = await this.getKPIHistory(e, t, r);
    if (a.length === 0)
      return {
        current: null,
        previous: null,
        trend: "stable",
        percentageChange: 0,
      };
    const n = a[0],
      i = a[1] || null;
    if (!i)
      return {
        current: n,
        previous: null,
        trend: "stable",
        percentageChange: 0,
      };
    const o = ((n.value - i.value) / i.value) * 100,
      u = o > 0 ? "up" : o < 0 ? "down" : "stable";
    return { current: n, previous: i, trend: u, percentageChange: o };
  }
  async bulkCreateOrganizationKPIs(e) {
    const { data: t, error: r } = await this.supabase
      .from("user_metrics")
      .insert(e).select(`
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `);
    if (r)
      throw (
        console.error("Error bulk creating organization KPIs:", r),
        new Error(`Failed to bulk create organization KPIs: ${r.message}`)
      );
    const a = C.array().safeParse(t || []);
    if (!a.success)
      throw new Error(
        `Invalid organization KPI data returned: ${a.error.message}`,
      );
    return a.data;
  }
  async getKPIsByDateRange(e, t, r) {
    const { data: a, error: n } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", e)
      .gte("period_start", t)
      .lte("period_end", r)
      .order("period_start", { ascending: !1 });
    if (n)
      throw (
        console.error("Error fetching KPIs by date range:", n),
        new Error(`Failed to fetch KPIs by date range: ${n.message}`)
      );
    return C.array().parse(a || []);
  }
}
const At = new Ct(),
  jt = {
    RUNWAY: { priority: 1, reason: "Vital para sobrevivência da empresa" },
    REVENUE: { priority: 1, reason: "Receita principal do negócio" },
    GM: { priority: 1, reason: "Margem bruta essencial para saúde financeira" },
    GROWTH: { priority: 1, reason: "Crescimento indica saúde do negócio" },
    EBITDA: { priority: 2, reason: "Lucro operacional关键" },
    CAC: { priority: 2, reason: "Custo de aquisição de cliente" },
    LTV: { priority: 2, reason: "Lifetime value do cliente" },
    CHURN: { priority: 2, reason: "Taxa de cancelamento crítica" },
  },
  Rt = {
    SAAS: [
      "RUNWAY",
      "MRR",
      "CAC",
      "LTV",
      "CHURN",
      "NPS",
      "NET_REVENUE_RETENTION",
    ],
    ECOMMERCE: [
      "REVENUE",
      "GM",
      "CAC",
      "LTV",
      "AOV",
      "CONVERSION_RATE",
      "RETENTION",
    ],
    SERVICES: [
      "REVENUE",
      "UTILIZATION",
      "CAC",
      "LTV",
      "PROJECT_MARGIN",
      "CLIENT_SATISFACTION",
    ],
    MANUFACTURING: [
      "REVENUE",
      "GM",
      "OPEX",
      "INVENTORY_TURNOVER",
      "CAPACITY_UTILIZATION",
      "DEFECT_RATE",
    ],
    RETAIL: [
      "REVENUE",
      "GM",
      "SAME_STORE_GROWTH",
      "INVENTORY_TURNOVER",
      "AVG_TRANSACTION",
    ],
  },
  Ot = {
    STARTUP: [
      "RUNWAY",
      "REVENUE",
      "GROWTH",
      "CAC",
      "LTV",
      "BURN_RATE",
      "HEADCOUNT",
    ],
    SME: ["REVENUE", "GM", "EBITDA", "CASH_FLOW", "AR", "AP", "HEADCOUNT"],
    MID_MARKET: [
      "REVENUE",
      "GM",
      "EBITDA",
      "ROIC",
      "DEBT_RATIO",
      "WORKING_CAPITAL",
      "HEADCOUNT",
    ],
    ENTERPRISE: [
      "REVENUE",
      "GM",
      "EBITDA",
      "ROE",
      "DEBT_RATIO",
      "FREE_CASH_FLOW",
      "TOTAL_ASSETS",
    ],
  };
class St {
  constructor() {
    G(
      this,
      "supabase",
      ge(
        "https://jmekjpytugnetkzphxno.supabase.co",
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4
`,
      ),
    );
  }
  async calculateRelevance(e, t, r) {
    const a = await Tt.getKPIs(),
      n = await this.getDataPresence(e),
      i = this.getReadinessLevel(n.totalDataPoints),
      o = [],
      u = t ? Rt[t] || [] : [],
      p = r ? Ot[r] || [] : [];
    for (const l of a) {
      let k = 999,
        T = "KPI disponível";
      const se = jt[l.code];
      (se && ((k = se.priority), (T = se.reason)),
        u.includes(l.code) &&
          ((k = Math.max(k - 1, 1)), (T = `Relevante para setor ${t}`)),
        p.includes(l.code) &&
          ((k = Math.max(k - 1, 1)), (T = `Relevante para porte ${r}`)));
      const ve = n.byKPI[l.code] || 0;
      this.shouldIncludeKPI(i, ve, k) &&
        o.push({
          code: l.code,
          title: l.title,
          domain: l.domain,
          priority: k,
          reason: T,
          readiness_level: i,
          dataPoints: ve,
          next_action: this.suggestNextAction(l.code),
        });
    }
    return o.sort((l, k) => l.priority - k.priority);
  }
  shouldIncludeKPI(e, t, r) {
    switch (e) {
      case 0:
        return !1;
      case 1:
        return r <= 3 && t > 0;
      case 2:
        return r <= 5;
      case 3:
        return !0;
      case 4:
        return !0;
      default:
        return !1;
    }
  }
  async getDataPresence(e) {
    const t = await At.getOrganizationKPIs(e),
      r = {},
      a = {};
    for (const i of t)
      if (i.kpi_library) {
        const o = i.kpi_library.domain || "unknown",
          u = i.kpi_library.code || "unknown";
        ((r[o] = (r[o] || 0) + 1), (a[u] = (a[u] || 0) + 1));
      }
    const n = new Set(t.map((i) => i.kpi_id));
    return {
      totalKPIs: n.size,
      kpisWithData: n.size,
      totalDataPoints: t.length,
      byDomain: r,
      byKPI: a,
    };
  }
  getReadinessLevel(e) {
    return e === 0 ? 0 : e < 5 ? 1 : e < 20 ? 2 : e < 50 ? 3 : 4;
  }
  getMaturityInfo(e) {
    const t = this.getReadinessLevel(e);
    return {
      0: {
        level: 0,
        label: "Iniciante",
        description: "Preciso de dados para começar",
        nextAction: "Adicione seu primeiro arquivo de dados",
      },
      1: {
        level: 1,
        label: "Básico",
        description: "Alguns dados básicos disponíveis",
        nextAction: "Continue adicionando dados para métricas principais",
      },
      2: {
        level: 2,
        label: "Em Desenvolvimento",
        description: " dados suficientes para análises úteis",
        nextAction: "Adicione mais períodos para ver tendências",
      },
      3: {
        level: 3,
        label: "Intermediário",
        description: "Boa base de dados para análise",
        nextAction: "Adicione mais KPIs para ter uma visão completa",
      },
      4: {
        level: 4,
        label: "Avançado",
        description: "Dados robustos para análise preditiva",
        nextAction: "Explore análises avançadas e previsões",
      },
    }[t];
  }
  suggestNextAction(e) {
    return (
      {
        RUNWAY: "Adicione projeção de fluxo de caixa mensal",
        REVENUE: "Adicione revenue mensal dos últimos 12 meses",
        GM: "Adicione dados de custo de vendas",
        CAC: "Adicione dados de marketing spend e novas aquisição",
        LTV: "Adicione dados de receita por cliente",
        CHURN: "Adicione dados de clientes ativos e cancelamentos",
        EBITDA: "Adicione dados de despesas operacionais",
        GROWTH: "Adicione dados de vendas comparando períodos",
      }[e] || "Continue adicionando dados históricos"
    );
  }
}
const ce = new St(),
  Ve = {
    relevance: (s) => ["relevance", s],
    dataPresence: (s) => ["dataPresence", s],
    maturity: (s) => ["maturity", s],
  };
function Pt(s, e, t) {
  const r = be({
      queryKey: Ve.relevance(s),
      queryFn: () => ce.calculateRelevance(s, e, t),
      enabled: !!s,
      staleTime: 3e5,
    }),
    a = be({
      queryKey: Ve.dataPresence(s),
      queryFn: () => ce.getDataPresence(s),
      enabled: !!s,
      staleTime: 5 * 60 * 1e3,
    }),
    n = a.data ? ce.getMaturityInfo(a.data.totalDataPoints) : void 0;
  return {
    kpis: r.data,
    isLoading: r.isLoading || a.isLoading,
    error: r.error || a.error,
    maturity: n,
  };
}
function Bt() {
  const { t: s } = Fe(),
    { organization: e, isLoading: t } = Ye(),
    r = (e == null ? void 0 : e.id) || "",
    { kpis: a, isLoading: n, maturity: i } = Pt(r);
  if (t || n)
    return c.jsx("div", {
      className: "container mx-auto py-6 space-y-6",
      children: c.jsxs("div", {
        className: "space-y-4",
        children: [
          c.jsx(oe, { className: "h-8 w-64" }),
          c.jsx(oe, { className: "h-4 w-96" }),
          c.jsx("div", {
            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
            children: [...Array(4)].map((l, k) =>
              c.jsx(oe, { className: "h-32" }, k),
            ),
          }),
        ],
      }),
    });
  const o = (l) =>
      typeof l == "number" ? l.toLocaleString("pt-BR") : String(l ?? "-"),
    u = (l) => {
      var T;
      const k = (T = l.relevanceScore) == null ? void 0 : T.status;
      return k === "high" ? "positive" : k === "low" ? "negative" : "neutral";
    },
    p = (l) => {
      if (!l.relevanceScore) return;
      const k = l.relevanceScore.score || 0;
      return { value: Math.round(k * 10), isPositive: k > 0.5 };
    };
  return c.jsxs("div", {
    className: "container mx-auto py-6 space-y-6",
    children: [
      c.jsx("div", {
        className: "flex items-center justify-between",
        children: c.jsxs("div", {
          children: [
            c.jsx("h1", {
              className: "text-3xl font-bold tracking-tight",
              children: s("metrics.title", { defaultValue: "Métricas e KPIs" }),
            }),
            c.jsx("p", {
              className: "text-muted-foreground mt-2",
              children: s("metrics.description", {
                defaultValue:
                  "Visualize os principais indicadores da sua organização",
              }),
            }),
          ],
        }),
      }),
      i &&
        c.jsxs(F, {
          className:
            "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
          children: [
            c.jsx(ne, {
              className: "pb-2",
              children: c.jsxs(ie, {
                className: "text-lg flex items-center gap-2",
                children: [
                  c.jsx(Je, { className: "h-5 w-5" }),
                  s("metrics.maturity_level", {
                    defaultValue: "Nível de Maturidade",
                  }),
                ],
              }),
            }),
            c.jsx(B, {
              children: c.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  c.jsx("div", {
                    className: "text-3xl font-bold text-primary",
                    children: i.level,
                  }),
                  c.jsx("div", {
                    className: "flex-1",
                    children: c.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: i.description,
                    }),
                  }),
                  c.jsx($e, {
                    variant: "outline",
                    className: "text-sm",
                    children: i.label,
                  }),
                ],
              }),
            }),
          ],
        }),
      c.jsx("div", {
        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
        children:
          a && a.length > 0
            ? a
                .slice(0, 8)
                .map((l, k) =>
                  c.jsx(
                    Qe,
                    {
                      code: l.code,
                      title: l.name || l.title,
                      value: o(l.value),
                      unit: l.unit,
                      status: u(l),
                      trend: p(l),
                    },
                    l.code || k,
                  ),
                )
            : c.jsx(c.Fragment, {
                children: c.jsx(F, {
                  children: c.jsx(B, {
                    className: "pt-6",
                    children: c.jsxs("div", {
                      className: "text-center space-y-2",
                      children: [
                        c.jsx("div", {
                          className:
                            "mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center",
                          children: c.jsx(Ge, {
                            className: "h-6 w-6 text-muted-foreground",
                          }),
                        }),
                        c.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: s("metrics.no_data", {
                            defaultValue: "Nenhum KPI encontrado",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
      }),
      c.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-2",
        children: [
          c.jsxs(F, {
            children: [
              c.jsxs(ne, {
                children: [
                  c.jsx(ie, {
                    children: s("metrics.kpis_relevantes", {
                      defaultValue: "KPIs Relevantes",
                    }),
                  }),
                  c.jsx(xe, {
                    children: s("metrics.kpis_relevantes_desc", {
                      defaultValue:
                        "Indicadores com maior relevância para seu setor",
                    }),
                  }),
                ],
              }),
              c.jsx(B, {
                children:
                  a && a.length > 0
                    ? c.jsx("div", {
                        className: "space-y-4",
                        children: a
                          .slice(0, 5)
                          .map((l, k) =>
                            c.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center justify-between p-3 rounded-lg border",
                                children: [
                                  c.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      c.jsx("p", {
                                        className: "font-medium text-sm",
                                        children: l.name || l.title,
                                      }),
                                      c.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: l.code,
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "text-right",
                                    children: [
                                      c.jsx("p", {
                                        className: "text-lg font-bold",
                                        children: o(l.value),
                                      }),
                                      l.unit &&
                                        c.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: l.unit,
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              l.code || k,
                            ),
                          ),
                      })
                    : c.jsxs("div", {
                        className: "text-center py-8",
                        children: [
                          c.jsx(He, {
                            className:
                              "h-12 w-12 text-muted-foreground/50 mx-auto mb-3",
                          }),
                          c.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: s("metrics.upload_data", {
                              defaultValue: "Carregue dados para ver seus KPIs",
                            }),
                          }),
                        ],
                      }),
              }),
            ],
          }),
          c.jsxs(F, {
            children: [
              c.jsxs(ne, {
                children: [
                  c.jsx(ie, {
                    children: s("metrics.resumo", { defaultValue: "Resumo" }),
                  }),
                  c.jsx(xe, {
                    children: s("metrics.resumo_desc", {
                      defaultValue: "Visão geral dos dados disponíveis",
                    }),
                  }),
                ],
              }),
              c.jsx(B, {
                children: c.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    c.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                      children: [
                        c.jsx("span", {
                          className: "text-sm font-medium",
                          children: s("metrics.total_kpis", {
                            defaultValue: "Total de KPIs",
                          }),
                        }),
                        c.jsx("span", {
                          className: "text-lg font-bold",
                          children: (a == null ? void 0 : a.length) || 0,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                      children: [
                        c.jsx("span", {
                          className: "text-sm font-medium",
                          children: s("metrics.kpis_positivos", {
                            defaultValue: "KPIs Positivos",
                          }),
                        }),
                        c.jsx("span", {
                          className: "text-lg font-bold text-green-600",
                          children:
                            (a == null
                              ? void 0
                              : a.filter((l) => u(l) === "positive").length) ||
                            0,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                      children: [
                        c.jsx("span", {
                          className: "text-sm font-medium",
                          children: s("metrics.kpisAtenção", {
                            defaultValue: "KPIs Atenção",
                          }),
                        }),
                        c.jsx("span", {
                          className: "text-lg font-bold text-red-600",
                          children:
                            (a == null
                              ? void 0
                              : a.filter((l) => u(l) === "negative").length) ||
                            0,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                      children: [
                        c.jsx("span", {
                          className: "text-sm font-medium",
                          children: s("metrics.kpis_neutros", {
                            defaultValue: "KPIs Neutros",
                          }),
                        }),
                        c.jsx("span", {
                          className: "text-lg font-bold text-yellow-600",
                          children:
                            (a == null
                              ? void 0
                              : a.filter((l) => u(l) === "neutral").length) ||
                            0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { Bt as default };
