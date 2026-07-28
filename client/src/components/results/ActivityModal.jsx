import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  MapPin,
  Clock3,
  Star,
  ExternalLink,
} from "lucide-react";

export default function ActivityModal({
  isOpen,
  onClose,
  activity,
  destination,
  image,
}) {
  if (!isOpen) return null;

  const openGoogleMaps = () => {
    const query = encodeURIComponent(`${activity} ${destination}`);
    window.open(
      `https://www.google.com/maps/search/${query}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
          transition={{
            duration: 0.35,
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          {/* Close Button */}

          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-20 rounded-full bg-white p-2 shadow-lg"
          >
            <X size={20} />
          </button>

          {/* Image */}

          <div className="relative h-80">
            <img
              src={image}
              alt={activity}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">

              <h2 className="text-4xl font-bold">
                {activity}
              </h2>

              <div className="mt-3 flex items-center gap-5">

                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  {destination}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={18} />
                  2–3 Hours
                </span>

                <span className="flex items-center gap-2">
                  <Star
                    size={18}
                    fill="gold"
                    color="gold"
                  />
                  4.8
                </span>

              </div>

            </div>

          </div>

          {/* Content */}

          <div className="space-y-6 p-8">

            <div>

              <h3 className="text-xl font-bold">
                About this place
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                {activity} is one of the most popular attractions
                in {destination}. It offers a memorable experience
                with beautiful surroundings, rich culture,
                photography opportunities, and local experiences.
                Make sure to visit during the morning or evening
                for the best atmosphere.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-slate-100 p-5">

                <h4 className="font-semibold">
                  Entry Fee
                </h4>

                <p className="mt-2 text-slate-600">
                  Free / Varies
                </p>

              </div>

              <div className="rounded-2xl bg-slate-100 p-5">

                <h4 className="font-semibold">
                  Best Time
                </h4>

                <p className="mt-2 text-slate-600">
                  Morning & Sunset
                </p>

              </div>

            </div>

            <button
              onClick={openGoogleMaps}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
            >
              Open in Google Maps

              <ExternalLink size={20} />

            </button>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}