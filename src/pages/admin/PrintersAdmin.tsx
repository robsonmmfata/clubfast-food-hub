import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Printer, Wifi, Bluetooth, Usb, Settings, Plus, Power, AlertTriangle, CheckCircle } from "lucide-react";

const PrintersAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const printerStats = [
    { label: "Impressoras Ativas", value: "87", trend: "+5", icon: Printer },
    { label: "Taxa de Sucesso", value: "98.5%", trend: "+2.1%", icon: CheckCircle },
    { label: "Impressões/Dia", value: "2,847", trend: "+156", icon: Printer },
    { label: "Impressoras Offline", value: "3", trend: "-2", icon: AlertTriangle },
  ];

  const printers = [
    { 
      id: 1, 
      name: "Impressora Cozinha #1", 
      model: "Epson TM-T20II", 
      restaurant: "McDonald's", 
      type: "Térmica", 
      connection: "Ethernet", 
      status: "Online", 
      location: "Cozinha Principal",
      prints: 234
    },
    { 
      id: 2, 
      name: "Impressora Balcão #1", 
      model: "HP LaserJet Pro", 
      restaurant: "Burger King", 
      type: "Laser", 
      connection: "WiFi", 
      status: "Online", 
      location: "Balcão",
      prints: 156
    },
    { 
      id: 3, 
      name: "Impressora Delivery", 
      model: "Brother QL-820NWB", 
      restaurant: "Pizza Hut", 
      type: "Etiqueta", 
      connection: "USB", 
      status: "Offline", 
      location: "Área Delivery",
      prints: 89
    },
    { 
      id: 4, 
      name: "Impressora Fiscal", 
      model: "Bematech MP-4200 TH", 
      restaurant: "KFC", 
      type: "Fiscal", 
      connection: "Ethernet", 
      status: "Manutenção", 
      location: "Caixa",
      prints: 345
    },
  ];

  const printerTemplates = [
    { id: 1, name: "Pedido Cozinha", type: "Cozinha", active: true, restaurants: 45 },
    { id: 2, name: "Recibo Cliente", type: "Balcão", active: true, restaurants: 67 },
    { id: 3, name: "Etiqueta Delivery", type: "Delivery", active: true, restaurants: 34 },
    { id: 4, name: "Cupom Fiscal", type: "Fiscal", active: false, restaurants: 23 },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Online": return "default";
      case "Offline": return "destructive";
      case "Manutenção": return "secondary";
      default: return "secondary";
    }
  };

  const getConnectionIcon = (connection: string) => {
    switch (connection) {
      case "WiFi": return <Wifi className="h-4 w-4" />;
      case "Bluetooth": return <Bluetooth className="h-4 w-4" />;
      case "USB": return <Usb className="h-4 w-4" />;
      case "Ethernet": return <Settings className="h-4 w-4" />;
      default: return <Settings className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Gerenciamento de Impressoras</h1>
          <p className="text-muted-foreground">Configure e monitore impressoras dos restaurantes</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Impressora
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {printerStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-xs ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend}
                  </p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="printers" className="space-y-6">
        <TabsList>
          <TabsTrigger value="printers">Impressoras</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
          <TabsTrigger value="logs">Logs de Impressão</TabsTrigger>
        </TabsList>

        <TabsContent value="printers">
          <Card>
            <CardHeader>
              <CardTitle>Impressoras Conectadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input
                  placeholder="Buscar impressoras..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Modelo</TableHead>
                    <TableHead>Restaurante</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Conexão</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Localização</TableHead>
                    <TableHead>Impressões</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {printers.map((printer) => (
                    <TableRow key={printer.id}>
                      <TableCell className="font-medium">{printer.name}</TableCell>
                      <TableCell>{printer.model}</TableCell>
                      <TableCell>{printer.restaurant}</TableCell>
                      <TableCell>{printer.type}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getConnectionIcon(printer.connection)}
                          <span className="text-sm">{printer.connection}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(printer.status)}>
                          {printer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{printer.location}</TableCell>
                      <TableCell>{printer.prints}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Power className="h-4 w-4" />
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

        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Templates de Impressão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {printerTemplates.map((template) => (
                  <Card key={template.id} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">{template.name}</h3>
                        <Switch checked={template.active} />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Tipo: {template.type}</p>
                        <p className="text-sm text-muted-foreground">
                          Usado em {template.restaurants} restaurantes
                        </p>
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm">Editar</Button>
                          <Button variant="outline" size="sm">Preview</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Globais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-retry impressão</p>
                    <p className="text-sm text-muted-foreground">Tentar novamente em caso de falha</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificações de falha</p>
                    <p className="text-sm text-muted-foreground">Alertar sobre impressoras offline</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Logs detalhados</p>
                    <p className="text-sm text-muted-foreground">Registrar todas as impressões</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações de Papel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Tamanho padrão</label>
                  <Input defaultValue="80mm" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Margem (mm)</label>
                  <Input defaultValue="5" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Corte automático</label>
                  <Switch defaultChecked className="mt-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Logs de Impressão</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Impressora</TableHead>
                    <TableHead>Restaurante</TableHead>
                    <TableHead>Documento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Erro</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-01-15 14:30:25</TableCell>
                    <TableCell>Impressora Cozinha #1</TableCell>
                    <TableCell>McDonald's</TableCell>
                    <TableCell>Pedido #12345</TableCell>
                    <TableCell><Badge variant="default">Sucesso</Badge></TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-01-15 14:28:15</TableCell>
                    <TableCell>Impressora Delivery</TableCell>
                    <TableCell>Pizza Hut</TableCell>
                    <TableCell>Etiqueta #67890</TableCell>
                    <TableCell><Badge variant="destructive">Falha</Badge></TableCell>
                    <TableCell>Impressora offline</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PrintersAdmin;