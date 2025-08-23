import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Send, MessageSquare, Users, Clock, CheckCircle } from "lucide-react";

const SMSAdmin = () => {
  const campaigns = [
    { 
      id: 1, 
      name: "Promoção Black Friday", 
      recipients: 1245, 
      sent: 1245, 
      delivered: 1198, 
      status: "Enviada",
      date: "2024-01-15 14:30",
      cost: "R$ 62,25"
    },
    { 
      id: 2, 
      name: "Novo Restaurante", 
      recipients: 2456, 
      sent: 2456, 
      delivered: 2344, 
      status: "Enviada",
      date: "2024-01-14 10:15",
      cost: "R$ 122,80"
    },
    { 
      id: 3, 
      name: "Lembrete de Pedido", 
      recipients: 567, 
      sent: 0, 
      delivered: 0, 
      status: "Agendada",
      date: "2024-01-16 12:00",
      cost: "R$ 28,35"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Central de SMS</h1>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Nova Campanha SMS
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              SMS Enviados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.432</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Taxa de Entrega
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <p className="text-xs text-muted-foreground">Média mensal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Destinatários Únicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.932</div>
            <p className="text-xs text-muted-foreground">Usuários ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Custo Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 771,20</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enviar SMS em Massa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="campaign">Nome da Campanha</Label>
              <Input id="campaign" placeholder="Nome da campanha..." />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea 
                id="message" 
                placeholder="Digite sua mensagem aqui... (máx. 160 caracteres)" 
                rows={3}
                maxLength={160}
              />
              <p className="text-sm text-muted-foreground mt-1">0/160 caracteres</p>
            </div>
            <div>
              <Label htmlFor="recipients">Destinatários</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Todos os usuários</option>
                <option>Apenas comerciantes</option>
                <option>Apenas clientes</option>
                <option>Usuários ativos (30 dias)</option>
                <option>Lista personalizada</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="schedule">Agendamento</Label>
                <select className="w-full p-2 border border-input rounded-md">
                  <option>Enviar agora</option>
                  <option>Agendar para mais tarde</option>
                </select>
              </div>
              <div>
                <Label htmlFor="priority">Prioridade</Label>
                <select className="w-full p-2 border border-input rounded-md">
                  <option>Normal</option>
                  <option>Alta</option>
                  <option>Urgente</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">
                <Send className="h-4 w-4 mr-2" />
                Enviar SMS
              </Button>
              <Button variant="outline" className="flex-1">
                <Clock className="h-4 w-4 mr-2" />
                Agendar
              </Button>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Estimativa de custo:</strong> R$ 0,05 por SMS
              </p>
              <p className="text-sm text-muted-foreground">
                Total estimado: R$ 446,60 (8.932 destinatários)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Campanhas SMS</CardTitle>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-8" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campanha</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Entregues</TableHead>
                  <TableHead>Custo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{campaign.name}</p>
                        <p className="text-sm text-muted-foreground">{campaign.date}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        campaign.status === "Enviada" ? "default" : 
                        campaign.status === "Agendada" ? "secondary" : "destructive"
                      }>
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{campaign.delivered}/{campaign.sent}</div>
                        <div className="text-muted-foreground">
                          {campaign.sent > 0 ? Math.round((campaign.delivered/campaign.sent)*100) : 0}%
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{campaign.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configurações SMS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sender">Remetente Padrão</Label>
              <Input id="sender" defaultValue="CLUBFAST" maxLength={11} />
              <p className="text-sm text-muted-foreground">Máx. 11 caracteres</p>
            </div>
            <div>
              <Label htmlFor="provider">Provedor SMS</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Twilio</option>
                <option>AWS SNS</option>
                <option>Zenvia</option>
                <option>TotalVoice</option>
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="template">Template Padrão</Label>
            <Textarea 
              id="template" 
              placeholder="Olá {nome}, seu pedido #{pedido} foi confirmado! Acompanhe em: {link}"
              rows={2}
            />
            <p className="text-sm text-muted-foreground">
              Use variáveis: {"{nome}"}, {"{pedido}"}, {"{link}"}, {"{valor}"}
            </p>
          </div>
          <Button>Salvar Configurações</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SMSAdmin;