import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Image, Video, FileText, Music, Upload, Search, Grid, List, Filter, Download, Trash2 } from "lucide-react";

const MediaLibraryAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const mediaStats = [
    { label: "Total de Arquivos", value: "2,847", trend: "+156", icon: FileText },
    { label: "Imagens", value: "1,532", trend: "+89", icon: Image },
    { label: "Vídeos", value: "234", trend: "+12", icon: Video },
    { label: "Armazenamento Usado", value: "45.2 GB", trend: "+2.1 GB", icon: Upload },
  ];

  const mediaFiles = [
    { id: 1, name: "logo-restaurant.jpg", type: "Imagem", size: "2.3 MB", uploaded: "2024-01-15", restaurant: "McDonald's", downloads: 456 },
    { id: 2, name: "promo-video.mp4", type: "Vídeo", size: "15.7 MB", uploaded: "2024-01-14", restaurant: "Burger King", downloads: 234 },
    { id: 3, name: "menu-card.pdf", type: "Documento", size: "1.2 MB", uploaded: "2024-01-13", restaurant: "Pizza Hut", downloads: 789 },
    { id: 4, name: "background-music.mp3", type: "Áudio", size: "4.5 MB", uploaded: "2024-01-12", restaurant: "KFC", downloads: 123 },
  ];

  const categories = [
    { name: "Todas", count: 2847, active: true },
    { name: "Imagens", count: 1532, active: false },
    { name: "Vídeos", count: 234, active: false },
    { name: "Documentos", count: 456, active: false },
    { name: "Áudios", count: 625, active: false },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case "Imagem": return <Image className="h-4 w-4" />;
      case "Vídeo": return <Video className="h-4 w-4" />;
      case "Documento": return <FileText className="h-4 w-4" />;
      case "Áudio": return <Music className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Imagem": return "bg-blue-100 text-blue-800";
      case "Vídeo": return "bg-purple-100 text-purple-800";
      case "Documento": return "bg-green-100 text-green-800";
      case "Áudio": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Biblioteca de Mídia</h1>
          <p className="text-muted-foreground">Gerencie todos os arquivos de mídia dos restaurantes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Arquivo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mediaStats.map((stat, index) => (
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

      <div className="flex gap-6">
        <Card className="w-64">
          <CardHeader>
            <CardTitle>Categorias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className={`p-2 rounded-lg cursor-pointer transition-colors ${
                  category.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-xs">{category.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Arquivos de Mídia</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar arquivos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-64"
                    />
                  </div>
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {mediaFiles.map((file) => (
                    <Card key={file.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                            {getFileIcon(file.type)}
                          </div>
                          <div className="space-y-1">
                            <p className="font-medium text-sm truncate w-full">{file.name}</p>
                            <Badge className={getTypeColor(file.type)} variant="secondary">
                              {file.type}
                            </Badge>
                            <p className="text-xs text-muted-foreground">{file.size}</p>
                            <p className="text-xs text-muted-foreground">{file.restaurant}</p>
                          </div>
                          <div className="flex gap-1 pt-2">
                            <Button variant="ghost" size="sm">
                              <Download className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Tamanho</TableHead>
                      <TableHead>Restaurante</TableHead>
                      <TableHead>Upload</TableHead>
                      <TableHead>Downloads</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mediaFiles.map((file) => (
                      <TableRow key={file.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getFileIcon(file.type)}
                            <span className="font-medium">{file.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getTypeColor(file.type)} variant="secondary">
                            {file.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{file.size}</TableCell>
                        <TableCell>{file.restaurant}</TableCell>
                        <TableCell>{file.uploaded}</TableCell>
                        <TableCell>{file.downloads}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
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
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MediaLibraryAdmin;