import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video, FileText, Music, Upload, Search, Folder, Grid, List } from "lucide-react";
import { useState } from "react";

const MediaLibrary = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const mediaStats = [
    { title: "Total de Arquivos", value: "1,247", change: "+89", icon: FileText },
    { title: "Imagens", value: "856", change: "+45", icon: Image },
    { title: "Vídeos", value: "123", change: "+12", icon: Video },
    { title: "Armazenamento", value: "2.4 GB", change: "+0.5 GB", icon: Folder },
  ];

  const mediaFiles = [
    {
      id: 1,
      name: "hamburguer-especial.jpg",
      type: "image",
      size: "2.4 MB",
      category: "Produtos",
      uploadDate: "15/01/2024",
      usedIn: 8,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      name: "video-promocional.mp4",
      type: "video",
      size: "45.6 MB",
      category: "Marketing",
      uploadDate: "14/01/2024",
      usedIn: 3,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      name: "menu-2024.pdf",
      type: "document",
      size: "1.2 MB",
      category: "Documentos",
      uploadDate: "13/01/2024",
      usedIn: 15,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 4,
      name: "musica-ambiente.mp3",
      type: "audio",
      size: "5.8 MB",
      category: "Áudio",
      uploadDate: "12/01/2024",
      usedIn: 1,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 5,
      name: "logo-restaurante.svg",
      type: "image",
      size: "156 KB",
      category: "Branding",
      uploadDate: "11/01/2024",
      usedIn: 25,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 6,
      name: "pizza-margherita.jpg",
      type: "image",
      size: "3.1 MB",
      category: "Produtos",
      uploadDate: "10/01/2024",
      usedIn: 12,
      thumbnail: "/placeholder.svg"
    },
  ];

  const categories = [
    { name: "Todos", count: 1247, active: true },
    { name: "Produtos", count: 856, active: false },
    { name: "Marketing", count: 234, active: false },
    { name: "Documentos", count: 89, active: false },
    { name: "Branding", count: 45, active: false },
    { name: "Áudio", count: 23, active: false },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image": return <Image className="h-4 w-4" />;
      case "video": return <Video className="h-4 w-4" />;
      case "audio": return <Music className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "image": return "bg-blue-100 text-blue-800";
      case "video": return "bg-purple-100 text-purple-800";
      case "audio": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Biblioteca de Mídia</h1>
        <div className="flex gap-2">
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
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mediaStats.map((stat, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Categorias</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                  category.active ? "bg-primary/10 text-primary" : "hover:bg-muted"
                }`}
              >
                <span className="text-sm">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Media Files */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Arquivos de Mídia
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Buscar arquivos..." className="pl-10 w-64" />
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mediaFiles.map((file) => (
                  <div key={file.id} className="border border-border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <img
                        src={file.thumbnail}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-sm truncate flex-1">{file.name}</h3>
                        <Badge className={`text-xs ml-2 ${getTypeColor(file.type)}`}>
                          {file.type}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>{file.size} • {file.category}</p>
                        <p>Usado em {file.usedIn} locais</p>
                        <p>{file.uploadDate}</p>
                      </div>
                      <div className="flex gap-1 mt-3">
                        <Button size="sm" variant="outline" className="flex-1">
                          Ver
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Baixar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {mediaFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-4 p-3 border border-border rounded-lg hover:bg-muted/50"
                  >
                    <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                      {getFileIcon(file.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{file.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {file.size} • {file.category} • {file.uploadDate}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">{file.usedIn}</p>
                      <p className="text-xs text-muted-foreground">Usos</p>
                    </div>
                    <Badge className={getTypeColor(file.type)}>
                      {file.type}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Ver</Button>
                      <Button size="sm" variant="outline">Baixar</Button>
                      <Button size="sm" variant="outline">Excluir</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MediaLibrary;