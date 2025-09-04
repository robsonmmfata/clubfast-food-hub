import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, MapPin, Clock, Users, Settings, AlertCircle, CheckCircle, Navigation } from "lucide-react";

const DeliveryManagementAdmin = () => {
  const deliveryStats = [
    { label: "Entregadores Ativos", value: "127", trend: "+5%", icon: Users },
    { label: "Entregas em Andamento", value: "89", trend: "+12%", icon: Truck },
    { label: "Tempo Médio", value: "32min", trend: "-8%", icon: Clock },
    { label: "Taxa de Sucesso", value: "96.8%", trend: "+2%", icon: CheckCircle },
  ];

  const deliveryPersons = [
    {
      id: 1,
      name: "João Silva",
      status: "Online",
      location: "Centro",
      orders: 12,
      rating: 4.9,
      vehicle: "Moto"
    },
    {
      id: 2,
      name: "Maria Santos",
      status: "Ocupado",
      location: "Zona Sul",
      orders: 18,
      rating: 4.7,
      vehicle: "Bicicleta"
    },
    {
      id: 3,
      name: "Pedro Costa",
      status: "Offline",
      location: "Zona Norte",
      orders: 8,
      rating: 4.5,
      vehicle: "Carro"
    },
  ];

  const activeDeliveries = [
    {
      id: "DEL-001",
      deliveryPerson: "João Silva",
      restaurant: "McDonald's",
      customer: "Ana Rodrigues",
      pickup: "Rua A, 123",
      delivery: "Rua B, 456",
      status: "A caminho",
      estimatedTime: "15min"
    },
    {
      id: "DEL-002",
      deliveryPerson: "Maria Santos",
      restaurant: "Pizza Hut",
      customer: "Carlos Lima",
      pickup: "Av. Principal, 789",
      delivery: "Rua C, 321",
      status: "Coletando",
      estimatedTime: "8min"
    },
  ];

  const zones = [
    { id: 1, name: "Centro", fee: "R$ 5,00", radius: "5km", active: true },
    { id: 2, name: "Zona Sul", fee: "R$ 7,00", radius: "8km", active: true },
    { id: 3, name: "Zona Norte", fee: "R$ 6,00", radius: "7km", active: false },
    { id: 4, name: "Zona Oeste", fee: "R$ 8,00", radius: "10km", active: true },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Online": return "default";
      case "Ocupado": return "secondary";
      case "Offline": return "destructive";
      case "A caminho": return "default";
      case "Coletando": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Delivery Management</h1>
          <p className="text-muted-foreground">Gerencie entregas e entregadores</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-2" />
            Mapa
          </Button>
          <Button size="sm">
            <Users className="h-4 w-4 mr-2" />
            Novo Entregador
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {deliveryStats.map((stat, index) => (
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

      <Tabs defaultValue="deliveries" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="deliveries">Entregas Ativas</TabsTrigger>
          <TabsTrigger value="drivers">Entregadores</TabsTrigger>
          <TabsTrigger value="zones">Zonas</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="deliveries" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Entregas em Tempo Real</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeDeliveries.map((delivery) => (
                  <Card key={delivery.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium">#{delivery.id}</h4>
                            <Badge variant={getStatusVariant(delivery.status)}>
                              {delivery.status}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Users className="h-3 w-3" />
                              <span>{delivery.deliveryPerson}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3 w-3" />
                              <span>Coleta: {delivery.pickup}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Navigation className="h-3 w-3" />
                              <span>Entrega: {delivery.delivery}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{delivery.estimatedTime}</div>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline">Rastrear</Button>
                            <Button size="sm">Contatar</Button>
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

        <TabsContent value="drivers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Entregadores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deliveryPersons.map((driver) => (
                  <Card key={driver.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Truck className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{driver.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{driver.vehicle}</span>
                              <span>{driver.location}</span>
                              <span>⭐ {driver.rating}</span>
                              <span>{driver.orders} entregas</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={getStatusVariant(driver.status)}>
                            {driver.status}
                          </Badge>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Perfil</Button>
                            <Button variant="outline" size="sm">Contatar</Button>
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

        <TabsContent value="zones" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Zonas de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {zones.map((zone) => (
                  <Card key={zone.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{zone.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Taxa: {zone.fee}</span>
                            <span>Raio: {zone.radius}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={zone.active ? "default" : "secondary"}>
                            {zone.active ? "Ativa" : "Inativa"}
                          </Badge>
                          <Switch defaultChecked={zone.active} />
                          <Button variant="outline" size="sm">Editar</Button>
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
              <CardTitle>Analytics de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Entregas/Dia</h4>
                    <div className="text-2xl font-bold">234</div>
                    <p className="text-sm text-green-500">+12% vs ontem</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Receita Entrega</h4>
                    <div className="text-2xl font-bold">R$ 1.2K</div>
                    <p className="text-sm text-green-500">+8% vs ontem</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Avaliação Média</h4>
                    <div className="text-2xl font-bold">4.8</div>
                    <p className="text-sm text-green-500">+0.1 vs ontem</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Entregas Atrasadas</h4>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-sm text-red-500">+2 vs ontem</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Entrega</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Rastreamento GPS</h4>
                    <p className="text-sm text-muted-foreground">Rastrear entregadores em tempo real</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Auto-aceitar Entregas</h4>
                    <p className="text-sm text-muted-foreground">Aceitar automaticamente por proximidade</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações SMS</h4>
                    <p className="text-sm text-muted-foreground">Enviar SMS sobre status da entrega</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Tempo</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tempo máximo de entrega (min)</label>
                    <Input type="number" defaultValue="45" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Taxa base de entrega (R$)</label>
                    <Input type="number" defaultValue="5.00" step="0.01" />
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

export default DeliveryManagementAdmin;