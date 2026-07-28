import { motion } from "framer-motion";
import {
  Globe2,
  Plane,
  Hotel,
  UtensilsCrossed,
  Map,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: Globe2,
    text: "Finding the best destinations...",
  },
  {
    icon: Plane,
    text: "Searching for amazing experiences...",
  },
  {
    icon: Hotel,
    text: "Looking for beautiful stays...",
  },
  {
    icon: UtensilsCrossed,
    text: "Discovering local food...",
  },
  {
    icon: Map,
    text: "Building your itinerary...",
  },
];

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-16 rounded-[32px] border border-white/40 bg-white/70 p-10 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex flex-col items-center">

        {/* Animated Globe */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
          className="mb-8"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl">

            <Globe2
              size={48}
              className="text-white"
            />

          </div>
        </motion.div>

        <h2 className="text-3xl font-bold text-slate-800">
          Travora AI
        </h2>

        <p className="mt-2 text-slate-500">
          Crafting your perfect journey...
        </p>

        <div className="mt-10 w-full max-w-xl space-y-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  x: 0,
                }}
                transition={{
                  delay: index * 0.5,
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="rounded-xl bg-orange-100 p-3">
                  <Icon
                    size={20}
                    className="text-orange-500"
                  />
                </div>

                <span className="font-medium text-slate-700">
                  {step.text}
                </span>

                <Sparkles
                  size={16}
                  className="ml-auto text-yellow-400"
                />
              </motion.div>
            );
          })}

        </div>

        {/* Progress */}

        <div className="mt-10 w-full max-w-xl">

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">

            <motion.div
              animate={{
                width: [
                  "10%",
                  "25%",
                  "40%",
                  "55%",
                  "70%",
                  "85%",
                  "100%",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
            />

          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            AI usually finishes within a few seconds...
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default LoadingScreen;