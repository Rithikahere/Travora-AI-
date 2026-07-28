import { motion } from "framer-motion";
import { Globe2, Plane, Sparkles } from "lucide-react";

export default function FloatingGlobe() {
  return (
    <motion.div
      className="relative mx-auto mt-10 flex h-72 w-72 items-center justify-center"
      animate={{
        y: [0, -12, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Glow */}
      <div className="absolute h-52 w-52 rounded-full bg-orange-400/20 blur-3xl" />

      {/* Outer Ring */}
      <motion.div
        className="absolute h-60 w-60 rounded-full border border-orange-300/40"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Second Ring */}
      <motion.div
        className="absolute h-72 w-72 rounded-full border border-orange-200/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Plane Orbit */}
      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="-translate-y-32">
          <Plane
            size={20}
            className="rotate-90 text-orange-500 drop-shadow-lg"
          />
        </div>
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute top-6 right-10"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Sparkles size={18} className="text-yellow-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-8"
        animate={{
          opacity: [1, 0.2, 1],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Sparkles size={14} className="text-orange-300" />
      </motion.div>

      {/* Glass Globe */}
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
        className="
          relative
          flex
          h-40
          w-40
          items-center
          justify-center
          rounded-full
          border
          border-white/40
          bg-white/20
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(249,115,22,0.25)]
        "
      >
        {/* Reflection */}
        <div className="absolute top-4 left-6 h-8 w-16 rounded-full bg-white/40 blur-md" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Globe2
            size={70}
            strokeWidth={1.6}
            className="text-orange-500"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}