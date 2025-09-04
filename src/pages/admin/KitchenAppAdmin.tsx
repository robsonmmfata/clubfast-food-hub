import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChefHat, Clock, CheckCircle, AlertCircle, Users, Settings, Bell, Monitor } from "lucide-react";

const KitchenAppAdmin = () => {
  const kitchenStats = [
    { label: "Cozinhas Ativas", value: "156", trend: "+8%", icon: ChefHat },
    { label: "Pedidos em Preparo", value: "342", trend: "+12%", icon: Clock },
    { label: "Pedidos Concluídos", value: "1,234", trend: "+15%", icon: CheckCircle },
    { label: "Tempo Médio", value: "18min", trend: "-5%", icon: Clock },
  ];

  const kitchens = [
    {
      id: 1,
      restaurant: "McDonald's",
      status: "Online",
      orders: 23,
      avgTime: "12min",
      staff: 8,
      efficiency: "94%"
    },
    {
      id: 2,
      restaurant: "Burger King",
      status: "Online",
      orders: 18,
      avgTime: "15min",
      staff: 6,
      efficiency: "89%"
    },
    {
      id: 3,
      restaurant: "Pizza Hut",
      status: "Offline",
      orders: 0,
      avgTime: "20min",
      staff: 4,
      efficiency: "78%"
    },
  ];

  const activeOrders = [
    {
      id: "ORD-001",
      restaurant: "McDonald's",
      items: ["Big Mac", "Batata Frita", "Coca-Cola"],
      time: "8min",
      status: "Preparando",
      priority: "Normal"
    },
    {
      id: "ORD-002", 
      restaurant: "Pizza Hut",
      items: ["Pizza Margherita", "Refrigerante"],
      time: "25min",
      status: "Forno",
      priority: "Alta"
    },
    {
      id: "ORD-003",
      restaurant: "Burger King",
      items: ["Whopper", "Onion Rings"],
      time: "5min",
      status: "Finalização",
      priority: "Urgente"
    },
  ];

  const kitchenFeatures = [
    {
      name: "Timer Automático",
      description: "Cronômetro para cada pedido",
      enabled: true,
      critical: true
    },
    {
      name: "Notificações Sonoras",
      description: "Alertas sonoros para pedidos",
      enabled: true,
      critical: true
    },
    {
      name: "Impressão Automática",
      description: "Imprimir tickets automaticamente",
      enabled: false,
      critical: false
    },
    {
      name: "Dashboard de Métricas",
      description: "Acompanhar performance em tempo real",
      enabled: true,
      critical: false
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Online": return "default";
      case "Offline": return "destructive";
      case "Preparando": return "secondary";
      case "Forno": return "secondary";
      case "Finalização": return "default";
      default: return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Urgente": return "text-red-500";
      case "Alta": return "text-orange-500";
      case "Normal": return "text-green-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Kitchen App Admin</h1>
          <p className="text-muted-foreground">Gerencie sistema de cozinha dos restaurantes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Monitor className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kitchenStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.trend} vs ontem</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="kitchens" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="kitchens">Cozinhas</TabsTrigger>
          <TabsTrigger value="orders">Pedidos Ativos</TabsTrigger>
          <TabsTrigger value="features">Recursos</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="kitchens" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status das Cozinhas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {kitchens.map((kitchen) => (
                  <Card key={kitchen.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <ChefHat className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{kitchen.restaurant}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{kitchen.orders} pedidos</span>
                              <span>Tempo: {kitchen.avgTime}</span>
                              <span>{kitchen.staff} funcionários</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <Badge variant={getStatusVariant(kitchen.status)}>
                              {kitchen.status}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">
                              Eficiência: {kitchen.efficiency}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">Ver Detalhes</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos em Tempo Real</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium">#{order.id}</h4>
                            <Badge variant={getStatusVariant(order.status)}>
                              {order.status}
                            </Badge>
                            <span className={`text-xs font-medium ${getPriorityColor(order.priority)}`}>
                              {order.priority}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{order.restaurant}</p>
                          <div className="space-y-1">
                            {order.items.map((item, index) => (
                              <span key={index} className="text-sm bg-muted px-2 py-1 rounded mr-2">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{order.time}</div>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline">
                              <Clock className="h-3 w-3 mr-1" />
                              Pausar
                            </Button>
                            <Button size="sm">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Finalizar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recursos do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {kitchenFeatures.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{feature.name}</h4>
                            {feature.critical && (
                              <Badge variant="destructive" className="text-xs">
                                Crítico
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Switch defaultChecked={feature.enabled} />
                          <Button variant="outline" size="sm">
                            <Settings className="h-3 w-3" />
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

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance da Cozinha</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Pedidos/Hora</h4>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-sm text-green-500">+8% vs ontem</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Tempo Médio</h4>
                    <div className="text-2xl font-bold">16min</div>
                    <p className="text-sm text-red-500">+2min vs ontem</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Eficiência</h4>
                    <div className="text-2xl font-bold">91%</div>
                    <p className="text-sm text-green-500">+3% vs ontem</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Pedidos Atrasados</h4>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-sm text-red-500">+4 vs ontem</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações de Atraso</h4>
                    <p className="text-sm text-muted-foreground">Alertar quando pedidos atrasam</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Auto-aceitar Pedidos</h4>
                    <p className="text-sm text-muted-foreground">Aceitar pedidos automaticamente</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Modo Noturno</h4>
                    <p className="text-sm text-muted-foreground">Interface escura durante a noite</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Tempo</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tempo limite para pedidos (min)</label>
                    <Input type="number" defaultValue="30" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Intervalo de atualização (seg)</label>
                    <Input type="number" defaultValue="5" />
                  </div>
                </div>
              </div>

              <Button>Salvar Configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KitchenAppAdmin;