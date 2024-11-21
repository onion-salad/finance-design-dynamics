import { motion } from "framer-motion";
import Team from "@/components/Team";
import Navigation from "@/components/Navigation";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const TeamPage = () => {
  useEffect(() => {
    // Google Maps の JavaScript API を動的に読み込み
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDaLxHArVRGVwbGX2bfXivhsrB6RqDjapk&callback=console.debug&libraries=maps,marker&v=beta";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <h1 className="text-4xl font-bold text-center mb-12">チーム</h1>
          
          <Team />

          <section className="mt-24 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">所在地</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: "400px" }}>
              <gmp-map 
                center="35.6812362,139.7671248" 
                zoom="17" 
                map-id="DEMO_MAP_ID"
                style={{ width: "100%", height: "100%" }}
              >
                <gmp-advanced-marker 
                  position="35.6812362,139.7671248" 
                  title="当社の所在地"
                ></gmp-advanced-marker>
              </gmp-map>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5" />
                <p>〒100-0005 東京都千代田区丸の内1-1-1</p>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default TeamPage;