import { randomUUID } from "crypto";

export interface KnowledgeChunk {
  id: string;
  content: string;
  embedding?: number[];
  sessionId: string;
  createdAt: Date;
  lastAccessed: Date;
  accessCount: number;
  relevance_score: number;
  tags: string[];
}

export interface AgentMemory {
  sessionId: string;
  knowledge: KnowledgeChunk[];
  skills: Skill[];
  userModel: UserPreferences;
  createdAt: Date;
  lastUpdated: Date;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  procedure: SkillProcedure;
  createdFrom: string;
  usageCount: number;
  successRate: number;
  selfImproved: boolean;
  lastUsed?: Date;
  createdAt: Date;
}

export interface SkillProcedure {
  steps: ProcedureStep[];
  context?: Record<string, unknown>;
}

export interface ProcedureStep {
  action: string;
  params?: Record<string, unknown>;
  condition?: string;
}

export interface UserPreferences {
  displayMode: "simples" | "completo" | "enterprise";
  preferredSector?: string;
  companySize?: string;
  communicationStyle: "direct" | "detailed" | "educational";
  activeTasks: Task[];
  expertise: Record<string, number>;
}

export interface Task {
  id: string;
  name: string;
  status: "pending" | "in_progress" | "completed" | "failed";
  result?: unknown;
  error?: string;
}

export interface ExecutionResult {
  success: boolean;
  result?: unknown;
  error?: string;
  duration: number;
  skillId?: string;
}

export class AgentMemorySystem {
  private memory: Map<string, AgentMemory> = new Map();

  createSession(
    sessionId: string,
    userModel?: Partial<UserPreferences>,
  ): AgentMemory {
    const defaultUserModel: UserPreferences = {
      displayMode: "simples",
      communicationStyle: "detailed",
      activeTasks: [],
      expertise: {},
    };

    const memory: AgentMemory = {
      sessionId,
      knowledge: [],
      skills: [],
      userModel: { ...defaultUserModel, ...userModel },
      createdAt: new Date(),
      lastUpdated: new Date(),
    };

    this.memory.set(sessionId, memory);
    return memory;
  }

  getSession(sessionId: string): AgentMemory | undefined {
    return this.memory.get(sessionId);
  }

  addKnowledge(
    sessionId: string,
    chunk: Omit<
      KnowledgeChunk,
      "id" | "createdAt" | "lastAccessed" | "accessCount"
    >,
  ): KnowledgeChunk {
    const session = this.getSession(sessionId);
    if (!session) throw new Error(`Session ${sessionId} not found`);

    const newChunk: KnowledgeChunk = {
      ...chunk,
      id: randomUUID(),
      createdAt: new Date(),
      lastAccessed: new Date(),
      accessCount: 0,
    };

    session.knowledge.push(newChunk);
    session.lastUpdated = new Date();
    return newChunk;
  }

  searchKnowledge(
    sessionId: string,
    query: string,
    limit = 5,
  ): KnowledgeChunk[] {
    const session = this.getSession(sessionId);
    if (!session) return [];

    const queryLower = query.toLowerCase();
    return session.knowledge
      .filter(
        (chunk) =>
          chunk.content.toLowerCase().includes(queryLower) ||
          chunk.tags.some((tag) => tag.toLowerCase().includes(queryLower)),
      )
      .sort((a, b) => {
        const aRelevance = a.relevance_score * (1 + a.accessCount * 0.1);
        const bRelevance = b.relevance_score * (1 + b.accessCount * 0.1);
        return bRelevance - aRelevance;
      })
      .slice(0, limit);
  }

  createSkill(
    sessionId: string,
    skill: Omit<
      Skill,
      "id" | "createdAt" | "usageCount" | "successRate" | "selfImproved"
    >,
  ): Skill {
    const session = this.getSession(sessionId);
    if (!session) throw new Error(`Session ${sessionId} not found`);

    const newSkill: Skill = {
      ...skill,
      id: randomUUID(),
      createdAt: new Date(),
      usageCount: 0,
      successRate: 1.0,
      selfImproved: false,
    };

    session.skills.push(newSkill);
    session.lastUpdated = new Date();
    return newSkill;
  }

  getSkills(sessionId: string): Skill[] {
    const session = this.getSession(sessionId);
    return session?.skills ?? [];
  }

  async improveSkill(
    sessionId: string,
    skillId: string,
    result: ExecutionResult,
  ): Promise<Skill | null> {
    const session = this.getSession(sessionId);
    if (!session) return null;

    const skillIndex = session.skills.findIndex((s) => s.id === skillId);
    if (skillIndex === -1) return null;

    const skill = session.skills[skillIndex];
    skill.usageCount++;

    if (result.success) {
      skill.successRate =
        (skill.successRate * (skill.usageCount - 1) + 1) / skill.usageCount;
    } else {
      skill.successRate =
        (skill.successRate * (skill.usageCount - 1)) / skill.usageCount;
      skill.selfImproved = true;
    }

    skill.lastUsed = new Date();
    session.lastUpdated = new Date();
    return skill;
  }

  updateUserModel(sessionId: string, updates: Partial<UserPreferences>): void {
    const session = this.getSession(sessionId);
    if (!session) return;

    session.userModel = { ...session.userModel, ...updates };
    session.lastUpdated = new Date();
  }

  exportMemory(sessionId: string): AgentMemory | undefined {
    return this.getSession(sessionId);
  }

  importMemory(sessionId: string, memory: AgentMemory): void {
    this.memory.set(sessionId, memory);
  }
}

export const memorySystem = new AgentMemorySystem();
