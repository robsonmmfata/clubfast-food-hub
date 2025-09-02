import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wifi, Globe, Shield, Activity, RefreshCw, Settings } from "lucide-react";

const InternetSettings = () => {
  const networkStats = [
    { title: "Status da Conexão", value: "Online", change: "Estável", icon: Wifi },
    { title: "Velocidade", value: "100 Mbps", change: "Ótima", icon: Activity },
    { title: "Ping", value: "12ms", change: "Baixo", icon: Globe },
    { title: "Uptime", value: "99.8%", change: "+0.2%", icon: Shield },
  ];

  const connections = [
    {
      name: "WiFi Principal",
      type: "WiFi",
      status: "Conectado",
      signal: "Excelente",
      devices: 15,
      speed: "100 Mbps"
    },
    {
      name: "4G Backup",
      type: "Celular",
      status: "Standby",
      signal: "Bom",
      devices: 0,
      speed: "50 Mbps"
    },
    {
      name: "Ethernet",
      type: "Cabo",
      status: "Conectado",
      signal: "Excelente",
      devices: 3,
      speed: "1 Gbps"
    },
  ];

  const securitySettings = [
    { name: "Firewall Ativo", enabled: true, description: "Proteção contra ameaças externas" },
    { name: "VPN Empresarial", enabled: false, description: "Conexão segura para dados sensíveis" },
    { name: "Filtro de Conteúdo", enabled: true, description: "Bloqueia sites maliciosos" },
    { name: "Monitoramento de Tráfego", enabled: true, description: "Analisa o tráfego de rede" },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "conectado": return "text-green-600";
      case "standby": return "text-yellow-600";
      case "desconectado": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getSignalColor = (signal: string) => {
    switch (signal.toLowerCase()) {
      case "excelente": return "text-green-600";
      case "bom": return "text-yellow-600";
      case "ruim": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Configurações de Internet</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Testar Conexão
          </Button>
          <Button>
            <Settings className="h-4 w-4 mr-2" />
            Configurar Rede
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {networkStats.map((stat, index) => (
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

      <Tabs defaultValue="connections" className="space-y-4">
        <TabsList>
          <TabsTrigger value="connections">Conexões</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="dns">DNS</TabsTrigger>
        </TabsList>

        <TabsContent value="connections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conexões de Rede</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {connections.map((connection, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Wifi className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{connection.name}</h3>
                          <p className="text-sm text-muted-foreground">{connection.type}</p>
                        </div>
                      </div>
                      <Badge variant="outline">
                        <span className={getStatusColor(connection.status)}>
                          {connection.status}
                        </span>
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Sinal</p>
                        <p className={getSignalColor(connection.signal)}>{connection.signal}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Dispositivos</p>
                        <p className="font-medium">{connection.devices}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Velocidade</p>
                        <p className="font-medium">{connection.speed}</p>
                      </div>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">Configurar</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Segurança</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {securitySettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{setting.name}</h3>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <Switch checked={setting.enabled} />
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Configurações Avançadas</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Porta HTTPS</span>
                    <Input className="w-24" defaultValue="443" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Timeout (segundos)</span>
                    <Input className="w-24" defaultValue="30" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Max Conexões</span>
                    <Input className="w-24" defaultValue="100" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações DNS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">DNS Primário</label>
                  <Input defaultValue="8.8.8.8" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">DNS Secundário</label>
                  <Input defaultValue="8.8.4.4" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Servidores DNS Recomendados</h3>
                <div className="space-y-2">
                  {[
                    { name: "Google Public DNS", primary: "8.8.8.8", secondary: "8.8.4.4" },
                    { name: "Cloudflare", primary: "1.1.1.1", secondary: "1.0.0.1" },
                    { name: "OpenDNS", primary: "208.67.222.222", secondary: "208.67.220.220" },
                  ].map((dns, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">{dns.name}</p>
                        <p className="text-sm text-muted-foreground">{dns.primary} / {dns.secondary}</p>
                      </div>
                      <Button size="sm" variant="outline">Usar</Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button>Salvar Configurações DNS</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InternetSettings;