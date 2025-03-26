
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, ArrowRight, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Order {
  id: string;
  date: string;
  items: {
    id: number;
    name: string;
    price: string;
    quantity: number;
    image: string;
  }[];
  status: "pending" | "confirmed" | "delivered";
  total: string;
}

const MyOrders = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userEmail = localStorage.getItem("userEmail");
    setIsLoggedIn(!!userEmail);

    if (userEmail) {
      // Load orders from localStorage
      const savedOrders = localStorage.getItem(`orders_${userEmail}`);
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    }
    
    setLoading(false);
  }, []);

  const handleLogin = () => {
    navigate("/checkout?redirect=my-orders");
  };

  const handleReorder = (order: Order) => {
    // Implementation would copy this order to cart
    toast({
      title: "Items added to cart",
      description: "Your previous order has been added to your cart",
    });
    navigate("/checkout");
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-bw-orange border-t-transparent rounded-full"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 flex flex-col items-center justify-center p-4">
          <div className="text-center max-w-md">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-bw-orange/60" />
            <h1 className="text-2xl font-bold mb-4">Sign in to view your orders</h1>
            <p className="text-bw-black/70 mb-8">
              You need to be logged in to see your order history and track your deliveries.
            </p>
            <Button onClick={handleLogin} className="bg-bw-orange hover:bg-bw-orange-dark">
              Sign In / Register
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Orders - BiteyWitey</title>
        <meta name="description" content="View and track your BiteyWitey orders" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Header */}
          <section className="bg-bw-orange/10 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">My Orders</h1>
                <p className="text-bw-black/70">
                  View and manage your order history. Need help with an order? 
                  <a href="/contact" className="text-bw-orange hover:underline ml-1">Contact us</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Orders List */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              {orders.length === 0 ? (
                <div className="text-center py-16 max-w-md mx-auto">
                  <Package className="w-16 h-16 mx-auto mb-6 text-bw-orange/60" />
                  <h2 className="text-2xl font-bold mb-4">No orders yet</h2>
                  <p className="text-bw-black/70 mb-8">
                    You haven't placed any orders with us yet. Explore our menu and place your first order!
                  </p>
                  <Button onClick={() => navigate("/menu")} className="bg-bw-orange hover:bg-bw-orange-dark">
                    Browse Menu
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <OrderCard 
                      key={order.id} 
                      order={order} 
                      onReorder={() => handleReorder(order)}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

const OrderCard = ({ 
  order, 
  onReorder 
}: { 
  order: Order; 
  onReorder: () => void;
}) => {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    delivered: "bg-green-100 text-green-800",
  };

  return (
    <Card className="p-6 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold">Order #{order.id.slice(-6)}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status]}`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
          <p className="text-sm text-bw-black/70">Placed on {order.date}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-bw-black/70">Total</p>
          <p className="font-bold text-lg">{order.total}</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {order.items.map((item) => (
          <div key={`${item.id}-${item.name}`} className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-bw-black/70">Qty: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
        <Button 
          variant="outline" 
          size="sm"
          className="border-bw-orange text-bw-orange hover:bg-bw-orange hover:text-white"
          onClick={onReorder}
        >
          Reorder
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          asChild
        >
          <a href="/contact" className="inline-flex items-center">
            <Info className="w-4 h-4 mr-2" />
            Need Help?
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default MyOrders;
