import { motion, useScroll, useTransform } from "framer-motion";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <section className="relative h-[calc(100vh-64px)] flex items-center justify-center translate-y-[-10%] text-center px-4">
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <picture>
          <source
            srcSet="/placeholder.svg"
            type="image/webp"
          />
          <img
            src="/placeholder.svg"
            alt="Concentric株式会社のオフィスビル"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="text-white max-w-4xl mx-auto space-y-2"
      >
        <h1 className="sr-only">Concentric株式会社 - 革新的な金融ソリューション</h1>
        <TypewriterText
          text="金融に情熱を"
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          delay={0.5}
          typewriter={true}
        />
        <TypewriterText
          text="人と向き合い、その先へ。"
          className="text-xl md:text-2xl mb-2 font-light"
          delay={2}
        />
        <TypewriterText
          text="Designing the future finance."
          className="text-lg md:text-xl text-gray-200 font-light"
          delay={2}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;