import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

// Mock i18n translation function
const t = (key: string) => {
  const translations: Record<string, string> = {
    'common.save': 'Salvar',
    'common.cancel': 'Cancelar',
  };
  return translations[key] || key;
};

// Mock styles
vi.mock('../Button.module.css', () => ({
  default: {
    button: 'mock-button',
    primary: 'mock-primary',
    secondary: 'mock-secondary',
  },
}));

describe('Button Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Test 1: Renderização básica
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  // Test 2: Classes de estilo
  it('applies correct variant classes', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('mock-button', 'mock-primary');
  });

  // Test 3: Event handlers
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 4: Estado disabled
  it('can be disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  // Test 5: Loading state
  it('shows loading state', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-loading', 'true');
  });

  // Test 6: Acessibilidade
  it('has proper ARIA attributes when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  // Test 7: Children diferentes
  it('renders with icon children', () => {
    const Icon = () => <span data-testid="icon">🚀</span>;
    render(<Button><Icon /> With Icon</Button>);
    
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  // Test 8: Props opcionais
  it('passes through additional props', () => {
    render(<Button data-testid="custom-button" type="submit">Submit</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  // Test 9: Internacionalização
  it('displays translated text', () => {
    render(<Button>{t('common.save')}</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Salvar');
  });

  // Test 10: Focus management
  it('can be focused programmatically', () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByRole('button');
    
    button.focus();
    expect(button).toHaveFocus();
  });
});
