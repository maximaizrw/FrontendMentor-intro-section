import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen font-epilogue bg-neutral-almost-white">
      <header>
        <Navbar />
      </header>
      <Hero />
    </div>
  );
};

export default App;
