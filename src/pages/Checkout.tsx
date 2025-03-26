
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  ShoppingCart, CreditCard, User, ChevronRight, 
  Mail, Phone, Lock, Truck, Calendar, AlertCircle 
} from "lucide-react";

// Define authentication interfaces
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

// Cart item interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Veg Burger Combo",
      price: 99,
      quantity: 10,
      image: "/lovable-uploads/75a42142-5113-4cd3-9ac0-b4dc4560461a.png"
    }
  ]);
  const [orderForm, setOrderForm] = useState({
    deliveryDate: "",
    deliveryTime: "",
    specialInstructions: "",
    paymentMethod: "online",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate order total
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 2000 ? 0 : 50;
  const total = subtotal + deliveryFee;

  // Handle login form change
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle signup form change
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle order form change
  const handleOrderFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle item quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    // Ensure minimum quantity is 10
    if (newQuantity < 10) newQuantity = 10;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login API call
    setTimeout(() => {
      // Demo user object (in a real app, this would come from your API)
      const demoUser = {
        id: "user-123",
        name: "Demo User",
        email: loginForm.email,
        phone: "+91 9876543210"
      };
      
      setUser(demoUser);
      setIsLoggedIn(true);
      setIsSubmitting(false);
      
      toast({
        title: "Login successful!",
        description: `Welcome back, ${demoUser.name}!`,
        duration: 3000,
      });
    }, 1000);
  };

  // Handle signup submission
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate password match
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
        duration: 3000,
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate signup API call
    setTimeout(() => {
      // Create user object
      const newUser = {
        id: "user-" + Date.now(),
        name: signupForm.name,
        email: signupForm.email,
        phone: signupForm.phone
      };
      
      setUser(newUser);
      setIsLoggedIn(true);
      setIsSubmitting(false);
      
      toast({
        title: "Account created!",
        description: `Welcome, ${newUser.name}!`,
        duration: 3000,
      });
    }, 1000);
  };

  // Handle order submission
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate order (ensure minimum quantity of 10 per item)
    const invalidItems = cartItems.filter(item => item.quantity < 10);
    if (invalidItems.length > 0) {
      toast({
        title: "Minimum quantity not met",
        description: "Each item must have at least 10 units.",
        variant: "destructive",
        duration: 3000,
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "We'll confirm your order shortly.",
        duration: 5000,
      });
      
      // Reset cart and order form (in a real app, you'd redirect to an order confirmation page)
      setCartItems([]);
      setOrderForm({
        deliveryDate: "",
        deliveryTime: "",
        specialInstructions: "",
        paymentMethod: "online",
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  // Log out
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
      duration: 3000,
    });
  };

  // Get tomorrow's date (for min date in date picker)
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Get date 30 days from now (for max date in date picker)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <>
      <Helmet>
        <title>Checkout - BiteyWitey | Complete Your Order</title>
        <meta name="description" content="Complete your food order for your events and gatherings." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 bg-gray-50">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Summary (Right Side) */}
              <div className="lg:col-span-1 lg:order-2">
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" /> 
                    Order Summary
                  </h2>
                  
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                      <p className="text-gray-500">Your cart is empty</p>
                      <Button 
                        className="mt-4 bg-bw-orange hover:bg-bw-orange-dark"
                        asChild
                      >
                        <a href="/menu">Browse Menu</a>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="divide-y">
                        {cartItems.map((item) => (
                          <div key={item.id} className="py-4 flex gap-3">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium">{item.name}</h3>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-bw-orange font-medium">₹{item.price}</span>
                                <div className="flex items-center border rounded-lg">
                                  <button 
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="px-2 py-1 hover:bg-gray-100"
                                    disabled={item.quantity <= 10}
                                  >
                                    -
                                  </button>
                                  <span className="px-2 min-w-[40px] text-center">{item.quantity}</span>
                                  <button 
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="px-2 py-1 hover:bg-gray-100"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <p className="text-sm text-right text-gray-600 mt-1">
                                Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-4 mt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>₹{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Fee</span>
                          <span>{deliveryFee > 0 ? `₹${deliveryFee}` : 'FREE'}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Total</span>
                          <span>₹{total.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-sm text-gray-600 bg-orange-50 p-3 rounded-lg flex items-start">
                        <AlertCircle className="h-5 w-5 text-bw-orange mr-2 flex-shrink-0 mt-0.5" />
                        <p>Minimum order quantity is 10 items per product for all bulk orders.</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Checkout Form (Left Side) */}
              <div className="lg:col-span-2 lg:order-1">
                {!isLoggedIn ? (
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b">
                      <h2 className="text-xl font-bold mb-4">Account</h2>
                      <p className="text-gray-600">Please log in or create an account to continue with your order</p>
                    </div>
                    
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <div className="px-6 pt-4">
                        <TabsList className="grid grid-cols-2 w-full">
                          <TabsTrigger value="login">Login</TabsTrigger>
                          <TabsTrigger value="signup">Create Account</TabsTrigger>
                        </TabsList>
                      </div>
                      
                      <TabsContent value="login" className="p-6 pt-4">
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                              Email Address
                            </label>
                            <div className="relative">
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={loginForm.email}
                                onChange={handleLoginChange}
                                className="pl-10"
                                placeholder="your@email.com"
                                required
                              />
                              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1">
                              Password
                            </label>
                            <div className="relative">
                              <Input
                                id="password"
                                name="password"
                                type="password"
                                value={loginForm.password}
                                onChange={handleLoginChange}
                                className="pl-10"
                                placeholder="••••••••"
                                required
                              />
                              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full bg-bw-orange hover:bg-bw-orange-dark"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Logging in..." : "Login"}
                          </Button>
                        </form>
                      </TabsContent>
                      
                      <TabsContent value="signup" className="p-6 pt-4">
                        <form onSubmit={handleSignup} className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                              Full Name
                            </label>
                            <div className="relative">
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                value={signupForm.name}
                                onChange={handleSignupChange}
                                className="pl-10"
                                placeholder="John Doe"
                                required
                              />
                              <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="signup-email" className="block text-sm font-medium mb-1">
                              Email Address
                            </label>
                            <div className="relative">
                              <Input
                                id="signup-email"
                                name="email"
                                type="email"
                                value={signupForm.email}
                                onChange={handleSignupChange}
                                className="pl-10"
                                placeholder="your@email.com"
                                required
                              />
                              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                              Phone Number
                            </label>
                            <div className="relative">
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={signupForm.phone}
                                onChange={handleSignupChange}
                                className="pl-10"
                                placeholder="+91 9876543210"
                                required
                              />
                              <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="signup-password" className="block text-sm font-medium mb-1">
                                Password
                              </label>
                              <div className="relative">
                                <Input
                                  id="signup-password"
                                  name="password"
                                  type="password"
                                  value={signupForm.password}
                                  onChange={handleSignupChange}
                                  className="pl-10"
                                  placeholder="••••••••"
                                  required
                                />
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                              </div>
                            </div>
                            
                            <div>
                              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                                Confirm Password
                              </label>
                              <div className="relative">
                                <Input
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  type="password"
                                  value={signupForm.confirmPassword}
                                  onChange={handleSignupChange}
                                  className="pl-10"
                                  placeholder="••••••••"
                                  required
                                />
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full bg-bw-orange hover:bg-bw-orange-dark"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Creating Account..." : "Create Account"}
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* User Info */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Account Information</h2>
                        <Button
                          variant="ghost"
                          className="text-sm text-gray-500 hover:text-bw-orange"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-bw-orange/10 rounded-full p-3">
                          <User className="h-6 w-6 text-bw-orange" />
                        </div>
                        <div>
                          <h3 className="font-medium">{user?.name}</h3>
                          <p className="text-gray-600 text-sm">{user?.email}</p>
                          <p className="text-gray-600 text-sm">{user?.phone}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Delivery Info */}
                    <form onSubmit={handlePlaceOrder} className="space-y-6">
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-bold mb-4 flex items-center">
                          <Truck className="h-5 w-5 mr-2" />
                          Delivery Information
                        </h2>
                        
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="deliveryDate" className="block text-sm font-medium mb-1">
                                Delivery Date
                              </label>
                              <div className="relative">
                                <Input
                                  id="deliveryDate"
                                  name="deliveryDate"
                                  type="date"
                                  min={getTomorrowDate()}
                                  max={getMaxDate()}
                                  value={orderForm.deliveryDate}
                                  onChange={handleOrderFormChange}
                                  className="pl-10"
                                  required
                                />
                                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                              </div>
                              <p className="text-xs text-gray-500 mt-1">
                                Delivery available from tomorrow up to 30 days in advance
                              </p>
                            </div>
                            
                            <div>
                              <label htmlFor="deliveryTime" className="block text-sm font-medium mb-1">
                                Preferred Time
                              </label>
                              <select
                                id="deliveryTime"
                                name="deliveryTime"
                                value={orderForm.deliveryTime}
                                onChange={handleOrderFormChange as any}
                                className="w-full rounded-md border border-gray-300 px-3 py-2"
                                required
                              >
                                <option value="">Select a time slot</option>
                                <option value="morning">Morning (9AM - 12PM)</option>
                                <option value="afternoon">Afternoon (12PM - 3PM)</option>
                                <option value="evening">Evening (3PM - 6PM)</option>
                                <option value="night">Night (6PM - 9PM)</option>
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="specialInstructions" className="block text-sm font-medium mb-1">
                              Special Instructions (Optional)
                            </label>
                            <Textarea
                              id="specialInstructions"
                              name="specialInstructions"
                              value={orderForm.specialInstructions}
                              onChange={handleOrderFormChange}
                              placeholder="Any specific instructions for your order or delivery..."
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Payment Method */}
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-bold mb-4 flex items-center">
                          <CreditCard className="h-5 w-5 mr-2" />
                          Payment Method
                        </h2>
                        
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="online"
                              name="paymentMethod"
                              value="online"
                              checked={orderForm.paymentMethod === "online"}
                              onChange={handleOrderFormChange}
                              className="h-4 w-4 text-bw-orange focus:ring-bw-orange"
                            />
                            <label htmlFor="online" className="font-medium">
                              Pay Online (Credit/Debit Card, UPI)
                            </label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="cod"
                              name="paymentMethod"
                              value="cod"
                              checked={orderForm.paymentMethod === "cod"}
                              onChange={handleOrderFormChange}
                              className="h-4 w-4 text-bw-orange focus:ring-bw-orange"
                            />
                            <label htmlFor="cod" className="font-medium">
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Place Order Button */}
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h2 className="text-xl font-bold">Total Amount</h2>
                            <p className="text-bw-orange text-2xl font-bold">₹{total.toLocaleString()}</p>
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="bg-bw-orange hover:bg-bw-orange-dark flex items-center gap-2 px-8"
                            disabled={isSubmitting || cartItems.length === 0}
                          >
                            {isSubmitting ? (
                              "Processing..."
                            ) : (
                              <>
                                Place Order
                                <ChevronRight className="h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </div>
                        
                        <p className="text-gray-500 text-sm">
                          By placing your order, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
