import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

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
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">メンバー</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:scale-105 transition-transform bg-white border border-gray-200">
              <CardContent className="p-0">
                <div className="aspect-square relative w-full max-w-[200px] mx-auto">
                  <User className="w-full h-full p-8 text-gray-300" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-1 text-primary">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;