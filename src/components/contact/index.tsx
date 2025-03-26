
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { getContactInfo } from "./contactData";

const Contact = () => {
  const contactInfo = getContactInfo();

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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
