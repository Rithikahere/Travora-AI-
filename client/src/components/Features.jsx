import { motion } from "framer-motion";
import { Sparkles, Globe2, Wallet } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Powered Planning",
    description:
      "Generate complete travel itineraries in seconds with personalised recommendations.",
  },
  {
    icon: Globe2,
    title: "Discover Hidden Gems",
    description:
      "Explore famous attractions and unique local experiences curated just for you.",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description:
      "Optimise your travel budget with intelligent planning and recommendations.",
  },
];

function Features() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-8">
      <div className="text-center">
        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Why Choose Travora AI?
        </span>

        <h2 className="mt-6 text-5xl font-bold text-slate-900">
          Travel planning made
          <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            effortless
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          Everything you need to create beautiful AI-powered travel itineraries
          in just a few seconds.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white">
                <Icon size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;