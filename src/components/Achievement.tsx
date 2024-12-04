import { realEstateProjects, financeProjects } from "@/data/achievements";
import { motion } from "framer-motion";

const Achievement = () => {
  // 会社名のみを抽出して配列を作成
  const allCompanies = [
    ...realEstateProjects.map(p => p.title.split(/[（(]/)[0].trim()),
    ...financeProjects.map(p => p.title.split(/[（(]/)[0].trim())
  ];

  // 3行に分割するために配列を分割
  const splitIntoThree = (array: string[]) => {
    const size = Math.ceil(array.length / 3);
    return [
      array.slice(0, size),
      array.slice(size, size * 2),
      array.slice(size * 2)
    ];
  };

  const rows = splitIntoThree(allCompanies);

  return (
    <section className="py-32 px-4 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-futura font-bold mb-20 text-center tracking-wider text-white">Trusted by</h2>
        
        <div className="space-y-8">
          {rows.map((companies, rowIndex) => (
            <div key={rowIndex} className="relative w-full overflow-hidden h-24">
              <div className="flex whitespace-nowrap">
                {/* First set of companies */}
                <motion.div
                  className="flex gap-6 items-center"
                  animate={{
                    x: ["100%", "-100%"]
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                    delay: rowIndex * 2
                  }}
                >
                  {companies.map((company, index) => (
                    <span
                      key={`first-${index}`}
                      className="text-3xl font-futura font-bold text-white/90 px-4 tracking-wider"
                    >
                      {company}
                    </span>
                  ))}
                </motion.div>

                {/* Second set for seamless loop */}
                <motion.div
                  className="flex gap-6 items-center absolute left-full"
                  animate={{
                    x: ["100%", "-100%"]
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                    delay: rowIndex * 2
                  }}
                >
                  {companies.map((company, index) => (
                    <span
                      key={`second-${index}`}
                      className="text-3xl font-futura font-bold text-white/90 px-4 tracking-wider"
                    >
                      {company}
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