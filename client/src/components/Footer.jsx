import { Heart, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-32 border-t border-stone-200 bg-white/60 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <div className="flex flex-col items-center">

          <div className="flex items-center gap-3">

            <Sparkles className="text-orange-500" />

            <h2 className="text-3xl font-black">
              <span className="text-orange-600">Travora</span> AI
            </h2>

          </div>

          <p className="mt-5 max-w-xl text-center leading-8 text-slate-600">
            AI-powered travel planning that creates beautiful,
            personalized itineraries in seconds.
          </p>

          

          <p className="mt-5 text-sm text-slate-400">
            © 2026 Travora AI. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;