# API Documentation - SuperRelatórios

## Overview

Documentação completa da API RESTful para integração com sistemas externos e parceiros.

## Base URL
```
Production: https://api.superrelatorios.com/v1
Development: https://dev-api.superrelatorios.com/v1
```

## Authentication

### Bearer Token
```http
Authorization: Bearer <your-api-key>
```

### Rate Limiting
- **Standard:** 1000 requests/hour
- **Premium:** 10000 requests/hour
- **Enterprise:** Unlimited

## Endpoints

### Metrics API

#### Get Unified Metrics
```http
GET /metrics/unified
```

**Query Parameters:**
- `domains` (optional): financial,marketing,sales,operational
- `period` (optional): month,quarter,year
- `kpi_codes` (optional): RUNWAY,LTV_CAC_RATIO,NET_PROFIT_MARGIN

**Response:**
```json
{
  "data": {
    "domain": "financial",
    "period": "2024-03",
    "kpis": {
      "RUNWAY": {
        "value": 4.2,
        "unit": "months",
        "threshold": {
          "critical": 1,
          "warning": 3,
          "good": 6
        },
        "trend": "down",
        "previousValue": 4.8,
        "change": -12.5
      }
    },
    "summary": {
      "total": 5,
      "critical": 0,
      "warning": 2,
      "good": 3,
      "overallHealth": "good"
    }
  },
  "lastUpdated": "2024-03-20T14:30:00Z"
}
```

#### Create Custom Metric
```http
POST /metrics/custom
```

**Request Body:**
```json
{
  "code": "CUSTOM_METRIC",
  "name": "Métrica Personalizada",
  "domain": "financial",
  "value": 1000,
  "unit": "R$",
  "threshold": {
    "critical": 500,
    "warning": 750,
    "good": 1000
  }
}
```

### Strategy API

#### Get Strategy Templates
```http
GET /strategy/templates
```

**Query Parameters:**
- `challenge` (optional): CASH_FLOW_CRUNCH,INEFFICIENT_SALES_MACHINE
- `industry` (optional): technology,retail,healthcare
- `company_size` (optional): startup,sme,enterprise

**Response:**
```json
{
  "data": [
    {
      "id": "template-1",
      "name": "Redução de Burn Rate",
      "description": "Estratégias para reduzir consumo de caixa",
      "challenge": "CASH_FLOW_CRUNCH",
      "objective": "CASH_SAFETY_NET",
      "actionLevers": [
        {
          "id": "lever-1",
          "title": "Otimização de Custos",
          "category": "financial",
          "priority": 1,
          "complexity": "medium",
          "estimatedTime": "2-4 weeks",
          "expectedImpact": "high",
          "kpis": ["BURN_RATE", "RUNWAY"],
          "steps": [
            {
              "id": "step-1",
              "title": "Análise de Despesas",
              "description": "Mapear todas as despesas operacionais",
              "resources": ["Planilha", "Extratos bancários"],
              "estimatedDuration": "3 dias"
            }
          ]
        }
      ]
    }
  ]
}
```

#### Apply Strategy Template
```http
POST /strategy/apply/{templateId}
```

**Request Body:**
```json
{
  "organizationId": "org-123",
  "customizations": {
    "timeline": "accelerated",
    "budget": 50000,
    "teamSize": 10
  }
}
```

### Organization API

#### Get Organization Hierarchy
```http
GET /organization/hierarchy
```

**Response:**
```json
{
  "data": {
    "id": "org-123",
    "name": "SuperRelatórios S.A.",
    "type": "company",
    "children": [
      {
        "id": "dept-1",
        "name": "Departamento de Tecnologia",
        "type": "department",
        "children": [
          {
            "id": "team-1",
            "name": "Equipe de Analytics",
            "type": "team",
            "employees": 12,
            "budget": 400000
          }
        ]
      }
    ]
  }
}
```

## Error Handling

### Standard Error Response
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid KPI code provided",
    "details": {
      "field": "kpi_codes",
      "invalid_value": "INVALID_CODE"
    }
  }
}
```

### Error Codes
- `VALIDATION_ERROR`: 400 - Invalid request parameters
- `AUTHENTICATION_ERROR`: 401 - Invalid or missing API key
- `AUTHORIZATION_ERROR`: 403 - Insufficient permissions
- `NOT_FOUND`: 404 - Resource not found
- `RATE_LIMIT_EXCEEDED`: 429 - Too many requests
- `INTERNAL_ERROR`: 500 - Server error

## Webhooks

### Metrics Updated
```http
POST /webhooks/metrics-updated
```

**Payload:**
```json
{
  "event": "metrics.updated",
  "timestamp": "2024-03-20T14:30:00Z",
  "data": {
    "organizationId": "org-123",
    "kpiCode": "RUNWAY",
    "oldValue": 4.8,
    "newValue": 4.2,
    "thresholdBreached": false
  }
}
```

## SDKs

### JavaScript/TypeScript
```bash
npm install @superrelatorios/sdk
```

```typescript
import { SuperRelatoriosAPI } from '@superrelatorios/sdk';

const api = new SuperRelatoriosAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.superrelatorios.com/v1'
});

// Get unified metrics
const metrics = await api.metrics.getUnified({
  domains: ['financial', 'marketing'],
  period: 'month'
});

// Apply strategy template
const result = await api.strategy.applyTemplate('template-1', {
  organizationId: 'org-123',
  customizations: { timeline: 'accelerated' }
});
```

### Python
```bash
pip install superrelatorios-sdk
```

```python
from superrelatorios import SuperRelatoriosAPI

api = SuperRelatoriosAPI(
    api_key='your-api-key',
    base_url='https://api.superrelatorios.com/v1'
)

# Get unified metrics
metrics = api.metrics.get_unified(
    domains=['financial', 'marketing'],
    period='month'
)

# Apply strategy template
result = api.strategy.apply_template(
    template_id='template-1',
    organization_id='org-123',
    customizations={'timeline': 'accelerated'}
)
```

## Monitoring

### Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "timestamp": "2024-03-20T14:30:00Z",
  "services": {
    "database": "healthy",
    "cache": "healthy",
    "queue": "healthy"
  }
}
```

## Rate Limiting Headers

All API responses include rate limiting information:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1647995600
```

## Pagination

List endpoints support pagination:
```http
GET /strategy/templates?page=1&limit=20
```

**Response:**
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## Support

- **Documentation:** https://docs.superrelatorios.com
- **Status Page:** https://status.superrelatorios.com
- **Support:** api-support@superrelatorios.com
- **Community:** https://community.superrelatorios.com
