import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  typewriter?: boolean;
}

const TypewriterText = ({ text, className = "", delay = 0, typewriter = false }: TypewriterTextProps) => {
  const controls = useAnimation();
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const animate = async () => {
      if (typewriter) {
        // 文字を1つずつ表示
        let currentText = "";
        for (let i = 0; i < text.length; i++) {
          currentText += text[i];
          setDisplayText(currentText);
          await new Promise(resolve => setTimeout(resolve, 150)); // 各文字の表示間隔
        }
        // アニメーション完了後にカーソルを非表示
        setShowCursor(false);
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
  }, [controls, delay, text, typewriter]);

  if (typewriter) {
    return (
      <span className={`inline-flex flex-nowrap whitespace-nowrap ${className}`}>
        {displayText}
        {showCursor && <span className="animate-blink">|</span>}
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-nowrap whitespace-nowrap ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          animate={controls}
          initial={{ opacity: 0, y: 20 }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default TypewriterText;