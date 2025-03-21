
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingBag, Phone, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Menu data
const burgerCombos = [
  {
    id: 1,
    name: "Veg Burger Combo",
    description: "Customizable veggie burger with fresh juice and french fries or veg cutlet.",
    price: "₹99",
    servings: "1 person",
    image: "public/lovable-uploads/75a42142-5113-4cd3-9ac0-b4dc4560461a.png",
    popular: true,
  },
  {
    id: 2,
    name: "Paneer Burger Combo",
    description: "Customizable paneer burger with fresh juice and french fries or cheese balls.",
    price: "₹129",
    servings: "1 person",
    image: "public/lovable-uploads/75a42142-5113-4cd3-9ac0-b4dc4560461a.png",
    popular: true,
  },
];

const indianCombos = [
  {
    id: 1,
    name: "Jeera Rice & Paneer Butter Masala",
    description: "Customizable jeera rice with rich and creamy paneer butter masala.",
    price: "₹199",
    servings: "1-2 people",
    image: "public/lovable-uploads/8ee50dae-52f6-4c6d-849f-689be91e6bfa.png",
    popular: true,
  },
  {
    id: 2,
    name: "Rajma Rice Combo",
    description: "Plain rice (customizable) with rajma, achar, and butter.",
    price: "₹199",
    servings: "1-2 people",
    image: "public/lovable-uploads/698aafc6-5753-4668-92f3-ac8ee53a7316.png",
    popular: false,
  },
  {
    id: 3,
    name: "Aloo Paratha Combo",
    description: "Delicious aloo paratha served with lassi and achar.",
    price: "₹149",
    servings: "1 person",
    image: "public/lovable-uploads/a376ffa1-5736-42fc-9a9b-936bed378b29.png",
    popular: true,
  },
];

const sandwichCombos = [
  {
    id: 1,
    name: "Grilled Sandwich Platter",
    description: "Fresh vegetables, cheese and herbs grilled to perfection in our special bread.",
    price: "₹99",
    servings: "1 person",
    image: "public/lovable-uploads/e7c8070f-d021-4ed2-b7c2-038abd9a1069.png",
    popular: true,
  },
];

// New special combos for carousel
const newSpecialCombos = [
  {
    id: 1,
    name: "Jeera Rice & Paneer Butter Masala",
    description: "Customizable jeera rice with rich and creamy paneer butter masala.",
    price: "₹199",
    image: "public/lovable-uploads/8ee50dae-52f6-4c6d-849f-689be91e6bfa.png",
  },
  {
    id: 2,
    name: "Rajma Rice Combo",
    description: "Plain rice (customizable) with rajma, achar, and butter.",
    price: "₹199",
    image: "public/lovable-uploads/698aafc6-5753-4668-92f3-ac8ee53a7316.png",
  },
  {
    id: 3,
    name: "Aloo Paratha Combo",
    description: "Delicious aloo paratha served with lassi and achar.",
    price: "₹149",
    image: "public/lovable-uploads/a376ffa1-5736-42fc-9a9b-936bed378b29.png",
  },
  {
    id: 4,
    name: "Veg Burger Combo",
    description: "Customizable veggie burger with fresh juice and french fries or veg cutlet.",
    price: "₹99",
    image: "public/lovable-uploads/75a42142-5113-4cd3-9ac0-b4dc4560461a.png",
  },
  {
    id: 5,
    name: "Grilled Sandwich",
    description: "Fresh vegetables, cheese and herbs grilled to perfection in our special bread.",
    price: "₹99",
    image: "public/lovable-uploads/e7c8070f-d021-4ed2-b7c2-038abd9a1069.png",
  },
];

const CartModal = ({ isOpen, onClose, item }: { isOpen: boolean, onClose: () => void, item: any }) => {
  const [quantity, setQuantity] = useState(15);
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 15) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleCheckout = () => {
    // In a real app, you would store cart data in context/state
    // For now, we'll just navigate to a "payment" page
    onClose();
    navigate("/contact");
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-bw-black/50 hover:text-bw-black"
        >
          ✕
        </button>
        
        <h3 className="text-xl font-bold mb-4">Add to Order</h3>
        
        <div className="flex gap-4 mb-6">
          <img 
            src={item?.image} 
            alt={item?.name} 
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <h4 className="font-bold">{item?.name}</h4>
            <p className="text-sm text-bw-black/70">{item?.description}</p>
            <p className="text-bw-orange font-bold mt-1">{item?.price}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Quantity (Minimum 15)</label>
          <div className="flex items-center">
            <button 
              onClick={handleDecrement}
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
              onClick={handleIncrement}
              className="border rounded-r-lg px-3 py-2 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="font-medium">Total:</span>
          <span className="font-bold text-bw-orange">
            ₹{(parseFloat(item?.price.replace('₹', '')) * quantity).toLocaleString()}
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
  );
};

