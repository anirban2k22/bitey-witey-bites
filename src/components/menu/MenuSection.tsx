
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuItemCard } from "./MenuItemCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

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

export const MenuSection = () => {
  return (
    <>
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
              <MenuItemCard key={burger.id} item={burger} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="indian" className="mt-2 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indianCombos.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sandwiches" className="mt-2 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sandwichCombos.map((sandwich) => (
              <MenuItemCard key={sandwich.id} item={sandwich} />
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
    </>
  );
};
