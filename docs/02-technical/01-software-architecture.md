# 🏗️ Arquitetura de Software SuperRelatórios

## Visão Geral

A Arquitetura de Software SuperRelatórios é uma implementação de Clean Architecture com Domain-Driven Design, criada para suportar escalabilidade, maintainability e evolução contínua da plataforma de analytics estratégica para PMEs.

## Contexto e Importância

Esta arquitetura é crucial porque:
- **Garante escalabilidade** para crescimento exponencial
- **Facilita manutenção** com separação clara de responsabilidades
- **Suporta evolução** com mínimo impacto no código existente
- **Otimiza performance** para Analytics em tempo real
- **Permite testabilidade** completa do sistema

## Princípios Fundamentais

### 🎯 Clean Architecture

#### Camadas da Arquitetura
```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                       │
├─────────────────────────────────────────────────────────────┤
│  React Components, UI State, User Interactions               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Pages     │ │ Components  │ │   Hooks     │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                        │
├─────────────────────────────────────────────────────────────┤
│  Use Cases, Application Services, DTOs                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ Use Cases   │ │ Services    │ │ DTOs        │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                      DOMAIN LAYER                            │
├─────────────────────────────────────────────────────────────┤
│  Business Logic, Entities, Value Objects, Domain Services    │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ Entities    │ │ Value Obj.  │ │ Dom. Svc.   │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                   INFRASTRUCTURE LAYER                        │
├─────────────────────────────────────────────────────────────┤
│  Database, External APIs, Frameworks, Cross-cutting         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ Repositories│ │ External    │ │ Cross-cut.  │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

### 🎯 Domain-Driven Design (DDD)

#### Bounded Contexts
```typescript
// Contextos Delimitados
namespace SuperRelatorios {
  // Contexto de Métricas
  namespace Metrics {
    export interface KPIValue {
      value: number;
      unit: string;
      threshold: Threshold;
      trend: Trend;
      lastUpdated: Date;
    }
    
    export interface Threshold {
      readonly critical: number;
      readonly warning: number;
      readonly good: number;
    }
  }
  
  // Contexto Estratégico
  namespace Strategy {
    export interface Challenge {
      id: string;
      code: string;
      title: string;
      severity: Severity;
      symptoms: string[];
      recommendations: Recommendation[];
    }
    
    export interface ActionLever {
      id: string;
      title: string;
      description: string;
      steps: ActionStep[];
      expectedImpact: Impact;
    }
  }
  
  // Contexto Organizacional
  namespace Organization {
    export interface Hierarchy {
      id: string;
      name: string;
      type: OrganizationType;
      parent?: string;
      children?: Hierarchy[];
    }
    
    export interface User {
      id: string;
      name: string;
      email: string;
      role: UserRole;
      permissions: Permission[];
      organizationId: string;
    }
  }
}
```

## Implementação Detalhada

### 🎯 Domain Layer

#### 1. Entidades Principais

##### UnifiedMetricsEntity
```typescript
// src/domain/unified/entities/UnifiedMetricsEntity.ts
export class UnifiedMetricsEntity {
  private constructor(
    private readonly id: string,
    private readonly domain: DomainType,
    private readonly period: string,
    private readonly kpis: Record<string, KPIValue>,
    private readonly metadata?: MetricsMetadata
  ) {}

  static create(props: CreateUnifiedMetricsProps): Result<UnifiedMetricsEntity> {
    // Validações
    if (!props.id || props.id.trim() === '') {
      return Result.fail('ID é obrigatório');
    }
    
    if (!Object.values(DomainType).includes(props.domain)) {
      return Result.fail('Domínio inválido');
    }
    
    if (Object.keys(props.kpis).length === 0) {
      return Result.fail('Pelo menos um KPI é obrigatório');
    }
    
    // Validação de KPIs
    const kpiValidation = this.validateKPIs(props.kpis);
    if (kpiValidation.isFailure) {
      return Result.fail(kpiValidation.error);
    }
    
    return Result.ok(new UnifiedMetricsEntity(
      props.id,
      props.domain,
      props.period,
      props.kpis,
      props.metadata
    ));
  }
  
  private static validateKPIs(kpis: Record<string, KPIValue>): Result<void> {
    for (const [code, kpi] of Object.entries(kpis)) {
      if (!kpi.value && kpi.value !== 0) {
        return Result.fail(`Valor do KPI ${code} é inválido`);
      }
      
      if (!kpi.unit) {
        return Result.fail(`Unidade do KPI ${code} é obrigatória`);
      }
      
      if (!kpi.threshold) {
        return Result.fail(`Threshold do KPI ${code} é obrigatório`);
      }
      
      // Validação de threshold
      if (kpi.threshold.critical >= kpi.threshold.warning ||
          kpi.threshold.warning >= kpi.threshold.good) {
        return Result.fail(`Threshold do KPI ${code} é inválido`);
      }
    }
    
    return Result.ok();
  }
  
  // Métodos de negócio
  public getCriticalKPIs(): KPIValue[] {
    return Object.entries(this.kpis)
      .filter(([_, kpi]) => this.isCritical(kpi))
      .map(([_, kpi]) => kpi);
  }
  
  public getWarningKPIs(): KPIValue[] {
    return Object.entries(this.kpis)
      .filter(([_, kpi]) => this.isWarning(kpi))
      .map(([_, kpi]) => kpi);
  }
  
  public getGoodKPIs(): KPIValue[] {
    return Object.entries(this.kpis)
      .filter(([_, kpi]) => this.isGood(kpi))
      .map(([_, kpi]) => kpi);
  }
  
  private isCritical(kpi: KPIValue): boolean {
    return kpi.value <= kpi.threshold.critical;
  }
  
  private isWarning(kpi: KPIValue): boolean {
    return kpi.value > kpi.threshold.critical && kpi.value <= kpi.threshold.warning;
  }
  
  private isGood(kpi: KPIValue): boolean {
    return kpi.value > kpi.threshold.good;
  }
  
  public calculateOverallHealth(): HealthStatus {
    const total = Object.keys(this.kpis).length;
    const critical = this.getCriticalKPIs().length;
    const warning = this.getWarningKPIs().length;
    const good = this.getGoodKPIs().length;
    
    if (critical > 0) return 'critical';
    if (warning > total * 0.3) return 'warning';
    if (good > total * 0.7) return 'good';
    return 'moderate';
  }
  
