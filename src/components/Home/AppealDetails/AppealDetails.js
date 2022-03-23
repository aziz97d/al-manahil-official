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
    header,
    subInfoFirst,
    subInfoSecond,
    infoDetails,
    successHeader,
    successInfo,
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
          <h1>{appealHeaderTitle}</h1>
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
        <div className="appeal-details-our-success">
          <div className="our-partner p-slider">
            <h2> Our Success </h2>
            <p>We are in whole bangladesh, where there is needy there is we</p>
            <Slider {...settings}>
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
        </div>

        <div className="appeal-gallery">
          <iframe
            className="appeal-video"
            src="https://www.youtube.com/embed/yPxMOzN0Uq4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="appeal-gallery-images">
            <div className="image">
              <img
                alt=""
                src="https://o.aolcdn.com/hss/storage/midas/f93cbb3ab53cf5a87b60ff63d317b9a6/203490061/CF024162.jpg"
              />
            </div>
            <div className="image">
              <img
                alt=""
                src="https://muslimcharity.org.uk/wp-content/uploads/2017/04/IMG_7731_001.jpg"
              />
            </div>
            <div className="image">
              <img
                alt=""
                src="https://o.aolcdn.com/hss/storage/midas/f93cbb3ab53cf5a87b60ff63d317b9a6/203490061/CF024162.jpg"
              />
            </div>
            <div className="image">
              <img
                alt=""
                src="https://muslimcharity.org.uk/wp-content/uploads/2017/04/IMG_7731_001.jpg"
              />
            </div>
            <div className="image">
              <img
                alt=""
                src="https://o.aolcdn.com/hss/storage/midas/f93cbb3ab53cf5a87b60ff63d317b9a6/203490061/CF024162.jpg"
              />
            </div>
            <div className="image">
              <img
                alt=""
                src="https://muslimcharity.org.uk/wp-content/uploads/2017/04/IMG_7731_001.jpg"
              />
            </div>
            <div className="image">
              <img
                alt=""
                src="https://muslimcharity.org.uk/wp-content/uploads/2017/04/IMG_7731_001.jpg"
              />
            </div>
            <div className="image">
              <img
                alt=""
                src="https://muslimcharity.org.uk/wp-content/uploads/2017/04/IMG_7731_001.jpg"
              />
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default AppealDetails;
