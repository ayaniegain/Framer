import React from "react";
import AddSection from "./AddSection";
import Banner from "./Banner";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

function HeroMain() {
  return (
    <>
      <Banner />
      <Navbar />

      <HeroSection />

      <AddSection />
    </>
  );
}

export default HeroMain;
