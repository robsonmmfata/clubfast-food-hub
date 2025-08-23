import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Globe, Smartphone, CreditCard, Truck, MessageSquare, BarChart3 } from "lucide-react";

const ThirdPartyAppsMerchant = () => {
  const apps = [
    { 
      id: 1, 
      name: "WhatsApp Business", 
      category: "Comunicação", 
      status: "Conectado", 
      description: "Receba notificações de pedidos via WhatsApp",
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      connected: true
    },
    { 
      id: 2, 
      name: "Google Analytics", 
      category: "Analytics", 
      status: "Disponível", 
      description: "Analise o comportamento dos seus clientes",
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      connected: false
    },
    { 
      id: 3, 
      name: "Mercado Pago", 
      category: "Pagamento", 
      status: "Conectado", 
      description: "Gateway de pagamento integrado",
      icon: <CreditCard className="h-8 w-8 text-blue-500" />,
      connected: true
    },
    { 
      id: 4, 
      name: "Correios", 
      category: "Entrega", 
      status: "Disponível", 
      description: "Cálculo automático de frete",
      icon: <Truck className="h-8 w-8 text-yellow-600" />,
      connected: false
    },
    { 
      id: 5, 
      name: "Telegram Bot", 
      category: "Comunicação", 
      status: "Disponível", 
      description: "Notificações via Telegram",
      icon: <MessageSquare className="h-8 w-8 text-blue-400" />,
      connected: false
    },
    { 
      id: 6, 
      name: "Facebook Pixel", 
      category: "Marketing", 
      status: "Disponível", 
      description: "Rastreamento para anúncios no Facebook",
      icon: <Globe className="h-8 w-8 text-blue-700" />,
      connected: false
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Aplicativos de Terceiros</h1>
        <Button variant="outline">
          Explorar Mais Apps
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Apps Conectados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">De 6 disponíveis</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Notificações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Automações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Ativas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">Integrações</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <Card key={app.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {app.icon}
                  <div>
                    <CardTitle className="text-lg">{app.name}</CardTitle>
                    <Badge variant="outline">{app.category}</Badge>
                  </div>
                </div>
                <Switch checked={app.connected} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{app.description}</p>
              <div className="flex justify-between items-center">
                <Badge variant={app.connected ? "default" : "secondary"}>
                  {app.status}
                </Badge>
              </div>
              <Button 
                variant={app.connected ? "outline" : "default"} 
                size="sm" 
                className="w-full"
              >
                {app.connected ? "Configurar" : "Conectar"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Integrações Recomendadas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="h-6 w-6 text-green-600" />
                <div>
                  <h4 className="font-medium">Sistema de Notificações</h4>
                  <p className="text-sm text-muted-foreground">Mantenha seus clientes informados</p>
                </div>
              </div>
              <Button size="sm" variant="outline">Configurar</Button>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <div>
                  <h4 className="font-medium">Analytics Avançado</h4>
                  <p className="text-sm text-muted-foreground">Entenda melhor seus clientes</p>
                </div>
              </div>
              <Button size="sm" variant="outline">Ativar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThirdPartyAppsMerchant;