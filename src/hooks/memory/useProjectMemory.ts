import { useState, useCallback, useEffect, useMemo } from "react";
import {
  contextManager,
  type MemoryRetrievalResult,
} from "@/lib/memory/contextManager";
import {
  sessionMemory,
  type SessionMemoryEntry,
} from "@/lib/memory/sessionMemory";

export interface UseMemoryOptions {
  autoStart?: boolean;
  maxEntries?: number;
}

export interface UseMemoryReturn {
  memory: {
    startSession: () => void;
    endSession: () => void;
    setCurrentTask: (task: string) => void;
    setActiveDomain: (domain: string) => void;
    recordDecision: (decision: string, reason?: string) => string;
    recordAction: (action: string, result?: string) => string;
    addReference: (ref: string, source?: string) => string;
    retrieve: (
      query?: string,
      types?: SessionMemoryEntry["type"][],
      limit?: number,
    ) => MemoryRetrievalResult;
    getSummary: () => {
      currentTask?: string;
      activeDomain?: string;
      projectPhase?: string;
      recentTasks: string[];
      recentDecisions: string[];
      recentActions: string[];
    };
    getProjectContext: () => Record<string, any>;
    clearSession: () => void;
    exportSession: () => string;
  };
  state: {
    isActive: boolean;
    currentTask?: string;
    activeDomain?: string;
    totalEntries: number;
    lastUpdated: Date | null;
  };
  entries: SessionMemoryEntry[];
}

export function useMemory(options: UseMemoryOptions = {}): UseMemoryReturn {
  const { autoStart = true } = options;

  const [isActive, setIsActive] = useState(false);
  const [, forceUpdate] = useState({});
  const [, setEntries] = useState<SessionMemoryEntry[]>([]);

  useEffect(() => {
    if (autoStart && !isActive) {
      contextManager.startSession();
      setIsActive(true);
    }
  }, [autoStart, isActive]);

  const refreshState = useCallback(() => {
    const summary = contextManager.getContextSummary();
    forceUpdate({});
    setEntries(sessionMemory.getEntries());
  }, []);

  const memory = useMemo(
    () => ({
      startSession: () => {
        contextManager.startSession();
        setIsActive(true);
        refreshState();
      },
      endSession: () => {
        contextManager.endSession();
        setIsActive(false);
        refreshState();
      },
      setCurrentTask: (task: string) => {
        contextManager.setCurrentTask(task);
        refreshState();
      },
      setActiveDomain: (domain: string) => {
        contextManager.setActiveDomain(domain);
        refreshState();
      },
      recordDecision: (decision: string, reason?: string) => {
        const id = contextManager.recordDecision(decision, reason);
        refreshState();
        return id;
      },
      recordAction: (action: string, result?: string) => {
        const id = contextManager.recordAction(action, result);
        refreshState();
        return id;
      },
      addReference: (ref: string, source?: string) => {
        const id = contextManager.addReference(ref, source);
        refreshState();
        return id;
      },
      retrieve: (
        query?: string,
        types?: SessionMemoryEntry["type"][],
        limit?: number,
      ) => {
        return contextManager.retrieve({ query, types, limit });
      },
      getSummary: () => {
        return contextManager.getContextSummary();
      },
      getProjectContext: () => {
        return contextManager.getProjectContext();
      },
      clearSession: () => {
        contextManager.clearSession();
        setIsActive(false);
        refreshState();
      },
      exportSession: () => {
        return contextManager.exportSession();
      },
    }),
    [refreshState],
  );

  const state = useMemo(() => {
    const summary = sessionMemory.getSummary();
    return {
      isActive,
      currentTask: sessionMemory.getContext().currentTask,
      activeDomain: sessionMemory.getContext().activeDomain,
      totalEntries: summary.totalEntries,
      lastUpdated: summary.lastUpdated,
    };
  }, [isActive]);

  return { memory, state, entries: sessionMemory.getEntries() };
}

export function useTaskMemory() {
  const { memory, state } = useMemory();

  const startTask = useCallback(
    (taskName: string) => {
      memory.setCurrentTask(taskName);
      memory.recordAction(`Started task: ${taskName}`);
    },
    [memory],
  );

  const completeTask = useCallback(
    (taskName: string, result?: string) => {
      memory.recordAction(`Completed task: ${taskName}`, result);
    },
    [memory],
  );

  const recordSubtask = useCallback(
    (subtask: string) => {
      memory.recordAction(`Subtask: ${subtask}`);
    },
    [memory],
  );

  return {
    currentTask: state.currentTask,
    startTask,
    completeTask,
    recordSubtask,
    summary: memory.getSummary(),
  };
}

export function useDecisionMemory() {
  const { memory, state } = useMemory();

  const decisions = useMemo(
    () => sessionMemory.getDecisions(),
    [state.totalEntries],
  );

  return {
    decisions,
    record: memory.recordDecision,
    getRecent: () => decisions.slice(-10),
  };
}

export function useContextualMemory() {
  const { memory, state } = useMemory();

  const projectContext = useMemo(
    () => memory.getProjectContext(),
    [state.currentTask, state.activeDomain, state.totalEntries],
  );

  return {
    context: projectContext,
    setDomain: memory.setActiveDomain,
    addReference: memory.addReference,
  };
}
