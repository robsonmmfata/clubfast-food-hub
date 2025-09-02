import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Printer, CheckCircle, XCircle, Settings, Search, Plus } from "lucide-react";

const PrintersManagement = () => {
  const printerStats = [
    { title: "Impressoras Ativas", value: "8", change: "+2", icon: Printer },
    { title: "Impressões Hoje", value: "345", change: "+12%", icon: CheckCircle },
    { title: "Taxa de Sucesso", value: "98.5%", change: "+1.2%", icon: CheckCircle },
    { title: "Falhas", value: "3", change: "-2", icon: XCircle },
  ];

  const printers = [
    {
      id: "P001",
      name: "Impressora Cozinha",
      model: "Epson TM-T88V",
      location: "Cozinha Principal",
      status: "Online",
      type: "Térmica",
      ip: "192.168.1.101",
      prints: 145,
      errors: 0
    },
    {
      id: "P002",
      name: "Impressora Balcão",
      model: "Bematech MP-4200",
      location: "Balcão PDV",
      status: "Online",
      type: "Térmica",
      ip: "192.168.1.102",
      prints: 89,
      errors: 1
    },
    {
      id: "P003",
      name: "Impressora Bar",
      model: "Daruma DR-800",
      location: "Bar/Bebidas",
      status: "Offline",
      type: "Térmica",
      ip: "192.168.1.103",
      prints: 34,
      errors: 2
    },
    {
      id: "P004",
      name: "Impressora Cupom",
      model: "Elgin i9",
      location: "Caixa Principal",
      status: "Online",
      type: "Cupom Fiscal",
      ip: "192.168.1.104",
      prints: 67,
      errors: 0
    },
  ];

  const printQueues = [
    {
      id: "#Q001",
      printer: "Impressora Cozinha",
      document: "Pedido #1234",
      type: "Comanda",
      status: "Imprimindo",
      time: "14:30",
      pages: 1
    },
    {
      id: "#Q002",
      printer: "Impressora Balcão",
      document: "Pedido #1235",
      type: "Recibo",
      status: "Na Fila",
      time: "14:32",
      pages: 1
    },
    {
      id: "#Q003",
      printer: "Impressora Cupom",
      document: "Venda #5678",
      type: "Cupom Fiscal",
      status: "Concluído",
      time: "14:25",
      pages: 2
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "online": return "default";
      case "offline": return "destructive";
      case "imprimindo": return "secondary";
      case "na fila": return "outline";
      case "concluído": return "default";
      default: return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "online": return "text-green-600";
      case "offline": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciamento de Impressoras</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Impressora
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {printerStats.map((stat, index) => (
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

      <Tabs defaultValue="printers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="printers">Impressoras</TabsTrigger>
          <TabsTrigger value="queue">Fila de Impressão</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="printers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Impressoras Conectadas
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Buscar impressora..." className="pl-10 w-64" />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Modelo</TableHead>
                    <TableHead>Local</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>IP</TableHead>
                    <TableHead>Impressões</TableHead>
                    <TableHead>Erros</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {printers.map((printer) => (
                    <TableRow key={printer.id}>
                      <TableCell className="font-medium">{printer.id}</TableCell>
                      <TableCell>{printer.name}</TableCell>
                      <TableCell>{printer.model}</TableCell>
                      <TableCell>{printer.location}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(printer.status)}>
                          {printer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{printer.type}</TableCell>
                      <TableCell className="font-mono text-sm">{printer.ip}</TableCell>
                      <TableCell>{printer.prints}</TableCell>
                      <TableCell>
                        {printer.errors > 0 ? (
                          <span className="text-red-600">{printer.errors}</span>
                        ) : (
                          <span className="text-green-600">0</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4" />
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

        <TabsContent value="queue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fila de Impressão</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Impressora</TableHead>
                    <TableHead>Documento</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead>Páginas</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {printQueues.map((queue) => (
                    <TableRow key={queue.id}>
                      <TableCell className="font-medium">{queue.id}</TableCell>
                      <TableCell>{queue.printer}</TableCell>
                      <TableCell>{queue.document}</TableCell>
                      <TableCell>{queue.type}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(queue.status)}>
                          {queue.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{queue.time}</TableCell>
                      <TableCell>{queue.pages}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Ver</Button>
                          <Button size="sm" variant="outline">Cancelar</Button>
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
              <CardTitle>Configurações Globais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Timeout de Impressão (segundos)</label>
                  <Input type="number" defaultValue="30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tentativas de Reimpressão</label>
                  <Input type="number" defaultValue="3" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Configurações por Tipo</h3>
                <div className="space-y-3">
                  {[
                    { label: "Imprimir automaticamente pedidos da cozinha", checked: true },
                    { label: "Imprimir recibo no balcão", checked: true },
                    { label: "Emitir cupom fiscal automaticamente", checked: false },
                    { label: "Imprimir comanda do bar separadamente", checked: true },
                    { label: "Notificar erros de impressão", checked: true },
                    { label: "Log detalhado de impressões", checked: false },
                  ].map((setting, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <label className="text-sm">{setting.label}</label>
                      <Switch checked={setting.checked} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Salvar Configurações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PrintersManagement;