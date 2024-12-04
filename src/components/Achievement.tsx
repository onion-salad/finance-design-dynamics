import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-futura font-bold mb-12 text-center tracking-wider text-white">Trusted by</h2>
        
        {/* First row */}
        <div className="relative w-full overflow-hidden h-28 mb-4">
          <motion.div
            className="flex gap-12 items-center"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              バリワークスフィアPJ
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              LOFT HOTEL Brand
            </span>
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider whitespace-nowrap">
              バリワークスフィアPJ
            </span>
          </motion.div>
        </div>

        {/* Second row */}
        <div className="relative w-full overflow-hidden h-28">
          <motion.div
            className="flex gap-12 items-center"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;