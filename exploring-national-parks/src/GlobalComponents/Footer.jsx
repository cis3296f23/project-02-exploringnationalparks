import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import "../Style/footer.css";

/**
 * Footer component for the Exploring National Parks application.
 * Renders a footer with the application name and an animated tree image.
 * @module Footer
 * @memberof GlobalComponents
 * @returns {JSX.Element} The rendered Footer component.
 * 
 */
const Footer = () => {
  return (
    <div className="footer">
      <span>
        <p>Exploring National Parks</p>
      </span>
      <div className="social-media">
        <a href="https://x.com/TempleUniv" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={48} />
        </a>
        <a href="https://www.instagram.com/templeuniv/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={48} />
        </a>
        <a href="https://www.linkedin.com/school/templeuniversity/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={48} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
