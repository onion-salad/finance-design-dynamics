import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCard3DProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard3D = ({ icon: Icon, title, description, index }: ServiceCard3DProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
      className="relative w-full sm:w-[350px] h-[400px] cursor-pointer"
    >
      <AnimatePresence>
        {!isFlipped ? (
          <motion.div
            key="front"
            style={{
              rotateX,
              rotateY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center gap-6
                     transform-gpu transition-all duration-700 ease-out
                     hover:shadow-2xl border border-gray-100"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-primary text-white rounded-2xl shadow-xl p-8
                     flex flex-col items-center justify-center gap-6
                     transform-gpu"
          >
            <h3 className="text-3xl font-bold text-center">{title}</h3>
            <p className="text-white/90 text-center text-lg leading-relaxed">{description}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="mt-4 px-6 py-2 bg-white text-primary rounded-full
                       hover:bg-primary-foreground transition-colors"
            >
              戻る
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard3D;