
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Flame, Clock, TrendingUp, Vegan, Car } from "lucide-react";

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

  const burgers: MenuItem[] = [
    {
      id: 1,
      name: "Classic Burger Combo",
      description: "Juicy beef patty with lettuce, tomato, and our secret sauce. Served with fries and a drink.",
      price: 399,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80",
      tags: ["Bestseller", "Combo"],
      isPopular: true
    },
    {
      id: 2,
      name: "Double Cheese Burger",
      description: "Double beef patty with extra cheese, caramelized onions, and bacon. Served with fries and a drink.",
      price: 449,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      tags: ["Premium", "Combo"]
    },
    {
      id: 3,
      name: "Veggie Burger Combo",
      description: "Plant-based patty with fresh veggies, avocado, and vegan mayo. Served with sweet potato fries.",
      price: 349,
      image: "public/lovable-uploads/117e2177-1345-4047-8517-a0088f629761.png",
      tags: ["Vegetarian", "Combo"],
      isVegetarian: true
    },
    {
      id: 4,
      name: "Spicy Chicken Burger",
      description: "Crispy chicken fillet with spicy sauce, coleslaw, and pickles. Served with fries and a drink.",
      price: 379,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1644&q=80",
      tags: ["Spicy", "Combo"]
    },
    {
      id: 5,
      name: "BBQ Paneer Burger",
      description: "Grilled paneer patty with BBQ sauce, crispy veggies, and cheddar cheese. Served with onion rings.",
      price: 429,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      tags: ["Premium", "Combo"],
      isNew: true
    },
    {
      id: 6,
      name: "Mushroom Swiss Burger",
      description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese. Served with truffle fries.",
      price: 399,
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      tags: ["Premium", "Combo"]
    }
  ];

  const sandwiches: MenuItem[] = [
    {
      id: 7,
      name: "Grilled Sandwich Platter",
      description: "Fresh vegetables, cheese and herbs grilled to perfection in our special bread. Starting at just ₹99.",
      price: 299,
      image: "public/lovable-uploads/6cab8b38-b696-4e1e-be1d-7a275e3f087b.png",
      tags: ["Classic", "Combo"],
      isPopular: true
    },
    {
      id: 8,
      name: "Cheese Griller Deluxe",
      description: "Four-cheese blend between buttery toasted bread with tomato soup for dipping.",
      price: 249,
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      tags: ["Vegetarian", "Combo"],
      isVegetarian: true
    },
    {
      id: 9,
      name: "Paneer Tikka Sandwich",
      description: "Spiced paneer tikka with melted cheese, mint chutney on a toasted bread.",
      price: 299,
      image: "https://images.unsplash.com/photo-1630767623396-f9f70be53a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      tags: ["Premium", "Combo"]
    },
    {
      id: 10,
      name: "Mediterranean Veggie",
      description: "Hummus, roasted vegetables, feta cheese, and olive tapenade on focaccia bread.",
      price: 279,
      image: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      tags: ["Vegetarian", "Healthy"],
      isVegetarian: true
    },
    {
      id: 11,
      name: "Bombay Sandwich",
      description: "Classic Mumbai-style sandwich with potato, cucumber, tomato, mint chutney and cheese.",
      price: 219,
      image: "https://images.unsplash.com/photo-1625938144327-cf744b099fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      tags: ["Specialty", "Combo"],
      isNew: true
    },
    {
      id: 12,
      name: "Tandoori Chicken Sandwich",
      description: "Grilled tandoori chicken, mint mayo, lettuce, tomato, and onions on fresh baked bread.",
      price: 319,
      image: "https://images.unsplash.com/photo-1619860705236-45bdb14b5a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      tags: ["Spicy", "Combo"]
    }
  ];

  const sides: MenuItem[] = [
    {
      id: 13,
      name: "Loaded Fries",
      description: "Crispy fries topped with cheese sauce, herbs, and green onions.",
      price: 199,
      image: "https://images.unsplash.com/photo-1639744093378-d41e9e49c585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      tags: ["Popular", "Shareable"],
      isPopular: true
    },
    {
      id: 14,
      name: "Onion Rings",
      description: "Crispy onion rings served with spicy mayo dipping sauce.",
      price: 149,
      image: "https://images.unsplash.com/photo-1639024471283-05009ffe2f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      tags: ["Classic", "Vegetarian"],
      isVegetarian: true
    },
    {
      id: 15,
      name: "Coleslaw",
      description: "Fresh cabbage and carrots in a creamy dressing.",
      price: 99,
      image: "https://images.unsplash.com/photo-1625938144327-cf744b099fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      tags: ["Side", "Vegetarian"],
      isVegetarian: true
    },
    {
      id: 16,
      name: "Sweet Potato Fries",
      description: "Crispy sweet potato fries with chipotle mayo.",
      price: 179,
      image: "https://images.unsplash.com/photo-1644252211108-8c82daf9aa2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
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
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="sandwiches" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getItems("sandwiches").map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="sides" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getItems("sides").map((item) => (
                      <MenuCard key={item.id} item={item} />
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
                      Call to Order
                    </a>
                    <a 
                      href="/contact" 
                      className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors"
                    >
                      Contact Us
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
        </main>
        <Footer />
      </div>
    </>
  );
};

// Menu Card Component
const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift">
      <div className="relative h-48 overflow-hidden">
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
      </div>
    </div>
  );
};

export default Menu;
