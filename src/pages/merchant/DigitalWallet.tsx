import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, CreditCard, Smartphone, TrendingUp, Search, Plus } from "lucide-react";

const DigitalWallet = () => {
  const walletStats = [
    { title: "Saldo Total", value: "R$ 12.450,00", change: "+R$ 890", icon: Wallet },
    { title: "Transações Hoje", value: "87", change: "+23%", icon: CreditCard },
    { title: "Usuários Ativos", value: "1,234", change: "+15%", icon: Smartphone },
    { title: "Crescimento", value: "18%", change: "+5%", icon: TrendingUp },
  ];

  const transactions = [
    {
      id: "#TXN001",
      type: "Recarga",
      customer: "João Silva",
      amount: "R$ 100,00",
      method: "PIX",
      status: "Concluída",
      date: "15/01/2024",
      time: "14:30"
    },
    {
      id: "#TXN002",
      type: "Pagamento",
      customer: "Maria Santos",
      amount: "R$ 45,90",
      method: "Carteira",
      status: "Concluída",
      date: "15/01/2024",
      time: "14:25"
    },
    {
      id: "#TXN003",
      type: "Estorno",
      customer: "Pedro Costa",
      amount: "R$ 23,50",
      method: "Carteira",
      status: "Processando",
      date: "15/01/2024",
      time: "14:20"
    },
    {
      id: "#TXN004",
      type: "Recarga",
      customer: "Ana Lima",
      amount: "R$ 200,00",
      method: "Cartão",
      status: "Concluída",
      date: "15/01/2024",
      time: "14:15"
    },
  ];

  const walletUsers = [
    {
      id: "U001",
      name: "João Silva",
      email: "joao@email.com",
      balance: "R$ 89,50",
      lastUsed: "2 horas",
      transactions: 45,
      status: "Ativo"
    },
    {
      id: "U002",
      name: "Maria Santos",
      email: "maria@email.com", 
      balance: "R$ 156,30",
      lastUsed: "1 dia",
      transactions: 32,
      status: "Ativo"
    },
    {
      id: "U003",
      name: "Pedro Costa",
      email: "pedro@email.com",
      balance: "R$ 0,00",
      lastUsed: "1 semana",
      transactions: 12,
      status: "Inativo"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "concluída": return "default";
      case "processando": return "secondary";
      case "cancelada": return "destructive";
      case "ativo": return "default";
      case "inativo": return "secondary";
      default: return "outline";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "recarga": return "text-green-600";
      case "pagamento": return "text-blue-600";
      case "estorno": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Carteira Digital</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Wallet className="h-4 w-4 mr-2" />
            Relatório
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
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
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Transações da Carteira
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Buscar transação..." className="pl-10 w-64" />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>
                        <span className={getTypeColor(transaction.type)}>
                          {transaction.type}
                        </span>
                      </TableCell>
                      <TableCell>{transaction.customer}</TableCell>
                      <TableCell className="font-medium">{transaction.amount}</TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm">{transaction.date}</p>
                          <p className="text-xs text-muted-foreground">{transaction.time}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Ver</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Usuários da Carteira</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Saldo</TableHead>
                    <TableHead>Último Uso</TableHead>
                    <TableHead>Transações</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {walletUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell className="font-medium text-primary">{user.balance}</TableCell>
                      <TableCell>{user.lastUsed}</TableCell>
                      <TableCell>{user.transactions}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(user.status)}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Ver</Button>
                          <Button size="sm" variant="outline">Editar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações da Carteira</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Valor Mínimo de Recarga</label>
                  <Input type="number" defaultValue="10.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Valor Máximo de Recarga</label>
                  <Input type="number" defaultValue="1000.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Taxa de Recarga (%)</label>
                  <Input type="number" defaultValue="2.5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Bônus de Recarga (%)</label>
                  <Input type="number" defaultValue="5.0" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Métodos de Pagamento Aceitos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "PIX", enabled: true },
                    { name: "Cartão de Crédito", enabled: true },
                    { name: "Cartão de Débito", enabled: true },
                    { name: "Boleto Bancário", enabled: false },
                    { name: "PayPal", enabled: false },
                    { name: "Apple Pay", enabled: true },
                  ].map((method, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <span className="text-sm">{method.name}</span>
                      <Badge variant={method.enabled ? "default" : "secondary"}>
                        {method.enabled ? "Ativo" : "Inativo"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Salvar Configurações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DigitalWallet;