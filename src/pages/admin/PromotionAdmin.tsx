import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Search, Filter, Download, Plus, Eye, Edit, Trash2, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";

const PromotionAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const promotions = [
    { 
      id: 1, 
      name: "Black Friday", 
      type: "Desconto", 
      discount: "30%", 
      startDate: "24/11/2024", 
      endDate: "30/11/2024", 
      status: "Ativa", 
      used: 245, 
      limit: 1000, 
      revenue: "R$ 15.450"
    },
    { 
      id: 2, 
      name: "Frete Grátis", 
      type: "Frete", 
      discount: "100%", 
      startDate: "01/12/2024", 
      endDate: "31/12/2024", 
      status: "Ativa", 
      used: 180, 
      limit: 500, 
      revenue: "R$ 8.200"
    },
    { 
      id: 3, 
      name: "Primeira Compra", 
      type: "Desconto", 
      discount: "15%", 
      startDate: "01/01/2024", 
      endDate: "31/12/2024", 
      status: "Pausada", 
      used: 890, 
      limit: 2000, 
      revenue: "R$ 42.300"
    },
    { 
      id: 4, 
      name: "Combo Família", 
      type: "Bundle", 
      discount: "25%", 
      startDate: "15/11/2024", 
      endDate: "15/01/2025", 
      status: "Agendada", 
      used: 0, 
      limit: 300, 
      revenue: "R$ 0"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativa": return "default";
      case "Pausada": return "secondary";
      case "Agendada": return "outline";
      case "Expirada": return "destructive";
      default: return "secondary";
    }
  };

  const getTypeVariant = (type: string) => {
    switch (type) {
      case "Desconto": return "default";
      case "Frete": return "secondary";
      case "Bundle": return "outline";
      default: return "secondary";
    }
  };

  const filteredPromotions = promotions.filter(promotion =>
    promotion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promotion.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gerenciar Promoções</h1>
          <p className="text-muted-foreground">Controle campanhas e ofertas especiais</p>
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
            Nova Promoção
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Promoções Ativas</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">4 total cadastradas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cupons Utilizados</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.315</div>
            <p className="text-xs text-muted-foreground">+18% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Gerada</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 65.950</div>
            <p className="text-xs text-muted-foreground">+25% crescimento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa Conversão</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5%</div>
            <p className="text-xs text-muted-foreground">+2.1% vs mês anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Promotions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Lista de Promoções</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar promoções..."
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
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Desconto</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Uso</TableHead>
                <TableHead>Receita</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPromotions.map((promotion) => (
                <TableRow key={promotion.id}>
                  <TableCell className="font-medium">#{promotion.id}</TableCell>
                  <TableCell>{promotion.name}</TableCell>
                  <TableCell>
                    <Badge variant={getTypeVariant(promotion.type)}>
                      {promotion.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{promotion.discount}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{promotion.startDate}</div>
                      <div className="text-muted-foreground">até {promotion.endDate}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(promotion.status)}>
                      {promotion.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">{promotion.used}/{promotion.limit}</div>
                      <Progress value={(promotion.used / promotion.limit) * 100} className="h-1" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{promotion.revenue}</TableCell>
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

      {/* Active Promotions Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Promoções Mais Utilizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {promotions.slice(0, 3).map((promotion) => (
                <div key={promotion.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{promotion.name}</p>
                    <p className="text-sm text-muted-foreground">{promotion.used} utilizações</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{promotion.revenue}</p>
                    <Progress value={(promotion.used / promotion.limit) * 100} className="h-2 w-20" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estatísticas do Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">Cupons Criados</p>
                  <p className="text-sm text-muted-foreground">Novas promoções</p>
                </div>
                <div className="text-2xl font-bold">12</div>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">Taxa de Uso</p>
                  <p className="text-sm text-muted-foreground">Conversão média</p>
                </div>
                <div className="text-2xl font-bold">67%</div>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">Economia Média</p>
                  <p className="text-sm text-muted-foreground">Por cliente</p>
                </div>
                <div className="text-2xl font-bold">R$ 35</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PromotionAdmin;