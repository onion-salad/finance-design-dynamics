import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const TeamGrid = () => {
  const members = [
    {
      name: "出川貴史",
      position: "代表取締役"
    },
    {
      name: "佐藤充洋",
      position: "取締役"
    },
    {
      name: "石川章由",
      position: "執行役員"
    },
    {
      name: "藤井隆徳",
      position: "執行役員"
    },
    {
      name: "澤田",
      position: "アドバイザー"
    },
    {
      name: "鄭秀和",
      position: "アドバイザー"
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
                <CardContent className="p-6">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2 text-primary">
                      {member.name}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {member.position}
                    </p>
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

export default TeamGrid;