import React from "react";
import Footer from "../../shared/Footer/Footer";
import Appeal from "../Appeal/Appeal.js";
import FixedForm from "../FixedForm/FixedForm.js";
import Header from "../Header/Header.js";
import MainAppeal from "../MainAppeal/MainAppeal.js";
import MediaCoverage from "../MediaCoverage/MediaCoverage";
import OurPartner from "../OurPartner/OurPartner.js";
import OurProgress from "../OurProgress/OurProgress";
import SuccessStory from "../SuccessStory/SuccessStory.js";
import Zakat from "../Zakat/Zakat";
import "./Home.scss"

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <div className="home-bg-div"> */}
      {/* <MainAppeal /> */}
      <img  src="https://demo.artureanec.com/html/helpo/img/events_bg.png" className="image-bg-success" />
      <Appeal></Appeal>
      {/* <ConnectUs></ConnectUs> */}
      {/* <LatestCauses></LatestCauses> */}
      {/* <WhoWeAre></WhoWeAre> */}
     
      {/* <OurProgress isBackground={true}></OurProgress> */}
      {/* </div> */}
      <img  src="https://demo.artureanec.com/html/helpo/img/events_bg.png" className="image-bg-success" />
      <SuccessStory></SuccessStory>
      <MediaCoverage></MediaCoverage>
      {/* <Zakat></Zakat> */}
      {/* <OurPartner></OurPartner> */}
      <Footer></Footer>
      <FixedForm />
    </div>
  );
};

export default Home;
