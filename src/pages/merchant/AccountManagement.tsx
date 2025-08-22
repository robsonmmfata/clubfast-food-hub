import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, MapPin, CreditCard, Shield, Bell, Save } from "lucide-react";

const AccountManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gerenciamento de Conta</h1>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" defaultValue="McDonald's" />
                </div>
                <div>
                  <Label htmlFor="lastName">Razão Social</Label>
                  <Input id="lastName" defaultValue="McDonald's Brasil Ltda" />
                </div>
              </div>
              <div>
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input id="cnpj" defaultValue="12.345.678/0001-90" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="contato@mcdonalds.com.br" />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" defaultValue="(11) 99999-9999" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Endereço
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="address">Endereço</Label>
                <Input id="address" defaultValue="Rua das Flores, 123" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" defaultValue="São Paulo" />
                </div>
                <div>
                  <Label htmlFor="state">Estado</Label>
                  <Input id="state" defaultValue="SP" />
                </div>
                <div>
                  <Label htmlFor="zip">CEP</Label>
                  <Input id="zip" defaultValue="01234-567" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Informações de Pagamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="bank">Banco</Label>
                <Input id="bank" defaultValue="Banco do Brasil" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="agency">Agência</Label>
                  <Input id="agency" defaultValue="1234-5" />
                </div>
                <div>
                  <Label htmlFor="account">Conta</Label>
                  <Input id="account" defaultValue="12345-6" />
                </div>
              </div>
              <div>
                <Label htmlFor="pixKey">Chave PIX</Label>
                <Input id="pixKey" defaultValue="contato@mcdonalds.com.br" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status da Conta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Verificação</span>
                <Badge variant="default">Verificado</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Plano</span>
                <Badge variant="secondary">Premium</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Taxa</span>
                <span className="font-medium">2.9%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notificações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="emailNotif">Email</Label>
                <Switch id="emailNotif" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="smsNotif">SMS</Label>
                <Switch id="smsNotif" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="pushNotif">Push</Label>
                <Switch id="pushNotif" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                Alterar Senha
              </Button>
              <Button variant="outline" className="w-full">
                Autenticação 2FA
              </Button>
              <Separator />
              <Button variant="destructive" className="w-full">
                Desativar Conta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;