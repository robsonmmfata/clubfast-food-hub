import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomerHeader } from "@/components/customer/CustomerHeader";
import { MenuItem } from "@/components/customer/MenuItem";
import { Cart } from "@/components/customer/Cart";
import { Star, Clock, Truck } from "lucide-react";

const RestaurantPage = () => {
  const { id } = useParams();
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Mock restaurant data based on the images
  const restaurant = {
    id: id,
    name: "McDonald's",
    image: "/api/placeholder/800/300",
    rating: 4.5,
    reviews: 856,
    deliveryTime: "10-30 mins",
    deliveryFee: "R$ 3,99",
    category: "American, Barbecue, Chinese, Deli, Diner, Greek",
    description: "Deliciosos hambúrgueres e batatas fritas"
  };

  const menuItems = [
    {
      id: 1,
      name: "Cheesy Eggdesal Meal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit, diam sed consequat.",
      price: 97.00,
      image: "/api/placeholder/200/150"
    },
    {
      id: 2,
      name: "Breakfast Rice Bowl Duo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit, diam sed consequat.",
      price: 20.00,
      image: "/api/placeholder/200/150"
    },
    {
      id: 3,
      name: "Breakfast Sandwich Duo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit, diam sed consequat.",
      price: 249.00,
      image: "/api/placeholder/200/150"
    },
    {
      id: 4,
      name: "Sausage McMuffin with Egg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit, diam sed consequat.",
      price: 145.00,
      image: "/api/placeholder/200/150"
    }
  ];

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartItem = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader cartItemCount={cartItemCount} onCartClick={() => setShowCart(true)} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Restaurant Header */}
        <div className="mb-8">
          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
            <img 
              src={restaurant.image} 
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-sm opacity-90">{restaurant.category}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{restaurant.rating}+</span>
              <span className="text-muted-foreground">({restaurant.reviews} avaliações)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Truck className="h-4 w-4" />
              <span>Taxa: {restaurant.deliveryFee}</span>
            </div>
          </div>

          <p className="text-muted-foreground">{restaurant.description}</p>
        </div>

        {/* Menu Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Itens em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Cart Sidebar */}
      <Cart
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        items={cart}
        onUpdateItem={updateCartItem}
        total={cartTotal}
      />
    </div>
  );
};

export default RestaurantPage;