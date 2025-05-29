import { motion } from "framer-motion";

const TopButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#FF4D00] text-white rounded-full shadow-lg hover:bg-[#FF4D00]/90 transition-all duration-300 flex items-center justify-center text-2xl"
      aria-label="맨 위로 이동"
    >
      ↑
    </motion.button>
  );
};

export default TopButton;
