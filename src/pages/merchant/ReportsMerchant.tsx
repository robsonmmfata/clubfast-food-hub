import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Download, Calendar, TrendingUp } from "lucide-react";

const ReportsMerchant = () => {
  const reportStats = [
    { title: "Relatórios Gerados", value: "45", change: "+8%", icon: BarChart3 },
    { title: "Downloads", value: "123", change: "+15%", icon: Download },
    { title: "Período Médio", value: "30 dias", change: "Estável", icon: Calendar },
    { title: "Taxa de Crescimento", value: "12%", change: "+3%", icon: TrendingUp },
  ];

  const reportTypes = [
    {
      name: "Vendas por Período",
      description: "Relatório detalhado de vendas por data",
      icon: BarChart3,
      lastGenerated: "Há 2 horas"
    },
    {
      name: "Produtos Mais Vendidos", 
      description: "Ranking dos produtos com melhor performance",
      icon: TrendingUp,
      lastGenerated: "Há 1 dia"
    },
    {
      name: "Relatório Financeiro",
      description: "Resumo completo da situação financeira",
      icon: Download,
      lastGenerated: "Há 3 dias"
    },
    {
      name: "Análise de Clientes",
      description: "Comportamento e perfil dos clientes",
      icon: Calendar,
      lastGenerated: "Há 1 semana"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Exportar Dados
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((stat, index) => (
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

      <Tabs defaultValue="generate" className="space-y-4">
        <TabsList>
          <TabsTrigger value="generate">Gerar Relatórios</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportTypes.map((report, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <report.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{report.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {report.description}
                      </p>
                      <p className="text-xs text-muted-foreground mb-4">
                        Último gerado: {report.lastGenerated}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm">Gerar Agora</Button>
                        <Button size="sm" variant="outline">Configurar</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Anteriores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium">Vendas Janeiro 2024</h3>
                    <p className="text-sm text-muted-foreground">Gerado em 15/01/2024 às 14:30</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium">Relatório Financeiro Dezembro</h3>
                    <p className="text-sm text-muted-foreground">Gerado em 02/01/2024 às 09:15</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
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

export default ReportsMerchant;