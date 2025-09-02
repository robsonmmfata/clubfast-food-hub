import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, Users, TrendingUp } from "lucide-react";

const SMSMerchant = () => {
  const smsStats = [
    { title: "SMS Enviados", value: "1,234", change: "+23%", icon: Send },
    { title: "Taxa de Entrega", value: "98.5%", change: "+2.1%", icon: TrendingUp },
    { title: "Contatos Ativos", value: "2,891", change: "+15%", icon: Users },
    { title: "Campanhas Ativas", value: "5", change: "+2", icon: MessageSquare },
  ];

  const campaigns = [
    {
      id: 1,
      name: "Promoção Fim de Semana",
      status: "Ativa",
      sent: 450,
      delivered: 442,
      clicks: 89,
      date: "15/01/2024"
    },
    {
      id: 2,
      name: "Novo Cardápio",
      status: "Pausada",
      sent: 280,
      delivered: 275,
      clicks: 34,
      date: "12/01/2024"
    },
    {
      id: 3,
      name: "Avaliação Pós-Pedido",
      status: "Concluída",
      sent: 125,
      delivered: 123,
      clicks: 67,
      date: "10/01/2024"
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "ativa": return "default";
      case "pausada": return "secondary";
      case "concluída": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Marketing SMS</h1>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Nova Campanha
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {smsStats.map((stat, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enviar SMS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Destinatários</label>
              <Input placeholder="Número ou grupo de contatos..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Mensagem</label>
              <Textarea placeholder="Digite sua mensagem..." className="min-h-24" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">160 caracteres restantes</span>
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Enviar SMS
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campanhas SMS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{campaign.name}</h3>
                    <Badge variant={getStatusVariant(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <div>Enviados: {campaign.sent}</div>
                    <div>Entregues: {campaign.delivered}</div>
                    <div>Cliques: {campaign.clicks}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{campaign.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SMSMerchant;