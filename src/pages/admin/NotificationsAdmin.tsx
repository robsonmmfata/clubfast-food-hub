import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Send, Eye, Bell, Users, MessageSquare, Mail } from "lucide-react";

const NotificationsAdmin = () => {
  const notifications = [
    { 
      id: 1, 
      title: "Sistema em Manutenção", 
      type: "Sistema", 
      recipients: "Todos", 
      sent: 1245, 
      opened: 892, 
      status: "Enviado",
      date: "2024-01-15 14:30"
    },
    { 
      id: 2, 
      title: "Nova Funcionalidade: QR Code", 
      type: "Novidade", 
      recipients: "Comerciantes", 
      sent: 35, 
      opened: 28, 
      status: "Enviado",
      date: "2024-01-14 10:15"
    },
    { 
      id: 3, 
      title: "Promoção Black Friday", 
      type: "Marketing", 
      recipients: "Clientes", 
      sent: 5432, 
      opened: 3421, 
      status: "Agendado",
      date: "2024-01-20 08:00"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Central de Notificações</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Notificação
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Enviadas Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
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
            <div className="text-2xl font-bold">72.5%</div>
            <p className="text-xs text-muted-foreground">Média mensal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Agendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Para os próximos 7 dias</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Templates salvos</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enviar Nova Notificação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input id="title" placeholder="Título da notificação..." />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Conteúdo da notificação..." rows={4} />
            </div>
            <div>
              <Label htmlFor="recipients">Destinatários</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Todos os usuários</option>
                <option>Apenas comerciantes</option>
                <option>Apenas clientes</option>
                <option>Segmento específico</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Tipo</Label>
                <select className="w-full p-2 border border-input rounded-md">
                  <option>Sistema</option>
                  <option>Marketing</option>
                  <option>Novidade</option>
                  <option>Urgente</option>
                </select>
              </div>
              <div>
                <Label htmlFor="channel">Canal</Label>
                <select className="w-full p-2 border border-input rounded-md">
                  <option>Push + Email</option>
                  <option>Apenas Push</option>
                  <option>Apenas Email</option>
                  <option>SMS</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">
                <Send className="h-4 w-4 mr-2" />
                Enviar Agora
              </Button>
              <Button variant="outline" className="flex-1">
                Agendar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Histórico de Notificações</CardTitle>
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
                  <TableHead>Título</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notifications.map((notif) => (
                  <TableRow key={notif.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{notif.title}</p>
                        <p className="text-sm text-muted-foreground">{notif.date}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{notif.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        notif.status === "Enviado" ? "default" : 
                        notif.status === "Agendado" ? "secondary" : "destructive"
                      }>
                        {notif.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotificationsAdmin;