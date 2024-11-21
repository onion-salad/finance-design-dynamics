import Navigation from "@/components/Navigation";
import Achievement from "@/components/Achievement";
import Team from "@/components/Team";
import { ChartBar, Building2, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center px-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">金融に情熱を</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4">人と向き合い、その先へ。</p>
            <p className="text-lg md:text-xl text-gray-400">
              Designing the future finance.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              金融という無形の価値に
              <br />
              デザインという存在の意味を！
            </h2>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <ChartBar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">M&A・業務提携</h3>
                <p className="text-gray-400">
                  戦略的なM&Aと業務提携で、企業の成長をサポートします。
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">ファイナンス</h3>
                <p className="text-gray-400">
                  最適な資金調達方法を提案し、企業の財務戦略を支援します。
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">アドバイザリー</h3>
                <p className="text-gray-400">
                  専門知識と経験を活かし、的確なアドバイスを提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Section */}
        <Achievement />

        {/* Team Section */}
        <Team />
      </main>
    </div>
  );
};

export default Index;