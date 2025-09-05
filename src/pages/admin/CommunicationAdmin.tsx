import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Mail, Bell, Send, Users, Settings, Eye, Edit, Trash2, Plus } from "lucide-react";

const CommunicationAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const communicationStats = [
    { label: "Mensagens Enviadas", value: "2,456", trend: "+18%", icon: MessageSquare },
    { label: "Emails Entregues", value: "1,892", trend: "+12%", icon: Mail },
    { label: "Push Notifications", value: "3,247", trend: "+25%", icon: Bell },
    { label: "Taxa de Abertura", value: "68%", trend: "+3%", icon: Users },
  ];

  const campaigns = [
    { id: 1, name: "Promoção de Verão", type: "Email", recipients: 1250, status: "Ativo", sent: "85%", opened: "42%", created: "2024-01-10" },
    { id: 2, name: "Novos Pratos", type: "Push", recipients: 890, status: "Concluído", sent: "100%", opened: "65%", created: "2024-01-08" },
    { id: 3, name: "Desconto Fim de Semana", type: "SMS", recipients: 2100, status: "Agendado", sent: "0%", opened: "0%", created: "2024-01-12" },
    { id: 4, name: "Programa Fidelidade", type: "Email", recipients: 750, status: "Rascunho", sent: "0%", opened: "0%", created: "2024-01-14" },
  ];

  const templates = [
    { id: 1, name: "Boas-vindas", type: "Email", usage: 45, status: "Ativo", lastUsed: "2 dias atrás" },
    { id: 2, name: "Confirmação Pedido", type: "SMS", usage: 892, status: "Ativo", lastUsed: "1 min atrás" },
    { id: 3, name: "Promoção Semanal", type: "Push", usage: 23, status: "Inativo", lastUsed: "1 semana atrás" },
    { id: 4, name: "Recuperação Carrinho", type: "Email", usage: 156, status: "Ativo", lastUsed: "5 min atrás" },
  ];

  const automations = [
    { id: 1, name: "Boas-vindas Novo Usuário", trigger: "Cadastro", active: true, sent: 234, rate: "78%" },
    { id: 2, name: "Pedido Abandonado", trigger: "Carrinho 30min", active: true, sent: 156, rate: "45%" },
    { id: 3, name: "Aniversário Cliente", trigger: "Data Aniversário", active: false, sent: 89, rate: "92%" },
    { id: 4, name: "Reativação 30 dias", trigger: "Inatividade", active: true, sent: 67, rate: "23%" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "default";
      case "Concluído": return "outline";
      case "Agendado": return "secondary";
      case "Rascunho": return "secondary";
      case "Inativo": return "destructive";
      default: return "secondary";
    }
  };

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Communication</h1>
          <p className="text-muted-foreground">Gerencie campanhas e comunicação com usuários</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Campanha
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
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.trend}</p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="automation">Automação</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Campanhas de Comunicação</CardTitle>
                <Input
                  placeholder="Buscar campanhas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Destinatários</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Enviados</TableHead>
                    <TableHead>Abertos</TableHead>
                    <TableHead>Criado em</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{campaign.type}</Badge>
                      </TableCell>
                      <TableCell>{campaign.recipients}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(campaign.status)}>
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.sent}</TableCell>
                      <TableCell>{campaign.opened}</TableCell>
                      <TableCell>{campaign.created}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Templates de Mensagem</CardTitle>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Usos</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Último Uso</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{template.type}</Badge>
                      </TableCell>
                      <TableCell>{template.usage}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(template.status)}>
                          {template.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{template.lastUsed}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation">
          <Card>
            <CardHeader>
              <CardTitle>Automações de Comunicação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {automations.map((automation) => (
                  <Card key={automation.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{automation.name}</h4>
                          <p className="text-sm text-muted-foreground">Gatilho: {automation.trigger}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium">{automation.sent} enviados</p>
                            <p className="text-xs text-muted-foreground">Taxa: {automation.rate}</p>
                          </div>
                          <Switch checked={automation.active} />
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
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

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Geral</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Taxa de entrega</span>
                  <span className="font-semibold">95.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de abertura</span>
                  <span className="font-semibold">68.4%</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de clique</span>
                  <span className="font-semibold">23.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de descadastro</span>
                  <span className="font-semibold">1.2%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estatísticas por Canal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Email</span>
                  <span className="font-semibold">1,892 enviados</span>
                </div>
                <div className="flex justify-between">
                  <span>SMS</span>
                  <span className="font-semibold">954 enviados</span>
                </div>
                <div className="flex justify-between">
                  <span>Push Notification</span>
                  <span className="font-semibold">3,247 enviados</span>
                </div>
                <div className="flex justify-between">
                  <span>In-App</span>
                  <span className="font-semibold">567 enviados</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Servidor SMTP</label>
                  <Input placeholder="smtp.gmail.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Porta</label>
                  <Input placeholder="587" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email do remetente</label>
                  <Input placeholder="noreply@clubfast.com" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações de SMS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Provedor SMS</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o provedor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twilio">Twilio</SelectItem>
                      <SelectItem value="nexmo">Nexmo</SelectItem>
                      <SelectItem value="local">Provedor Local</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome do remetente</label>
                  <Input placeholder="ClubFast" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações automáticas</h4>
                    <p className="text-sm text-muted-foreground">Enviar notificações automáticas de sistema</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Rastreamento de abertura</h4>
                    <p className="text-sm text-muted-foreground">Rastrear abertura de emails</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button>Salvar Configurações</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunicationAdmin;