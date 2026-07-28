import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SummaryCard({ data }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/40
        bg-white/70
        p-8
        shadow-[0_20px_60px_rgba(15,23,42,.08)]
        backdrop-blur-xl
      "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-orange-100 blur-3xl opacity-60" />

      <div className="relative">

        <div className="mb-5 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
            <Sparkles
              className="text-orange-500"
              size={24}
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-orange-500">
              AI Overview
            </p>

            <h2 className="text-3xl font-bold text-slate-800">
              Your Journey
            </h2>
          </div>

        </div>

        <p className="max-w-4xl text-lg leading-9 text-slate-600">
          {data.summary}
        </p>

      </div>
    </motion.section>
  );
}