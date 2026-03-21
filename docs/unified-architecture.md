# Unified Architecture Documentation

## Overview

This document describes the unified architecture that consolidates all domain-specific metrics into a single, coherent system following Clean Architecture principles.

## Architecture Layers

```
┌─────────────────────────────────────┐
│           Domain Layer              │
│  ┌─────────────────────────────────┐ │
│  │    UnifiedMetricsEntity        │ │
│  │    BaseKPIValue                 │ │
│  │    Threshold                    │ │
│  │    UnifiedMetricsFactory        │ │
│  └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│         Application Layer           │
│  ┌─────────────────────────────────┐ │
│  │    UnifiedMetricsService        │ │
│  │    CrossDomainService           │ │
│  │    DecisionService              │ │
│  └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│      Infrastructure Layer          │
│  ┌─────────────────────────────────┐ │
│  │    UnifiedMetricsRepository    │ │
│  │    SupabaseClient              │ │
│  │    Mappers                     │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

## Core Principles

### 1. Single Source of Truth
- All KPIs stored in one unified table
- Single entity definition for all domains
- Centralized validation and business rules

### 2. Domain-Driven Design
- Rich domain models with clear business meaning
- Domain-specific logic encapsulated in entities
- Clear separation between domain and infrastructure

### 3. Test-Driven Development
- All components have comprehensive unit tests
- Integration tests verify cross-domain functionality
- Test coverage maintained above 90%

### 4. Clean Architecture
- Dependencies flow inward
- Domain layer has no external dependencies
- Infrastructure depends on domain, not vice versa

## Data Model

### Unified Table Structure

```sql
CREATE TABLE unified_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  period VARCHAR(7) NOT NULL,
  domain VARCHAR(20) NOT NULL,
  kpi_code VARCHAR(50) NOT NULL,
  value DECIMAL(15,4) NOT NULL,
  unit VARCHAR(20) NOT NULL,
  threshold_critical DECIMAL(15,4) NOT NULL,
  threshold_warning DECIMAL(15,4) NOT NULL,
  trend VARCHAR(10) DEFAULT 'stable',
  previous_value DECIMAL(15,4),
  change_percentage DECIMAL(10,2),
  calculated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(period, domain, kpi_code)
);
```

### Domain Entity

```typescript
interface UnifiedMetricsEntity extends BaseDomainEntity {
  domain: DomainType;
  kpis: Record<string, BaseKPIValue>;
}

interface BaseKPIValue {
  value: number;
  unit: string;
  threshold: Threshold;
  trend: 'up' | 'down' | 'stable';
  previousValue?: number;
  change?: number;
}
```

## Migration Strategy

### Phase 1: Create New Unified Structure
- Create unified table
- Implement UnifiedMetricsEntity
- Create UnifiedMetricsFactory
- Write comprehensive tests

### Phase 2: Migrate Data
- Migrate data from existing tables
- Validate data integrity
- Update repositories
- Test migration thoroughly

### Phase 3: Update Services
- Update all services to use unified structure
- Maintain backward compatibility
- Update integration tests
- Validate functionality

### Phase 4: Cleanup
- Remove old tables and entities
- Update documentation
- Final testing and validation
- Deploy and monitor

## Benefits

1. **Reduced Complexity**: From 7 tables to 1, from 15+ entities to 1
2. **Improved Performance**: Single source of truth, optimized queries
3. **Better Maintainability**: Single place to make changes
4. **Enhanced Testability**: Clear separation of concerns
5. **Future Scalability**: Easy to add new domains and KPIs

## Backward Compatibility

During migration, we maintain backward compatibility by:
- Keeping old entities as deprecated wrappers
- Providing adapter methods for existing services
- Gradual migration of service implementations
- Comprehensive integration testing

## Testing Strategy

### Unit Tests
- Test each component in isolation
- Mock external dependencies
- Verify business rules and validations
- Achieve >90% code coverage

### Integration Tests
- Test database operations
- Verify cross-domain functionality
- Test service interactions
- Validate data integrity

### End-to-End Tests
- Test complete user workflows
- Verify Decision Intelligence Engine functionality
- Test performance under load
- Validate system reliability

## Performance Considerations

### Database Optimization
- Proper indexing on frequently queried columns
- Partitioning by period for large datasets
- Optimized queries for cross-domain analytics
- Connection pooling and caching

### Application Performance
- Lazy loading of KPI data
- Efficient in-memory processing
- Optimized serialization/deserialization
- Background processing for heavy calculations

## Security Considerations

### Data Protection
- Row-level security for multi-tenancy
- Encryption of sensitive data
- Access control and audit logging
- Data retention policies

### Input Validation
- Comprehensive input validation
- SQL injection prevention
- Type safety through TypeScript
- Sanitization of user inputs

## Monitoring and Observability

### Application Metrics
- Performance monitoring
- Error tracking and alerting
- Business metrics tracking
- System health monitoring

### Logging
- Structured logging with correlation IDs
- Different log levels for different environments
- Sensitive data masking
- Log aggregation and analysis

## Documentation Standards

### Code Documentation
- Comprehensive JSDoc comments
- Clear interface definitions
- Usage examples in code
- Architecture decision records

### API Documentation
- OpenAPI specifications
- Interactive API documentation
- Request/response examples
- Error handling documentation

## Future Enhancements

### Planned Improvements
- Real-time KPI updates
- Advanced analytics capabilities
- Machine learning integration
- Enhanced visualization options

### Extensibility
- Plugin architecture for custom KPIs
- Domain-specific extensions
- Third-party integrations
- Custom validation rules

---

*This document is maintained by the development team and updated as the architecture evolves.*
