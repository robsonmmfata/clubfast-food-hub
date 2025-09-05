import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, TrendingUp, Globe, RefreshCw, Settings, Edit, Trash2, Plus } from "lucide-react";

const MultiCurrencyAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const currencyStats = [
    { label: "Moedas Ativas", value: "8", trend: "+2", icon: Globe },
    { label: "Volume Total", value: "$125K", trend: "+15%", icon: DollarSign },
    { label: "Taxa Câmbio Média", value: "3.2%", trend: "-0.1%", icon: TrendingUp },
    { label: "Atualizações Hoje", value: "24", trend: "+8", icon: RefreshCw },
  ];

  const currencies = [
    { id: 1, code: "USD", name: "Dólar Americano", symbol: "$", rate: 1.0000, status: "Ativo", lastUpdate: "2 min atrás" },
    { id: 2, code: "BRL", name: "Real Brasileiro", symbol: "R$", rate: 5.2450, status: "Ativo", lastUpdate: "2 min atrás" },
    { id: 3, code: "EUR", name: "Euro", symbol: "€", rate: 0.9120, status: "Ativo", lastUpdate: "5 min atrás" },
    { id: 4, code: "GBP", name: "Libra Esterlina", symbol: "£", rate: 0.7890, status: "Ativo", lastUpdate: "3 min atrás" },
    { id: 5, code: "JPY", name: "Iene Japonês", symbol: "¥", rate: 149.50, status: "Inativo", lastUpdate: "1 hora atrás" },
    { id: 6, code: "CAD", name: "Dólar Canadense", symbol: "C$", rate: 1.3450, status: "Ativo", lastUpdate: "4 min atrás" },
  ];

  const transactions = [
    { id: 1, restaurant: "McDonald's", from: "USD", to: "BRL", amount: "$250.00", converted: "R$ 1.312,50", rate: 5.25, fee: "$2.50" },
    { id: 2, restaurant: "Pizza Hut", from: "EUR", to: "USD", amount: "€180.00", converted: "$197.40", rate: 1.097, fee: "$1.80" },
    { id: 3, restaurant: "Subway", from: "BRL", to: "USD", amount: "R$ 524.00", converted: "$100.00", rate: 5.24, fee: "R$ 5.24" },
    { id: 4, restaurant: "Jollibee", from: "GBP", to: "USD", amount: "£150.00", converted: "$190.13", rate: 1.267, fee: "$1.50" },
  ];

  const exchangeRates = [
    { from: "USD", to: "BRL", rate: 5.2450, change: "+0.25%", trend: "up" },
    { from: "USD", to: "EUR", rate: 0.9120, change: "-0.15%", trend: "down" },
    { from: "USD", to: "GBP", rate: 0.7890, change: "+0.08%", trend: "up" },
    { from: "USD", to: "JPY", rate: 149.50, change: "+1.2%", trend: "up" },
    { from: "USD", to: "CAD", rate: 1.3450, change: "-0.05%", trend: "down" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "default";
      case "Inativo": return "secondary";
      default: return "secondary";
    }
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  const filteredCurrencies = currencies.filter(currency =>
    currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Multi Currency</h1>
          <p className="text-muted-foreground">Gerencie moedas e taxas de câmbio</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Atualizar Taxas
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Moeda
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
      <Tabs defaultValue="currencies" className="space-y-6">
        <TabsList>
          <TabsTrigger value="currencies">Moedas</TabsTrigger>
          <TabsTrigger value="rates">Taxas de Câmbio</TabsTrigger>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="currencies">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Moedas Suportadas</CardTitle>
                <Input
                  placeholder="Buscar moedas..."
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
                    <TableHead>Código</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Símbolo</TableHead>
                    <TableHead>Taxa (USD)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Última Atualização</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCurrencies.map((currency) => (
                    <TableRow key={currency.id}>
                      <TableCell className="font-medium">{currency.code}</TableCell>
                      <TableCell>{currency.name}</TableCell>
                      <TableCell>{currency.symbol}</TableCell>
                      <TableCell>{currency.rate.toFixed(4)}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(currency.status)}>
                          {currency.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{currency.lastUpdate}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <RefreshCw className="h-4 w-4" />
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

        <TabsContent value="rates">
          <Card>
            <CardHeader>
              <CardTitle>Taxas de Câmbio em Tempo Real</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>De</TableHead>
                    <TableHead>Para</TableHead>
                    <TableHead>Taxa</TableHead>
                    <TableHead>Variação</TableHead>
                    <TableHead>Tendência</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exchangeRates.map((rate, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{rate.from}</TableCell>
                      <TableCell>{rate.to}</TableCell>
                      <TableCell>{rate.rate.toFixed(4)}</TableCell>
                      <TableCell className={getTrendColor(rate.trend)}>
                        {rate.change}
                      </TableCell>
                      <TableCell>
                        <TrendingUp className={`h-4 w-4 ${getTrendColor(rate.trend)}`} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Transações de Câmbio</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Restaurante</TableHead>
                    <TableHead>De</TableHead>
                    <TableHead>Para</TableHead>
                    <TableHead>Valor Original</TableHead>
                    <TableHead>Valor Convertido</TableHead>
                    <TableHead>Taxa</TableHead>
                    <TableHead>Taxa de Serviço</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.restaurant}</TableCell>
                      <TableCell className="font-medium">{transaction.from}</TableCell>
                      <TableCell className="font-medium">{transaction.to}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.converted}</TableCell>
                      <TableCell>{transaction.rate}</TableCell>
                      <TableCell>{transaction.fee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Multi-Currency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Moeda Base</label>
                <Select defaultValue="USD">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD - Dólar Americano</SelectItem>
                    <SelectItem value="EUR">EUR - Euro</SelectItem>
                    <SelectItem value="BRL">BRL - Real Brasileiro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Atualização automática</h4>
                  <p className="text-sm text-muted-foreground">Atualizar taxas automaticamente a cada hora</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Exibir múltiplas moedas</h4>
                  <p className="text-sm text-muted-foreground">Mostrar preços em múltiplas moedas no app</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Taxa de câmbio padrão (%)</label>
                <Input type="number" placeholder="2.5" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Margem de segurança (%)</label>
                <Input type="number" placeholder="0.5" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Intervalo de atualização (minutos)</label>
                <Input type="number" placeholder="60" />
              </div>

              <Button>Salvar Configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MultiCurrencyAdmin;