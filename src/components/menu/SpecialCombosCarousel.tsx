
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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
];

export const SpecialCombosCarousel = () => {
  return (
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
  );
};
