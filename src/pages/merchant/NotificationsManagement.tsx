import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Send, Bell, Mail, MessageSquare, Settings, Users } from "lucide-react";

const NotificationsManagement = () => {
  const notifications = [
    { 
      id: 1, 
      title: "Novo Pedido Recebido", 
      message: "Você recebeu um novo pedido #1234", 
      type: "Push", 
      sent: "2024-01-15 14:30", 
      recipients: 1, 
      status: "Enviado" 
    },
    { 
      id: 2, 
      title: "Promoção Weekend", 
      message: "Aproveite 20% de desconto neste fim de semana!", 
      type: "Email", 
      sent: "2024-01-15 09:00", 
      recipients: 1250, 
      status: "Enviado" 
    },
    { 
      id: 3, 
      title: "Lembrete Estoque", 
      message: "Alguns itens estão com estoque baixo", 
      type: "SMS", 
      sent: "2024-01-14 16:45", 
      recipients: 3, 
      status: "Programado" 
    },
  ];

  const settings = [
    { id: 1, name: "Novos Pedidos", email: true, push: true, sms: false },
    { id: 2, name: "Pagamentos Recebidos", email: true, push: false, sms: false },
    { id: 3, name: "Estoque Baixo", email: true, push: true, sms: true },
    { id: 4, name: "Avaliações", email: true, push: true, sms: false },
    { id: 5, name: "Promoções", email: false, push: true, sms: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Notificações</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Notificação
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Send className="h-4 w-4" />
              Enviadas Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+12% vs ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Taxa de Abertura
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Email/Push</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Programadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Próximas 24h</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Disponíveis</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enviar Notificação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="notifTitle">Título</Label>
              <Input id="notifTitle" placeholder="Título da notificação..." />
            </div>
            <div>
              <Label htmlFor="notifMessage">Mensagem</Label>
              <Textarea id="notifMessage" placeholder="Conteúdo da notificação..." rows={3} />
            </div>
            <div>
              <Label htmlFor="notifType">Tipo</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Push Notification</option>
                <option>Email</option>
                <option>SMS</option>
                <option>In-App</option>
              </select>
            </div>
            <div>
              <Label htmlFor="notifRecipients">Destinatários</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Todos os clientes</option>
                <option>Clientes ativos</option>
                <option>Clientes VIP</option>
                <option>Específico</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="sendDate">Data/Hora Envio</Label>
                <Input id="sendDate" type="datetime-local" />
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Agora
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configurações de Notificação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo de Evento</TableHead>
                  <TableHead className="text-center">
                    <Mail className="h-4 w-4 mx-auto" />
                  </TableHead>
                  <TableHead className="text-center">
                    <Bell className="h-4 w-4 mx-auto" />
                  </TableHead>
                  <TableHead className="text-center">
                    <MessageSquare className="h-4 w-4 mx-auto" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {settings.map((setting) => (
                  <TableRow key={setting.id}>
                    <TableCell className="font-medium">{setting.name}</TableCell>
                    <TableCell className="text-center">
                      <Switch checked={setting.email} />
                    </TableCell>
                    <TableCell className="text-center">
                      <Switch checked={setting.push} />
                    </TableCell>
                    <TableCell className="text-center">
                      <Switch checked={setting.sms} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Histórico de Notificações</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar notificações..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Destinatários</TableHead>
                <TableHead>Data/Hora</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((notif) => (
                <TableRow key={notif.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{notif.title}</p>
                      <p className="text-sm text-muted-foreground truncate max-w-xs">
                        {notif.message}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{notif.type}</Badge>
                  </TableCell>
                  <TableCell>{notif.recipients}</TableCell>
                  <TableCell>{notif.sent}</TableCell>
                  <TableCell>
                    <Badge variant={notif.status === "Enviado" ? "default" : "secondary"}>
                      {notif.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsManagement;