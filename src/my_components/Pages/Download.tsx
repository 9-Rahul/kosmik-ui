import React from "react";
import "../Styles/Download.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});
const Download = () => {
  return (
    <section className="download-outer">
      <h2 style={{ fontSize: "48px", color: "#3C3C3C", marginBottom: "30px" }}>
        Download Kosmik
      </h2>
      <div className="dwnld-inner">
        <div className="download-card">
          <div className="card-header">
            <span className="platform-icon">
              <img
                src="/Assets/Icons/apple-icon.svg"
                alt="apple-icon
              "
              />
            </span>
            <span className="platform-label" style={{ fontSize: "20px" }}>
              macOS
            </span>
          </div>
          <h2 className={archivo.className}>Download for Mac</h2>
          <p style={{ fontFamily: "sans-serif" }}>
            Designed with care for macOS Sonoma and Apple Silicon, Kosmik offers
            great performance and gives you a seamless, delightful browsing
            experience.
          </p>
          <div className="button-group">
            <button className="btn orange">Apple Silicon</button>
            <button className="btn white">Intel</button>
          </div>
        </div>

        <div className="download-card">
          <div className="card-header">
            <span className="platform-icon">
              <img
                src="/Assets/Icons/apple-icon.svg"
                alt="apple-icon
              "
              />
            </span>
            <span className="platform-label" style={{ fontSize: "20px" }}>
              Windows
            </span>
          </div>
          <h2 className={archivo.className}>Download for Windows</h2>
          <p style={{ fontFamily: "sans-serif" }}>
            The whole Kosmik experience, re-designed for Windows, optimized for
            Windows 11.
          </p>
          <div className="button-group">
            <button className="btn orange">Intel-AMD</button>
            <button className="btn white">ARM chips</button>
          </div>
        </div>

        <div className="download-card">
          <div className="card-left-and-right-container">
            <div className="card-left">
              <h2 className={archivo.className}>Kosmik web clipper</h2>
              <p style={{ fontFamily: "sans-serif", maxWidth: "547px" }}>
                Bookmark pages in a click and explore them again in Kosmik. Save
                images and texts, let Kosmik AI tag them to build your Assets
                library.
              </p>
              <div className="button-group">
                <button className="btn orange">Download for chrome</button>
              </div>
            </div>
            <div className="card-right">
              <div className="card-img-container">
                <img
                  style={{
                    maxWidth: "350px",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(147, 142, 142, 1) ",
                  }}
                  src="https://i.ytimg.com/vi_webp/EmSvzUe6EhY/sddefault.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
