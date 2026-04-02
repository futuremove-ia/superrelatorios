import { memorySystem } from "./memorySystem";
import { docAutoUpdate } from "./docAutoUpdate";

export interface AgentTaskResult {
  taskName: string;
  agentId: string;
  success: boolean;
  result?: unknown;
  error?: string;
  duration: number;
}

export class AgentMemoryIntegration {
  private currentSessionId: string;

  constructor(sessionId?: string) {
    this.currentSessionId = sessionId || "default-session";
    this.initialize();
  }

  private async initialize(): Promise<void> {
    memorySystem.createSession(this.currentSessionId);
    await memorySystem.loadFromDatabase(this.currentSessionId);
  }

  async persistAll(): Promise<boolean> {
    return memorySystem.persistToDatabase(this.currentSessionId);
  }

  async recordTaskResult(result: AgentTaskResult): Promise<void> {
    if (result.success) {
      await docAutoUpdate.updateTaskStatus({
        type: "task_complete",
        taskName: result.taskName,
        agentId: result.agentId,
        status: "✅",
      });

      docAutoUpdate.addKnowledge("Tarefas Concluídas", `${result.taskName} por ${result.agentId}`);
    } else {
      await docAutoUpdate.updateTaskStatus({
        type: "task_complete",
        taskName: result.taskName,
        agentId: result.agentId,
        status: "❌",
      });
    }

    await this.persistAll();
  }

  async recordAgentUpdate(
    agentId: string,
    status: "✅" | "⏳" | "❌",
    description?: string,
  ): Promise<void> {
    await docAutoUpdate.updateTaskStatus({
      type: "agent_update",
      agentId,
      description,
      status,
    });

    await this.persistAll();
  }

  getSessionId(): string {
    return this.currentSessionId;
  }
}

export const agentMemoryIntegration = new AgentMemoryIntegration();
