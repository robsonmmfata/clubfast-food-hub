import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Settings, Save, Upload, Globe, Bell, Shield } from "lucide-react";

const SiteConfig = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Configuração do Site</h1>
          <p className="text-muted-foreground">Gerencie as configurações do seu restaurante</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="appearance">Aparência</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="restaurant-name">Nome do Restaurante</Label>
                  <Input id="restaurant-name" defaultValue="McDonald's - Filial Centro" />
                </div>
                <div>
                  <Label htmlFor="restaurant-slug">URL do Restaurante</Label>
                  <Input id="restaurant-slug" defaultValue="mcdonalds-centro" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" placeholder="Descreva seu restaurante..." />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 99999-9999" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" defaultValue="contato@mcdonalds.com" />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Endereço Completo</Label>
                <Textarea id="address" defaultValue="Rua das Flores, 123 - Centro, São Paulo - SP" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horário de Funcionamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map((day) => (
                  <div key={day} className="flex items-center gap-4">
                    <div className="w-20">
                      <Label>{day}</Label>
                    </div>
                    <Switch defaultChecked />
                    <Input className="w-24" defaultValue="08:00" />
                    <span>às</span>
                    <Input className="w-24" defaultValue="22:00" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Logo e Imagens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Logo Principal</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Clique para fazer upload do logo</p>
                  </div>
                </div>
                <div>
                  <Label>Imagem de Capa</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Clique para fazer upload da capa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cores do Tema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Cor Principal</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded border"></div>
                    <Input defaultValue="#ff6b35" />
                  </div>
                </div>
                <div>
                  <Label>Cor Secundária</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary rounded border"></div>
                    <Input defaultValue="#f1f5f9" />
                  </div>
                </div>
                <div>
                  <Label>Cor de Destaque</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded border"></div>
                    <Input defaultValue="#10b981" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Otimização para Motores de Busca</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="meta-title">Título Meta</Label>
                <Input id="meta-title" defaultValue="McDonald's Centro - Delivery e Balcão" />
                <p className="text-xs text-muted-foreground mt-1">Máximo 60 caracteres</p>
              </div>
              
              <div>
                <Label htmlFor="meta-description">Descrição Meta</Label>
                <Textarea id="meta-description" placeholder="Descreva seu restaurante para os motores de busca..." />
                <p className="text-xs text-muted-foreground mt-1">Máximo 160 caracteres</p>
              </div>

              <div>
                <Label htmlFor="keywords">Palavras-chave</Label>
                <Input id="keywords" placeholder="hambúrguer, delivery, fast food, mcdonalds" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Novos Pedidos</Label>
                  <p className="text-sm text-muted-foreground">Receba notificações de novos pedidos</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>E-mail de Relatórios</Label>
                  <p className="text-sm text-muted-foreground">Relatórios diários por e-mail</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>SMS de Pedidos</Label>
                  <p className="text-sm text-muted-foreground">SMS para confirmação de pedidos</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>WhatsApp Business</Label>
                  <p className="text-sm text-muted-foreground">Integração com WhatsApp</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteConfig;