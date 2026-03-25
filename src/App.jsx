import "./index.css";
import Button from "./components/Button";
import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./componontes/Roadmap"
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] oveflow-hidden">
        <Hero />
        <Header />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
