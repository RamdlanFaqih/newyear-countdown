import React from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = React.useState([
    "Waiting for 2024"
  ]);
  const [showFireworks, setShowFireworks] = React.useState(false)
  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime;
  }

  const handleCountdownComplete = () => {
    setNewYearMessage(["2023 Wrapped !!", "Semoga Tahun Ini Bisa Lebih Baik lagi", "Bismilah"]);
    setShowFireworks(true); 
  }
  

  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks", autoPlay: showFireworks }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"|"}
            cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={handleCountdownComplete}/>
        </div>
      </div>
    </>
  );
}

export default App;
