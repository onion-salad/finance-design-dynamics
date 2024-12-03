import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Achievement from "@/components/Achievement";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <Achievement />
    </div>
  );
};

export default Index;