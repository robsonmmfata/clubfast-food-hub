import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2, Percent, Calendar, Target, Gift } from "lucide-react";

const PromotionsManagement = () => {
  const promotions = [
    { 
      id: 1, 
      name: "Desconto Final de Semana", 
      type: "Percentual", 
      value: "20%", 
      startDate: "2024-01-20", 
      endDate: "2024-01-21", 
      active: true, 
      used: 45, 
      code: "WEEKEND20" 
    },
    { 
      id: 2, 
      name: "Frete Grátis", 
      type: "Frete", 
      value: "100%", 
      startDate: "2024-01-15", 
      endDate: "2024-01-31", 
      active: true, 
      used: 123, 
      code: "FREESHIP" 
    },
    { 
      id: 3, 
      name: "Combo Família", 
      type: "Valor Fixo", 
      value: "R$ 15,00", 
      startDate: "2024-01-10", 
      endDate: "2024-02-10", 
      active: false, 
      used: 78, 
      code: "FAMILIA15" 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Promoções</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Promoção
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Gift className="h-4 w-4" />
              Promoções Ativas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">De 12 criadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4" />
              Usos Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">+12% vs ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Percent className="h-4 w-4" />
              Desconto Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
            <p className="text-xs text-muted-foreground">Aplicado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Economia Gerada</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.340,00</div>
            <p className="text-xs text-muted-foreground">Para clientes</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Criar Nova Promoção</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="promoName">Nome da Promoção</Label>
              <Input id="promoName" placeholder="Ex: Black Friday, Desconto Especial..." />
            </div>
            <div>
              <Label htmlFor="promoCode">Código</Label>
              <Input id="promoCode" placeholder="Ex: BLACKFRIDAY, DESCONTO10" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="promoType">Tipo</Label>
                <select className="w-full p-2 border border-input rounded-md">
                  <option>Percentual</option>
                  <option>Valor Fixo</option>
                  <option>Frete Grátis</option>
                  <option>Produto Grátis</option>
                </select>
              </div>
              <div>
                <Label htmlFor="promoValue">Valor</Label>
                <Input id="promoValue" placeholder="10% ou R$ 50,00" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Data Início</Label>
                <Input id="startDate" type="date" />
              </div>
              <div>
                <Label htmlFor="endDate">Data Fim</Label>
                <Input id="endDate" type="date" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="promoActive">Ativo</Label>
              <Switch id="promoActive" />
            </div>
            <Button className="w-full">Criar Promoção</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Promoções Existentes</CardTitle>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-8" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Código</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {promotions.map((promo) => (
                  <TableRow key={promo.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{promo.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {promo.startDate} - {promo.endDate}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="bg-muted px-2 py-1 rounded text-sm">{promo.code}</code>
                    </TableCell>
                    <TableCell className="font-semibold">{promo.value}</TableCell>
                    <TableCell>
                      <Badge variant={promo.active ? "default" : "secondary"}>
                        {promo.active ? "Ativo" : "Inativo"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
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
    </div>
  );
};

export default PromotionsManagement;