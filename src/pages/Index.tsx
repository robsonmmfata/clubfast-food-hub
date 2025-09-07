import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomerHeader } from "@/components/customer/CustomerHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import heroPerson1 from "@/assets/hero-person-1.jpg";
import heroPerson2 from "@/assets/hero-person-2.jpg";
import mcdonaldsRestaurant from "@/assets/mcdonalds-restaurant.jpg";
import jollibeeRestaurant from "@/assets/jollibee-restaurant.jpg";
import pandaExpressRestaurant from "@/assets/panda-express-restaurant.jpg";
import subwayRestaurant from "@/assets/subway-restaurant.jpg";
import cheesyEggdesalMeal from "@/assets/cheesy-eggdesal-meal.jpg";
import breakfastRiceBowl from "@/assets/breakfast-rice-bowl.jpg";
import breakfastSandwichDuo from "@/assets/breakfast-sandwich-duo.jpg";
import sausageMcmuffin from "@/assets/sausage-mcmuffin.jpg";
import chefProfessional from "@/assets/chef-professional.jpg";
import happyCustomers from "@/assets/happy-customers.jpg";
import deliveryPerson from "@/assets/delivery-person.jpg";

const Index = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const cuisineTypes = [
    { name: "Burgers", icon: "🍔", color: "bg-red-500" },
    { name: "Steak", icon: "🥩", color: "bg-orange-500" },
    { name: "Vegetarian", icon: "🥗", color: "bg-green-500" },
    { name: "Pizza", icon: "🍕", color: "bg-yellow-500" },
    { name: "Korean", icon: "🍜", color: "bg-blue-500" },
    { name: "Healthy", icon: "🥙", color: "bg-emerald-500" },
    { name: "Chinese", icon: "🥡", color: "bg-red-600" },
    { name: "Thai", icon: "🍛", color: "bg-purple-500" },
  ];

  const restaurants = [
    {
      id: 1,
      name: "McDonald's",
      category: "American,Barbecue,Chinese,Deli,Diner,Greek",
      rating: 4.5,
      reviews: "56+ Ratings",
      image: mcdonaldsRestaurant,
      deliveryTime: "10-30 mins",
      promo: "[promo(10)] $20.00 off"
    },
    {
      id: 2,
      name: "Jollibee",
      category: "Burgers,Diner",
      rating: 4.7,
      reviews: "7+ Ratings", 
      image: jollibeeRestaurant,
      deliveryTime: "10-30 mins"
    },
    {
      id: 3,
      name: "Panda Express",
      category: "Chinese,Sandwiches",
      rating: 4.4,
      reviews: "4+ Ratings",
      image: pandaExpressRestaurant,
      deliveryTime: "05-10 mins"
    },
    {
      id: 4,
      name: "Subway",
      category: "Burgers",
      rating: 4.5,
      reviews: "5+ Ratings",
      image: subwayRestaurant,
      deliveryTime: "05-10 mins"
    }
  ];

  const featuredItems = [
    {
      id: 1,
      name: "Cheesy Eggdesal Meal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit, diam sed consequat.",
      price: 97.00,
      image: cheesyEggdesalMeal
    },
    {
      id: 2,
      name: "Breakfast Rice Bowl Duo", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit, diam sed consequat.",
      price: 20.00,
      image: breakfastRiceBowl
    },
    {
      id: 3,
      name: "Breakfast Sandwich Duo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit, diam sed consequat.",
      price: 249.00,
      image: breakfastSandwichDuo
    },
    {
      id: 4,
      name: "Sausage McMuffin with Egg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit, diam sed consequat.",
      price: 145.00,
      image: sausageMcmuffin
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader cartItemCount={cartItemCount} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-100 to-orange-50 py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's find best food for you
              </h1>
              <div className="flex items-center gap-4 bg-white rounded-lg p-2 shadow-lg max-w-lg">
                <input
                  type="text"
                  placeholder="Enter your street and house number"
                  className="flex-1 border-0 outline-none px-4 py-3"
                />
                <Button className="bg-primary hover:bg-primary/90 px-6">
                  <Truck className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex gap-8">
              <img 
                src={heroPerson1} 
                alt="Person with food"
                className="w-80 h-96 object-cover rounded-lg"
              />
              <img 
                src={heroPerson2} 
                alt="Person eating"
                className="w-80 h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Cuisine Types */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your favorite cuisines</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {cuisineTypes.map((cuisine, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`w-16 h-16 ${cuisine.color} rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform`}>
                  {cuisine.icon}
                </div>
                <p className="text-sm font-medium">{cuisine.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Restaurants */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Restaurants Near You</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                    {restaurant.promo && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-500 text-white">
                          {restaurant.promo}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{restaurant.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{restaurant.rating}+</span>
                        <span className="text-sm text-muted-foreground">{restaurant.reviews}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{restaurant.deliveryTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Items */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Items</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(item.price)}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-dashboard-green hover:bg-dashboard-green/90"
                      onClick={() => setCartItemCount(prev => prev + 1)}
                    >
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* New Restaurants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">New Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <Link key={`new-${restaurant.id}`} to={`/restaurant/${restaurant.id}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{restaurant.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{restaurant.rating}+</span>
                        <span className="text-sm text-muted-foreground">{restaurant.reviews}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{restaurant.deliveryTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Join Club Fast */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">
            Join <span className="text-primary">Club Fast</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <img 
                src={chefProfessional} 
                alt="Chef"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold">Para Restaurantes</h3>
              <p className="text-muted-foreground text-sm">Cadastre seu restaurante</p>
            </div>
            <div className="text-center">
              <img 
                src={happyCustomers} 
                alt="Customers"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold">Para Clientes</h3>
              <p className="text-muted-foreground text-sm">Encontre sua comida favorita</p>
            </div>
            <div className="text-center">
              <img 
                src={deliveryPerson} 
                alt="Delivery"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold">Para Entregadores</h3>
              <p className="text-muted-foreground text-sm">Faça parte da nossa equipe</p>
            </div>
          </div>
        </section>

        {/* Best Seller Restaurants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Best Seller Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {restaurants.map((restaurant) => (
              <Link key={`best-${restaurant.id}`} to={`/restaurant/${restaurant.id}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                    {restaurant.promo && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-500 text-white">
                          {restaurant.promo}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{restaurant.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{restaurant.rating}+</span>
                        <span className="text-sm text-muted-foreground">{restaurant.reviews}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{restaurant.deliveryTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">CF</span>
                </div>
                <span className="text-xl font-bold">Club Fast</span>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  📱 App Store
                </Button>
                <Button variant="outline" size="sm">
                  📱 Google Play
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">POS</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Terms and conditions</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">This</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Terms and conditions</li>
                <li>Terms and</li>
                <li>Privacy policy</li>
                <li>Terms and conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">More links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Terms and conditions</li>
                <li>Privacy policy</li>
                <li>Terms and conditions</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© Karenderia</p>
            <p className="text-sm text-muted-foreground">Website: demo.bastiapp.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
