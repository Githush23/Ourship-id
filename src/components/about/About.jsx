import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img1 from "./9.-Jasa-Ekspedisi-Cargo-Darat-Pulau-Jawa-Murah.jpeg";
import img2 from "./17.1-Daftar-Perusahaan-Ekspedisi-di-Jakarta-Barat-Terbaik.jpeg";
import img3 from "./fitur-image-01jpg.webp";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" />
        <div className="container flex mtop">
          <div className="right row">
            <Heading
              title="Tentang Kami"
              subtitle="Check out our company story and work process"
            />
            <div className="center row">
              <img src={img1} alt="" />
            </div>

            <p className="center">
              Kami berkomitmen untuk menjadi mitra pengiriman yang terkemuka dan
              inovatif, memberikan solusi terpercaya bagi pelanggan, mendorong
              pertumbuhan bisnis, dan mengubah paradigma dalam industri
              ekspedisi.
            </p>
            <p className="center">
              kami akan melakukan evaluasi terus-menerus terhadap proses
              operasional dan mendengar umpan balik pelanggan untuk terus
              meningkatkan layanan. Dan juga, kami berinvestasi dalam pelatihan
              karyawan untuk menjaga tingkat profesionalisme dan keahlian dalam
              setiap aspek operasional.
            </p>
            <p className="center">
              Melalui visi dan misi perusahaan, Kami berkomitmen untuk menjadi
              pemimpin dalam memberikan solusi pengiriman yang efisien, handal,
              dan inovatif, memenuhi harapan pelanggan serta mendukung
              pertumbuhan bisnis.
            </p>
          </div>
        </div>

        <div className="container flex mtop">
          <div className="right row">
            <Heading
              title="Visi dan Misi"
              subtitle="Check out our company story and work process"
            />
            <p className="center">
              Visi: <br />
              Menjadi pemimpin dalam industri ekspedisi darat dengan menyediakan
              solusi pengiriman yang inovatif, handal, dan berkelanjutan.
            </p>
            <p className="center">Misi:</p>
            <p>
              1. Memberikan layanan ekspedisi darat yang unggul.
              <br />
              2. Membangun dan memelihara kemitraan yang kuat dengan pelanggan,
              pemasok, dan mitra bisnis untuk menciptakan ekosistem yang saling
              menguntungkan.
              <br />
              3. Terus berinovasi dalam teknologi dan proses operasional untuk
              meningkatkan efisiensi dan keefektifan dalam pengiriman
            </p>
          </div>
          <div className="right row">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="container flex mtop">
          <div className="left row">
            <img src={img2} alt="" />
          </div>
          <div className="right row">
            <Heading
              title=" Keunggulan Perushaan Kami"
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
