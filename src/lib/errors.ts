/**
 * Custom error classes for the application.
 * This helps in identifying the source and type of error
 * for better logging and user feedback.
 */

export enum ErrorCode {
  AUTH_ERROR = 'AUTH_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  API_ERROR = 'API_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly originalError?: unknown;

  constructor(message: string, code: ErrorCode = ErrorCode.UNKNOWN_ERROR, originalError?: unknown) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.originalError = originalError;
    
    // Ensure the prototype is correctly set
    Object.setPrototypeOf(this, AppError.prototype);
  }

  public static fromError(error: unknown): AppError {
    if (error instanceof AppError) return error;
    
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    return new AppError(message, ErrorCode.UNKNOWN_ERROR, error);
  }
}

export class ApiError extends AppError {
  public readonly status?: number;

  constructor(message: string, status?: number, originalError?: unknown) {
    super(message, ErrorCode.API_ERROR, originalError);
    this.name = 'ApiError';
    this.status = status;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export class AuthError extends AppError {
  constructor(message: string, originalError?: unknown) {
    super(message, ErrorCode.AUTH_ERROR, originalError);
    this.name = 'AuthError';
    Object.setPrototypeOf(this, AuthError.prototype);
  }
}
