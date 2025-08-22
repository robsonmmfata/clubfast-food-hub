import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2, Tag, Hash } from "lucide-react";

const AttributesManagement = () => {
  const attributes = [
    { id: 1, name: "Tamanho", type: "Seleção", values: ["P", "M", "G", "GG"], products: 45 },
    { id: 2, name: "Cor", type: "Cor", values: ["#FF0000", "#00FF00", "#0000FF"], products: 23 },
    { id: 3, name: "Material", type: "Texto", values: ["Algodão", "Poliéster", "Linho"], products: 18 },
    { id: 4, name: "Peso", type: "Número", values: ["100g", "200g", "500g", "1kg"], products: 12 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Atributos</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Atributo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Total Atributos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Configurados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Mais Usado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">Tamanho</div>
            <p className="text-xs text-muted-foreground">45 produtos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tipos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">Diferentes tipos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Hash className="h-4 w-4" />
              Total Valores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Valores únicos</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Atributo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="attrName">Nome do Atributo</Label>
              <Input id="attrName" placeholder="Ex: Tamanho, Cor, Material..." />
            </div>
            <div>
              <Label htmlFor="attrType">Tipo</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Seleção</option>
                <option>Texto</option>
                <option>Número</option>
                <option>Cor</option>
                <option>Data</option>
              </select>
            </div>
            <div>
              <Label htmlFor="attrValues">Valores (separados por vírgula)</Label>
              <Input id="attrValues" placeholder="P, M, G, GG" />
            </div>
            <Button className="w-full">Criar Atributo</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Atributos Existentes</CardTitle>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-8" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Produtos</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attributes.map((attr) => (
                  <TableRow key={attr.id}>
                    <TableCell className="font-medium">{attr.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{attr.type}</Badge>
                    </TableCell>
                    <TableCell>{attr.products}</TableCell>
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
      </div>
    </div>
  );
};

export default AttributesManagement;