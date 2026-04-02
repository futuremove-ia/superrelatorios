import { memorySystem, type Skill, type ExecutionResult } from "./memorySystem";

export interface SubAgent {
  id: string;
  name: string;
  description: string;
  status: "idle" | "running" | "completed" | "failed";
  task?: AgentTask;
  result?: ExecutionResult;
  logs: string[];
}

export interface AgentTask {
  id: string;
  name: string;
  description: string;
  params?: Record<string, unknown>;
  priority: "high" | "medium" | "low";
  status: "pending" | "running" | "completed" | "failed";
  result?: unknown;
  error?: string;
  assignedTo?: string;
}

export interface AgentResult {
  agentId: string;
  success: boolean;
  result: unknown;
  error?: string;
  duration: number;
  logs: string[];
}

export class SkillSystem {
  private sessionId: string;

  constructor(sessionId: string) {
    this.sessionId = sessionId;
  }

  async createSkillFromTask(
    taskName: string,
    procedure: Skill["procedure"],
  ): Promise<Skill> {
    return memorySystem.createSkill(this.sessionId, {
      name: taskName,
      description: `Skill created from task: ${taskName}`,
      procedure,
      createdFrom: taskName,
    });
  }

  async executeSkill(
    skillId: string,
    params?: Record<string, unknown>,
  ): Promise<ExecutionResult> {
    const startTime = Date.now();
    const skills = memorySystem.getSkills(this.sessionId);
    const skill = skills.find((s) => s.id === skillId);

    if (!skill) {
      return {
        success: false,
        error: `Skill ${skillId} not found`,
        duration: 0,
      };
    }

    try {
      const result = await this.executeProcedure(skill.procedure, params);
      await memorySystem.improveSkill(this.sessionId, skillId, {
        success: true,
        result,
        duration: Date.now() - startTime,
      });
      return {
        success: true,
        result,
        duration: Date.now() - startTime,
        skillId,
      };
    } catch (error) {
      const errorResult = {
        success: false,
        error: String(error),
        duration: Date.now() - startTime,
      };
      await memorySystem.improveSkill(this.sessionId, skillId, errorResult);
      return errorResult;
    }
  }

  private async executeProcedure(
    procedure: Skill["procedure"],
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    const context = { ...procedure.context, ...params };

    for (const step of procedure.steps) {
      if (step.condition && !this.evaluateCondition(step.condition, context)) {
        continue;
      }
      await this.executeStep(step, context);
    }

    return context;
  }

  private async executeStep(
    step: { action: string; params?: Record<string, unknown> },
    context: Record<string, unknown>,
  ): Promise<void> {
    console.log(`Executing step: ${step.action}`, step.params);
    Object.assign(context, step.params);
  }

  private evaluateCondition(
    condition: string,
    context: Record<string, unknown>,
  ): boolean {
    try {
      return new Function("context", `with(context) { return ${condition} }`)(
        context,
      ) as boolean;
    } catch {
      return false;
    }
  }

  getSkills(): Skill[] {
    return memorySystem.getSkills(this.sessionId);
  }

  async analyzeAndImproveSkill(skillId: string): Promise<Skill | null> {
    const skills = memorySystem.getSkills(this.sessionId);
    const skill = skills.find((s) => s.id === skillId);

    if (!skill || skill.successRate > 0.9) return skill;

    const improvements = this.suggestImprovements(skill);
    if (improvements.length > 0) {
      skill.procedure.steps.push(...improvements);
      skill.selfImproved = true;
    }

    return skill;
  }

  private suggestImprovements(
    skill: Skill,
  ): { action: string; params?: Record<string, unknown> }[] {
    const improvements: { action: string; params?: Record<string, unknown> }[] =
      [];

    if (skill.successRate < 0.7) {
      improvements.push({
        action: "add_validation",
        params: { step: "input_validation", strict: true },
      });
    }

    return improvements;
  }
}

export class SubAgentSystem {
  private agents: Map<string, SubAgent> = new Map();
  private sessionId: string;

