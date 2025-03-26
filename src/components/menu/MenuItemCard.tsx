
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";
import { CartModal } from "./CartModal";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  servings: string;
  image: string;
  popular?: boolean;
};

interface MenuItemProps {
  item: MenuItem;
}

export const MenuItemCard = ({ item }: MenuItemProps) => {
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
