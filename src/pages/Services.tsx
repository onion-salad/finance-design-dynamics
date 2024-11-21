import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "M&Aアドバイザリー",
      description: "企業価値の最大化を目指し、戦略的なM&Aをサポートします。",
      icon: "💼"
    },
    {
      title: "資金調達支援",
      description: "最適な資金調達方法を提案し、成長をサポートします。",
      icon: "💰"
    },
    {
      title: "経営コンサルティング",
      description: "経営戦略の立案から実行まで、包括的なサポートを提供します。",
      icon: "📊"
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
              革新的な金融サービス
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最先端の金融テクノロジーと専門知識を組み合わせ、
              お客様のビジネスの成長をサポートします。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
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

export default Services;