import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, Users, Clock, CheckCircle, Send } from "lucide-react";

const SMSMerchant = () => {
  const smsStats = {
    sent: 234,
    delivered: 228,
    cost: "R$ 11,70",
    customers: 89
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">SMS Marketing</h1>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Enviar SMS
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              SMS Enviados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{smsStats.sent}</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Taxa de Entrega
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((smsStats.delivered/smsStats.sent)*100)}%
            </div>
            <p className="text-xs text-muted-foreground">Muito boa!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Clientes Alcançados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{smsStats.customers}</div>
            <p className="text-xs text-muted-foreground">Únicos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Custo Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{smsStats.cost}</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enviar SMS para Clientes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea 
                id="message" 
                placeholder="Digite sua mensagem promocional..." 
                rows={4}
                maxLength={160}
              />
              <p className="text-sm text-muted-foreground mt-1">0/160 caracteres</p>
            </div>
            <div>
              <Label htmlFor="audience">Público-alvo</Label>
              <select className="w-full p-2 border border-input rounded-md">
                <option>Todos os clientes</option>
                <option>Clientes frequentes</option>
                <option>Novos clientes</option>
                <option>Clientes inativos</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="timing">Envio</Label>
                <select className="w-full p-2 border border-input rounded-md">
                  <option>Enviar agora</option>
                  <option>Agendar</option>
                </select>
              </div>
              <div>
                <Label htmlFor="type">Tipo</Label>
                <select className="w-full p-2 border border-input rounded-md">
                  <option>Promocional</option>
                  <option>Informativo</option>
                  <option>Lembrete</option>
                </select>
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Custo estimado:</strong> R$ 4,45 (89 clientes × R$ 0,05)
              </p>
            </div>
            <Button className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Enviar SMS
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Automações SMS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">Pedido Confirmado</p>
                <p className="text-sm text-muted-foreground">Enviar SMS quando pedido for confirmado</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">Pedido Saiu para Entrega</p>
                <p className="text-sm text-muted-foreground">Notificar cliente sobre a saída do pedido</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">Promoções Especiais</p>
                <p className="text-sm text-muted-foreground">SMS semanal com ofertas</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">Lembrete de Aniversário</p>
                <p className="text-sm text-muted-foreground">Cupom especial no aniversário do cliente</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Templates Salvos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Seu pedido #{pedido} foi confirmado!",
              "Promoção especial: 20% OFF hoje!",
              "Não esqueça do seu cupom de desconto",
              "Obrigado pela preferência!"
            ].map((template, index) => (
              <div key={index} className="p-2 border border-border rounded text-sm">
                {template}
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              Gerenciar Templates
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Histórico Recente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { date: "15/01", msg: "Promoção Black Friday", sent: 45 },
              { date: "14/01", msg: "Novos produtos", sent: 32 },
              { date: "13/01", msg: "Confirmação de pedidos", sent: 78 },
              { date: "12/01", msg: "Lembrete de avaliação", sent: 23 }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-medium">{item.date}</p>
                  <p className="text-muted-foreground">{item.msg}</p>
                </div>
                <Badge variant="outline">{item.sent}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Configurações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="sender">Remetente</Label>
              <Input id="sender" defaultValue="MCDONALDS" maxLength={11} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>SMS de Marketing</Label>
                <p className="text-sm text-muted-foreground">Permitir envio de promoções</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>SMS Transacionais</Label>
                <p className="text-sm text-muted-foreground">Confirmações e atualizações</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SMSMerchant;