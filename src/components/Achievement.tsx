import Marquee from "react-fast-marquee";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-futura font-bold mb-12 text-center tracking-wider text-white">Trusted by</h2>
        
        {/* First row */}
        <div className="mb-4">
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            className="h-28"
          >
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              バリワークスフィアPJ
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              LOFT HOTEL Brand
            </span>
          </Marquee>
        </div>

        {/* Second row */}
        <div className="mb-4">
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            className="h-28"
          >
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              和心ワラント5.5億引受
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              ライノジャパン調達6,000万
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              ODD No調達12億
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              21LADY新株式3億円引受
            </span>
          </Marquee>
        </div>

        {/* Third row */}
        <div className="mb-4">
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            className="h-28"
          >
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              AI Smart Solutionsへの出資
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              WeGoM&AバイサイドFA
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              キルフェボンM&AバイサイドFA
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              Sakura Guild Games チームメンバー
            </span>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Achievement;