import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import ActivityCard from "./ActivityCard";

export default function Timeline({ itinerary, destination }) {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
          <CalendarDays className="text-orange-500" size={24} />
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-orange-500">
            Day by Day
          </p>

          <h2 className="text-3xl font-bold text-slate-800">
            Your Itinerary
          </h2>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative ml-6 border-l-2 border-orange-200">
        {itinerary.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative mb-12 ml-10"
          >
            {/* Timeline Dot */}
            <div
              className="
                absolute
                -left-[52px]
                top-6
                h-6
                w-6
                rounded-full
                border-4
                border-white
                bg-orange-500
                shadow-lg
              "
            />

            {/* Day Card */}
            <div
              className="
                rounded-[28px]
                border
                border-white/40
                bg-white/70
                p-7
                shadow-xl
                backdrop-blur-xl
              "
            >
              <h3 className="text-2xl font-bold text-slate-800">
                Day {day.day}
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {day.activities.map((activity, i) => (
                  <ActivityCard
                    key={i}
                    activity={activity}
                    destination={destination}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}