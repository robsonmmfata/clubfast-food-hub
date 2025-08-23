import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, Eye, Users, ShoppingBag, TrendingUp, Star } from "lucide-react";

const BuyersAdmin = () => {
  const buyers = [
    { 
      id: 1, 
      name: "João Silva", 
      email: "joao.silva@email.com", 
      phone: "+55 11 99999-9999",
      orders: 45, 
      totalSpent: "R$ 2.340,00", 
      avgOrder: "R$ 52,00",
      lastOrder: "2024-01-15",
      status: "VIP",
      city: "São Paulo"
    },
    { 
      id: 2, 
      name: "Maria Santos", 
      email: "maria.santos@email.com", 
      phone: "+55 21 88888-8888",
      orders: 32, 
      totalSpent: "R$ 1.890,00", 
      avgOrder: "R$ 59,00",
      lastOrder: "2024-01-14",
      status: "Premium",
      city: "Rio de Janeiro"
    },
    { 
      id: 3, 
      name: "Pedro Costa", 
      email: "pedro.costa@email.com", 
      phone: "+55 11 77777-7777",
      orders: 18, 
      totalSpent: "R$ 720,00", 
      avgOrder: "R$ 40,00",
      lastOrder: "2024-01-12",
      status: "Regular",
      city: "São Paulo"
    },
    { 
      id: 4, 
      name: "Ana Oliveira", 
      email: "ana.oliveira@email.com", 
      phone: "+55 31 66666-6666",
      orders: 8, 
      totalSpent: "R$ 280,00", 
      avgOrder: "R$ 35,00",
      lastOrder: "2024-01-10",
      status: "Novo",
      city: "Belo Horizonte"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "VIP": return "default";
      case "Premium": return "secondary";
      case "Regular": return "outline";
      case "Novo": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Compradores</h1>
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
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Total de Compradores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.450</div>
            <p className="text-xs text-muted-foreground">+8% do mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Compradores Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.932</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Ticket Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 48,50</div>
            <p className="text-xs text-muted-foreground">+5% vs mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Star className="h-4 w-4" />
              Compradores VIP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">2% do total</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Lista de Compradores</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar compradores..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Ticket Médio</TableHead>
                <TableHead>Último Pedido</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {buyers.map((buyer) => (
                <TableRow key={buyer.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{buyer.name}</p>
                      <p className="text-sm text-muted-foreground">{buyer.city}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{buyer.email}</p>
                      <p className="text-sm text-muted-foreground">{buyer.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{buyer.orders}</TableCell>
                  <TableCell className="font-semibold text-primary">{buyer.totalSpent}</TableCell>
                  <TableCell>{buyer.avgOrder}</TableCell>
                  <TableCell>{buyer.lastOrder}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(buyer.status)}>
                      {buyer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
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

export default BuyersAdmin;