import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  variant?: 'default' | 'decision' | 'metric' | 'indicator';
  priority?: 'critical' | 'high' | 'medium' | 'low';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  testId?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  priority,
  className,
  children,
  onClick,
  testId,
  ...props
}) => {
  const baseClasses = styles.card;
  const variantClasses = styles[`card-${variant}`];
  const priorityClasses = priority ? styles[`card-${priority}`] : '';
  const interactiveClasses = onClick ? styles['card-interactive'] : '';
  
  const classes = [
    baseClasses,
    variantClasses,
    priorityClasses,
    interactiveClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
      data-testid={testId}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
