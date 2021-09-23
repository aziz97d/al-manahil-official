import React from 'react';
import './AppealDetails.scss';
import Slider from "react-slick";
import DonateForm from '../DonateForm/DonateForm.js';
import Navbar from '../../shared/Navbar/Navbar.js';
import headerImage from '../../../images/water picture.jpg'
import Footer from '../../shared/Footer/Footer.js';
const AppealDetails = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        infinite:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        
    };
    return (
        <>
        <Navbar />
        <section>
            <div className="appeal-details-header" > 
                <img src={headerImage}  alt=""/>
                <h1>Water For Life</h1>
            </div>
            <DonateForm isBackgroundColor={false} />
            <div className="appeal-details-body">
                <h1>Give Water, Saves life</h1>
                {/* <img className="zk-policy" src={zkPolicy} alt=""/> */}
                <p>Globally, <span>785 MILLION</span> people lack access to clean water.<br/><br/>

At least <span>2 BILLION</span> people in the world get their water from contaminated sources.<br/><br/>

Drinking dirty water can cause diseases such as cholera, typhoid and diarrhoea, which kills millions of people every year. In many parts of the world, women and children walk for hours across dangerous terrain in search of water. The water they are able to find is often dirty, carrying disease. Nobody should have to live like this. Help us make fresh, clean water accessible to everyone; build a well with your donation today to save countless lives through our Water For Life appeal.</p>
            </div>
            <div className="appeal-details-our-success">
            
        <div className="our-partner p-slider">
            <h2> Our Success </h2>
            <p>We are in whole bangladesh, where there is needy there is we</p>
            <Slider  {...settings}>
                <div className="p-slider-item">
                    <h2>12000</h2>
                    <p>Water Well Installed</p>
                </div>
                <div className="p-slider-item">
                    <h2>1200</h2>
                    <p>Electric Water Well Installed</p>
                </div>
                <div className="p-slider-item">
                    <h2>150K</h2>
                    <p>Daily cleaned water well beneficiares</p>
                </div>
                <div className="p-slider-item">
                    <h2>500</h2>
                    <p>School base water projects</p>
                </div>
            
                
            </Slider>
        </div>
        <div>
            
        </div>

            </div>
            <Footer/>
        </section>
        </>
    );
};

export default AppealDetails;