  constructor(sessionId: string) {
    this.sessionId = sessionId;
    this.initializeAgents();
  }

  private initializeAgents(): void {
    const agentConfigs = [
      {
        id: "agent-001",
        name: "Query Reviewer",
        description: "Revisa queries do banco",
      },
      {
        id: "agent-002",
        name: "Service Fixer",
        description: "Corrige serviços",
      },
      {
        id: "agent-003",
        name: "Component Builder",
        description: "Constrói componentes",
      },
      { id: "agent-004", name: "LSP Fixer", description: "Corrige LSP errors" },
      {
        id: "agent-005",
        name: "Onboarding Wizard",
        description: "Gerencia onboarding",
      },
      {
        id: "agent-030",
        name: "Memory Manager",
        description: "Gerencia memória FTS5",
      },
      {
        id: "agent-031",
        name: "Skill Creator",
        description: "Cria skills automaticamente",
      },
      {
        id: "agent-032",
        name: "Self Improver",
        description: "Melhora skills durante uso",
      },
    ];

    for (const config of agentConfigs) {
      this.agents.set(config.id, {
        id: config.id,
        name: config.name,
        description: config.description,
        status: "idle",
        logs: [],
      });
    }
  }

  getAgent(agentId: string): SubAgent | undefined {
    return this.agents.get(agentId);
  }

  getAvailableAgents(): SubAgent[] {
    return Array.from(this.agents.values()).filter((a) => a.status === "idle");
  }

  async assignTask(agentId: string, task: AgentTask): Promise<boolean> {
    const agent = this.agents.get(agentId);
    if (!agent || agent.status !== "idle") return false;

    agent.status = "running";
    agent.task = task;
    agent.logs.push(
      `[${new Date().toISOString()}] Task assigned: ${task.name}`,
    );
    return true;
  }

  async completeTask(agentId: string, result: ExecutionResult): Promise<void> {
    const agent = this.agents.get(agentId);
    if (!agent) return;

    agent.status = result.success ? "completed" : "failed";
    agent.result = result;
    agent.logs.push(
      `[${new Date().toISOString()}] Task ${result.success ? "completed" : "failed"}`,
    );

    if (agent.task) {
      agent.task.status = result.success ? "completed" : "failed";
      agent.task.result = result.result;
      agent.task.error = result.error;
    }
  }

  async runParallel(tasks: AgentTask[]): Promise<AgentResult[]> {
    const availableAgents = this.getAvailableAgents();

    if (availableAgents.length < tasks.length) {
      tasks = tasks.slice(0, availableAgents.length);
    }

    const executeSingle = async (
      task: AgentTask,
      agent: SubAgent,
    ): Promise<AgentResult> => {
      await this.assignTask(agent.id, task);
      const startTime = Date.now();
      try {
        const result = await this.executeTask(task);
        await this.completeTask(agent.id, {
          success: true,
          result,
          duration: Date.now() - startTime,
        });
        return {
          agentId: agent.id,
          success: true,
          result,
          duration: Date.now() - startTime,
          logs: agent.logs,
        };
      } catch (error) {
        await this.completeTask(agent.id, {
          success: false,
          error: String(error),
          duration: Date.now() - startTime,
        });
        return {
          agentId: agent.id,
          success: false,
          result: null,
          error: String(error),
          duration: Date.now() - startTime,
          logs: agent.logs,
        };
      }
    };

    const promises = tasks.map((task, index) =>
      executeSingle(task, availableAgents[index]),
    );
    return Promise.all(promises);
  }

  private async executeTask(task: AgentTask): Promise<unknown> {
    console.log(`Executing task: ${task.name}`);
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { taskId: task.id, status: "completed" };
  }

  getStatus(): { agentId: string; status: string; taskName?: string }[] {
    return Array.from(this.agents.values()).map((a) => ({
      agentId: a.id,
      status: a.status,
      taskName: a.task?.name,
    }));
  }
}