  // Getters
  get id(): string { return this.id; }
  get domain(): DomainType { return this.domain; }
  get period(): string { return this.period; }
  get kpis(): Record<string, KPIValue> { return { ...this.kpis }; }
  get metadata(): MetricsMetadata | undefined { return this.metadata; }
}
```

##### ChallengeEntity
```typescript
// src/domain/strategy/entities/ChallengeEntity.ts
export class ChallengeEntity {
  private constructor(
    private readonly id: string,
    private readonly code: string,
    private readonly title: string,
    private readonly description: string,
    private readonly severity: Severity,
    private readonly symptoms: string[],
    private readonly relatedKPIs: string[],
    private readonly recommendations: Recommendation[]
  ) {}

  static create(props: CreateChallengeProps): Result<ChallengeEntity> {
    // Validações
    if (!props.code || props.code.trim() === '') {
      return Result.fail('Código do desafio é obrigatório');
    }
    
    if (!props.title || props.title.trim() === '') {
      return Result.fail('Título do desafio é obrigatório');
    }
    
    if (!Object.values(Severity).includes(props.severity)) {
      return Result.fail('Severidade inválida');
    }
    
    if (props.relatedKPIs.length === 0) {
      return Result.fail('Pelo menos um KPI relacionado é obrigatório');
    }
    
    return Result.ok(new ChallengeEntity(
      props.id || generateId(),
      props.code,
      props.title,
      props.description || '',
      props.severity,
      props.symptoms || [],
      props.relatedKPIs,
      props.recommendations || []
    ));
  }
  
  // Métodos de negócio
  public isActive(metrics: Record<string, KPIValue>): boolean {
    return this.relatedKPIs.some(kpiCode => {
      const kpi = metrics[kpiCode];
      if (!kpi) return false;
      
      return this.evaluateKPICondition(kpi);
    });
  }
  
  private evaluateKPICondition(kpi: KPIValue): boolean {
    switch (this.code) {
      case 'CASH_FLOW_CRUNCH':
        return kpi.value <= kpi.threshold.critical;
      case 'INEFFICIENT_SALES_MACHINE':
        return kpi.value >= kpi.threshold.warning;
      case 'COMMODITY_TRAP':
        return kpi.value <= kpi.threshold.warning;
      default:
        return kpi.value <= kpi.threshold.warning;
    }
  }
  
  public getTopRecommendations(limit: number = 3): Recommendation[] {
    return this.recommendations
      .sort((a, b) => b.priority - a.priority)
      .slice(0, limit);
  }
  
  public calculateConfidence(metrics: Record<string, KPIValue>): number {
    const activeKPIs = this.relatedKPIs.filter(kpiCode => {
      const kpi = metrics[kpiCode];
      return kpi && this.evaluateKPICondition(kpi);
    });
    
    return activeKPIs.length / this.relatedKPIs.length;
  }
  
  // Getters
  get id(): string { return this.id; }
  get code(): string { return this.code; }
  get title(): string { return this.title; }
  get description(): string { return this.description; }
  get severity(): Severity { return this.severity; }
  get symptoms(): string[] { return [...this.symptoms]; }
  get relatedKPIs(): string[] { return [...this.relatedKPIs]; }
  get recommendations(): Recommendation[] { return [...this.recommendations]; }
}
```

#### 2. Value Objects

##### KPIValue
```typescript
// src/domain/metrics/value-objects/KPIValue.ts
export class KPIValue {
  private constructor(
    private readonly value: number,
    private readonly unit: string,
    private readonly threshold: Threshold,
    private readonly trend: Trend,
    private readonly previousValue?: number,
    private readonly lastUpdated: Date = new Date()
  ) {}

  static create(props: CreateKPIValueProps): Result<KPIValue> {
    // Validações
    if (typeof props.value !== 'number' || isNaN(props.value)) {
      return Result.fail('Valor deve ser um número válido');
    }
    
    if (!props.unit || props.unit.trim() === '') {
      return Result.fail('Unidade é obrigatória');
    }
    
    if (!props.threshold) {
      return Result.fail('Threshold é obrigatório');
    }
    
    if (!Object.values(Trend).includes(props.trend)) {
      return Result.fail('Trend inválido');
    }
    
    return Result.ok(new KPIValue(
      props.value,
      props.unit,
      props.threshold,
      props.trend,
      props.previousValue,
      props.lastUpdated
    ));
  }
  
  // Métodos de negócio
  public getStatus(): Status {
    if (this.value <= this.threshold.critical) return 'critical';
    if (this.value <= this.threshold.warning) return 'warning';
    return 'good';
  }
  
  public getChange(): number | undefined {
    if (this.previousValue === undefined) return undefined;
    return this.value - this.previousValue;
  }
  
  public getChangePercentage(): number | undefined {
    if (this.previousValue === undefined || this.previousValue === 0) return undefined;
    return ((this.value - this.previousValue) / this.previousValue) * 100;
  }
  
  public isImproving(): boolean {
    if (this.previousValue === undefined) return false;
    
    // Para métricas onde maior é melhor
    if (this.threshold.good > this.threshold.critical) {
      return this.value > this.previousValue;
    }
    
    // Para métricas onde menor é melhor
    return this.value < this.previousValue;
  }
  
  // Getters
  get value(): number { return this.value; }
  get unit(): string { return this.unit; }
  get threshold(): Threshold { return this.threshold; }
  get trend(): Trend { return this.trend; }
  get previousValue(): number | undefined { return this.previousValue; }
  get lastUpdated(): Date { return this.lastUpdated; }
}
```

##### Threshold
```typescript
// src/domain/metrics/value-objects/Threshold.ts
export class Threshold {
  private constructor(
    private readonly critical: number,
    private readonly warning: number,
    private readonly good: number
  ) {}

  static create(props: CreateThresholdProps): Result<Threshold> {
    // Validações
    if (props.critical >= props.warning) {
      return Result.fail('Critical deve ser menor que warning');
    }
    
    if (props.warning >= props.good) {
      return Result.fail('Warning deve ser menor que good');
    }
    
    return Result.ok(new Threshold(
      props.critical,
      props.warning,
      props.good
    ));
  }
  
