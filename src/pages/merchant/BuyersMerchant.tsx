import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, TrendingUp, ShoppingCart, Star, Search, Plus } from "lucide-react";

const BuyersMerchant = () => {
  const buyerStats = [
    { title: "Total Compradores", value: "2,341", change: "+12%", icon: Users },
    { title: "Compradores Ativos", value: "1,890", change: "+8%", icon: TrendingUp },
    { title: "Pedidos Médios/Mês", value: "3.2", change: "+0.5", icon: ShoppingCart },
    { title: "Avaliação Média", value: "4.7", change: "+0.1", icon: Star },
  ];

  const buyers = [
    {
      id: "B001",
      name: "João Silva",
      email: "joao@email.com",
      phone: "(11) 99999-9999",
      orders: 45,
      totalSpent: "R$ 1.250,00",
      lastOrder: "2 dias",
      status: "VIP"
    },
    {
      id: "B002",
      name: "Maria Santos",
      email: "maria@email.com",
      phone: "(11) 88888-8888",
      orders: 23,
      totalSpent: "R$ 680,00",
      lastOrder: "1 semana",
      status: "Regular"
    },
    {
      id: "B003",
      name: "Pedro Costa",
      email: "pedro@email.com",
      phone: "(11) 77777-7777",
      orders: 67,
      totalSpent: "R$ 2.100,00",
      lastOrder: "1 dia",
      status: "VIP"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "vip": return "default";
      case "regular": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Compradores</h1>
        <div className="flex gap-2">
          <Button variant="outline">Exportar</Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Comprador
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {buyerStats.map((stat, index) => (
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Lista de Compradores
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar compradores..." className="pl-10 w-64" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Último Pedido</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {buyers.map((buyer) => (
                <TableRow key={buyer.id}>
                  <TableCell className="font-medium">{buyer.id}</TableCell>
                  <TableCell>{buyer.name}</TableCell>
                  <TableCell>{buyer.email}</TableCell>
                  <TableCell>{buyer.phone}</TableCell>
                  <TableCell>{buyer.orders}</TableCell>
                  <TableCell className="font-medium text-primary">{buyer.totalSpent}</TableCell>
                  <TableCell>{buyer.lastOrder}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(buyer.status)}>
                      {buyer.status}
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
    </div>
  );
};

export default BuyersMerchant;