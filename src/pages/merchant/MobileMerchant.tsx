import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Download, QrCode, Settings, BarChart3, Users } from "lucide-react";

const MobileMerchant = () => {
  const appStats = [
    { title: "Downloads", value: "2,453", change: "+12%", icon: Download },
    { title: "Usuários Ativos", value: "1,890", change: "+8%", icon: Users },
    { title: "Avaliação Média", value: "4.8", change: "+0.2", icon: BarChart3 },
    { title: "Versão Atual", value: "2.4.1", change: "Atualizada", icon: Settings },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mobile Merchant</h1>
        <div className="flex gap-2">
          <Button>
            <QrCode className="h-4 w-4 mr-2" />
            Gerar QR Code
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Baixar APK
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {appStats.map((stat, index) => (
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

      <Tabs defaultValue="settings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
          <TabsTrigger value="features">Recursos</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do App</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome do App</label>
                  <Input defaultValue="McDonald's Centro" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Versão</label>
                  <Input defaultValue="2.4.1" disabled />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cor Primária</label>
                  <Input type="color" defaultValue="#dc2626" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Logo do App</label>
                  <Input type="file" accept="image/*" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recursos Disponíveis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Pedidos Online", enabled: true },
                { name: "Notificações Push", enabled: true },
                { name: "Pagamento In-App", enabled: false },
                { name: "Localização GPS", enabled: true },
                { name: "Chat com Cliente", enabled: false },
                { name: "Programa de Fidelidade", enabled: true },
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{feature.name}</p>
                  </div>
                  <Switch checked={feature.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics do Mobile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-border rounded-lg">
                  <p className="text-2xl font-bold text-primary">156</p>
                  <p className="text-sm text-muted-foreground">Pedidos Hoje</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <p className="text-2xl font-bold text-green-600">89%</p>
                  <p className="text-sm text-muted-foreground">Taxa de Satisfação</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">3.2min</p>
                  <p className="text-sm text-muted-foreground">Tempo Médio</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MobileMerchant;