
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "For orders and inquiries",
      action: "+91 6291569512",
      link: "tel:+916291569512",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "For quotes and bulk orders",
      action: "biteywitey.official@gmail.com",
      link: "mailto:biteywitey.official@gmail.com",
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
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", link: "https://instagram.com" },
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", link: "https://facebook.com" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", link: "https://twitter.com" },
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
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border border-bw-black/10 focus:outline-none focus:ring-2 focus:ring-bw-orange/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 rounded-lg border border-bw-black/10 focus:outline-none focus:ring-2 focus:ring-bw-orange/50"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border border-bw-black/10 focus:outline-none focus:ring-2 focus:ring-bw-orange/50"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg border border-bw-black/10 focus:outline-none focus:ring-2 focus:ring-bw-orange/50 min-h-[100px]"
                    placeholder="Tell us about your event or request"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-bw-orange hover:bg-bw-orange-dark text-white rounded-lg"
                >
                  Send Request
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
