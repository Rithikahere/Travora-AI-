import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { generateItinerary } from "../services/api";

import ItineraryLayout from "./results/ItineraryLayout";
import LoadingScreen from "./LoadingScreen";

import MiniGlobe from "./earth/MiniGlobe";

function PromptForm({ prompt, setPrompt }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter your travel plan.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);
      setError("");

      const response = await generateItinerary(prompt);

      console.log(response);
      console.log(response.response);

if (!response?.success || !response?.response) {
  throw new Error("Invalid response from server.");
}

setResult(response.response);    } catch (err) {
      console.error(err);
      setError("Failed to generate itinerary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto mt-12 max-w-4xl px-8">

      {/* Prompt Card */}
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 22,
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/40
          bg-white/70
          p-8
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]
          backdrop-blur-xl
        "
      >
        {/* Glass Reflection */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />
        </div>

        {/* Textarea */}
        <textarea
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
placeholder="Plan a 7-day luxury trip to Japan in October with a budget of ₹2,00,000."
          className="
            relative
            w-full
            resize-none
            rounded-[28px]
            border
            border-stone-200
            bg-white/80
            p-6
            text-lg
            leading-8
            outline-none
            shadow-sm
            transition-all
            duration-300
            placeholder:text-slate-400
            focus:border-orange-500
            focus:ring-4
            focus:ring-orange-200
            focus:shadow-xl
          "
        />

        {/* Generate Button */}
        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={handleGenerate}
          disabled={loading}
          className="
            group
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-[24px]
            bg-gradient-to-r
            from-orange-500
            via-orange-600
            to-orange-500
            py-5
            text-lg
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:shadow-[0_25px_45px_rgba(249,115,22,.35)]
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          <Sparkles
            size={22}
            className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />

          {loading ? "Planning..." : "Generate Itinerary"}
        </motion.button>

        {error && (
  <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-center">
    <p className="text-red-600 font-medium">
      {error}
    </p>

    <button
      onClick={handleGenerate}
      className="mt-3 rounded-xl bg-red-500 px-5 py-2 text-white hover:bg-red-600"
    >
      Retry
    </button>
  </div>
)}
      </motion.div>

      {/* Results */}
      {loading ? (
        <LoadingScreen />
      ) : result ? (
        <div className="mt-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800">
              ✨ Your AI Travel Plan
            </h2>

            <p className="mt-2 text-slate-500">
              Personalized itinerary generated in seconds
            </p>
          </div>

          {(() => {
            try {
              const itinerary =
                typeof result === "string"
                  ? JSON.parse(result)
                  : result;

              return <ItineraryLayout data={itinerary} />
            } catch (e) {
              return (
                <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
                  Invalid AI Response.
                </div>
              );
            }
          })()}
        </div>
      ) : (
<div
  className="
    mt-10
    rounded-[32px]
    border border-white/50
    bg-white/70
    p-10
    text-center
    shadow-[0_20px_60px_rgba(15,23,42,0.08)]
    backdrop-blur-xl
    overflow-hidden
    relative
  "
>
  <div className="mb-4 flex justify-center">
    <div className="h-20 w-20">
      <MiniGlobe />
    </div>
  </div>

  <h2 className="text-2xl font-bold text-slate-800">
    Your itinerary will appear here
  </h2>

  <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-slate-500">
    Describe your dream destination, travel duration, budget and preferences.
    Travora AI will instantly generate a complete travel itinerary.
  </p>

  <div className="mt-6 flex justify-center">
    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
      ✨ Powered by Travora AI
    </span>
  </div>
</div>
      )}
    </section>
  );
}

export default PromptForm;