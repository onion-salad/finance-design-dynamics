import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-futura font-bold mb-12 text-center tracking-wider text-white">Trusted by</h2>
        
        <div className="relative w-full overflow-hidden h-28">
          <div className="flex whitespace-nowrap">
            {/* First element */}
            <motion.div
              className="flex gap-12 items-center"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: -10 // より大きなオーバーラップを作成
              }}
            >
              <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider">
                test
              </span>
            </motion.div>

            {/* Second element */}
            <motion.div
              className="flex gap-12 items-center absolute left-[98%]"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: -10
              }}
            >
              <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider">
                test
              </span>
            </motion.div>

            {/* Third element for smoother transition */}
            <motion.div
              className="flex gap-12 items-center absolute left-[196%]"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: -10
              }}
            >
              <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider">
                test
              </span>
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade in/out */}
          <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-primary to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Achievement;