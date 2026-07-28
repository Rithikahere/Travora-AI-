import { motion } from "framer-motion";
import PromptForm from "./PromptForm";
import HeroBackground from "./HeroBackground";
import FloatingGlobe from "./FloatingGlobe";
import FloatingParticles from "./FloatingParticles";
import useMouseParallax from "../hooks/useMouseParallax";
import Globe3D from "./earth/Globe3D";

function Hero3D({ prompt, setPrompt }) {
  const heroOffset = useMouseParallax(12);
  const globeOffset = useMouseParallax(24);
  const cardOffset = useMouseParallax(4);

  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-20">
      <HeroBackground />
      <FloatingParticles />

      {/* Initial Page Fade */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        {/* Mouse Parallax Layer */}
        <motion.div
          style={{
            x: heroOffset.x,
            y: heroOffset.y,
          }}
        >
          {/* AI Badge */}
          <motion.span
            className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 shadow-sm"
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 0 rgba(249,115,22,0)",
                "0 10px 30px rgba(249,115,22,.20)",
                "0 0 0 rgba(249,115,22,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✨ AI Powered Travel Planner
          </motion.span>

          {/* Globe */}
          <motion.div
  className="mt-2 flex justify-center"
            style={{
              x: globeOffset.x,
              y: globeOffset.y,
            }}
          >
            <Globe3D />
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="mt-2 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -2, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Plan Your Perfect Trip

            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              In Seconds
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -1, 0],
            }}
            transition={{
              opacity: {
                delay: 0.2,
                duration: 1,
              },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Create beautiful AI-powered travel itineraries in seconds.
            Simply enter your destination, budget, and preferences.
          </motion.p>
                    {/* Prompt Form */}
          <motion.div
  className="mt-6"
  animate={{
    y: [0, -4, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <PromptForm
    prompt={prompt}
    setPrompt={setPrompt}
  />
</motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero3D;