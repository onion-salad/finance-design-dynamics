import { Card, CardContent } from "@/components/ui/card";
import { Building2, DollarSign } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Achievement = () => {
  const realEstateProjects = [
    { title: "バリワークスフィアPJ", icon: <Building2 className="w-6 h-6" /> },
    { title: "LOFT HOTEL Brand", icon: <Building2 className="w-6 h-6" /> },
  ];

  const financeProjects = [
    { title: "和心ワラント5.5億引受", icon: <DollarSign className="w-6 h-6" /> },
    { title: "ライノジャパン調達6,000万", icon: <DollarSign className="w-6 h-6" /> },
    { title: "ODD No調達12億", icon: <DollarSign className="w-6 h-6" /> },
    { title: "21LADY新株式3億円引受", icon: <DollarSign className="w-6 h-6" /> },
    { title: "AI Smart Solutionsへの出資", icon: <DollarSign className="w-6 h-6" /> },
    { title: "WeGoM&AバイサイドFA", icon: <DollarSign className="w-6 h-6" /> },
    { title: "キルフェボンM&AバイサイドFA", icon: <DollarSign className="w-6 h-6" /> },
    { title: "Sakura Guild Games チームメンバー", icon: <DollarSign className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">実績一覧</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-primary">不動産・建築</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {realEstateProjects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm border-accent/20 shadow-lg hover:shadow-xl">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 bg-primary/5 rounded-full">{project.icon}</div>
                      <span className="text-lg font-medium">{project.title}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-primary">金融・アドバイザリー</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {financeProjects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm border-accent/20 shadow-lg hover:shadow-xl">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 bg-primary/5 rounded-full">{project.icon}</div>
                      <span className="text-lg font-medium">{project.title}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Achievement;