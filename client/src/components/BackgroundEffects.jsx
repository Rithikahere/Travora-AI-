import { motion } from "framer-motion";

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-orange-200/30 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-40 h-[460px] w-[460px] rounded-full bg-amber-200/30 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-100/30 blur-[120px]"
      />

    </div>
  );
}

export default BackgroundEffects;