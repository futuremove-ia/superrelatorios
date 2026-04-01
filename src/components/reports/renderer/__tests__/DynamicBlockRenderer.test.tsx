import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@/test/test-utils";
import { DynamicBlockRenderer } from "@/components/reports/renderer/DynamicBlockRenderer";

vi.mock("@/components/reports/blocks/BlockLibrary", () => ({
  HeroBlock: ({ block }: any) => (
    <div data-testid="hero-block">{block.content.title}</div>
  ),
  KPIBlock: ({ block }: any) => (
    <div data-testid="kpi-block">{block.content.title}</div>
  ),
  AIInsightBlock: ({ block }: any) => (
    <div data-testid="ai-insight-block">{block.content.title}</div>
  ),
  ChartBlock: ({ block }: any) => (
    <div data-testid="chart-block">{block.content.title}</div>
  ),
  DonnutChartBlock: ({ block }: any) => (
    <div data-testid="donut-chart-block">{block.content.title}</div>
  ),
  HorizontalBarChartBlock: ({ block }: any) => (
    <div data-testid="horizontal-bar-block">{block.content.title}</div>
  ),
  ActionPlanBlock: ({ block }: any) => (
    <div data-testid="action-plan-block">{block.content.title}</div>
  ),
  CalloutBlock: ({ block }: any) => (
    <div data-testid="callout-block">{block.content.title}</div>
  ),
  MarkdownBlock: ({ block }: any) => (
    <div data-testid="markdown-block">{block.content.title}</div>
  ),
  BenchmarkComparisonBlock: ({ block }: any) => (
    <div data-testid="benchmark-block">{block.content.title}</div>
  ),
  FallbackBlock: ({ block }: any) => (
    <div data-testid="fallback-block">{block.content.title}</div>
  ),
}));

vi.mock("@/components/reports/renderer/BlockErrorBoundary", () => ({
  BlockErrorBoundary: ({ children }: any) => (
    <div data-testid="error-boundary">{children}</div>
  ),
}));

describe("DynamicBlockRenderer", () => {
  it("renders HERO block", () => {
    const blocks = [
      {
        id: "b1",
        type: "HERO" as const,
        layout: { w: 12 },
        content: { title: "Hero Title", settings: {} },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("hero-block")).toHaveTextContent("Hero Title");
  });

  it("renders KPI_GRID block", () => {
    const blocks = [
      {
        id: "b2",
        type: "KPI_GRID" as const,
        layout: { w: 12 },
        content: {
          title: "KPIs",
          settings: { columns: 3 },
          data: { Revenue: "$100K" },
        },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("kpi-block")).toHaveTextContent("KPIs");
  });

  it("renders AI_INSIGHT block", () => {
    const blocks = [
      {
        id: "b3",
        type: "AI_INSIGHT" as const,
        layout: { w: 12 },
        content: { title: "AI Insight", body: "Insight text", settings: {} },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("ai-insight-block")).toHaveTextContent(
      "AI Insight",
    );
  });

  it("renders CHART block", () => {
    const blocks = [
      {
        id: "b4",
        type: "CHART" as const,
        layout: { w: 12 },
        content: {
          title: "Sales Chart",
          settings: { chartType: "bar" },
          data: [],
        },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("chart-block")).toHaveTextContent("Sales Chart");
  });

  it("renders CHART_DONNUT block", () => {
    const blocks = [
      {
        id: "b5",
        type: "CHART_DONNUT" as const,
        layout: { w: 12 },
        content: { title: "Donut Chart", settings: {}, data: [] },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("donut-chart-block")).toHaveTextContent(
      "Donut Chart",
    );
  });

  it("renders CHART_BAR_HORIZONTAL block", () => {
    const blocks = [
      {
        id: "b6",
        type: "CHART_BAR_HORIZONTAL" as const,
        layout: { w: 12 },
        content: { title: "Bar Chart", settings: {}, data: [] },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("horizontal-bar-block")).toHaveTextContent(
      "Bar Chart",
    );
  });

  it("renders ACTION_PLAN block", () => {
    const blocks = [
      {
        id: "b7",
        type: "ACTION_PLAN" as const,
        layout: { w: 12 },
        content: { title: "Action Plan", settings: {} },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("action-plan-block")).toHaveTextContent(
      "Action Plan",
    );
  });

  it("renders CALLOUT block", () => {
    const blocks = [
      {
        id: "b8",
        type: "CALLOUT" as const,
        layout: { w: 12 },
        content: { title: "Callout", body: "Important note", settings: {} },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("callout-block")).toHaveTextContent("Callout");
  });

  it("renders MARKDOWN block", () => {
    const blocks = [
      {
        id: "b9",
        type: "MARKDOWN" as const,
        layout: { w: 12 },
        content: { title: "Markdown", body: "# Heading", settings: {} },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("markdown-block")).toHaveTextContent("Markdown");
  });

  it("renders BENCHMARK_COMPARISON block", () => {
    const blocks = [
      {
        id: "b10",
        type: "BENCHMARK_COMPARISON" as const,
        layout: { w: 12 },
        content: { title: "Benchmark", settings: {}, data: [] },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("benchmark-block")).toHaveTextContent(
      "Benchmark",
    );
  });

  it("renders FALLBACK for unknown block type", () => {
    const blocks = [
      {
        id: "b11",
        type: "UNKNOWN_TYPE" as any,
        layout: { w: 12 },
        content: { title: "Unknown Block", settings: {} },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    expect(screen.getByTestId("fallback-block")).toHaveTextContent(
      "Unknown Block",
    );
  });

  it("renders multiple blocks in order", () => {
    const blocks = [
      {
        id: "b1",
        type: "HERO" as const,
        layout: { w: 12 },
        content: { title: "First", settings: {} },
      },
      {
        id: "b2",
        type: "KPI_GRID" as const,
        layout: { w: 12 },
        content: { title: "Second", settings: {} },
      },
      {
        id: "b3",
        type: "CHART" as const,
        layout: { w: 12 },
        content: { title: "Third", settings: {} },
      },
    ];

    render(<DynamicBlockRenderer blocks={blocks} />);

    const hero = screen.getByTestId("hero-block");
    const kpi = screen.getByTestId("kpi-block");
    const chart = screen.getByTestId("chart-block");

    expect(hero).toHaveTextContent("First");
    expect(kpi).toHaveTextContent("Second");
    expect(chart).toHaveTextContent("Third");

    // Verify order in DOM
    expect(hero.compareDocumentPosition(kpi)).toBe(4); // Node.FOLLOWING
    expect(kpi.compareDocumentPosition(chart)).toBe(4);
  });

  it("renders nothing when blocks array is empty", () => {
    const { container } = render(<DynamicBlockRenderer blocks={[]} />);

    expect(container.querySelector(".space-y-4")?.children).toHaveLength(0);
  });
});
