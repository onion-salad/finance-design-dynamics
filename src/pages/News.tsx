import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "2024.03.15",
      title: "新規ファンド設立のお知らせ",
      category: "プレスリリース",
      excerpt: "次世代テクノロジー企業への投資を目的とした新規ファンドを設立しました。"
    },
    {
      date: "2024.03.01",
      title: "年次投資報告書を公開",
      category: "IR情報",
      excerpt: "2023年度の投資実績と2024年度の投資戦略をまとめた報告書を公開しました。"
    },
    {
      date: "2024.02.15",
      title: "新規オフィス開設のお知らせ",
      category: "お知らせ",
      excerpt: "関西地域でのサービス強化のため、大阪オフィスを開設いたしました。"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ニュース
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最新のニュースやプレスリリース、IR情報をお届けします。
            </p>
          </motion.div>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-6">{item.excerpt}</p>
                <Button variant="outline" className="group">
                  続きを読む
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default News;