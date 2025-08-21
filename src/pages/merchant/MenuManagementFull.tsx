import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2, Upload, Eye, Search } from "lucide-react";

const MenuManagementFull = () => {
  const categories = [
    { id: 1, name: "Hambúrgueres", items: 12, status: "Ativo" },
    { id: 2, name: "Bebidas", items: 8, status: "Ativo" },
    { id: 3, name: "Sobremesas", items: 6, status: "Ativo" },
    { id: 4, name: "Acompanhamentos", items: 10, status: "Inativo" },
  ];

  const products = [
    { id: 1, name: "Big Mac", category: "Hambúrgueres", price: "R$ 24,90", stock: 50, status: "Ativo", image: "/placeholder.svg" },
    { id: 2, name: "Quarteirão", category: "Hambúrgueres", price: "R$ 22,90", stock: 30, status: "Ativo", image: "/placeholder.svg" },
    { id: 3, name: "Coca-Cola", category: "Bebidas", price: "R$ 5,90", stock: 100, status: "Ativo", image: "/placeholder.svg" },
    { id: 4, name: "Batata Frita", category: "Acompanhamentos", price: "R$ 8,90", stock: 0, status: "Inativo", image: "/placeholder.svg" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Cardápio</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Importar
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Item
          </Button>
        </div>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="categories">Categorias</TabsTrigger>
          <TabsTrigger value="promotions">Promoções</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar produtos..." className="pl-8" />
            </div>
            <select className="p-2 border border-input rounded-md">
              <option>Todas as categorias</option>
              <option>Hambúrgueres</option>
              <option>Bebidas</option>
              <option>Sobremesas</option>
            </select>
          </div>

          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead>Estoque</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <p className="font-medium">{product.name}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="font-semibold">{product.price}</TableCell>
                      <TableCell>
                        <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                          {product.stock} unidades
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={product.status === "Ativo" ? "default" : "secondary"}>
                          {product.status}
                        </Badge>
                      </TableCell>
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
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Categorias do Cardápio</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Categoria
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Quantidade de Itens</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell className="font-medium">{category.name}</TableCell>
                      <TableCell>{category.items} itens</TableCell>
                      <TableCell>
                        <Badge variant={category.status === "Ativo" ? "default" : "secondary"}>
                          {category.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
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
        </TabsContent>

        <TabsContent value="promotions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Criar Promoção</CardTitle>
                <Button>Salvar Promoção</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="promo-name">Nome da Promoção</Label>
                  <Input id="promo-name" placeholder="Ex: Combo Família" />
                </div>
                <div>
                  <Label htmlFor="promo-discount">Desconto (%)</Label>
                  <Input id="promo-discount" type="number" placeholder="15" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="promo-start">Data de Início</Label>
                  <Input id="promo-start" type="date" />
                </div>
                <div>
                  <Label htmlFor="promo-end">Data de Fim</Label>
                  <Input id="promo-end" type="date" />
                </div>
              </div>
              <div>
                <Label htmlFor="promo-products">Produtos Incluídos</Label>
                <select multiple className="w-full p-2 border border-input rounded-md h-32">
                  <option>Big Mac</option>
                  <option>Quarteirão</option>
                  <option>Coca-Cola</option>
                  <option>Batata Frita</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MenuManagementFull;