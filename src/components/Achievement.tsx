import Marquee from "react-fast-marquee";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <span className="text-white/80 font-futura tracking-wider mb-2 block">Our Track Record</span>
          <h2 className="text-5xl font-futura font-bold mb-4 tracking-wider text-white">Trusted by</h2>
          <div className="w-24 h-0.5 bg-white/30 mx-auto mb-12"></div>
        </div>
        
        {/* First row */}
        <div className="mb-2">
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            className="h-24"
          >
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              バリワークスフィアPJ
            </span>
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              LOFT HOTEL Brand
            </span>
          </Marquee>
        </div>

        {/* Second row - Reverse direction */}
        <div className="mb-2">
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            direction="right"
            className="h-24"
          >
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              和心ワラント5.5億引受
            </span>
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              ライノジャパン調達6,000万
            </span>
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              ODD No調達12億
            </span>
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              21LADY新株式3億円引受
            </span>
          </Marquee>
        </div>

        {/* Third row */}
        <div className="mb-2">
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            className="h-24"
          >
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              AI Smart Solutionsへの出資
            </span>
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              WeGoM&AバイサイドFA
            </span>
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              キルフェボンM&AバイサイドFA
            </span>
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              Sakura Guild Games チームメンバー
            </span>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Achievement;