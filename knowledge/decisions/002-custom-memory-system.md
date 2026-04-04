---
title: ADR-002 - Custom Memory System vs External Libraries
version: 1.0.0
updated: 2026-04-04
status: active
---

# ADR-002: Custom Memory System vs External Libraries

## Status

**Active** - Decision implemented in production

## Date

2026-04-04

## Context

The project needed a persistent memory system to track development context, decisions, and actions across sessions. Several external options were considered (mem0, LangChain memory, etc.).

## Decision

We implemented a custom lightweight memory system instead of using external libraries.

### Components Built

1. **sessionMemory.ts** - In-memory session storage with entry management
2. **contextManager.ts** - Context orchestration with retrieval and summarization
3. **useProjectMemory.ts** - React hooks (useMemory, useTaskMemory, useDecisionMemory, useContextualMemory)

### Memory Structure

```
┌─────────────────────────────────────────────────────────────┐
│  Session Memory (in-memory)                                 │
│  - entries: SessionMemoryEntry[]                           │
│  - context: SessionContext                                 │
└─────────────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────────────┐
│  Context Manager                                            │
│  - startSession / endSession                               │
│  - recordDecision / recordAction / addReference            │
│  - retrieve() for semantic search                          │
│  - getContextSummary() for overview                        │
└─────────────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────────────┐
│  React Hooks                                                │
│  - useMemory() - Full memory interface                     │
│  - useTaskMemory() - Task tracking                         │
│  - useDecisionMemory() - Decision history                  │
│  - useContextualMemory() - Project context                 │
└─────────────────────────────────────────────────────────────┘
```

## Consequences

### Positive

- Zero external dependencies (no cost, no vendor lock-in)
- Lightweight and fast (in-memory only)
- Tailored to project needs
- Easy to extend and customize
- Already had foundation (PROJECT_MEMORY.md, CHANGELOG.md)

### Negative

- No persistence across browser sessions
- No semantic search (basic filtering only)
- Requires manual integration in development workflow

## Alternatives Considered

1. **mem0** - Rejected: requires LLM for operation, adds cost/complexity
2. **LangChain memory** - Rejected: heavy dependency, over-engineered
3. **LocalStorage + custom** - Deferred: could add later if needed

## References

- `src/lib/memory/sessionMemory.ts`
- `src/lib/memory/contextManager.ts`
- `src/hooks/memory/useProjectMemory.ts`
- `knowledge/PROJECT_MEMORY.md`
- `knowledge/CHANGELOG.md`
