import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";

const MerchantManagement = () => {
  const merchants = [
    { id: 1, name: "McDonald's", email: "manager@mcdonalds.com", phone: "+55 11 99999-9999", status: "Ativo", commission: "5%", revenue: "R$ 125.430,00" },
    { id: 2, name: "Burger King", email: "manager@burgerking.com", phone: "+55 11 88888-8888", status: "Ativo", commission: "4.5%", revenue: "R$ 98.720,00" },
    { id: 3, name: "Subway", email: "manager@subway.com", phone: "+55 11 77777-7777", status: "Pendente", commission: "4%", revenue: "R$ 65.890,00" },
    { id: 4, name: "Pizza Hut", email: "manager@pizzahut.com", phone: "+55 11 66666-6666", status: "Inativo", commission: "5.5%", revenue: "R$ 43.210,00" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Comerciantes</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Comerciante
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Lista de Comerciantes</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar comerciantes..." className="pl-8" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Comissão</TableHead>
                <TableHead>Receita Total</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {merchants.map((merchant) => (
                <TableRow key={merchant.id}>
                  <TableCell className="font-medium">{merchant.name}</TableCell>
                  <TableCell>
                    <div>
                      <p>{merchant.email}</p>
                      <p className="text-sm text-muted-foreground">{merchant.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      merchant.status === "Ativo" ? "default" : 
                      merchant.status === "Pendente" ? "secondary" : "destructive"
                    }>
                      {merchant.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{merchant.commission}</TableCell>
                  <TableCell className="font-semibold text-primary">{merchant.revenue}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
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
    </div>
  );
};

export default MerchantManagement;