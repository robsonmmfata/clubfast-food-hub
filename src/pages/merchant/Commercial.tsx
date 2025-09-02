import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, TrendingUp, Users, DollarSign, Search, Plus, Calendar } from "lucide-react";

const Commercial = () => {
  const commercialStats = [
    { title: "Vendas do Mês", value: "R$ 45.680", change: "+18%", icon: DollarSign },
    { title: "Novos Clientes", value: "234", change: "+25%", icon: Users },
    { title: "Crescimento", value: "15%", change: "+3%", icon: TrendingUp },
    { title: "Contratos Ativos", value: "12", change: "+2", icon: Building },
  ];

  const salesData = [
    {
      id: "#COM001",
      client: "Empresa ABC Ltda",
      product: "Pacote Premium",
      value: "R$ 5.680,00",
      commission: "R$ 568,00",
      status: "Fechado",
      date: "15/01/2024",
      representative: "Carlos Silva"
    },
    {
      id: "#COM002",
      client: "Tech Solutions",
      product: "Pacote Básico", 
      value: "R$ 2.340,00",
      commission: "R$ 234,00",
      status: "Negociação",
      date: "14/01/2024",
      representative: "Ana Costa"
    },
    {
      id: "#COM003",
      client: "StartUp Digital",
      product: "Pacote Avançado",
      value: "R$ 8.900,00",
      commission: "R$ 890,00",
      status: "Proposta",
      date: "13/01/2024",
      representative: "Pedro Santos"
    },
  ];

  const clients = [
    {
      id: "C001",
      name: "Empresa ABC Ltda",
      segment: "Tecnologia",
      contact: "João Silva",
      phone: "(11) 99999-9999",
      email: "joao@empresaabc.com",
      status: "Ativo",
      revenue: "R$ 15.680,00"
    },
    {
      id: "C002", 
      name: "Tech Solutions",
      segment: "Consultoria",
      contact: "Maria Santos",
      phone: "(11) 88888-8888",
      email: "maria@techsolutions.com",
      status: "Prospect",
      revenue: "R$ 0,00"
    },
    {
      id: "C003",
      name: "StartUp Digital",
      segment: "E-commerce",
      contact: "Pedro Costa",
      phone: "(11) 77777-7777", 
      email: "pedro@startup.com",
      status: "Negociação",
      revenue: "R$ 8.900,00"
    },
  ];

  const products = [
    { name: "Pacote Básico", price: "R$ 199,00", commission: "10%", sales: 45 },
    { name: "Pacote Avançado", price: "R$ 399,00", commission: "15%", sales: 23 },
    { name: "Pacote Premium", price: "R$ 699,00", commission: "20%", sales: 12 },
    { name: "Customizado", price: "Sob consulta", commission: "25%", sales: 8 },
  ];

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "fechado": return "default";
      case "ativo": return "default";
      case "negociação": return "secondary";
      case "proposta": return "outline";
      case "prospect": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Área Comercial</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Relatório Mensal
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Oportunidade
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {commercialStats.map((stat, index) => (
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

      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Pipeline de Vendas
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Buscar vendas..." className="pl-10 w-64" />
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
                    <TableHead>Produto</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Comissão</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Representante</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesData.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">{sale.id}</TableCell>
                      <TableCell>{sale.client}</TableCell>
                      <TableCell>{sale.product}</TableCell>
                      <TableCell className="font-medium">{sale.value}</TableCell>
                      <TableCell className="text-green-600">{sale.commission}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(sale.status)}>
                          {sale.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{sale.date}</TableCell>
                      <TableCell>{sale.representative}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Ver</Button>
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

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Base de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Segmento</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Receita</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">{client.id}</TableCell>
                      <TableCell>{client.name}</TableCell>
                      <TableCell>{client.segment}</TableCell>
                      <TableCell>{client.contact}</TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(client.status)}>
                          {client.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium text-primary">{client.revenue}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Ver</Button>
                          <Button size="sm" variant="outline">Contatar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Produtos Comerciais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="space-y-2">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary">{product.price}</p>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Comissão: {product.commission}</span>
                        <span>{product.sales} vendas</span>
                      </div>
                      <Button size="sm" className="w-full">Ver Detalhes</Button>
                    </div>
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

export default Commercial;