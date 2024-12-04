import { realEstateProjects, financeProjects } from "@/data/achievements";
import { motion } from "framer-motion";

const Achievement = () => {
  const allCompanies = [
    ...realEstateProjects.map(p => p.title),
    ...financeProjects.map(p => p.title)
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Trusted by</h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap">
            {/* First set of companies */}
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: ["100%", "-100%"]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {allCompanies.map((company, index) => (
                <span
                  key={`first-${index}`}
                  className="text-xl font-medium text-primary/80 px-4"
                >
                  {company}
                </span>
              ))}
            </motion.div>

            {/* Second set for seamless loop */}
            <motion.div
              className="flex gap-8 items-center absolute left-full"
              animate={{
                x: ["100%", "-100%"]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {allCompanies.map((company, index) => (
                <span
                  key={`second-${index}`}
                  className="text-xl font-medium text-primary/80 px-4"
                >
                  {company}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade in/out */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-secondary to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Achievement;