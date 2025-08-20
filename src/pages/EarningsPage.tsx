import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, DollarSign, ShoppingBag, Users, Download, Calendar, ArrowUp, ArrowDown } from "lucide-react";

const EarningsPage = () => {
  const earningsData = [
    { date: "01/08", revenue: 1250, orders: 45, commission: 62.5 },
    { date: "02/08", revenue: 1420, orders: 52, commission: 71.0 },
    { date: "03/08", revenue: 980, orders: 38, commission: 49.0 },
    { date: "04/08", revenue: 1680, orders: 61, commission: 84.0 },
    { date: "05/08", revenue: 2100, orders: 78, commission: 105.0 },
    { date: "06/08", revenue: 1890, orders: 69, commission: 94.5 },
    { date: "07/08", revenue: 2250, orders: 82, commission: 112.5 }
  ];

  const paymentMethodsData = [
    { name: "PIX", value: 45, color: "#10b981" },
    { name: "Cartão", value: 35, color: "#3b82f6" },
    { name: "Dinheiro", value: 20, color: "#f59e0b" }
  ];

  const withdrawals = [
    { id: "WTH-001", date: "18/08/2024", amount: 1250.00, status: "Aprovado", method: "PIX", processedDate: "19/08/2024" },
    { id: "WTH-002", date: "15/08/2024", amount: 890.50, status: "Processando", method: "Transferência", processedDate: "-" },
    { id: "WTH-003", date: "12/08/2024", amount: 2100.00, status: "Aprovado", method: "PIX", processedDate: "13/08/2024" },
    { id: "WTH-004", date: "08/08/2024", amount: 750.30, status: "Rejeitado", method: "PIX", processedDate: "-" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "aprovado": return "bg-dashboard-green";
      case "processando": return "bg-yellow-500";
      case "rejeitado": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const totalRevenue = earningsData.reduce((sum, item) => sum + item.revenue, 0);
  const totalOrders = earningsData.reduce((sum, item) => sum + item.orders, 0);
  const totalCommission = earningsData.reduce((sum, item) => sum + item.commission, 0);
  const avgOrderValue = totalRevenue / totalOrders;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Ganhos e Receitas</h1>
          <p className="text-muted-foreground">Acompanhe seus ganhos e performance financeira</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Período
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold">R$ {totalRevenue.toFixed(2)}</p>
                <div className="flex items-center gap-1 text-sm text-dashboard-green">
                  <ArrowUp className="h-3 w-3" />
                  <span>+12.5%</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-dashboard-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Pedidos</p>
                <p className="text-2xl font-bold">{totalOrders}</p>
                <div className="flex items-center gap-1 text-sm text-dashboard-green">
                  <ArrowUp className="h-3 w-3" />
                  <span>+8.2%</span>
                </div>
              </div>
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ticket Médio</p>
                <p className="text-2xl font-bold">R$ {avgOrderValue.toFixed(2)}</p>
                <div className="flex items-center gap-1 text-sm text-red-500">
                  <ArrowDown className="h-3 w-3" />
                  <span>-2.1%</span>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Comissão Paga</p>
                <p className="text-2xl font-bold">R$ {totalCommission.toFixed(2)}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>5% sobre vendas</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="withdrawals">Saques</TabsTrigger>
          <TabsTrigger value="analytics">Análises</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Receita dos Últimos 7 Dias</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métodos de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={paymentMethodsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {paymentMethodsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 mt-4">
                  {paymentMethodsData.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded" 
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-sm">{entry.name} ({entry.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tendência de Pedidos vs Receita</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="orders" stroke="hsl(var(--dashboard-green))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withdrawals">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Histórico de Saques</CardTitle>
                <Button>
                  Solicitar Saque
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Data Solicitação</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data Processamento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {withdrawals.map((withdrawal) => (
                    <TableRow key={withdrawal.id}>
                      <TableCell className="font-medium">{withdrawal.id}</TableCell>
                      <TableCell>{withdrawal.date}</TableCell>
                      <TableCell>R$ {withdrawal.amount.toFixed(2)}</TableCell>
                      <TableCell>{withdrawal.method}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(withdrawal.status)}>
                          {withdrawal.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{withdrawal.processedDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Mensal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Receita deste mês</span>
                    <span className="font-semibold">R$ 18.450,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Meta mensal</span>
                    <span className="font-semibold">R$ 20.000,00</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '92.25%' }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">92% da meta atingida</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Horários de Vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: "19:00 - 20:00", orders: 24, revenue: "R$ 1.280,00" },
                    { time: "12:00 - 13:00", orders: 22, revenue: "R$ 1.150,00" },
                    { time: "20:00 - 21:00", orders: 18, revenue: "R$ 980,00" },
                    { time: "18:00 - 19:00", orders: 16, revenue: "R$ 850,00" }
                  ].map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{slot.time}</p>
                        <p className="text-sm text-muted-foreground">{slot.orders} pedidos</p>
                      </div>
                      <p className="font-semibold text-primary">{slot.revenue}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EarningsPage;