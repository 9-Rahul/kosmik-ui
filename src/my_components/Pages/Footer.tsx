import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <footer className="outer-footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Start creating</h4>
          <ul>
            <li>Sign up</li>
            <li>Download for Mac</li>
            <li>Download for Windows</li>
            <li>Pricing</li>
            <li>Kosmik vs Figma</li>
            <li>Get started</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About Kosmik</h4>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Why Kosmik</li>
            <li>Legal information</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-column">

          <h4> {`Let's be friends`}</h4>

          <ul>
            <li>Discord</li>
            <li>Twitter</li>
            <li>Reddit</li>
            <li>Send us an email</li>
            <li>⭐ Rate us on ToolFinder</li>
            <li>
              <strong>Designed in Paris, with love 🥐</strong>
            </li>
          </ul>
        </div>
      </div>
      <img
        className="eiffel "
        src="/Assets/Images/footer-pinImg.png"
        alt="footer-pin-image"
      />
    </footer>
  );
};

export default Footer;
