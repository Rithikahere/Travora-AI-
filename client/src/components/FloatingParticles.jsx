import { motion } from "framer-motion";

const particles = [
  { left: "10%", top: "20%", delay: 0 },
  { left: "25%", top: "70%", delay: 1 },
  { left: "50%", top: "15%", delay: 2 },
  { left: "70%", top: "60%", delay: 1.5 },
  { left: "85%", top: "30%", delay: 2.5 },
  { left: "40%", top: "45%", delay: 0.8 },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-orange-400/40"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;