  // Métodos de negócio
  public getStatus(value: number): Status {
    if (value <= this.critical) return 'critical';
    if (value <= this.warning) return 'warning';
    return 'good';
  }
  
  public isInRange(value: number): boolean {
    return value >= this.critical && value <= this.good * 2;
  }
  
  // Getters
  get critical(): number { return this.critical; }
  get warning(): number { return this.warning; }
  get good(): number { return this.good; }
}
```

#### 3. Domain Services

##### MetricsCalculationService
```typescript
// src/domain/metrics/services/MetricsCalculationService.ts
export class MetricsCalculationService {
  calculateRunway(
    cashBalance: number,
    monthlyBurnRate: number
  ): Result<number> {
    if (monthlyBurnRate <= 0) {
      return Result.fail('Burn rate deve ser positivo');
    }
    
    if (cashBalance < 0) {
      return Result.fail('Saldo de caixa não pode ser negativo');
    }
    
    const runway = cashBalance / monthlyBurnRate;
    return Result.ok(Math.round(runway * 10) / 10); // 1 casa decimal
  }
  
  calculateLTVCACRatio(
    ltv: number,
    cac: number
  ): Result<number> {
    if (cac <= 0) {
      return Result.fail('CAC deve ser positivo');
    }
    
    if (ltv < 0) {
      return Result.fail('LTV não pode ser negativo');
    }
    
    const ratio = ltv / cac;
    return Result.ok(Math.round(ratio * 100) / 100); // 2 casas decimais
  }
  
  calculateChurnRate(
    customersLost: number,
    totalCustomers: number
  ): Result<number> {
    if (totalCustomers <= 0) {
      return Result.fail('Total de clientes deve ser positivo');
    }
    
    if (customersLost < 0) {
      return Result.fail('Clientes perdidos não pode ser negativo');
    }
    
    const churnRate = (customersLost / totalCustomers) * 100;
    return Result.ok(Math.round(churnRate * 100) / 100); // 2 casas decimais
  }
  
  calculateNetProfitMargin(
    netProfit: number,
    revenue: number
  ): Result<number> {
    if (revenue <= 0) {
      return Result.fail('Receita deve ser positiva');
    }
    
    const margin = (netProfit / revenue) * 100;
    return Result.ok(Math.round(margin * 100) / 100); // 2 casas decimais
  }
  
  calculateContributionMargin(
    revenue: number,
    variableCosts: number
  ): Result<number> {
    if (revenue <= 0) {
      return Result.fail('Receita deve ser positiva');
    }
    
    if (variableCosts < 0) {
      return Result.fail('Custos variáveis não podem ser negativos');
    }
    
    const contribution = revenue - variableCosts;
    const margin = (contribution / revenue) * 100;
    return Result.ok(Math.round(margin * 100) / 100); // 2 casas decimais
  }
}
```

### 🎯 Application Layer

#### 1. Use Cases

##### GetUnifiedMetricsUseCase
```typescript
// src/application/use-cases/GetUnifiedMetricsUseCase.ts
export class GetUnifiedMetricsUseCase {
  constructor(
    private readonly metricsRepository: IMetricsRepository,
    private readonly calculationService: MetricsCalculationService
  ) {}
  
  async execute(request: GetUnifiedMetricsRequest): Promise<Result<UnifiedMetricsResponse>> {
    try {
      // Validação do request
      const validation = this.validateRequest(request);
      if (validation.isFailure) {
        return Result.fail(validation.error);
      }
      
      // Buscar métricas base
      const metricsResult = await this.metricsRepository.findByDomainAndPeriod(
        request.domain,
        request.period
      );
      
      if (metricsResult.isFailure) {
        return Result.fail(metricsResult.error);
      }
      
      const metrics = metricsResult.getValue();
      
      // Calcular métricas derivadas se necessário
      const enrichedMetrics = await this.enrichMetrics(metrics, request);
      
      // Construir response
      const response: UnifiedMetricsResponse = {
        id: enrichedMetrics.id,
        domain: enrichedMetrics.domain,
        period: enrichedMetrics.period,
        kpis: enrichedMetrics.kpis,
        summary: this.buildSummary(enrichedMetrics),
        lastUpdated: enrichedMetrics.metadata?.lastUpdated || new Date()
      };
      
      return Result.ok(response);
      
    } catch (error) {
      console.error('Error in GetUnifiedMetricsUseCase:', error);
      return Result.fail('Erro interno ao buscar métricas unificadas');
    }
  }
  
  private validateRequest(request: GetUnifiedMetricsRequest): Result<void> {
    if (!request.domain) {
      return Result.fail('Domínio é obrigatório');
    }
    
    if (!Object.values(DomainType).includes(request.domain)) {
      return Result.fail('Domínio inválido');
    }
    
    if (!request.period) {
      return Result.fail('Período é obrigatório');
    }
    
    return Result.ok();
  }
  
  private async enrichMetrics(
    metrics: UnifiedMetricsEntity,
    request: GetUnifiedMetricsRequest
  ): Promise<UnifiedMetricsEntity> {
    // Enriquecer com cálculos adicionais baseados no domínio
    switch (request.domain) {
      case DomainType.FINANCIAL:
        return this.enrichFinancialMetrics(metrics);
      case DomainType.MARKETING:
        return this.enrichMarketingMetrics(metrics);
      case DomainType.SALES:
        return this.enrichSalesMetrics(metrics);
      case DomainType.OPERATIONAL:
        return this.enrichOperationalMetrics(metrics);
      default:
        return metrics;
    }
  }
  
  private async enrichFinancialMetrics(metrics: UnifiedMetricsEntity): Promise<UnifiedMetricsEntity> {
    const kpis = { ...metrics.kpis };
    
    // Calcular RUNWAY se não existir
    if (!kpis.RUNWAY && kpis.CASH_BALANCE && kpis.BURN_RATE) {
      const runwayResult = this.calculationService.calculateRunway(
        kpis.CASH_BALANCE.value,
        kpis.BURN_RATE.value
      );
      
      if (runwayResult.isSuccess) {
        kpis.RUNWAY = KPIValue.create({
          value: runwayResult.getValue(),
          unit: 'meses',
          threshold: { critical: 1, warning: 3, good: 6 },
          trend: 'stable'
        }).getValue();
      }
    }
    
    // Calcular LTV_CAC_RATIO se não existir
    if (!kpis.LTV_CAC_RATIO && kpis.CUSTOMER_LTV && kpis.CAC) {
      const ratioResult = this.calculationService.calculateLTVCACRatio(
        kpis.CUSTOMER_LTV.value,
        kpis.CAC.value
      );
      
      if (ratioResult.isSuccess) {
        kpis.LTV_CAC_RATIO = KPIValue.create({
          value: ratioResult.getValue(),
          unit: 'ratio',
          threshold: { critical: 1, warning: 2, good: 3 },
          trend: 'stable'
        }).getValue();
      }
    }
    
    return UnifiedMetricsEntity.create({
      id: metrics.id,
      domain: metrics.domain,
      period: metrics.period,
      kpis,
      metadata: metrics.metadata
    }).getValue();
  }
  
  private buildSummary(metrics: UnifiedMetricsEntity): MetricsSummary {
    const kpis = metrics.kpis;
    const total = Object.keys(kpis).length;
    const critical = metrics.getCriticalKPIs().length;
    const warning = metrics.getWarningKPIs().length;
    const good = metrics.getGoodKPIs().length;
    
    return {
      total,
      critical,
      warning,
      good,
      overallHealth: metrics.calculateOverallHealth()
    };
  }
}
```

##### DetectChallengesUseCase
```typescript
// src/application/use-cases/DetectChallengesUseCase.ts
export class DetectChallengesUseCase {
  constructor(
    private readonly challengeRepository: IChallengeRepository,
    private readonly metricsRepository: IMetricsRepository
  ) {}
  
  async execute(request: DetectChallengesRequest): Promise<Result<DetectChallengesResponse>> {
    try {
      // Validação do request
      const validation = this.validateRequest(request);
      if (validation.isFailure) {
        return Result.fail(validation.error);
      }
      
      // Buscar métricas atuais
      const metricsResult = await this.metricsRepository.findByDomainAndPeriod(
        request.domain,
        request.period
      );
      
      if (metricsResult.isFailure) {
        return Result.fail(metricsResult.error);
      }
      
      const metrics = metricsResult.getValue();
      
      // Buscar todos os desafios
      const challengesResult = await this.challengeRepository.findAll();
      
      if (challengesResult.isFailure) {
        return Result.fail(challengesResult.error);
      }
      
      const allChallenges = challengesResult.getValue();
      
      // Detectar desafios ativos
      const detectedChallenges = allChallenges
        .filter(challenge => challenge.isActive(metrics.kpis))
        .map(challenge => ({
          id: challenge.id,
          code: challenge.code,
          title: challenge.title,
          severity: challenge.severity,
          confidence: challenge.calculateConfidence(metrics.kpis),
          symptoms: challenge.symptoms,
          relatedKPIs: challenge.relatedKPIs,
          recommendations: challenge.getTopRecommendations(3)
        }));
      
      // Ordenar por severidade e confiança
      detectedChallenges.sort((a, b) => {
        const severityOrder = { critical: 3, warning: 2, info: 1 };
        const severityDiff = severityOrder[b.severity] - severityOrder[a.severity];
        
        if (severityDiff !== 0) return severityDiff;
        
        return b.confidence - a.confidence;
      });
      
      const response: DetectChallengesResponse = {
        challenges: detectedChallenges,
        total: detectedChallenges.length,
        critical: detectedChallenges.filter(c => c.severity === 'critical').length,
        warning: detectedChallenges.filter(c => c.severity === 'warning').length,
        info: detectedChallenges.filter(c => c.severity === 'info').length,
        detectedAt: new Date()
      };
      
      return Result.ok(response);
      
    } catch (error) {
      console.error('Error in DetectChallengesUseCase:', error);
      return Result.fail('Erro interno ao detectar desafios');
    }
  }
  
  private validateRequest(request: DetectChallengesRequest): Result<void> {
    if (!request.domain) {
      return Result.fail('Domínio é obrigatório');
    }
    
    if (!request.period) {
      return Result.fail('Período é obrigatório');
    }
    
    return Result.ok();
  }
}
```

#### 2. Application Services

##### StrategyApplicationService
```typescript
// src/application/services/StrategyApplicationService.ts
export class StrategyApplicationService {
  constructor(
    private readonly challengeRepository: IChallengeRepository,
    private readonly templateRepository: ITemplateRepository,
    private readonly organizationRepository: IOrganizationRepository
  ) {}
  
  async generateRecommendations(
    challengeCode: string,
    organizationId: string
  ): Promise<Result<RecommendationResponse[]>> {
    try {
      // Buscar desafio
      const challengeResult = await this.challengeRepository.findByCode(challengeCode);
      
      if (challengeResult.isFailure) {
        return Result.fail(challengeResult.error);
      }
      
      const challenge = challengeResult.getValue();
      
      // Buscar organização
      const orgResult = await this.organizationRepository.findById(organizationId);
      
      if (orgResult.isFailure) {
        return Result.fail(orgResult.error);
      }
      
      const organization = orgResult.getValue();
      
      // Buscar templates relevantes
      const templatesResult = await this.templateRepository.findByChallenge(challengeCode);
      
      if (templatesResult.isFailure) {
        return Result.fail(templatesResult.error);
      }
      
      const templates = templatesResult.getValue();
      
      // Personalizar recomendações
      const recommendations = templates.map(template => 
        this.personalizeTemplate(template, organization)
      );
      
      return Result.ok(recommendations);
      
    } catch (error) {
      console.error('Error in StrategyApplicationService:', error);
      return Result.fail('Erro interno ao gerar recomendações');
    }
  }
  
  private personalizeTemplate(
    template: StrategyTemplate,
    organization: OrganizationEntity
  ): RecommendationResponse {
    return {
      id: template.id,
      title: template.title,
      description: template.description,
      category: template.category,
      priority: template.priority,
      complexity: template.complexity,
      estimatedTime: template.estimatedTime,
      expectedImpact: template.expectedImpact,
      actionLevers: template.actionLevers.map(lever => ({
        ...lever,
        steps: this.adaptSteps(lever.steps, organization),
        resources: this.filterResources(lever.resources, organization)
      })),
      customization: {
        industryAdaptation: this.adaptForIndustry(template, organization),
        sizeAdaptation: this.adaptForSize(template, organization),
        resourceConstraints: this.assessResourceConstraints(organization)
      }
    };
  }
  
