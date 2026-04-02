import { useState } from 'react';
import { Building, Upload, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface CompanyData {
  name: string;
  sector: string;
  size: string;
  website: string;
  phone: string;
  address: string;
  cnpj: string;
}

const CompanySettings = () => {
  const { toast } = useToast();
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: 'SuperRelatórios Inc.',
    sector: 'technology',
    size: 'medium',
    website: 'https://superrelatorios.com.br',
    phone: '+55 (11) 99999-9999',
    address: 'Av. Paulista, 1000 - São Paulo, SP',
    cnpj: '12.345.678/0001-90'
  });

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    toast({
      title: 'Empresa atualizada',
      description: 'Os dados da empresa foram salvos com sucesso.',
    });
  };

  const sectors = [
    { value: 'technology', label: 'Tecnologia' },
    { value: 'finance', label: 'Financeiro' },
    { value: 'healthcare', label: 'Saúde' },
    { value: 'education', label: 'Educação' },
    { value: 'retail', label: 'Varejo' },
    { value: 'manufacturing', label: 'Manufatura' },
    { value: 'services', label: 'Serviços' },
    { value: 'other', label: 'Outro' }
  ];

  const sizes = [
    { value: 'micro', label: 'Micro (1-9 funcionários)' },
    { value: 'small', label: 'Pequena (10-49)' },
    { value: 'medium', label: 'Média (50-249)' },
    { value: 'large', label: 'Grande (250-999)' },
    { value: 'enterprise', label: 'Enterprise (1000+)' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-primary" />
            Dados da Empresa
          </CardTitle>
          <CardDescription>
            Gerencie as informações da sua empresa
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24 border-2 border-dashed border-muted-foreground/30 rounded-lg">
                {logoPreview ? (
                  <img src={logoPreview} alt="Logo" className="h-full w-full object-cover rounded-lg" />
                ) : (
                  <AvatarFallback className="text-2xl">
                    {companyData.name.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
              <label
                htmlFor="logo-upload"
                className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-1.5 rounded-full cursor-pointer hover:bg-primary/90 transition-colors"
              >
                <Upload className="h-3 w-3" />
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoChange}
                />
              </label>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Logo da Empresa</h3>
              <p className="text-sm text-muted-foreground">
                Recommended: 200x200px, PNG ou JPG
              </p>
              <Button variant="outline" size="sm" asChild>
                <label htmlFor="logo-upload" className="cursor-pointer">
                  Alterar logo
                </label>
              </Button>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da Empresa</Label>
              <Input
                id="companyName"
                value={companyData.name}
                onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                value={companyData.cnpj}
                onChange={(e) => setCompanyData({ ...companyData, cnpj: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Setor</Label>
              <Select
                value={companyData.sector}
                onValueChange={(value) => setCompanyData({ ...companyData, sector: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map((sector) => (
                    <SelectItem key={sector.value} value={sector.value}>
                      {sector.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tamanho</Label>
              <Select
                value={companyData.size}
                onValueChange={(value) => setCompanyData({ ...companyData, size: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={companyData.website}
              onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                value={companyData.phone}
                onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                value={companyData.address}
                onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
              />
            </div>
          </div>

          <Separator />

          <div className="flex justify-end">
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Salvar alterações
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanySettings;
