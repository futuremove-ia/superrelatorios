import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface DemoBannerProps {
  className?: string;
}

const DemoBanner: React.FC<DemoBannerProps> = ({ className }) => {
  const { isDemoMode } = useAuth();
  const [dismissed, setDismissed] = React.useState(false);

  if (!isDemoMode || dismissed) {
    return null;
  }

  return (
    <Alert className={`bg-yellow-50 border-yellow-200 mb-4 ${className}`}>
      <AlertCircle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        <div className="flex items-center justify-between">
          <div>
            <strong>🧪 Modo Demo:</strong> Você está usando o SuperRelatórios em modo demonstração. 
            Para usar com dados reais, configure as variáveis de ambiente do Supabase.
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDismissed(true)}
            className="text-yellow-600 hover:text-yellow-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default DemoBanner;
