import { ChartBar, Building2, Users } from "lucide-react";
import ServiceCard3D from "./ServiceCard3D";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: ChartBar,
      title: "M&A・業務提携",
      description: "戦略的なM&Aと業務提携で、企業の成長をサポートします。",
    },
    {
      icon: Building2,
      title: "ファイナンス",
      description: "最適な資金調達方法を提案し、企業の財務戦略を支援します。",
    },
    {
      icon: Users,
      title: "アドバイザリー",
      description: "専門知識と経験を活かし、的確なアドバイスを提供します。",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            豊富な経験と専門知識を活かし、お客様のニーズに合わせた最適なソリューションを提供します。
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard3D
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;