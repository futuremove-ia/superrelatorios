var T = Object.defineProperty;
var B = (i, s, e) =>
  s in i
    ? T(i, s, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (i[s] = e);
var h = (i, s, e) => B(i, typeof s != "symbol" ? s + "" : s, e);
import { j as t } from "./vendor-data-DuuuwLk5.js";
import { r as w } from "./vendor-react-DfYPWlel.js";
import { C as _, b as E, c as I, d as O, a as k } from "./card-CTs8HHrG.js";
import { s as N, d as D, u as F, B as A } from "./index-CaCe4Bjh.js";
import { I as $ } from "./input-D9BHdvW6.js";
import { B as M } from "./badge-Dl11-P0M.js";
import { S as R } from "./scroll-area-Blxe5y-T.js";
import { u as H } from "./useCurrentOrganization-DeW0zOch.js";
import { r as z, u as V, P as Q } from "./xlsx-BA-nE33S.js";
import { an as S, g as q, $ as K, bF as L } from "./vendor-utils-CGetvm_l.js";
import "./vendor-radix-CfL9Rjb9.js";
var C = {};
function W(i) {
  switch (i.provider) {
    case "huggingface":
      return new G(i.apiKey, i.model);
    case "openai":
      return new J(i.apiKey, i.model);
    case "gemini":
      return new U(i.apiKey, i.model);
    case "local":
    default:
      return new f();
  }
}
class G {
  constructor(s, e) {
    h(this, "dimensions", 384);
    h(this, "apiKey");
    h(this, "model", "BAAI/bge-small-en-v1.5");
    ((this.apiKey = s || C.HUGGINGFACE_API_KEY || ""),
      e && (this.model = e),
      this.apiKey ||
        console.warn("[HuggingFaceProvider] No API key, using fallback"));
  }
  async embed(s) {
    if (!this.apiKey) return new f().embed(s);
    const e = await fetch(
      `https://api-inference.huggingface.com/pipeline/feature-extraction/${this.model}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: s, options: { normalize: !0 } }),
      },
    );
    if (!e.ok)
      return (
        console.error("[HuggingFaceProvider] Error:", await e.text()),
        new f().embed(s)
      );
    const a = await e.json();
    return Array.isArray(a) ? a : new f().embed(s);
  }
  async embedBatch(s) {
    return Promise.all(s.map((e) => this.embed(e)));
  }
}
class J {
  constructor(s, e) {
    h(this, "dimensions", 1536);
    h(this, "apiKey");
    h(this, "model", "text-embedding-3-small");
    ((this.apiKey = s || C.OPENAI_API_KEY || ""), e && (this.model = e));
  }
  async embed(s) {
    var r, n;
    const e = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: this.model, input: s }),
    });
    return e.ok
      ? ((n = (r = (await e.json()).data) == null ? void 0 : r[0]) == null
          ? void 0
          : n.embedding) || new f().embed(s)
      : (console.error("[OpenAIProvider] Error:", await e.text()),
        new f().embed(s));
  }
  async embedBatch(s) {
    const e = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: this.model, input: s }),
    });
    return e.ok
      ? ((await e.json()).data || []).map((r) => r.embedding)
      : Promise.all(s.map((r) => this.embed(r)));
  }
}
class U {
  constructor(s, e) {
    h(this, "dimensions", 768);
    h(this, "apiKey");
    h(this, "model", "gemini-embedding-001");
    ((this.apiKey = s || C.GEMINI_API_KEY || ""), e && (this.model = e));
  }
  async embed(s) {
    var n;
    const e = `https://generativelanguage.googleapis.com/v1/models/${this.model}:embedContent?key=${this.apiKey}`,
      a = await fetch(e, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: { role: "user", parts: [{ text: s }] },
          taskType: "SEMANTIC_SIMILARITY",
        }),
      });
    return a.ok
      ? ((n = (await a.json()).embedding) == null ? void 0 : n.values) ||
          new f().embed(s)
      : (console.error("[GeminiProvider] Error:", await a.text()),
        new f().embed(s));
  }
  async embedBatch(s) {
    return Promise.all(s.map((e) => this.embed(e)));
  }
}
class f {
  constructor() {
    h(this, "dimensions", 384);
  }
  async embed(s) {
    const e = this.simpleHash(s),
      a = new Array(this.dimensions).fill(0);
    for (let n = 0; n < this.dimensions; n++)
      a[n] = Math.sin(e * (n + 1)) * Math.cos(e * (n + 2));
    const r = Math.sqrt(a.reduce((n, d) => n + d * d, 0));
    return r > 0 ? a.map((n) => n / r) : a;
  }
  async embedBatch(s) {
    const e = [];
    for (const a of s) e.push(await this.embed(a));
    return e;
  }
  simpleHash(s) {
    let e = 0;
    for (let a = 0; a < s.length; a++)
      ((e = (e << 5) - e + s.charCodeAt(a)), (e = e & e));
    return Math.abs(e);
  }
}
class Y {
  async parse(s, e) {
    return e.includes("spreadsheet") ||
      e.includes("excel") ||
      e.endsWith(".xlsx") ||
      e.endsWith(".xls")
      ? this.parseExcel(s)
      : e === "text/csv" || e.endsWith(".csv")
        ? this.parseCSV(s)
        : e === "text/plain" || e.endsWith(".txt")
          ? s.toString()
          : e === "application/pdf"
            ? this.parsePDF(s)
            : s.toString();
  }
  parseExcel(s) {
    try {
      const e = z(s, { type: "buffer" }),
        a = [];
      return (
        e.SheetNames.forEach((r) => {
          const n = e.Sheets[r],
            d = V.sheet_to_json(n, { header: 1 });
          a.push(JSON.stringify(d));
        }),
        a.join(`

`)
      );
    } catch {
      return "";
    }
  }
  parseCSV(s) {
    const e = Q.parse(s.toString(), { header: !1 });
    return JSON.stringify(e.data);
  }
  parsePDF(s) {
    return "";
  }
  chunkText(s, e = "fixed", a = 500, r = 50) {
    return e === "fixed"
      ? this.chunkByWords(s, a, r)
      : e === "paragraph"
        ? this.chunkByParagraphs(s)
        : this.chunkByWords(s, a, r);
  }
  chunkByWords(s, e, a) {
    const r = s.split(/\s+/),
      n = [];
    for (let d = 0; d < r.length; d += e - a) {
      const o = r.slice(d, d + e);
      o.length > 0 && n.push(o.join(" "));
    }
    return n;
  }
  chunkByParagraphs(s) {
    return s.split(/\n\n+/).filter((e) => e.trim().length > 0);
  }
}
class Z {
  constructor(s) {
    h(this, "embeddingProvider");
    h(this, "parser");
    h(this, "defaultTopK", 5);
    ((this.embeddingProvider = W(s)), (this.parser = new Y()));
  }
  async indexDocument(s) {
    const {
        organizationId: e,
        title: a,
        content: r,
        sourceType: n,
        sourceId: d,
        mimeType: o,
      } = s,
      u = o ? await this.parser.parse(Buffer.from(r), o) : r,
      { data: p, error: y } = await N.from("rag_documents")
        .insert({
          organization_id: e,
          title: a,
          source_type: n,
          source_id: d,
          content_text: u,
          is_indexed: !1,
        })
        .select()
        .single();
    if (y || !p)
      throw new Error(
        (y == null ? void 0 : y.message) || "Failed to create document",
      );
    const m = this.chunkText(u, e, p.id),
      j = await this.embeddingProvider.embedBatch(m.map((l) => l.text)),
      c = m.map((l, x) => ({
        document_id: p.id,
        organization_id: e,
        chunk_text: l.text,
        chunk_index: l.index,
        metadata: JSON.stringify(l.metadata),
        embedding: `[${j[x].join(",")}]`,
      })),
      { error: g } = await N.from("rag_chunks").insert(c);
    if (g) throw new Error(g.message);
    return (
      await N.from("rag_documents").update({ is_indexed: !0 }).eq("id", p.id),
      p.id
    );
  }
  async search(s) {
    const {
        organizationId: e,
        query: a,
        topK: r = this.defaultTopK,
        filters: n,
      } = s,
      d = this.generateQueryVariations(a),
      o = await this.embeddingProvider.embed(d.join(" ")),
      { data: u, error: p } = await N.from("rag_chunks")
        .select(
          "id, document_id, chunk_text, chunk_index, embedding, metadata, rag_documents!inner(title)",
        )
        .eq("organization_id", e)
        .limit(r * 3);
    return p || !u
      ? []
      : u
          .map((m) => ({
            ...m,
            title: m["rag_documents.title"],
            score: this.cosineSimilarity(o, this.parseEmbedding(m.embedding)),
          }))
          .sort((m, j) => j.score - m.score)
          .slice(0, r)
          .map((m) => ({
            documentId: m.document_id,
            title: m.title,
            chunkText: m.chunk_text,
            score: m.score,
          }));
  }
  async deleteDocument(s) {
    await N.from("rag_documents").delete().eq("id", s);
  }
  generateQueryVariations(s) {
    const e = [s],
      a = {
        receita: ["faturamento", "vendas", "renda", "income", "revenue"],
        vendas: ["sales", "venda", "transactions", "commercial"],
        lucro: ["profit", "earnings", "gain"],
        custo: ["cost", "despesa", "expense", "gasto"],
        cliente: ["customer", "client", "buyer", "consumidor"],
        fornecedor: ["supplier", "vendor", "provider"],
        estoque: ["inventory", "stock", "goods"],
        funcionario: ["employee", "staff", "worker"],
        dívida: ["debt", "liability", "loan"],
        faturamento: ["revenue", "billing"],
        margem: ["margin", "profitability"],
        mês: ["month", "mensal"],
        ano: ["year", "anual"],
      },
      r = s.toLowerCase();
    for (const [n, d] of Object.entries(a))
      if (r.includes(n))
        for (const o of d)
          (e.push(s.replace(new RegExp(n, "gi"), o)),
            e.push(s.replace(new RegExp(o, "gi"), n)));
    return [...new Set(e)].slice(0, 8);
  }
  chunkText(s, e, a) {
    const d = s.split(/\s+/),
      o = [];
    for (let u = 0; u < d.length; u += 450) {
      const p = d.slice(u, u + 500);
      p.length > 0 &&
        o.push({
          text: p.join(" "),
          index: Math.floor(u / 450),
          metadata: { documentId: a, organizationId: e },
        });
    }
    return o;
  }
  cosineSimilarity(s, e) {
    if (s.length !== e.length || s.length === 0) return 0;
    let a = 0,
      r = 0,
      n = 0;
    for (let o = 0; o < s.length; o++)
      ((a += s[o] * e[o]), (r += s[o] * s[o]), (n += e[o] * e[o]));
    const d = Math.sqrt(r) * Math.sqrt(n);
    return d === 0 ? 0 : a / d;
  }
  parseEmbedding(s) {
    if (!s) return new Array(this.embeddingProvider.dimensions).fill(0);
    try {
      const e = s.match(/\[(.*)\]/);
      return e
        ? e[1].split(",").map(Number)
        : new Array(this.embeddingProvider.dimensions).fill(0);
    } catch {
      return new Array(this.embeddingProvider.dimensions).fill(0);
    }
  }
}
const P = new Z({ provider: "local" }),
  X = {
    async indexDocument(i) {
      return { documentId: await P.indexDocument(i) };
    },
    async search(i) {
      return P.search({
        organizationId: i.organizationId,
        query: i.query,
        topK: i.topK || 5,
      });
    },
    async deleteDocument(i) {
      return (await P.deleteDocument(i), { success: !0 });
    },
    generateQueryVariations(i) {
      return P.generateQueryVariations(i);
    },
  },
  ee = [
    "Como está a saúde do meu negócio?",
    "Quais riscos temos em aberto?",
    "Me dá um resumo executivo",
    "Quais ações estão atrasadas?",
    "Qual a tendência das nossas vendas?",
  ],
  he = () => {
    const { toast: i } = D(),
      { t: s } = F(),
      { organization: e } = H(),
      [a, r] = w.useState([]),
      [n, d] = w.useState(""),
      [o, u] = w.useState(!1),
      [p, y] = w.useState([]);
    w.useEffect(() => {
      y(ee);
    }, []);
    const m = async (c) => {
        if (!(e != null && e.id) || !c.trim()) return;
        const g = {
          id: Date.now().toString(),
          role: "user",
          content: c,
          timestamp: new Date(),
        };
        (r((l) => [...l, g]), d(""), u(!0));
        try {
          const l = await X.search({ organizationId: e.id, query: c, topK: 5 }),
            x = j(l),
            v = {
              id: (Date.now() + 1).toString(),
              role: "assistant",
              content: x,
              sources: l.map((b) => ({
                documentId: b.documentId,
                title: b.title,
                score: b.score,
              })),
              timestamp: new Date(),
            };
          r((b) => [...b, v]);
        } catch {
          i({
            title: "Erro na busca",
            description:
              "Não foi possível buscar informações. Tente novamente.",
            variant: "destructive",
          });
        } finally {
          u(!1);
        }
      },
      j = (c) => {
        if (c.length === 0)
          return "Não encontrei informações relevantes sobre isso. Tente perguntar de outra forma ou importe mais dados.";
        const g = c[0],
          l = c.reduce((v, b) => v + b.score, 0) / c.length;
        let x = `Com base nos seus dados:

`;
        return (
          (x += `**${g.title}**
`),
          (x += `${g.chunkText.substring(0, 500)}...

`),
          l > 0.7
            ? (x += `✅ **Alta relevância** (${(l * 100).toFixed(0)}% de confiança)

`)
            : l > 0.4
              ? (x += `⚠️ **Relevância moderada** (${(l * 100).toFixed(0)}% de confiança)

`)
              : (x += `📝 **Relevância baixa** - pode não ser exatamente o que procura

`),
          c.length > 1 &&
            (x += `Outras fontes encontradas: ${c
              .slice(1)
              .map((v) => v.title)
              .join(", ")}`),
          x
        );
      };
    return t.jsx("div", {
      className: "bg-gradient-subtle min-h-full",
      children: t.jsxs("div", {
        className: "max-w-4xl mx-auto p-4 sm:p-6",
        children: [
          t.jsxs("div", {
            className: "mb-6",
            children: [
              t.jsxs("h1", {
                className:
                  "text-2xl font-bold text-foreground flex items-center gap-2",
                children: [
                  t.jsx(S, { className: "h-6 w-6 text-primary" }),
                  "Analista de Negócios",
                ],
              }),
              t.jsx("p", {
                className: "text-muted-foreground mt-1",
                children:
                  "Pergunte sobre a saúde do seu negócio em linguagem natural",
              }),
            ],
          }),
          t.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
            children: [
              t.jsx("div", {
                className: "lg:col-span-3 space-y-4",
                children: t.jsxs(_, {
                  className: "min-h-[500px] flex flex-col",
                  children: [
                    t.jsxs(E, {
                      children: [
                        t.jsxs(I, {
                          className: "flex items-center gap-2",
                          children: [
                            t.jsx(S, { className: "h-5 w-5 text-primary" }),
                            "Conversa",
                          ],
                        }),
                        t.jsx(O, {
                          children:
                            "Tire dúvidas sobre seus dados, métricas e negócios",
                        }),
                      ],
                    }),
                    t.jsxs(k, {
                      className: "flex-1 flex flex-col",
                      children: [
                        t.jsx(R, {
                          className: "flex-1 pr-4 mb-4",
                          children:
                            a.length === 0
                              ? t.jsxs("div", {
                                  className:
                                    "text-center py-12 text-muted-foreground",
                                  children: [
                                    t.jsx(S, {
                                      className:
                                        "h-12 w-12 mx-auto mb-4 opacity-50",
                                    }),
                                    t.jsx("p", {
                                      children:
                                        "Faça uma pergunta sobre seu negócio",
                                    }),
                                    t.jsx("p", {
                                      className: "text-sm mt-2",
                                      children:
                                        'Ex: "Como estão nossas vendas?"',
                                    }),
                                  ],
                                })
                              : t.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    a.map((c) =>
                                      t.jsx(
                                        "div",
                                        {
                                          className: `flex ${c.role === "user" ? "justify-end" : "justify-start"}`,
                                          children: t.jsxs("div", {
                                            className: `max-w-[80%] rounded-lg px-4 py-3 ${c.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`,
                                            children: [
                                              t.jsx("p", {
                                                className:
                                                  "whitespace-pre-wrap",
                                                children: c.content,
                                              }),
                                              c.sources &&
                                                c.sources.length > 0 &&
                                                t.jsxs("div", {
                                                  className:
                                                    "mt-3 pt-3 border-t border-current/20",
                                                  children: [
                                                    t.jsx("p", {
                                                      className:
                                                        "text-xs font-medium mb-2",
                                                      children: "Fontes:",
                                                    }),
                                                    t.jsx("div", {
                                                      className: "space-y-1",
                                                      children: c.sources.map(
                                                        (g, l) =>
                                                          t.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex items-center gap-2 text-xs",
                                                              children: [
                                                                t.jsx(q, {
                                                                  className:
                                                                    "h-3 w-3",
                                                                }),
                                                                t.jsx("span", {
                                                                  children:
                                                                    g.title,
                                                                }),
                                                                t.jsxs(M, {
                                                                  variant:
                                                                    "outline",
                                                                  className:
                                                                    "text-xs",
                                                                  children: [
                                                                    (
                                                                      g.score *
                                                                      100
                                                                    ).toFixed(
                                                                      0,
                                                                    ),
                                                                    "%",
                                                                  ],
                                                                }),
                                                              ],
                                                            },
                                                            l,
                                                          ),
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              t.jsx("p", {
                                                className:
                                                  "text-xs opacity-70 mt-2",
                                                children:
                                                  c.timestamp.toLocaleTimeString(
                                                    "pt-BR",
                                                  ),
                                              }),
                                            ],
                                          }),
                                        },
                                        c.id,
                                      ),
                                    ),
                                    o &&
                                      t.jsx("div", {
                                        className: "flex justify-start",
                                        children: t.jsxs("div", {
                                          className:
                                            "bg-muted rounded-lg px-4 py-3 flex items-center gap-2",
                                          children: [
                                            t.jsx(K, {
                                              className: "h-4 w-4 animate-spin",
                                            }),
                                            t.jsx("span", {
                                              children: "Pensando...",
                                            }),
                                          ],
                                        }),
                                      }),
                                  ],
                                }),
                        }),
                        t.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            t.jsx($, {
                              placeholder: "Pergunte sobre seu negócio...",
                              value: n,
                              onChange: (c) => d(c.target.value),
                              onKeyDown: (c) => c.key === "Enter" && m(n),
                              disabled: o,
                            }),
                            t.jsx(A, {
                              onClick: () => m(n),
                              disabled: o || !n.trim(),
                              children: o
                                ? t.jsx(K, {
                                    className: "h-4 w-4 animate-spin",
                                  })
                                : t.jsx(L, { className: "h-4 w-4" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsxs("div", {
                className: "space-y-4",
                children: [
                  t.jsxs(_, {
                    children: [
                      t.jsx(E, {
                        children: t.jsx(I, {
                          className: "text-sm",
                          children: "Sugestões",
                        }),
                      }),
                      t.jsx(k, {
                        className: "space-y-2",
                        children: p.map((c, g) =>
                          t.jsxs(
                            A,
                            {
                              variant: "outline",
                              size: "sm",
                              className:
                                "w-full text-left justify-start h-auto py-2",
                              onClick: () => m(c),
                              disabled: o,
                              children: [
                                t.jsx(S, {
                                  className: "h-4 w-4 mr-2 flex-shrink-0",
                                }),
                                t.jsx("span", {
                                  className: "line-clamp-2",
                                  children: c,
                                }),
                              ],
                            },
                            g,
                          ),
                        ),
                      }),
                    ],
                  }),
                  t.jsxs(_, {
                    children: [
                      t.jsx(E, {
                        children: t.jsx(I, {
                          className: "text-sm",
                          children: "Como funciona",
                        }),
                      }),
                      t.jsxs(k, {
                        className: "text-sm text-muted-foreground space-y-2",
                        children: [
                          t.jsx("p", {
                            children: "• Faça perguntas em linguagem natural",
                          }),
                          t.jsx("p", {
                            children:
                              "• Receba respostas baseadas nos seus dados",
                          }),
                          t.jsx("p", {
                            children:
                              "• Clique nas fontes para ver o contexto original",
                          }),
                          t.jsx("p", {
                            children: "• Dados são mantidos seguros e privados",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
export { he as default };
