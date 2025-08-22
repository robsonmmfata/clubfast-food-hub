import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Upload, Grid3X3, List, Trash2, Edit, Download, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const ImageManagement = () => {
  const [viewMode, setViewMode] = useState("grid");

  const images = [
    { id: 1, name: "burger-deluxe.jpg", size: "2.4 MB", dimensions: "1920x1080", category: "Produtos", uploaded: "2024-01-15", used: 12 },
    { id: 2, name: "pizza-margherita.jpg", size: "1.8 MB", dimensions: "1920x1080", category: "Produtos", uploaded: "2024-01-14", used: 8 },
    { id: 3, name: "restaurant-banner.jpg", size: "3.2 MB", dimensions: "1920x600", category: "Banners", uploaded: "2024-01-13", used: 3 },
    { id: 4, name: "chef-special.jpg", size: "2.1 MB", dimensions: "1200x800", category: "Produtos", uploaded: "2024-01-12", used: 15 },
    { id: 5, name: "promo-weekend.jpg", size: "1.5 MB", dimensions: "800x800", category: "Promoções", uploaded: "2024-01-11", used: 25 },
    { id: 6, name: "dessert-combo.jpg", size: "1.9 MB", dimensions: "1200x800", category: "Produtos", uploaded: "2024-01-10", used: 6 },
  ];

  const categories = ["Todos", "Produtos", "Banners", "Promoções", "Perfil"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciar Imagens</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
            {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Imagem
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Total Imagens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">12.4 GB utilizados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Mais Usadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">Produtos com imagem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Armazenamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">De 20 GB</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Este Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23</div>
            <p className="text-xs text-muted-foreground">Novas imagens</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Biblioteca de Imagens</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {categories.map((category) => (
                  <Badge key={category} variant="outline" className="cursor-pointer hover:bg-muted">
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar imagens..." className="pl-8" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {images.map((image) => (
                <div key={image.id} className="group relative border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium truncate">{image.name}</p>
                    <p className="text-xs text-muted-foreground">{image.size}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-1">
                      <Button variant="secondary" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="secondary" size="sm">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {images.map((image) => (
                <div key={image.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{image.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {image.dimensions} • {image.size} • Usado em {image.used} produtos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{image.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageManagement;