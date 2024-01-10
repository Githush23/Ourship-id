import React from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop ">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img .contentimg">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "Shipping" ? "#25b5791a" : "#ff98001a",
                      color: category === "Received" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
