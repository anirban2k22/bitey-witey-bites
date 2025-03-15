
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Calendar, Truck } from "lucide-react";

const BulkOrders = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-10 h-10 text-bw-orange" />,
      title: "Quality Guaranteed",
      description: "Fresh ingredients and careful preparation for each order",
    },
    {
      icon: <Clock className="w-10 h-10 text-bw-orange" />,
      title: "Timely Delivery",
      description: "We value your time and ensure punctual service",
    },
    {
      icon: <Calendar className="w-10 h-10 text-bw-orange" />,
      title: "Easy Scheduling",
      description: "Book in advance for your upcoming events",
    },
    {
      icon: <Truck className="w-10 h-10 text-bw-orange" />,
      title: "Free Delivery",
      description: "Complimentary delivery for orders over ₹4000",
    },
  ];

  return (
    <section className="section-padding bg-bw-cream relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bw-orange/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-bw-orange/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-left">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
              Bulk Orders & Catering
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for Your Next
              <span className="text-gradient block">Event or Gathering</span>
            </h2>
            <p className="text-bw-black/70 mb-6">
              Whether you're planning an office lunch, birthday party, or corporate event,
              our bulk ordering options make feeding a crowd easy and delicious. We specialize
              in creating memorable food experiences for gatherings of all sizes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-bw-black/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-bw-orange hover:bg-bw-orange-dark text-white rounded-full px-6 shadow-lg hover:shadow-xl hover-lift"
                asChild
              >
                <a href="tel:+916291569512">
                  Call to Order
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-bw-black/20 bg-white text-bw-black hover:bg-bw-orange/10 hover:text-bw-orange hover:border-bw-orange/20 px-6 shadow-sm hover-lift"
                asChild
              >
                <a href="mailto:biteywitey.official@gmail.com">
                  Email Us
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Event catering"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              
              {/* Info box */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl">Custom Catering</h3>
                  <div className="text-bw-orange font-bold">From ₹5000</div>
                </div>
                <p className="text-sm text-bw-black/70 mb-4">
                  Custom packages tailored to your event needs with additional sides, desserts, and beverages.
                </p>
                <Button 
                  className="w-full bg-bw-orange hover:bg-bw-orange-dark text-white"
                  asChild
                >
                  <a href="tel:+916291569512">
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bw-orange/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-bw-orange/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;
