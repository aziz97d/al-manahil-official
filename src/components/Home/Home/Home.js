import React from "react";
import Footer from "../../shared/Footer/Footer";
import ConnectUs from "../ConnectUs/ConnectUs";
import Header from "../Header/Header";
import LatestCauses from "../LatestCauses/LatestCauses";
import LatestNews from "../LatestNews/LatestNews";
import OurProgress from "../OurProgress/OurProgress";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <ConnectUs></ConnectUs>

      <LatestCauses></LatestCauses>
      <OurProgress></OurProgress>
      <LatestNews></LatestNews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
