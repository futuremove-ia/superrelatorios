import { randomUUID } from "crypto";
import {
  memorySystem,
  type AgentMemory,
  type ExecutionResult,
} from "./memorySystem";
import {
  SubAgentSystem,
  type AgentTask,
  type AgentResult,
} from "./skillSystem";

export interface UserModel {
  id: string;
  sessionId: string;
  displayMode: "simples" | "completo" | "enterprise";
  preferredSector?: string;
  companySize?: string;
  communicationStyle: "direct" | "detailed" | "educational";
  expertise: Record<string, number>;
  preferences: Record<string, unknown>;
}

export interface CoordinatorState {
  sessionId: string;
  isRunning: boolean;
  activeAgents: number;
  completedTasks: number;
  failedTasks: number;
}

export class AgentCoordinator {
  private sessionId: string;
  private subAgentSystem: SubAgentSystem;
  private userModel: UserModel | null = null;
  private state: CoordinatorState;
  private taskHistory: { task: AgentTask; result: AgentResult }[] = [];

  constructor(sessionId?: string) {
    this.sessionId = sessionId || randomUUID();
    this.subAgentSystem = new SubAgentSystem(this.sessionId);
    this.state = {
      sessionId: this.sessionId,
      isRunning: false,
      activeAgents: 0,
      completedTasks: 0,
      failedTasks: 0,
    };
  }

  initialize(userPreferences?: Partial<UserModel>): void {
    memorySystem.createSession(this.sessionId, userPreferences);
    this.userModel = {
      id: randomUUID(),
      sessionId: this.sessionId,
      displayMode: userPreferences?.displayMode || "simples",
      communicationStyle: userPreferences?.communicationStyle || "detailed",
      expertise: userPreferences?.expertise || {},
      preferences: userPreferences?.preferences || {},
    };
  }

  getSessionId(): string {
    return this.sessionId;
  }

  getState(): CoordinatorState {
    return {
      ...this.state,
      activeAgents: this.subAgentSystem.getAvailableAgents().length,
    };
  }

  getMemory(): AgentMemory | undefined {
    return memorySystem.getSession(this.sessionId);
  }

  updateUserModel(updates: Partial<UserModel>): void {
    if (this.userModel) {
      this.userModel = { ...this.userModel, ...updates };
    }
    memorySystem.updateUserModel(this.sessionId, updates);
  }

  async executeTask(task: AgentTask): Promise<AgentResult> {
    const availableAgents = this.subAgentSystem.getAvailableAgents();
    if (availableAgents.length === 0) {
      return {
        agentId: "coordinator",
        success: false,
        result: null,
        error: "No available agents",
        duration: 0,
        logs: [],
      };
    }

    const agent = availableAgents[0];
    await this.subAgentSystem.assignTask(agent.id, task);
    const startTime = Date.now();

    try {
      const result = await this.executeTaskLogic(task);
      await this.completeTask(agent.id, {
        success: true,
        result,
        duration: Date.now() - startTime,
      });

      const agentResult: AgentResult = {
        agentId: agent.id,
        success: true,
        result,
        duration: Date.now() - startTime,
        logs: agent.logs,
      };

      this.taskHistory.push({ task, result: agentResult });
      this.state.completedTasks++;

      return agentResult;
    } catch (error) {
      await this.completeTask(agent.id, {
        success: false,
        error: String(error),
        duration: Date.now() - startTime,
      });

      const agentResult: AgentResult = {
        agentId: agent.id,
        success: false,
        result: null,
        error: String(error),
        duration: Date.now() - startTime,
        logs: agent.logs,
      };

      this.taskHistory.push({ task, result: agentResult });
      this.state.failedTasks++;

      return agentResult;
    }
  }

  async executeParallelTasks(tasks: AgentTask[]): Promise<AgentResult[]> {
    this.state.isRunning = true;

    try {
      const results = await this.subAgentSystem.runParallel(tasks);

      for (const result of results) {
        if (result.success) {
          this.state.completedTasks++;
        } else {
          this.state.failedTasks++;
        }
      }

      this.taskHistory.push(
        ...tasks.map((task, index) => ({
          task,
          result: results[index],
        })),
      );

      return results;
    } finally {
      this.state.isRunning = false;
    }
  }

  private async completeTask(
    agentId: string,
    result: ExecutionResult,
  ): Promise<void> {
    await this.subAgentSystem.completeTask(agentId, result);
  }

  private async executeTaskLogic(task: AgentTask): Promise<unknown> {
    console.log(`[Coordinator] Executing task: ${task.name}`);

    await new Promise((resolve) => setTimeout(resolve, 50));

    return {
      taskId: task.id,
      taskName: task.name,
      status: "completed",
      timestamp: new Date().toISOString(),
    };
  }

  getAgentStatus() {
    return this.subAgentSystem.getStatus();
  }

  getTaskHistory() {
    return this.taskHistory;
  }

  createTask(
    name: string,
    description: string,
    priority: AgentTask["priority"] = "medium",
  ): AgentTask {
    return {
      id: randomUUID(),
      name,
      description,
      priority,
      status: "pending",
    };
  }
}

export const coordinator = new AgentCoordinator();
