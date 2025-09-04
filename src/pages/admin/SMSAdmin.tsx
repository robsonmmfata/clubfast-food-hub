import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus, Send, MessageSquare, Clock, CheckCircle, AlertCircle, Users, BarChart3 } from "lucide-react";

const SMSAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [messageText, setMessageText] = useState("");

  const smsStats = [
    { label: "SMS Enviados", value: "12,543", trend: "+8%", icon: Send },
    { label: "Entregas", value: "11,892", trend: "+5%", icon: CheckCircle },
    { label: "Pendentes", value: "651", trend: "-2%", icon: Clock },
    { label: "Falhas", value: "89", trend: "-15%", icon: AlertCircle },
  ];

  const smsHistory = [
    {
      id: 1,
      message: "Seu pedido #1234 foi confirmado!",
      recipient: "+55 11 99999-9999",
      status: "Entregue",
      timestamp: "2 horas atrás",
      cost: "R$ 0,12"
    },
    {
      id: 2,
      message: "Promoção especial: 20% de desconto!",
      recipient: "+55 11 88888-8888",
      status: "Pendente",
      timestamp: "3 horas atrás",
      cost: "R$ 0,12"
    },
    {
      id: 3,
      message: "Seu pedido está a caminho!",
      recipient: "+55 11 77777-7777",
      status: "Falhou",
      timestamp: "5 horas atrás",
      cost: "R$ 0,12"
    },
  ];

  const templates = [
    {
      id: 1,
      name: "Confirmação de Pedido",
      message: "Olá {nome}, seu pedido #{numero} foi confirmado e será entregue em {tempo} minutos.",
      category: "Pedidos",
      usage: "Alto"
    },
    {
      id: 2,
      name: "Promoção",
      message: "🔥 Oferta especial! {desconto}% de desconto em todos os pratos. Válido até {data}.",
      category: "Marketing",
      usage: "Médio"
    },
    {
      id: 3,
      name: "Entrega",
      message: "Seu pedido #{numero} está a caminho! Tempo estimado: {tempo} minutos.",
      category: "Entrega",
      usage: "Alto"
    },
  ];

  const campaigns = [
    {
      id: 1,
      name: "Promoção de Fim de Semana",
      status: "Ativa",
      recipients: 1250,
      sent: 1100,
      delivered: 1045,
      cost: "R$ 132,00"
    },
    {
      id: 2,
      name: "Confirmações Automáticas",
      status: "Ativa",
      recipients: 0,
      sent: 2543,
      delivered: 2401,
      cost: "R$ 304,68"
    },
    {
      id: 3,
      name: "Pesquisa de Satisfação",
      status: "Pausada",
      recipients: 500,
      sent: 500,
      delivered: 487,
      cost: "R$ 60,00"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Entregue": return "default";
      case "Ativa": return "default";
      case "Pendente": return "secondary";
      case "Pausada": return "secondary";
      case "Falhou": return "destructive";
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
          <h1 className="text-2xl font-bold text-foreground">SMS Management</h1>
          <p className="text-muted-foreground">Gerencie envios de SMS e campanhas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
          <Button size="sm">
            <Send className="h-4 w-4 mr-2" />
            Enviar SMS
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {smsStats.map((stat, index) => (
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

      <Tabs defaultValue="send" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="send">Enviar SMS</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="send" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Enviar Nova Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Destinatários</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecionar grupo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os usuários</SelectItem>
                      <SelectItem value="active">Usuários ativos</SelectItem>
                      <SelectItem value="merchants">Comerciantes</SelectItem>
                      <SelectItem value="customers">Clientes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Template</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Usar template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Mensagem personalizada</SelectItem>
                      <SelectItem value="order">Confirmação de Pedido</SelectItem>
                      <SelectItem value="promo">Promoção</SelectItem>
                      <SelectItem value="delivery">Entrega</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea
                  placeholder="Digite sua mensagem aqui..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="min-h-[100px]"
                />
                <p className="text-xs text-muted-foreground">
                  {messageText.length}/160 caracteres
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Switch />
                <label className="text-sm">Agendar para envio posterior</label>
              </div>

              <div className="flex justify-between items-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Custo estimado: R$ 24,60 (205 destinatários × R$ 0,12)
                </p>
                <div className="flex gap-2">
                  <Button variant="outline">Prévia</Button>
                  <Button>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Agora
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Histórico de SMS</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar mensagens..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 w-64"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {smsHistory.map((sms) => (
                  <Card key={sms.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium mb-1">{sms.message}</p>
                          <p className="text-sm text-muted-foreground mb-2">
                            Para: {sms.recipient}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{sms.timestamp}</span>
                            <span>Custo: {sms.cost}</span>
                          </div>
                        </div>
                        <Badge variant={getStatusVariant(sms.status)}>
                          {sms.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Templates de Mensagem</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {templates.map((template) => (
                  <Card key={template.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{template.name}</h4>
                          <p className="text-sm text-muted-foreground">{template.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs ${getUsageColor(template.usage)}`}>
                            {template.usage}
                          </span>
                          <Switch defaultChecked />
                        </div>
                      </div>
                      
                      <p className="text-sm bg-muted p-3 rounded-lg mb-3">
                        {template.message}
                      </p>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="outline" size="sm">Usar</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Campanhas de SMS</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Campanha
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{campaign.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>Enviados: {campaign.sent}</span>
                            <span>Entregues: {campaign.delivered}</span>
                            <span>Custo: {campaign.cost}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={getStatusVariant(campaign.status)}>
                            {campaign.status}
                          </Badge>
                          <Switch defaultChecked={campaign.status === "Ativa"} />
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Ver Detalhes</Button>
                        <Button variant="outline" size="sm">Editar</Button>
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
              <CardTitle>Configurações de SMS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS automático para pedidos</h4>
                    <p className="text-sm text-muted-foreground">Enviar confirmação automática</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações de entrega</h4>
                    <p className="text-sm text-muted-foreground">Avisar quando pedido sair para entrega</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS promocionais</h4>
                    <p className="text-sm text-muted-foreground">Permitir envio de ofertas</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações do Provedor</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Provedor SMS</label>
                    <Select defaultValue="twilio">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="twilio">Twilio</SelectItem>
                        <SelectItem value="nexmo">Nexmo</SelectItem>
                        <SelectItem value="local">Provedor Local</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Custo por SMS</label>
                    <Input type="number" defaultValue="0.12" step="0.01" />
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

export default SMSAdmin;