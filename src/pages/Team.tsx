import { motion } from "framer-motion";
import Team from "@/components/Team";
import Navigation from "@/components/Navigation";
import { MapPin } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const TeamPage = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 35.68462371826172,
    lng: 139.76121520996094
  };

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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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