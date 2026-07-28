import { useState } from "react";
import Navbar from "./components/Navbar";



import Hero3D from "./components/Hero3D";




import DestinationChips from "./components/DestinationChips";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import Features from "./components/Features";

function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <>
      <BackgroundEffects />
      <Navbar />

      <div className="pt-28">

       <section id="planner">
  <Hero3D
    prompt={prompt}
    setPrompt={setPrompt}
  />
</section>

        <DestinationChips
          onSelect={(place) =>
            setPrompt(
              `Plan a 7-day trip to ${place} with a budget of ₹2,00,000`
            )
          }
        />

        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;