import React from "react";
import Navbar from "../shared/Navbar/Navbar.js";
import "./Donate.scss";
import donateHeaderImage from "../../images/donatePageHeader.jfif";
import DonateForm from "../Home/DonateForm/DonateForm.js";
import { FaAmbulance } from "react-icons/fa";
import _ from "lodash";
import OurProgress from "../Home/OurProgress/OurProgress.js";
const Donate = () => {
  return (
    <section className="donate-section">
      <Navbar />
      <div className="donate-header">
        <img className="donate-header-image" src={donateHeaderImage} />
        <div className="header-overlay-text">
          <p>Raising Hope</p>
          <h1>
            To the Homeless & <br /> Hopeless People
          </h1>
        </div>
      </div>
      <div className="donate-body">
        <div className="donate-body-info">
          <p>Welcome to Al Manahil Welfare Foundation</p>
          <h2>We Helped More Than Millions To Get Their </h2>
          <div className="we-helped-cards">
            {_.times(4, (i) => (
              <div className="we-helped-card">
                <FaAmbulance className="we-helped-card-icon" />
                <h4>Heath Care</h4>
              </div>
            ))}
          </div>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
            <br />
            <br />A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div className="donate-form-info">
          <DonateForm isDirectionColumn={true} isNameEmailShow={true} />
        </div>
        
      </div>
      <OurProgress />
    </section>
  );
};

export default Donate;
