import { ILogger, LogLevel, LogEntry, LogMeta, LogContext, LoggerConfig } from './ILogger';

/**
 * Structured Logger Implementation
 * Provides enterprise-level logging with context and performance tracking
 */
export class Logger implements ILogger {
  private config: LoggerConfig;
  private context?: LogContext;
  private logs: LogEntry[] = [];

  constructor(config: Partial<LoggerConfig> = {}, context?: LogContext) {
    this.config = {
      level: 'info',
      format: 'json',
      enableConsole: true,
      enableFile: false,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      maxFiles: 5,
      ...config
    };
    this.context = context;
  }

  debug(message: string, meta?: LogMeta): void {
    this.log('debug', message, meta);
  }

  info(message: string, meta?: LogMeta): void {
    this.log('info', message, meta);
  }

  warn(message: string, meta?: LogMeta): void {
    this.log('warn', message, meta);
  }

  error(message: string, error?: Error, meta?: LogMeta): void {
    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: 'error',
      message,
      meta: { ...meta },
      context: this.context
    };

    if (error) {
      logEntry.error = {
        name: error.name,
        message: error.message,
        stack: error.stack
      };
    }

    this.writeLog(logEntry);
  }

  performance(operation: string, duration: number, meta?: LogMeta): void {
    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: 'performance',
      message: `Performance: ${operation}`,
      meta: { ...meta },
      context: this.context,
      performance: {
        operation,
        duration
      }
    };

    this.writeLog(logEntry);
  }

  child(context: LogContext): ILogger {
    return new Logger(this.config, { ...this.context, ...context });
  }

  private log(level: LogLevel, message: string, meta?: LogMeta): void {
    if (!this.shouldLog(level)) {
      return;
    }

    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      meta: { ...meta },
      context: this.context
    };

    this.writeLog(logEntry);
  }

  private writeLog(logEntry: LogEntry): void {
    // Store in memory (in production, write to file or external service)
    this.logs.push(logEntry);
    
    // Keep only last 10000 logs in memory
    if (this.logs.length > 10000) {
      this.logs = this.logs.slice(-10000);
    }

    // Console output
    if (this.config.enableConsole) {
      this.writeToConsole(logEntry);
    }

    // File output (simulated)
    if (this.config.enableFile) {
      this.writeToFile(logEntry);
    }
  }

  private writeToConsole(logEntry: LogEntry): void {
    const formattedLog = this.formatLog(logEntry);
    
    switch (logEntry.level) {
      case 'debug':
        console.debug(formattedLog);
        break;
      case 'info':
        console.info(formattedLog);
        break;
      case 'warn':
        console.warn(formattedLog);
        break;
      case 'error':
        console.error(formattedLog);
        break;
      case 'performance':
        console.info(formattedLog);
        break;
    }
  }

  private writeToFile(logEntry: LogEntry): void {
    // In production, implement actual file writing
    // For now, just log that we would write to file
    if (this.config.filePath) {
      console.log(`[FILE] Would write to ${this.config.filePath}:`, logEntry);
    }
  }

  private formatLog(logEntry: LogEntry): string {
    if (this.config.format === 'json') {
      return JSON.stringify(logEntry);
    }

    // Text format
    const parts = [
      `[${logEntry.timestamp}]`,
      `[${logEntry.level.toUpperCase()}]`
    ];

    if (logEntry.context?.module) {
      parts.push(`[${logEntry.context.module}]`);
    }

    if (logEntry.context?.userId) {
      parts.push(`[User:${logEntry.context.userId}]`);
    }

    parts.push(logEntry.message);

    if (logEntry.performance) {
      parts.push(`(${logEntry.performance.duration}ms)`);
    }

    if (logEntry.error) {
      parts.push(`Error: ${logEntry.error.message}`);
    }

    if (logEntry.meta && Object.keys(logEntry.meta).length > 0) {
      parts.push(`Meta: ${JSON.stringify(logEntry.meta)}`);
    }

    return parts.join(' ');
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error', 'performance'];
    const currentLevelIndex = levels.indexOf(this.config.level);
    const messageLevelIndex = levels.indexOf(level);
    
    return messageLevelIndex >= currentLevelIndex;
  }

  /**
   * Get recent logs
   */
  getRecentLogs(count: number = 100): LogEntry[] {
    return this.logs.slice(-count);
  }

  /**
   * Get logs by level
   */
  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  /**
   * Get logs by time range
   */
  getLogsByTimeRange(startDate: Date, endDate: Date): LogEntry[] {
    return this.logs.filter(log => {
      const logTime = new Date(log.timestamp);
      return logTime >= startDate && logTime <= endDate;
    });
  }

  /**
   * Get log statistics
   */
  getStats(): {
    total: number;
    byLevel: Record<LogLevel, number>;
    recentErrorCount: number;
  } {
    const byLevel = {
      debug: 0,
      info: 0,
      warn: 0,
      error: 0,
      performance: 0
    };

    for (const log of this.logs) {
      byLevel[log.level]++;
    }

    const recentErrors = this.logs.filter(log => 
      log.level === 'error' && 
      new Date(log.timestamp) > new Date(Date.now() - 60 * 60 * 1000) // Last hour
    ).length;

    return {
      total: this.logs.length,
      byLevel,
      recentErrorCount: recentErrors
    };
  }

  /**
   * Clear all logs
   */
  clear(): void {
    this.logs = [];
  }
}
