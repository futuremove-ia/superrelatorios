import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  isDemoMode: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
  signOut: async () => {},
  isDemoMode: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    
    // Durante a callback, o AuthProvider aguarda o processamento isolado na página dedicada
    if (path === '/auth/callback') {
      setLoading(false);
      return;
    }

    // Verificar se está em modo demo (sem Supabase configurado)
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || supabaseUrl === 'https://your-project.supabase.co' || 
        !supabaseKey || supabaseKey === 'your-anon-key-here') {
      console.info('Supabase não configurado - ativando modo demo');
      setIsDemoMode(true);
      
      // Criar usuário demo para testes
      const demoUser = {
        id: 'demo-user-id',
        email: 'demo@superrelatorios.com',
        aud: 'authenticated',
        created_at: new Date().toISOString(),
        user_metadata: { name: 'Demo User' },
        app_metadata: {},
        phone: '',
        confirmed_at: new Date().toISOString(),
        email_confirmed_at: new Date().toISOString(),
        identities: [],
        factors: null,
        last_sign_in_at: new Date().toISOString(),
        role: 'authenticated',
        updated_at: new Date().toISOString(),
      } as User;
      
      setUser(demoUser);
      setLoading(false);
      return;
    }

    const initSession = async () => {
      try {
        const { data: { session: currentSession }, error } = await supabase.auth.getSession();
        if (error) throw error;
        
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
      } catch (err) {
        console.error('Erro ao inicializar sessão:', err);
        // Em caso de erro, ativar modo demo
        setIsDemoMode(true);
        const demoUser = {
          id: 'demo-user-id',
          email: 'demo@superrelatorios.com',
          aud: 'authenticated',
          created_at: new Date().toISOString(),
          user_metadata: { name: 'Demo User' },
          app_metadata: {},
          phone: '',
          confirmed_at: new Date().toISOString(),
          email_confirmed_at: new Date().toISOString(),
          identities: [],
          factors: null,
          last_sign_in_at: new Date().toISOString(),
          role: 'authenticated',
          updated_at: new Date().toISOString(),
        } as User;
        setUser(demoUser);
      } finally {
        setLoading(false);
      }
    };

    initSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    if (isDemoMode) {
      // Em modo demo, apenas limpa o estado
      setUser(null);
      setSession(null);
      return;
    }
    
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Erro ao fazer signOut:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, user, loading, signOut, isDemoMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
