import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypewriterText = ({ text, className = "", delay = 0 }: TypewriterTextProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0 }
      });
      
      await controls.start(i => ({
        width: "100%",
        transition: {
          delay: delay + i * 0.05,
          duration: 0.1
        }
      }));
    };

    animate();
  }, [controls, delay]);

  return (
    <div className={`flex flex-wrap justify-center gap-1 ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          animate={controls}
          initial={{ width: 0, opacity: 0 }}
          className="inline-block overflow-hidden whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TypewriterText;