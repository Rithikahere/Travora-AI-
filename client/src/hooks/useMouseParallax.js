import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function useMouseParallax(strength = 20) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * strength);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * strength);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, strength]);

  return { x, y };
}