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
        // 全ての文字を一旦非表示に
        await controls.start({
          opacity: 0,
          transition: { duration: 0 }
        });
        
        // 1文字ずつフェードイン（速度を上げる）
        for (let i = 0; i < text.length; i++) {
          await controls.start(index => ({
            opacity: index <= i ? 1 : 0,
            transition: {
              duration: 0.08, // 0.15から0.08に短縮
              delay: index === i ? 0.05 : 0 // 0.1から0.05に短縮
            }
          }));
        }
      } else {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.4, // 0.8から0.4に短縮
            ease: "easeOut"
          }
        });
      }
    };

    animate();
  }, [controls, delay, text.length, typewriter]);

  return (
    <span className={`inline-flex flex-nowrap whitespace-nowrap ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          animate={controls}
          initial={typewriter ? { opacity: 0 } : { opacity: 0, y: 20 }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default TypewriterText;