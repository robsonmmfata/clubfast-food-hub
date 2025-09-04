import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Gift, Trophy, Users, TrendingUp, Settings, Plus, Award } from "lucide-react";

const LoyaltyPointsAdmin = () => {
  const loyaltyStats = [
    { label: "Usuários no Programa", value: "12,543", trend: "+18%", icon: Users },
    { label: "Pontos Distribuídos", value: "245K", trend: "+25%", icon: Star },
    { label: "Recompensas Resgatadas", value: "1,890", trend: "+12%", icon: Gift },
    { label: "Taxa de Engajamento", value: "67%", trend: "+5%", icon: TrendingUp },
  ];

  const loyaltyTiers = [
    {
      id: 1,
      name: "Bronze",
      minPoints: 0,
      maxPoints: 500,
      benefits: ["5% de desconto", "Frete grátis acima de R$ 50"],
      members: 8500,
      color: "bg-amber-100",
      active: true
    },
    {
      id: 2,
      name: "Prata",
      minPoints: 501,
      maxPoints: 1500,
      benefits: ["10% de desconto", "Frete grátis sempre", "Promoções exclusivas"],
      members: 3200,
      color: "bg-gray-100",
      active: true
    },
    {
      id: 3,
      name: "Ouro",
      minPoints: 1501,
      maxPoints: 5000,
      benefits: ["15% de desconto", "Entrega prioritária", "Suporte VIP"],
      members: 750,
      color: "bg-yellow-100",
      active: true
    },
    {
      id: 4,
      name: "Diamante",
      minPoints: 5001,
      maxPoints: null,
      benefits: ["20% de desconto", "Entrega grátis e rápida", "Experiências exclusivas"],
      members: 93,
      color: "bg-blue-100",
      active: true
    },
  ];

  const rewardRules = [
    {
      id: 1,
      action: "Pedido Realizado",
      points: 10,
      condition: "Por cada R$ 1,00 gasto",
      active: true
    },
    {
      id: 2,
      action: "Primeira Compra",
      points: 100,
      condition: "Usuário novo",
      active: true
    },
    {
      id: 3,
      action: "Avaliação",
      points: 50,
      condition: "Avaliar pedido (4+ estrelas)",
      active: true
    },
    {
      id: 4,
      action: "Indicação",
      points: 200,
      condition: "Indicar amigo que faz primeiro pedido",
      active: false
    },
  ];

  const topUsers = [
    { name: "Maria Silva", points: 8420, tier: "Diamante", spent: "R$ 4.250" },
    { name: "João Santos", points: 6890, tier: "Diamante", spent: "R$ 3.890" },
    { name: "Ana Costa", points: 4560, tier: "Ouro", spent: "R$ 2.780" },
    { name: "Pedro Lima", points: 3240, tier: "Ouro", spent: "R$ 1.950" },
    { name: "Carla Nunes", points: 2150, tier: "Prata", spent: "R$ 1.340" },
  ];

  const recentRedemptions = [
    {
      id: 1,
      user: "Maria Silva",
      reward: "Desconto 20%",
      points: 500,
      date: "Hoje",
      status: "Usado"
    },
    {
      id: 2,
      user: "João Santos",
      reward: "Frete Grátis",
      points: 200,
      date: "Ontem",
      status: "Ativo"
    },
    {
      id: 3,
      user: "Ana Costa",
      reward: "Pizza Grátis",
      points: 1000,
      date: "2 dias atrás",
      status: "Usado"
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Bronze": return "text-amber-600";
      case "Prata": return "text-gray-600";
      case "Ouro": return "text-yellow-600";
      case "Diamante": return "text-blue-600";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Loyalty Points Admin</h1>
          <p className="text-muted-foreground">Gerencie programa de fidelidade e recompensas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Award className="h-4 w-4 mr-2" />
            Nova Campanha
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nova Recompensa
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loyaltyStats.map((stat, index) => (
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

      <Tabs defaultValue="tiers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="tiers">Níveis</TabsTrigger>
          <TabsTrigger value="rules">Regras de Pontos</TabsTrigger>
          <TabsTrigger value="rewards">Recompensas</TabsTrigger>
          <TabsTrigger value="users">Top Usuários</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="tiers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Níveis de Fidelidade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {loyaltyTiers.map((tier) => (
                  <Card key={tier.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${tier.color} rounded-lg flex items-center justify-center`}>
                            <Trophy className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{tier.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {tier.minPoints} - {tier.maxPoints || "∞"} pontos
                            </p>
                            <div className="space-y-1">
                              {tier.benefits.map((benefit, index) => (
                                <span key={index} className="text-xs bg-muted px-2 py-1 rounded mr-2 block w-fit">
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{tier.members}</div>
                          <p className="text-sm text-muted-foreground">membros</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Switch defaultChecked={tier.active} />
                            <Button variant="outline" size="sm">Editar</Button>
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

        <TabsContent value="rules" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Regras de Pontuação</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Regra
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rewardRules.map((rule) => (
                  <Card key={rule.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{rule.action}</h4>
                          <p className="text-sm text-muted-foreground">{rule.condition}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">+{rule.points}</div>
                            <p className="text-xs text-muted-foreground">pontos</p>
                          </div>
                          <Switch defaultChecked={rule.active} />
                          <Button variant="outline" size="sm">Editar</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resgates Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRedemptions.map((redemption) => (
                  <Card key={redemption.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{redemption.user}</h4>
                          <p className="text-sm text-muted-foreground">{redemption.reward}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-sm font-medium">-{redemption.points} pontos</div>
                            <p className="text-xs text-muted-foreground">{redemption.date}</p>
                          </div>
                          <Badge variant={redemption.status === "Usado" ? "secondary" : "default"}>
                            {redemption.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Usuários por Pontos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topUsers.map((user, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-medium">{user.name}</h4>
                            <p className={`text-sm font-medium ${getTierColor(user.tier)}`}>
                              {user.tier}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{user.points}</div>
                          <p className="text-sm text-muted-foreground">pontos</p>
                          <p className="text-xs text-muted-foreground">{user.spent} gasto total</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics do Programa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Pontos Médios/Usuário</h4>
                    <div className="text-2xl font-bold">1,450</div>
                    <p className="text-sm text-green-500">+12% vs mês anterior</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Taxa de Resgate</h4>
                    <div className="text-2xl font-bold">23%</div>
                    <p className="text-sm text-green-500">+5% vs mês anterior</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Valor Médio por Resgate</h4>
                    <div className="text-2xl font-bold">R$ 25</div>
                    <p className="text-sm text-green-500">+8% vs mês anterior</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">ROI do Programa</h4>
                    <div className="text-2xl font-bold">340%</div>
                    <p className="text-sm text-green-500">+15% vs mês anterior</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Programa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Programa Ativo</h4>
                    <p className="text-sm text-muted-foreground">Ativar programa de fidelidade</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Auto-upgrade de Nível</h4>
                    <p className="text-sm text-muted-foreground">Promover usuários automaticamente</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações de Pontos</h4>
                    <p className="text-sm text-muted-foreground">Notificar sobre ganho de pontos</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações Gerais</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Pontos por R$ 1,00</label>
                    <Input type="number" defaultValue="10" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Validade dos pontos (dias)</label>
                    <Input type="number" defaultValue="365" />
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

export default LoyaltyPointsAdmin;