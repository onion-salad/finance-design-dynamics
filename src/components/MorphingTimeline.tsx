import { motion } from "framer-motion";
import { useState } from "react";
import { ChartBar, Building2, Users } from "lucide-react";
import TypewriterText from "./TypewriterText";

const MorphingTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      icon: ChartBar,
      title: "M&A・業務提携",
      description: "戦略的なM&Aと業務提携で、企業の成長をサポートします。",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Building2,
      title: "ファイナンス",
      description: "最適な資金調達方法を提案し、企業の財務戦略を支援します。",
      gradient: "from-blue-500 to-teal-500",
    },
    {
      icon: Users,
      title: "アドバイザリー",
      description: "専門知識と経験を活かし、的確なアドバイスを提供します。",
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(0,0,0,0.1))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: activeIndex === index ? 1.05 : 1,
                y: activeIndex === index ? -10 : 0
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ 
                duration: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              onClick={() => setActiveIndex(index)}
              className={`
                relative p-8 rounded-2xl cursor-pointer
                bg-gradient-to-br ${item.gradient}
                transform transition-all duration-500 ease-out
                hover:shadow-2xl
              `}
            >
              <div className="absolute inset-0 bg-white opacity-95 rounded-2xl transition-opacity hover:opacity-90" />
              
              <div className="relative space-y-4">
                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 360 : 0
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto"
                >
                  <item.icon className="w-full h-full text-primary" />
                </motion.div>
                
                <TypewriterText
                  text={item.title}
                  className="text-2xl font-bold text-gray-900"
                  typewriter={activeIndex === index}
                />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MorphingTimeline;