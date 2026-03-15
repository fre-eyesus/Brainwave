import "./index.css";
import Button from "./components/Button";
import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] oveflow-hidden">
        <Hero />
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
