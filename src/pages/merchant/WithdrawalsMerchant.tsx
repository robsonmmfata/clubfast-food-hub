import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Plus, Clock, Check, DollarSign } from "lucide-react";

const WithdrawalsMerchant = () => {
  const withdrawals = [
    { id: "#W001", amount: "R$ 2.430,00", method: "PIX", status: "Processando", date: "2024-01-15 14:30", fee: "R$ 2,00" },
    { id: "#W002", amount: "R$ 1.250,00", method: "Transferência", status: "Concluído", date: "2024-01-14 13:15", fee: "R$ 5,00" },
    { id: "#W003", amount: "R$ 890,00", method: "PIX", status: "Pendente", date: "2024-01-13 12:00", fee: "R$ 2,00" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Concluído": return "default";
      case "Processando": return "secondary";
      case "Pendente": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meus Saques</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Solicitar Saque
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Saldo Disponível
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ 8.430,00</div>
            <p className="text-xs text-muted-foreground">Para saque</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Em Processamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.430,00</div>
            <p className="text-xs text-muted-foreground">1 solicitação</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Check className="h-4 w-4" />
              Sacado Este Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.340,00</div>
            <p className="text-xs text-muted-foreground">8 saques</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Próximo Saque</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22/01</div>
            <p className="text-xs text-muted-foreground">Data disponível</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Histórico de Saques</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar saques..." className="pl-8" />
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Taxa</TableHead>
                <TableHead>Líquido</TableHead>
                <TableHead>Método</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data/Hora</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {withdrawals.map((withdrawal) => (
                <TableRow key={withdrawal.id}>
                  <TableCell className="font-medium">{withdrawal.id}</TableCell>
                  <TableCell className="font-semibold">{withdrawal.amount}</TableCell>
                  <TableCell className="text-red-600">{withdrawal.fee}</TableCell>
                  <TableCell className="font-semibold text-primary">
                    R$ {(parseFloat(withdrawal.amount.replace('R$ ', '').replace('.', '').replace(',', '.')) - 
                         parseFloat(withdrawal.fee.replace('R$ ', '').replace(',', '.'))).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell>{withdrawal.method}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(withdrawal.status)}>
                      {withdrawal.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{withdrawal.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default WithdrawalsMerchant;