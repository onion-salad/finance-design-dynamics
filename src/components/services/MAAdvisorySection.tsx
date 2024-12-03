import { motion } from "framer-motion";
import { Target, Compass, Lightbulb, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const maServices = [
  {
    icon: Target,
    title: "Vision",
    subtitle: "共に未来を描き、繋がりで価値を創る",
    description: "私たちは、人と企業、地域と世界を繋ぐ「同心円」のような存在となり、持続可能な成長を実現します。変革を通じて新しい可能性を創出し、社会全体の発展に貢献します。"
  },
  {
    icon: Compass,
    title: "Mission",
    subtitle: "中核の価値を見つけ出し、信頼で輪を広げる",
    description: "企業の価値の本質を理解し、最適なソリューションを提供します。M&A仲介や資本提携を通じて、関係者全員にとっての最大価値を追求し、人と企業の「核」を繋ぎ、信頼の輪を広げる架け橋となります。"
  },
  {
    icon: Lightbulb,
    title: "Value",
    subtitle: "私たちが大切にする3つの価値観",
    points: [
      {
        title: "中心にある「信頼」",
        description: "すべての活動の基盤は信頼です。透明性を持ったプロセスと誠実な姿勢で、全てのステークホルダーに安心感を提供します。"
      },
      {
        title: "広がり続ける「共創」",
        description: "個々の強みを活かし、連携によってシナジーを創出します。私たちは共に考え、共に挑戦し、成果を共有します。"
      },
      {
        title: "未来志向の「進化」",
        description: "変化を恐れず、挑戦を楽しむ姿勢を持っています。新しいアイデアや技術を取り入れ、常に次の可能性を模索します。"
      }
    ]
  }
];

const MAAdvisorySection = () => {
  return (
    <div className="grid gap-16">
      {maServices.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 font-futura">{item.title}</h2>
              <p className="text-xl font-medium text-primary mb-4 font-futura">{item.subtitle}</p>
              {item.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.points && (
                <div className="space-y-6 mt-8">
                  {item.points.map((point, pointIndex) => (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: pointIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <h3 className="text-lg font-semibold">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={`bg-secondary rounded-2xl p-8 aspect-square flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
            <item.icon className="w-32 h-32 text-primary/20" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MAAdvisorySection;