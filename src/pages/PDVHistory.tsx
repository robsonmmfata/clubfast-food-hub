import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Eye, Printer, Calendar, Filter } from "lucide-react";

interface Order {
  id: string;
  date: string;
  time: string;
  customer: string;
  items: number;
  total: number;
  status: "completed" | "cancelled" | "refunded";
  paymentMethod: string;
  orderType: "delivery" | "pickup" | "dinein";
}

const PDVHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("today");

  const orders: Order[] = [
    {
      id: "PDV-2024-001",
      date: "20/08/2024",
      time: "14:30",
      customer: "Walk-in Customer",
      items: 3,
      total: 125.00,
      status: "completed",
      paymentMethod: "Dinheiro",
      orderType: "dinein"
    },
    {
      id: "PDV-2024-002", 
      date: "20/08/2024",
      time: "13:45",
      customer: "João Silva",
      items: 2,
      total: 85.00,
      status: "completed",
      paymentMethod: "Cartão",
      orderType: "pickup"
    },
    {
      id: "PDV-2024-003",
      date: "20/08/2024", 
      time: "12:20",
      customer: "Maria Santos",
      items: 5,
      total: 220.00,
      status: "completed",
      paymentMethod: "PIX",
      orderType: "delivery"
    },
    {
      id: "PDV-2024-004",
      date: "19/08/2024",
      time: "18:15",
      customer: "Pedro Costa",
      items: 1,
      total: 32.00,
      status: "cancelled",
      paymentMethod: "-",
      orderType: "dinein"
    },
    {
      id: "PDV-2024-005",
      date: "19/08/2024",
      time: "16:30",
      customer: "Ana Lima",
      items: 4,
      total: 180.00,
      status: "refunded",
      paymentMethod: "Cartão",
      orderType: "delivery"
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
    let matchesDate = true;
    if (dateFilter === "today") {
      matchesDate = order.date === "20/08/2024";
    } else if (dateFilter === "yesterday") {
      matchesDate = order.date === "19/08/2024";
    }
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-dashboard-green";
      case "cancelled": return "bg-red-500";
      case "refunded": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Concluído";
      case "cancelled": return "Cancelado";
      case "refunded": return "Reembolsado";
      default: return status;
    }
  };

  const getOrderTypeText = (type: string) => {
    switch (type) {
      case "delivery": return "Delivery";
      case "pickup": return "Retirada";
      case "dinein": return "Balcão";
      default: return type;
    }
  };

  const totalRevenue = filteredOrders
    .filter(order => order.status === "completed")
    .reduce((sum, order) => sum + order.total, 0);

  const totalOrders = filteredOrders.length;
  const completedOrders = filteredOrders.filter(order => order.status === "completed").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Histórico de Pedidos PDV</h1>
          <p className="text-muted-foreground">Gerencie o histórico de pedidos do ponto de venda</p>
        </div>
        <Button>
          <Printer className="h-4 w-4 mr-2" />
          Imprimir Relatório
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Pedidos</p>
                <p className="text-2xl font-bold">{totalOrders}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Search className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pedidos Concluídos</p>
                <p className="text-2xl font-bold">{completedOrders}</p>
              </div>
              <div className="h-12 w-12 bg-dashboard-green/10 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-dashboard-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold">R$ {totalRevenue.toFixed(2)}</p>
              </div>
              <div className="h-12 w-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar por ID ou cliente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              {["all", "completed", "cancelled", "refunded"].map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                >
                  {status === "all" ? "Todos" : getStatusText(status)}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              {["today", "yesterday", "week", "month"].map((date) => (
                <Button
                  key={date}
                  variant={dateFilter === date ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDateFilter(date)}
                >
                  {date === "today" ? "Hoje" : 
                   date === "yesterday" ? "Ontem" :
                   date === "week" ? "Semana" : "Mês"}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Pedidos ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID do Pedido</TableHead>
                <TableHead>Data/Hora</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Itens</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Pagamento</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div>{order.date}</div>
                      <div className="text-sm text-muted-foreground">{order.time}</div>
                    </div>
                  </TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {getOrderTypeText(order.orderType)}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell className="font-semibold">R$ {order.total.toFixed(2)}</TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusText(order.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Printer className="h-4 w-4" />
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

export default PDVHistory;