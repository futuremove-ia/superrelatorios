/**
 * Cache service interface
 * Defines contract for caching operations
 */
export interface ICacheService<T = any> {
  /**
   * Get value from cache
   */
  get(key: string): Promise<T | null>;

  /**
   * Set value in cache with TTL
   */
  set(key: string, value: T, ttlMs?: number): Promise<void>;

  /**
   * Delete value from cache
   */
  delete(key: string): Promise<void>;

  /**
   * Clear all cache
   */
  clear(): Promise<void>;

  /**
   * Check if key exists
   */
  has(key: string): Promise<boolean>;

  /**
   * Get multiple values
   */
  getMultiple(keys: string[]): Promise<Map<string, T>>;

  /**
   * Set multiple values
   */
  setMultiple(entries: Map<string, T>, ttlMs?: number): Promise<void>;

  /**
   * Get cache statistics
   */
  getStats(): Promise<{
    size: number;
    hitRate: number;
    missRate: number;
  }>;
}
