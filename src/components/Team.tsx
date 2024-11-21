import { Card, CardContent } from "@/components/ui/card";
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
        <div className="grid grid-cols-1 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0,
                y: 50
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.8,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card 
                className={cn(
                  "group overflow-hidden transition-all duration-300",
                  "bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border-accent/10",
                  "hover:scale-[1.02]"
                )}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {member.name}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {member.position}
                      </p>
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