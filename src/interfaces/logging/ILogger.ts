/**
 * Logger interface
 * Defines contract for structured logging
 */
export interface ILogger {
  /**
   * Log debug message
   */
  debug(message: string, meta?: LogMeta): void;

  /**
   * Log info message
   */
  info(message: string, meta?: LogMeta): void;

  /**
   * Log warning message
   */
  warn(message: string, meta?: LogMeta): void;

  /**
   * Log error message
   */
  error(message: string, error?: Error, meta?: LogMeta): void;

  /**
   * Log performance metrics
   */
  performance(operation: string, duration: number, meta?: LogMeta): void;

  /**
   * Create child logger with context
   */
  child(context: LogContext): ILogger;
}

export interface LogMeta {
  [key: string]: any;
}

export interface LogContext {
  userId?: string;
  requestId?: string;
  sessionId?: string;
  module?: string;
  function?: string;
  [key: string]: any;
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  meta?: LogMeta;
  context?: LogContext;
  error?: {
    name: string;
    message: string;
    stack?: string;
  };
  performance?: {
    operation: string;
    duration: number;
  };
}

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'performance';

export interface LoggerConfig {
  level: LogLevel;
  format: 'json' | 'text';
  enableConsole: boolean;
  enableFile: boolean;
  filePath?: string;
  maxFileSize?: number;
  maxFiles?: number;
}
