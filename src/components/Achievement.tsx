import { realEstateProjects, financeProjects } from "@/data/achievements";
import { motion } from "framer-motion";

const Achievement = () => {
  // 実績データを配列として結合
  const allAchievements = [
    ...realEstateProjects.map(p => p.title),
    ...financeProjects.map(p => p.title)
  ];

  // 5行に分割するために配列を分割
  const splitIntoFive = (array: string[]) => {
    const size = Math.ceil(array.length / 5);
    return [
      array.slice(0, size),
      array.slice(size, size * 2),
      array.slice(size * 2, size * 3),
      array.slice(size * 3, size * 4),
      array.slice(size * 4)
    ];
  };

  const rows = splitIntoFive(allAchievements);

  return (
    <section className="py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-futura font-bold mb-12 text-center tracking-wider text-white">Trusted by</h2>
        
        <div className="space-y-4">
          {rows.map((achievements, rowIndex) => (
            <div key={rowIndex} className="relative w-full overflow-hidden h-28">
              <div className="flex whitespace-nowrap">
                {/* First set of achievements */}
                <motion.div
                  className="flex gap-12 items-center"
                  initial={{ x: "-25%" }}
                  animate={{
                    x: ["-25%", "-125%"]
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                    delay: rowIndex * 2
                  }}
                >
                  {[...achievements, ...achievements].map((achievement, index) => (
                    <span
                      key={`first-${index}`}
                      className="text-6xl font-futura font-bold text-white/90 px-6 tracking-wider"
                    >
                      {achievement}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Gradient overlays for smooth fade in/out */}
              <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-primary to-transparent z-10" />
              <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-primary to-transparent z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;