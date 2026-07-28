import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function DestinationHero({ data }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[38px] shadow-2xl"
    >
      <img
        src={data.image}
        alt={data.destination}
        className="h-[520px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-12">

        <div className="mb-5 flex flex-wrap gap-3">

          <span className="rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur-xl">
            <MapPin size={16} className="mr-2 inline" />
            {data.destination}
          </span>

          <span className="rounded-full bg-orange-500/80 px-5 py-2 text-white backdrop-blur-xl">
            <Calendar size={16} className="mr-2 inline" />
            {data.duration}
          </span>

          <span className="rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur-xl">
            <Sparkles size={16} className="mr-2 inline" />
            AI Generated
          </span>

        </div>

        <h1 className="text-6xl font-black text-white drop-shadow-xl">
          {data.destination}
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-9 text-white/90">
          {data.summary}
        </p>

      </div>
    </motion.section>
  );
}