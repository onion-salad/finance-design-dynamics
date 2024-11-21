import Navigation from "@/components/Navigation";
import Achievement from "@/components/Achievement";
import Team from "@/components/Team";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const Index = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: 35.68462371826172,
    lng: 139.76121520996094
  };

  const menuItems = [
    { title: "ホーム", path: "/" },
    { title: "サービス", path: "/services" },
    { title: "投資先", path: "/portfolio" },
    { title: "チーム", path: "/team" },
    { title: "ニュース", path: "/news" },
    { title: "お問い合わせ", path: "/contact" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        
        {/* ビジョンセクション */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                    金融という無形の価値に
                    <br />
                    デザインという存在の意味を
                  </h2>
                  <div className="w-20 h-1 bg-primary"></div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  私たちは、金融の世界に革新的なデザインと新しい価値を創造します。
                  従来の枠組みを超えて、より多くの人々にアクセシブルで意味のある金融サービスを提供することを目指しています。
                </p>
                <div className="flex items-center gap-4">
                  <Button size="lg" className="group text-lg">
                    詳しく見る
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Innovation",
                    description: "革新的な金融ソリューション",
                    className: "sm:translate-y-0 md:translate-y-0"
                  },
                  {
                    title: "Design",
                    description: "洗練されたデザイン思考",
                    className: "sm:translate-x-8 md:translate-y-8"
                  },
                  {
                    title: "Trust",
                    description: "確かな信頼関係の構築",
                    className: "sm:-translate-x-8 md:translate-y-4"
                  },
                  {
                    title: "Growth",
                    description: "持続的な成長の実現",
                    className: "sm:translate-x-0 md:translate-y-12"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    className={cn(
                      "bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all",
                      item.className,
                      index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto",
                      "w-full sm:w-[90%]"
                    )}
                  >
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <Achievement />

        <Team />

        <footer className="bg-primary text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <LoadScript googleMapsApiKey="AIzaSyCqtgd2QSzOYRXsKUtO4glUxScnNy-inQY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={16}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Concentric株式会社</h3>
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
                <h3 className="text-xl font-bold mb-4">メニュー</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className="hover:text-gray-300 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center">
              <p>&copy; 2024 Concentric株式会社. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
