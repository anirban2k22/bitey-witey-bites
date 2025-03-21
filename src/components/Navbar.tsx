
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/90 backdrop-blur-lg shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <div className="relative">
            <img 
              src="/lovable-uploads/431b80be-36d0-4357-9bec-f7e54e3429c1.png" 
              alt="BiteyWitey Logo" 
              className="h-12 w-12 transition-transform hover:scale-110" 
            />
          </div>
          <span className="text-xl sm:text-2xl font-display font-bold">
            <span className="text-bw-black">Bitey</span>
            <span className="text-bw-orange">Witey</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-medium button-transition ${
                isActive(link.path)
                  ? "text-white bg-bw-orange"
                  : "text-bw-black hover:text-bw-orange hover:bg-bw-orange/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Call & Email Button */}
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            className="rounded-full px-4 border-bw-orange/40 text-bw-orange hover:bg-bw-orange/10"
            asChild
          >
            <a href="mailto:biteywitey.official@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              <span className="font-medium">Email Us</span>
            </a>
          </Button>
          <Button
            variant="default"
            className="bg-bw-orange hover:bg-bw-orange-dark text-white rounded-full px-4 flex items-center gap-2"
            asChild
          >
            <a href="tel:+916291569512">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Order Now</span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-bw-orange/10 button-transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-bw-black" />
          ) : (
            <Menu className="h-6 w-6 text-bw-black" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 rounded-lg font-medium button-transition ${
                isActive(link.path)
                  ? "text-white bg-bw-orange"
                  : "text-bw-black hover:text-bw-orange hover:bg-bw-orange/10"
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex flex-col gap-2 mt-2">
            <Button
              variant="outline"
              className="justify-center rounded-lg border-bw-orange/40 text-bw-orange hover:bg-bw-orange/10"
              asChild
            >
              <a href="mailto:biteywitey.official@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                <span className="font-medium">Email Us</span>
              </a>
            </Button>
            <Button
              variant="default"
              className="bg-bw-orange hover:bg-bw-orange-dark text-white rounded-lg flex items-center gap-2 justify-center"
              asChild
            >
              <a href="tel:+916291569512">
                <Phone className="h-4 w-4" />
                <span className="font-medium">Order Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
