import React from "react";
import Footer from "../../shared/Footer/Footer";
import Appeal from "../Appeal/Appeal.js";
import ConnectUs from "../ConnectUs/ConnectUs";
import Header from "../Header/Header.js";
import LatestCauses from "../LatestCauses/LatestCauses";
import LatestNews from "../LatestNews/LatestNews";
import OurPartner from "../OurPartner/OurPartner.js";
import OurProgress from "../OurProgress/OurProgress";
import SuccessStory from "../SuccessStory/SuccessStory.js";
import WhoWeAre from "../WhoWeAre/WhoWeAre.js";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Appeal></Appeal>
      {/* <ConnectUs></ConnectUs> */}

      {/* <LatestCauses></LatestCauses> */}
      {/* <WhoWeAre></WhoWeAre> */}
      <OurProgress></OurProgress>
      <SuccessStory></SuccessStory>
      <OurPartner></OurPartner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
