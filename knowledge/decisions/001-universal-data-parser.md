---
title: ADR-001 - Universal Data Parser Architecture
version: 1.0.0
updated: 2026-04-04
status: active
---

# ADR-001: Universal Data Parser Architecture

## Status

**Active** - Decision implemented in production

## Date

2026-04-04

## Context

The SuperRelatórios platform needed a unified way to parse and process data from various sources (CSV, Excel, JSON, PDFs) across multiple business domains (finance, commercial, marketing, operations, people).

## Decision

We implemented a layered parser architecture with the following components:

1. **DomainDetector** - Analyzes column names and data patterns to detect business domain
2. **ColumnMappingEngine** - Maps columns to domain-specific KPIs using semantic taxonomy
3. **UniversalParserService** - Unified entry point for all parsing operations
4. **DataPipelineService** - Orchestrates end-to-end data flow with validation and versioning

### Architecture Layers

```
┌─────────────────────────────────────────────────────────────┐
│  UI Layer (useUniversalDataUpload hook)                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Service Layer (UniversalParserService, DataPipeline)     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Domain Layer (DomainDetector, ColumnMappingEngine)       │
│  - semanticTaxonomy.ts (centralized KPI definitions)       │
│  - Domain Display Labels (UX-friendly mappings)           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Infrastructure (file parsers, Supabase storage)           │
└─────────────────────────────────────────────────────────────┘
```

## Consequences

### Positive

- Single entry point for all data parsing operations
- Domain detection is automatic and data-driven
- KPI mapping is centralized in semanticTaxonomy.ts
- UX-friendly display labels for domain categories
- Comprehensive validation and versioning in pipeline

### Negative

- Some duplicate type definitions between domain and services
- Parser needs continuous tuning as new data patterns emerge

## Alternatives Considered

1. **Use existing libraries** (PapaParse, SheetJS) - Rejected: needed domain-specific intelligence
2. **LLM-based parsing** - Rejected: cost, latency, and complexity
3. **Rule-based only** - Accepted: combined with semantic matching

## References

- `src/services/domainDetector.ts`
- `src/services/columnMappingEngine.ts`
- `src/services/universalParserService.ts`
- `src/domain/shared/semanticTaxonomy.ts`
