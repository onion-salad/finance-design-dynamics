import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Team = () => {
  const members = [
    {
      name: "出川貴史",
      position: "代表取締役",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
    },
    {
      name: "佐藤充洋",
      position: "取締役",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
    },
    {
      name: "石川章由",
      position: "執行役員",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      name: "藤井隆徳",
      position: "執行役員",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
    },
    {
      name: "澤田",
      position: "アドバイザー",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80"
    },
    {
      name: "鄭秀和",
      position: "アドバイザー",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
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
                  "w-[90%] md:w-full",
                  "md:hover:scale-105"
                )}
              >
                <CardContent className="p-0">
                  <div className={cn(
                    "relative w-full overflow-hidden",
                    "md:aspect-square",
                    "h-32 md:h-auto",
                  )}>
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* スマホ時の暗い背景オーバーレイ */}
                    <div className={cn(
                      "absolute inset-0",
                      "md:hidden",
                      "bg-gradient-to-r from-primary/90 to-primary/80"
                    )} />
                    
                    {/* スマホ時のコンテンツ配置 */}
                    <div className={cn(
                      "relative h-full flex flex-col justify-end px-6 pb-4",
                      "md:hidden",
                      index % 2 === 0 ? "items-start" : "items-end"
                    )}>
                      <h3 className="text-2xl font-bold mb-1 text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/80">{member.position}</p>
                    </div>
                    
                    {/* PC時の情報表示部分 */}
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 p-4 text-center bg-white/90 backdrop-blur-sm",
                      "hidden md:block",
                      "transform transition-transform duration-300 group-hover:translate-y-0",
                      "translate-y-full group-hover:translate-y-0"
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