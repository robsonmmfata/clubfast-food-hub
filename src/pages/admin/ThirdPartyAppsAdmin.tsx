import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Settings, Globe, Smartphone, CreditCard, Truck } from "lucide-react";

const ThirdPartyAppsAdmin = () => {
  const apps = [
    { 
      id: 1, 
      name: "WhatsApp Business API", 
      category: "Comunicação", 
      status: "Ativo", 
      merchants: 28, 
      description: "Integração com WhatsApp para notificações",
      icon: <Smartphone className="h-8 w-8 text-green-600" />
    },
    { 
      id: 2, 
      name: "Google Analytics", 
      category: "Analytics", 
      status: "Ativo", 
      merchants: 35, 
      description: "Rastreamento e análise de dados",
      icon: <Globe className="h-8 w-8 text-blue-600" />
    },
    { 
      id: 3, 
      name: "PagSeguro", 
      category: "Pagamento", 
      status: "Inativo", 
      merchants: 0, 
      description: "Gateway de pagamento brasileiro",
      icon: <CreditCard className="h-8 w-8 text-orange-600" />
    },
    { 
      id: 4, 
      name: "Correios API", 
      category: "Entrega", 
      status: "Ativo", 
      merchants: 15, 
      description: "Cálculo de frete e rastreamento",
      icon: <Truck className="h-8 w-8 text-yellow-600" />
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Aplicativos de Terceiros</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Integração
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Integrações Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">De 18 disponíveis</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Comerciantes Conectados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">80% do total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">APIs Chamadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2k</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.2%</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <Card key={app.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {app.icon}
                  <div>
                    <CardTitle className="text-lg">{app.name}</CardTitle>
                    <Badge variant="outline">{app.category}</Badge>
                  </div>
                </div>
                <Switch checked={app.status === "Ativo"} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{app.description}</p>
              <div className="flex justify-between text-sm">
                <span>Comerciantes usando:</span>
                <span className="font-medium">{app.merchants}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurar
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Todas as Integrações</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar integrações..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Comerciantes</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apps.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {app.icon}
                      <div>
                        <p className="font-medium">{app.name}</p>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{app.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={app.status === "Ativo" ? "default" : "secondary"}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{app.merchants}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThirdPartyAppsAdmin;