
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { name: "Bulk Orders", path: "/menu" },
        { name: "Catering", path: "/menu" },
        { name: "Corporate Events", path: "/contact" },
        { name: "Private Parties", path: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", path: "/about" },
        { name: "Terms & Conditions", path: "/about" },
        { name: "Privacy Policy", path: "/about" },
        { name: "Careers", path: "/about" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", link: "https://www.instagram.com/biteywitey.club/" },
    { icon: <Facebook className="h-5 w-5" />, name: "LinkedIn", link: "https://www.linkedin.com/company/biteywitey/?viewAsMember=true" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", link: "https://x.com/BiteyWitey" },
  ];

  return (
    <footer className="bg-bw-black text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/431b80be-36d0-4357-9bec-f7e54e3429c1.png" 
                  alt="BiteyWitey Logo" 
                  className="h-10 w-10"
                />
              </div>
              <span className="text-2xl font-display font-bold">
                <span className="text-white">Bitey</span>
                <span className="text-bw-orange">Witey</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Your go-to snack partner for events and gatherings. Delicious burgers and sandwiches made with quality ingredients and lots of love.
            </p>
            
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-bw-orange/80 hover:text-white transition-colors"
                  aria-label={`Visit our ${social.name} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-5">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-white/70 hover:text-bw-orange flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} BiteyWitey. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="tel:+916291569512" className="text-white/70 hover:text-bw-orange text-sm">
              +91 6291 569 512
            </a>
            <span className="text-white/30">|</span>
            <a href="mailto:biteywitey.official@gmail.com" className="text-white/70 hover:text-bw-orange text-sm">
              biteywitey.official@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
