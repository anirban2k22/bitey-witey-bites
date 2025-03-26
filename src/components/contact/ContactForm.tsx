
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
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

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", link: "https://www.instagram.com/biteywitey.club/" },
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", link: "https://www.facebook.com/" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", link: "https://x.com/BiteyWitey" },
  ];

  return (
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
  );
};

export default ContactForm;
