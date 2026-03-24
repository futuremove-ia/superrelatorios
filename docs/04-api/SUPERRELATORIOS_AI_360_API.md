# API Documentation - SuperRelatórios AI 360

## Overview

Documentação completa da API do SuperRelatórios AI 360 para integração com o novo sistema de KPIs, Benchmarks e Gestão de Riscos.

## Base URL

```
Production: https://superrelatorios.com/api
Development: http://localhost:5173/api
```

### AI Proxy (Secure)

Toda comunicação com o Gemini é feita via proxy seguro para proteger a API Key:
`POST /api/gemini`

## Authentication

### Bearer Token

```http
Authorization: Bearer <your-api-key>
```

### Rate Limiting

- **Standard:** 1000 requests/hour
- **Premium:** 10000 requests/hour
- **Enterprise:** Unlimited

---

## KPI Library API

### Get All KPIs

```http
GET /kpis
```

**Query Parameters:**

- `domain` (optional): finance,sales,marketing,operations,hr,strategy
- `is_active` (optional): true/false
- `search` (optional): search term for title/description

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "code": "REV_01",
      "title": "Faturamento Bruto",
      "description": "Receita total de vendas antes de deduções",
      "unit": "BRL",
      "domain": "finance",
      "trend_direction": "higher_is_better",
      "input_type": "non_cumulative",
      "group_data_period": "monthly",
      "total_is": "last_value",
      "is_active": true,
      "created_at": "2024-03-01T00:00:00Z",
      "updated_at": "2024-03-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 25
  }
}
```

### Get KPI by ID

```http
GET /kpis/{id}
```

### Create KPI

```http
POST /kpis
```

**Request Body:**

```json
{
  "code": "NEW_KPI",
  "title": "Novo KPI",
  "description": "Descrição do KPI",
  "unit": "BRL",
  "domain": "finance",
  "trend_direction": "higher_is_better",
  "input_type": "non_cumulative",
  "group_data_period": "monthly",
  "total_is": "last_value"
}
```

### Update KPI

```http
PUT /kpis/{id}
```

### Delete KPI

```http
DELETE /kpis/{id}
```

---

## Organization KPIs API

### Get Organization KPIs

```http
GET /organizations/{org_id}/kpis
```

**Query Parameters:**

- `period_key` (optional): "2024-03"
- `kpi_id` (optional): filter by specific KPI
- `start_date` (optional): ISO date
- `end_date` (optional): ISO date

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "kpi_id": "uuid",
      "organization_id": "uuid",
      "period_start": "2024-03-01",
      "period_end": "2024-03-31",
      "period_key": "2024-03",
      "value": 150000.0,
      "currency": "BRL",
      "data_source": "manual_input",
      "is_verified": false,
      "created_at": "2024-03-01T00:00:00Z",
      "updated_at": "2024-03-01T00:00:00Z",
      "kpi_library": {
        "id": "uuid",
        "code": "REV_01",
        "title": "Faturamento Bruto",
        "unit": "BRL",
        "domain": "finance",
        "trend_direction": "higher_is_better"
      }
    }
  ]
}
```

### Create Organization KPI

```http
POST /organizations/{org_id}/kpis
```

**Request Body:**

```json
{
  "kpi_id": "uuid",
  "period_start": "2024-03-01",
  "period_end": "2024-03-31",
  "period_key": "2024-03",
  "value": 150000.0,
  "currency": "BRL",
  "data_source": "manual_input"
}
```

### Update Organization KPI

```http
PUT /organizations/{org_id}/kpis/{id}
```

### Delete Organization KPI

```http
DELETE /organizations/{org_id}/kpis/{id}
```

### Get KPI History

```http
GET /organizations/{org_id}/kpis/{kpi_id}/history
```

**Query Parameters:**

- `limit` (optional): number of periods (default: 12)

### Get KPI Trend

```http
GET /organizations/{org_id}/kpis/{kpi_id}/trend
```

**Query Parameters:**

- `periods` (optional): number of periods for analysis (default: 6)

---

## Benchmarks API

### Get Organization Benchmarks

