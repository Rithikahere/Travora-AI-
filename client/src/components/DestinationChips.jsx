import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const destinations = [
  "Japan",
  "Italy",
  "Switzerland",
  "Thailand",
  "Iceland",
  "Paris",
  "Dubai",
  "Bali",
];

function DestinationChips({ onSelect }) {
  return (
    <section className="mx-auto mt-14 max-w-6xl px-8">
      <div className="text-center">
        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Explore
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Popular Destinations
        </h2>

        <p className="mt-3 text-slate-600">
          Click a destination to instantly generate a personalised itinerary.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {destinations.map((place) => (
          <motion.button
            key={place}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            onClick={() => onSelect(place)}
            className="flex items-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3 text-slate-700 shadow-md transition hover:border-orange-400 hover:bg-orange-50 hover:shadow-xl"
          >
            <MapPin
              size={16}
              className="text-orange-500"
            />
            {place}
          </motion.button>
        ))}
      </div>
    </section>
  );
}

export default DestinationChips;