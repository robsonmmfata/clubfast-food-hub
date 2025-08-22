import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, BarChart3, Target, TrendingUp, Users, Share2, Eye, Calendar } from "lucide-react";

const MarketingMerchant = () => {
  const campaigns = [
    { 
      id: 1, 
      name: "Promoção Weekend", 
      type: "Email Marketing", 
      status: "Ativa", 
      reach: 2450, 
      clicks: 156, 
      conversions: 23, 
      budget: "R$ 500,00", 
      spent: "R$ 120,00" 
    },
    { 
      id: 2, 
      name: "Black Friday 2024", 
      type: "Social Media", 
      status: "Programada", 
      reach: 0, 
      clicks: 0, 
      conversions: 0, 
      budget: "R$ 1.200,00", 
      spent: "R$ 0,00" 
    },
    { 
      id: 3, 
      name: "Volta às Aulas", 
      type: "Google Ads", 
      status: "Finalizada", 
      reach: 5430, 
      clicks: 342, 
      conversions: 89, 
      budget: "R$ 800,00", 
      spent: "R$ 780,00" 
    },
  ];

  const socialStats = [
    { platform: "Instagram", followers: "12.5K", posts: 45, engagement: "4.2%" },
    { platform: "Facebook", followers: "8.9K", posts: 32, engagement: "3.8%" },
    { platform: "TikTok", followers: "5.2K", posts: 28, engagement: "6.1%" },
    { platform: "YouTube", followers: "2.1K", posts: 12, engagement: "5.4%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Marketing Digital</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Campanha
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              ROI Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">325%</div>
            <p className="text-xs text-muted-foreground">Retorno investimento</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4" />
              Taxa Conversão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8%</div>
            <p className="text-xs text-muted-foreground">+0.5% vs mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Alcance Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.6K</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Orçamento Usado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.340,00</div>
            <Progress value={68} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">68% de R$ 3.500,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Campanhas Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campanha</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Conversões</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{campaign.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Alcance: {campaign.reach.toLocaleString()}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{campaign.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={campaign.status === "Ativa" ? "default" : 
                                   campaign.status === "Programada" ? "secondary" : "outline"}>
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{campaign.conversions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Redes Sociais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {socialStats.map((social, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">{social.platform[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium">{social.platform}</p>
                    <p className="text-sm text-muted-foreground">
                      {social.followers} seguidores • {social.posts} posts
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{social.engagement}</p>
                  <p className="text-xs text-muted-foreground">Engajamento</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Criar Campanha</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="campaignName">Nome da Campanha</Label>
              <Input id="campaignName" placeholder="Ex: Promoção Verão 2024..." />
            </div>
            <div>
              <Label htmlFor="campaignType">Tipo de Campanha</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Email Marketing</option>
                <option>Google Ads</option>
                <option>Facebook Ads</option>
                <option>Instagram Ads</option>
                <option>Social Media Orgânico</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="budget">Orçamento</Label>
                <Input id="budget" placeholder="R$ 500,00" />
              </div>
              <div>
                <Label htmlFor="duration">Duração (dias)</Label>
                <Input id="duration" type="number" placeholder="30" />
              </div>
            </div>
            <div>
              <Label htmlFor="target">Público-Alvo</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Todos os clientes</option>
                <option>Clientes frequentes</option>
                <option>Novos clientes</option>
                <option>Público local</option>
                <option>Personalizado</option>
              </select>
            </div>
            <Button className="w-full">Criar e Iniciar Campanha</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Performance Semanal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Impressões</span>
                <span className="font-semibold">45.2K</span>
              </div>
              <Progress value={78} />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Cliques</span>
                <span className="font-semibold">2.1K</span>
              </div>
              <Progress value={65} />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Conversões</span>
                <span className="font-semibold">156</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">CTR</p>
                <p className="text-lg font-bold">4.7%</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">CPC</p>
                <p className="text-lg font-bold">R$ 1,20</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketingMerchant;