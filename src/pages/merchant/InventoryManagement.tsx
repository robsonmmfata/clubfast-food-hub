import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Minus, AlertTriangle, Package, TrendingDown, TrendingUp } from "lucide-react";

const InventoryManagement = () => {
  const inventory = [
    { id: 1, name: "Big Mac", currentStock: 45, minStock: 10, maxStock: 100, unit: "unidades", status: "Normal", lastUpdate: "2024-01-15 14:30" },
    { id: 2, name: "Coca-Cola 350ml", currentStock: 8, minStock: 20, maxStock: 200, unit: "unidades", status: "Baixo", lastUpdate: "2024-01-15 13:15" },
    { id: 3, name: "Batata Frita", currentStock: 0, minStock: 15, maxStock: 80, unit: "unidades", status: "Esgotado", lastUpdate: "2024-01-15 12:00" },
    { id: 4, name: "Hambúrguer de Carne", currentStock: 95, minStock: 30, maxStock: 100, unit: "unidades", status: "Alto", lastUpdate: "2024-01-15 11:45" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Normal": return "default";
      case "Baixo": return "secondary";
      case "Esgotado": return "destructive";
      case "Alto": return "outline";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Baixo": return <TrendingDown className="h-3 w-3" />;
      case "Esgotado": return <AlertTriangle className="h-3 w-3" />;
      case "Alto": return <TrendingUp className="h-3 w-3" />;
      default: return <Package className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Controle de Estoque</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Item
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Itens em Estoque</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Total de itens</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estoque Baixo</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">12</div>
            <p className="text-xs text-muted-foreground">Itens precisando reposição</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Esgotados</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-muted-foreground">Itens sem estoque</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor do Estoque</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 18.450,00</div>
            <p className="text-xs text-muted-foreground">Valor total estimado</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Controle de Estoque</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Estoque Atual</TableHead>
                <TableHead>Estoque Mín/Máx</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Última Atualização</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <span className="text-lg font-semibold">{item.currentStock}</span>
                    <span className="text-sm text-muted-foreground ml-1">{item.unit}</span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <span className="text-red-600">Mín: {item.minStock}</span>
                      <span className="mx-2">|</span>
                      <span className="text-green-600">Máx: {item.maxStock}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(item.status)} className="flex items-center gap-1 w-fit">
                      {getStatusIcon(item.status)}
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.lastUpdate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input 
                        type="number" 
                        defaultValue={item.currentStock} 
                        className="w-16 h-8 text-center"
                      />
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Alertas de Estoque</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-orange-200 rounded-lg bg-orange-50">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-medium">Coca-Cola 350ml</p>
                  <p className="text-sm text-muted-foreground">Estoque baixo: 8 unidades restantes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-red-200 rounded-lg bg-red-50">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div>
                  <p className="font-medium">Batata Frita</p>
                  <p className="text-sm text-muted-foreground">Produto esgotado</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Movimentação Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "Saída", product: "Big Mac", quantity: "-5", time: "14:30" },
                { type: "Entrada", product: "Coca-Cola", quantity: "+50", time: "13:15" },
                { type: "Saída", product: "Batata Frita", quantity: "-15", time: "12:00" },
                { type: "Ajuste", product: "Hambúrguer", quantity: "+10", time: "11:45" },
              ].map((movement, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b">
                  <div>
                    <p className="font-medium">{movement.product}</p>
                    <p className="text-sm text-muted-foreground">{movement.type}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${movement.quantity.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {movement.quantity}
                    </p>
                    <p className="text-sm text-muted-foreground">{movement.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InventoryManagement;