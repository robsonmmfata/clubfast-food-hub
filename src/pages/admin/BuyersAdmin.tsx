import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, Plus, Eye, Edit, Trash2, Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";

const BuyersAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const buyers = [
    { 
      id: 1, 
      name: "Carlos Silva", 
      email: "carlos@email.com", 
      phone: "+55 11 99999-1111", 
      orders: 15, 
      totalSpent: "R$ 890,50", 
      lastOrder: "2 dias atrás", 
      status: "Ativo",
      joinDate: "15/01/2024"
    },
    { 
      id: 2, 
      name: "Maria Santos", 
      email: "maria@email.com", 
      phone: "+55 11 99999-2222", 
      orders: 8, 
      totalSpent: "R$ 420,00", 
      lastOrder: "1 semana atrás", 
      status: "Ativo",
      joinDate: "20/01/2024"
    },
    { 
      id: 3, 
      name: "João Oliveira", 
      email: "joao@email.com", 
      phone: "+55 11 99999-3333", 
      orders: 22, 
      totalSpent: "R$ 1.250,80", 
      lastOrder: "Hoje", 
      status: "VIP",
      joinDate: "10/01/2024"
    },
    { 
      id: 4, 
      name: "Ana Costa", 
      email: "ana@email.com", 
      phone: "+55 11 99999-4444", 
      orders: 3, 
      totalSpent: "R$ 125,90", 
      lastOrder: "2 semanas atrás", 
      status: "Inativo",
      joinDate: "25/01/2024"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "default";
      case "VIP": return "secondary";
      case "Inativo": return "outline";
      default: return "secondary";
    }
  };

  const filteredBuyers = buyers.filter(buyer =>
    buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buyer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gerenciar Compradores</h1>
          <p className="text-muted-foreground">Controle e análise da base de clientes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Novo Cliente
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.942</div>
            <p className="text-xs text-muted-foreground">+245 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.821</div>
            <p className="text-xs text-muted-foreground">76% do total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 89,40</div>
            <p className="text-xs text-muted-foreground">+12% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Médios</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2</div>
            <p className="text-xs text-muted-foreground">Por cliente</p>
          </CardContent>
        </Card>
      </div>

      {/* Buyers Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Lista de Compradores</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar compradores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Último Pedido</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBuyers.map((buyer) => (
                <TableRow key={buyer.id}>
                  <TableCell className="font-medium">#{buyer.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{buyer.name}</p>
                      <p className="text-sm text-muted-foreground">{buyer.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{buyer.phone}</TableCell>
                  <TableCell>{buyer.orders}</TableCell>
                  <TableCell className="font-medium">{buyer.totalSpent}</TableCell>
                  <TableCell>{buyer.lastOrder}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(buyer.status)}>
                      {buyer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Compradores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {buyers.slice(0, 5).map((buyer) => (
                <div key={buyer.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{buyer.name}</p>
                    <p className="text-sm text-muted-foreground">{buyer.orders} pedidos</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{buyer.totalSpent}</p>
                    <Badge variant={getStatusVariant(buyer.status)} className="text-xs">
                      {buyer.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise por Segmento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">Clientes VIP</p>
                  <p className="text-sm text-muted-foreground">Mais de R$ 1.000 gastos</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">124</div>
                  <p className="text-xs text-muted-foreground">1.4% do total</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">Clientes Regulares</p>
                  <p className="text-sm text-muted-foreground">5+ pedidos</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">2.891</div>
                  <p className="text-xs text-muted-foreground">32.3% do total</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">Clientes Novos</p>
                  <p className="text-sm text-muted-foreground">Menos de 3 pedidos</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">5.927</div>
                  <p className="text-xs text-muted-foreground">66.3% do total</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyersAdmin;