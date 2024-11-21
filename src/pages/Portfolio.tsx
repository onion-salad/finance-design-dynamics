import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const investments = [
    {
      name: "TechVenture株式会社",
      industry: "AI・機械学習",
      description: "次世代AIプラットフォームの開発"
    },
    {
      name: "GreenEnergy株式会社",
      industry: "再生可能エネルギー",
      description: "持続可能なエネルギーソリューション"
    },
    {
      name: "HealthTech株式会社",
      industry: "医療テクノロジー",
      description: "革新的な医療機器の開発"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              投資先ポートフォリオ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私たちは、革新的なアイデアと強い経営チームを持つ
              企業への投資を通じて、未来を創造します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investments.map((investment, index) => (
              <motion.div
                key={investment.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all p-6"
              >
                <div className="text-sm text-primary font-semibold mb-2">
                  {investment.industry}
                </div>
                <h3 className="text-xl font-bold mb-2">{investment.name}</h3>
                <p className="text-gray-600 mb-4">{investment.description}</p>
                <Button variant="outline" className="group">
                  詳しく見る
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;