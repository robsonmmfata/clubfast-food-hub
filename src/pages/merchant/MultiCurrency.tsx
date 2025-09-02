import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { DollarSign, TrendingUp, Globe, RefreshCw, Search, Plus } from "lucide-react";

const MultiCurrency = () => {
  const currencyStats = [
    { title: "Moedas Ativas", value: "5", change: "+2", icon: Globe },
    { title: "Vendas USD", value: "$2,450", change: "+18%", icon: DollarSign },
    { title: "Taxa Conversão", value: "5.2", change: "+0.1", icon: TrendingUp },
    { title: "Última Atualização", value: "2min", change: "Agora", icon: RefreshCw },
  ];

  const currencies = [
    {
      code: "BRL",
      name: "Real Brasileiro",
      symbol: "R$",
      rate: 1.0000,
      active: true,
      primary: true,
      sales: "R$ 15.680,00"
    },
    {
      code: "USD", 
      name: "Dólar Americano",
      symbol: "$",
      rate: 0.1923,
      active: true,
      primary: false,
      sales: "$2.450,00"
    },
    {
      code: "EUR",
      name: "Euro",
      symbol: "€",
      rate: 0.1785,
      active: true,
      primary: false,
      sales: "€1.890,00"
    },
    {
      code: "GBP",
      name: "Libra Esterlina",
      symbol: "£",
      rate: 0.1534,
      active: false,
      primary: false,
      sales: "£0,00"
    },
    {
      code: "ARS",
      name: "Peso Argentino",
      symbol: "$",
      rate: 158.45,
      active: true,
      primary: false,
      sales: "$45.680,00"
    },
  ];

  const exchangeHistory = [
    { date: "2024-01-15", pair: "USD/BRL", rate: 5.2045, change: "+0.12%" },
    { date: "2024-01-14", pair: "EUR/BRL", rate: 5.6123, change: "-0.08%" },
    { date: "2024-01-14", pair: "ARS/BRL", rate: 0.0063, change: "+0.25%" },
    { date: "2024-01-13", pair: "USD/BRL", rate: 5.1983, change: "+0.05%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Multi-Moeda</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar Cotações
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Moeda
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currencyStats.map((stat, index) => (
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

      <Tabs defaultValue="currencies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="currencies">Moedas</TabsTrigger>
          <TabsTrigger value="rates">Taxas</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="currencies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Moedas Configuradas
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Buscar moeda..." className="pl-10 w-64" />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Código</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Símbolo</TableHead>
                    <TableHead>Taxa (para BRL)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Vendas</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currencies.map((currency) => (
                    <TableRow key={currency.code}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {currency.code}
                          {currency.primary && (
                            <Badge variant="default" className="text-xs">Principal</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{currency.name}</TableCell>
                      <TableCell>{currency.symbol}</TableCell>
                      <TableCell className="font-mono">{currency.rate.toFixed(4)}</TableCell>
                      <TableCell>
                        <Badge variant={currency.active ? "default" : "secondary"}>
                          {currency.active ? "Ativa" : "Inativa"}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{currency.sales}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Switch checked={currency.active} />
                          <Button size="sm" variant="outline">Editar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Taxas de Câmbio</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Par</TableHead>
                    <TableHead>Taxa</TableHead>
                    <TableHead>Variação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exchangeHistory.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell className="font-medium">{record.pair}</TableCell>
                      <TableCell className="font-mono">{record.rate}</TableCell>
                      <TableCell>
                        <span className={record.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                          {record.change}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Multi-Moeda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Moeda Principal</label>
                  <Input defaultValue="BRL - Real Brasileiro" disabled />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fonte de Cotações</label>
                  <Input defaultValue="API Central Bank" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Intervalo de Atualização</label>
                  <Input defaultValue="5 minutos" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Margem de Segurança (%)</label>
                  <Input type="number" defaultValue="2.5" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Configurações de Exibição</h3>
                <div className="space-y-3">
                  {[
                    { label: "Mostrar preços em múltiplas moedas", checked: true },
                    { label: "Conversão automática no checkout", checked: true },
                    { label: "Exibir histórico de variação", checked: false },
                    { label: "Alertas de variação de taxa", checked: true },
                  ].map((setting, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <label className="text-sm">{setting.label}</label>
                      <Switch checked={setting.checked} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Salvar Configurações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MultiCurrency;