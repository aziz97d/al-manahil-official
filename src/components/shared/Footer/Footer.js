import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="org-info">
            <img
              className="org-logo"
              src="https://amwfb.org/wp-content/uploads/2020/07/amwfLogo_footerLogo.png"
              alt=""
            />
            <p>
              When a child gets access to good food, it can change just about
              everything. Sed do eiusmod tempor incididunt dolore magna aliqua.
            </p>

            <div className="org-info-details">
              <div className="org-info-item">
                <AiOutlineEnvironment className="info-icon" />
                <p>#177 No Building,#1, Sugondha RA, Panchlaish.</p>
              </div>
              <div className="org-info-item">
                <AiOutlinePhone className="info-icon" />
                <p>+88018 8657 6775</p>
              </div>
              <div className="org-info-item">
                <AiOutlineMail className="info-icon" />
                <p>amwfb@gmail.com</p>
              </div>
            </div>
          </div>

          
          <div className="contact-us">
          
            <h3>Contact Us</h3>
            <a
              href="https://web.whatsapp.com/send?phone=8801886576775"
              target="_blank"
              className="contact-link"
            >
              <FaWhatsapp className="contact-icon-whatsapp" />
            </a>
            <a className="contact-link">
              <FaTelegram className="contact-icon-telegram" />
            </a>
          </div>

          <div className="news-letter">
            <h3>News Letter</h3>

            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <input type="button" value="Subscribe" />
            </div>
            <div className="social">
              <a
                className="nav-item social-icon"
                target="_blank"
                href="https://www.facebook.com/amwfborg/"
              >
                <AiFillFacebook />
              </a>
              <a
                className="nav-item social-icon"
                target="_blank"
                href="https://twitter.com/amwfborg/"
              >
                <AiFillTwitterSquare />
              </a>
              <a
                className="nav-item social-icon"
                target="_blank"
                href="https://www.instagram.com/amwfb/"
              >
                <AiFillInstagram />
              </a>
              <a
                className="nav-item social-icon"
                target="_blank"
                href="https://www.youtube.com/channel/UCr7gpLwHDGS_vc0NIFU70Eg"
              >
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Developed by{" "}
            <a href="#" className="developer-link">
              Abdul Aziz
            </a>
          </p>
          <div className="navigation">
            <Link to="/" className="navigation-item">
              Home
            </Link>
            <Link to="/" className="navigation-item">
              Our Projects
            </Link>
            <Link to="/" className="navigation-item">
              Success Story
            </Link>
            <Link to="/" className="navigation-item">
              Latest
            </Link>
          </div>
          <img
            style={{"width":"100%","height":"auto"}}
            src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png"
          />
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
