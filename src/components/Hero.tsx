
import { ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-bw-cream pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-bw-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-bw-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-10 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-lg animate-fade-in-left md:order-1 order-2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
              Your Go-To Snack Partner
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Awesome Food for{" "}
              <span className="text-gradient">Awesome Gatherings</span>
            </h1>
            <p className="text-lg text-bw-black/80 mb-8">
              Specializing in delicious bulk orders for events, parties, and gatherings. 
              Making your moments memorable with mouthwatering burger and sandwich combos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-bw-orange hover:bg-bw-orange-dark text-white rounded-full px-6 py-6 shadow-lg hover:shadow-xl hover-lift"
                asChild
              >
                <Link to="/menu">
                  Explore Our Menu
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-bw-black/20 bg-white text-bw-black hover:bg-bw-orange/10 hover:text-bw-orange hover:border-bw-orange/20 px-6 py-6 shadow-sm hover-lift"
                asChild
              >
                <a href="tel:+123456789">
                  Order Now
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative md:order-2 order-1 animate-fade-in-right">
            <div className="w-full max-w-md mx-auto relative">
              <div className="aspect-square rounded-full bg-bw-orange/10 absolute inset-0 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Delicious burger"
                className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl animate-float"
              />
              
              {/* Floating badges */}
              <div className="absolute -right-4 top-20 glass-card p-3 shadow-lg animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-bw-orange flex items-center justify-center">
                    <span className="text-white font-bold">5★</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-bw-black/70">Customer rating</p>
                    <p className="text-sm font-bold">Excellent</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-20 glass-card p-3 shadow-lg animate-float" style={{animationDelay: "1.5s"}}>
                <div className="text-center">
                  <p className="text-sm font-bold">Bulk Orders</p>
                  <p className="text-xs font-medium text-bw-black/70">Perfect for gatherings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium text-bw-black/60 mb-2">Scroll for more</span>
        <ArrowDown className="h-5 w-5 text-bw-orange" />
      </div>
    </div>
  );
};

export default Hero;
