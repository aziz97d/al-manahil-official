import React from 'react'
import './OurPartner.scss'
import Slider from "react-slick";
import { partnerData } from './partnerData.js';
import OurPartnerItem from '../OurPartnerItem/OurPartnerItem.js';

function OurPartner() {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
    };
    return (
        <div className="p-slider">
            <h2> Trusted Partners Worldwide </h2>
            <p>We are very greatful and feel honoured to our all partners for being with us</p>
            <Slider  {...settings}>
                {
                    partnerData.map( data => <OurPartnerItem data={data}></OurPartnerItem>)
                }
                
            </Slider>
        </div>
    )
}

export default OurPartner
