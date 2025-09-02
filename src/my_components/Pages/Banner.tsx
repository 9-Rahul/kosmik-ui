import React from "react";
import "../Styles/Banner.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});
function Banner() {
  return (
    <section className="banner-outer">
      <div className="banner-inner">
        <h1 className={archivo.className}>
          The <span>only moodboarding </span> platform <span>you need</span>
        </h1>

        <div className="banner-btns">
          <button className="orange-btn-banner ">Try now for free</button>
          <button className="download-btn">Download Kosmik</button>
        </div>

        <div className="banner-vid-container">
          <video
            src="https://framerusercontent.com/assets/74XgTPwBa2QGz1aTJkMEkwwHM.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>

        <div className="banner-btm-text">
          <h3>
            Out of hand download folder ? <br />
            Too many Pinterest boards ?
          </h3>
          <h3>
            Sooooo many tabs ? <br />
            Messy desktop ?
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Banner;
