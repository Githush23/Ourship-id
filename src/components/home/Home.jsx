import React from "react";
import Hero from "./Hero/Hero";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Awards from "./awards/Awards";
import Price from "./price/Price";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Price />
    </>
  );
};

export default Home;
