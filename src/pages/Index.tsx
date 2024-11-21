import Navigation from "@/components/Navigation";
import Achievement from "@/components/Achievement";
import Team from "@/components/Team";
import { ChartBar, Building2, Users, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative h-screen flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
          </div>
          <div className="animate-fade-in text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              金融に情熱を
            </h1>
            <p className="text-xl md:text-2xl mb-4">人と向き合い、その先へ。</p>
            <p className="text-lg md:text-xl text-gray-200">
              Designing the future finance.
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  金融という無形の価値に
                  <br />
                  デザインという存在の意味を！
                </h2>
                <p className="text-lg text-gray-600">
                  私たちは、金融の世界に革新的なデザインと新しい価値を創造します。
                  従来の枠組みを超えて、より多くの人々にアクセシブルで意味のある金融サービスを提供することを目指しています。
                </p>
                <div className="flex items-center gap-4">
                  <Button className="group">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-gray-600">革新的な金融ソリューション</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg translate-y-8">
                    <h3 className="text-xl font-bold mb-2">Design</h3>
                    <p className="text-gray-600">洗練されたデザイン思考</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary/5 p-6 rounded-lg translate-y-4">
                    <h3 className="text-xl font-bold mb-2">Trust</h3>
                    <p className="text-gray-600">確かな信頼関係の構築</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg translate-y-12">
                    <h3 className="text-xl font-bold mb-2">Growth</h3>
                    <p className="text-gray-600">持続的な成長の実現</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <ChartBar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">M&A・業務提携</h3>
                <p className="text-gray-400">
                  戦略的なM&Aと業務提携で、企業の成長をサポートします。
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">ファイナンス</h3>
                <p className="text-gray-400">
                  最適な資金調達方法を提案し、企業の財務戦略を支援します。
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">アドバイザリー</h3>
                <p className="text-gray-400">
                  専門知識と経験を活かし、的確なアドバイスを提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <Achievement />

        <Team />

        <footer className="bg-primary text-white py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Growth Capital</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <p>〒100-0005 東京都千代田区丸の内1-1-1</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <p>03-1234-5678</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <p>info@growth-capital.co.jp</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">サービス</h3>
              <ul className="space-y-2">
                <li>M&A・業務提携</li>
                <li>ファイナンス</li>
                <li>アドバイザリー</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">企業情報</h3>
              <ul className="space-y-2">
                <li>会社概要</li>
                <li>チーム</li>
                <li>ニュース</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <ul className="space-y-2">
                <li>お問い合わせフォーム</li>
                <li>採用情報</li>
                <li>プライバシーポリシー</li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2024 Growth Capital. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;