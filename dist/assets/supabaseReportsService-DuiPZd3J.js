import { s as n } from "./index-DF8MdIXV.js";
async function g(i) {
  const { data: d, error: r } = await n
    .from("reports")
    .select("*")
    .eq("organization_id", i)
    .order("created_at", { ascending: !1 });
  return r
    ? (console.error("Error fetching reports:", r), [])
    : (d || []).map((t) => {
        var e, s, o;
        return {
          id: t.id,
          title: t.title,
          subtitle: void 0,
          category:
            ((e = t.data_json) == null ? void 0 : e.category) || "Geral",
          createdAt: t.created_at,
          updatedAt: t.updated_at,
          status: t.status || "draft",
          description: t.description || "",
          templateId:
            ((s = t.data_json) == null ? void 0 : s.templateId) ||
            "executive-strategic",
          blocks: ((o = t.data_json) == null ? void 0 : o.blocks) || [],
          rawData: t.data_json,
        };
      });
}
async function f(i) {
  var e, s, o;
  const { data: d, error: r } = await n
    .from("reports")
    .select("*")
    .eq("id", i)
    .single();
  if (r || !d) return (console.error("Error fetching report:", r), null);
  const t = d;
  return {
    id: t.id,
    title: t.title,
    subtitle: void 0,
    category: ((e = t.data_json) == null ? void 0 : e.category) || "Geral",
    createdAt: t.created_at,
    updatedAt: t.updated_at,
    status: t.status || "draft",
    description: t.description || "",
    templateId:
      ((s = t.data_json) == null ? void 0 : s.templateId) ||
      "executive-strategic",
    blocks: ((o = t.data_json) == null ? void 0 : o.blocks) || [],
    rawData: t.data_json,
  };
}
async function j(i, d, r, t, e, s) {
  var l, u, p;
  const { data: o, error: c } = await n
    .from("reports")
    .insert({
      organization_id: i,
      user_id: d,
      title: r,
      description: t,
      status: "draft",
      data_json: s || { templateId: e },
    })
    .select()
    .single();
  if (c) return (console.error("Error creating report:", c), null);
  const a = o;
  return {
    id: a.id,
    title: a.title,
    subtitle: void 0,
    category: ((l = a.data_json) == null ? void 0 : l.category) || "Geral",
    createdAt: a.created_at,
    updatedAt: a.updated_at,
    status: a.status || "draft",
    description: a.description || "",
    templateId: ((u = a.data_json) == null ? void 0 : u.templateId) || e,
    blocks: ((p = a.data_json) == null ? void 0 : p.blocks) || [],
    rawData: a.data_json,
  };
}
export { f as a, j as c, g };
