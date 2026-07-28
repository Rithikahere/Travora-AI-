import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";

function Navbar() {
    const { scrollY } = useScroll();
const [scrolled, setScrolled] = useState(false);

useMotionValueEvent(scrollY, "change", (latest) => {
  setScrolled(latest > 25);
});
  const scrollToPlanner = () => {
    const planner = document.getElementById("planner");

    if (planner) {
      planner.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
  initial={{ y: -60, opacity: 0 }}
  animate={{
    y: 0,
    opacity: 1,
  }}
  transition={{ duration: 0.6 }}
  className="fixed inset-x-0 top-0 z-50"
>
      <div
  className={`mx-auto px-5 transition-all duration-500 ${
    scrolled ? "max-w-6xl py-3" : "max-w-7xl py-5"
  }`}
>
<div
  className={`
    flex items-center justify-between
    rounded-full
    border
    px-8
    transition-all
    duration-500
    ${
      scrolled
        ? "border-white/40 bg-white/75 py-3 shadow-[0_20px_50px_rgba(0,0,0,.15)]"
        : "border-white/20 bg-white/45 py-4 shadow-[0_15px_45px_rgba(0,0,0,.12)]"
    }
    backdrop-blur-3xl
  `}
>
          <motion.div
whileHover={{
  scale: 1.05,
  rotate: -2,
}}            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 p-2 shadow-[0_10px_25px_rgba(249,115,22,.45)]">
              <Sparkles className="h-6 w-6 text-white" />
            </div>

            <h1 className="text-3xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                Travora
              </span>
              <span className="ml-2 text-slate-800">AI</span>
            </h1>
          </motion.div>

          <motion.button
            whileHover={{
  scale: 1.06,
  y: -2,
  boxShadow: "0px 18px 40px rgba(249,115,22,.45)",
}}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToPlanner}
            className="rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 px-7 py-3 font-semibold text-white transition-all duration-300"
          >
            Plan Trip →
          </motion.button>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;