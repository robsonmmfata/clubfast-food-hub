import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QrCode, Smartphone, Utensils, Users, Settings, BarChart3, Eye, Edit, Trash2 } from "lucide-react";

const TablesideOrderingAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const orderingStats = [
    { label: "Mesas Ativas", value: "24", trend: "+12%", icon: Utensils },
    { label: "Pedidos por Mesa", value: "156", trend: "+8%", icon: Smartphone },
    { label: "QR Codes Gerados", value: "89", trend: "+15%", icon: QrCode },
    { label: "Taxa de Conversão", value: "78%", trend: "+5%", icon: BarChart3 },
  ];

  const restaurants = [
    { id: 1, name: "McDonald's", tables: 20, activeOrders: 15, qrCodes: 20, status: "Ativo", revenue: "R$ 2.500" },
    { id: 2, name: "Jollibee", tables: 15, activeOrders: 8, qrCodes: 15, status: "Ativo", revenue: "R$ 1.800" },
    { id: 3, name: "Subway", tables: 12, activeOrders: 5, qrCodes: 12, status: "Inativo", revenue: "R$ 900" },
    { id: 4, name: "Pizza Hut", tables: 18, activeOrders: 12, qrCodes: 18, status: "Ativo", revenue: "R$ 2.200" },
  ];

  const activeTables = [
    { id: 1, restaurant: "McDonald's", table: "Mesa 5", orders: 3, total: "R$ 85,50", status: "Ocupada", time: "15 min" },
    { id: 2, restaurant: "Jollibee", table: "Mesa 2", orders: 1, total: "R$ 32,00", status: "Pedindo", time: "5 min" },
    { id: 3, restaurant: "Pizza Hut", table: "Mesa 8", orders: 2, total: "R$ 67,80", status: "Pagando", time: "8 min" },
    { id: 4, restaurant: "Subway", table: "Mesa 3", orders: 1, total: "R$ 28,90", status: "Ocupada", time: "22 min" },
  ];

  const qrCodes = [
    { id: 1, restaurant: "McDonald's", table: "Mesa 1", generated: "2024-01-15", scans: 24, lastScan: "2 min atrás" },
    { id: 2, restaurant: "Jollibee", table: "Mesa 3", generated: "2024-01-15", scans: 18, lastScan: "5 min atrás" },
    { id: 3, restaurant: "Pizza Hut", table: "Mesa 5", generated: "2024-01-14", scans: 31, lastScan: "1 min atrás" },
    { id: 4, restaurant: "Subway", table: "Mesa 2", generated: "2024-01-14", scans: 15, lastScan: "10 min atrás" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "default";
      case "Ocupada": return "default";
      case "Pedindo": return "secondary";
      case "Pagando": return "outline";
      case "Inativo": return "destructive";
      default: return "secondary";
    }
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Tableside Ordering</h1>
          <p className="text-muted-foreground">Gerencie pedidos por mesa e QR codes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <QrCode className="mr-2 h-4 w-4" />
            Gerar QR Code
          </Button>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Configurar Mesa
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {orderingStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.trend}</p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="restaurants" className="space-y-6">
        <TabsList>
          <TabsTrigger value="restaurants">Restaurantes</TabsTrigger>
          <TabsTrigger value="tables">Mesas Ativas</TabsTrigger>
          <TabsTrigger value="qrcodes">QR Codes</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="restaurants">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Restaurantes com Tableside</CardTitle>
                <Input
                  placeholder="Buscar restaurantes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Restaurante</TableHead>
                    <TableHead>Mesas</TableHead>
                    <TableHead>Pedidos Ativos</TableHead>
                    <TableHead>QR Codes</TableHead>
                    <TableHead>Receita</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRestaurants.map((restaurant) => (
                    <TableRow key={restaurant.id}>
                      <TableCell className="font-medium">{restaurant.name}</TableCell>
                      <TableCell>{restaurant.tables}</TableCell>
                      <TableCell>{restaurant.activeOrders}</TableCell>
                      <TableCell>{restaurant.qrCodes}</TableCell>
                      <TableCell>{restaurant.revenue}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(restaurant.status)}>
                          {restaurant.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <QrCode className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tables">
          <Card>
            <CardHeader>
              <CardTitle>Mesas Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Restaurante</TableHead>
                    <TableHead>Mesa</TableHead>
                    <TableHead>Pedidos</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tempo</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeTables.map((table) => (
                    <TableRow key={table.id}>
                      <TableCell>{table.restaurant}</TableCell>
                      <TableCell className="font-medium">{table.table}</TableCell>
                      <TableCell>{table.orders}</TableCell>
                      <TableCell>{table.total}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(table.status)}>
                          {table.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{table.time}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Smartphone className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qrcodes">
          <Card>
            <CardHeader>
              <CardTitle>QR Codes Gerados</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Restaurante</TableHead>
                    <TableHead>Mesa</TableHead>
                    <TableHead>Gerado em</TableHead>
                    <TableHead>Scans</TableHead>
                    <TableHead>Último Scan</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {qrCodes.map((code) => (
                    <TableRow key={code.id}>
                      <TableCell>{code.restaurant}</TableCell>
                      <TableCell className="font-medium">{code.table}</TableCell>
                      <TableCell>{code.generated}</TableCell>
                      <TableCell>{code.scans}</TableCell>
                      <TableCell>{code.lastScan}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <QrCode className="h-4 w-4" />
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
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Resumo Diário</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Mesas ocupadas</span>
                  <span className="font-semibold">24/45</span>
                </div>
                <div className="flex justify-between">
                  <span>Pedidos por mesa</span>
                  <span className="font-semibold">6.5 média</span>
                </div>
                <div className="flex justify-between">
                  <span>Receita por mesa</span>
                  <span className="font-semibold">R$ 87,30</span>
                </div>
                <div className="flex justify-between">
                  <span>Tempo médio ocupação</span>
                  <span className="font-semibold">45 min</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas de QR Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>QR codes ativos</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex justify-between">
                  <span>Scans hoje</span>
                  <span className="font-semibold">256</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de conversão</span>
                  <span className="font-semibold">78%</span>
                </div>
                <div className="flex justify-between">
                  <span>Tempo médio scan-pedido</span>
                  <span className="font-semibold">3.2 min</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Tableside</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Auto-gerar QR codes</h4>
                  <p className="text-sm text-muted-foreground">Gerar automaticamente QR codes para novas mesas</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Notificações de mesa</h4>
                  <p className="text-sm text-muted-foreground">Notificar quando mesa solicita atendimento</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Pagamento na mesa</h4>
                  <p className="text-sm text-muted-foreground">Permitir pagamento direto pela mesa</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tempo limite para pedido (minutos)</label>
                <Input type="number" placeholder="30" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Taxa de serviço (%)</label>
                <Input type="number" placeholder="10" />
              </div>

              <Button>Salvar Configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TablesideOrderingAdmin;