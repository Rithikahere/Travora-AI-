import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

import getActivityImage from "../../utils/getActivityImage";
import ActivityModal from "./ActivityModal";

export default function ActivityCard({
  activity,
  destination,
  index,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const image = getActivityImage(activity, destination);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: index * 0.08,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/40
          bg-white/70
          shadow-[0_20px_60px_rgba(15,23,42,0.10)]
          backdrop-blur-xl
        "
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={activity}
            className="
              h-48
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 backdrop-blur">
            📍 {destination}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold leading-7 text-slate-800">
            {activity}
          </h3>

          <p className="mt-3 text-slate-500 leading-7">
            Explore this experience as part of your personalised AI itinerary.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock3 size={18} />
              <span>Flexible</span>
            </div>

            <div className="flex items-center gap-2 text-slate-500">
              <MapPin size={18} />
              <span>{destination}</span>
            </div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => setIsModalOpen(true)}
            className="
              mt-6
              w-full
              rounded-xl
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              py-3
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:shadow-xl
            "
          >
            <span className="flex items-center justify-center gap-2">
              Learn More
              <ArrowRight size={18} />
            </span>
          </motion.button>
        </div>
      </motion.div>

      <ActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activity={activity}
        destination={destination}
        image={image}
      />
    </>
  );
}