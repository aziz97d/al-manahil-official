import React from "react";
import Footer from "../../shared/Footer/Footer";
import Appeal from "../Appeal/Appeal.js";
import ConnectUs from "../ConnectUs/ConnectUs";
import Header from "../Header/Header.js";
import LatestCauses from "../LatestCauses/LatestCauses";
import LatestNews from "../LatestNews/LatestNews";
import OurProgress from "../OurProgress/OurProgress";
import SuccessStory from "../SuccessStory/SuccessStory.js";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Appeal></Appeal>
      <ConnectUs></ConnectUs>

      <LatestCauses></LatestCauses>
      <OurProgress></OurProgress>
      <LatestNews></LatestNews>
      <SuccessStory></SuccessStory>
      <Footer></Footer>
    </div>
  );
};

export default Home;
