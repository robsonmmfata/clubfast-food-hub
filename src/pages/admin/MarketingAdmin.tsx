import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Send, Edit, Trash2, Users, Mail, MessageSquare, TrendingUp } from "lucide-react";

const MarketingAdmin = () => {
  const campaigns = [
    { id: 1, name: "Promoção de Verão", type: "E-mail", status: "Ativa", audience: "5.234", sent: "4.890", opens: "2.145", clicks: "432" },
    { id: 2, name: "Desconto Primeira Compra", type: "Push", status: "Pausada", audience: "12.450", sent: "12.450", opens: "8.234", clicks: "1.234" },
    { id: 3, name: "Cashback Weekend", type: "SMS", status: "Finalizada", audience: "3.456", sent: "3.456", opens: "2.890", clicks: "567" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Marketing e Campanhas</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Campanha
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Campanhas Ativas</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21.140</div>
            <p className="text-xs text-muted-foreground">Base de usuários ativa</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Abertura</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.3%</div>
            <p className="text-xs text-muted-foreground">+3.2% do mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Clique</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8%</div>
            <p className="text-xs text-muted-foreground">+0.5% do mês passado</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="create">Criar Campanha</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campanhas Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Audiência</TableHead>
                    <TableHead>Enviados</TableHead>
                    <TableHead>Aberturas</TableHead>
                    <TableHead>Cliques</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.type}</TableCell>
                      <TableCell>
                        <Badge variant={
                          campaign.status === "Ativa" ? "default" : 
                          campaign.status === "Pausada" ? "secondary" : "outline"
                        }>
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.audience}</TableCell>
                      <TableCell>{campaign.sent}</TableCell>
                      <TableCell>{campaign.opens}</TableCell>
                      <TableCell>{campaign.clicks}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
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

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Criar Nova Campanha</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="campaign-name">Nome da Campanha</Label>
                  <Input id="campaign-name" placeholder="Ex: Promoção Black Friday" />
                </div>
                <div>
                  <Label htmlFor="campaign-type">Tipo de Campanha</Label>
                  <select className="w-full p-2 border border-input rounded-md">
                    <option>E-mail Marketing</option>
                    <option>Push Notification</option>
                    <option>SMS Marketing</option>
                    <option>In-App Message</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="campaign-subject">Assunto/Título</Label>
                <Input id="campaign-subject" placeholder="Título da sua campanha" />
              </div>
              <div>
                <Label htmlFor="campaign-content">Conteúdo da Mensagem</Label>
                <Textarea 
                  id="campaign-content" 
                  placeholder="Escreva o conteúdo da sua campanha aqui..."
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="target-audience">Público-Alvo</Label>
                  <select className="w-full p-2 border border-input rounded-md">
                    <option>Todos os usuários</option>
                    <option>Usuários ativos</option>
                    <option>Novos usuários</option>
                    <option>Usuários inativos</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="send-time">Agendar Envio</Label>
                  <Input id="send-time" type="datetime-local" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Agora
                </Button>
                <Button variant="outline">Salvar como Rascunho</Button>
                <Button variant="outline">Prévia</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Templates de Campanha</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Boas-vindas", description: "Template para novos usuários" },
                  { name: "Promoção", description: "Template para ofertas especiais" },
                  { name: "Abandono de Carrinho", description: "Recuperar carrinhos abandonados" },
                  { name: "Aniversário", description: "Felicitar usuários" },
                  { name: "Reativação", description: "Reativar usuários inativos" },
                  { name: "Produto Novo", description: "Lançamento de produtos" },
                ].map((template, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Usar Template
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingAdmin;