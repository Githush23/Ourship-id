import React from "react";
import Heading from "../../common/Heading";
import "./featured.css";
import FeaturedCard from "./FeaturedCard";
const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Tipe Pengiriman"
            subtitle="Temukan Jenis Pengirimanmu."
          />

          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
