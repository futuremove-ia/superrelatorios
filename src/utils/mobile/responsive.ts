// Responsive design utilities with proper TypeScript typing
export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const responsive = {
  // Get current breakpoint
  getCurrent: (): Breakpoint => {
    const width = window.innerWidth;
    if (width >= breakpoints['2xl']) return '2xl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'xs';
  },

  // Check if current breakpoint matches
  is: (breakpoint: Breakpoint): boolean => {
    const current = responsive.getCurrent();
    return current === breakpoint;
  },

  // Check if current breakpoint is above
  isAbove: (breakpoint: Breakpoint): boolean => {
    const current = responsive.getCurrent();
    const currentIndex = Object.keys(breakpoints).indexOf(current);
    const targetIndex = Object.keys(breakpoints).indexOf(breakpoint);
    return currentIndex > targetIndex;
  },

  // Check if current breakpoint is below
  isBelow: (breakpoint: Breakpoint): boolean => {
    const current = responsive.getCurrent();
    const currentIndex = Object.keys(breakpoints).indexOf(current);
    const targetIndex = Object.keys(breakpoints).indexOf(breakpoint);
    return currentIndex < targetIndex;
  },

  // Get responsive classes
  getClasses: () => {
    const current = responsive.getCurrent();
    return {
      container: 'container mx-auto px-4 sm:px-6 lg:px-8',
      grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
      text: {
        xs: 'text-xs sm:text-sm md:text-base lg:text-lg',
        sm: 'text-sm md:text-base lg:text-lg xl:text-xl',
        md: 'text-base lg:text-lg xl:text-xl',
        lg: 'text-lg xl:text-xl',
        xl: 'text-xl',
        '2xl': 'text-2xl'
      }
    };
  },

  // Media queries
  media: {
    up: (breakpoint: Breakpoint) => `@media (min-width: ${breakpoints[breakpoint]}px)`,
    down: (breakpoint: Breakpoint) => `@media (max-width: ${breakpoints[breakpoint] - 1}px)`,
    between: (start: Breakpoint, end: Breakpoint) => 
      `@media (min-width: ${breakpoints[start]}px) and (max-width: ${breakpoints[end] - 1}px)`
  }
};

// Mobile-first CSS utilities
export const mobileFirst = {
  // Hide/show utilities
  hide: {
    mobile: 'md:hidden',
    tablet: 'lg:hidden md:block',
    desktop: 'lg:block'
  },

  show: {
    mobile: 'block md:hidden',
    tablet: 'hidden md:block lg:hidden',
    desktop: 'hidden lg:block'
  },

  // Touch utilities
  touch: {
    'touch-action': 'touch-action-manipulation',
    'user-select': 'select-none',
    'tap-highlight': 'tap-highlight-transparent'
  },

  // Safe area insets for notched devices
  safeArea: {
    top: 'pt-safe-or-6',
    bottom: 'pb-safe-or-6',
    left: 'pl-safe-or-6',
    right: 'pr-safe-or-6',
    all: 'p-safe-or-6'
  }
};

// Performance utilities for mobile
export const mobilePerformance = {
  // Optimize images for mobile
  optimizeImage: (src: string, width: number, height: number, quality: number = 80) => {
    // This would integrate with an image optimization service
    // For now, return src as-is
    return src;
  },

  // Lazy load components
  shouldLazyLoad: (componentName: string, breakpoint: Breakpoint) => {
    const lazyComponents = ['HeavyChart', 'ComplexTable', 'AdvancedAnalytics'];
    const mobileOnlyBreakpoints = ['xs', 'sm'];

    return lazyComponents.includes(componentName) && mobileOnlyBreakpoints.includes(breakpoint);
  },

  // Reduce motion for accessibility
  reduceMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Check for slow connections
  isSlowConnection: (): boolean => {
    const connection = (navigator as any).connection;
    if (!connection) return false;

    return connection.saveData ||
           connection.effectiveType === 'slow-2g' ||
           connection.effectiveType === '2g';
  },

  // Adaptive loading based on connection
  getAdaptiveQuality: () => {
    const isSlow = mobilePerformance.isSlowConnection();
    const isLowMemory = (navigator as any).deviceMemory < 4;

    if (isSlow || isLowMemory) {
      return {
        imageQuality: 60,
        videoQuality: '360p',
        enableAnimations: false,
        enableParticles: false
      };
    }

    return {
      imageQuality: 80,
      videoQuality: '720p',
      enableAnimations: true,
      enableParticles: true
    };
  }
};

// PWA utilities
export const pwa = {
  // Service worker registration
  registerServiceWorker: async (): Promise<ServiceWorkerRegistration | null> => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered:', registration);
        return registration;
      } catch (error) {
        console.error('SW registration failed:', error);
        return null;
      }
    }
    return null;
  },

  // Check if app is installed
  isInstalled: (): boolean => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    return isStandalone || isInWebAppiOS;
  },

  // Install prompt
  showInstallPrompt: async () => {
    const deferredPrompt = (window as any).deferredPrompt;
    if (!deferredPrompt) return false;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        (window as any).deferredPrompt = null;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Install prompt failed:', error);
      return false;
    }
  },

  // Push notification subscription
  subscribeToPush: async () => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      return null;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY'
      });

      return subscription;
    } catch (error) {
      console.error('Push subscription failed:', error);
      return null;
    }
  },

  // Background sync
  registerBackgroundSync: async (tag: string): Promise<boolean> => {
    if (!('serviceWorker' in navigator) || !('SyncManager' in window)) {
      return false;
    }

    try {
      const registration = await navigator.serviceWorker.ready as any;
      if (registration.sync) {
        await registration.sync.register(tag);
      }
      return true;
    } catch (error) {
      console.error('Background sync registration failed:', error);
      return false;
    }
  }
};

// Device detection utilities
export const device = {
  // Detect device type
  getType: (): 'ios' | 'android' | 'windows' | 'mac' | 'linux' | 'unknown' => {
    const userAgent = navigator.userAgent;

    if (/iPad|iPhone|iPod/.test(userAgent)) return 'ios';
    if (/Android/.test(userAgent)) return 'android';
    if (/Windows Phone/.test(userAgent)) return 'windows';
    if (/Mac/.test(userAgent)) return 'mac';
    if (/Linux/.test(userAgent)) return 'linux';

    return 'unknown';
  },

  // Detect browser
  getBrowser: (): 'chrome' | 'firefox' | 'safari' | 'edge' | 'unknown' => {
    const userAgent = navigator.userAgent;

    if (/Chrome/.test(userAgent) && !/Edge/.test(userAgent)) return 'chrome';
    if (/Firefox/.test(userAgent)) return 'firefox';
    if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) return 'safari';
    if (/Edge/.test(userAgent)) return 'edge';

    return 'unknown';
  },

  // Get device capabilities
  getCapabilities: () => {
    return {
      touch: 'ontouchstart' in window,
      webgl: !!window.WebGLRenderingContext,
      webgl2: !!window.WebGL2RenderingContext,
      webassembly: !!window.WebAssembly,
      serviceWorker: 'serviceWorker' in navigator,
      pushManager: 'PushManager' in window,
      notifications: 'Notification' in window,
      geolocation: 'geolocation' in navigator,
      camera: 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices,
      microphone: 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices,
      deviceMemory: (navigator as any).deviceMemory || 0,
      hardwareConcurrency: navigator.hardwareConcurrency || 0,
      maxTouchPoints: navigator.maxTouchPoints || 0
    };
  }
};
