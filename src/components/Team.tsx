import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Team = () => {
  const members = [
    {
      name: "出川貴史",
      position: "代表取締役",
      image: "/placeholder.svg"
    },
    {
      name: "佐藤充洋",
      position: "取締役",
      image: "/placeholder.svg"
    },
    {
      name: "石川章由",
      position: "執行役員",
      image: "/placeholder.svg"
    },
    {
      name: "藤井隆徳",
      position: "執行役員",
      image: "/placeholder.svg"
    },
    {
      name: "澤田",
      position: "アドバイザー",
      image: "/placeholder.svg"
    },
    {
      name: "鄭秀和",
      position: "アドバイザー",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary via-white to-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">メンバー</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                width: "100%"
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.8,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true }}
              className={cn(
                "w-full md:w-full",
                "flex",
                index % 2 === 0 ? "justify-start" : "justify-end"
              )}
            >
              <Card 
                className={cn(
                  "group overflow-hidden transition-all duration-300",
                  "bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border-accent/10",
                  "w-[90%] md:w-full", // スマホ時は90%幅、PC時は100%幅
                  "md:hover:scale-105" // スケールアップはPCのみ
                )}
              >
                <CardContent className="p-0">
                  <div className={cn(
                    "relative w-full overflow-hidden",
                    "md:aspect-square", // PC時は正方形
                    "h-32 md:h-auto", // スマホ時は固定高さ
                  )}>
                    {/* 背景のプレースホルダー画像 */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5",
                      "md:block", // PC時のみ表示
                    )}>
                      <User className="w-full h-full p-8 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* スマホ時の暗い背景オーバーレイ */}
                    <div className={cn(
                      "absolute inset-0",
                      "md:hidden", // PC時は非表示
                      "bg-gradient-to-r from-primary/90 to-primary/80" // 暗いグラデーション
                    )} />
                    
                    {/* スマホ時のコンテンツ配置 */}
                    <div className={cn(
                      "relative h-full flex flex-col justify-end px-6 pb-4", // justify-endで下寄せに
                      "md:hidden", // PC時は非表示
                      index % 2 === 0 ? "items-start" : "items-end" // 左右で文字の配置を変更
                    )}>
                      <h3 className="text-2xl font-bold mb-1 text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/80">{member.position}</p>
                    </div>
                    
                    {/* PC時の情報表示部分 */}
                    <div className={cn(
                      "p-4 text-center bg-white",
                      "hidden md:block" // スマホ時は非表示
                    )}>
                      <h3 className="text-lg font-bold mb-1 text-primary group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">{member.position}</p>
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