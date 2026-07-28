import { useState } from "react";

import japan from "../assets/destinations/japan.jpg";
import italy from "../assets/destinations/italy.jpg";
import switzerland from "../assets/destinations/switzerland.jpg";
import thailand from "../assets/destinations/thailand.jpg";
import iceland from "../assets/destinations/iceland.jpg";
import paris from "../assets/destinations/paris.jpg";
import dubai from "../assets/destinations/dubai.jpg";
import bali from "../assets/destinations/bali.jpg";

const images = {
  japan,
  italy,
  switzerland,
  thailand,
  iceland,
  paris,
  dubai,
  bali,
};

function DestinationImage({ destination = "", image = "" }) {
  const [loaded, setLoaded] = useState(false);

  const key = destination.toLowerCase().trim();

  const fallback =
    Object.entries(images).find(([name]) =>
      key.includes(name.toLowerCase())
    )?.[1] ?? paris;

  const src = image || fallback;

  return (
    <div className="relative h-[480px] w-full overflow-hidden">

      {/* Loading Shimmer */}

      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200" />
      )}

      {/* Image */}

      <img
        src={src}
        alt={destination}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-[6000ms] ease-out
        ${loaded ? "scale-110 opacity-100" : "scale-100 opacity-0"}`}
      />

      {/* Cinematic Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      {/* Side Vignette */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Soft Glow */}

      <div className="absolute inset-0 bg-orange-500/5 mix-blend-soft-light" />

    </div>
  );
}

export default DestinationImage;