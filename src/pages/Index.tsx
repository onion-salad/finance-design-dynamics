import Navigation from "@/components/Navigation";
import Achievement from "@/components/Achievement";
import Team from "@/components/Team";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        
        {/* ビジョンセクション */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                    金融という無形の価値に
                    <br />
                    デザインという存在の意味を
                  </h2>
                  <div className="w-20 h-1 bg-primary"></div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  私たちは、金融の世界に革新的なデザインと新しい価値を創造します。
                  従来の枠組みを超えて、より多くの人々にアクセシブルで意味のある金融サービスを提供することを目指しています。
                </p>
                <div className="flex items-center gap-4">
                  <Button size="lg" className="group text-lg">
                    詳しく見る
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Innovation",
                    description: "革新的な金融ソリューション",
                    className: "sm:translate-y-0 md:translate-y-0"
                  },
                  {
                    title: "Design",
                    description: "洗練されたデザイン思考",
                    className: "sm:translate-x-8 md:translate-y-8"
                  },
                  {
                    title: "Trust",
                    description: "確かな信頼関係の構築",
                    className: "sm:-translate-x-8 md:translate-y-4"
                  },
                  {
                    title: "Growth",
                    description: "持続的な成長の実現",
                    className: "sm:translate-x-0 md:translate-y-12"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    className={cn(
                      "bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all",
                      item.className,
                      index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto",
                      "w-full sm:w-[90%]"
                    )}
                  >
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <Achievement />

        <Team />
      </main>
    </div>
  );
};

export default Index;
