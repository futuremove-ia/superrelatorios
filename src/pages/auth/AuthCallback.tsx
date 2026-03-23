import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import PageLoader from '@/components/layout/PageLoader';

/**
 * AuthCallback: Página dedicada para processar o retorno de autenticação social (OAuth).
 * Esta abordagem isolada evita conflitos com o carregamento da Landing Page e
 * garante a troca segura do token via protocolo PKCE.
 */
const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const processAuth = async () => {
      try {
        // O cliente Supabase processa automaticamente o código presente na URL
        const { data, error } = await supabase.auth.getSession();
        
        if (error) throw error;

        // Get redirect URL from query params or use default
        const redirect = searchParams.get('redirect') || '/app';

        // Se a sessão for validada com sucesso, limpa a URL e envia para o destino
        if (data.session) {
          window.location.href = redirect;
        } else {
          window.location.href = '/login';
        }
      } catch (err) {
        console.error("Auth: Falha crítica na validação do callback:", err);
        window.location.href = '/login?error=auth_callback_failed';
      }
    };

    processAuth();
  }, [navigate, searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-4">
        <PageLoader />
        <p className="text-sm text-muted-foreground animate-pulse">Finalizando login seguro...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
