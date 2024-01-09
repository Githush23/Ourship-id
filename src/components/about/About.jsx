import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Kami berkomitmen untuk menjadi mitra pengiriman yang terkemuka dan
              inovatif, memberikan solusi terpercaya bagi pelanggan, mendorong
              pertumbuhan bisnis, dan mengubah paradigma dalam industri
              ekspedisi.
            </p>
            <p>
              kami akan melakukan evaluasi terus-menerus terhadap proses
              operasional dan mendengar umpan balik pelanggan untuk terus
              meningkatkan layanan. Dan juga, kami berinvestasi dalam pelatihan
              karyawan untuk menjaga tingkat profesionalisme dan keahlian dalam
              setiap aspek operasional.
            </p>
            <p>
              Melalui visi dan misi perusahaan, Kami berkomitmen untuk menjadi
              pemimpin dalam memberikan solusi pengiriman yang efisien, handal,
              dan inovatif, memenuhi harapan pelanggan serta mendukung
              pertumbuhan bisnis.
            </p>
          </div>
          <div className="right row">
            <img
              src="../images/9.-Jasa-Ekspedisi-Cargo-Darat-Pulau-Jawa-Murah.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="container flex mtop">
          <div className="left row">
            <img
              src="../images/17.1-Daftar-Perusahaan-Ekspedisi-di-Jakarta-Barat-Terbaik.jpeg"
              alt=""
            />
          </div>
          <div className="right row">
            <Heading
              title=" Keunggulan Perushaan Kami :"
              subtitle="Check out our company story and work process"
            />

            <p>
              1. Menyediakan opsi pengiriman dalam satu hari atau keesokan
              harinya untuk memenuhi kebutuhan pelanggan yang memerlukan layanan
              cepat.
            </p>
            <p>
              2. Memberikan sistem pelacakan yang canggih untuk memberikan
              visibilitas penuh kepada pelanggan terkait status dan lokasi
              pengiriman mereka.
            </p>
            <p>
              3. Menekankan penggunaan armada kendaraan ramah lingkungan dan
              praktik pengemasan yang berkelanjutan untuk mendukung upaya
              pelestarian lingkungan.
            </p>
            <button className="btn2">More About Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
