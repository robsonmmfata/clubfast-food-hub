import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Search, Download, Filter, DollarSign, TrendingUp, Calendar, Building } from "lucide-react";

const EarningsAdmin = () => {
  const earnings = [
    { merchant: "McDonald's", revenue: "R$ 45.230,00", commission: "R$ 2.261,50", rate: "5%", orders: 234, growth: "+12%" },
    { merchant: "Burger King", revenue: "R$ 32.100,00", commission: "R$ 1.605,00", rate: "5%", orders: 189, growth: "+8%" },
    { merchant: "Subway", revenue: "R$ 28.450,00", commission: "R$ 1.138,00", rate: "4%", orders: 156, growth: "+15%" },
    { merchant: "Pizza Hut", revenue: "R$ 21.890,00", commission: "R$ 1.094,50", rate: "5%", orders: 123, growth: "-3%" },
  ];

  const monthlyData = [
    { month: "Jan", revenue: "R$ 127.430,00", commission: "R$ 6.371,50" },
    { month: "Fev", revenue: "R$ 134.250,00", commission: "R$ 6.712,50" },
    { month: "Mar", revenue: "R$ 142.180,00", commission: "R$ 7.109,00" },
    { month: "Abr", revenue: "R$ 156.320,00", commission: "R$ 7.816,00" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Ganhos da Plataforma</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Relatório
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Receita Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ 234.560,00</div>
            <p className="text-xs text-muted-foreground">+18% vs mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Comissões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 12.430,00</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Building className="h-4 w-4" />
              Comerciantes Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+3 este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Taxa Crescimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23%</div>
            <p className="text-xs text-muted-foreground">Crescimento mensal</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Ganhos por Comerciante</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar comerciante..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Comerciante</TableHead>
                    <TableHead>Receita</TableHead>
                    <TableHead>Comissão</TableHead>
                    <TableHead>Taxa</TableHead>
                    <TableHead>Pedidos</TableHead>
                    <TableHead>Crescimento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {earnings.map((earning, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{earning.merchant}</TableCell>
                      <TableCell className="font-semibold">{earning.revenue}</TableCell>
                      <TableCell className="font-semibold text-primary">{earning.commission}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{earning.rate}</Badge>
                      </TableCell>
                      <TableCell>{earning.orders}</TableCell>
                      <TableCell>
                        <Badge variant={earning.growth.startsWith('+') ? "default" : "destructive"}>
                          {earning.growth}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Evolução Mensal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{data.month}</span>
                  <span className="text-sm text-primary font-semibold">{data.commission}</span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  Receita: {data.revenue}
                </div>
                <Progress value={((index + 1) * 25)} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Categorias por Comissão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { category: "Fast Food", commission: "R$ 4.230,00", percentage: 34 },
              { category: "Pizzarias", commission: "R$ 3.180,00", percentage: 26 },
              { category: "Lanches", commission: "R$ 2.450,00", percentage: 20 },
              { category: "Brasileira", commission: "R$ 1.890,00", percentage: 15 },
              { category: "Sobremesas", commission: "R$ 680,00", percentage: 5 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-sm font-semibold text-primary">{item.commission}</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métricas de Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">R$ 52,30</div>
                <div className="text-sm text-muted-foreground">Ticket Médio</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-green-600">4.8%</div>
                <div className="text-sm text-muted-foreground">Taxa Média</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">702</div>
                <div className="text-sm text-muted-foreground">Pedidos/Dia</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">R$ 36.8K</div>
                <div className="text-sm text-muted-foreground">GMV Diário</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EarningsAdmin;