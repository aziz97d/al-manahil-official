import React from 'react';
import Slider from "react-slick";
import Navbar from "../../shared/Navbar/Navbar.js";
import DonateForm from '../DonateForm/DonateForm.js';
import './Header.css'
import sliderImage from '../../../images/Untitled-1.png'
function Header() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false
      };
    return (
        <>
        <Navbar></Navbar>
      <div>
        <Slider {...settings}>
          <div>
          <img className="slider-image" src={sliderImage}  alt="..."/>
          </div>
          <div>
          <img className="slider-image" src="https://pennyappeal.org/storage/app/media/appeals/thirst-relief/2020-banners/banners-wo-ramadan-cta/penny-appeal---muharram-21---thirst-relief---website---desktop-banner.jpg"  alt="..."/>
          </div>
          <div>
          <img className="slider-image" src="https://pennyappeal.org/storage/app/media/appeals/sadaqa-jariya/2020-banners/sadaqah-jariyah---desktop-website-banner.jpg" alt="..."/>
          </div>
          
        </Slider>
      </div>
      <DonateForm></DonateForm>
      </>
    );
  }


export default Header
