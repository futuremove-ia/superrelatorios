import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useI18nRouter } from '../useI18nRouter';

// Mock dependencies
vi.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/pt-BR/app',
    search: '',
    hash: '',
    state: null,
  }),
  useNavigate: () => vi.fn(),
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'pt-BR',
      changeLanguage: vi.fn(),
    },
  }),
}));

vi.mock('../routes/routes', () => ({
  routeMap: {
    'pt-BR': {
      '/app': '/pt-BR/app',
      '/app/painel-decisao': '/pt-BR/app/painel-decisao',
    },
    'en-US': {
      '/app': '/en-US/app',
      '/app/decision-panel': '/en-US/app/decision-panel',
    },
  },
  getLocalizedRoute: vi.fn((path, lang) => {
    const routes = {
      'pt-BR': { '/app': '/pt-BR/app', '/app/painel-decisao': '/pt-BR/app/painel-decisao' },
      'en-US': { '/app': '/en-US/app', '/app/decision-panel': '/en-US/app/decision-panel' },
    };
    return routes[lang as keyof typeof routes]?.[path] || path;
  }),
  getCanonicalRoute: vi.fn((path) => path.replace(/\/(pt-BR|en-US|es-ES)/, '')),
  detectLanguageFromRoute: vi.fn(() => 'pt-BR'),
}));

describe('useI18nRouter Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  // Test 1: Detecção de idioma preferido
  it('detects preferred language from localStorage', () => {
    localStorage.setItem('preferred-language', 'pt-BR');
    const { result } = renderHook(() => useI18nRouter());
    
    expect(result.current.currentLanguage).toBe('pt-BR');
  });

  // Test 2: Fallback para idioma do navegador
  it('falls back to browser language when no preference saved', () => {
    // Mock navigator.language
    Object.defineProperty(navigator, 'language', {
      value: 'en-US',
      configurable: true,
    });

    const { result } = renderHook(() => useI18nRouter());
    expect(result.current.currentLanguage).toBe('en-US');
  });

  // Test 3: Fallback para pt-BR
  it('falls back to pt-BR when no other language detected', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'fr-FR',
      configurable: true,
    });

    const { result } = renderHook(() => useI18nRouter());
    expect(result.current.currentLanguage).toBe('pt-BR');
  });

  // Test 4: Mudança de idioma
  it('changes language and saves preference', () => {
    const mockNavigate = vi.fn();
    vi.mocked(require('react-router-dom').useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => useI18nRouter());
    
    result.current.changeLanguage('en-US');
    
    expect(localStorage.getItem('preferred-language')).toBe('en-US');
    expect(mockNavigate).toHaveBeenCalled();
  });

  // Test 5: Navegação localizada
  it('navigates to localized route', () => {
    const mockNavigate = vi.fn();
    vi.mocked(require('react-router-dom').useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => useI18nRouter());
    
    result.current.navigateLocalized('/app/painel-decisao');
    
    expect(mockNavigate).toHaveBeenCalledWith('/pt-BR/app/painel-decisao');
  });

  // Test 6: Geração de URLs canônicas
  it('generates canonical URL correctly', () => {
    const { result } = renderHook(() => useI18nRouter());
    
    const canonicalUrl = result.current.getCanonicalUrl();
    expect(canonicalUrl).toBe('/app');
  });

  // Test 7: URLs alternativas para hreflang
  it('generates alternate URLs for hreflang', () => {
    const { result } = renderHook(() => useI18nRouter());
    
    const alternateUrls = result.current.getAlternateUrls();
    expect(alternateUrls).toEqual({
      'pt-BR': '/pt-BR/app',
      'en-US': '/en-US/app',
      'es-ES': '/es-ES/app',
    });
  });

  // Test 8: Verificação de disponibilidade de rota
  it('checks if route is available in language', () => {
    const { result } = renderHook(() => useI18nRouter());
    
    const isAvailable = result.current.isRouteAvailable('/app', 'pt-BR');
    expect(isAvailable).toBe(true);
  });

  // Test 9: Detecção de idioma da rota (via função importada)
  it('detects language from current route', () => {
    const { detectLanguageFromRoute } = require('../routes/routes');
    const detectedLanguage = detectLanguageFromRoute('/pt-BR/app');
    expect(detectedLanguage).toBe('pt-BR');
  });

  // Test 10: Redirecionamento automático
  it('redirects when route language differs from preferred', () => {
    localStorage.setItem('preferred-language', 'en-US');
    const mockNavigate = vi.fn();
    vi.mocked(require('react-router-dom').useNavigate).mockReturnValue(mockNavigate);

    renderHook(() => useI18nRouter());
    
    // Should trigger redirect due to language mismatch
    expect(mockNavigate).toHaveBeenCalled();
  });
});
