import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MerchantSidebar } from "@/components/merchant/MerchantSidebar";
import { MerchantStatsCards } from "@/components/merchant/MerchantStatsCards";
import { LiveOrders } from "@/components/merchant/LiveOrders";
import { MenuManagement } from "@/components/merchant/MenuManagement";
import MenuManagementFull from "@/pages/merchant/MenuManagementFull";
import InventoryManagement from "@/pages/merchant/InventoryManagement";
import KitchenSystem from "@/pages/merchant/KitchenSystem";
import PDVSystem from "./PDVSystem";
import PDVHistory from "./PDVHistory";
import SiteConfig from "./SiteConfig";
import PaymentGateway from "./PaymentGateway";
import EarningsPage from "./EarningsPage";
import TableReservation from "./TableReservation";
import Affiliation from "./merchant/Affiliation";
import AccountManagement from "./merchant/AccountManagement";
import InvoiceManagement from "./merchant/InvoiceManagement";
import WithdrawalsMerchant from "./merchant/WithdrawalsMerchant";
import AttributesManagement from "./merchant/AttributesManagement";
import OrderTypes from "./merchant/OrderTypes";
import ImageManagement from "./merchant/ImageManagement";
import PromotionsManagement from "./merchant/PromotionsManagement";
import NotificationsManagement from "./merchant/NotificationsManagement";
import MarketingMerchant from "./merchant/MarketingMerchant";
import { Menu, X, Bell } from "lucide-react";

const MerchantDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return <LiveOrders />;
      case "menu":
        return <MenuManagement />;
      case "food":
        return <MenuManagementFull />;
      case "inventory":
        return <InventoryManagement />;
      case "kitchen":
        return <KitchenSystem />;
      case "pdv-create":
        return <PDVSystem />;
      case "pdv-history":
        return <PDVHistory />;
      case "config":
        return <SiteConfig />;
      case "gateway":
        return <PaymentGateway />;
      case "earnings":
        return <EarningsPage />;
      case "reservation":
        return <TableReservation />;
      case "affiliation":
        return <Affiliation />;
      case "account":
        return <AccountManagement />;
      case "invoice":
        return <InvoiceManagement />;
      case "withdrawals":
        return <WithdrawalsMerchant />;
      case "attributes":
        return <AttributesManagement />;
      case "order-types":
        return <OrderTypes />;
      case "images":
        return <ImageManagement />;
      case "promotions":
        return <PromotionsManagement />;
      case "notifications":
        return <NotificationsManagement />;
      case "marketing":
        return <MarketingMerchant />;
      case "buyers":
        return <div className="p-6"><h1 className="text-2xl font-bold">Compradores</h1><p>Sistema de gerenciamento de compradores em desenvolvimento...</p></div>;
      case "third-party":
        return <div className="p-6"><h1 className="text-2xl font-bold">Aplicativos de Terceiros</h1><p>Sistema de integração com aplicativos de terceiros em desenvolvimento...</p></div>;
      case "sms":
        return <div className="p-6"><h1 className="text-2xl font-bold">SMS</h1><p>Sistema de SMS em desenvolvimento...</p></div>;
      case "reports":
        return <div className="p-6"><h1 className="text-2xl font-bold">Relatórios</h1><p>Sistema de relatórios em desenvolvimento...</p></div>;
      case "mobile":
        return <div className="p-6"><h1 className="text-2xl font-bold">Mobile Merchant</h1><p>Sistema mobile em desenvolvimento...</p></div>;
      case "delivery":
        return <div className="p-6"><h1 className="text-2xl font-bold">Delivery Management</h1><p>Sistema de gerenciamento de delivery em desenvolvimento...</p></div>;
      case "loyalty":
        return <div className="p-6"><h1 className="text-2xl font-bold">Loyalty Points</h1><p>Sistema de pontos de fidelidade em desenvolvimento...</p></div>;
      case "tableside":
        return <div className="p-6"><h1 className="text-2xl font-bold">Tableside Ordering</h1><p>Sistema de pedidos na mesa em desenvolvimento...</p></div>;
      case "currency":
        return <div className="p-6"><h1 className="text-2xl font-bold">Multi Currency</h1><p>Sistema multi-moeda em desenvolvimento...</p></div>;
      case "wallet":
        return <div className="p-6"><h1 className="text-2xl font-bold">Digital Wallet</h1><p>Carteira digital em desenvolvimento...</p></div>;
      case "communication":
        return <div className="p-6"><h1 className="text-2xl font-bold">Communication</h1><p>Sistema de comunicação em desenvolvimento...</p></div>;
      case "internet":
        return <div className="p-6"><h1 className="text-2xl font-bold">Local na Rede Internet</h1><p>Configurações de rede em desenvolvimento...</p></div>;
      case "commercial":
        return <div className="p-6"><h1 className="text-2xl font-bold">Comercial</h1><p>Sistema comercial em desenvolvimento...</p></div>;
      case "media":
        return <div className="p-6"><h1 className="text-2xl font-bold">Biblioteca de Mídia</h1><p>Gerenciamento de mídia em desenvolvimento...</p></div>;
      case "printers":
        return <div className="p-6"><h1 className="text-2xl font-bold">Printers</h1><p>Configuração de impressoras em desenvolvimento...</p></div>;
      case "addon":
        return <div className="p-6"><h1 className="text-2xl font-bold">Addon Manager</h1><p>Gerenciador de addons em desenvolvimento...</p></div>;
      case "utilities":
        return <div className="p-6"><h1 className="text-2xl font-bold">Utilities</h1><p>Utilitários do sistema em desenvolvimento...</p></div>;
      default:
        return (
          <>
            <MerchantStatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LiveOrders showHeader />
              <Card>
                <CardHeader>
                  <CardTitle>Produtos Mais Vendidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Cheesy Eggdesal Meal", sold: 45, revenue: "R$ 1.380,00" },
                      { name: "Breakfast Rice Bowl Duo", sold: 32, revenue: "R$ 640,00" },
                      { name: "Breakfast Sandwich Duo", sold: 28, revenue: "R$ 6.972,00" },
                      { name: "Sausage McMuffin", sold: 24, revenue: "R$ 3.480,00" },
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.sold} vendidos</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{product.revenue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <MerchantSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Painel do Lojista</h1>
                <p className="text-sm text-muted-foreground">McDonald's - Filial Centro</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                3 novos pedidos
              </Button>
              <Badge variant="default" className="bg-dashboard-green">Online</Badge>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6 space-y-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default MerchantDashboard;