  private adaptSteps(steps: ActionStep[], organization: OrganizationEntity): ActionStep[] {
    return steps.map(step => ({
      ...step,
      estimatedDuration: this.adjustDuration(step.estimatedDuration, organization.size),
      resources: this.filterResources(step.resources, organization)
    }));
  }
  
  private filterResources(resources: string[], organization: OrganizationEntity): string[] {
    return resources.filter(resource => 
      this.isResourceAvailable(resource, organization)
    );
  }
  
  private isResourceAvailable(resource: string, organization: OrganizationEntity): boolean {
    // Lógica para verificar se recurso está disponível para a organização
    const availableResources = this.getAvailableResources(organization);
    return availableResources.includes(resource);
  }
  
  private getAvailableResources(organization: OrganizationEntity): string[] {
    // Retornar recursos disponíveis baseado no tamanho e setor da organização
    const baseResources = ['Planilha', 'CRM', 'Sistema Financeiro'];
    
    if (organization.size === 'large') {
      return [...baseResources, 'ERP', 'BI Tools', 'Equipe Analytics'];
    }
    
    if (organization.size === 'medium') {
      return [...baseResources, 'Google Analytics', 'Planilha Avançada'];
    }
    
    return baseResources;
  }
}
```

### 🎯 Infrastructure Layer

#### 1. Repositories

##### SupabaseMetricsRepository
```typescript
// src/infrastructure/repositories/SupabaseMetricsRepository.ts
export class SupabaseMetricsRepository implements IMetricsRepository {
  constructor(private readonly supabase: SupabaseClient) {}
  
  async findByDomainAndPeriod(
    domain: DomainType,
    period: string
  ): Promise<Result<UnifiedMetricsEntity>> {
    try {
      const { data, error } = await this.supabase
        .from('unified_metrics')
        .select('*')
        .eq('domain', domain)
        .eq('period', period)
        .single();
      
      if (error) {
        return Result.fail(`Erro ao buscar métricas: ${error.message}`);
      }
      
      if (!data) {
        return Result.fail('Métricas não encontradas');
      }
      
      // Converter para entidade do domínio
      const entity = this.mapToEntity(data);
      return Result.ok(entity);
      
    } catch (error) {
      console.error('Error in SupabaseMetricsRepository:', error);
      return Result.fail('Erro interno ao buscar métricas');
    }
  }
  
  async save(entity: UnifiedMetricsEntity): Promise<Result<void>> {
    try {
      const data = this.mapToData(entity);
      
      const { error } = await this.supabase
        .from('unified_metrics')
        .upsert(data)
        .eq('id', entity.id);
      
      if (error) {
        return Result.fail(`Erro ao salvar métricas: ${error.message}`);
      }
      
      return Result.ok();
      
    } catch (error) {
      console.error('Error in SupabaseMetricsRepository:', error);
      return Result.fail('Erro interno ao salvar métricas');
    }
  }
  
  async findByOrganization(
    organizationId: string,
    limit?: number
  ): Promise<Result<UnifiedMetricsEntity[]>> {
    try {
      let query = this.supabase
        .from('unified_metrics')
        .select('*')
        .eq('organization_id', organizationId)
        .order('created_at', { ascending: false });
      
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      
      if (error) {
        return Result.fail(`Erro ao buscar métricas: ${error.message}`);
      }
      
      const entities = data.map(item => this.mapToEntity(item));
      return Result.ok(entities);
      
    } catch (error) {
      console.error('Error in SupabaseMetricsRepository:', error);
      return Result.fail('Erro interno ao buscar métricas');
    }
  }
  
  private mapToEntity(data: any): UnifiedMetricsEntity {
    const kpis: Record<string, KPIValue> = {};
    
    // Converter KPIs do formato JSON para objetos
    Object.entries(data.kpis || {}).forEach(([code, kpiData]: [string, any]) => {
      kpis[code] = KPIValue.create({
        value: kpiData.value,
        unit: kpiData.unit,
        threshold: kpiData.threshold,
        trend: kpiData.trend,
        previousValue: kpiData.previousValue,
        lastUpdated: new Date(kpiData.lastUpdated)
      }).getValue();
    });
    
    return UnifiedMetricsEntity.create({
      id: data.id,
      domain: data.domain,
      period: data.period,
      kpis,
      metadata: data.metadata
    }).getValue();
  }
  
  private mapToData(entity: UnifiedMetricsEntity): any {
    const kpis: Record<string, any> = {};
    
    Object.entries(entity.kpis).forEach(([code, kpi]) => {
      kpis[code] = {
        value: kpi.value,
        unit: kpi.unit,
        threshold: {
          critical: kpi.threshold.critical,
          warning: kpi.threshold.warning,
          good: kpi.threshold.good
        },
        trend: kpi.trend,
        previousValue: kpi.previousValue,
        lastUpdated: kpi.lastUpdated.toISOString()
      };
    });
    
    return {
      id: entity.id,
      domain: entity.domain,
      period: entity.period,
      kpis,
      metadata: entity.metadata,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }
}
```

#### 2. External Services

##### SupabaseAuthService
```typescript
// src/infrastructure/external/SupabaseAuthService.ts
export class SupabaseAuthService implements IAuthService {
  constructor(private readonly supabase: SupabaseClient) {}
  
  async signIn(email: string, password: string): Promise<Result<AuthResponse>> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        return Result.fail(`Erro de autenticação: ${error.message}`);
      }
      
      if (!data.user || !data.session) {
        return Result.fail('Falha na autenticação');
      }
      
      const response: AuthResponse = {
        user: {
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata?.name || '',
          role: data.user.user_metadata?.role || 'user'
        },
        session: {
          accessToken: data.session.access_token,
          refreshToken: data.session.refresh_token,
          expiresAt: data.session.expires_at!
        }
      };
      
