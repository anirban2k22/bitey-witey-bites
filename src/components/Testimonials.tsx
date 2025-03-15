
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "BiteyWitey's catering service was the highlight of our corporate event. The burger combos were a hit among our team members. The quality and presentation exceeded our expectations!",
    rating: 5,
    location: "Bangalore, India"
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Birthday Party Host",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "I ordered sandwich platters for my son's birthday party, and they were absolutely delicious. Fresh ingredients, prompt delivery, and great customer service. Will definitely order again!",
    rating: 5,
    location: "Bangalore, India"
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Office Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Our team looks forward to our monthly lunch catered by BiteyWitey. Their variety of options ensures everyone finds something they love. The ordering process is seamless, and the food is consistently excellent.",
    rating: 4,
    location: "Bangalore, India"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    // Reset animation state after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-rotate testimonials
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [currentIndex, isAnimating]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-bw-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bw-orange rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bw-orange rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 text-bw-orange-light text-sm font-medium">
            Customer Love
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/70">
            Don't just take our word for it. Here's what our satisfied customers have to say about their BiteyWitey experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial carousel */}
          <div className="relative overflow-hidden">
            <div 
              className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            >
              <div className="bg-bw-black-light/30 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-white/10">
                <Quote className="w-12 h-12 text-bw-orange opacity-50 mb-6" />
                
                <p className="text-xl md:text-2xl font-medium mb-8 text-white/90">
                  "{currentTestimonial.quote}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{currentTestimonial.name}</h3>
                      <p className="text-white/60 text-sm">{currentTestimonial.role}</p>
                      <p className="text-white/60 text-xs">{currentTestimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-bw-orange fill-bw-orange' : 'text-white/30'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none">
            <button 
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-bw-orange w-8" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
