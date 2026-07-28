import { motion } from "framer-motion";
import { Sparkles, Plane } from "lucide-react";

const steps = [
  "Finding the best destination...",
  "Planning your itinerary...",
  "Optimising your budget...",
  "Adding local experiences...",
];

function LoadingState() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="w-full max-w-3xl rounded-3xl border border-orange-100 bg-white/80 p-10 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col items-center">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            }}
            className="mb-6 rounded-full bg-orange-100 p-5"
          >
            <Plane className="text-orange-600" size={34} />
          </motion.div>

          <h2 className="text-2xl font-bold text-slate-900">
            Travora AI is planning your trip
          </h2>

          <p className="mt-3 text-slate-500">
            Creating a personalised itinerary...
          </p>

          <div className="mt-8 w-full space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.4,
                }}
                className="flex items-center gap-3 rounded-xl bg-orange-50 p-4"
              >
                <Sparkles
                  className="text-orange-600"
                  size={18}
                />

                <span className="text-slate-700">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingState;