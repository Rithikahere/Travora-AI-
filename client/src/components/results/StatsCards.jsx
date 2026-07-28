import { motion } from "framer-motion";
import {
  CalendarDays,
  Wallet,
  CloudSun,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    title: "Duration",
    value: (data) => data.duration || "N/A",
    icon: CalendarDays,
  },
  {
    title: "Budget",
    value: (data) => data.budget || "Flexible",
    icon: Wallet,
  },
  {
    title: "Weather",
    value: (data) => data.weather || "Pleasant",
    icon: CloudSun,
  },
  {
    title: "Trip Style",
    value: () => "AI Curated",
    icon: Sparkles,
  },
];

export default function StatsCards({ data }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              rounded-[28px]
              border
              border-white/40
              bg-white/70
              p-6
              shadow-xl
              backdrop-blur-xl
            "
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
              <Icon
                className="text-orange-500"
                size={28}
              />
            </div>

            <p className="text-sm uppercase tracking-wider text-slate-500">
              {card.title}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-800">
              {card.value(data)}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
}