export interface SessionMemoryEntry {
  id: string;
  type: "task" | "decision" | "context" | "reference" | "action";
  content: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface SessionContext {
  currentTask?: string;
  projectPhase?: string;
  activeDomain?: string;
  userPreferences?: Record<string, any>;
}

export class SessionMemory {
  private entries: SessionMemoryEntry[] = [];
  private context: SessionContext = {};
  private maxEntries = 500;

  addEntry(
    type: SessionMemoryEntry["type"],
    content: string,
    metadata?: Record<string, any>,
  ): string {
    const entry: SessionMemoryEntry = {
      id: `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      content,
      timestamp: new Date(),
      metadata,
    };

    this.entries.push(entry);

    if (this.entries.length > this.maxEntries) {
      this.entries = this.entries.slice(-this.maxEntries);
    }

    return entry.id;
  }

  addTask(task: string, metadata?: Record<string, any>): string {
    return this.addEntry("task", task, metadata);
  }

  addDecision(decision: string, metadata?: Record<string, any>): string {
    return this.addEntry("decision", decision, metadata);
  }

  addContext(context: string, metadata?: Record<string, any>): string {
    return this.addEntry("context", context, metadata);
  }

  addReference(reference: string, metadata?: Record<string, any>): string {
    return this.addEntry("reference", reference, metadata);
  }

  addAction(action: string, metadata?: Record<string, any>): string {
    return this.addEntry("action", action, metadata);
  }

  getEntries(type?: SessionMemoryEntry["type"]): SessionMemoryEntry[] {
    if (type) {
      return this.entries.filter((e) => e.type === type);
    }
    return [...this.entries];
  }

  getTasks(): SessionMemoryEntry[] {
    return this.getEntries("task");
  }

  getDecisions(): SessionMemoryEntry[] {
    return this.getEntries("decision");
  }

  getRecentEntries(limit = 10): SessionMemoryEntry[] {
    return this.entries.slice(-limit);
  }

  search(query: string): SessionMemoryEntry[] {
    const lowerQuery = query.toLowerCase();
    return this.entries.filter((entry) =>
      entry.content.toLowerCase().includes(lowerQuery),
    );
  }

  setContext(context: Partial<SessionContext>): void {
    this.context = { ...this.context, ...context };
  }

  getContext(): SessionContext {
    return { ...this.context };
  }

  updateTask(taskId: string, updates: Partial<SessionMemoryEntry>): void {
    const index = this.entries.findIndex((e) => e.id === taskId);
    if (index !== -1) {
      this.entries[index] = { ...this.entries[index], ...updates };
    }
  }

  clear(): void {
    this.entries = [];
    this.context = {};
  }

  clearType(type: SessionMemoryEntry["type"]): void {
    this.entries = this.entries.filter((e) => e.type !== type);
  }

  getSummary(): {
    totalEntries: number;
    byType: Record<string, number>;
    context: SessionContext;
    lastUpdated: Date | null;
  } {
    const byType: Record<string, number> = {};
    for (const entry of this.entries) {
      byType[entry.type] = (byType[entry.type] || 0) + 1;
    }

    return {
      totalEntries: this.entries.length,
      byType,
      context: this.getContext(),
      lastUpdated:
        this.entries.length > 0
          ? this.entries[this.entries.length - 1].timestamp
          : null,
    };
  }

  export(): string {
    return JSON.stringify(
      {
        entries: this.entries,
        context: this.context,
        exportedAt: new Date().toISOString(),
      },
      null,
      2,
    );
  }

  static fromExport(json: string): SessionMemory {
    const data = JSON.parse(json);
    const memory = new SessionMemory();
    memory.entries = data.entries.map((e: any) => ({
      ...e,
      timestamp: new Date(e.timestamp),
    }));
    memory.context = data.context;
    return memory;
  }
}

export const sessionMemory = new SessionMemory();
