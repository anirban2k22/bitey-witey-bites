
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Clock, TrendingUp, Vegan, Car, MapPin, Phone, Mail } from "lucide-react";

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
    setQuantity(15); // Reset quantity to minimum
  };

  const handleCheckout = () => {
    // Here you would normally process the order
    // For now, we'll just close the modal
    setShowCart(false);
    alert(`Order placed for ${quantity} x ${selectedItem?.name}. Total: ₹${(selectedItem?.price || 0) * quantity}`);
    // In a real app, you would redirect to a payment page
  };

  const burgers: MenuItem[] = [
    {
      id: 1,
      name: "Classic Burger Combo",
      description: "Juicy beef patty with lettuce, tomato, and our secret sauce. Served with fries and a drink.",
      price: 399,
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Bestseller", "Combo"],
      isPopular: true
    },
    {
      id: 2,
      name: "Double Cheese Burger",
      description: "Double beef patty with extra cheese, caramelized onions, and bacon. Served with fries and a drink.",
      price: 449,
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Premium", "Combo"]
    },
    {
      id: 3,
      name: "Veggie Burger Combo",
      description: "Plant-based patty with fresh veggies, avocado, and vegan mayo. Served with sweet potato fries.",
      price: 349,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Vegetarian", "Combo"],
      isVegetarian: true
    },
    {
      id: 4,
      name: "Spicy Chicken Burger",
      description: "Crispy chicken fillet with spicy sauce, coleslaw, and pickles. Served with fries and a drink.",
      price: 379,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Spicy", "Combo"]
    },
    {
      id: 5,
      name: "BBQ Paneer Burger",
      description: "Grilled paneer patty with BBQ sauce, crispy veggies, and cheddar cheese. Served with onion rings.",
      price: 429,
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Premium", "Combo"],
      isNew: true
    },
    {
      id: 6,
      name: "Mushroom Swiss Burger",
      description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese. Served with truffle fries.",
      price: 399,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Premium", "Combo"]
    }
  ];

  const sandwiches: MenuItem[] = [
    {
      id: 7,
      name: "Grilled Sandwich Platter",
      description: "Fresh vegetables, cheese and herbs grilled to perfection in our special bread. Starting at just ₹99.",
      price: 299,
      image: "https://images.unsplash.com/photo-1539252554935-80918f560c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Classic", "Combo"],
      isPopular: true
    },
    {
      id: 8,
      name: "Cheese Griller Deluxe",
      description: "Four-cheese blend between buttery toasted bread with tomato soup for dipping.",
      price: 249,
      image: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Vegetarian", "Combo"],
      isVegetarian: true
    },
    {
      id: 9,
      name: "Paneer Tikka Sandwich",
      description: "Spiced paneer tikka with melted cheese, mint chutney on a toasted bread.",
      price: 299,
      image: "https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Premium", "Combo"]
    },
    {
      id: 10,
      name: "Mediterranean Veggie",
      description: "Hummus, roasted vegetables, feta cheese, and olive tapenade on focaccia bread.",
      price: 279,
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Vegetarian", "Healthy"],
      isVegetarian: true
    },
    {
      id: 11,
      name: "Bombay Sandwich",
      description: "Classic Mumbai-style sandwich with potato, cucumber, tomato, mint chutney and cheese.",
      price: 219,
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Specialty", "Combo"],
      isNew: true
    },
    {
      id: 12,
      name: "Tandoori Chicken Sandwich",
      description: "Grilled tandoori chicken, mint mayo, lettuce, tomato, and onions on fresh baked bread.",
      price: 319,
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Spicy", "Combo"]
    }
  ];

  const sides: MenuItem[] = [
    {
      id: 13,
      name: "Loaded Fries",
      description: "Crispy fries topped with cheese sauce, herbs, and green onions.",
      price: 199,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Popular", "Shareable"],
      isPopular: true
    },
    {
      id: 14,
      name: "Onion Rings",
      description: "Crispy onion rings served with spicy mayo dipping sauce.",
      price: 149,
      image: "https://images.unsplash.com/photo-1581349485608-9469f2a5ca0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Classic", "Vegetarian"],
      isVegetarian: true
    },
    {
      id: 15,
      name: "Coleslaw",
      description: "Fresh cabbage and carrots in a creamy dressing.",
      price: 99,
      image: "https://images.unsplash.com/photo-1637486349561-64a93b16ecfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Side", "Vegetarian"],
      isVegetarian: true
    },
    {
      id: 16,
      name: "Sweet Potato Fries",
      description: "Crispy sweet potato fries with chipotle mayo.",
      price: 179,
      image: "https://images.unsplash.com/photo-1644252211108-8c82daf9aa2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Healthy", "Vegetarian"],
      isVegetarian: true
    }
  ];

  const getItems = (category: string): MenuItem[] => {
    switch (category) {
      case "burgers":
        return burgers;
      case "sandwiches":
        return sandwiches;
      case "sides":
        return sides;
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
                    <TabsTrigger value="sides" className="text-base px-6">Sides</TabsTrigger>
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

                <TabsContent value="sides" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getItems("sides").map((item) => (
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
                      href="mailto:biteywitey.official@gmail.com" 
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
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                    alt="Bulk order of burgers and sandwiches" 
                    className="rounded-2xl shadow-lg w-full h-auto object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Location with Map */}
          <section className="py-16 bg-bw-cream">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Visit Us in Bengaluru</h2>
                <p className="text-bw-black/70 max-w-2xl mx-auto">
                  Drop by our location to enjoy our food or discuss your bulk order requirements in person.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1720056548086!5m2!1sen!2sin"
                      width="100%" 
                      height="450" 
                      style={{ border: 0 }} 
                      allowFullScreen
                      loading="lazy"
                      title="BiteyWitey Location"
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-4">BiteyWitey Bengaluru</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-bw-orange/10 p-1 rounded-full mt-1">
                          <MapPin className="h-5 w-5 text-bw-orange" />
                        </div>
                        <div>
                          <h4 className="font-medium">Address</h4>
                          <p className="text-bw-black/70 text-sm">123 Food Street, Koramangala, Bengaluru, Karnataka 560034</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-bw-orange/10 p-1 rounded-full mt-1">
                          <Clock className="h-5 w-5 text-bw-orange" />
                        </div>
                        <div>
                          <h4 className="font-medium">Opening Hours</h4>
                          <p className="text-bw-black/70 text-sm">Monday-Saturday: 10:00 AM - 10:00 PM</p>
                          <p className="text-bw-black/70 text-sm">Sunday: 11:00 AM - 9:00 PM</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-bw-orange/10 p-1 rounded-full mt-1">
                          <Phone className="h-5 w-5 text-bw-orange" />
                        </div>
                        <div>
                          <h4 className="font-medium">Contact</h4>
                          <a href="tel:+916291569512" className="text-bw-orange text-sm">+91 6291 569 512</a>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-bw-orange hover:bg-bw-orange-dark" 
                        asChild
                      >
                        <a href="https://maps.google.com/?q=Bengaluru,Karnataka" target="_blank" rel="noopener noreferrer">
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
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
              <label className="text-sm font-medium mb-2 block">Quantity (Minimum 15)</label>
              <div className="flex items-center">
                <button 
                  onClick={() => quantity > 15 && setQuantity(quantity - 1)}
                  className="border rounded-l-lg px-3 py-2 hover:bg-gray-100"
                  disabled={quantity <= 15}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="15"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(15, parseInt(e.target.value) || 15))}
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
              Proceed to Payment
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
