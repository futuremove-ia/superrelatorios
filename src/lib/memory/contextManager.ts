import {
  sessionMemory,
  SessionMemory,
  type SessionMemoryEntry,
  type SessionContext,
} from "./sessionMemory";

export interface ProjectMemoryData {
  projectName: string;
  version: string;
  lastUpdated: string;
  currentPhase?: string;
  activeDomains?: string[];
  keyDecisions?: string[];
  currentTask?: string;
  stack?: string[];
  domains?: string[];
}

export interface MemoryRetrievalOptions {
  query?: string;
  types?: SessionMemoryEntry["type"][];
  limit?: number;
  includeContext?: boolean;
}

export interface MemoryRetrievalResult {
  entries: SessionMemoryEntry[];
  context: SessionContext;
  projectData?: ProjectMemoryData;
}

export class ContextManager {
  private static instance: ContextManager | null = null;
  private projectMemoryPath = "/knowledge/PROJECT_MEMORY.md";

  private constructor() {}

  static getInstance(): ContextManager {
    if (!ContextManager.instance) {
      ContextManager.instance = new ContextManager();
    }
    return ContextManager.instance;
  }

  startSession(): void {
    sessionMemory.setContext({
      projectPhase: "active",
    });
    sessionMemory.addContext("Session started");
  }

  endSession(): void {
    sessionMemory.addContext("Session ended");
  }

  setCurrentTask(task: string): void {
    sessionMemory.setContext({ currentTask: task });
    sessionMemory.addTask(`Working on: ${task}`);
  }

  setActiveDomain(domain: string): void {
    sessionMemory.setContext({ activeDomain: domain });
    sessionMemory.addContext(`Active domain: ${domain}`);
  }

  recordDecision(decision: string, reason?: string): string {
    const content = reason ? `${decision} (Reason: ${reason})` : decision;
    return sessionMemory.addDecision(decision, { reason });
  }

  recordAction(action: string, result?: string): string {
    const metadata = result ? { result } : undefined;
    return sessionMemory.addAction(action, metadata);
  }

  addReference(ref: string, source?: string): string {
    const metadata = source ? { source } : undefined;
    return sessionMemory.addReference(ref, metadata);
  }

  retrieve(options: MemoryRetrievalOptions = {}): MemoryRetrievalResult {
    const { query, types, limit = 10 } = options;

    let entries: SessionMemoryEntry[];

    if (query) {
      entries = sessionMemory.search(query);
    } else if (types && types.length > 0) {
      entries = types.flatMap((type) => sessionMemory.getEntries(type));
    } else {
      entries = sessionMemory.getRecentEntries(limit);
    }

    if (limit && entries.length > limit) {
      entries = entries.slice(-limit);
    }

    return {
      entries,
      context: sessionMemory.getContext(),
    };
  }

  getContextSummary(): {
    currentTask?: string;
    activeDomain?: string;
    projectPhase?: string;
    recentTasks: string[];
    recentDecisions: string[];
    recentActions: string[];
  } {
    const context = sessionMemory.getContext();
    const tasks = sessionMemory
      .getTasks()
      .slice(-5)
      .map((t) => t.content);
    const decisions = sessionMemory
      .getDecisions()
      .slice(-3)
      .map((d) => d.content);
    const actions = sessionMemory
      .getEntries("action")
      .slice(-5)
      .map((a) => a.content);

    return {
      currentTask: context.currentTask,
      activeDomain: context.activeDomain,
      projectPhase: context.projectPhase,
      recentTasks: tasks,
      recentDecisions: decisions,
      recentActions: actions,
    };
  }

  getProjectContext(): Record<string, any> {
    const summary = this.getContextSummary();
    const sessionSummary = sessionMemory.getSummary();

    return {
      ...summary,
      sessionStats: sessionSummary,
      timestamp: new Date().toISOString(),
    };
  }

  clearSession(): void {
    sessionMemory.clear();
  }

  exportSession(): string {
    return sessionMemory.export();
  }

  importSession(data: string): void {
    const memory = SessionMemory.fromExport(data);
    sessionMemory.clear();
    sessionMemory.getEntries().forEach(() => {});

    memory.getEntries().forEach((entry) => {
      sessionMemory.addEntry(entry.type, entry.content, entry.metadata);
    });
    sessionMemory.setContext(memory.getContext());
  }
}

export const contextManager = ContextManager.getInstance();
