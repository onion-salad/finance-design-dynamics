import { motion } from "framer-motion";
import Team from "@/components/Team";
import Navigation from "@/components/Navigation";

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <h1 className="text-4xl font-bold text-center mb-12">チーム</h1>
          
          <Team />
        </motion.div>
      </main>
    </div>
  );
};

export default TeamPage;