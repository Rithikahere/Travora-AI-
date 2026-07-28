import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-orange-50 to-amber-100" />

      {/* Aurora Blob 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-300/30
          blur-[120px]
        "
      />

      {/* Aurora Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 70, -30, 0],
          scale: [1, 1.1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-32
          right-0
          h-[550px]
          w-[550px]
          rounded-full
          bg-amber-300/30
          blur-[130px]
        "
      />

      {/* Aurora Blob 3 */}
      <motion.div
        animate={{
          x: [0, 40, -80, 0],
          y: [0, 90, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          left-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-yellow-200/30
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
    </div>
  );
}

export default HeroBackground;