      return Result.ok(response);
      
    } catch (error) {
      console.error('Error in SupabaseAuthService:', error);
      return Result.fail('Erro interno na autenticação');
    }
  }
  
  async signOut(): Promise<Result<void>> {
    try {
      const { error } = await this.supabase.auth.signOut();
      
      if (error) {
        return Result.fail(`Erro ao fazer logout: ${error.message}`);
      }
      
      return Result.ok();
      
    } catch (error) {
      console.error('Error in SupabaseAuthService:', error);
      return Result.fail('Erro interno ao fazer logout');
    }
  }
  
  async getCurrentUser(): Promise<Result<User | null>> {
    try {
      const { data: { user }, error } = await this.supabase.auth.getUser();
      
      if (error) {
        return Result.fail(`Erro ao buscar usuário: ${error.message}`);
      }
      
      if (!user) {
        return Result.ok(null);
      }
      
      const userEntity: User = {
        id: user.id,
        email: user.email!,
        name: user.user_metadata?.name || '',
        role: user.user_metadata?.role || 'user',
        permissions: user.user_metadata?.permissions || [],
        organizationId: user.user_metadata?.organization_id || ''
      };
      
      return Result.ok(userEntity);
      
    } catch (error) {
      console.error('Error in SupabaseAuthService:', error);
      return Result.fail('Erro interno ao buscar usuário');
    }
  }
  
  async updateProfile(updates: UpdateProfileRequest): Promise<Result<User>> {
    try {
      const { data, error } = await this.supabase.auth.updateUser({
        data: {
          user_metadata: updates
        }
      });
      
      if (error) {
        return Result.fail(`Erro ao atualizar perfil: ${error.message}`);
      }
      
      if (!data.user) {
        return Result.fail('Falha ao atualizar perfil');
      }
      
      const user: User = {
        id: data.user.id,
        email: data.user.email!,
        name: data.user.user_metadata?.name || '',
        role: data.user.user_metadata?.role || 'user',
        permissions: data.user.user_metadata?.permissions || [],
        organizationId: data.user.user_metadata?.organization_id || ''
      };
      
      return Result.ok(user);
      
    } catch (error) {
      console.error('Error in SupabaseAuthService:', error);
      return Result.fail('Erro interno ao atualizar perfil');
    }
  }
}
```

## Patterns e Best Practices

### 🎯 Design Patterns Implementados

#### 1. Repository Pattern
```typescript
// Interface genérica de repositório
interface IRepository<T, ID> {
  findById(id: ID): Promise<Result<T>>;
  save(entity: T): Promise<Result<void>>;
  delete(id: ID): Promise<Result<void>>;
  findAll(): Promise<Result<T[]>>;
}

// Implementação específica
class SupabaseRepository<T, ID> implements IRepository<T, ID> {
  constructor(
    private readonly supabase: SupabaseClient,
    private readonly tableName: string,
    private readonly mapper: IMapper<T>
  ) {}
  
  async findById(id: ID): Promise<Result<T>> {
    // Implementação genérica
  }
  
  async save(entity: T): Promise<Result<void>> {
    // Implementação genérica
  }
}
```

#### 2. Factory Pattern
```typescript
// Factory para criação de entidades
export class UnifiedMetricsFactory {
  static create(props: CreateUnifiedMetricsProps): Result<UnifiedMetricsEntity> {
    return UnifiedMetricsEntity.create(props);
  }
  
  static createFromData(data: any): Result<UnifiedMetricsEntity> {
    return UnifiedMetricsEntity.create({
      id: data.id,
      domain: data.domain,
      period: data.period,
      kpis: data.kpis,
      metadata: data.metadata
    });
  }
}
```

#### 3. Strategy Pattern
```typescript
// Strategy para cálculo de métricas
interface MetricCalculationStrategy {
  calculate(data: any): Result<number>;
}

class RunwayCalculationStrategy implements MetricCalculationStrategy {
  calculate(data: { cashBalance: number; burnRate: number }): Result<number> {
    return new MetricsCalculationService().calculateRunway(
      data.cashBalance,
      data.burnRate
    );
  }
}

class LTVCalculationStrategy implements MetricCalculationStrategy {
  calculate(data: { revenue: number; customers: number; period: number }): Result<number> {
    // Implementação específica
  }
}
```

#### 4. Observer Pattern
```typescript
// Observer para eventos de domínio
interface DomainEvent {
  aggregateId: string;
  eventType: string;
  occurredOn: Date;
  eventData: any;
}

interface EventHandler {
  handle(event: DomainEvent): Promise<void>;
}

class MetricsUpdatedHandler implements EventHandler {
  async handle(event: DomainEvent): Promise<void> {
    // Lógica para processar evento de métricas atualizadas
  }
}
```

### 🔧 Cross-Cutting Concerns

#### 1. Logging
```typescript
// src/infrastructure/cross-cutting/Logger.ts
export class Logger {
  private static instance: Logger;
  
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
  
  info(message: string, context?: any): void {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, context);
  }
  
  warn(message: string, context?: any): void {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, context);
  }
  
  error(message: string, error?: Error, context?: any): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, {
      error: error?.message,
      stack: error?.stack,
      context
    });
  }
  
  debug(message: string, context?: any): void {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, context);
    }
  }
}
```

#### 2. Caching
```typescript
// src/infrastructure/cross-cutting/CacheService.ts
export class CacheService {
  private cache = new Map<string, CacheEntry>();
  
  async get<T>(key: string): Promise<T | null> {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }
    
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.value as T;
  }
  
  async set<T>(key: string, value: T, ttl: number = 300000): Promise<void> {
    const entry: CacheEntry = {
      value,
      expiresAt: Date.now() + ttl
    };
    
    this.cache.set(key, entry);
  }
  
  async invalidate(key: string): Promise<void> {
    this.cache.delete(key);
  }
  
  async clear(): Promise<void> {
    this.cache.clear();
  }
}

interface CacheEntry {
  value: any;
  expiresAt: number;
}
```

#### 3. Validation
```typescript
// src/infrastructure/cross-cutting/ValidationPipe.ts
export class ValidationPipe {
  static async validate<T>(
    data: any,
    schema: ValidationSchema<T>
  ): Promise<Result<T>> {
    try {
      const validatedData = await schema.parseAsync(data);
      return Result.ok(validatedData);
    } catch (error) {
      return Result.fail(`Validation error: ${error.message}`);
    }
  }
}

interface ValidationSchema<T> {
  parseAsync(data: any): Promise<T>;
}
```

## Performance e Escalabilidade

### ⚡ Otimizações de Performance

#### 1. Database Optimization
```sql
-- Índices otimizados para queries frequentes
CREATE INDEX idx_unified_metrics_domain_period 
ON unified_metrics(domain, period);

