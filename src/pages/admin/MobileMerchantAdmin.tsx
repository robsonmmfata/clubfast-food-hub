import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Download, Users, Settings, BarChart3, Bell, Globe } from "lucide-react";

const MobileMerchantAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mobileStats = [
    { label: "Apps Ativos", value: "1,234", trend: "+12%", icon: Smartphone },
    { label: "Downloads", value: "45,678", trend: "+25%", icon: Download },
    { label: "Usuários Mobile", value: "23,456", trend: "+18%", icon: Users },
    { label: "Taxa de Conversão", value: "3.8%", trend: "+5%", icon: BarChart3 },
  ];

  const merchants = [
    {
      id: 1,
      name: "McDonald's",
      version: "2.1.0",
      status: "Ativo",
      downloads: 2543,
      rating: 4.8,
      lastUpdate: "2 dias atrás"
    },
    {
      id: 2,
      name: "Burger King",
      version: "1.9.5",
      status: "Ativo", 
      downloads: 1876,
      rating: 4.5,
      lastUpdate: "1 semana atrás"
    },
    {
      id: 3,
      name: "Pizza Hut",
      version: "2.0.1",
      status: "Pendente",
      downloads: 1234,
      rating: 4.6,
      lastUpdate: "3 dias atrás"
    },
  ];

  const appFeatures = [
    {
      name: "Push Notifications",
      description: "Notificações em tempo real",
      enabled: true,
      usage: "Alto"
    },
    {
      name: "GPS Tracking",
      description: "Rastreamento de entrega",
      enabled: true,
      usage: "Médio"
    },
    {
      name: "Payment Integration",
      description: "Pagamentos integrados",
      enabled: false,
      usage: "Alto"
    },
    {
      name: "Offline Mode",
      description: "Funcionamento offline",
      enabled: true,
      usage: "Baixo"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "default";
      case "Pendente": return "secondary";
      case "Inativo": return "destructive";
      default: return "outline";
    }
  };

  const getUsageColor = (usage: string) => {
    switch (usage) {
      case "Alto": return "text-red-500";
      case "Médio": return "text-yellow-500";
      case "Baixo": return "text-green-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Mobile Merchant Admin</h1>
          <p className="text-muted-foreground">Gerencie aplicativos móveis dos comerciantes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Gerar APK
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mobileStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.trend} vs mês anterior</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="merchants" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="merchants">Comerciantes</TabsTrigger>
          <TabsTrigger value="features">Recursos</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="merchants" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Apps dos Comerciantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {merchants.map((merchant) => (
                  <Card key={merchant.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Smartphone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{merchant.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>v{merchant.version}</span>
                              <span>{merchant.downloads} downloads</span>
                              <span>⭐ {merchant.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={getStatusVariant(merchant.status)}>
                            {merchant.status}
                          </Badge>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Ver App</Button>
                            <Button variant="outline" size="sm">Configurar</Button>
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

        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recursos do App</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appFeatures.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{feature.name}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                          <span className={`text-xs ${getUsageColor(feature.usage)}`}>
                            Uso: {feature.usage}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Switch defaultChecked={feature.enabled} />
                          <Button variant="outline" size="sm">
                            <Settings className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Mobile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Sessões Ativas</h4>
                    <div className="text-2xl font-bold">8,543</div>
                    <p className="text-sm text-green-500">+15% vs ontem</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Tempo de Sessão</h4>
                    <div className="text-2xl font-bold">12min</div>
                    <p className="text-sm text-yellow-500">-2% vs ontem</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Crashes</h4>
                    <div className="text-2xl font-bold">0.2%</div>
                    <p className="text-sm text-green-500">-50% vs ontem</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Globais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Auto-atualização</h4>
                    <p className="text-sm text-muted-foreground">Atualizar apps automaticamente</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Push Notifications Globais</h4>
                    <p className="text-sm text-muted-foreground">Permitir notificações para todos</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Analytics</h4>
                    <p className="text-sm text-muted-foreground">Coletar dados de uso</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Build</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Versão Mínima Android</label>
                    <Select defaultValue="21">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="19">Android 4.4 (API 19)</SelectItem>
                        <SelectItem value="21">Android 5.0 (API 21)</SelectItem>
                        <SelectItem value="23">Android 6.0 (API 23)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Versão Mínima iOS</label>
                    <Select defaultValue="12">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="11">iOS 11</SelectItem>
                        <SelectItem value="12">iOS 12</SelectItem>
                        <SelectItem value="13">iOS 13</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button>Salvar Configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MobileMerchantAdmin;