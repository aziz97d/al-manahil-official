import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Foo.scss";
const Foo = () => {
  return (
    <div className="footer">
      {/* <div className="footer-top">
        <a>Make donatiion</a>
        <figure>24/7 Hotline</figure>
      </div> */}
      <h2 className="footer-title">Office</h2>
      <h4>
        #177, Road No #01, Sugondha R/A, Muradpur, Panchlaish, Chattogram,
        Bangladesh
      </h4>
      <div className="nav-list">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/" className="nav-item">
          Appeals
        </Link>
        <Link to="/" className="nav-item">
          Success Story
        </Link>
        <Link to="/" className="nav-item">
          Latest
        </Link>
        <Link to="/" className="nav-item">
          Contact Us
        </Link>
      </div>
      <div id="social-platforms">
        <h3 className="footer-title">Find us on these networks</h3>

        <a
          class="btn btn-icon btn-facebook"
          target="_blank"
          href="https://www.facebook.com/amwfborg/"
          rel="noreferrer"
        >
          <i class="fa fa-facebook"></i>
          <span>Facebook</span>
        </a>
        <a
          class="btn btn-icon btn-twitter"
          target="_blank"
          href="https://twitter.com/amwfborg/"
        >
          <i class="fa fa-twitter"></i>
          <span>Twitter</span>
        </a>
        <a
          class="btn btn-icon btn-youtube"
          target="_blank"
          href="https://www.youtube.com/channel/UCr7gpLwHDGS_vc0NIFU70Eg"
        >
          <i class="fa fa-youtube-play"></i>
          <span>Youtube</span>
        </a>
        <a
          class="btn btn-icon btn-linkedin"
          target="_blank"
          href="https://www.linkedin.com/company/amwfborg/"
        >
          <i class="fa fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a
          class="btn btn-icon btn-instagram"
          target="_blank"
          href="https://www.instagram.com/amwfb/"
        >
          <i class="fa fa-instagram"></i>
          <span>Instagram</span>
        </a>
      </div>
      <img
        style={{ width: "80%", height: "auto" }}
        src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png"
      />
    </div>
  );
};

export default Foo;
