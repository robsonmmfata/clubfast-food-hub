import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, XCircle } from "lucide-react";

interface LiveOrdersProps {
  showHeader?: boolean;
}

export const LiveOrders = ({ showHeader = false }: LiveOrdersProps) => {
  const orders = [
    {
      id: "0",
      title: "Pedido Recebido",
      count: 0,
      color: "text-red-500",
      bgColor: "bg-red-50 border-red-200"
    },
    {
      id: "1", 
      title: "Hoje entregue",
      count: 0,
      color: "text-dashboard-green",
      bgColor: "bg-green-50 border-green-200"
    },
    {
      id: "2",
      title: "Vendas de hoje",
      amount: "R$ 0,00",
      color: "text-dashboard-purple",
      bgColor: "bg-purple-50 border-purple-200"
    },
    {
      id: "3",
      title: "Reembolso de hoje", 
      amount: "R$ 0,00",
      color: "text-dashboard-orange",
      bgColor: "bg-orange-50 border-orange-200"
    }
  ];

  const liveOrders = [
    {
      id: "4",
      title: "Novo cliente",
      count: 4,
      color: "text-dashboard-blue",
      bgColor: "bg-blue-50 border-blue-200"
    }
  ];

  if (!showHeader) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {orders.map((item) => (
            <Card key={item.id} className={`${item.bgColor} border-2`}>
              <CardContent className="p-4 text-center">
                <div className={`text-3xl font-bold ${item.color} mb-2`}>
                  {item.count !== undefined ? item.count : item.amount}
                </div>
                <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {liveOrders.map((item) => (
            <Card key={item.id} className={`${item.bgColor} border-2`}>
              <CardContent className="p-4 text-center">
                <div className={`text-3xl font-bold ${item.color} mb-2`}>
                  {item.count}
                </div>
                <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Pedidos em Tempo Real</CardTitle>
        <div className="flex items-center gap-2">
          <Badge className="bg-dashboard-green text-white">3 novos</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            {
              id: "#20130",
              customer: "João Silva",
              items: "2x Big Mac, 1x Batata Grande",
              time: "2 min atrás",
              total: "R$ 34,90",
              status: "novo"
            },
            {
              id: "#20129", 
              customer: "Maria Santos",
              items: "1x McChicken, 1x Coca-Cola",
              time: "5 min atrás", 
              total: "R$ 18,50",
              status: "preparando"
            },
            {
              id: "#20128",
              customer: "Pedro Costa",
              items: "3x Quarteirão, 2x Batata Média",
              time: "8 min atrás",
              total: "R$ 52,70", 
              status: "pronto"
            }
          ].map((order, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-primary">{order.id}</span>
                  <span className="text-sm text-muted-foreground">{order.customer}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{order.items}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {order.time}
                  </span>
                  <span className="font-semibold">{order.total}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {order.status === "novo" && (
                  <>
                    <Button size="sm" className="bg-dashboard-green hover:bg-dashboard-green/90">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Aceitar
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                      <XCircle className="h-4 w-4 mr-1" />
                      Recusar
                    </Button>
                  </>
                )}
                {order.status === "preparando" && (
                  <Badge className="bg-dashboard-orange text-white">Preparando</Badge>
                )}
                {order.status === "pronto" && (
                  <Badge className="bg-dashboard-blue text-white">Pronto</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};