import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, MapPin, ChevronDown, Utensils } from "lucide-react";

interface CustomerHeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export const CustomerHeader = ({ cartItemCount = 0, onCartClick }: CustomerHeaderProps) => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              <span>USD</span>
              <ChevronDown className="h-3 w-3" />
            </div>
            <div className="flex items-center gap-1">
              <img src="/api/placeholder/16/12" alt="Brasil" className="w-4 h-3" />
              <ChevronDown className="h-3 w-3" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="h-8 px-3">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {cartItemCount > 0 && (
                <Badge variant="default" className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3">
              Sign In
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Utensils className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Club Fast</span>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                placeholder="Enter your street and house number"
                className="pr-12 pl-4 h-12"
              />
              <div className="absolute right-1 top-1 bottom-1 flex items-center">
                <Button size="sm" className="h-10 px-4 bg-primary hover:bg-primary/90">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {cartItemCount > 0 && (
                <Badge variant="default" className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};