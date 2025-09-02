import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Smartphone, Utensils, Clock, Search, Plus } from "lucide-react";

const TablesideOrdering = () => {
  const tablesideStats = [
    { title: "Mesas Ativas", value: "24", change: "+8", icon: Utensils },
    { title: "Pedidos QR Code", value: "156", change: "+32%", icon: QrCode },
    { title: "Tempo Médio", value: "3.2min", change: "-0.8min", icon: Clock },
    { title: "Taxa de Uso", value: "78%", change: "+15%", icon: Smartphone },
  ];

  const tables = [
    {
      number: "01",
      status: "Ocupada",
      guests: 4,
      orders: 2,
      total: "R$ 89,50",
      waiter: "Carlos",
      time: "15:30"
    },
    {
      number: "05",
      status: "Pedindo",
      guests: 2,
      orders: 1,
      total: "R$ 45,20",
      waiter: "Ana",
      time: "15:45"
    },
    {
      number: "08",
      status: "Livre",
      guests: 0,
      orders: 0,
      total: "R$ 0,00",
      waiter: "-",
      time: "-"
    },
    {
      number: "12",
      status: "Aguardando",
      guests: 6,
      orders: 3,
      total: "R$ 156,80",
      waiter: "Pedro",
      time: "16:00"
    },
  ];

  const qrCodeOrders = [
    {
      id: "#QR001",
      table: "Mesa 03",
      items: "2x Hambúrguer, 1x Batata",
      status: "Preparando",
      total: "R$ 67,90",
      time: "15:35"
    },
    {
      id: "#QR002",
      table: "Mesa 07",
      items: "1x Pizza, 2x Refrigerante",
      status: "Pronto",
      total: "R$ 45,00",
      time: "15:20"
    },
    {
      id: "#QR003",
      table: "Mesa 15",
      items: "3x Sanduíche, 1x Suco",
      status: "Entregue",
      total: "R$ 89,70",
      time: "15:15"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "ocupada": return "default";
      case "pedindo": return "secondary";
      case "livre": return "outline";
      case "aguardando": return "destructive";
      case "preparando": return "secondary";
      case "pronto": return "default";
      case "entregue": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pedidos na Mesa</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <QrCode className="h-4 w-4 mr-2" />
            Gerar QR Code
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Mesa
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tablesideStats.map((stat, index) => (
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

      <Tabs defaultValue="tables" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tables">Mesas</TabsTrigger>
          <TabsTrigger value="qr-orders">Pedidos QR</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Status das Mesas
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Buscar mesa..." className="pl-10 w-64" />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mesa</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Clientes</TableHead>
                    <TableHead>Pedidos</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Garçom</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tables.map((table) => (
                    <TableRow key={table.number}>
                      <TableCell className="font-medium">Mesa {table.number}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(table.status)}>
                          {table.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{table.guests}</TableCell>
                      <TableCell>{table.orders}</TableCell>
                      <TableCell className="font-medium">{table.total}</TableCell>
                      <TableCell>{table.waiter}</TableCell>
                      <TableCell>{table.time}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <QrCode className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">Ver</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qr-orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos via QR Code</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Mesa</TableHead>
                    <TableHead>Itens</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {qrCodeOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.table}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{order.total}</TableCell>
                      <TableCell>{order.time}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Ver</Button>
                          <Button size="sm" variant="outline">Imprimir</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Número Total de Mesas</label>
                  <Input type="number" defaultValue="30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tempo de Sessão (min)</label>
                  <Input type="number" defaultValue="120" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">URL Base do QR Code</label>
                  <Input defaultValue="https://meurestaurante.com/mesa/" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Taxa de Serviço (%)</label>
                  <Input type="number" defaultValue="10" />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button>Salvar Configurações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TablesideOrdering;