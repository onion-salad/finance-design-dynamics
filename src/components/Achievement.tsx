import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <section className="py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-futura font-bold mb-12 text-center tracking-wider text-white">Trusted by</h2>
        
        <div className="relative w-full overflow-hidden h-28">
          {/* コンテナに固定幅を設定 */}
          <div className="flex whitespace-nowrap w-[200vw]">
            <motion.div
              className="flex gap-12 items-center absolute"
              initial={{ x: "100vw" }}  // 画面幅分右から開始
              animate={{ x: "-100vw" }}  // 画面幅分左に移動
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
      </div>
    </section>
  );
};

export default Achievement;