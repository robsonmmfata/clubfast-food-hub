import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Filter, FileText, Eye, Send, DollarSign } from "lucide-react";

const InvoiceAdmin = () => {
  const invoices = [
    { 
      id: "INV-2024-001", 
      merchant: "McDonald's Centro", 
      amount: "R$ 2.430,00", 
      commission: "R$ 121,50", 
      period: "Jan 2024", 
      issued: "2024-02-01", 
      due: "2024-02-15", 
      status: "Paga" 
    },
    { 
      id: "INV-2024-002", 
      merchant: "Burger King Shopping", 
      amount: "R$ 1.890,00", 
      commission: "R$ 94,50", 
      period: "Jan 2024", 
      issued: "2024-02-01", 
      due: "2024-02-15", 
      status: "Pendente" 
    },
    { 
      id: "INV-2024-003", 
      merchant: "Pizza Hut Paulista", 
      amount: "R$ 3.210,00", 
      commission: "R$ 160,50", 
      period: "Jan 2024", 
      issued: "2024-02-01", 
      due: "2024-02-15", 
      status: "Vencida" 
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Paga": return "default";
      case "Pendente": return "secondary";
      case "Vencida": return "destructive";
      case "Cancelada": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Faturas</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Gerar Faturas
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Total Faturado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ 45.670,00</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Comissões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 2.283,50</div>
            <p className="text-xs text-muted-foreground">Recebidas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">12</div>
            <p className="text-xs text-muted-foreground">R$ 8.920,00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Vencidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-muted-foreground">R$ 1.580,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lista de Faturas</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar faturas..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Comerciante</TableHead>
                    <TableHead>Período</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Comissão</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.merchant}</TableCell>
                      <TableCell>{invoice.period}</TableCell>
                      <TableCell className="font-semibold">{invoice.amount}</TableCell>
                      <TableCell className="font-semibold text-primary">{invoice.commission}</TableCell>
                      <TableCell>{invoice.due}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(invoice.status)}>
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          {invoice.status === "Pendente" && (
                            <Button variant="ghost" size="sm">
                              <Send className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
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
            <CardTitle>Resumo Mensal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Faturamento</span>
                <span className="text-lg font-bold text-primary">R$ 45.6K</span>
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Pagas</span>
                <span className="text-lg font-bold text-green-600">23</span>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Pendentes</span>
                <span className="text-lg font-bold text-yellow-600">12</span>
              </div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Vencidas</span>
                <span className="text-lg font-bold text-red-600">3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Comerciantes por Faturamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "McDonald's Centro", amount: "R$ 12.430,00", commission: "R$ 621,50" },
              { name: "Burger King Shopping", amount: "R$ 8.920,00", commission: "R$ 446,00" },
              { name: "Pizza Hut Paulista", amount: "R$ 7.650,00", commission: "R$ 382,50" },
              { name: "Subway Vila Madalena", amount: "R$ 6.180,00", commission: "R$ 309,00" },
            ].map((merchant, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">{merchant.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Comissão: {merchant.commission}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{merchant.amount}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estatísticas de Cobrança</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">Taxa Pagamento</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">12 dias</div>
                <div className="text-sm text-muted-foreground">Prazo Médio</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-green-600">R$ 2.8K</div>
                <div className="text-sm text-muted-foreground">Média Mensal</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">5.2%</div>
                <div className="text-sm text-muted-foreground">Taxa Comissão</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvoiceAdmin;