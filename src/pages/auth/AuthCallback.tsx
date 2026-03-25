import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import PageLoader from "@/components/layout/PageLoader";
import { ensurePathHasLocale, preferredLocaleFromStorage } from "@/lib/localePath";
import { appHomePath } from "@/lib/appPaths";

/**
 * AuthCallback: Página dedicada para processar o retorno de autenticação social (OAuth).
 * Esta abordagem isolada evita conflitos com o carregamento da Landing Page e
 * garante a troca segura do token via protocolo PKCE.
 */
const AuthCallback = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const processAuth = async () => {
      const fallbackHome = appHomePath(preferredLocaleFromStorage());

      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;

        const rawRedirect = searchParams.get("redirect");
        const target =
          data.session != null
            ? rawRedirect
              ? ensurePathHasLocale(rawRedirect)
              : fallbackHome
            : ensurePathHasLocale("/login?error=auth_no_session");

        window.location.assign(target);
      } catch (err) {
        console.error("Auth: Falha crítica na validação do callback:", err);
        window.location.assign(ensurePathHasLocale("/login?error=auth_callback_failed"));
      }
    };

    processAuth();
  }, [searchParams]);

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
