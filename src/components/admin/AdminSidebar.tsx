import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, LayoutDashboard, Store, Settings, CreditCard, BarChart3, Users, MessageSquare, Bell, FileText, Printer, Wallet, Receipt, ShoppingBag, Utensils, Globe, Building, Package, Star } from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const AdminSidebar = ({ isOpen, onClose, activeTab = "dashboard", onTabChange }: AdminSidebarProps) => {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Painel", active: activeTab === "dashboard" },
    { id: "merchant", icon: Store, label: "Comerciante", hasSubmenu: true },
    { id: "affiliation", icon: FileText, label: "Filiação", hasSubmenu: true },
    { id: "orders", icon: ShoppingBag, label: "Pedidos", hasSubmenu: true },
    { id: "gateway", icon: CreditCard, label: "Gateway de pagamento", hasSubmenu: true },
    { id: "account", icon: Wallet, label: "Conta", hasSubmenu: true },
    { id: "earnings", icon: BarChart3, label: "Ganhos", hasSubmenu: true },
    { id: "reservations", icon: Package, label: "Table reservation", hasSubmenu: true },
    { id: "invoice", icon: Receipt, label: "Invoice", hasSubmenu: true },
    { id: "withdrawals", icon: FileText, label: "Saques", hasSubmenu: true },
    { id: "attributes", icon: Settings, label: "Atributos", hasSubmenu: true },
    { id: "promotion", icon: Bell, label: "Promoção", hasSubmenu: true },
    { id: "notifications", icon: MessageSquare, label: "Notificações", hasSubmenu: true },
    { id: "marketing", icon: BarChart3, label: "Marketing", hasSubmenu: true },
    { icon: Users, label: "Compradores", hasSubmenu: true },
    { icon: Globe, label: "Aplicativo de terceiros", hasSubmenu: true },
    { icon: MessageSquare, label: "SMS", hasSubmenu: true },
    { icon: BarChart3, label: "Relatórios", hasSubmenu: true },
    { icon: Building, label: "Mobile Merchant", hasSubmenu: true },
    { icon: Utensils, label: "Delivery Management", hasSubmenu: true },
    { icon: Star, label: "Loyalty Points", hasSubmenu: true },
    { icon: Package, label: "Tableside Ordering", hasSubmenu: true },
    { icon: Globe, label: "Multi Currency", hasSubmenu: true },
    { icon: Wallet, label: "Digital Wallet", hasSubmenu: true },
    { icon: Utensils, label: "Kitchen App", hasSubmenu: true },
    { icon: MessageSquare, label: "Communication", hasSubmenu: true },
    { icon: Globe, label: "Local na rede Internet", hasSubmenu: true },
    { icon: Store, label: "Comercial", hasSubmenu: true },
    { icon: Package, label: "Biblioteca de mídia", hasSubmenu: true },
    { icon: Printer, label: "Printers", hasSubmenu: true },
    { icon: Settings, label: "Addon manager", hasSubmenu: true },
    { icon: Settings, label: "Utilities", hasSubmenu: true },
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
                <span className="text-sm font-medium">AD</span>
              </div>
              <div>
                <p className="font-medium text-sm">bastikang bach</p>
                <p className="text-xs text-muted-foreground">admin@clubfast.com</p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-2">
              {menuItems.map((item, index) => (
                <Button
                  key={item.id || index}
                  variant={item.active ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3 h-9"
                  onClick={() => onTabChange?.(item.id || "dashboard")}
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