
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-bw-orange" />,
      title: "Community-Focused",
      description: "We believe in bringing people together through great food."
    },
    {
      icon: <Award className="h-8 w-8 text-bw-orange" />,
      title: "Quality Ingredients",
      description: "We never compromise on the quality of our ingredients."
    },
    {
      icon: <Clock className="h-8 w-8 text-bw-orange" />,
      title: "Reliable Service",
      description: "We understand the importance of timeliness and dependability."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-bw-cream py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
                Our Story
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">BiteyWitey</span>
              </h1>
              <p className="text-lg text-bw-black/70 mb-8">
                We're more than just a food service - we're your partner in creating memorable 
                experiences through delicious food for groups, events, and gatherings.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">How We Started</h2>
                <p className="text-bw-black/70 mb-4">
                  BiteyWitey was born from a simple idea: everyone deserves great food at their events 
                  without the hassle. Founded in 2018, we began as a small catering service for office 
                  lunches and quickly expanded as word spread about our delicious offerings.
                </p>
                <p className="text-bw-black/70 mb-4">
                  Our founder, Chef Alex, noticed that many catering services focused on quantity 
                  over quality. We decided to change that by creating bulk food options that don't 
                  compromise on taste or presentation.
                </p>
                <p className="text-bw-black/70 mb-8">
                  Today, we're proud to serve businesses, schools, and private events throughout 
                  the city, bringing our signature burger and sandwich combos to gatherings of all sizes.
                </p>
                <Button 
                  className="bg-bw-orange hover:bg-bw-orange-dark text-white rounded-full px-6 shadow-lg hover:shadow-xl hover-lift"
                  asChild
                >
                  <a href="/contact">Get in Touch</a>
                </Button>
              </div>
              <div className="relative order-1 md:order-2 animate-fade-in-right">
                <img 
                  src="https://images.unsplash.com/photo-1525184438-255c5b9382e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="BiteyWitey team" 
                  className="rounded-3xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-bw-orange/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-bw-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Drives Us
              </h2>
              <p className="text-bw-black/70">
                Our core values shape everything we do, from food preparation to customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-smooth hover-lift text-center">
                  <div className="bg-bw-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-bw-black/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in-left">
                <img 
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="BiteyWitey burgers" 
                  className="rounded-3xl shadow-xl"
                />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-bw-orange/10 rounded-full blur-xl -z-10"></div>
              </div>
              <div className="animate-fade-in-right">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
                <div className="space-y-4">
                  {[
                    "Customizable menu options for any dietary needs",
                    "Bulk ordering with the quality of individual preparation",
                    "Punctual delivery and professional service",
                    "Environmentally-friendly packaging",
                    "Special discounts for regular customers and large orders",
                    "Freshly prepared on the day of your event"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-bw-orange shrink-0 mt-1 mr-3" />
                      <p className="text-bw-black/70">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button 
                    className="bg-bw-orange hover:bg-bw-orange-dark text-white rounded-full px-6 shadow-lg hover:shadow-xl hover-lift"
                    asChild
                  >
                    <a href="/menu">Explore Our Menu</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
