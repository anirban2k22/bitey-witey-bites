
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Clock, TrendingUp, Vegan, Car, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
  isPopular?: boolean;
  isVegetarian?: boolean;
  isNew?: boolean;
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("burgers");
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(15);

  const handleOrderNow = (item: MenuItem) => {
    setSelectedItem(item);
    setShowCart(true);
    setQuantity(10); // Reset quantity to minimum (10)
  };

  const handleCheckout = () => {
    // Here you would normally process the order
    // For now, we'll redirect to checkout page
    window.location.href = '/checkout';
  };

  const burgers: MenuItem[] = [
    {
      id: 1,
      name: "Veg Burger Combo",
      description: "Customizable veggie burger with fresh juice and french fries or veg cutlet.",
      price: 99,
      image: "/lovable-uploads/75a42142-5113-4cd3-9ac0-b4dc4560461a.png",
      tags: ["Bestseller", "Combo"],
      isPopular: true,
      isVegetarian: true
    },
    {
      id: 2,
      name: "Paneer Burger Combo",
      description: "Customizable paneer burger with fresh juice and french fries or cheese balls.",
      price: 129,
      image: "/lovable-uploads/75a42142-5113-4cd3-9ac0-b4dc4560461a.png",
      tags: ["Premium", "Combo"],
      isVegetarian: true,
      isNew: true
    }
  ];

  const sandwiches: MenuItem[] = [
    {
      id: 3,
      name: "Grilled Sandwich Platter",
      description: "Fresh vegetables, cheese and herbs grilled to perfection in our special bread.",
      price: 99,
      image: "/lovable-uploads/e7c8070f-d021-4ed2-b7c2-038abd9a1069.png",
      tags: ["Classic", "Combo"],
      isPopular: true,
      isVegetarian: true
    }
  ];

  const indianCombos: MenuItem[] = [
    {
      id: 4,
      name: "Jeera Rice & Paneer Butter Masala",
      description: "Customizable jeera rice with rich and creamy paneer butter masala.",
      price: 199,
      image: "/lovable-uploads/8ee50dae-52f6-4c6d-849f-689be91e6bfa.png",
      tags: ["Premium", "Combo"],
      isPopular: true,
      isVegetarian: true
    },
    {
      id: 5,
      name: "Rajma Rice Combo",
      description: "Plain rice (customizable) with rajma, achar, and butter.",
      price: 199,
      image: "/lovable-uploads/698aafc6-5753-4668-92f3-ac8ee53a7316.png",
      tags: ["Classic", "Vegetarian"],
      isVegetarian: true
    },
    {
      id: 6,
      name: "Aloo Paratha Combo",
      description: "Delicious aloo paratha served with lassi and achar.",
      price: 149,
      image: "/lovable-uploads/a376ffa1-5736-42fc-9a9b-936bed378b29.png",
      tags: ["Classic", "Breakfast"],
      isNew: true,
      isVegetarian: true
    }
  ];

  const getItems = (category: string): MenuItem[] => {
    switch (category) {
      case "burgers":
        return burgers;
      case "sandwiches":
        return sandwiches;
      case "indian":
        return indianCombos;
      default:
        return burgers;
    }
  };

  return (
    <>
      <Helmet>
        <title>Menu - BiteyWitey | Burgers, Sandwiches & More</title>
        <meta name="description" content="Explore our delicious menu of burgers, sandwiches, and sides. Perfect for events and gatherings." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Menu Hero */}
          <section className="bg-bw-orange/10 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Our <span className="text-gradient">Menu</span>
                </h1>
                <p className="text-lg md:text-xl text-bw-black/80 mb-6">
                  Delicious combos perfect for gatherings and events
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-bw-black/70">
                  <div className="flex items-center gap-1">
                    <Flame className="h-4 w-4 text-bw-orange" />
                    <span>Popular</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Vegan className="h-4 w-4 text-green-500" />
                    <span>Vegetarian</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                    <span>New</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Categories */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="burgers" className="w-full" onValueChange={setActiveCategory}>
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-muted/50">
                    <TabsTrigger value="burgers" className="text-base px-6">Burgers</TabsTrigger>
                    <TabsTrigger value="sandwiches" className="text-base px-6">Sandwiches</TabsTrigger>
                    <TabsTrigger value="indian" className="text-base px-6">Indian Combos</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="burgers" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getItems("burgers").map((item) => (
                      <MenuCard key={item.id} item={item} onOrder={handleOrderNow} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="sandwiches" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getItems("sandwiches").map((item) => (
                      <MenuCard key={item.id} item={item} onOrder={handleOrderNow} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="indian" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getItems("indian").map((item) => (
                      <MenuCard key={item.id} item={item} onOrder={handleOrderNow} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Bulk Orders */}
          <section className="bg-bw-black text-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Bulk Orders for Any Occasion</h2>
                  <p className="text-white/80 mb-6">
                    Planning an event? BiteyWitey specializes in bulk orders for gatherings of any size. From office parties to family celebrations, we've got you covered.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="bg-bw-orange/20 p-1 rounded-full mt-1">
                        <Car className="h-5 w-5 text-bw-orange" />
                      </div>
                      <div>
                        <h3 className="font-medium">Free Delivery</h3>
                        <p className="text-white/70 text-sm">For orders over ₹2000 within city limits</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-bw-orange/20 p-1 rounded-full mt-1">
                        <Clock className="h-5 w-5 text-bw-orange" />
                      </div>
                      <div>
                        <h3 className="font-medium">Advanced Ordering</h3>
                        <p className="text-white/70 text-sm">Place your order at least 24 hours in advance</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:+916291569512" 
                      className="bg-bw-orange hover:bg-bw-orange-dark text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call to Order
                    </a>
                    <a 
                      href="mailto:anirbandas1616@gmail.com" 
                      className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-bw-orange/20 w-full h-full rounded-2xl"></div>
                  <img 
                    src="/lovable-uploads/8ee50dae-52f6-4c6d-849f-689be91e6bfa.png" 
                    alt="Bulk order of food" 
                    className="rounded-2xl shadow-lg w-full h-auto object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      
      {/* Cart Modal */}
      {showCart && selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowCart(false)}
              className="absolute right-4 top-4 text-bw-black/50 hover:text-bw-black"
            >
              ✕
            </button>
            
            <h3 className="text-xl font-bold mb-4">Add to Order</h3>
            
            <div className="flex gap-4 mb-6">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-bold">{selectedItem.name}</h4>
                <p className="text-sm text-bw-black/70">{selectedItem.description}</p>
                <p className="text-bw-orange font-bold mt-1">₹{selectedItem.price}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Quantity (Minimum 10)</label>
              <div className="flex items-center">
                <button 
                  onClick={() => quantity > 10 && setQuantity(quantity - 1)}
                  className="border rounded-l-lg px-3 py-2 hover:bg-gray-100"
                  disabled={quantity <= 10}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(10, parseInt(e.target.value) || 10))}
                  className="border-y w-16 py-2 text-center"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="border rounded-r-lg px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Total:</span>
              <span className="font-bold text-bw-orange">
                ₹{(selectedItem.price * quantity).toLocaleString()}
              </span>
            </div>
            
            <Button 
              className="w-full bg-bw-orange hover:bg-bw-orange-dark"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

// Menu Card Component
const MenuCard = ({ item, onOrder }: { item: MenuItem, onOrder: (item: MenuItem) => void }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift">
      <div 
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={() => onOrder(item)}
      >
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {item.isPopular && (
            <Badge className="bg-bw-orange border-0">
              <Flame className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          )}
          {item.isVegetarian && (
            <Badge className="bg-green-500 border-0">
              <Vegan className="h-3 w-3 mr-1" />
              Veg
            </Badge>
          )}
          {item.isNew && (
            <Badge className="bg-blue-500 border-0">
              <TrendingUp className="h-3 w-3 mr-1" />
              New
            </Badge>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <span className="text-bw-orange font-bold">₹{item.price}</span>
        </div>
        <p className="text-bw-black/70 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-bw-cream text-bw-black/70 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <Button 
            size="sm" 
            className="bg-bw-orange text-white hover:bg-bw-orange-dark ml-auto"
            onClick={() => onOrder(item)}
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
