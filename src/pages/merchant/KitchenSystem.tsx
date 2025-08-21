import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle, ChefHat, Timer, Users } from "lucide-react";

const KitchenSystem = () => {
  const orders = [
    { id: "#12345", items: ["2x Big Mac", "1x Batata Grande", "2x Coca-Cola"], time: "5:30", priority: "Normal", station: "Grill", status: "Em preparação" },
    { id: "#12346", items: ["1x Quarteirão", "1x Nuggets", "1x Milkshake"], time: "3:15", priority: "Expresso", station: "Grill", status: "Em preparação" },
    { id: "#12347", items: ["3x McChicken", "2x Batata Média"], time: "2:45", priority: "Normal", station: "Fryer", status: "Pronto" },
    { id: "#12348", items: ["1x Fish Filet", "1x Torta de Maçã"], time: "8:20", priority: "Atrasado", station: "Grill", status: "Pendente" },
  ];

  const stations = [
    { name: "Grill", orders: 8, avgTime: "4:30", status: "Normal" },
    { name: "Fryer", orders: 5, avgTime: "3:15", status: "Normal" },
    { name: "Bebidas", orders: 12, avgTime: "1:30", status: "Rápido" },
    { name: "Sobremesas", orders: 3, avgTime: "2:45", status: "Normal" },
  ];

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "Expresso": return "default";
      case "Atrasado": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Pronto": return "default";
      case "Em preparação": return "secondary";
      case "Pendente": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sistema de Cozinha (KDS)</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            5 Cozinheiros Ativos
          </Badge>
          <Button variant="outline">
            <Timer className="h-4 w-4 mr-2" />
            Pausar Pedidos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos na Fila</CardTitle>
            <ChefHat className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+3 nos últimos 5 min</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6:45</div>
            <p className="text-xs text-muted-foreground">Tempo de preparo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Prontos</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">Aguardando entrega</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Atrasados</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">2</div>
            <p className="text-xs text-muted-foreground">Acima de 10 min</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {stations.map((station) => (
          <Card key={station.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{station.name}</CardTitle>
                <Badge variant={station.status === "Rápido" ? "default" : "secondary"}>
                  {station.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Pedidos:</span>
                  <span className="font-semibold">{station.orders}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tempo Médio:</span>
                  <span className="font-semibold">{station.avgTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {orders.map((order) => (
          <Card key={order.id} className={`${order.priority === "Atrasado" ? "border-red-500" : ""}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{order.id}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant={getPriorityVariant(order.priority)}>
                    {order.priority}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Clock className="h-3 w-3" />
                    {order.time}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Itens:</p>
                <ul className="space-y-1">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-sm font-medium">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{order.station}</Badge>
                <Badge variant={getStatusVariant(order.status)}>
                  {order.status}
                </Badge>
              </div>
              <div className="flex gap-2">
                {order.status === "Pendente" && (
                  <Button size="sm" className="flex-1">Iniciar</Button>
                )}
                {order.status === "Em preparação" && (
                  <Button size="sm" className="flex-1">Finalizar</Button>
                )}
                {order.status === "Pronto" && (
                  <Button size="sm" variant="outline" className="flex-1">Entregue</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KitchenSystem;