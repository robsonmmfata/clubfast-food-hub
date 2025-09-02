import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Gift, Users, TrendingUp, Search, Plus } from "lucide-react";

const LoyaltyPoints = () => {
  const loyaltyStats = [
    { title: "Membros Ativos", value: "1,234", change: "+18%", icon: Users },
    { title: "Pontos Distribuídos", value: "45,678", change: "+25%", icon: Star },
    { title: "Recompensas Resgatadas", value: "89", change: "+12%", icon: Gift },
    { title: "Taxa de Retenção", value: "87%", change: "+5%", icon: TrendingUp },
  ];

  const members = [
    {
      id: "M001",
      name: "João Silva",
      email: "joao@email.com",
      points: 1250,
      level: "Gold",
      totalSpent: "R$ 850,00",
      lastVisit: "2 dias"
    },
    {
      id: "M002",
      name: "Maria Santos", 
      email: "maria@email.com",
      points: 890,
      level: "Silver",
      totalSpent: "R$ 650,00",
      lastVisit: "1 semana"
    },
    {
      id: "M003",
      name: "Pedro Costa",
      email: "pedro@email.com", 
      points: 2340,
      level: "Platinum",
      totalSpent: "R$ 1.200,00",
      lastVisit: "1 dia"
    },
  ];

  const rewards = [
    { name: "Desconto 10%", cost: 500, type: "Desconto", active: true },
    { name: "Combo Grátis", cost: 1000, type: "Produto", active: true },
    { name: "Entrega Grátis", cost: 300, type: "Serviço", active: true },
    { name: "Desconto 20%", cost: 1500, type: "Desconto", active: false },
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "platinum": return "bg-purple-100 text-purple-800";
      case "gold": return "bg-yellow-100 text-yellow-800";
      case "silver": return "bg-gray-100 text-gray-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Programa de Fidelidade</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Star className="h-4 w-4 mr-2" />
            Configurar Níveis
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Recompensa
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loyaltyStats.map((stat, index) => (
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

      <Tabs defaultValue="members" className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Membros</TabsTrigger>
          <TabsTrigger value="rewards">Recompensas</TabsTrigger>
          <TabsTrigger value="levels">Níveis</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Membros do Programa
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Buscar membros..." className="pl-10 w-64" />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Pontos</TableHead>
                    <TableHead>Nível</TableHead>
                    <TableHead>Total Gasto</TableHead>
                    <TableHead>Última Visita</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.id}</TableCell>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell className="font-medium text-primary">{member.points}</TableCell>
                      <TableCell>
                        <Badge className={getLevelColor(member.level)}>
                          {member.level}
                        </Badge>
                      </TableCell>
                      <TableCell>{member.totalSpent}</TableCell>
                      <TableCell>{member.lastVisit}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Editar</Button>
                          <Button size="sm" variant="outline">Histórico</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recompensas Disponíveis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rewards.map((reward, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{reward.name}</h3>
                        <p className="text-sm text-muted-foreground">{reward.type}</p>
                      </div>
                      <Badge variant={reward.active ? "default" : "secondary"}>
                        {reward.active ? "Ativa" : "Inativa"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">{reward.cost} pts</span>
                      </div>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="levels" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Níveis de Fidelidade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Bronze", minPoints: 0, benefits: "5% de desconto", color: "bg-orange-100 text-orange-800" },
                  { name: "Silver", minPoints: 500, benefits: "10% de desconto + frete grátis", color: "bg-gray-100 text-gray-800" },
                  { name: "Gold", minPoints: 1000, benefits: "15% de desconto + brinde mensal", color: "bg-yellow-100 text-yellow-800" },
                  { name: "Platinum", minPoints: 2000, benefits: "20% de desconto + acesso VIP", color: "bg-purple-100 text-purple-800" },
                ].map((level, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Badge className={level.color}>
                        {level.name}
                      </Badge>
                      <div>
                        <p className="font-medium">A partir de {level.minPoints} pontos</p>
                        <p className="text-sm text-muted-foreground">{level.benefits}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Editar</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoyaltyPoints;