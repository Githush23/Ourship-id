import React from "react";
import img from "../contact/pexels-elīna-arāja-3377405.jpg";
import Back from "../common/Back";
import Map from "./Map";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container">
          <Map />

          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10" placeholder="Description"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
