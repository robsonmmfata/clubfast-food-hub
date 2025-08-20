import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";

export const MenuManagement = () => {
  const menuItems = [
    {
      id: 1,
      name: "Big Mac",
      category: "Sanduíches",
      price: "R$ 24,90",
      status: "Ativo",
      stock: 50,
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "McChicken",
      category: "Sanduíches", 
      price: "R$ 18,50",
      status: "Ativo",
      stock: 35,
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Quarteirão com Queijo",
      category: "Sanduíches",
      price: "R$ 19,90",
      status: "Inativo",
      stock: 0,
      image: "/api/placeholder/80/80"
    },
    {
      id: 4,
      name: "Batata Frita Grande",
      category: "Acompanhamentos",
      price: "R$ 9,90",
      status: "Ativo", 
      stock: 100,
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gerenciar Cardápio</h2>
          <p className="text-muted-foreground">Gerencie produtos, categorias e preços</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Produto
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Todas Categorias</Button>
              <Button variant="outline">Status</Button>
              <Button variant="outline">Estoque</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Menu Items */}
      <Card>
        <CardHeader>
          <CardTitle>Produtos do Cardápio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{item.price}</p>
                  </div>
                  <div>
                    <Badge variant={item.status === "Ativo" ? "default" : "secondary"}>
                      {item.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Estoque:</span> {item.stock}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.stock > 10 ? "Em estoque" : item.stock > 0 ? "Estoque baixo" : "Sem estoque"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};