CREATE INDEX idx_unified_metrics_organization_created 
ON unified_metrics(organization_id, created_at DESC);

CREATE INDEX idx_challenges_code 
ON challenges(code);

-- Particionamento para grandes volumes de dados
CREATE TABLE unified_metrics_partitioned (
  LIKE unified_metrics INCLUDING ALL
) PARTITION BY RANGE (created_at);

CREATE TABLE unified_metrics_2024_q1 PARTITION OF unified_metrics_partitioned
FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');
```

#### 2. Cache Strategy
```typescript
// Cache multi-nível
class CacheManager {
  private l1Cache = new Map(); // Memory cache
  private l2Cache: RedisClient; // Redis cache
  private l3Cache: CDNClient; // CDN cache
  
  async get<T>(key: string): Promise<T | null> {
    // L1 - Memory
    let value = this.l1Cache.get(key);
    if (value) return value;
    
    // L2 - Redis
    value = await this.l2Cache.get(key);
    if (value) {
      this.l1Cache.set(key, value);
      return value;
    }
    
    // L3 - CDN
    value = await this.l3Cache.get(key);
    if (value) {
      this.l2Cache.set(key, value, 300); // 5 minutos
      this.l1Cache.set(key, value);
      return value;
    }
    
    return null;
  }
}
```

#### 3. Lazy Loading
```typescript
// Lazy loading para entidades pesadas
class LazyUnifiedMetrics {
  constructor(
    private readonly id: string,
    private readonly repository: IMetricsRepository
  ) {}
  
  async load(): Promise<UnifiedMetricsEntity> {
    const result = await this.repository.findById(this.id);
    if (result.isFailure) {
      throw new Error(result.error);
    }
    return result.getValue();
  }
}
```

### 📈 Estratégias de Escalabilidade

#### 1. Horizontal Scaling
```typescript
// Load balancing para serviços
class LoadBalancer {
  private instances: ServiceInstance[] = [];
  private currentIndex = 0;
  
  addInstance(instance: ServiceInstance): void {
    this.instances.push(instance);
  }
  
  getNextInstance(): ServiceInstance {
    if (this.instances.length === 0) {
      throw new Error('No instances available');
    }
    
    const instance = this.instances[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.instances.length;
    
    return instance;
  }
}
```

#### 2. Database Sharding
```typescript
// Sharding strategy por organização
class ShardRouter {
  private shards: DatabaseShard[] = [];
  
  getShard(organizationId: string): DatabaseShard {
    const hash = this.hash(organizationId);
    const shardIndex = hash % this.shards.length;
    return this.shards[shardIndex];
  }
  
  private hash(value: string): number {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      const char = value.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }
}
```

## Segurança

### 🔒 Implementações de Segurança

#### 1. Authentication & Authorization
```typescript
// JWT Token Service
export class JWTTokenService {
  private readonly secretKey = process.env.JWT_SECRET!;
  private readonly expiresIn = '24h';
  
  generateToken(payload: any): string {
    return jwt.sign(payload, this.secretKey, {
      expiresIn: this.expiresIn,
      issuer: 'superrelatorios',
      audience: 'superrelatorios-api'
    });
  }
  
  validateToken(token: string): Result<any> {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return Result.ok(decoded);
    } catch (error) {
      return Result.fail('Token inválido');
    }
  }
}

// RBAC (Role-Based Access Control)
export class AuthorizationService {
  private static permissions = {
    admin: ['read', 'write', 'delete', 'manage_users'],
    manager: ['read', 'write', 'delete'],
    analyst: ['read', 'write'],
    viewer: ['read']
  };
  
  static hasPermission(userRole: UserRole, permission: string): boolean {
    const userPermissions = this.permissions[userRole] || [];
    return userPermissions.includes(permission);
  }
  
  static canAccessResource(
    user: User,
    resource: string,
    action: string
  ): boolean {
    const permission = `${resource}:${action}`;
    return this.hasPermission(user.role, permission);
  }
}
```

#### 2. Data Encryption
```typescript
// Encryption Service
export class EncryptionService {
  private readonly algorithm = 'aes-256-gcm';
  private readonly key = crypto.scryptSync(
    process.env.ENCRYPTION_KEY!,
    'salt',
    32
  );
  
  encrypt(text: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipher(this.algorithm, this.key);
    cipher.setAAD(Buffer.from('superrelatorios'));
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return iv.toString('hex') + ':' + authTag.toString('hex') + ':' + encrypted;
  }
  