const MenuItem = ({ item }: { item: typeof burgerCombos[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden border-0 rounded-2xl shadow-smooth hover-lift group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden cursor-pointer" onClick={() => setShowCart(true)}>
          <div className="h-56 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {item.popular && (
            <div className="absolute top-4 right-4 bg-bw-orange text-white text-xs font-bold uppercase px-2 py-1 rounded-full">
              Popular
            </div>
          )}
          
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 flex items-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="p-4 text-white">
              <Button 
                size="sm" 
                className="w-full bg-white text-bw-black hover:bg-bw-orange hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCart(true);
                }}
              >
                <ShoppingBag className="h-4 w-4" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <span className="font-bold text-bw-orange">{item.price}</span>
          </div>
          <p className="text-bw-black/70 text-sm mb-3">{item.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-bw-black/50 bg-bw-black/5 px-2 py-1 rounded-full">
              Serves {item.servings}
            </span>
            <button className="p-2 rounded-full hover:bg-bw-orange/10 transition-colors">
              <Heart className="h-4 w-4 text-bw-black/70" />
            </button>
          </div>
        </div>
      </Card>
      
      <CartModal 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
        item={item}
      />
    </>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {/* New Combos Carousel */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
            Featured Combos
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Get Foods for Your Family Gatherings
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {newSpecialCombos.map((combo) => (
                <CarouselItem key={combo.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-lift h-full p-1">
                    <div 
                      className="relative h-48 overflow-hidden cursor-pointer rounded-t-xl"
                      onClick={() => {
                        // In a real implementation, you'd open the cart modal for this item
                        window.location.href = "/menu";
                      }}
                    >
                      <img
                        src={combo.image}
                        alt={combo.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="font-bold">{combo.name}</h3>
                          <p className="text-sm text-white/80">{combo.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-bw-orange text-white text-xs font-bold uppercase px-2 py-1 rounded-full">
                        Special
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <span className="font-bold text-bw-orange">{combo.price}</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-bw-orange text-bw-orange hover:bg-bw-orange hover:text-white"
                        onClick={() => {
                          window.location.href = "/menu";
                        }}
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>

        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
            Our Menu
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Delicious Combos for Your Events
          </h2>
          <p className="text-bw-black/70">
            Perfect for office gatherings, parties, or any event that needs great food.
            We specialize in bulk orders that everyone will love.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="tel:+916291569512" className="inline-flex items-center text-bw-orange hover:text-bw-orange-dark">
              <Phone className="h-4 w-4 mr-1" />
              +91 6291569512
            </a>
            <a href="tel:+916386342758" className="inline-flex items-center text-bw-orange hover:text-bw-orange-dark">
              <Phone className="h-4 w-4 mr-1" />
              +91 6386342758
            </a>
            <a href="mailto:biteywitey.official@gmail.com" className="inline-flex items-center text-bw-orange hover:text-bw-orange-dark">
              <Mail className="h-4 w-4 mr-1" />
              Email Us
            </a>
          </div>
        </div>

        <Tabs defaultValue="burgers" className="w-full animate-fade-in">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-bw-orange/10 p-1 rounded-full">
              <TabsTrigger 
                value="burgers" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-bw-orange data-[state=active]:text-white"
              >
                Burger Combos
              </TabsTrigger>
              <TabsTrigger 
                value="indian" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-bw-orange data-[state=active]:text-white"
              >
                Indian Combos
              </TabsTrigger>
              <TabsTrigger 
                value="sandwiches" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-bw-orange data-[state=active]:text-white"
              >
                Sandwich Combos
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="burgers" className="mt-2 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {burgerCombos.map((burger) => (
                <MenuItem key={burger.id} item={burger} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="indian" className="mt-2 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {indianCombos.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sandwiches" className="mt-2 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sandwichCombos.map((sandwich) => (
                <MenuItem key={sandwich.id} item={sandwich} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-bw-orange/40 text-bw-orange hover:bg-bw-orange hover:text-white"
          >
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
