import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Footer = () => {
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
            <h3 className="text-xl font-bold mb-4 font-futura">Concentric株式会社</h3>
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
            <h3 className="text-xl font-bold mb-4 font-futura">メニュー</h3>
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
  );
};

export default Footer;