import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Download, Star, DollarSign, Plus, Settings, Eye, Trash2, RefreshCw } from "lucide-react";

const AddonManagerAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const addonStats = [
    { label: "Addons Disponíveis", value: "156", trend: "+12", icon: Package },
    { label: "Addons Ativos", value: "89", trend: "+8", icon: Star },
    { label: "Downloads Totais", value: "2,847", trend: "+234", icon: Download },
    { label: "Receita Mensal", value: "R$ 15,670", trend: "+15%", icon: DollarSign },
  ];

  const addons = [
    { 
      id: 1, 
      name: "Sistema de Fidelidade Plus", 
      category: "Marketing", 
      version: "2.1.4", 
      price: "R$ 49.99", 
      active: true, 
      downloads: 234, 
      rating: 4.8, 
      developer: "FastFood Tech",
      description: "Sistema avançado de pontos de fidelidade"
    },
    { 
      id: 2, 
      name: "Analytics Pro", 
      category: "Relatórios", 
      version: "1.5.2", 
      price: "R$ 79.99", 
      active: true, 
      downloads: 456, 
      rating: 4.6, 
      developer: "Data Solutions",
      description: "Relatórios avançados e insights de vendas"
    },
    { 
      id: 3, 
      name: "Delivery Tracker", 
      category: "Logística", 
      version: "3.2.1", 
      price: "R$ 29.99", 
      active: false, 
      downloads: 189, 
      rating: 4.2, 
      developer: "Logistics Inc",
      description: "Rastreamento em tempo real de entregas"
    },
    { 
      id: 4, 
      name: "Smart Kitchen Display", 
      category: "Cozinha", 
      version: "1.8.7", 
      price: "R$ 99.99", 
      active: true, 
      downloads: 321, 
      rating: 4.9, 
      developer: "Kitchen Pro",
      description: "Display inteligente para gestão de pedidos"
    },
  ];

  const categories = [
    { name: "Todos", count: 156, active: true },
    { name: "Marketing", count: 34, active: false },
    { name: "Relatórios", count: 28, active: false },
    { name: "Logística", count: 22, active: false },
    { name: "Cozinha", count: 19, active: false },
    { name: "Pagamentos", count: 15, active: false },
    { name: "Integração", count: 38, active: false },
  ];

  const installedAddons = [
    { name: "Sistema de Fidelidade Plus", restaurants: 45, active: true },
    { name: "Analytics Pro", restaurants: 67, active: true },
    { name: "Smart Kitchen Display", restaurants: 23, active: true },
    { name: "Delivery Tracker", restaurants: 12, active: false },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Gerenciador de Addons</h1>
          <p className="text-muted-foreground">Gerencie extensões e plugins do sistema</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Verificar Atualizações
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Instalar Addon
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {addonStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.trend}</p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-6">
        <Card className="w-64">
          <CardHeader>
            <CardTitle>Categorias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className={`p-2 rounded-lg cursor-pointer transition-colors ${
                  category.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-xs">{category.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Tabs defaultValue="available" className="space-y-6">
            <TabsList>
              <TabsTrigger value="available">Disponíveis</TabsTrigger>
              <TabsTrigger value="installed">Instalados</TabsTrigger>
              <TabsTrigger value="updates">Atualizações</TabsTrigger>
              <TabsTrigger value="settings">Configurações</TabsTrigger>
            </TabsList>

            <TabsContent value="available">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Addons Disponíveis</CardTitle>
                    <Input
                      placeholder="Buscar addons..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {addons.map((addon) => (
                      <Card key={addon.id} className="border-2">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold">{addon.name}</h3>
                                <p className="text-sm text-muted-foreground">{addon.category}</p>
                              </div>
                              <Badge variant={addon.active ? "default" : "secondary"}>
                                {addon.active ? "Ativo" : "Inativo"}
                              </Badge>
                            </div>
                            
                            <p className="text-sm text-muted-foreground">{addon.description}</p>
                            
                            <div className="flex items-center gap-2">
                              <div className="flex">{renderStars(addon.rating)}</div>
                              <span className="text-sm text-muted-foreground">({addon.downloads})</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-primary">{addon.price}</span>
                              <span className="text-sm text-muted-foreground">v{addon.version}</span>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" className="flex-1">
                                <Download className="mr-2 h-3 w-3" />
                                Instalar
                              </Button>
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installed">
              <Card>
                <CardHeader>
                  <CardTitle>Addons Instalados</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Restaurantes</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {installedAddons.map((addon, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{addon.name}</TableCell>
                          <TableCell>{addon.restaurants} restaurantes</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Switch checked={addon.active} />
                              <span className="text-sm">{addon.active ? "Ativo" : "Inativo"}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Settings className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="updates">
              <Card>
                <CardHeader>
                  <CardTitle>Atualizações Disponíveis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium">Todos os addons estão atualizados</p>
                    <p className="text-muted-foreground">Última verificação: há 2 horas</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações Gerais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Atualizações automáticas</p>
                      <p className="text-sm text-muted-foreground">Atualizar addons automaticamente</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações de atualização</p>
                      <p className="text-sm text-muted-foreground">Receber alertas sobre novas versões</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Verificação diária</p>
                      <p className="text-sm text-muted-foreground">Verificar atualizações todos os dias</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AddonManagerAdmin;