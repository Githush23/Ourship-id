import React from "react";
import img from "../contact/pexels-elīna-arāja-3377405.jpg";

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className="back">
        <div className="container">
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default Back;
