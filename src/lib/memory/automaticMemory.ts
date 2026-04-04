import { useEffect } from "react";
import { contextManager } from "@/lib/memory/contextManager";
import { sessionMemory } from "@/lib/memory/sessionMemory";

export const useAutomaticMemory = () => {
  useEffect(() => {
    contextManager.startSession();

    const sessionId = `session-${Date.now()}`;
    contextManager.recordAction("Session initialized", `ID: ${sessionId}`);

    const summary = sessionMemory.getSummary();
    console.log("[Memory] Session started:", summary.totalEntries, "entries");

    return () => {
      contextManager.endSession();
      console.log("[Memory] Session ended");
    };
  }, []);
};

export const recordDevelopmentDecision = (
  decision: string,
  reason?: string,
) => {
  return contextManager.recordDecision(decision, reason);
};

export const recordDevelopmentAction = (action: string, result?: string) => {
  return contextManager.recordAction(action, result);
};

export const setCurrentTask = (task: string) => {
  contextManager.setCurrentTask(task);
};

export const getMemorySummary = () => {
  return contextManager.getContextSummary();
};

export const getRecentDecisions = () => {
  return contextManager.retrieve({ types: ["decision"], limit: 10 });
};

export const getRecentActions = () => {
  return contextManager.retrieve({ types: ["action"], limit: 10 });
};
