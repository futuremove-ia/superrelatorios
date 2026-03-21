/**
 * Cache interface for different cache implementations
 * Follows Strategy pattern for flexibility and scalability
 */

export interface CacheItem<T> {
  value: T;
  timestamp: number;
  ttl?: number;
  hits: number;
}

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items
  cleanupInterval?: number; // Cleanup interval in milliseconds
}

export interface CacheStats {
  totalItems: number;
  totalHits: number;
  totalMisses: number;
  hitRate: number;
  memoryUsage: number;
  oldestItem?: Date;
  newestItem?: Date;
}

export interface ICacheProvider {
  /**
   * Get value from cache
   */
  get<T>(key: string): Promise<T | null>;

  /**
   * Set value in cache
   */
  set<T>(key: string, value: T, options?: CacheOptions): Promise<void>;

  /**
   * Delete value from cache
   */
  delete(key: string): Promise<boolean>;

  /**
   * Check if key exists
   */
  exists(key: string): Promise<boolean>;

  /**
   * Clear all cache
   */
  clear(): Promise<void>;

  /**
   * Get cache statistics
   */
  getStats(): Promise<CacheStats>;

  /**
   * Get all keys
   */
  keys(): Promise<string[]>;

  /**
   * Get cache size
   */
  size(): Promise<number>;
}
