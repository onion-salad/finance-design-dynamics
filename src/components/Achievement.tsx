import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-futura font-bold mb-12 text-center tracking-wider text-white">Trusted by</h2>
        
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
            <span className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider">
              test
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;