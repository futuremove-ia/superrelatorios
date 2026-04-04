import { useEffect, useCallback } from "react";
import { contextManager } from "@/lib/memory/contextManager";

export interface UseAgentMemoryOptions {
  agentName?: string;
  autoTrack?: boolean;
}

export interface AgentMemoryState {
  sessionId: string;
  currentTask?: string;
  decisions: string[];
  actions: string[];
}

export function useAgentMemory(options: UseAgentMemoryOptions = {}) {
  const { agentName = "agent", autoTrack = true } = options;

  const startTask = useCallback(
    (task: string) => {
      contextManager.setCurrentTask(task);
      contextManager.recordAction(`[${agentName}] Started task: ${task}`);
      console.log(`[Memory] Task started: ${task}`);
    },
    [agentName],
  );

  const completeTask = useCallback(
    (task: string, result?: string) => {
      contextManager.recordAction(
        `[${agentName}] Completed task: ${task}`,
        result,
      );
      console.log(`[Memory] Task completed: ${task}`);
    },
    [agentName],
  );

  const recordDecision = useCallback((decision: string, reason?: string) => {
    const id = contextManager.recordDecision(decision, reason);
    console.log(`[Memory] Decision recorded: ${decision.substring(0, 50)}...`);
    return id;
  }, []);

  const recordAction = useCallback((action: string, result?: string) => {
    const id = contextManager.recordAction(action, result);
    return id;
  }, []);

  const setDomain = useCallback(
    (domain: string) => {
      contextManager.setActiveDomain(domain);
      contextManager.recordAction(`[${agentName}] Domain set to: ${domain}`);
    },
    [agentName],
  );

  const getState = useCallback((): AgentMemoryState => {
    const summary = contextManager.getContextSummary();
    return {
      sessionId: `session-${Date.now()}`,
      currentTask: summary.currentTask,
      decisions: summary.recentDecisions,
      actions: summary.recentActions,
    };
  }, []);

  useEffect(() => {
    if (autoTrack) {
      contextManager.startSession();
      contextManager.recordAction(`[${agentName}] Agent session initialized`);
      console.log(`[Memory] Agent ${agentName} session started`);
    }
  }, [agentName, autoTrack]);

  return {
    startTask,
    completeTask,
    recordDecision,
    recordAction,
    setDomain,
    getState,
    getSummary: contextManager.getContextSummary,
  };
}

export default useAgentMemory;
