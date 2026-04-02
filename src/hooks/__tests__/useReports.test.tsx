import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  useReports,
  useReport,
  useCreateReport,
  useUpdateReport,
  useDeleteReport,
} from "@/hooks/useReports";

vi.mock("@/hooks/useCurrentOrganization", () => ({
  useCurrentOrganization: vi.fn(),
}));

import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useReports", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("does not fetch in demo mode", () => {
    vi.mocked(useCurrentOrganization).mockReturnValue({
      organizationId: "",
      isDemoMode: true,
      organization: null,
      organizationName: "",
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useReports(), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
  });

  it("does not fetch when no organization", () => {
    vi.mocked(useCurrentOrganization).mockReturnValue({
      organizationId: "",
      isDemoMode: false,
      organization: null,
      organizationName: "",
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useReports(), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(false);
  });
});

describe("useReport", () => {
  it("returns undefined when id is undefined", () => {
    const { result } = renderHook(() => useReport(undefined), {
      wrapper: createWrapper(),
    });

    expect(result.current.data).toBeUndefined();
  });
});

describe("useCreateReport", () => {
  it("returns mutation object", () => {
    const { result } = renderHook(() => useCreateReport(), {
      wrapper: createWrapper(),
    });

    expect(result.current.mutate).toBeDefined();
    expect(result.current.mutateAsync).toBeDefined();
    expect(result.current.isPending).toBe(false);
  });
});

describe("useUpdateReport", () => {
  it("returns mutation object", () => {
    const { result } = renderHook(() => useUpdateReport(), {
      wrapper: createWrapper(),
    });

    expect(result.current.mutate).toBeDefined();
    expect(result.current.isPending).toBe(false);
  });
});

describe("useDeleteReport", () => {
  it("returns mutation object", () => {
    const { result } = renderHook(() => useDeleteReport(), {
      wrapper: createWrapper(),
    });

    expect(result.current.mutate).toBeDefined();
    expect(result.current.isPending).toBe(false);
  });
});
