import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  typewriter?: boolean;
}

const TypewriterText = ({ text, className = "", delay = 0, typewriter = false }: TypewriterTextProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (typewriter) {
        await controls.start({
          opacity: 1,
          transition: { duration: 0 }
        });
        
        await controls.start(i => ({
          width: "auto",
          transition: {
            delay: delay + i * 0.05,
            duration: 0.1
          }
        }));
      } else {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.8,
            ease: "easeOut"
          }
        });
      }
    };

    animate();
  }, [controls, delay, typewriter]);

  return (
    <span className={`inline-flex flex-nowrap whitespace-nowrap ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          animate={controls}
          initial={typewriter ? { width: 0, opacity: 0 } : { opacity: 0, y: 20 }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default TypewriterText;