import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Plus, Settings, TrendingUp, DollarSign, Clock } from "lucide-react";

const PaymentGateway = () => {
  const paymentMethods = [
    { id: 1, name: "PIX", status: "Ativo", fee: "0%", provider: "Banco Central" },
    { id: 2, name: "Cartão de Crédito", status: "Ativo", fee: "3.5%", provider: "Stripe" },
    { id: 3, name: "Cartão de Débito", status: "Ativo", fee: "2.8%", provider: "Stripe" },
    { id: 4, name: "PayPal", status: "Inativo", fee: "4.2%", provider: "PayPal" },
    { id: 5, name: "Wise", status: "Configurando", fee: "2.1%", provider: "Wise" },
    { id: 6, name: "Dinheiro", status: "Ativo", fee: "0%", provider: "Local" }
  ];

  const transactions = [
    { id: "TXN-001", date: "20/08/2024", amount: 125.50, method: "PIX", status: "Aprovado", customer: "João Silva" },
    { id: "TXN-002", date: "20/08/2024", amount: 89.30, method: "Cartão", status: "Aprovado", customer: "Maria Santos" },
    { id: "TXN-003", date: "20/08/2024", amount: 45.80, method: "Dinheiro", status: "Aprovado", customer: "Pedro Costa" },
    { id: "TXN-004", date: "19/08/2024", amount: 230.00, method: "PIX", status: "Estornado", customer: "Ana Lima" },
    { id: "TXN-005", date: "19/08/2024", amount: 67.90, method: "Cartão", status: "Pendente", customer: "Carlos Rocha" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "ativo": case "aprovado": return "bg-dashboard-green";
      case "inativo": case "estornado": return "bg-red-500";
      case "configurando": case "pendente": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Gateway de Pagamento</h1>
          <p className="text-muted-foreground">Gerencie métodos de pagamento e transações</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Método
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Hoje</p>
                <p className="text-2xl font-bold">R$ 1.247,60</p>
              </div>
              <DollarSign className="h-8 w-8 text-dashboard-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Transações</p>
                <p className="text-2xl font-bold">87</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxa Média</p>
                <p className="text-2xl font-bold">2.1%</p>
              </div>
              <CreditCard className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pendentes</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="methods" className="space-y-6">
        <TabsList>
          <TabsTrigger value="methods">Métodos de Pagamento</TabsTrigger>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="config">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="methods">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento Configurados</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Método</TableHead>
                    <TableHead>Provedor</TableHead>
                    <TableHead>Taxa</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentMethods.map((method) => (
                    <TableRow key={method.id}>
                      <TableCell className="font-medium">{method.name}</TableCell>
                      <TableCell>{method.provider}</TableCell>
                      <TableCell>{method.fee}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(method.status)}>
                          {method.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Últimas Transações</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.customer}</TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell>R$ {transaction.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="config">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="currency">Moeda Padrão</Label>
                  <Select defaultValue="brl">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brl">Real Brasileiro (BRL)</SelectItem>
                      <SelectItem value="usd">Dólar Americano (USD)</SelectItem>
                      <SelectItem value="eur">Euro (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="min-order">Valor Mínimo do Pedido</Label>
                  <Input id="min-order" type="number" defaultValue="15.00" />
                </div>

                <div>
                  <Label htmlFor="delivery-fee">Taxa de Entrega</Label>
                  <Input id="delivery-fee" type="number" defaultValue="5.00" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações PIX</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="pix-key">Chave PIX</Label>
                  <Input id="pix-key" defaultValue="mcdonalds@email.com" />
                </div>

                <div>
                  <Label htmlFor="pix-name">Nome do Beneficiário</Label>
                  <Input id="pix-name" defaultValue="McDonald's Centro LTDA" />
                </div>

                <div>
                  <Label htmlFor="auto-confirm">Confirmação Automática</Label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutos</SelectItem>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="60">1 hora</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentGateway;