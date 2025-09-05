import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wifi, Globe, Server, Shield, Settings, Eye, Edit, RefreshCw, Plus, Download } from "lucide-react";

const InternetAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const internetStats = [
    { label: "Conexões Ativas", value: "847", trend: "+12%", icon: Wifi },
    { label: "Bandwidth Usado", value: "2.4 GB/s", trend: "+8%", icon: Globe },
    { label: "Servidores Online", value: "12", trend: "100%", icon: Server },
    { label: "Uptime", value: "99.8%", trend: "+0.1%", icon: Shield },
  ];

  const connections = [
    { id: 1, restaurant: "McDonald's", ip: "192.168.1.100", status: "Conectado", bandwidth: "50 Mbps", ping: "12ms", uptime: "99.9%" },
    { id: 2, restaurant: "Pizza Hut", ip: "192.168.1.101", status: "Conectado", bandwidth: "30 Mbps", ping: "8ms", uptime: "98.5%" },
    { id: 3, restaurant: "Subway", ip: "192.168.1.102", status: "Desconectado", bandwidth: "0 Mbps", ping: "0ms", uptime: "95.2%" },
    { id: 4, restaurant: "KFC", ip: "192.168.1.103", status: "Conectado", bandwidth: "40 Mbps", ping: "15ms", uptime: "99.1%" },
    { id: 5, restaurant: "Jollibee", ip: "192.168.1.104", status: "Conectado", bandwidth: "25 Mbps", ping: "10ms", uptime: "97.8%" },
  ];

  const servers = [
    { id: 1, name: "Web Server 01", ip: "10.0.1.10", status: "Online", load: "45%", memory: "2.1/4 GB", uptime: "15 dias" },
    { id: 2, name: "Database Server", ip: "10.0.1.11", status: "Online", load: "78%", memory: "6.8/8 GB", uptime: "23 dias" },
    { id: 3, name: "API Server", ip: "10.0.1.12", status: "Online", load: "32%", memory: "1.5/4 GB", uptime: "8 dias" },
    { id: 4, name: "Cache Server", ip: "10.0.1.13", status: "Maintenance", load: "0%", memory: "0.2/2 GB", uptime: "0 dias" },
  ];

  const securityRules = [
    { id: 1, name: "Block Malicious IPs", type: "Firewall", status: "Ativo", blocked: 234, updated: "2 horas atrás" },
    { id: 2, name: "DDoS Protection", type: "Protection", status: "Ativo", blocked: 12, updated: "30 min atrás" },
    { id: 3, name: "Rate Limiting", type: "Traffic", status: "Ativo", blocked: 89, updated: "5 min atrás" },
    { id: 4, name: "Geo Blocking", type: "Location", status: "Inativo", blocked: 0, updated: "1 dia atrás" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Conectado": 
      case "Online":
      case "Ativo": return "default";
      case "Desconectado": 
      case "Offline":
      case "Inativo": return "destructive";
      case "Maintenance": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Conectado": 
      case "Online": return "text-green-600";
      case "Desconectado": 
      case "Offline": return "text-red-600";
      case "Maintenance": return "text-yellow-600";
      default: return "text-muted-foreground";
    }
  };

  const filteredConnections = connections.filter(connection =>
    connection.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    connection.ip.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Local na rede Internet</h1>
          <p className="text-muted-foreground">Gerencie conexões de rede e servidores</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Relatório
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Atualizar Status
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {internetStats.map((stat, index) => (
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
      <Tabs defaultValue="connections" className="space-y-6">
        <TabsList>
          <TabsTrigger value="connections">Conexões</TabsTrigger>
          <TabsTrigger value="servers">Servidores</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoramento</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="connections">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Conexões de Rede</CardTitle>
                <Input
                  placeholder="Buscar por restaurante ou IP..."
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
                    <TableHead>IP Address</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Bandwidth</TableHead>
                    <TableHead>Ping</TableHead>
                    <TableHead>Uptime</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredConnections.map((connection) => (
                    <TableRow key={connection.id}>
                      <TableCell className="font-medium">{connection.restaurant}</TableCell>
                      <TableCell>{connection.ip}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(connection.status)}>
                          {connection.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{connection.bandwidth}</TableCell>
                      <TableCell className={getStatusColor(connection.status)}>
                        {connection.ping}
                      </TableCell>
                      <TableCell>{connection.uptime}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
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

        <TabsContent value="servers">
          <Card>
            <CardHeader>
              <CardTitle>Status dos Servidores</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Servidor</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>CPU Load</TableHead>
                    <TableHead>Memória</TableHead>
                    <TableHead>Uptime</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {servers.map((server) => (
                    <TableRow key={server.id}>
                      <TableCell className="font-medium">{server.name}</TableCell>
                      <TableCell>{server.ip}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(server.status)}>
                          {server.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{server.load}</TableCell>
                      <TableCell>{server.memory}</TableCell>
                      <TableCell>{server.uptime}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
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

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Regras de Segurança</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {securityRules.map((rule) => (
                  <Card key={rule.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{rule.name}</h4>
                          <p className="text-sm text-muted-foreground">Tipo: {rule.type}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium">{rule.blocked} bloqueados</p>
                            <p className="text-xs text-muted-foreground">Atualizado: {rule.updated}</p>
                          </div>
                          <Badge variant={getStatusVariant(rule.status)}>
                            {rule.status}
                          </Badge>
                          <Switch checked={rule.status === "Ativo"} />
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tráfego de Rede</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Download hoje</span>
                  <span className="font-semibold">156.7 GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Upload hoje</span>
                  <span className="font-semibold">89.2 GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Pico de tráfego</span>
                  <span className="font-semibold">2.4 GB/s</span>
                </div>
                <div className="flex justify-between">
                  <span>Requests/minuto</span>
                  <span className="font-semibold">2,847</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance dos Servidores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>CPU Média</span>
                  <span className="font-semibold">38.7%</span>
                </div>
                <div className="flex justify-between">
                  <span>Memória Média</span>
                  <span className="font-semibold">62.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Disco Usado</span>
                  <span className="font-semibold">45.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Tempo Resposta</span>
                  <span className="font-semibold">1.2s</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Rede</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">DNS Primário</label>
                  <Input placeholder="8.8.8.8" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">DNS Secundário</label>
                  <Input placeholder="8.8.4.4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Gateway Padrão</label>
                  <Input placeholder="192.168.1.1" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações de Monitoramento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Monitoramento em tempo real</h4>
                    <p className="text-sm text-muted-foreground">Atualizar estatísticas a cada minuto</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Alertas de desconexão</h4>
                    <p className="text-sm text-muted-foreground">Notificar quando dispositivo desconectar</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Intervalo de ping (segundos)</label>
                  <Input type="number" placeholder="30" />
                </div>

                <Button>Salvar Configurações</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InternetAdmin;