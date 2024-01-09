import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Shipment Listed"
            subtitle="Memungkinkan pelanggan untuk membuat jadwal pengiriman sesuai dengan preferensi waktu mereka, sehingga memberikan fleksibilitas dalam menerima paket."
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
