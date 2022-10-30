import React from "react";
import "./Footer.css";
import WorldIcon from "../../assets/wireframeWorld.svg";
import ChevronUpIcon from "../../assets/chevron-up.svg";

const Footer = () => {
  return (
    <div className="mb">
      <footer className="footer">
        <div className="left">
          <span>© 2022 Airbnb, Inc.</span>·<a href="#">Privacy</a>
          <span className="dot">·</span>
          <a href="#">Terms</a>
          <span className="dot">·</span>
          <a href="#">Sitemap</a>
          <span className="dot">·</span>
          <a href="#">UK Modern Slavery Act</a>
          <span className="dot">·</span>
          <a href="#">Company details</a>
          <span className="dot">·</span>
          <a href="#">Destinations</a>
        </div>
        <div className="right">
          <div className="lanugage">
            <img src={WorldIcon} />
            <span>English (GB)</span>
          </div>
          <div className="currency">
            <span>£</span>
            <span>GBP</span>
          </div>
          <div className="sandr">
            <span>Support & resources</span>
            <img src={ChevronUpIcon} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
