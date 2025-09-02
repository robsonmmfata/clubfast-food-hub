import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Globe, Zap, Shield, TrendingUp } from "lucide-react";

const ThirdPartyAppsMerchant = () => {
  const integrationStats = [
    { title: "Apps Conectados", value: "8", change: "+2", icon: Globe },
    { title: "APIs Ativas", value: "12", change: "+3", icon: Zap },
    { title: "Conexões Seguras", value: "100%", change: "0%", icon: Shield },
    { title: "Performance", value: "98.5%", change: "+1.2%", icon: TrendingUp },
  ];

  const thirdPartyApps = [
    {
      id: 1,
      name: "iFood",
      category: "Delivery",
      description: "Integração com plataforma de delivery",
      status: "Conectado",
      lastSync: "2 min atrás",
      enabled: true
    },
    {
      id: 2,
      name: "Uber Eats",
      category: "Delivery", 
      description: "Receba pedidos do Uber Eats automaticamente",
      status: "Conectado",
      lastSync: "5 min atrás",
      enabled: true
    },
    {
      id: 3,
      name: "PagSeguro",
      category: "Pagamento",
      description: "Gateway de pagamento integrado",
      status: "Conectado",
      lastSync: "1 min atrás",
      enabled: true
    },
    {
      id: 4,
      name: "Correios",
      category: "Entrega",
      description: "Rastreamento de entregas",
      status: "Desconectado",
      lastSync: "Nunca",
      enabled: false
    },
  ];

  const getStatusVariant = (status: string) => {
    return status === "Conectado" ? "default" : "secondary";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Aplicativos de Terceiros</h1>
        <Button>Buscar Integrações</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrationStats.map((stat, index) => (
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

      <Card>
        <CardHeader>
          <CardTitle>Integrações Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {thirdPartyApps.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">{app.name}</h3>
                    <p className="text-sm text-muted-foreground">{app.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{app.category}</Badge>
                      <Badge variant={getStatusVariant(app.status)}>{app.status}</Badge>
                      <span className="text-xs text-muted-foreground">Sincronizado: {app.lastSync}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Switch checked={app.enabled} />
                  <Button size="sm" variant="outline">Configurar</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThirdPartyAppsMerchant;