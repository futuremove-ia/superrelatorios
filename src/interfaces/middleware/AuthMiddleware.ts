import { IAuthMiddleware } from './IAuthMiddleware';
import { HttpRequest, HttpResponse } from '../controllers';

// Simple JWT interface for now (without external dependency)
interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  permissions: string[];
  iat: number;
  exp: number;
}

/**
 * Authentication Middleware Implementation
 * Provides security features for API requests
 */
export class AuthMiddleware implements IAuthMiddleware {
  private readonly jwtSecret: string;
  private readonly rateLimitStore: Map<string, { count: number; resetTime: number }> = new Map();

  constructor(jwtSecret: string) {
    this.jwtSecret = jwtSecret;
  }

  private decodeToken(token: string): JWTPayload {
    // Simple base64 decode (in production, use proper JWT library)
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }
    
    const payload = JSON.parse(atob(parts[1]));
    return payload;
  }

  async authenticate(req: HttpRequest, res: HttpResponse, next: () => void): Promise<void> {
    try {
      const token = this.extractToken(req);
      
      if (!token) {
        res.status(401).json({ error: 'No token provided' });
        return;
      }

      // Simple token validation (in production, use proper JWT library)
      const decoded = this.decodeToken(token);
      (req as any).user = decoded;
      
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }

  async validateApiKey(req: HttpRequest, res: HttpResponse, next: () => void): Promise<void> {
    try {
      const apiKey = req.headers?.['x-api-key'] as string;
      
      if (!apiKey) {
        res.status(401).json({ error: 'No API key provided' });
        return;
      }

      // In a real implementation, validate against database
      if (apiKey !== process.env.API_KEY) {
        res.status(401).json({ error: 'Invalid API key' });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({ error: 'Authentication error' });
    }
  }

  checkPermissions(permissions: string[]): (req: HttpRequest, res: HttpResponse, next: () => void) => Promise<void> {
    return async (req: HttpRequest, res: HttpResponse, next: () => void): Promise<void> => {
      try {
        const user = (req as any).user as JWTPayload;
        
        if (!user) {
          res.status(401).json({ error: 'User not authenticated' });
          return;
        }

        const hasPermission = permissions.every(permission => 
          user.permissions.includes(permission)
        );

        if (!hasPermission) {
          res.status(403).json({ error: 'Insufficient permissions' });
          return;
        }

        next();
      } catch (error) {
        res.status(500).json({ error: 'Permission check error' });
      }
    };
  }

  rateLimit(options: { windowMs: number; maxRequests: number }): (req: HttpRequest, res: HttpResponse, next: () => void) => Promise<void> {
    return async (req: HttpRequest, res: HttpResponse, next: () => void): Promise<void> => {
      try {
        const clientId = this.getClientId(req);
        const now = Date.now();
        const windowStart = now - options.windowMs;

        let clientData = this.rateLimitStore.get(clientId);
        
        if (!clientData || clientData.resetTime < windowStart) {
          clientData = { count: 0, resetTime: now + options.windowMs };
          this.rateLimitStore.set(clientId, clientData);
        }

        if (clientData.count >= options.maxRequests) {
          res.status(429).json({ 
            error: 'Too many requests',
            retryAfter: Math.ceil(clientData.resetTime / 1000)
          });
          return;
        }

        clientData.count++;
        next();
      } catch (error) {
        res.status(500).json({ error: 'Rate limiting error' });
      }
    };
  }

  private extractToken(req: HttpRequest): string | null {
    const authHeader = req.headers?.['authorization'] as string;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.substring(7);
    }
    
    return null;
  }

  private getClientId(req: HttpRequest): string {
    return req.headers?.['x-forwarded-for'] as string || 
           req.headers?.['x-real-ip'] as string || 
           'unknown';
  }
}
