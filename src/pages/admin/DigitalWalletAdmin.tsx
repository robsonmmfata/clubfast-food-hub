import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wallet, CreditCard, TrendingUp, Users, Settings, Eye, Edit, RefreshCw, Plus, Download } from "lucide-react";

const DigitalWalletAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const walletStats = [
    { label: "Carteiras Ativas", value: "1,245", trend: "+12%", icon: Wallet },
    { label: "Saldo Total", value: "R$ 87,450", trend: "+8%", icon: CreditCard },
    { label: "Transações Hoje", value: "856", trend: "+25%", icon: TrendingUp },
    { label: "Usuários Únicos", value: "892", trend: "+15%", icon: Users },
  ];

  const wallets = [
    { id: 1, user: "João Silva", email: "joao@email.com", balance: "R$ 250,00", transactions: 45, status: "Ativo", lastActivity: "2 min atrás" },
    { id: 2, user: "Maria Santos", email: "maria@email.com", balance: "R$ 180,50", transactions: 32, status: "Ativo", lastActivity: "5 min atrás" },
    { id: 3, user: "Pedro Costa", email: "pedro@email.com", balance: "R$ 0,00", transactions: 8, status: "Bloqueado", lastActivity: "2 dias atrás" },
    { id: 4, user: "Ana Oliveira", email: "ana@email.com", balance: "R$ 95,75", transactions: 28, status: "Ativo", lastActivity: "1 hora atrás" },
    { id: 5, user: "Carlos Lima", email: "carlos@email.com", balance: "R$ 320,00", transactions: 67, status: "Ativo", lastActivity: "10 min atrás" },
  ];

  const transactions = [
    { id: 1, user: "João Silva", type: "Recarga", amount: "+R$ 50,00", restaurant: "-", status: "Concluído", date: "2024-01-15 14:30" },
    { id: 2, user: "Maria Santos", type: "Pagamento", amount: "-R$ 32,50", restaurant: "McDonald's", status: "Concluído", date: "2024-01-15 14:25" },
    { id: 3, user: "Ana Oliveira", type: "Recarga", amount: "+R$ 100,00", restaurant: "-", status: "Pendente", date: "2024-01-15 14:20" },
    { id: 4, user: "Carlos Lima", type: "Pagamento", amount: "-R$ 45,80", restaurant: "Pizza Hut", status: "Concluído", date: "2024-01-15 14:15" },
    { id: 5, user: "Pedro Costa", type: "Estorno", amount: "+R$ 28,90", restaurant: "Subway", status: "Processando", date: "2024-01-15 14:10" },
  ];

  const rechargeOptions = [
    { id: 1, amount: "R$ 10,00", bonus: "0%", popular: false },
    { id: 2, amount: "R$ 25,00", bonus: "4%", popular: false },
    { id: 3, amount: "R$ 50,00", bonus: "8%", popular: true },
    { id: 4, amount: "R$ 100,00", bonus: "12%", popular: false },
    { id: 5, amount: "R$ 200,00", bonus: "15%", popular: false },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "default";
      case "Concluído": return "default";
      case "Pendente": return "secondary";
      case "Processando": return "outline";
      case "Bloqueado": return "destructive";
      default: return "secondary";
    }
  };

  const getTransactionColor = (amount: string) => {
    return amount.startsWith("+") ? "text-green-600" : "text-red-600";
  };

  const filteredWallets = wallets.filter(wallet =>
    wallet.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wallet.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Digital Wallet</h1>
          <p className="text-muted-foreground">Gerencie carteiras digitais e transações</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Promoção
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {walletStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.trend}</p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="wallets" className="space-y-6">
        <TabsList>
          <TabsTrigger value="wallets">Carteiras</TabsTrigger>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="recharge">Opções de Recarga</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="wallets">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Carteiras Digitais</CardTitle>
                <Input
                  placeholder="Buscar usuários..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Saldo</TableHead>
                    <TableHead>Transações</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Última Atividade</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWallets.map((wallet) => (
                    <TableRow key={wallet.id}>
                      <TableCell className="font-medium">{wallet.user}</TableCell>
                      <TableCell>{wallet.email}</TableCell>
                      <TableCell className="font-semibold">{wallet.balance}</TableCell>
                      <TableCell>{wallet.transactions}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(wallet.status)}>
                          {wallet.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{wallet.lastActivity}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                        </div>
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
              <CardTitle>Transações Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Restaurante</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.user}</TableCell>
                      <TableCell className="font-medium">{transaction.type}</TableCell>
                      <TableCell className={getTransactionColor(transaction.amount)}>
                        {transaction.amount}
                      </TableCell>
                      <TableCell>{transaction.restaurant}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recharge">
          <Card>
            <CardHeader>
              <CardTitle>Opções de Recarga</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {rechargeOptions.map((option) => (
                  <Card key={option.id} className={`relative ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                    {option.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        Popular
                      </Badge>
                    )}
                    <CardContent className="p-4 text-center">
                      <h3 className="text-2xl font-bold">{option.amount}</h3>
                      {option.bonus !== "0%" && (
                        <p className="text-sm text-green-600">+{option.bonus} bônus</p>
                      )}
                      <Button className="w-full mt-3" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Nova Opção
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Resumo Financeiro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Total em carteiras</span>
                  <span className="font-semibold">R$ 87.450,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Recargas hoje</span>
                  <span className="font-semibold">R$ 12.340,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pagamentos hoje</span>
                  <span className="font-semibold">R$ 8.950,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de conversão</span>
                  <span className="font-semibold">72%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas de Uso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Usuários ativos</span>
                  <span className="font-semibold">892</span>
                </div>
                <div className="flex justify-between">
                  <span>Transações por usuário</span>
                  <span className="font-semibold">4.2 média</span>
                </div>
                <div className="flex justify-between">
                  <span>Valor médio recarga</span>
                  <span className="font-semibold">R$ 67,80</span>
                </div>
                <div className="flex justify-between">
                  <span>Retenção mensal</span>
                  <span className="font-semibold">85%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Configurações da Carteira</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Recargas automáticas</h4>
                  <p className="text-sm text-muted-foreground">Permitir recargas automáticas quando saldo baixo</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Notificações de saldo</h4>
                  <p className="text-sm text-muted-foreground">Notificar usuários sobre saldo baixo</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Valor mínimo de recarga (R$)</label>
                <Input type="number" placeholder="10" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Valor máximo de recarga (R$)</label>
                <Input type="number" placeholder="500" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Taxa de processamento (%)</label>
                <Input type="number" placeholder="2.5" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Limite diário por carteira (R$)</label>
                <Input type="number" placeholder="1000" />
              </div>

              <Button>Salvar Configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DigitalWalletAdmin;