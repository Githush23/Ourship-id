import React from "react";
import Heading from "../common/Heading";
import Back from "../common/Back";
import { location } from "../data/Data";
import img from "../contact/pexels-elīna-arāja-3377405.jpg";
import "./style.css";

const Blog = () => {
  return (
    <>
      <section className="location ">
        <Back name="Location" title="Location - Our Shipment" cover={img} />

        <div className="container content2">
          <Heading
            title="Eksplorasi Lokasi"
            subtitle="Tempat Strategis di Mana Inovasi dan Kesuksesan Bertemu, Membentuk Landasan Pertumbuhan Bisnis yang Tak Terbatas."
          />

          <div className="content grid3 mtop">
            {location.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay pad">
                  <h5>{item.name}</h5>
                  <p>
                    {/* <label>{item.Villas}</label> */}
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