```http
GET /organizations/{org_id}/benchmarks
```

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "kpi_id": "uuid",
      "organization_id": "uuid",
      "period_reference": "Last 12 Months",
      "value_target": 200000.0,
      "value_excellent": 260000.0,
      "value_good": 220000.0,
      "value_warning": 140000.0,
      "value_critical": 100000.0,
      "created_at": "2024-03-01T00:00:00Z"
    }
  ]
}
```

### Create Organization Benchmark

```http
POST /organizations/{org_id}/benchmarks
```

**Request Body:**

```json
{
  "kpi_id": "uuid",
  "period_reference": "Last 12 Months",
  "value_target": 200000.0,
  "value_excellent": 260000.0,
  "value_good": 220000.0,
  "value_warning": 140000.0,
  "value_critical": 100000.0
}
```

### Get Market Benchmarks

```http
GET /benchmarks/market
```

**Query Parameters:**

- `kpi_id` (optional): filter by KPI
- `industry_sector` (optional): Varejo,SaaS,Serviços
- `company_size` (optional): Micro,PME,Grande

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "kpi_id": "uuid",
      "industry_sector": "Varejo",
      "company_size": "PME",
      "value_market_avg": 180000.0,
      "source_name": "Sebrae 2024",
      "created_at": "2024-03-01T00:00:00Z"
    }
  ]
}
```

### Get Best Benchmark

```http
GET /organizations/{org_id}/benchmarks/best
```

**Query Parameters:**

- `kpi_id` (required): KPI ID
- `company_size` (optional): context filter
- `industry_sector` (optional): context filter

**Response:**

```json
{
  "data": {
    "benchmark_type": "internal",
    "source": "organization_history",
    "value_target": 200000.0,
    "value_excellent": 260000.0,
    "value_good": 220000.0,
    "value_warning": 140000.0,
    "value_critical": 100000.0,
    "relevance_score": 100
  }
}
```

### Get Benchmark Analysis

```http
POST /organizations/{org_id}/benchmarks/analysis
```

**Request Body:**

```json
{
  "kpi_ids": ["uuid1", "uuid2", "uuid3"]
}
```

**Response:**

```json
{
  "data": [
    {
      "kpi_id": "uuid1",
      "actual_value": 150000.0,
      "benchmark": {
        "benchmark_type": "internal",
        "source": "organization_history",
        "value_target": 200000.0,
        "relevance_score": 100
      },
      "performance": "warning",
      "gap_percentage": -25.0
    }
  ]
}
```

---

## Risk Management API

### Get Risks

```http
GET /organizations/{org_id}/risks
```

**Query Parameters:**

- `status` (optional): identified,active,mitigated,occurred,archived
- `category` (optional): strategic,operational,compliance,financial,regulatory,economical,demand,sociopolitical,environmental

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "organization_id": "uuid",
      "kpi_id": "uuid",
      "title": "Risco de Perda de Clientes",
      "description": "Aumento da taxa de cancelamento acima do esperado",
      "origin_type": "internal",
      "category": "operational",
      "likelihood": 7,
      "impact": 8,
      "risk_score": 56,
      "status": "active",
      "created_at": "2024-03-01T00:00:00Z",
      "updated_at": "2024-03-01T00:00:00Z"
    }
  ]
}
```

### Create Risk

```http
POST /organizations/{org_id}/risks
```

**Request Body:**

```json
{
  "kpi_id": "uuid",
  "title": "Novo Risco",
  "description": "Descrição detalhada do risco",
  "origin_type": "internal",
  "category": "operational",
  "likelihood": 5,
  "impact": 6
}
```

### Update Risk

```http
PUT /organizations/{org_id}/risks/{id}
```

### Update Risk Status

```http
PATCH /organizations/{org_id}/risks/{id}/status
```

**Request Body:**

```json
{
  "status": "mitigated"
}
```

### Get Risk Matrix

```http
GET /organizations/{org_id}/risks/matrix
```

**Response:**

```json
{
  "data": {
    "risks": [...],
    "matrix": [
      [
        {
          "x": 1,
          "y": 10,
          "risks": [...],
          "count": 2,
          "color": "bg-red-500"
        }
      ]
    ],
    "summary": {
      "total": 15,
      "byStatus": {
        "active": 8,
        "mitigated": 5,
        "identified": 2
      },
      "byCategory": {
        "operational": 6,
        "financial": 5,
        "strategic": 4
      },
      "highRisk": 5,
      "mediumRisk": 7,
      "lowRisk": 3
    }
  }
}
```

### Get Risk Mitigations

```http
GET /organizations/{org_id}/risks/{risk_id}/mitigations
```

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "risk_id": "uuid",
      "title": "Plano de Retenção de Clientes",
      "action_plan": "Implementar programa de fidelidade...",
      "responsible_id": "uuid",
      "deadline": "2024-04-15",
      "status": "in_progress",
      "cost_estimated": 5000.0,
      "created_at": "2024-03-01T00:00:00Z"
    }
  ]
}
```

