import { Card, CardContent } from "@/components/ui/card";
import { Building2, DollarSign } from "lucide-react";

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
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">実績一覧</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-primary">不動産・建築</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realEstateProjects.map((project, index) => (
              <Card key={index} className="hover:bg-accent/10 transition-colors bg-secondary/50 backdrop-blur-sm border-accent/20">
                <CardContent className="flex items-center gap-4 p-6">
                  {project.icon}
                  <span className="text-lg">{project.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-primary">金融・アドバイザリー</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {financeProjects.map((project, index) => (
              <Card key={index} className="hover:bg-accent/10 transition-colors bg-secondary/50 backdrop-blur-sm border-accent/20">
                <CardContent className="flex items-center gap-4 p-6">
                  {project.icon}
                  <span className="text-lg">{project.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;