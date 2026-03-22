import React from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import styles from './DecisionPanel.module.css';

export interface PrioritySituation {
  id: string;
  title: string;
  description: string;
  urgency: 'critical' | 'urgent' | 'important';
  impact: string;
  timeframe: string;
  technicalTerm: string;
  actionableTranslation: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  expectedImpact: string;
  complexity: 'low' | 'medium' | 'high';
  action: string;
  onClick: () => void;
}

export interface SupportingMetric {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  trend: 'up' | 'down' | 'stable';
  trendValue?: string;
  format: 'currency' | 'percentage' | 'number';
  technicalTerm: string;
  actionableTranslation: string;
}

export interface DecisionPanelProps {
  situation: PrioritySituation;
  recommendations: Recommendation[];
  supportingData: SupportingMetric[];
  onExecuteAction: (actionId: string) => void;
  className?: string;
}

export const DecisionPanel: React.FC<DecisionPanelProps> = ({
  situation,
  recommendations,
  supportingData,
  onExecuteAction,
  className
}) => {
  return (
    <main 
      className={`${styles.decisionPanel} ${className || ''}`}
      role="main" 
      aria-label="Painel de Decisão"
    >
      {/* Priority Situation Section */}
      <section 
        className={styles.situationSection}
        aria-labelledby="situation-heading"
      >
        <h2 id="situation-heading" className={styles.sectionTitle}>
          Situação Prioritária
        </h2>
        <Card variant="decision" priority={situation.urgency}>
          <div className={styles.situationHeader}>
            <h3 className={styles.situationTitle}>{situation.title}</h3>
            <div className={styles.situationMeta}>
              <span className={`${styles.urgencyBadge} ${styles[situation.urgency]}`}>
                {situation.urgency === 'critical' ? 'Crítico' : 
                 situation.urgency === 'urgent' ? 'Urgente' : 'Importante'}
              </span>
              <span className={styles.timeframe}>{situation.timeframe}</span>
            </div>
          </div>
          
          <p className={styles.situationDescription}>{situation.description}</p>
          
          <div className={styles.impactSection}>
            <strong>Impacto:</strong> {situation.impact}
          </div>
          
          <div className={styles.bilingualSection}>
            <div className={styles.technicalTerm}>
              <strong>Termo Técnico:</strong> {situation.technicalTerm}
            </div>
            <div className={styles.actionableTranslation}>
              <strong>Tradução Acionável:</strong> {situation.actionableTranslation}
            </div>
          </div>
        </Card>
      </section>

      {/* Recommendations Section */}
      <section 
        className={styles.recommendationsSection}
        aria-labelledby="recommendations-heading"
      >
        <h2 id="recommendations-heading" className={styles.sectionTitle}>
          Ações Recomendadas
        </h2>
        <div className={styles.recommendationsList}>
          {recommendations.map((recommendation) => (
            <Card 
              key={recommendation.id} 
              variant="decision" 
              className={styles.recommendationCard}
            >
              <div className={styles.recommendationHeader}>
                <h3 className={styles.recommendationTitle}>{recommendation.title}</h3>
                <span className={`${styles.complexityBadge} ${styles[recommendation.complexity]}`}>
                  {recommendation.complexity === 'low' ? 'Baixa' :
                   recommendation.complexity === 'medium' ? 'Média' : 'Alta'} complexidade
                </span>
              </div>
              
              <p className={styles.recommendationDescription}>
                {recommendation.description}
              </p>
              
              <div className={styles.expectedImpact}>
                <strong>Impacto esperado:</strong> {recommendation.expectedImpact}
              </div>
              
              <div className={styles.recommendationActions}>
                <Button 
                  variant="primary"
                  action={recommendation.action}
                  onClick={() => {
                    recommendation.onClick();
                    onExecuteAction(recommendation.id);
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Supporting Data Section */}
      <section 
        className={styles.dataSection}
        aria-labelledby="data-heading"
      >
        <h2 id="data-heading" className={styles.sectionTitle}>
          Dados de Suporte
        </h2>
        <div className={styles.metricsGrid}>
          {supportingData.map((metric) => (
            <Card key={metric.id} variant="metric" className={styles.metricCard}>
              <div className={styles.metricHeader}>
                <div className={styles.metricLabel}>
                  <div className={styles.technicalTerm}>{metric.technicalTerm}</div>
                  <div className={styles.actionableTranslation}>{metric.actionableTranslation}</div>
                </div>
              </div>
              
              <div className={styles.metricValue}>
                <span className={styles.value}>{metric.value}</span>
                {metric.unit && <span className={styles.unit}>{metric.unit}</span>}
              </div>
              
              {metric.trend && (
                <div className={`${styles.metricTrend} ${styles[metric.trend]}`}>
                  <span className={styles.trendIcon}>
                    {metric.trend === 'up' ? '↑' : 
                     metric.trend === 'down' ? '↓' : '→'}
                  </span>
                  {metric.trendValue && (
                    <span className={styles.trendValue}>{metric.trendValue}</span>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DecisionPanel;
