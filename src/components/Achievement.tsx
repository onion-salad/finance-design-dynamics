import Marquee from "react-fast-marquee";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-futura font-bold mb-12 text-center tracking-wider text-white">Trusted by</h2>
        
        {/* First row */}
        <div className="mb-4">
          <Marquee
            speed={50}
            gradient={false}
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
        <div>
          <Marquee
            speed={50}
            gradient={false}
            className="h-28"
          >
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              test
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              banana
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              apple
            </span>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Achievement;