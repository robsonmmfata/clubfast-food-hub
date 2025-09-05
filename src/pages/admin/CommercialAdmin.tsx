import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Store, TrendingUp, DollarSign, Users, Settings, Eye, Edit, Plus } from "lucide-react";

const CommercialAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const commercialStats = [
    { label: "Parceiros Comerciais", value: "24", trend: "+12%", icon: Store },
    { label: "Receita Mensal", value: "R$ 45,780", trend: "+15%", icon: DollarSign },
    { label: "Contratos Ativos", value: "18", trend: "+8%", icon: TrendingUp },
    { label: "Leads Qualificados", value: "67", trend: "+25%", icon: Users },
  ];

  const partners = [
    { id: 1, name: "Food Express", type: "Delivery", revenue: "R$ 12,500", commission: "8%", status: "Ativo", contract: "2025-12-31" },
    { id: 2, name: "Market Plus", type: "Marketplace", revenue: "R$ 8,900", commission: "5%", status: "Ativo", contract: "2024-08-15" },
    { id: 3, name: "Pay Solutions", type: "Pagamento", revenue: "R$ 15,200", commission: "3%", status: "Negociação", contract: "Pendente" },
    { id: 4, name: "Cloud Kitchen", type: "Infraestrutura", revenue: "R$ 6,750", commission: "12%", status: "Ativo", contract: "2024-11-20" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "default";
      case "Negociação": return "secondary";
      case "Suspenso": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Comercial</h1>
          <p className="text-muted-foreground">Gerencie parcerias e oportunidades comerciais</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Parceria
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {commercialStats.map((stat, index) => (
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

      <Tabs defaultValue="partners" className="space-y-6">
        <TabsList>
          <TabsTrigger value="partners">Parceiros</TabsTrigger>
          <TabsTrigger value="opportunities">Oportunidades</TabsTrigger>
          <TabsTrigger value="contracts">Contratos</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="partners">
          <Card>
            <CardHeader>
              <CardTitle>Parceiros Comerciais</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Receita</TableHead>
                    <TableHead>Comissão</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Contrato</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {partners.map((partner) => (
                    <TableRow key={partner.id}>
                      <TableCell className="font-medium">{partner.name}</TableCell>
                      <TableCell>{partner.type}</TableCell>
                      <TableCell>{partner.revenue}</TableCell>
                      <TableCell>{partner.commission}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(partner.status)}>
                          {partner.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{partner.contract}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommercialAdmin;