import React from "react";
import Slider from "react-slick";
import Navbar from "../../shared/Navbar/Navbar.js";
import DonateForm from "../DonateForm/DonateForm.js";
import "./Header.css";
import { FaDonate } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    pauseOnHover: true,
    fade: true,
  };
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Slider {...settings}>
          <div className="slider-overlay">
            <img
              className="slider-image"
              src="https://amwfb.org/wp-content/uploads/revslider/slider-1-scaled.jpg"
              alt=""
            />
            <Link className="animated-donate-button">
              Donate Now <FaDonate className="Read-more-icon" />{" "}
            </Link>
          </div>
          <div>
            <img
              className="slider-image"
              src="https://amwfb.org/wp-content/uploads/revslider/slider-2-scaled.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="slider-image"
              src="https://amwfb.org/wp-content/uploads/revslider/water.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <DonateForm isBackgroundColor={true} />
    </>
  );
}

export default Header;
