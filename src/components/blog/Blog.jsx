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
            title="Explore By Location"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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