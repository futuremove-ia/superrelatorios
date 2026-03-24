import { HttpRequest, HttpResponse } from '../controllers';

/**
 * Authentication middleware interface
 * Defines contract for request authentication
 */
export interface IAuthMiddleware {
  /**
   * Authenticate request using JWT token
   */
  authenticate(req: HttpRequest, res: HttpResponse, next: () => void): Promise<void>;

  /**
   * Validate API key
   */
  validateApiKey(req: HttpRequest, res: HttpResponse, next: () => void): Promise<void>;

  /**
   * Check user permissions
   */
  checkPermissions(permissions: string[]): (req: HttpRequest, res: HttpResponse, next: () => void) => Promise<void>;

  /**
   * Rate limiting
   */
  rateLimit(options: {
    windowMs: number;
    maxRequests: number;
  }): (req: HttpRequest, res: HttpResponse, next: () => void) => Promise<void>;
}
