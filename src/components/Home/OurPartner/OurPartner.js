import React from "react";
import "./OurPartner.scss";
import Slider from "react-slick";
import { partnerData } from "./partnerData.js";
import OurPartnerItem from "../OurPartnerItem/OurPartnerItem.js";

function OurPartner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="our-partner p-slider">
      <div className="section-header">
        <h1>
          <span>Trusted Partners Worldwide </span> <span></span>
        </h1>
        <p>We are very greatful and feel honoured to our all partners for being
        with us</p>
      </div>
      
      <Slider {...settings}>
        {partnerData.map((data) => (
          <OurPartnerItem data={data}></OurPartnerItem>
        ))}
      </Slider>
    </div>
  );
}

export default OurPartner;
