import { realEstateProjects, financeProjects } from "@/data/achievements";
import AchievementCarousel from "./AchievementCarousel";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">実績一覧</h2>
        
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-primary">不動産・建築</h3>
          <AchievementCarousel projects={realEstateProjects} />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 text-primary">金融・アドバイザリー</h3>
          <AchievementCarousel projects={financeProjects} />
        </div>
      </div>
    </section>
  );
};

export default Achievement;