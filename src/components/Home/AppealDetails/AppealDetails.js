import React from "react";
import "./AppealDetails.scss";
import Slider from "react-slick";
import DonateForm from "../DonateForm/DonateForm.js";
import Navbar from "../../shared/Navbar/Navbar.js";
import headerImage from "../../../images/water picture.jpg";
import Footer from "../../shared/Footer/Footer.js";
import { useParams } from "react-router";
import appealData from "../../../data/AppealData.js";
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  let { appealId } = useParams();
  const {
    appealHeaderImageUrl,
    appealHeaderTitle,
    appealHeaderSubtitle,
    header,
    subInfoFirst,
    subInfoSecond,
    infoDetails,
    successHeader,
    successInfo,
    isSuccessList,
    successList,
    video,
    images,
  } = appealData.find((appeal) => appeal.appealId === appealId);
  // console.log(appeal);
  return (
    <>
      <Navbar />
      <section>
        <div className="appeal-details-header">
          <img src={appealHeaderImageUrl} alt="" />
          <h1>{appealHeaderTitle} <br/>
          <span>{appealHeaderSubtitle}</span></h1>
        </div>
        <DonateForm isBackgroundColor={false} />
        <div className="appeal-details-body">
          <h1>{header}</h1>
          {/* <img className="zk-policy" src={zkPolicy} alt=""/> */}
          <p>
            Globally, <span>785 MILLION</span> people lack access to clean
            water.
            <br />
            <br />
            At least <span>2 BILLION</span> people in the world get their water
            from contaminated sources.
            <br />
            <br />
            {infoDetails}
          </p>
        </div>
        {
              isSuccessList && (
                <div className="appeal-details-our-success">
          <div className="our-partner p-slider">
            <h2> Our Success </h2>
            <p>We are in whole bangladesh, where there is needy there is we</p>
            
            <Slider {...settings}>
              {
                successList.map((data)=>(
                  <div className="p-slider-item">
                    <h2>{data.beneficiaryAmount}</h2>
                    <p>{data.beneficiaryTitle}</p>
                  </div>
                ))
              }
              {/* <div className="p-slider-item">
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
              </div> */}
            </Slider>
          </div>
        </div>
              )
        }
        

        <div className="appeal-gallery">
          <iframe
            className="appeal-video"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="appeal-gallery-images">
            {
              images.map((img)=>(
              <div className="image">
              <img
                alt=""
                src={img.imageUrl}
              />
            </div>
              ))
            }
            
            
            
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default AppealDetails;
