import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Download, Filter, Calendar as CalendarIcon, TrendingUp, TrendingDown, Users, ShoppingBag, DollarSign, Clock, Plus } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const ReportsAdmin = () => {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2024, 0, 1),
    to: new Date()
  });

  // Sample data for charts
  const salesData = [
    { month: "Jan", vendas: 45000, pedidos: 1200 },
    { month: "Fev", vendas: 52000, pedidos: 1400 },
    { month: "Mar", vendas: 48000, pedidos: 1300 },
    { month: "Abr", vendas: 61000, pedidos: 1600 },
    { month: "Mai", vendas: 55000, pedidos: 1450 },
    { month: "Jun", vendas: 67000, pedidos: 1750 },
  ];

  const categoryData = [
    { name: "Lanches", value: 35, color: "#3b82f6" },
    { name: "Pizzas", value: 25, color: "#10b981" },
    { name: "Bebidas", value: 20, color: "#f59e0b" },
    { name: "Sobremesas", value: 15, color: "#ef4444" },
    { name: "Outros", value: 5, color: "#8b5cf6" },
  ];

  const topMerchants = [
    { name: "McDonald's", revenue: "R$ 45.230", orders: 1250, growth: "+12%" },
    { name: "Burger King", revenue: "R$ 38.450", orders: 980, growth: "+8%" },
    { name: "Pizza Hut", revenue: "R$ 32.100", orders: 765, growth: "+15%" },
    { name: "KFC", revenue: "R$ 28.900", orders: 654, growth: "+5%" },
    { name: "Subway", revenue: "R$ 25.670", orders: 590, growth: "+3%" },
  ];

  const recentReports = [
    {
      id: 1,
      name: "Relatório Mensal de Vendas",
      type: "Vendas",
      date: "01/06/2024",
      status: "Concluído",
      downloads: 45
    },
    {
      id: 2,
      name: "Análise de Comerciantes",
      type: "Comerciantes",
      date: "28/05/2024",
      status: "Processando",
      downloads: 0
    },
    {
      id: 3,
      name: "Relatório de Transações",
      type: "Financeiro",
      date: "25/05/2024",
      status: "Concluído",
      downloads: 78
    },
  ];

  const kpiData = [
    {
      label: "Receita Total",
      value: "R$ 1.2M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign
    },
    {
      label: "Total de Pedidos",
      value: "8,543",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingBag
    },
    {
      label: "Usuários Ativos",
      value: "3,421",
      change: "+15.1%",
      trend: "up",
      icon: Users
    },
    {
      label: "Tempo Médio",
      value: "28 min",
      change: "-5.2%",
      trend: "down",
      icon: Clock
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Concluído": return "default";
      case "Processando": return "secondary";
      case "Erro": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Relatórios</h1>
          <p className="text-muted-foreground">Análises e relatórios detalhados</p>
        </div>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Período
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={dateRange}
                onSelect={(range) => range?.from && range?.to && setDateRange({ from: range.from, to: range.to })}
                numberOfMonths={2}
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center text-xs">
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={kpi.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {kpi.change}
                </span>
                <span className="text-muted-foreground ml-1">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="merchants">Comerciantes</TabsTrigger>
          <TabsTrigger value="financial">Financeiro</TabsTrigger>
          <TabsTrigger value="custom">Personalizados</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Mês</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="vendas" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pedidos por Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Comerciantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topMerchants.map((merchant, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium">{merchant.name}</p>
                        <p className="text-sm text-muted-foreground">{merchant.orders} pedidos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-medium">{merchant.revenue}</p>
                        <p className="text-sm text-green-500">{merchant.growth}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Relatório de Vendas Detalhado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="vendas" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Resumo do Período</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total de Vendas:</span>
                        <span className="font-medium">R$ 328.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total de Pedidos:</span>
                        <span className="font-medium">8.700</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ticket Médio:</span>
                        <span className="font-medium">R$ 37,70</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Crescimento:</span>
                        <span className="font-medium text-green-500">+12.5%</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar Relatório de Vendas
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="merchants" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Comerciantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os comerciantes</SelectItem>
                      <SelectItem value="active">Apenas ativos</SelectItem>
                      <SelectItem value="inactive">Inativos</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="revenue">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue">Por receita</SelectItem>
                      <SelectItem value="orders">Por pedidos</SelectItem>
                      <SelectItem value="rating">Por avaliação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topMerchants.map((merchant, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{merchant.name}</h4>
                          <Badge variant="default">Ativo</Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Receita:</span>
                            <span className="font-medium">{merchant.revenue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pedidos:</span>
                            <span className="font-medium">{merchant.orders}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Crescimento:</span>
                            <span className="font-medium text-green-500">{merchant.growth}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Financeiros</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Receita Bruta</h4>
                    <div className="text-2xl font-bold">R$ 1.2M</div>
                    <p className="text-sm text-green-500">+12.5% vs mês anterior</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Comissões</h4>
                    <div className="text-2xl font-bold">R$ 60K</div>
                    <p className="text-sm text-green-500">+8.3% vs mês anterior</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Taxa de Conversão</h4>
                    <div className="text-2xl font-bold">3.8%</div>
                    <p className="text-sm text-red-500">-0.2% vs mês anterior</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Relatórios Personalizados</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Relatório
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <Card key={report.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{report.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>Tipo: {report.type}</span>
                            <span>Criado em: {report.date}</span>
                            <span>Downloads: {report.downloads}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={getStatusVariant(report.status)}>
                            {report.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3 mr-1" />
                            Download
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
      </Tabs>
    </div>
  );
};

export default ReportsAdmin;