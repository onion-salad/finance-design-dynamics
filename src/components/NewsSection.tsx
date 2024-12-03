import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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

const NewsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">最新のニュース</h2>
          <p className="text-muted-foreground">
            Concentricの最新情報をお届けします
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <Button variant="ghost" className="group">
                  続きを読む
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/news">
            <Button variant="outline" size="lg" className="group">
              ニュース一覧へ
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;