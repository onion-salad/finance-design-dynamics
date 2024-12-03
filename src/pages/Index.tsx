import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Achievement from "@/components/Achievement";
import Navigation from "@/components/Navigation";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <Achievement />
    </div>
  );
};

export default Index;