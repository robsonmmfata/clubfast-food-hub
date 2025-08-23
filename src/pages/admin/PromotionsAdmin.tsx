import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Eye, Trash2, Percent, Users, Calendar } from "lucide-react";

const PromotionsAdmin = () => {
  const promotions = [
    { 
      id: 1, 
      name: "Black Friday 2024", 
      type: "Desconto Percentual", 
      discount: "30%", 
      merchants: 25, 
      uses: 1234, 
      status: "Ativo",
      startDate: "2024-11-29",
      endDate: "2024-12-02"
    },
    { 
      id: 2, 
      name: "Primeira Compra", 
      type: "Desconto Fixo", 
      discount: "R$ 10", 
      merchants: 35, 
      uses: 2456, 
      status: "Ativo",
      startDate: "2024-01-01",
      endDate: "2024-12-31"
    },
    { 
      id: 3, 
      name: "Frete Grátis", 
      type: "Frete Grátis", 
      discount: "100%", 
      merchants: 18, 
      uses: 567, 
      status: "Pausado",
      startDate: "2024-01-15",
      endDate: "2024-02-15"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Promoções Globais</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Promoção
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Percent className="h-4 w-4" />
              Promoções Ativas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">De 18 total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Comerciantes Participando
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">De 35 total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Usos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.432</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Economia Gerada</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.670,00</div>
            <p className="text-xs text-muted-foreground">Para clientes</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Promoções Globais</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar promoções..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Desconto</TableHead>
                <TableHead>Comerciantes</TableHead>
                <TableHead>Usos</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promotions.map((promo) => (
                <TableRow key={promo.id}>
                  <TableCell className="font-medium">{promo.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{promo.type}</Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-primary">{promo.discount}</TableCell>
                  <TableCell>{promo.merchants}</TableCell>
                  <TableCell>{promo.uses}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{promo.startDate}</div>
                      <div className="text-muted-foreground">{promo.endDate}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      promo.status === "Ativo" ? "default" : 
                      promo.status === "Pausado" ? "secondary" : "destructive"
                    }>
                      {promo.status}
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
    </div>
  );
};

export default PromotionsAdmin;