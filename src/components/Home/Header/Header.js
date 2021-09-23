import React from 'react';
import Slider from "react-slick";
import Navbar from "../../shared/Navbar/Navbar.js";
import DonateForm from '../DonateForm/DonateForm.js';
import './Header.css'
import sliderImage from '../../../images/slider image.png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
          {/* <div className="slider-overlay"style={{backgroundImage:sliderImage}}>
            <div>
              <Link className="animated-donate-button">Donate Now 1 <FaArrowRight className="Read-more-icon" /> </Link>
            </div>
          </div> */}
          <div>
            <img className="slider-image" src="https://pennyappeal.org/storage/app/media/appeals/thirst-relief/2020-banners/banners-wo-ramadan-cta/penny-appeal---muharram-21---thirst-relief---website---desktop-banner.jpg"  alt="..."/>
          </div>
          <div>
          <img className="slider-image" src="https://pennyappeal.org/storage/app/media/appeals/sadaqa-jariya/2020-banners/sadaqah-jariyah---desktop-website-banner.jpg" alt="..."/>
          </div>
          
        </Slider>
      </div>
      <DonateForm isBackgroundColor={true} />
      </>
    );
  }


export default Header
