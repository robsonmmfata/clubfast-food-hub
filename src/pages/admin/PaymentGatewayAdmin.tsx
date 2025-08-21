import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { CreditCard, DollarSign, Settings, Check, X } from "lucide-react";

const PaymentGatewayAdmin = () => {
  const gateways = [
    { name: "PIX", status: "active", commission: "1.99%", transactions: "2,543", revenue: "R$ 125.430,00" },
    { name: "PayPal", status: "active", commission: "4.99%", transactions: "1,234", revenue: "R$ 98.720,00" },
    { name: "Stripe", status: "inactive", commission: "3.99%", transactions: "456", revenue: "R$ 45.210,00" },
    { name: "Wise", status: "active", commission: "2.99%", transactions: "789", revenue: "R$ 67.890,00" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Configurar Gateways de Pagamento</h1>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Configurações Globais
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Métodos Ativos</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">de 4 disponíveis</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transações Hoje</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">542</div>
            <p className="text-xs text-muted-foreground">+15% comparado a ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volume Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 337.250,00</div>
            <p className="text-xs text-muted-foreground">Volume processado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa Média</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <p className="text-xs text-muted-foreground">Taxa média de comissão</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {gateways.map((gateway) => (
          <Card key={gateway.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {gateway.name}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant={gateway.status === "active" ? "default" : "secondary"}>
                    {gateway.status === "active" ? (
                      <>
                        <Check className="h-3 w-3 mr-1" />
                        Ativo
                      </>
                    ) : (
                      <>
                        <X className="h-3 w-3 mr-1" />
                        Inativo
                      </>
                    )}
                  </Badge>
                  <Switch checked={gateway.status === "active"} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Taxa de Comissão</Label>
                  <Input defaultValue={gateway.commission} />
                </div>
                <div>
                  <Label>Transações</Label>
                  <p className="text-2xl font-bold text-primary">{gateway.transactions}</p>
                </div>
              </div>
              <div>
                <Label>Receita Total</Label>
                <p className="text-2xl font-bold text-primary">{gateway.revenue}</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Configurar</Button>
                <Button variant="outline" className="flex-1">Relatório</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configurações Gerais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="min-order">Valor Mínimo do Pedido</Label>
              <Input id="min-order" defaultValue="R$ 15,00" />
            </div>
            <div>
              <Label htmlFor="max-order">Valor Máximo do Pedido</Label>
              <Input id="max-order" defaultValue="R$ 500,00" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-approve">Aprovação Automática</Label>
              <p className="text-sm text-muted-foreground">Aprovar automaticamente transações até R$ 100</p>
            </div>
            <Switch id="auto-approve" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="refund-policy">Política de Reembolso</Label>
              <p className="text-sm text-muted-foreground">Permitir reembolsos automáticos</p>
            </div>
            <Switch id="refund-policy" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentGatewayAdmin;