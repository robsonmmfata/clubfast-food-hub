import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText, BarChart3, TrendingUp, Calendar, Filter, DollarSign } from "lucide-react";

const ReportsMerchant = () => {
  const reports = [
    { 
      id: 1, 
      name: "Vendas Diárias", 
      type: "Vendas", 
      period: "Diário", 
      lastGenerated: "2024-01-15 14:30",
      size: "180 KB",
      status: "Pronto"
    },
    { 
      id: 2, 
      name: "Produtos Mais Vendidos", 
      type: "Produtos", 
      period: "Semanal", 
      lastGenerated: "2024-01-14 09:15",
      size: "95 KB",
      status: "Pronto"
    },
    { 
      id: 3, 
      name: "Relatório Financeiro", 
      type: "Financeiro", 
      period: "Mensal", 
      lastGenerated: "2024-01-15 08:00",
      size: "245 KB",
      status: "Processando"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meus Relatórios</h1>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Gerar Relatório
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Vendas Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.340,00</div>
            <p className="text-xs text-muted-foreground">+15% vs ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Pedidos Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+8% vs ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 26,90</div>
            <p className="text-xs text-muted-foreground">+3% vs ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Comissão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 117,00</div>
            <p className="text-xs text-muted-foreground">5% do faturamento</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Relatórios Disponíveis</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrar
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Período</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <p className="text-sm text-muted-foreground">{report.lastGenerated}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.type}</Badge>
                      </TableCell>
                      <TableCell>{report.period}</TableCell>
                      <TableCell>
                        <Badge variant={
                          report.status === "Pronto" ? "default" : 
                          report.status === "Processando" ? "secondary" : "destructive"
                        }>
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" disabled={report.status !== "Pronto"}>
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Rápidos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Vendas de Hoje
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Produtos Mais Vendidos
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Clientes Frequentes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Análise de Horários
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gerar Relatório Personalizado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Tipo</label>
                <select className="w-full p-2 border border-input rounded-md mt-1">
                  <option>Vendas</option>
                  <option>Produtos</option>
                  <option>Clientes</option>
                  <option>Financeiro</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Período</label>
                <select className="w-full p-2 border border-input rounded-md mt-1">
                  <option>Hoje</option>
                  <option>Última semana</option>
                  <option>Último mês</option>
                  <option>Personalizado</option>
                </select>
              </div>
              <Button className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Gerar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estatísticas Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Pedidos esta semana</span>
                <span className="font-medium">234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Produto mais vendido</span>
                <span className="font-medium">Big Mac</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Horário de pico</span>
                <span className="font-medium">12:00-14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Taxa de aprovação</span>
                <span className="font-medium">96.5%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportsMerchant;