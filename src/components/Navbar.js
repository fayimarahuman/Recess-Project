import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaWhatsapp, FaPhone, FaEnvelope, FaSms } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/logo.JPG" alt="Caroline Ways Ltd" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/" exact="true">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li><NavLink to="/privacypolicy">Privacy</NavLink></li>
        
        {/* Contact Actions */}
        <li>
          <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
            <FaWhatsapp className="icon-contact" />
          </a>
        </li>
        <li>
          <a href="sms:+256700000000" title="Send SMS">
            <FaSms className="icon-contact" />
          </a>
        </li>
        <li>
          <a href="tel:+256700000000" title="Call Now">
            <FaPhone className="icon-contact" />
          </a>
        </li>
        <li>
          <a href="mailto:info@carolineways.com" title="Send Email">
            <FaEnvelope className="icon-contact" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
