import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText, BarChart3, TrendingUp, Calendar, Filter } from "lucide-react";

const ReportsAdmin = () => {
  const reports = [
    { 
      id: 1, 
      name: "Vendas por Comerciante", 
      type: "Vendas", 
      period: "Mensal", 
      lastGenerated: "2024-01-15 14:30",
      size: "2.4 MB",
      status: "Pronto"
    },
    { 
      id: 2, 
      name: "Transações Financeiras", 
      type: "Financeiro", 
      period: "Semanal", 
      lastGenerated: "2024-01-14 09:15",
      size: "1.8 MB",
      status: "Pronto"
    },
    { 
      id: 3, 
      name: "Análise de Usuários", 
      type: "Usuários", 
      period: "Diário", 
      lastGenerated: "2024-01-15 08:00",
      size: "890 KB",
      status: "Processando"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Centro de Relatórios</h1>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Novo Relatório
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Relatórios Gerados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Relatórios Automáticos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Agendados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.248</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Processando</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Em fila</p>
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
                    <TableHead>Última Geração</TableHead>
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
                          <p className="text-sm text-muted-foreground">{report.size}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.type}</Badge>
                      </TableCell>
                      <TableCell>{report.period}</TableCell>
                      <TableCell>{report.lastGenerated}</TableCell>
                      <TableCell>
                        <Badge variant={
                          report.status === "Pronto" ? "default" : 
                          report.status === "Processando" ? "secondary" : "destructive"
                        }>
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" disabled={report.status !== "Pronto"}>
                            <Download className="h-4 w-4" />
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

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gerar Novo Relatório</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Tipo de Relatório</label>
                <select className="w-full p-2 border border-input rounded-md mt-1">
                  <option>Vendas</option>
                  <option>Financeiro</option>
                  <option>Usuários</option>
                  <option>Produtos</option>
                  <option>Comissões</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Período</label>
                <select className="w-full p-2 border border-input rounded-md mt-1">
                  <option>Hoje</option>
                  <option>Últimos 7 dias</option>
                  <option>Últimos 30 dias</option>
                  <option>Este mês</option>
                  <option>Personalizado</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Formato</label>
                <select className="w-full p-2 border border-input rounded-md mt-1">
                  <option>PDF</option>
                  <option>Excel (XLSX)</option>
                  <option>CSV</option>
                </select>
              </div>
              <Button className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Gerar Relatório
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Relatórios Agendados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Vendas Diárias", next: "Amanhã 08:00" },
                { name: "Resumo Semanal", next: "Segunda 09:00" },
                { name: "Financeiro Mensal", next: "01/02 10:00" },
              ].map((scheduled, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{scheduled.name}</p>
                    <p className="text-xs text-muted-foreground">Próximo: {scheduled.next}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportsAdmin;