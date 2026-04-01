import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: vi.fn(),
  },
}));

vi.mock("@/contexts/AuthContext", () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from "@/contexts/AuthContext";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useCurrentOrganization", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns demo organization in demo mode", async () => {
    vi.mocked(useAuth).mockReturnValue({
      user: { id: "demo-user-id" } as any,
      isDemoMode: true,
      loading: false,
      session: null,
      signOut: vi.fn(),
    });

    const { result } = renderHook(() => useCurrentOrganization(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => !result.current.isLoading);

    expect(result.current.organization?.id).toBe("demo-org-id");
    expect(result.current.organization?.name).toBe("Empresa Demo");
    expect(result.current.organization?.slug).toBe("empresa-demo");
    expect(result.current.isDemoMode).toBe(true);
  });

  it("returns null when no user", async () => {
    vi.mocked(useAuth).mockReturnValue({
      user: null,
      isDemoMode: false,
      loading: false,
      session: null,
      signOut: vi.fn(),
    });

    const { result } = renderHook(() => useCurrentOrganization(), {
      wrapper: createWrapper(),
    });

    expect(result.current.organization).toBeNull();
    expect(result.current.organizationId).toBe("");
  });

  it("returns null when profile lookup fails", async () => {
    vi.mocked(useAuth).mockReturnValue({
      user: { id: "user-123" } as any,
      isDemoMode: false,
      loading: false,
      session: null,
      signOut: vi.fn(),
    });

    const { result } = renderHook(() => useCurrentOrganization(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => !result.current.isLoading);

    expect(result.current.organization).toBeNull();
  });
});
