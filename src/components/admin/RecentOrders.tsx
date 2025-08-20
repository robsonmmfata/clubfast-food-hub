import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

export const RecentOrders = () => {
  const orders = [
    {
      id: "#20127",
      restaurant: "McDonald's",
      customer: "Nirmal Ram",
      time: "3 horas atrás",
      amount: "R$ 366,00",
      status: "Pago",
      type: "Pickup",
      paymentStatus: "acepted"
    },
    {
      id: "#20126",
      restaurant: "Jollibee", 
      customer: "Cliente de entrada",
      time: "3 dias atrás",
      amount: "R$ 58,00",
      status: "Pago",
      type: "Cash On delivery",
      paymentStatus: "ready for pickup"
    },
    {
      id: "#20114",
      restaurant: "McDonald's",
      customer: "Jonathan Casanova",
      time: "4 dias atrás", 
      amount: "R$ 30,60",
      status: "Processo",
      type: "Delivery",
      paymentStatus: "delivery failed"
    },
    {
      id: "#20113",
      restaurant: "Panda Express",
      customer: "Suraj Su",
      time: "6 dias atrás",
      amount: "R$ 95,65",
      status: "Pago",
      type: "Pickup",
      paymentStatus: "delivered"
    },
    {
      id: "#20112",
      restaurant: "McDonald's",
      customer: "Muhammad Zakaria",
      time: "6 dias atrás",
      amount: "R$ 42,04",
      status: "Pago",
      type: "Delivery",
      paymentStatus: "delivered"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pago":
        return <Badge className="bg-dashboard-green text-white">Pago</Badge>;
      case "Processo":
        return <Badge variant="secondary">Processo</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "acepted":
        return <Badge className="bg-yellow-500 text-white">acepted</Badge>;
      case "ready for pickup":
        return <Badge className="bg-blue-500 text-white">ready for pickup</Badge>;
      case "delivery failed":
        return <Badge className="bg-red-500 text-white">delivery failed</Badge>;
      case "delivered":
        return <Badge className="bg-dashboard-green text-white">delivered</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Últimos pedidos</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Gerenciamento rápido dos últimos 5 pedidos</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                <div>
                  <p className="font-medium text-primary">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.restaurant}</p>
                </div>
                <div>
                  <p className="font-medium">{order.customer}</p>
                  <p className="text-sm text-muted-foreground">{order.time}</p>
                </div>
                <div>
                  <p className="font-semibold">{order.amount}</p>
                </div>
                <div>
                  {getStatusBadge(order.status)}
                </div>
                <div>
                  <p className="text-sm">{order.type}</p>
                  {getPaymentStatusBadge(order.paymentStatus)}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};