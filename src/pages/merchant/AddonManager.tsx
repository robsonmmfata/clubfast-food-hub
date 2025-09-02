import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Puzzle, Download, Star, Shield, Search, Plus } from "lucide-react";

const AddonManager = () => {
  const addonStats = [
    { title: "Addons Instalados", value: "12", change: "+3", icon: Puzzle },
    { title: "Addons Ativos", value: "8", change: "+1", icon: Shield },
    { title: "Avaliação Média", value: "4.6", change: "+0.2", icon: Star },
    { title: "Downloads", value: "234", change: "+45", icon: Download },
  ];

  const installedAddons = [
    {
      id: 1,
      name: "Sistema de Delivery Avançado",
      version: "2.1.0",
      author: "TechFood Solutions",
      description: "Gestão completa de delivery com rastreamento em tempo real",
      status: "Ativo",
      rating: 4.8,
      price: "R$ 29,90/mês",
      category: "Delivery"
    },
    {
      id: 2,
      name: "Programa de Fidelidade Plus",
      version: "1.5.2",
      author: "LoyaltyTech",
      description: "Sistema avançado de pontos e recompensas para clientes",
      status: "Ativo",
      rating: 4.7,
      price: "R$ 19,90/mês",
      category: "Marketing"
    },
    {
      id: 3,
      name: "Relatórios Analytics Pro",
      version: "3.0.1",
      author: "DataRestaurant",
      description: "Relatórios detalhados e análises de performance",
      status: "Inativo",
      rating: 4.9,
      price: "R$ 39,90/mês",
      category: "Relatórios"
    },
    {
      id: 4,
      name: "Integração WhatsApp Business",
      version: "1.2.3",
      author: "ChatIntegra",
      description: "Pedidos e atendimento via WhatsApp automatizado",
      status: "Ativo",
      rating: 4.5,
      price: "R$ 15,90/mês",
      category: "Comunicação"
    },
  ];

  const availableAddons = [
    {
      id: 5,
      name: "Sistema de Reservas Premium",
      author: "BookingPro",
      description: "Gestão avançada de reservas com confirmação automática",
      rating: 4.6,
      price: "R$ 24,90/mês",
      category: "Reservas",
      downloads: 1200
    },
    {
      id: 6,
      name: "Multi-Pagamento Gateway",
      author: "PaymentTech",
      description: "Aceite diversos meios de pagamento com segurança",
      rating: 4.8,
      price: "R$ 34,90/mês",
      category: "Pagamentos",
      downloads: 2100
    },
    {
      id: 7,
      name: "Cardápio Digital QR Code",
      author: "DigitalMenu",
      description: "Cardápio digital com QR Code para mesas",
      rating: 4.7,
      price: "R$ 12,90/mês",
      category: "Cardápio",
      downloads: 890
    },
  ];

  const categories = [
    { name: "Todos", count: 15, active: true },
    { name: "Delivery", count: 3, active: false },
    { name: "Marketing", count: 4, active: false },
    { name: "Pagamentos", count: 2, active: false },
    { name: "Relatórios", count: 3, active: false },
    { name: "Comunicação", count: 2, active: false },
    { name: "Outros", count: 1, active: false },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "ativo": return "default";
      case "inativo": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciador de Addons</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Atualizações
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Buscar Addons
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {addonStats.map((stat, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Categorias</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                  category.active ? "bg-primary/10 text-primary" : "hover:bg-muted"
                }`}
              >
                <span className="text-sm">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Addons Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="installed" className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="installed">Instalados</TabsTrigger>
                <TabsTrigger value="available">Disponíveis</TabsTrigger>
              </TabsList>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Buscar addons..." className="pl-10 w-64" />
              </div>
            </div>

            <TabsContent value="installed" className="space-y-4">
              <div className="space-y-4">
                {installedAddons.map((addon) => (
                  <Card key={addon.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Puzzle className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold">{addon.name}</h3>
                              <Badge variant="outline">{addon.category}</Badge>
                              <Badge variant={getStatusVariant(addon.status)}>
                                {addon.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {addon.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>v{addon.version}</span>
                              <span>por {addon.author}</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{addon.rating}</span>
                              </div>
                              <span className="font-medium text-primary">{addon.price}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch checked={addon.status === "Ativo"} />
                          <Button size="sm" variant="outline">
                            Configurar
                          </Button>
                          <Button size="sm" variant="outline">
                            Desinstalar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="available" className="space-y-4">
              <div className="space-y-4">
                {availableAddons.map((addon) => (
                  <Card key={addon.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <Puzzle className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold">{addon.name}</h3>
                              <Badge variant="outline">{addon.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {addon.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>por {addon.author}</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{addon.rating}</span>
                              </div>
                              <span>{addon.downloads} downloads</span>
                              <span className="font-medium text-primary">{addon.price}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            Visualizar
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Instalar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AddonManager;