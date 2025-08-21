import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, Check, X, Clock } from "lucide-react";

const WithdrawalManagement = () => {
  const withdrawals = [
    { id: "#W001", merchant: "McDonald's", amount: "R$ 5.430,00", method: "PIX", status: "Pendente", date: "2024-01-15 14:30", account: "***1234" },
    { id: "#W002", merchant: "Burger King", amount: "R$ 3.250,00", method: "Transferência", status: "Aprovado", date: "2024-01-15 13:15", account: "***5678" },
    { id: "#W003", merchant: "Subway", amount: "R$ 1.890,00", method: "PIX", status: "Processando", date: "2024-01-15 12:00", account: "***9012" },
    { id: "#W004", merchant: "Pizza Hut", amount: "R$ 2.100,00", method: "Transferência", status: "Recusado", date: "2024-01-15 11:45", account: "***3456" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Aprovado": return "default";
      case "Pendente": return "secondary";
      case "Processando": return "outline";
      case "Recusado": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aprovado": return <Check className="h-3 w-3" />;
      case "Pendente": return <Clock className="h-3 w-3" />;
      case "Processando": return <Clock className="h-3 w-3" />;
      case "Recusado": return <X className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Saques</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Saques Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">R$ 45.230,00 em análise</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Saques Aprovados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Processado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 234.560,00</div>
            <p className="text-xs text-muted-foreground">+12% do mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">Taxa de aprovação</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Solicitações de Saque</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar saques..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Comerciante</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Método</TableHead>
                <TableHead>Conta</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data/Hora</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {withdrawals.map((withdrawal) => (
                <TableRow key={withdrawal.id}>
                  <TableCell className="font-medium">{withdrawal.id}</TableCell>
                  <TableCell>{withdrawal.merchant}</TableCell>
                  <TableCell className="font-semibold text-primary">{withdrawal.amount}</TableCell>
                  <TableCell>{withdrawal.method}</TableCell>
                  <TableCell>{withdrawal.account}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(withdrawal.status)} className="flex items-center gap-1 w-fit">
                      {getStatusIcon(withdrawal.status)}
                      {withdrawal.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{withdrawal.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {withdrawal.status === "Pendente" && (
                        <>
                          <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="sm">
                        Ver
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

export default WithdrawalManagement;