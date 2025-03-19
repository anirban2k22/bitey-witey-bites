
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // FormSubmit will handle the actual email sending
    // We're simulating the submission response here
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact BiteyWitey - Your Go-To Snack Partner</title>
        <meta name="description" content="Get in touch with BiteyWitey for bulk orders, catering services, or any questions about our menu." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Contact Hero */}
          <section className="bg-bw-orange/10 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Get In <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-lg md:text-xl text-bw-black/80 mb-8">
                  Have a question or ready to place an order? We're here to help!
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information + Form */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-bw-orange/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-bw-orange" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Phone</h3>
                        <p className="text-bw-black/70 mb-1">Main: +91 6291569512</p>
                        <p className="text-bw-black/70">Bulk Orders: +91 6386342758</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-bw-orange/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-bw-orange" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Email</h3>
                        <p className="text-bw-black/70 mb-1">General: biteywitey.official@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-bw-orange/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-bw-orange" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Address</h3>
                        <p className="text-bw-black/70">123 Burger Street, Foodville,</p>
                        <p className="text-bw-black/70">Delhi, India, 110001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-bw-orange/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-bw-orange" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Hours</h3>
                        <p className="text-bw-black/70 mb-1">Monday - Friday: 10:00 AM - 9:00 PM</p>
                        <p className="text-bw-black/70">Saturday - Sunday: 11:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Order */}
                  <div className="bg-bw-black text-white p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Need to place a quick order?</h3>
                    <p className="text-white/80 mb-4">
                      For immediate assistance or to place a same-day order, please call our direct line:
                    </p>
                    <a 
                      href="tel:+916291569512" 
                      className="bg-bw-orange hover:bg-bw-orange-dark text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call to Order
                    </a>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  
                  <form 
                    action="https://formsubmit.co/biteywitey.official@gmail.com" 
                    method="POST"
                    className="space-y-5"
                  >
                    <input type="hidden" name="_next" value={window.location.href} />
                    <input type="hidden" name="_subject" value="New BiteyWitey Website Inquiry" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Bulk Order Inquiry"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Let us know how we can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-bw-orange hover:bg-bw-orange-dark text-white w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Location Map */}
          <section className="py-12 bg-bw-cream">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-sm h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5534991010613!2d77.20720071509353!3d28.55231358244995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8955b362a708ed5!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1667827323266!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BiteyWitey Location"
                ></iframe>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
              
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <FaqItem 
                  question="How far in advance should I place a bulk order?"
                  answer="We recommend placing bulk orders at least 24-48 hours in advance to ensure availability and timely preparation. For very large orders (50+ people), please give us 3-5 days notice."
                />
                
                <FaqItem 
                  question="Do you offer vegetarian options?"
                  answer="Yes! We have a variety of vegetarian options including our popular Veg Burger and Mediterranean Veggie Sandwich. Most of our sides are also vegetarian-friendly."
                />
                
                <FaqItem 
                  question="What is your delivery area?"
                  answer="We currently deliver within a 15-km radius of our location in Delhi. For orders outside this area, please contact us directly to discuss arrangements."
                />
                
                <FaqItem 
                  question="Is there a minimum order for delivery?"
                  answer="Yes, we require a minimum order of ₹500 for delivery. Orders over ₹2000 qualify for free delivery within our standard delivery area."
                />
                
                <FaqItem 
                  question="Can you accommodate dietary restrictions?"
                  answer="We can accommodate various dietary needs with advance notice. Please inform us of any allergies or special requirements when placing your order."
                />
                
                <FaqItem 
                  question="Do you offer catering services?"
                  answer="Yes! Beyond bulk orders, we offer full-service catering with setup, serving staff, and cleanup for larger events. Contact us for details and pricing."
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
      <h3 className="text-lg font-bold mb-3 flex items-start gap-2">
        <Check className="h-5 w-5 text-bw-orange flex-shrink-0 mt-1" />
        <span>{question}</span>
      </h3>
      <p className="text-bw-black/70 pl-7">{answer}</p>
    </div>
  );
};

export default Contact;
