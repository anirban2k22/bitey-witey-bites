
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit to send the email
      const response = await fetch("https://formsubmit.co/biteywitey.official@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Contact Form Submission from BiteyWitey Website",
        }),
      });
      
      if (response.ok) {
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
          message: "",
        });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again or contact us directly.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "For orders and inquiries",
      action: "+91 6291569512 | +91 6386342758",
      link: "tel:+916291569512",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "For quotes and bulk orders",
      action: "anirbandas1616@gmail.com",
      link: "mailto:anirbandas1616@gmail.com",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      description: "When we're serving",
      action: "Mon-Sun: 10AM - 9PM",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", link: "https://www.instagram.com/biteywitey.club/" },
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", link: "https://www.facebook.com/" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", link: "https://x.com/BiteyWitey" },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-bw-orange/10 text-bw-orange-dark text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-bw-black/70">
            Contact us for bulk orders, catering inquiries, or any questions you might have.
            We're here to make your event delicious!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} info={info} />
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-bw-cream rounded-3xl overflow-hidden shadow-smooth animate-fade-in">
          <div className="grid md:grid-cols-5">
            {/* Map or Image */}
            <div className="md:col-span-2 h-full">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=80" 
                alt="BiteyWitey Restaurant"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quick Order Form */}
            <div className="md:col-span-3 p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Request</h3>
              <p className="text-bw-black/70 mb-6">
                Leave your details and we'll get back to you as soon as possible to discuss your requirements.
              </p>
              
              <form className="space-y-4" onSubmit={handleSubmit} action="https://formsubmit.co/biteywitey.official@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New enquiry from BiteyWitey website!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-bw-black/10 focus:outline-none focus:ring-2 focus:ring-bw-orange/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-bw-black/10 focus:outline-none focus:ring-2 focus:ring-bw-orange/50"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-bw-black/10 focus:outline-none focus:ring-2 focus:ring-bw-orange/50"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-bw-black/10 focus:outline-none focus:ring-2 focus:ring-bw-orange/50 min-h-[100px]"
                    placeholder="Tell us about your event or request"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-bw-orange hover:bg-bw-orange-dark text-white rounded-lg"
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
                    "Send Request"
                  )}
                </Button>
              </form>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <p className="text-sm text-bw-black/70 mb-3">Follow us on social media:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-bw-black/5 hover:bg-bw-orange/10 hover:text-bw-orange transition-colors"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ info }: { info: any }) => {
  return (
    <Card className="p-6 border-none shadow-crisp hover-lift group">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-bw-orange/10 rounded-full mb-4 group-hover:bg-bw-orange/20 transition-colors">
          <div className="text-bw-orange">{info.icon}</div>
        </div>
        <h3 className="font-bold text-lg mb-1">{info.title}</h3>
        <p className="text-sm text-bw-black/70 mb-3">{info.description}</p>
        {info.link ? (
          <a 
            href={info.link}
            className="text-bw-orange font-medium hover:underline"
            target={info.link.startsWith('http') ? "_blank" : undefined}
            rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            {info.action}
          </a>
        ) : (
          <span className="text-bw-black font-medium">{info.action}</span>
        )}
      </div>
    </Card>
  );
};

export default Contact;
