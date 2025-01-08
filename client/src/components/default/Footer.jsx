import React from 'react';
import './Footer.css';
import {FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section mt-20">
          <h2>CAR RENTAL</h2>
          <div className="section-underline"></div>
          <p>Your trusted partner for car rentals. Experience premium service with unlimited miles and flexible pick-up options at unbeatable prices.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <div className="section-underline"></div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/models">Car Models</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="footer-section">
          <h2>Working Hours</h2>
          <div className="section-underline"></div>
          <ul className="working-hours">
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Saturday: 9:00AM - 7:00PM</li>
            <li>Sunday: 10:00AM - 6:00PM</li>
          </ul>
          <div className="contact-info">
            <p><FaPhone /> +1 234 567 8900</p>
            <p><FaEnvelope /> info@carrental.com</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h2>Newsletter</h2>
          <div className="section-underline"></div>
          <p>Subscribe for latest updates and offers</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;