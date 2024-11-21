import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Achievement from "@/components/Achievement";
import TeamGrid from "@/components/TeamGrid";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <Achievement />
      <TeamGrid />
    </div>
  );
};

export default Index;