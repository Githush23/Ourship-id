import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Menghadirkan Keunggulan dalam Setiap Pengiriman."
            subtitle="Dengan Cahaya Kargo Produkmu Akan Aman Sampai Tujuan."
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
