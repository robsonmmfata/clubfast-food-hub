import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  onAddToCart: (item: any) => void;
}

export const MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 shadow-lg"
            onClick={() => onAddToCart(item)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xl font-bold text-primary">
              {formatPrice(item.price)}
            </span>
            <Button 
              variant="default"
              size="sm"
              className="bg-dashboard-green hover:bg-dashboard-green/90"
              onClick={() => onAddToCart(item)}
            >
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};