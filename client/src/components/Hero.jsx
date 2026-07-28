import { Sparkles, MapPinned, Plane } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      style={{
  x: heroOffset.x,
  y: heroOffset.y,
}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-medium text-orange-700">
            <Sparkles size={16} />
            Powered by AI
          </div>

          <h1 className="mx-auto max-w-4xl text-6xl font-extrabold leading-tight text-slate-900">
            Plan Your Perfect

            <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 bg-clip-text text-transparent">
              Dream Vacation
            </span>

            in Seconds
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            Tell Travora AI where you want to travel, your budget and
            preferences, and receive a complete day-by-day itinerary instantly.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-md">
              <Plane className="text-orange-600" size={18} />
              AI Trip Planning
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-md">
              <MapPinned className="text-orange-600" size={18} />
              Smart Itineraries
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-md">
              <Sparkles className="text-orange-600" size={18} />
              Personalized Plans
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;