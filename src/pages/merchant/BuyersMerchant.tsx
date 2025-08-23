import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, Eye, Users, ShoppingBag, TrendingUp, Star, MessageCircle } from "lucide-react";

const BuyersMerchant = () => {
  const buyers = [
    { 
      id: 1, 
      name: "João Silva", 
      email: "joao.silva@email.com", 
      phone: "+55 11 99999-9999",
      orders: 15, 
      totalSpent: "R$ 780,00", 
      avgOrder: "R$ 52,00",
      lastOrder: "2024-01-15",
      favorite: "Big Mac",
      frequency: "Semanal"
    },
    { 
      id: 2, 
      name: "Maria Santos", 
      email: "maria.santos@email.com", 
      phone: "+55 21 88888-8888",
      orders: 12, 
      totalSpent: "R$ 590,00", 
      avgOrder: "R$ 49,00",
      lastOrder: "2024-01-14",
      favorite: "Quarterão",
      frequency: "Quinzenal"
    },
    { 
      id: 3, 
      name: "Pedro Costa", 
      email: "pedro.costa@email.com", 
      phone: "+55 11 77777-7777",
      orders: 8, 
      totalSpent: "R$ 320,00", 
      avgOrder: "R$ 40,00",
      lastOrder: "2024-01-12",
      favorite: "McChicken",
      frequency: "Mensal"
    },
    { 
      id: 4, 
      name: "Ana Oliveira", 
      email: "ana.oliveira@email.com", 
      phone: "+55 31 66666-6666",
      orders: 3, 
      totalSpent: "R$ 105,00", 
      avgOrder: "R$ 35,00",
      lastOrder: "2024-01-10",
      favorite: "Nuggets",
      frequency: "Esporádico"
    },
  ];

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case "Semanal": return "default";
      case "Quinzenal": return "secondary";
      case "Mensal": return "outline";
      case "Esporádico": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meus Compradores</h1>
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
            <MessageCircle className="h-4 w-4 mr-2" />
            Enviar Promoção
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Total de Clientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">+12 este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Clientes Recorrentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">38% do total</p>
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
            <div className="text-2xl font-bold">R$ 45,50</div>
            <p className="text-xs text-muted-foreground">+8% vs mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Star className="h-4 w-4" />
              Clientes Fiéis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">19% do total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lista de Clientes</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar clientes..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Pedidos</TableHead>
                    <TableHead>Total Gasto</TableHead>
                    <TableHead>Frequência</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {buyers.map((buyer) => (
                    <TableRow key={buyer.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{buyer.name}</p>
                          <p className="text-sm text-muted-foreground">{buyer.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{buyer.orders}</TableCell>
                      <TableCell className="font-semibold text-primary">{buyer.totalSpent}</TableCell>
                      <TableCell>
                        <Badge variant={getFrequencyColor(buyer.frequency)}>
                          {buyer.frequency}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4" />
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
              <CardTitle>Produtos Mais Pedidos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Big Mac", orders: 45, percentage: 85 },
                { name: "Quarterão", orders: 32, percentage: 60 },
                { name: "McChicken", orders: 28, percentage: 52 },
                { name: "Nuggets", orders: 24, percentage: 45 },
              ].map((product, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{product.name}</span>
                    <span className="text-sm text-muted-foreground">{product.orders} pedidos</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${product.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="h-4 w-4 mr-2" />
                Enviar Cupom de Desconto
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Star className="h-4 w-4 mr-2" />
                Programa de Fidelidade
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Relatório de Clientes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyersMerchant;