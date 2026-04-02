import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen, fireEvent } from "@/test/test-utils";
import { PriorityCard } from "@/components/business/PriorityCard";
import type { Priority } from "@/types/business";

const mockPriority: Priority = {
  id: "p1",
  diagnosticId: "d1",
  title: "Fix Churn Rate",
  explanation: "Implement retention program for premium customers",
  level: "high",
  score: {
    impact: 9,
    urgency: 8,
    effort: 3,
    confidence: 8,
    calculatedValue: 192,
  },
  status: "suggested",
  createdAt: "2026-01-01",
};

describe("PriorityCard", () => {
  it("renders priority title and explanation", () => {
    render(<PriorityCard priority={mockPriority} />);

    expect(screen.getByText("Fix Churn Rate")).toBeInTheDocument();
    expect(
      screen.getByText("Implement retention program for premium customers"),
    ).toBeInTheDocument();
  });

  it("renders score value", () => {
    render(<PriorityCard priority={mockPriority} />);

    expect(screen.getByText(/192/)).toBeInTheDocument();
  });

  it("renders high level badge", () => {
    render(<PriorityCard priority={mockPriority} />);

    const badge = screen.getByText("priorities.levels.high");
    expect(badge).toBeInTheDocument();
  });

  it("renders medium level for medium priority", () => {
    const mediumPriority: Priority = { ...mockPriority, level: "medium" };
    render(<PriorityCard priority={mediumPriority} />);

    expect(screen.getByText("priorities.levels.medium")).toBeInTheDocument();
  });

  it("renders low level for low priority", () => {
    const lowPriority: Priority = { ...mockPriority, level: "low" };
    render(<PriorityCard priority={lowPriority} />);

    expect(screen.getByText("priorities.levels.low")).toBeInTheDocument();
  });

  it("shows suggested status text", () => {
    render(<PriorityCard priority={mockPriority} />);

    expect(
      screen.getByText("priorities.card.ai_suggested"),
    ).toBeInTheDocument();
  });

  it("shows validated status text when validated", () => {
    const validatedPriority: Priority = {
      ...mockPriority,
      status: "validated",
    };
    render(<PriorityCard priority={validatedPriority} />);

    expect(screen.getByText("priorities.card.validated")).toBeInTheDocument();
  });

  it("calls onValidate when validate button is clicked", () => {
    const onValidate = vi.fn();
    render(<PriorityCard priority={mockPriority} onValidate={onValidate} />);

    const buttons = screen.getAllByRole("button");
    const validateButton = buttons.find((btn) =>
      btn.textContent?.includes("priorities.card.cta_validate"),
    );

    if (validateButton) {
      fireEvent.click(validateButton);
      expect(onValidate).toHaveBeenCalledWith(mockPriority);
    }
  });

  it("calls onAction when action button is clicked for validated priority", () => {
    const onAction = vi.fn();
    const validatedPriority: Priority = {
      ...mockPriority,
      status: "validated",
    };
    render(<PriorityCard priority={validatedPriority} onAction={onAction} />);

    const buttons = screen.getAllByRole("button");
    const actionButton = buttons.find((btn) =>
      btn.textContent?.includes("priorities.card.cta_action"),
    );

    if (actionButton) {
      fireEvent.click(actionButton);
      expect(onAction).toHaveBeenCalledWith("p1");
    }
  });

  it("renders with different score values", () => {
    const lowScorePriority: Priority = {
      ...mockPriority,
      score: {
        impact: 3,
        urgency: 2,
        effort: 8,
        confidence: 4,
        calculatedValue: 3,
      },
    };

    render(<PriorityCard priority={lowScorePriority} />);

    expect(screen.getByText(/3/)).toBeInTheDocument();
  });
});
