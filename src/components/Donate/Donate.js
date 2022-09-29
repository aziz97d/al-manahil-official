import React from "react";
import Navbar from "../shared/Navbar/Navbar.js";
import "./Donate.scss";
import donateHeaderImage from "../../images/donatePageHeader.jfif";
import DonateForm from "../Home/DonateForm/DonateForm.js";
import { FaAmbulance } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import bKashPaymentLogo from '../../images/payment-logo/bKashPayment.png';
import bKashPersonalLogo from '../../images/payment-logo/bkash-logo.svg';

import _ from "lodash";
import OurProgress from "../Home/OurProgress/OurProgress.js";
const Donate = () => {
  return (
    <section className="donate-section">
      <Navbar />
      {/* <div className="donate-header">
        <img className="donate-header-image" src={donateHeaderImage} />
        <div className="header-overlay-text">
          <p>Raising Hope</p>
          <h1>
            To the Homeless & <br /> Hopeless People
          </h1>
        </div>
      </div> */}
      <div className="donate-header">
        <h1>Ways to Give</h1>
      </div>
      <ul className="org-info">
        <li>177 Sugodha R/A,Panchlaish,Chattogram</li>
        <li>+88018 8657 6775</li>
        <li>mail@amwfb.org</li>
        <li>Charity Reg No: 3023</li>
      </ul>

      <div className="payment-gateways">
      <div >
          <h3 className="upcomming">Up Comming Automated System.</h3>
        </div>
        <div className="payment-gateway">
          <div className="payment-logo">
            <AiFillBank className="payment-icon" />
            <div className="hr"></div>
          </div>
          <div className="payment-numbers">
            <h3>Bank Transfer <span>(Only for Bangladeshi Donation)</span></h3>
            <p>You can transfer money direct into our Donations Account at:</p>
            <div className="account-info">
              <p>Bank Name : <span>Janata Bank</span></p>
              <p>Account No : <span>0100132954202</span></p>
              <p>Account Name : <span>Al Manahil Welfare Foundation Bangladesh</span></p>
              <p>Branch :<span> Mimi Super Market Branch. Chattogram</span></p>
            </div>
          </div>
        </div>
        
        <div className="payment-gateway">
          <div className="payment-logo">
            <img src={bKashPersonalLogo} />
            <div className="hr"></div>
          </div>

          <div className="payment-numbers">
            <h3>bKash</h3>
            
            <div className="account-info">
              
              <p>Account No : <span>01886576775</span> / <span>01886576776</span></p>
              <p>Account Type : <span>Persoanl</span></p>
            </div>
          </div>
        </div>
        <div className="payment-gateway">
          <div className="payment-logo">
            <img src={bKashPaymentLogo} />
            <div className="hr"></div>
          </div>

          <div className="payment-numbers">
            <h3>bKash</h3>
            
            <div className="account-info">
              
              <p>Account No : <span>01785727920</span></p>
              <p>Account Type : <span>Merchant</span></p>
            </div>
          </div>
        </div>
        <div className="payment-gateway">
          <div className="payment-logo">
            <img src="https://i.ibb.co/ZzKNsck/Nagad-Horizontal-Logo-wine.png" />
            <div className="hr"></div>
          </div>

          <div className="payment-numbers">
            <h3>Nagad</h3>
            
            <div className="account-info">
              
              <p>Account No : <span>01886576775</span></p>
              <p>Account Type : <span>Persoanl</span></p>
            </div>
          </div>
        </div>
        <div className="payment-gateway">
          <div className="payment-logo">
            <img src="https://i.ibb.co/TMXyLT7/DBBL-Rocket-Vector-Logo-Converted-01.png" />
            <div className="hr"></div>
          </div>

          <div className="payment-numbers">
            <h3>Rocket</h3>
            
            <div className="account-info">
              <p>Account No : <span>018865767753</span></p>
              <p>Account Type : <span>Personal</span></p>
            </div>
          </div>
        </div>
        
        {/* <div className="payment-gateway">
          <div className="payment-logo">
            <img src="https://www.logo.wine/a/logo/BKash/BKash-bKash2-Logo.wine.svg" />
            <div className="hr"></div>
          </div>

          <div className="payment-numbers">
            <img
              src="https://i.ibb.co/44S9K8G/Merchant-accont-01.png"
              className="payment-number"
            />

            <img
              src="https://i.ibb.co/N2N82j9/b-Kash-75-01.png"
              className="payment-number"
            />
          </div>
        </div> */}
      </div>
      
      {/* <div className="donate-body">
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
        
      </div> */}
      <OurProgress isBackground={true} />
    </section>
  );
};

export default Donate;
