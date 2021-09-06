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
        viewBox="0 0 1440 250"
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
              <img
                src="https://scontent.fcgp5-1.fna.fbcdn.net/v/t1.6435-9/192744498_3207143412859748_121920808992827794_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=_2Kv9wgVLoAAX8KnF6O&_nc_ht=scontent.fcgp5-1.fna&oh=fc66d7c06be21892c5063d0bae83c48d&oe=612CA76E"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0253/3661/0863/articles/JS_20170301_033622_2__preview_1_1024x1024.jpg?v=1595870921"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://scontent.fcgp5-1.fna.fbcdn.net/v/t1.18169-9/22045609_2052333305007437_2608515536111153441_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=6uU4BOYRWVUAX_pPhEu&tn=Q2ktCIJ43BwHIA4K&_nc_ht=scontent.fcgp5-1.fna&oh=817177599560737f93f391eabb4b33b3&oe=612C3691"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://scontent.fcgp5-1.fna.fbcdn.net/v/t1.6435-9/203012306_3223464454560977_8990217037200405006_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=j0qv0R3j3xgAX-V_75X&tn=Q2ktCIJ43BwHIA4K&_nc_ht=scontent.fcgp5-1.fna&oh=6214d91bac4b0d3ba32d12a40b41d92a&oe=612C2A6C"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://scontent.fcgp5-1.fna.fbcdn.net/v/t1.6435-9/201866157_3219057918334964_6613585321724332868_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=5gleHpS4-RQAX-8AVkg&tn=Q2ktCIJ43BwHIA4K&_nc_ht=scontent.fcgp5-1.fna&oh=1fd66238a059870d936694d8e73a7418&oe=612D47BE"
                alt=""
                className="gallery-image"
              />
              <img
                src="https://scontent.fcgp5-1.fna.fbcdn.net/v/t1.6435-9/197083249_3214477418793014_3750549054913191181_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=xcE516-gc-oAX8CRpAa&_nc_ht=scontent.fcgp5-1.fna&oh=f11efd92371574ad8c5c9dd162d904ef&oe=612B7E75"
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
              <Link className="nav-item social-icon" to="/">
                <AiFillFacebook />
              </Link>
              <Link className="nav-item social-icon" to="/">
                <AiFillTwitterSquare />
              </Link>
              <Link className="nav-item social-icon" to="/">
                <AiFillInstagram />
              </Link>
              <Link className="nav-item social-icon" to="/">
                <AiFillYoutube />
              </Link>
              <Link className="nav-item social-icon" to="/">
                <AiFillLinkedin />
              </Link>
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
