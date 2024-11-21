import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Achievement from "@/components/Achievement";
import TeamGrid from "@/components/TeamGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <Achievement />
      <TeamGrid />
      <Footer />
    </div>
  );
};

export default Index;