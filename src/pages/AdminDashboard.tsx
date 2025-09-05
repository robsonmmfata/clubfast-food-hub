import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatsCards } from "@/components/admin/StatsCards";
import { SalesChart } from "@/components/admin/SalesChart";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { TopClients } from "@/components/admin/TopClients";
import MerchantManagement from "@/pages/admin/MerchantManagement";
import OrderManagement from "@/pages/admin/OrderManagement";
import PaymentGatewayAdmin from "@/pages/admin/PaymentGatewayAdmin";
import WithdrawalManagement from "@/pages/admin/WithdrawalManagement";
import MarketingAdmin from "@/pages/admin/MarketingAdmin";
import EarningsAdmin from "@/pages/admin/EarningsAdmin";
import TableReservationAdmin from "@/pages/admin/TableReservationAdmin";
import InvoiceAdmin from "@/pages/admin/InvoiceAdmin";
import AffiliationAdmin from "@/pages/admin/AffiliationAdmin";
import AccountAdmin from "@/pages/admin/AccountAdmin";
import AttributesAdmin from "@/pages/admin/AttributesAdmin";
import PromotionAdmin from "@/pages/admin/PromotionAdmin";
import NotificationsAdmin from "@/pages/admin/NotificationsAdmin";
import BuyersAdmin from "@/pages/admin/BuyersAdmin";
import ThirdPartyAppsAdmin from "@/pages/admin/ThirdPartyAppsAdmin";
import SMSAdmin from "@/pages/admin/SMSAdmin";
import ReportsAdmin from "@/pages/admin/ReportsAdmin";
import MobileMerchantAdmin from "@/pages/admin/MobileMerchantAdmin";
import KitchenAppAdmin from "@/pages/admin/KitchenAppAdmin";
import DeliveryManagementAdmin from "@/pages/admin/DeliveryManagementAdmin";
import LoyaltyPointsAdmin from "@/pages/admin/LoyaltyPointsAdmin";
import TablesideOrderingAdmin from "@/pages/admin/TablesideOrderingAdmin";
import MultiCurrencyAdmin from "@/pages/admin/MultiCurrencyAdmin";
import DigitalWalletAdmin from "@/pages/admin/DigitalWalletAdmin";
import CommunicationAdmin from "@/pages/admin/CommunicationAdmin";
import InternetAdmin from "@/pages/admin/InternetAdmin";
import CommercialAdmin from "@/pages/admin/CommercialAdmin";
import { Menu, X } from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "merchant":
        return <MerchantManagement />;
      case "affiliation":
        return <AffiliationAdmin />;
      case "orders":
        return <OrderManagement />;
      case "gateway":
        return <PaymentGatewayAdmin />;
      case "account":
        return <AccountAdmin />;
      case "earnings":
        return <EarningsAdmin />;
      case "reservations":
        return <TableReservationAdmin />;
      case "invoice":
        return <InvoiceAdmin />;
      case "withdrawals":
        return <WithdrawalManagement />;
      case "attributes":
        return <AttributesAdmin />;
      case "promotion":
        return <PromotionAdmin />;
      case "notifications":
        return <NotificationsAdmin />;
      case "marketing":
        return <MarketingAdmin />;
      case "buyers":
        return <BuyersAdmin />;
      case "thirdparty":
        return <ThirdPartyAppsAdmin />;
      case "sms":
        return <SMSAdmin />;
      case "reports":
        return <ReportsAdmin />;
      case "mobile":
        return <MobileMerchantAdmin />;
      case "kitchen":
        return <KitchenAppAdmin />;
      case "delivery":
        return <DeliveryManagementAdmin />;
      case "loyalty":
        return <LoyaltyPointsAdmin />;
      case "tableside":
        return <TablesideOrderingAdmin />;
      case "multicurrency":
        return <MultiCurrencyAdmin />;
      case "digitalwallet":
        return <DigitalWalletAdmin />;
      case "communication":
        return <CommunicationAdmin />;
      case "internet":
        return <InternetAdmin />;
      case "commercial":
        return <CommercialAdmin />;
      default:
        return (
          <>
            <StatsCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div>
                <TopClients />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentOrders />
              <Card>
                <CardHeader>
                  <CardTitle>Últimos Restaurantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "McDonald's", status: "Ativo", commission: "5%" },
                      { name: "Jollibee", status: "Ativo", commission: "4.5%" },
                      { name: "Panda Express", status: "Pendente", commission: "5%" },
                      { name: "Subway", status: "Ativo", commission: "4%" },
                    ].map((restaurant, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">{restaurant.name}</p>
                          <p className="text-sm text-muted-foreground">Comissão: {restaurant.commission}</p>
                        </div>
                        <Badge variant={restaurant.status === "Ativo" ? "default" : "secondary"}>
                          {restaurant.status}
                        </Badge>
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
      <AdminSidebar 
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
                <h1 className="text-xl font-semibold text-foreground">Painel do Administrador</h1>
                <p className="text-sm text-muted-foreground">Bem-vindo ao Club Fast</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="bg-primary">Administrador</Badge>
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

export default AdminDashboard;