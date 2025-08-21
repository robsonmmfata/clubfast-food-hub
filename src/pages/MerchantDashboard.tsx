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