
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Clock, Award, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About BiteyWitey - Your Go-To Snack Partner</title>
        <meta name="description" content="Learn about BiteyWitey, our mission, values, and the story behind your favorite burger and sandwich shop." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-bw-orange/10 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  About <span className="text-gradient">BiteyWitey</span>
                </h1>
                <p className="text-lg md:text-xl text-bw-black/80 mb-8">
                  We're more than just a snack shop - we're your partners in creating memorable food experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-bw-black/80 mb-4">
                    BiteyWitey was born from a simple idea: everyone deserves access to high-quality, delicious food for their gatherings and events without the hassle and high costs.
                  </p>
                  <p className="text-bw-black/80 mb-4">
                    What started as a small catering service for college events quickly evolved into the go-to bulk order specialist in the community. Our founder's passion for creating the perfect burger and sandwich combinations led to our signature combos that customers have come to love.
                  </p>
                  <p className="text-bw-black/80">
                    Today, we proudly serve hundreds of events each month, from corporate functions to family celebrations, maintaining the same dedication to quality and service that defined us from day one.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 bg-bw-orange/20 w-full h-full rounded-2xl"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="BiteyWitey Story" 
                      className="rounded-2xl shadow-lg w-full h-auto object-cover relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-bw-cream py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose BiteyWitey</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
                  <div className="bg-bw-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Award className="text-bw-orange h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality Ingredients</h3>
                  <p className="text-bw-black/70">
                    We source fresh, high-quality ingredients to ensure every bite is delicious.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
                  <div className="bg-bw-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Users className="text-bw-orange h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Bulk Order Experts</h3>
                  <p className="text-bw-black/70">
                    Specialized in large orders, we handle the logistics so you can focus on your event.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
                  <div className="bg-bw-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Clock className="text-bw-orange h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
                  <p className="text-bw-black/70">
                    We understand the importance of punctuality for your events and gatherings.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
                  <div className="bg-bw-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <MapPin className="text-bw-orange h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Convenient Locations</h3>
                  <p className="text-bw-black/70">
                    With multiple service points, we can cater to events across the city.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-bw-black text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Make Your Event Special?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Let us handle the food while you focus on creating memorable moments with your guests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-bw-orange hover:bg-bw-orange-dark text-white px-8 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="/menu" 
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors"
                >
                  View Our Menu
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
