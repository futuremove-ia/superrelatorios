# @superrelatorios/agents

Self-improving AI agents system based on Hermes/Nous Research architecture.

> "An agent that grows with you" — Autonomous agents with built-in learning loop that create skills from experience, improve them during use, and build a deepening model of who you are across sessions.

## Features

### Core Systems

| System              | Description                                               |
| ------------------- | --------------------------------------------------------- |
| **Memory System**   | FTS5 cross-session persistence with relevance scoring     |
| **Skill System**    | Autonomous skill creation and self-improvement during use |
| **Tool System**     | File ops, bash, grep, glob — built-in tools for agents    |
| **LLM Integration** | Gemini, OpenAI, OpenRouter support with tool calling      |
| **SPEC Loader**     | Load and parse project specifications automatically       |
| **Coordinator**     | Orchestrates parallel sub-agent execution                 |

### Key Capabilities

- **Closed Learning Loop**: Agent-curated memory with periodic nudges
- **Autonomous Skill Creation**: Creates procedures from experience
- **Skill Self-Improvement**: Analyzes failures and optimizes during use
- **FTS5 Cross-Session Recall**: Semantic search with LLM summarization
- **Parallel Sub-Agents**: Spawn isolated agents for concurrent workstreams
- **Tool Calling**: Programmatic multi-step pipelines in single inference
- **MCP Integration**: Connect to Model Context Protocol servers

## Installation

```bash
npm install @superrelatorios/agents
# or
yarn add @superrelatorios/agents
# or
pnpm add @superrelatorios/agents
```

## Quick Start

```typescript
import {
  AgentCoordinator,
  specLoader,
  agentTools,
  llmIntegration,
} from "@superrelatorios/agents";

// 1. Initialize coordinator
const coordinator = new AgentCoordinator();
coordinator.initialize({
  displayMode: "completo",
  communicationStyle: "detailed",
});

// 2. Load project SPECs
await specLoader.loadAllSPECs();

// 3. Configure LLM (optional)
llmIntegration.configure({
  provider: "gemini",
  model: "gemini-2.0-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

// 4. Execute a task
const task = coordinator.createTask(
  "Fix TypeScript errors",
  "Fix all TypeScript errors in src/services/",
  "high",
);

const result = await coordinator.executeTask(task);
console.log(result);
```

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    @superrelatorios/agents                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│  │    Memory    │    │    Skills    │    │    Tools     │     │
│  │   System     │    │    System    │    │   System     │     │
│  │              │    │              │    │              │     │
│  │ • FTS5       │    │ • Create     │    │ • read_file │     │
│  │ • Search     │    │ • Execute    │    │ • write_file│     │
│  │ • Relevance │    │ • Improve    │    │ • bash      │     │
│  │ • Sessions  │    │ • Analyze    │    │ • grep      │     │
│  └──────────────┘    └──────────────┘    │ • glob      │     │
│                                          └──────────────┘     │
│         ↑                    ↑                    ↑           │
│         └────────────────────┼────────────────────┘           │
│                            ↓                                  │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │                    COORDINATOR                             │ │
│  │  • Task orchestration    • Parallel execution            │ │
│  │  • Agent lifecycle      • State management               │ │
│  └──────────────────────────────────────────────────────────┘ │
│                            ↓                                  │
│         ┌────────────────────┼────────────────────┐           │
│         ↑                    ↑                    ↑           │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│  │     LLM      │    │  SPEC Loader │    │    Sub       │     │
│  │ Integration  │    │              │    │   Agents     │     │
│  │              │    │ • Parse MD   │    │              │     │
│  │ • Gemini     │    │ • Extract   │    │ • agent-001  │     │
│  │ • OpenAI     │    │ • Search    │    │ • agent-002  │     │
│  │ • OpenRouter │    │ • Validate  │    │ • agent-N    │     │
│  └──────────────┘    └──────────────┘    └──────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## System Details

### Memory System (`memorySystem.ts`)

Persistent knowledge storage with FTS5 search:

```typescript
import { memorySystem } from "@superrelatorios/agents/memory";

// Create session
const session = memorySystem.createSession("user-123");

// Add knowledge
memorySystem.addKnowledge("user-123", {
  content: "The project uses React Query for data fetching",
  sessionId: "user-123",
  relevance_score: 0.9,
  tags: ["react", "query", "data"],
});

// Search
const results = memorySystem.searchKnowledge("user-123", "react query");
```

### Skill System (`skillSystem.ts`)

Auto-create and improve skills:

```typescript
import { SkillSystem } from "@superrelatorios/agents/skills";

const skills = new SkillSystem("user-123");

// Create skill from task
await skills.createSkillFromTask("fix_typescript", {
  steps: [{ action: "bash", params: { command: "npm run typecheck" } }],
});

// Execute with auto-improvement
const result = await skills.executeSkill(skillId, { strict: true });
```

### Tool System (`toolSystem.ts`)

Built-in tools for file operations and command execution:

```typescript
import { agentTools } from "@superrelatorios/agents/tools";

// Execute tool
const result = await agentTools.executeTool("bash", {
  command: "npm run build",
  timeout: 120000,
});

// Chain tools
const results = await agentTools.executeChain([
  { tool: "glob", params: { pattern: "src/**/*.ts" } },
  { tool: "bash", params: { command: "npm run lint" } },
]);
```

### LLM Integration (`llmIntegration.ts`)

Multi-provider LLM support:

```typescript
import { llmIntegration } from "@superrelatorios/agents/llm";

// Configure provider
llmIntegration.configure({
  provider: "gemini",
  model: "gemini-2.0-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

// Chat with tools
const response = await llmIntegration.chatWithTools(
  [{ role: "user", content: "Fix the bug in useAuth.ts" }],
  agentTools.getAllTools(),
);

// Reason about task
const thought = await llmIntegration.reason(
  "Implement user authentication",
  "Current auth uses JWT tokens stored in localStorage",
  ["read_file", "write_file", "bash"],
);
```

### SPEC Loader (`specLoader.ts`)

Load and parse project specifications:

```typescript
import { specLoader } from "@superrelatorios/agents/spec";

// Load all SPECs
await specLoader.loadAllSPECs();

// Get specific
const spec = specLoader.getSPEC("SPEC_requirements");

// Search
const results = specLoader.searchSPECs("authentication");
```

### Coordinator (`coordinator.ts`)

Orchestrate agents and tasks:

```typescript
import { AgentCoordinator } from "@superrelatorios/agents/coordinator";

const coordinator = new AgentCoordinator();
coordinator.initialize();

// Single task
const task = coordinator.createTask("Review PR", "Review PR #123", "high");
const result = await coordinator.executeTask(task);

// Parallel tasks
const results = await coordinator.executeParallelTasks([
  coordinator.createTask("Task 1", "Description 1", "medium"),
  coordinator.createTask("Task 2", "Description 2", "medium"),
]);

// Get agent status
const status = coordinator.getAgentStatus();
```

## Configuration

### Environment Variables

| Variable             | Description           | Required       |
| -------------------- | --------------------- | -------------- |
| `GEMINI_API_KEY`     | Google Gemini API key | For Gemini     |
| `OPENAI_API_KEY`     | OpenAI API key        | For OpenAI     |
| `OPENROUTER_API_KEY` | OpenRouter API key    | For OpenRouter |

### TypeScript

```json
{
  "compilerOptions": {
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "strict": true
  }
}
```

## Development

```bash
# Clone repo
git clone https://github.com/superrelatorios/agents

# Install
npm install

# Build
npm run build

# Test
npm run test

# Dev mode
npm run dev
```

## License

MIT — See [LICENSE](LICENSE)
