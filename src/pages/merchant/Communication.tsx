import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Phone, Mail, Send, Search, Plus } from "lucide-react";

const Communication = () => {
  const communicationStats = [
    { title: "Mensagens Hoje", value: "147", change: "+23%", icon: MessageCircle },
    { title: "Chamadas Atendidas", value: "32", change: "+8%", icon: Phone },
    { title: "Emails Enviados", value: "89", change: "+15%", icon: Mail },
    { title: "Taxa de Resposta", value: "94%", change: "+2%", icon: Send },
  ];

  const messages = [
    {
      id: "#MSG001",
      customer: "João Silva",
      type: "Chat",
      subject: "Problema com pedido",
      status: "Respondida",
      agent: "Carlos",
      time: "15:30",
      priority: "Alta"
    },
    {
      id: "#MSG002",
      customer: "Maria Santos",
      type: "Email",
      subject: "Dúvida sobre entrega",
      status: "Pendente",
      agent: "-",
      time: "15:25",
      priority: "Média"
    },
    {
      id: "#MSG003",
      customer: "Pedro Costa",
      type: "WhatsApp",
      subject: "Cancelamento",
      status: "Em Andamento",
      agent: "Ana",
      time: "15:20",
      priority: "Baixa"
    },
    {
      id: "#MSG004",
      customer: "Ana Lima",
      type: "Telefone",
      subject: "Reclamação",
      status: "Resolvida",
      agent: "Pedro",
      time: "15:15",
      priority: "Alta"
    },
  ];

  const templates = [
    {
      id: 1,
      name: "Boas-vindas",
      type: "Email",
      subject: "Bem-vindo ao nosso restaurante!",
      usage: 45,
      active: true
    },
    {
      id: 2,
      name: "Confirmação de Pedido",
      type: "SMS",
      subject: "Seu pedido foi confirmado",
      usage: 234,
      active: true
    },
    {
      id: 3,
      name: "Pedido Pronto",
      type: "WhatsApp",
      subject: "Seu pedido está pronto!",
      usage: 156,
      active: true
    },
    {
      id: 4,
      name: "Feedback",
      type: "Email",
      subject: "Como foi sua experiência?",
      usage: 67,
      active: false
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "respondida": return "default";
      case "resolvida": return "default";
      case "pendente": return "destructive";
      case "em andamento": return "secondary";
      default: return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "alta": return "text-red-600";
      case "média": return "text-yellow-600";
      case "baixa": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Central de Comunicação</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <MessageCircle className="h-4 w-4 mr-2" />
            Centro de Ajuda
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Mensagem
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communicationStats.map((stat, index) => (
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

      <Tabs defaultValue="messages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="messages">Mensagens</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="broadcast">Broadcast</TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Central de Mensagens
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Buscar mensagens..." className="pl-10 w-64" />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Assunto</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Atendente</TableHead>
                    <TableHead>Prioridade</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell className="font-medium">{message.id}</TableCell>
                      <TableCell>{message.customer}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{message.type}</Badge>
                      </TableCell>
                      <TableCell>{message.subject}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(message.status)}>
                          {message.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{message.agent}</TableCell>
                      <TableCell>
                        <span className={getPriorityColor(message.priority)}>
                          {message.priority}
                        </span>
                      </TableCell>
                      <TableCell>{message.time}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Responder</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Templates de Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template) => (
                  <div key={template.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{template.name}</h3>
                        <p className="text-sm text-muted-foreground">{template.subject}</p>
                      </div>
                      <Badge variant={template.active ? "default" : "secondary"}>
                        {template.active ? "Ativo" : "Inativo"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{template.type}</Badge>
                        <span className="text-sm text-muted-foreground">{template.usage} usos</span>
                      </div>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="broadcast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Envio em Massa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo de Mensagem</label>
                  <select className="w-full p-2 border border-border rounded-md">
                    <option>Email</option>
                    <option>SMS</option>
                    <option>WhatsApp</option>
                    <option>Push Notification</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Público Alvo</label>
                  <select className="w-full p-2 border border-border rounded-md">
                    <option>Todos os clientes</option>
                    <option>Clientes ativos</option>
                    <option>Clientes VIP</option>
                    <option>Lista personalizada</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Assunto</label>
                <Input placeholder="Digite o assunto da mensagem..." />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea 
                  placeholder="Digite sua mensagem aqui..." 
                  className="min-h-32" 
                />
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Esta mensagem será enviada para aproximadamente 1,234 pessoas
                </p>
                <div className="flex gap-2">
                  <Button variant="outline">Visualizar</Button>
                  <Button>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Communication;