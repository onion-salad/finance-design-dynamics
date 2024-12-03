import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Team = () => {
  const members = [
    {
      name: "吉村 英毅",
      position: "代表パートナー",
      image: "/lovable-uploads/f04427b0-9b1b-4962-a5ee-17eae4757551.png",
      description: `東京大学経済学部卒業。2003年大学在学中に株式会社Valcomを創業。2007年株式会社エアトリを共同創業し代表取締役社長に就任(現在は退任)。2016年株式会社エアトリを東証マザーズに、2017年東証1部に上場。エアトリグループ会社の株式会社まぐまぐ、株式会社ハイブリッドテクノロジーズ、株式会社インバウンドプラットフォームをそれぞれジャスダック、マザーズ、グロースマーケットに上場。\n\n2017年株式会社ミダスキャピタルを創業。同年ミダスキャピタル第1号案件として株式会社BuySell Technologiesを買収。後に取締役会長に就任し、2019年東証マザーズ上場。2022年ミダス企業群の株式会社AViCが東証グロース上場。2023年ミダス企業群の株式会社GENDAが東証グロース上場。`
    },
    {
      name: "佐藤 充洋",
      position: "取締役",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
      description: "M&A・投資における豊富な経験と専門知識を持つ。多くの企業の成長戦略を支援。"
    },
    {
      name: "石川 章由",
      position: "執行役員",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      description: "財務・経営戦略のスペシャリスト。企業価値向上のための戦略立案を得意とする。"
    },
    {
      name: "山田 健一",
      position: "シニアパートナー",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      description: "20年以上にわたる投資銀行での経験を活かし、複雑なM&A案件を多数手掛ける。"
    },
    {
      name: "田中 美咲",
      position: "マネージングディレクター",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      description: "クロスボーダーM&Aのエキスパート。アジア地域における豊富なネットワークを持つ。"
    },
    {
      name: "鈴木 大輔",
      position: "ディレクター",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      description: "テクノロジー業界に特化したM&Aアドバイザリーを専門とし、数々のテック企業の成長を支援。"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-secondary/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 relative">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm font-medium text-primary/80 mb-2">
                            {member.position}
                          </p>
                          <h3 className="text-3xl lg:text-4xl font-bold text-primary">
                            {member.name}
                          </h3>
                        </div>
                        <div className="prose prose-gray max-w-none">
                          {member.description.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="text-muted-foreground leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;