import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X, LayoutDashboard, ShoppingBag, Utensils, Settings, BarChart3, Printer, Package, Wallet, Users, Receipt, MessageSquare, Bell, Globe, Building, Star } from "lucide-react";

interface MerchantSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const MerchantSidebar = ({ isOpen, onClose, activeTab, onTabChange }: MerchantSidebarProps) => {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Painel", active: activeTab === "dashboard" },
    { id: "pdv", icon: Utensils, label: "PDV", hasSubmenu: true, 
      submenu: [
        { id: "pdv-create", label: "Criar Ordem" },
        { id: "pdv-history", label: "Histórico de Ordem" }
      ]
    },
    { id: "config", icon: Settings, label: "Configuração do site", hasSubmenu: true },
    { id: "merchant", icon: Building, label: "Comerciante", hasSubmenu: true },
    { id: "affiliation", icon: Settings, label: "Filiação", hasSubmenu: true },
    { id: "orders", icon: ShoppingBag, label: "Pedidos", hasSubmenu: true, active: activeTab === "orders" },
    { id: "gateway", icon: Wallet, label: "Gateway de pagamento", hasSubmenu: true },
    { id: "account", icon: Users, label: "Conta", hasSubmenu: true },
    { id: "earnings", icon: BarChart3, label: "Ganhos", hasSubmenu: true },
    { id: "reservation", icon: Package, label: "Table reservation", hasSubmenu: true },
    { id: "invoice", icon: Receipt, label: "Invoice", hasSubmenu: true },
    { id: "withdrawals", icon: Wallet, label: "Saques", hasSubmenu: true },
    { id: "attributes", icon: Settings, label: "Atributos", hasSubmenu: true },
    { id: "food", icon: Utensils, label: "Comida", hasSubmenu: true },
    { id: "order-types", icon: ShoppingBag, label: "Tipo de pedido", hasSubmenu: true },
    { id: "images", icon: Package, label: "Imagens", hasSubmenu: true },
    { id: "promotions", icon: Star, label: "Promoção", hasSubmenu: true },
    { id: "notifications", icon: Bell, label: "Notificações", hasSubmenu: true },
    { id: "marketing", icon: MessageSquare, label: "Marketing", hasSubmenu: true },
    { id: "buyers", icon: Users, label: "Compradores", hasSubmenu: true },
    { id: "third-party", icon: Globe, label: "Aplicativo de terceiros", hasSubmenu: true },
    { id: "sms", icon: MessageSquare, label: "SMS", hasSubmenu: true },
    { id: "reports", icon: BarChart3, label: "Relatórios", hasSubmenu: true },
    { id: "mobile", icon: Building, label: "Mobile Merchant", hasSubmenu: true },
    { id: "delivery", icon: ShoppingBag, label: "Delivery Management", hasSubmenu: true },
    { id: "loyalty", icon: Star, label: "Loyalty Points", hasSubmenu: true },
    { id: "tableside", icon: Package, label: "Tableside Ordering", hasSubmenu: true },
    { id: "currency", icon: Wallet, label: "Multi Currency", hasSubmenu: true },
    { id: "wallet", icon: Wallet, label: "Digital Wallet", hasSubmenu: true },
    { id: "kitchen", icon: Utensils, label: "Kitchen App", hasSubmenu: true },
    { id: "communication", icon: MessageSquare, label: "Communication", hasSubmenu: true },
    { id: "internet", icon: Globe, label: "Local na rede Internet", hasSubmenu: true },
    { id: "commercial", icon: Building, label: "Comercial", hasSubmenu: true },
    { id: "media", icon: Package, label: "Biblioteca de mídia", hasSubmenu: true },
    { id: "printers", icon: Printer, label: "Printers", hasSubmenu: true },
    { id: "addon", icon: Settings, label: "Addon manager", hasSubmenu: true },
    { id: "utilities", icon: Settings, label: "Utilities", hasSubmenu: true },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Utensils className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">Club Fast</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* User info */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">MC</span>
              </div>
              <div>
                <p className="font-medium text-sm">mcuser mcuser</p>
                <p className="text-xs text-muted-foreground">T: 12234333333</p>
                <p className="text-xs text-muted-foreground">E: mcuser@yahoo.com</p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={item.active ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3 h-9"
                  onClick={() => {
                    if (item.id === "pdv") {
                      onTabChange("pdv-create");
                    } else {
                      onTabChange(item.id);
                    }
                  }}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                  {item.hasSubmenu && (
                    <span className="ml-auto text-xs text-muted-foreground">›</span>
                  )}
                </Button>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © Versão 2.0.4
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};