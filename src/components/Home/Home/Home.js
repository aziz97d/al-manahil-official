import React from "react";
import Footer from "../../shared/Footer/Footer";
import Appeal from "../Appeal/Appeal.js";
import FixedForm from "../FixedForm/FixedForm.js";
import Header from "../Header/Header.js";
import MainAppeal from "../MainAppeal/MainAppeal.js";
import OurPartner from "../OurPartner/OurPartner.js";
import OurProgress from "../OurProgress/OurProgress";
import SuccessStory from "../SuccessStory/SuccessStory.js";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <MainAppeal />
      <Appeal></Appeal>
      {/* <ConnectUs></ConnectUs> */}
      {/* <LatestCauses></LatestCauses> */}
      {/* <WhoWeAre></WhoWeAre> */}
      <OurProgress></OurProgress>
      <SuccessStory></SuccessStory>
      <OurPartner></OurPartner>
      <Footer></Footer>
      <FixedForm/>
    </div>
  );
};

export default Home;
