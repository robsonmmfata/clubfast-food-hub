import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, MapPin, Clock, DollarSign, User, Search } from "lucide-react";

const DeliveryManagement = () => {
  const deliveryStats = [
    { title: "Entregas Hoje", value: "47", change: "+15%", icon: Truck },
    { title: "Tempo Médio", value: "28min", change: "-3min", icon: Clock },
    { title: "Taxa de Entrega", value: "R$ 8,50", change: "0%", icon: DollarSign },
    { title: "Entregadores Ativos", value: "12", change: "+2", icon: User },
  ];

  const deliveries = [
    {
      id: "#DEL001",
      customer: "João Silva",
      address: "Rua das Flores, 123",
      status: "Em Trânsito",
      deliveryGuy: "Carlos",
      time: "15:30",
      value: "R$ 45,90"
    },
    {
      id: "#DEL002", 
      customer: "Maria Santos",
      address: "Av. Principal, 456",
      status: "Entregue",
      deliveryGuy: "Pedro",
      time: "15:15",
      value: "R$ 32,50"
    },
    {
      id: "#DEL003",
      customer: "Ana Costa",
      address: "Rua Central, 789",
      status: "Preparando",
      deliveryGuy: "-",
      time: "15:45",
      value: "R$ 67,80"
    },
  ];

  const deliveryGuys = [
    { name: "Carlos Silva", status: "Ativo", deliveries: 8, rating: 4.9 },
    { name: "Pedro Santos", status: "Ativo", deliveries: 6, rating: 4.7 },
    { name: "João Costa", status: "Pausado", deliveries: 5, rating: 4.8 },
    { name: "Maria Lima", status: "Ativo", deliveries: 7, rating: 5.0 },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "entregue": return "default";
      case "em trânsito": return "secondary";
      case "preparando": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciamento de Delivery</h1>
        <Button>
          <Truck className="h-4 w-4 mr-2" />
          Nova Entrega
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deliveryStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="deliveries" className="space-y-4">
        <TabsList>
          <TabsTrigger value="deliveries">Entregas</TabsTrigger>
          <TabsTrigger value="delivery-guys">Entregadores</TabsTrigger>
          <TabsTrigger value="zones">Zonas</TabsTrigger>
        </TabsList>

        <TabsContent value="deliveries" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Entregas em Andamento
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Buscar entregas..." className="pl-10 w-64" />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Endereço</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Entregador</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveries.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell className="font-medium">{delivery.id}</TableCell>
                      <TableCell>{delivery.customer}</TableCell>
                      <TableCell>{delivery.address}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(delivery.status)}>
                          {delivery.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{delivery.deliveryGuy}</TableCell>
                      <TableCell>{delivery.time}</TableCell>
                      <TableCell>{delivery.value}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <MapPin className="h-4 w-4" />
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

        <TabsContent value="delivery-guys" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Entregadores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {deliveryGuys.map((guy, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{guy.name}</h3>
                      <Badge variant={guy.status === "Ativo" ? "default" : "secondary"}>
                        {guy.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Entregas: {guy.deliveries}</p>
                    <p className="text-sm text-muted-foreground">Avaliação: ⭐ {guy.rating}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="zones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Zonas de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Centro", radius: "5km", fee: "R$ 8,50", active: true },
                  { name: "Zona Norte", radius: "8km", fee: "R$ 12,00", active: true },
                  { name: "Zona Sul", radius: "6km", fee: "R$ 10,00", active: false },
                ].map((zone, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h3 className="font-medium">{zone.name}</h3>
                      <p className="text-sm text-muted-foreground">Raio: {zone.radius} • Taxa: {zone.fee}</p>
                    </div>
                    <Badge variant={zone.active ? "default" : "secondary"}>
                      {zone.active ? "Ativa" : "Inativa"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeliveryManagement;