import Marquee from "react-fast-marquee";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary to-primary/90 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-white/70 text-lg font-medium mb-4 block">Our Track Record</span>
          <h2 className="text-6xl font-futura font-bold mb-4 text-center tracking-wider text-white">
            Trusted by
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto"></div>
        </div>
        
        {/* First row */}
        <div className="mb-2">
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            className="h-20"
          >
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              バリワークスフィアPJ
            </span>
            <span className="text-5xl font-futura font-bold text-white/90 px-8 tracking-wider whitespace-nowrap hover:text-white transition-colors">
              LOFT HOTEL Brand
            </span>
          </Marquee>
        </div>

        {/* Second row */}
        <div className="mb-2">
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            className="h-20"
            direction="right"
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
        <div>
          <Marquee
            speed={80}
            gradient={true}
            gradientColor="#333333"
            gradientWidth={100}
            className="h-20"
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