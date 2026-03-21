import { ICacheProvider, CacheItem, CacheOptions, CacheStats } from './CacheInterface';

/**
 * In-memory cache implementation
 * Simple, fast cache for MVP with TTL and size limits
 * Ready for migration to Redis or other distributed cache
 */

export class MemoryCache implements ICacheProvider {
  private cache = new Map<string, CacheItem<any>>();
  private stats = {
    hits: 0,
    misses: 0,
    sets: 0,
    deletes: 0,
  };
  private defaultOptions: CacheOptions;
  private cleanupTimer?: NodeJS.Timeout;

  constructor(defaultOptions: CacheOptions = {}) {
    this.defaultOptions = {
      ttl: 5 * 60 * 1000, // 5 minutes default TTL
      maxSize: 1000, // 1000 items max
      cleanupInterval: 60 * 1000, // Cleanup every minute
      ...defaultOptions,
    };

    // Start cleanup timer
    this.startCleanup();
  }

  /**
   * Get value from cache
   */
  async get<T>(key: string): Promise<T | null> {
    const item = this.cache.get(key);

    if (!item) {
      this.stats.misses++;
      return null;
    }

    // Check TTL
    if (item.ttl && Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      this.stats.misses++;
      return null;
    }

    item.hits++;
    this.stats.hits++;
    return item.value;
  }

  /**
   * Set value in cache
   */
  async set<T>(key: string, value: T, options: CacheOptions = {}): Promise<void> {
    const mergedOptions = { ...this.defaultOptions, ...options };
    
    // Check size limit
    if (this.cache.size >= mergedOptions.maxSize!) {
      this.evictLRU();
    }

    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      ttl: mergedOptions.ttl,
      hits: 0,
    };

    this.cache.set(key, item);
    this.stats.sets++;
  }

  /**
   * Delete value from cache
   */
  async delete(key: string): Promise<boolean> {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.stats.deletes++;
    }
    return deleted;
  }

  /**
   * Check if key exists
   */
  async exists(key: string): Promise<boolean> {
    const item = this.cache.get(key);
    
    if (!item) {
      return false;
    }

    // Check TTL
    if (item.ttl && Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  /**
   * Clear all cache
   */
  async clear(): Promise<void> {
    this.cache.clear();
    this.stats = {
      hits: 0,
      misses: 0,
      sets: 0,
      deletes: 0,
    };
  }

  /**
   * Get cache statistics
   */
  async getStats(): Promise<CacheStats> {
    const now = Date.now();
    let oldestTimestamp = now;
    let newestTimestamp = 0;
    let totalMemoryUsage = 0;

    for (const [key, item] of this.cache.entries()) {
      // Calculate memory usage (rough estimate)
      totalMemoryUsage += key.length * 2; // String size
      totalMemoryUsage += JSON.stringify(item.value).length * 2;
      totalMemoryUsage += 64; // Object overhead

      if (item.timestamp < oldestTimestamp) {
        oldestTimestamp = item.timestamp;
      }
      if (item.timestamp > newestTimestamp) {
        newestTimestamp = item.timestamp;
      }
    }

    const totalRequests = this.stats.hits + this.stats.misses;
    const hitRate = totalRequests > 0 ? (this.stats.hits / totalRequests) * 100 : 0;

    return {
      totalItems: this.cache.size,
      totalHits: this.stats.hits,
      totalMisses: this.stats.misses,
      hitRate,
      memoryUsage: totalMemoryUsage,
      oldestItem: oldestTimestamp < now ? new Date(oldestTimestamp) : undefined,
      newestItem: newestTimestamp > 0 ? new Date(newestTimestamp) : undefined,
    };
  }

  /**
   * Get all keys
   */
  async keys(): Promise<string[]> {
    return Array.from(this.cache.keys());
  }

  /**
   * Get cache size
   */
  async size(): Promise<number> {
    return this.cache.size;
  }

  /**
   * Get multiple values
   */
  async mget<T>(keys: string[]): Promise<Map<string, T | null>> {
    const results = new Map<string, T | null>();
    
    for (const key of keys) {
      const value = await this.get<T>(key);
      results.set(key, value);
    }
    
    return results;
  }

  /**
   * Set multiple values
   */
  async mset<T>(entries: Map<string, T>, options: CacheOptions = {}): Promise<void> {
    for (const [key, value] of entries.entries()) {
      await this.set(key, value, options);
    }
  }

  /**
   * Delete multiple keys
   */
  async mdelete(keys: string[]): Promise<number> {
    let deleted = 0;
    for (const key of keys) {
      if (await this.delete(key)) {
        deleted++;
      }
    }
    return deleted;
  }

  /**
   * Get or set pattern (useful for caching expensive operations)
   */
  async getOrSet<T>(
    key: string,
    factory: () => Promise<T>,
    options: CacheOptions = {}
  ): Promise<T> {
    const cached = await this.get<T>(key);
    
    if (cached !== null) {
      return cached;
    }

    const value = await factory();
    await this.set(key, value, options);
    return value;
  }

  /**
   * Evict least recently used items
   */
  private evictLRU(): void {
    let oldestKey = '';
    let oldestTimestamp = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (item.timestamp < oldestTimestamp) {
        oldestTimestamp = item.timestamp;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  /**
   * Cleanup expired items
   */
  private cleanup(): void {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, item] of this.cache.entries()) {
      if (item.ttl && now - item.timestamp > item.ttl) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      console.log(`MemoryCache: Cleaned up ${cleaned} expired items`);
    }
  }

  /**
   * Start cleanup timer
   */
  private startCleanup(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }

    this.cleanupTimer = setInterval(() => {
      this.cleanup();
    }, this.defaultOptions.cleanupInterval);
  }

  /**
   * Stop cleanup timer
   */
  stopCleanup(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = undefined;
    }
  }

  /**
   * Destroy cache instance
   */
  destroy(): void {
    this.stopCleanup();
    this.cache.clear();
  }

  /**
   * Serialize cache state (useful for debugging)
   */
  serialize(): string {
    const state = {
      size: this.cache.size,
      stats: this.stats,
      items: Array.from(this.cache.entries()).map(([key, item]) => ({
        key,
        timestamp: item.timestamp,
        ttl: item.ttl,
        hits: item.hits,
        hasValue: item.value !== undefined,
      })),
    };

    return JSON.stringify(state, null, 2);
  }
}
