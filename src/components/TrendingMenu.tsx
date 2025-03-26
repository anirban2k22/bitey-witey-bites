
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ShoppingBag, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const trendingItems = [
  {
    id: 1,
    name: "Jeera Rice & Paneer Butter Masala",
    description: "Customizable jeera rice with rich and creamy paneer butter masala.",
    price: "₹199",
    rating: 4.9,
    image: "public/lovable-uploads/8ee50dae-52f6-4c6d-849f-689be91e6bfa.png",
  },
  {
    id: 2,
    name: "Veg Burger Combo",
    description: "Customizable veggie burger with fresh juice and french fries or veg cutlet.",
    price: "₹99",
    rating: 4.8,
    image: "public/lovable-uploads/75a42142-5113-4cd3-9ac0-b4dc4560461a.png",
  },
  {
    id: 3,
    name: "Grilled Sandwich Platter",
    description: "Fresh vegetables, cheese and herbs grilled to perfection in our special bread.",
    price: "₹99",
    rating: 4.7,
    image: "public/lovable-uploads/e7c8070f-d021-4ed2-b7c2-038abd9a1069.png",
  }
];

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  quantity?: number;
}

const TrendingMenu = () => {
  const { toast } = useToast();
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const [quantity, setQuantity] = useState(10); // Changed to minimum 10
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const email = localStorage.getItem("userEmail");
    setIsLoggedIn(!!email);
    setUserEmail(email);
  }, []);

  const handleOrderClick = (item: CartItem) => {
    setSelectedItem(item);
    setShowCart(true);
    setQuantity(10); // Reset quantity to minimum 10
  };

  const handleCheckout = () => {
    if (!selectedItem) return;
    
    // Check if user is logged in
    if (!isLoggedIn) {
      // Save item to temporary storage and redirect to login
      localStorage.setItem("tempCartItem", JSON.stringify({
        ...selectedItem,
        quantity
      }));
      navigate("/checkout");
      return;
    }

    // Save the order to localStorage
    const cartItem = {
      ...selectedItem,
      quantity
    };
    
    // Generate a timestamp-based ID
    const orderId = `order_${Date.now()}`;
    
    // Create order object
    const order = {
      id: orderId,
      date: new Date().toLocaleString(),
      items: [cartItem],
      status: "pending" as const,
      total: `₹${parseInt(selectedItem.price.replace(/[^\d]/g, '')) * quantity}`
    };
    
    // Get existing orders
    const existingOrdersJson = localStorage.getItem(`orders_${userEmail}`);
    const existingOrders = existingOrdersJson ? JSON.parse(existingOrdersJson) : [];
    
    // Add new order
    const updatedOrders = [order, ...existingOrders];
    
    // Save back to localStorage
    localStorage.setItem(`orders_${userEmail}`, JSON.stringify(updatedOrders));
    
    // Notify user
    toast({
      title: "Order placed!",
      description: "Your order has been sent to BiteyWitey.",
    });
    
    // Close cart modal
    setShowCart(false);
    
    // Send order details to BiteyWitey via email
    const emailBody = {
      orderDetails: JSON.stringify(order),
      userEmail: userEmail,
      _subject: `New Order #${orderId.slice(-6)} from BiteyWitey Website`,
    };
    
    // Use FormSubmit to send the email
    fetch("https://formsubmit.co/biteywitey.official@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailBody),
    }).catch(err => {
      console.error("Error sending order email:", err);
    });
  };

  return (
    <section className="py-16 bg-bw-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
            Trending Now
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Most Loved Combos
          </h2>
          <p className="text-bw-black/70 max-w-2xl mx-auto">
            These popular choices are crowd favorites for a reason - try them today!
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {trendingItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift h-full">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center shadow-md">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" /> 
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <Button 
                          className="w-full bg-white text-bw-black hover:bg-bw-orange hover:text-white transition-colors"
                          onClick={() => handleOrderClick(item)}
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Order Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                    <p className="text-bw-black/70 text-sm mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-bw-orange text-lg">{item.price}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-bw-orange text-bw-orange hover:bg-bw-orange hover:text-white"
                        onClick={() => handleOrderClick(item)}
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>
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
                <p className="text-bw-orange font-bold mt-1">{selectedItem.price}</p>
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
                {selectedItem.price.charAt(0) + (parseInt(selectedItem.price.slice(1)) * quantity).toLocaleString()}
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
    </section>
  );
};

export default TrendingMenu;
