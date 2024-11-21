import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCard3DProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard3D = ({ icon: Icon, title, description, index }: ServiceCard3DProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMove = (event: React.TouchEvent | React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    let clientX, clientY;
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
      className="relative w-full sm:w-[350px] h-[400px]"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onTouchMove={handleMove}
        onTouchEnd={handleLeave}
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
    </motion.div>
  );
};

export default ServiceCard3D;