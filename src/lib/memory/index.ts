export { SessionMemory, sessionMemory } from "./sessionMemory";
export type { SessionMemoryEntry, SessionContext } from "./sessionMemory";

export { ContextManager, contextManager } from "./contextManager";
export type {
  MemoryRetrievalOptions,
  MemoryRetrievalResult,
  ProjectMemoryData,
} from "./contextManager";

export {
  useMemory,
  useTaskMemory,
  useDecisionMemory,
  useContextualMemory,
} from "@/hooks/memory/useProjectMemory";
export type {
  UseMemoryOptions,
  UseMemoryReturn,
} from "@/hooks/memory/useProjectMemory";

export {
  useAutomaticMemory,
  recordDevelopmentDecision,
  recordDevelopmentAction,
  setCurrentTask,
  getMemorySummary,
  getRecentDecisions,
  getRecentActions,
} from "./automaticMemory";

export { useAgentMemory } from "./useAgentMemory";
export type { UseAgentMemoryOptions, AgentMemoryState } from "./useAgentMemory";
