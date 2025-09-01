import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Minus, Search, ShoppingCart, User, Clock, CreditCard, Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const PDVSystem = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [orderType, setOrderType] = useState("delivery");

  const categories = [
    "all", "Sobremesas & Bebidas", "Refeições em Grupo", "Tigelas de Arroz", "CERVEJA", 
    "Café da Manhã", "Destaques", "Pizza", "Pizza Italiana", "Tradicional"
  ];

  const products: Product[] = [
    {
      id: "1",
      name: "McFlurry c/ Oreo",
      price: 53.00,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Sobremesas & Bebidas"
    },
    {
      id: "2", 
      name: "Sundae de Caramelo Quente",
      price: 32.00,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Sobremesas & Bebidas"
    },
    {
      id: "3",
      name: "Sundae de Chocolate Quente", 
      price: 40.00,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Sobremesas & Bebidas"
    },
    {
      id: "4",
      name: "Hambúrguer",
      price: 19.00,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png", 
      category: "Destaques"
    },
    {
      id: "5",
      name: "Baklava",
      price: 7000.00,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Tradicional"
    },
    {
      id: "6",
      name: "Big Mac",
      price: 24.90,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Destaques"
    },
    {
      id: "7",
      name: "Quarteirão c/ Queijo",
      price: 22.90,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Destaques"
    },
    {
      id: "8",
      name: "McNuggets 10 Peças",
      price: 18.90,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Destaques"
    },
    {
      id: "9",
      name: "Batata Frita Grande",
      price: 8.90,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Destaques"
    },
    {
      id: "10",
      name: "Coca-Cola 500ml",
      price: 5.90,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Sobremesas & Bebidas"
    },
    {
      id: "11",
      name: "Café Expresso",
      price: 3.50,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Café da Manhã"
    },
    {
      id: "12",
      name: "McMuffin Ovo e Queijo",
      price: 12.90,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Café da Manhã"
    },
    {
      id: "13",
      name: "Pizza Margherita",
      price: 35.90,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Pizza"
    },
    {
      id: "14",
      name: "Pizza Pepperoni",
      price: 42.90,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "Pizza"
    },
    {
      id: "15",
      name: "Cerveja Brahma 600ml",
      price: 8.50,
      image: "/lovable-uploads/b7ab84d3-1985-44b1-afe2-9b91f47a4c20.png",
      category: "CERVEJA"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span className="text-sm text-muted-foreground">Club Fast - Sistema PDV</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-sm">Cliente Balcão</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant={orderType === "delivery" ? "default" : "outline"}
              onClick={() => setOrderType("delivery")}
              className={orderType === "delivery" ? "bg-green-600 hover:bg-green-700" : ""}
            >
              Entrega
            </Button>
            <Button 
              variant={orderType === "dinein" ? "default" : "outline"}
              onClick={() => setOrderType("dinein")}
              className={orderType === "dinein" ? "bg-primary" : ""}
            >
              Balcão
            </Button>
            <Button 
              variant={orderType === "pickup" ? "default" : "outline"}
              onClick={() => setOrderType("pickup")}
              className={orderType === "pickup" ? "bg-primary" : ""}
            >
              Retirada
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category === "all" ? "Todos" : category}
                </Button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4" onClick={() => addToCart(product)}>
                    <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-lg font-semibold text-primary">R$ {product.price.toFixed(2)}</p>
                    <Button size="sm" className="w-full mt-2" onClick={() => addToCart(product)}>
                      <Plus className="h-4 w-4 mr-1" />
                      Adicionar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Carrinho</CardTitle>
                  <Button variant="ghost" size="sm" onClick={clearCart}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                {cart.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)} itens
                  </p>
                )}
              </CardHeader>
              
              <CardContent className="space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    Nenhum item adicionado
                  </p>
                ) : (
                  <>
                    <div className="space-y-3 max-h-[400px] overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-sm text-primary">R$ {item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="min-w-[20px] text-center">{item.quantity}</span>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span className="text-primary">R$ {total.toFixed(2)}</span>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Button variant="outline" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                          <Clock className="h-4 w-4 mr-2" />
                          Cozinha
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Proceder ao pagamento
                        </Button>
                      </div>

                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <Button variant="ghost" size="sm" className="h-8">
                          <div className="text-center">
                            <div className="text-muted-foreground">Promoção</div>
                          </div>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8">
                          <div className="text-center">
                            <div className="text-muted-foreground">Desconto</div>
                          </div>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8">
                          <div className="text-center">
                            <div className="text-muted-foreground">Tips</div>
                          </div>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8">
                          <div className="text-center">
                            <div className="text-muted-foreground">Points</div>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDVSystem;