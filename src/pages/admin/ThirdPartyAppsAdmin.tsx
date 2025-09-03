import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus, Settings, Globe, Zap, Shield, CheckCircle } from "lucide-react";

const ThirdPartyAppsAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const integrations = [
    { 
      id: 1, 
      name: "WhatsApp Business", 
      category: "Comunicação", 
      status: "Ativa", 
      description: "Envio de notificações via WhatsApp",
      version: "2.1.0",
      lastUpdate: "2 dias atrás",
      usage: "Alto",
      icon: "💬"
    },
    { 
      id: 2, 
      name: "Google Analytics", 
      category: "Analytics", 
      status: "Ativa", 
      description: "Rastreamento e análise de dados",
      version: "4.2.1",
      lastUpdate: "1 semana atrás",
      usage: "Médio",
      icon: "📊"
    },
    { 
      id: 3, 
      name: "Mercado Pago", 
      category: "Pagamento", 
      status: "Pausada", 
      description: "Gateway de pagamento brasileiro",
      version: "1.8.5",
      lastUpdate: "3 dias atrás",
      usage: "Alto",
      icon: "💳"
    },
    { 
      id: 4, 
      name: "SendGrid", 
      category: "Email", 
      status: "Ativa", 
      description: "Serviço de envio de emails",
      version: "3.0.2",
      lastUpdate: "5 dias atrás",
      usage: "Baixo",
      icon: "📧"
    },
  ];

  const availableApps = [
    { 
      id: 1, 
      name: "Stripe", 
      category: "Pagamento", 
      description: "Gateway de pagamento internacional",
      rating: 4.8,
      installs: "10K+",
      icon: "💰"
    },
    { 
      id: 2, 
      name: "Slack", 
      category: "Comunicação", 
      description: "Notificações em tempo real",
      rating: 4.6,
      installs: "5K+",
      icon: "💬"
    },
    { 
      id: 3, 
      name: "Mailchimp", 
      category: "Marketing", 
      description: "Automação de email marketing",
      rating: 4.5,
      installs: "8K+",
      icon: "📬"
    },
    { 
      id: 4, 
      name: "Zapier", 
      category: "Automação", 
      description: "Conecte apps e automatize fluxos",
      rating: 4.7,
      installs: "15K+",
      icon: "⚡"
    },
  ];

  const webhooks = [
    { id: 1, name: "Order Created", url: "https://api.example.com/orders", status: "Ativo", events: 1250 },
    { id: 2, name: "Payment Completed", url: "https://api.example.com/payments", status: "Ativo", events: 890 },
    { id: 3, name: "User Registration", url: "https://api.example.com/users", status: "Pausado", events: 456 },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativa": return "default";
      case "Pausada": return "secondary";
      case "Erro": return "destructive";
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
          <h1 className="text-2xl font-bold text-foreground">Aplicativos de Terceiros</h1>
          <p className="text-muted-foreground">Gerencie integrações e APIs externas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nova Integração
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Integrações Ativas</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">de 24 instaladas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Webhooks</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2.5K eventos/dia</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.8%</div>
            <p className="text-xs text-muted-foreground">Último mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Segurança</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">A+</div>
            <p className="text-xs text-muted-foreground">SSL verificado</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active">Ativas</TabsTrigger>
          <TabsTrigger value="available">Disponíveis</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Integrações Instaladas</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar integrações..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 w-64"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration) => (
                  <Card key={integration.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{integration.icon}</div>
                          <div>
                            <h4 className="font-medium">{integration.name}</h4>
                            <p className="text-sm text-muted-foreground">{integration.category}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant={getStatusVariant(integration.status)}>
                            {integration.status}
                          </Badge>
                          <Switch defaultChecked={integration.status === "Ativa"} />
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {integration.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>v{integration.version}</span>
                        <span className={getUsageColor(integration.usage)}>
                          Uso: {integration.usage}
                        </span>
                      </div>
                      
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">
                          <Settings className="h-3 w-3 mr-1" />
                          Configurar
                        </Button>
                        <Button variant="outline" size="sm">Logs</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="available" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Marketplace de Apps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableApps.map((app) => (
                  <Card key={app.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{app.icon}</div>
                        <div>
                          <h4 className="font-medium">{app.name}</h4>
                          <p className="text-sm text-muted-foreground">{app.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {app.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span>⭐ {app.rating}</span>
                        <span>{app.installs} instalações</span>
                      </div>
                      
                      <Button className="w-full" size="sm">Instalar</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Webhooks Configurados</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Webhook
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {webhooks.map((webhook) => (
                  <Card key={webhook.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{webhook.name}</h4>
                          <p className="text-sm text-muted-foreground">{webhook.url}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {webhook.events} eventos enviados
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={getStatusVariant(webhook.status)}>
                            {webhook.status}
                          </Badge>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Settings className="h-3 w-3" />
                            </Button>
                            <Switch defaultChecked={webhook.status === "Ativo"} />
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
                    <h4 className="font-medium">Logs detalhados</h4>
                    <p className="text-sm text-muted-foreground">Registrar todas as operações</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações de erro</h4>
                    <p className="text-sm text-muted-foreground">Alertar sobre falhas nas integrações</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Modo de desenvolvimento</h4>
                    <p className="text-sm text-muted-foreground">Habilitar ferramentas de debug</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Segurança</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Timeout (segundos)</label>
                    <Input type="number" defaultValue="30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tentativas máximas</label>
                    <Input type="number" defaultValue="3" />
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

export default ThirdPartyAppsAdmin;