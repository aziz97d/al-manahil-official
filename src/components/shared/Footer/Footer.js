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

const Footer = () => {
  return (
    <>
      <svg
        className="footer-shape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 50 1440 150"
      >
        <path
          fill="#E1ECF9"
          fill-opacity="1"
          d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,122.7C672,128,768,192,864,186.7C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
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
                <p>+880199565656</p>
              </div>
              <div className="org-info-item">
                <AiOutlineMail className="info-icon" />
                <p>amwfb@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="gallery">
            <h3>Gallery</h3>

            <div className="gallery-images">
              <Link> 
              <img
                src="https://muslimcharity.org.uk/wp-content/uploads/2017/04/IMG_7731_001.jpg"
                alt=""
                className="gallery-image"
              />
              </Link>
              <img
                src="https://cdn.shopify.com/s/files/1/0253/3661/0863/articles/JS_20170301_033622_2__preview_1_1024x1024.jpg?v=1595870921"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://muslimcharity.org.uk/wp-content/uploads/2017/04/IMG_7731_001.jpg"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0253/3661/0863/articles/JS_20170301_033622_2__preview_1_1024x1024.jpg?v=1595870921"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://muslimcharity.org.uk/wp-content/uploads/2017/04/IMG_7731_001.jpg"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0253/3661/0863/articles/JS_20170301_033622_2__preview_1_1024x1024.jpg?v=1595870921"
                alt=""
                className="gallery-image"
              />
            </div>
          </div>
          <div className="news-letter">
            <h3>News Letter</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              optio veritatis aperiam ullam eveniet obcaecati!
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <input type="button" value="Subscribe" />
            </div>
            <div className="social">
              <a className="nav-item social-icon" target="_blank" href="https://www.facebook.com/amwfborg/">
                <AiFillFacebook />
              </a>
              <a className="nav-item social-icon" target="_blank" href="https://twitter.com/amwfborg/">
                <AiFillTwitterSquare />
              </a>
              <a className="nav-item social-icon" target="_blank" href="https://www.instagram.com/amwfb/">
                <AiFillInstagram />
              </a>
              <a className="nav-item social-icon" target="_blank" href="https://www.youtube.com/channel/UCr7gpLwHDGS_vc0NIFU70Eg">
                <AiFillYoutube />
              </a>
             
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
             Developed by <a href="#" className="developer-link">Abdul Aziz</a>
          </p>
          <div className="navigation">
            <Link to="/" className="navigation-item">
              Home
            </Link>
            <Link to="/" className="navigation-item">
              About
            </Link>
            <Link to="/" className="navigation-item">
              Service
            </Link>
            <Link to="/" className="navigation-item">
              Blog
            </Link>
            <Link to="/" className="navigation-item">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
