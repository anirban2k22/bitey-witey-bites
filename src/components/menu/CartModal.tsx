
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  servings?: string;
  image: string;
  popular?: boolean;
};

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem;
}

export const CartModal = ({ isOpen, onClose, item }: CartModalProps) => {
  const [quantity, setQuantity] = useState(10);
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 10) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleCheckout = () => {
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
          <label className="text-sm font-medium mb-2 block">Quantity (Minimum 10)</label>
          <div className="flex items-center">
            <button 
              onClick={handleDecrement}
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