  decrypt(encryptedText: string): string {
    const parts = encryptedText.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const authTag = Buffer.from(parts[1], 'hex');
    const encrypted = parts[2];
    
    const decipher = crypto.createDecipher(this.algorithm, this.key);
    decipher.setAAD(Buffer.from('superrelatorios'));
    decipher.setAuthTag(authTag);
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}
```

## Testing Strategy

### 🧪 Arquitetura de Testes

#### 1. Unit Tests
```typescript
// Teste de entidade do domínio
describe('UnifiedMetricsEntity', () => {
  it('should create entity with valid data', () => {
    const props = {
      id: 'test-id',
      domain: DomainType.FINANCIAL,
      period: '2024-03',
      kpis: {
        RUNWAY: KPIValue.create({
          value: 6.5,
          unit: 'meses',
          threshold: { critical: 1, warning: 3, good: 6 },
          trend: 'stable'
        }).getValue()
      }
    };
    
    const result = UnifiedMetricsEntity.create(props);
    
    expect(result.isSuccess).toBe(true);
    expect(result.getValue().id).toBe('test-id');
    expect(result.getValue().domain).toBe(DomainType.FINANCIAL);
  });
  
  it('should fail with invalid KPI', () => {
    const props = {
      id: 'test-id',
      domain: DomainType.FINANCIAL,
      period: '2024-03',
      kpis: {
        RUNWAY: KPIValue.create({
          value: -1, // Inválido
          unit: 'meses',
          threshold: { critical: 1, warning: 3, good: 6 },
          trend: 'stable'
        }).getValue()
      }
    };
    
    const result = UnifiedMetricsEntity.create(props);
    
    expect(result.isFailure).toBe(true);
  });
});
```

#### 2. Integration Tests
```typescript
// Teste de integração com Supabase
describe('SupabaseMetricsRepository', () => {
  let repository: SupabaseMetricsRepository;
  let supabase: SupabaseClient;
  
  beforeEach(() => {
    supabase = createTestSupabaseClient();
    repository = new SupabaseMetricsRepository(supabase);
  });
  
  it('should save and retrieve metrics', async () => {
    const entity = UnifiedMetricsEntity.create({
      id: 'test-id',
      domain: DomainType.FINANCIAL,
      period: '2024-03',
      kpis: {
        RUNWAY: KPIValue.create({
          value: 6.5,
          unit: 'meses',
          threshold: { critical: 1, warning: 3, good: 6 },
          trend: 'stable'
        }).getValue()
      }
    }).getValue();
    
    // Save
    const saveResult = await repository.save(entity);
    expect(saveResult.isSuccess).toBe(true);
    
    // Retrieve
    const retrieveResult = await repository.findByDomainAndPeriod(
      DomainType.FINANCIAL,
      '2024-03'
    );
    
    expect(retrieveResult.isSuccess).toBe(true);
    const retrieved = retrieveResult.getValue();
    expect(retrieved.id).toBe(entity.id);
    expect(retrieved.kpis.RUNWAY.value).toBe(6.5);
  });
});
```

#### 3. E2E Tests
```typescript
// Teste end-to-end com Playwright
test('user can view unified metrics dashboard', async ({ page }) => {
  // Login
  await page.goto('/login');
  await page.fill('[data-testid=email]', 'test@example.com');
  await page.fill('[data-testid=password]', 'password');
  await page.click('[data-testid=login-button]');
  
  // Navigate to dashboard
  await page.click('[data-testid=dashboard-link]');
  
  // Verify metrics are displayed
  await expect(page.locator('[data-testid=runway-metric]')).toBeVisible();
  await expect(page.locator('[data-testid=ltv-cac-ratio]')).toBeVisible();
  
  // Verify challenge detection
  await page.click('[data-testid=challenges-tab]');
  await expect(page.locator('[data-testid=challenges-list]')).toBeVisible();
});
```

## Monitoramento e Observabilidade

### 📊 Implementação de Monitoramento

#### 1. Health Checks
```typescript
// Health Check Service
export class HealthCheckService {
  private checks: HealthCheck[] = [];
  
  addCheck(check: HealthCheck): void {
    this.checks.push(check);
  }
  
  async getHealth(): Promise<HealthStatus> {
    const results = await Promise.allSettled(
      this.checks.map(check => check.execute())
    );
    
    const checks = results.map((result, index) => ({
      name: this.checks[index].name,
      status: result.status === 'fulfilled' ? 'healthy' : 'unhealthy',
      message: result.status === 'fulfilled' ? result.value.message : result.reason.message,
      duration: result.status === 'fulfilled' ? result.value.duration : 0
    }));
    
    const overallStatus = checks.every(check => check.status === 'healthy')
      ? 'healthy'
      : 'unhealthy';
    
    return {
      status: overallStatus,
      timestamp: new Date(),
      checks
    };
  }
}

interface HealthCheck {
  name: string;
  execute(): Promise<HealthCheckResult>;
}

interface HealthCheckResult {
  message: string;
  duration: number;
}
```

#### 2. Metrics Collection
```typescript
// Metrics Service
export class MetricsService {
  private readonly prometheus = require('prom-client');
  private readonly register = new this.prometheus.Registry();
  
  constructor() {
    // Definir métricas
    this.defineMetrics();
  }
  
  private defineMetrics(): void {
    this.prometheus.collectDefaultMetrics({
      register: this.register,
      prefix: 'superrelatorios_'
    });
    
    new this.prometheus.Counter({
      name: 'api_requests_total',
      help: 'Total number of API requests',
      labelNames: ['method', 'route', 'status'],
      registers: [this.register]
    });
    
    new this.prometheus.Histogram({
      name: 'api_request_duration_seconds',
      help: 'Duration of API requests',
      labelNames: ['method', 'route'],
      buckets: [0.1, 0.5, 1, 2, 5],
      registers: [this.register]
    });
  }
  
  recordRequest(method: string, route: string, status: number, duration: number): void {
    const counter = this.register.getSingleMetric('api_requests_total') as any;
    counter.inc({ method, route, status: status.toString() });
    
    const histogram = this.register.getSingleMetric('api_request_duration_seconds') as any;
    histogram.observe({ method, route }, duration / 1000);
  }
  
  getMetrics(): string {
    return this.register.metrics();
  }
}
```

---

## Considerações Importantes

### 🔄 Evolução da Arquitetura

#### Roadmap de Evolução
1. **Microservices** - Desacoplar serviços maiores
2. **Event Sourcing** - Event-driven architecture
3. **CQRS** - Command Query Responsibility Segregation
4. **GraphQL** - API mais flexível
5. **Serverless** - Funções serverless para picos de carga

#### Technical Debt Management
- **Code reviews** rigorosos para manter qualidade
- **Refactoring** contínuo para pagar dívida técnica
- **Architecture decision records** para documentar decisões
- **Technical debt radar** para monitorar dívida

### 🌍 Considerações de Deploy

#### CI/CD Pipeline
```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test:coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
  
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Run E2E tests
        run: npm run test:e2e
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: echo "Deploy to production"
```

---

## Recursos Relacionados

### 📚 Documentação Complementar
- **[Visão e Arquitetura](../01-strategy/01-vision-and-architecture.md)** - Fundação estratégica
- **[Auditoria de Arquitetura](./02-architecture-audit.md)** - Análise crítica
- **[Auditoria de Projeto](./03-project-audit.md)** - Avaliação geral
- **[Relatório de Refactoring](./04-refactoring-report.md)** - Execução de melhorias
- **[Guidelines de Contribuição](./05-contributing-guidelines.md)** - Processos e padrões

### 🔗 Ferramentas e Recursos
- **Architecture Decision Records** - Documentação de decisões
- **System Design Document** - Design detalhado
- **API Documentation** - Referência completa
- **Performance Dashboard** - Monitoramento em tempo real

---

*Última atualização: 22/03/2026*  
*Versão: 2.0*  
*Status: Approved*  
*Maintainer: Architecture Team SuperRelatórios*
