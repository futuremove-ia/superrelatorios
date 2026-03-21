import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2, 
  Users, 
  Briefcase, 
  MapPin, 
  Plus, 
  Edit, 
  Trash2, 
  UserPlus, 
  Shield, 
  Settings,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';
import { useBusinessUnits, useDepartments, useTeams, useRoles, useMemberships } from '@/hooks/useOrganizationHierarchy';
import { useToast } from '@/hooks/use-toast';

const OrganizationManager = () => {
  const [activeTab, setActiveTab] = useState('units');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<any>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<any>(null);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  
  const { data: businessUnits = [] } = useBusinessUnits();
  const { data: departments = [] } = useDepartments();
  const { data: teams = [] } = useTeams();
  const { data: roles = [] } = useRoles();
  const { data: memberships = [] } = useMemberships();
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Filtros
  const filteredUnits = businessUnits.filter(unit => 
    unit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredDepartments = departments.filter(dept => 
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mutations
  const createBusinessUnit = useMutation({
    mutationFn: async (data: any) => {
      const { data: { user } } = await supabase.auth.getUser();
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      const { error } = await supabase
        .from('business_units')
        .insert({
          ...data,
          organization_id: profile.organization_id
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['business-units'] });
      toast({ title: 'Unidade criada com sucesso' });
    }
  });

  const createDepartment = useMutation({
    mutationFn: async (data: any) => {
      const { data: { user } } = await supabase.auth.getUser();
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      const { error } = await supabase
        .from('departments')
        .insert({
          ...data,
          organization_id: profile.organization_id
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['departments'] });
      toast({ title: 'Departamento criado com sucesso' });
    }
  });

  const createTeam = useMutation({
    mutationFn: async (data: any) => {
      const { data: { user } } = await supabase.auth.getUser();
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      const { error } = await supabase
        .from('teams')
        .insert({
          ...data,
          organization_id: profile.organization_id
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teams'] });
      toast({ title: 'Time criado com sucesso' });
    }
  });

  const createMembership = useMutation({
    mutationFn: async (data: any) => {
      const { data: { user } } = await supabase.auth.getUser();
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      const { error } = await supabase
        .from('memberships')
        .insert({
          ...data,
          organization_id: profile.organization_id
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['memberships'] });
      toast({ title: 'Vínculo criado com sucesso' });
    }
  });

  const getUnitTypeLabel = (type: string) => {
    const types = {
      matriz: 'Matriz',
      filial: 'Filial',
      ponto_venda: 'Ponto de Venda',
      escritorio: 'Escritório',
      armazem: 'Armazém',
      outro: 'Outro'
    };
    return types[type as keyof typeof types] || type;
  };

  const getDepartmentTypeLabel = (type: string) => {
    const types = {
      financeiro: 'Financeiro',
      vendas: 'Vendas',
      operacional: 'Operacional',
      marketing: 'Marketing',
      rh: 'RH',
      juridico: 'Jurídico',
      estrategico: 'Estratégico'
    };
    return types[type as keyof typeof types] || type;
  };

  const getTeamTypeLabel = (type: string) => {
    const types = {
      squad: 'Squad',
      projeto: 'Projeto',
      comite: 'Comitê',
      transversal: 'Transversal',
      funcional: 'Funcional',
      temporario: 'Temporário'
    };
    return types[type as keyof typeof types] || type;
  };

  const getRoleLevelLabel = (level: string) => {
    const levels = {
      owner: 'Owner',
      admin: 'Admin',
      manager: 'Manager',
      supervisor: 'Supervisor',
      analyst: 'Analyst',
      viewer: 'Viewer',
      guest: 'Guest'
    };
    return levels[level as keyof typeof levels] || level;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestão da Organização</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="units" className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Unidades
          </TabsTrigger>
          <TabsTrigger value="departments" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Departamentos
          </TabsTrigger>
          <TabsTrigger value="teams" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Times
          </TabsTrigger>
          <TabsTrigger value="memberships" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Vínculos
          </TabsTrigger>
        </TabsList>

        {/* Aba: Unidades de Negócio */}
        <TabsContent value="units" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Unidades de Negócio</h2>
            <Button onClick={() => setSelectedUnit({})}>
              <Plus className="w-4 h-4 mr-2" />
              Nova Unidade
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUnits.map((unit) => (
              <Card key={unit.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{unit.name}</CardTitle>
                      <Badge variant="outline" className="mt-2">
                        {getUnitTypeLabel(unit.type)}
                      </Badge>
                    </div>
                    {unit.is_primary && (
                      <Badge className="bg-blue-100 text-blue-800">Principal</Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="text-sm text-gray-600 space-y-1">
                    {unit.code && (
                      <div><strong>Código:</strong> {unit.code}</div>
                    )}
                    {unit.address && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {unit.address}, {unit.city}/{unit.state}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setSelectedUnit(unit)}>
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    {!unit.is_primary && (
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Excluir
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Aba: Departamentos */}
        <TabsContent value="departments" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Departamentos</h2>
            <Button onClick={() => setSelectedDepartment({})}>
              <Plus className="w-4 h-4 mr-2" />
              Novo Departamento
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept) => (
              <Card key={dept.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                      <Badge variant="outline" className="mt-2">
                        {getDepartmentTypeLabel(dept.code)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="text-sm text-gray-600 space-y-1">
                    {dept.code && (
                      <div><strong>Código:</strong> {dept.code}</div>
                    )}
                    {dept.description && (
                      <div><strong>Descrição:</strong> {dept.description}</div>
                    )}
                    {dept.cost_center && (
                      <div><strong>Centro de Custo:</strong> {dept.cost_center}</div>
                    )}
                    {dept.budget_limit && (
                      <div><strong>Limite Orçamento:</strong> R$ {dept.budget_limit.toLocaleString()}</div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setSelectedDepartment(dept)}>
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-1" />
                      Excluir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Aba: Times */}
        <TabsContent value="teams" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Times</h2>
            <Button onClick={() => setSelectedTeam({})}>
              <Plus className="w-4 h-4 mr-2" />
              Novo Time
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team) => (
              <Card key={team.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{team.name}</CardTitle>
                      <Badge variant="outline" className="mt-2">
                        {getTeamTypeLabel(team.type)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="text-sm text-gray-600 space-y-1">
                    {team.code && (
                      <div><strong>Código:</strong> {team.code}</div>
                    )}
                    {team.description && (
                      <div><strong>Descrição:</strong> {team.description}</div>
                    )}
                    {team.start_date && (
                      <div><strong>Início:</strong> {new Date(team.start_date).toLocaleDateString()}</div>
                    )}
                    {team.end_date && (
                      <div><strong>Término:</strong> {new Date(team.end_date).toLocaleDateString()}</div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setSelectedTeam(team)}>
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    {!team.is_active && (
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Excluir
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Aba: Vínculos */}
        <TabsContent value="memberships" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Vínculos e Permissões</h2>
            <Button onClick={() => createMembership.mutate({})}>
              <UserPlus className="w-4 h-4 mr-2" />
              Novo Vínculo
            </Button>
          </div>

          <div className="space-y-4">
            {memberships.map((membership) => (
              <Card key={membership.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium">
                        Usuário: {membership.user_id}
                      </div>
                      <div className="flex gap-2 text-sm">
                        {membership.business_unit_id && (
                          <Badge variant="outline">
                            {businessUnits.find(bu => bu.id === membership.business_unit_id)?.name}
                          </Badge>
                        )}
                        {membership.department_id && (
                          <Badge variant="outline">
                            {departments.find(d => d.id === membership.department_id)?.name}
                          </Badge>
                        )}
                        {membership.team_id && (
                          <Badge variant="outline">
                            {teams.find(t => t.id === membership.team_id)?.name}
                          </Badge>
                        )}
                        <Badge className="bg-purple-100 text-purple-800">
                          {getRoleLevelLabel(roles.find(r => r.id === membership.role_id)?.level || '')}
                        </Badge>
                        {membership.is_primary && (
                          <Badge className="bg-green-100 text-green-800">Principal</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remover
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modais de Edição (simplificados) */}
      {selectedUnit && (
        <Card className="fixed inset-0 z-50 m-0 h-screen w-screen rounded-none">
          <CardContent className="h-full overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">
                {selectedUnit.id ? 'Editar Unidade' : 'Nova Unidade'}
              </h2>
              <Button variant="outline" onClick={() => setSelectedUnit(null)}>
                Fechar
              </Button>
            </div>
            
            <div className="max-w-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome</Label>
                  <Input
                    value={selectedUnit.name || ''}
                    onChange={(e) => setSelectedUnit(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ex: Matriz São Paulo"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Código</Label>
                  <Input
                    value={selectedUnit.code || ''}
                    onChange={(e) => setSelectedUnit(prev => ({ ...prev, code: e.target.value }))}
                    placeholder="Ex: MATRIZ_SP"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Tipo</Label>
                  <Select 
                    value={selectedUnit.type || 'filial'} 
                    onValueChange={(value) => setSelectedUnit(prev => ({ ...prev, type: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matriz">Matriz</SelectItem>
                      <SelectItem value="filial">Filial</SelectItem>
                      <SelectItem value="ponto_venda">Ponto de Venda</SelectItem>
                      <SelectItem value="escritorio">Escritório</SelectItem>
                      <SelectItem value="armazem">Armazém</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Endereço</Label>
                  <Input
                    value={selectedUnit.address || ''}
                    onChange={(e) => setSelectedUnit(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Rua, número, complemento"
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setSelectedUnit(null)}>
                  Cancelar
                </Button>
                <Button 
                  onClick={() => {
                    if (selectedUnit.id) {
                      // TODO: Implementar update
                      toast({ title: 'Funcionalidade em desenvolvimento' });
                    } else {
                      createBusinessUnit.mutate(selectedUnit);
                      setSelectedUnit(null);
                    }
                  }}
                >
                  {selectedUnit.id ? 'Salvar' : 'Criar'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OrganizationManager;
