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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "w-full sm:w-[90%]",
                // スマホ表示時の左右配置
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              )}
            >
              <Card 
                className="group overflow-hidden hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border-accent/10"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative w-full bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                    <User className="w-full h-full p-8 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 text-center bg-white">
                    <h3 className="text-lg font-bold mb-1 text-primary group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.position}</p>
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