
import { SpecialCombosCarousel } from "./SpecialCombosCarousel";
import { MenuSection } from "./MenuSection";

const Menu = () => {
  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <SpecialCombosCarousel />
        <MenuSection />
      </div>
    </section>
  );
};

export default Menu;
