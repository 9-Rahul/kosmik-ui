import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header-outer">
      <div className="header-inner">
        <div className="logo-container">
          <img src="/assets/icons/kosmik-logo.svg" alt="Kosmik Logo" />
        </div>
        <div className="header-right">
          <button>
            <p>Pricing</p>
          </button>

          <button>
            <p>Use cases</p>
          </button>

          <button>
            <p>Blog</p>
          </button>

          <button>
            <p>Contact us</p>
          </button>

          <button>
            <p>Tutorials</p>
          </button>

          <button className="orange-btn">
            <p>Download</p>
          </button>
        </div>
        <div className="menu-icon-container">
          <img src="/assets/icons/menu.svg" alt="menu-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