### Create Risk Mitigation

```http
POST /organizations/{org_id}/risks/{risk_id}/mitigations
```

**Request Body:**

```json
{
  "title": "Plano de Mitigação",
  "action_plan": "Descrição detalhada do plano",
  "responsible_id": "uuid",
  "deadline": "2024-04-15",
  "status": "pending",
  "cost_estimated": 5000.0
}
```

### Get Risk Dashboard

```http
GET /organizations/{org_id}/risks/dashboard
```

**Response:**

```json
{
  "data": {
    "summary": {
      "total": 15,
      "byStatus": {...},
      "byCategory": {...},
      "highRisk": 5,
      "mediumRisk": 7,
      "lowRisk": 3
    },
    "recentRisks": [...],
    "upcomingDeadlines": [
      {
        "mitigation": {...},
        "risk": {...},
        "daysUntilDeadline": 7
      }
    ],
    "alerts": [
      {
        "risk": {...},
        "alertLevel": "critical",
        "message": "Risco crítico: Perda de Clientes"
      }
    ]
  }
}
```

---

## Error Responses

All endpoints return standard HTTP status codes:

- `200 OK` - Success
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Invalid authentication
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `422 Unprocessable Entity` - Validation error
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

**Error Response Format:**

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": {
      "field": "value",
      "error": "Required field missing"
    }
  }
}
```

---

## Rate Limits & Quotas

### Rate Limits

- **Burst**: 100 requests/minute
- **Sustained**: 1000 requests/hour
- **Daily**: 10000 requests/day

### Quotas

- **Standard**: 1000 requests/hour
- **Premium**: 10000 requests/hour
- **Enterprise**: Unlimited

Rate limit headers are included in all responses:

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

---

## Webhooks

### Configure Webhooks

```http
POST /webhooks
```

**Request Body:**

```json
{
  "url": "https://your-app.com/webhook",
  "events": ["kpi.created", "risk.identified", "benchmark.updated"],
  "secret": "your-webhook-secret"
}
```

### Webhook Events

- `kpi.created` - New KPI created
- `kpi.updated` - KPI updated
- `risk.identified` - New risk identified
- `risk.status_changed` - Risk status updated
- `benchmark.updated` - Benchmark updated
- `mitigation.completed` - Mitigation completed

### Webhook Payload Format

```json
{
  "event": "kpi.created",
  "data": {
    "id": "uuid",
    "code": "NEW_KPI",
    "title": "Novo KPI",
    ...
  },
  "timestamp": "2024-03-01T12:00:00Z"
}
```

---

## SDKs & Libraries

### JavaScript/TypeScript

```bash
npm install @superrelatorios/sdk
```

```javascript
import { SuperRelatoriosAPI } from "@superrelatorios/sdk";

const api = new SuperRelatoriosAPI({
  apiKey: "your-api-key",
  baseURL: "https://api.superrelatorios.com/v1",
});

const kpis = await api.kpis.getAll();
```

### Python

```bash
pip install superrelatorios-sdk
```

```python
from superrelatorios import SuperRelatoriosAPI

api = SuperRelatoriosAPI(api_key='your-api-key')
kpis = api.kpis.get_all()
```

---

## Support

- **Documentation**: https://docs.superrelatorios.com
- **API Reference**: https://api.superrelatorios.com/docs
- **Support**: api-support@superrelatorios.com
- **Status Page**: https://status.superrelatorios.com
