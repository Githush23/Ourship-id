import React from "react";
import Heading from "../../common/Heading";
import "./price.css";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <Heading
            title="Ayo Bergabung!"
            subtitle="Kami berkomitmen untuk memberikan solusi ekspedisi yang handal dan efisien. Jangan lewatkan peluang untuk merasakan perbedaannya."
          />
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Price;
