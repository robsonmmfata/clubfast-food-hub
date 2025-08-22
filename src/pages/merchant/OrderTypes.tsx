import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2, Package, Clock, Truck, Store } from "lucide-react";

const OrderTypes = () => {
  const orderTypes = [
    { id: 1, name: "Delivery", icon: "🚚", active: true, fee: "R$ 5,00", time: "30-45 min", orders: 234 },
    { id: 2, name: "Retirada", icon: "🏪", active: true, fee: "Grátis", time: "15-20 min", orders: 156 },
    { id: 3, name: "Balcão", icon: "🍽️", active: true, fee: "Grátis", time: "5-10 min", orders: 89 },
    { id: 4, name: "Drive-Thru", icon: "🚗", active: false, fee: "Grátis", time: "10-15 min", orders: 45 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tipos de Pedido</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Tipo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Package className="h-4 w-4" />
              Tipos Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">De 4 configurados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Delivery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">Pedidos hoje</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Store className="h-4 w-4" />
              Retirada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Pedidos hoje</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Tempo Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23 min</div>
            <p className="text-xs text-muted-foreground">Todos os tipos</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configurar Novo Tipo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="typeName">Nome do Tipo</Label>
              <Input id="typeName" placeholder="Ex: Express, VIP, etc." />
            </div>
            <div>
              <Label htmlFor="typeIcon">Ícone (Emoji)</Label>
              <Input id="typeIcon" placeholder="🚚" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="typeFee">Taxa</Label>
                <Input id="typeFee" placeholder="R$ 0,00" />
              </div>
              <div>
                <Label htmlFor="typeTime">Tempo Estimado</Label>
                <Input id="typeTime" placeholder="30 min" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="typeActive">Ativo</Label>
              <Switch id="typeActive" />
            </div>
            <Button className="w-full">Criar Tipo de Pedido</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Tipos Existentes</CardTitle>
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
                  <TableHead>Tipo</TableHead>
                  <TableHead>Taxa</TableHead>
                  <TableHead>Tempo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderTypes.map((type) => (
                  <TableRow key={type.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{type.icon}</span>
                        <span className="font-medium">{type.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{type.fee}</TableCell>
                    <TableCell>{type.time}</TableCell>
                    <TableCell>
                      <Badge variant={type.active ? "default" : "secondary"}>
                        {type.active ? "Ativo" : "Inativo"}
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

export default OrderTypes;