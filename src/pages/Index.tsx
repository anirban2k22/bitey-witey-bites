
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BulkOrders from "../components/BulkOrders";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingMenu from "../components/TrendingMenu";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrendingMenu />
        <Menu />
        <BulkOrders />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
