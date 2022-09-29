import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FaPhone,
  FaBars,
  FaShoppingBasket,
  FaRegUserCircle,
  FaArrowLeft,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn

} from "react-icons/fa";
import { FaClock, FaArrowRight } from "react-icons/fa";
import "./SuccessStory.scss";

function SuccessStory() {
  return (
    <section className="success-story">
      
    <div className="success-story-left" >
      <img className="success-story-left-img" src="https://themuslimkit.com/wp-content/uploads/2020/10/sadaqah-jariyah.jpg" />
      <div className="hadith-part">
        <h3>Earn Rewards Through sadaqah</h3>
        <p>
        Believe in ALLAH and His messenger, and spend (in charity) out of the (substance) where of He has made you heirs. For, those of you who believe and spend (in charity), - for them is a great Reward
        </p>
        <p><strong>Reference: </strong> Chapter (57) sūrat l-ḥadid, Verse 7</p>
      </div>
    </div>

      <div className="latest-success-story">
        <div className="success-story-header">
          <h3>Latest Success Story</h3>
          <ul className="nav-social-icons">
            
            <a
              className="social-link"
              target="_blank"
              href="https://www.facebook.com/amwfborg"
              rel="noreferrer"
            >
              <FaFacebookF className="social-icon"  />
            </a>
            <a
              className="social-link"
              target="_blank"
              href="https://twitter.com/amwfborg"
              rel="noreferrer"
            >
              <FaTwitter className="social-icon"  />
            </a>
           
            <a
              className="social-link"
              target="_blank"
              href="https://www.youtube.com/channel/UCr7gpLwHDGS_vc0NIFU70Eg"
              rel="noreferrer"
            >
              <FaYoutube className="social-icon"  />
            </a>
            <a
              className="social-link"
              target="_blank"
              href="https://www.linkedin.com/company/amwfborg/"
              rel="noreferrer"
            >
              <FaLinkedinIn className="social-icon" />
            </a>
          </ul>
        </div>

        <div className="story-list">
          <div className="story-card">
            <div className="story-card-img ">
              <img src="https://i.ibb.co/6Y8XTQW/Lag-pataient-01.png" />
            </div>
            <div className="story-card-details">
              <p className="story-card-title">
                <strong>
                Saving Mr. Minhaj’s leg
                </strong>
              </p>
              <p className="story-card-news">
              Mr. Minhaj used to run his family by selling fruits in different passenger cars. But an accident stopped his life. He lost his right leg in an accident while selling fruits in a jeep.
The daily income of Mr. Minhaj was enough to feed the whole family including seven children. But the family fell into financial straits after the lone master was killed in the accident.
It is almost impossible to afford your own medicine at this time of misery. The board of Al-Manahil, seeing Mr. Minhaj's condition, decided to place a prosthetic leg and complete all his medical work.
Al-Manahil has thus sided with countless helpless people. Hundreds of thousands of the poor have been in danger.
              </p>
              <div className="story-card-footer">
                <p className="story-card-date">
                  {" "}
                  <FaClock className="date-icon" /> 10 June 2021
                </p>
                <a className="Read-more-btn">
                  Read More <FaArrowRight className="Read-more-icon" />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="story-card">
            <div className="story-card-img ">
              <img src="https://i.ibb.co/SdQp9C4/Water-Well.jpg" />
            </div>
            <div className="story-card-details">
              <p className="story-card-title">
                <strong>
                Tubewell for five families of disabled  in a water crisis.
                </strong>
              </p>
              <p className="story-card-news">
              Tubewell for five families of disabled in water crisis.
About five helpless families, including physically challenged beggars, were in indescribable distress for water. Being a poor beggar class, it was not possible for them to provide proper water. No one but the sufferer will understand how difficult life becomes when one of the water of life is scarce.
Al Manahil has arranged a soup tubewell for the helpless people. After a long time, the disabled beggar got a tubewell and started praying in the court of the great Lord. Helpless people pray from the bottom of their hearts whenever they use tubewells. And Allah Almighty will not return their prayers, InshaAllah.
Al-Manahil receives news from countless families and communities who are constantly struggling for something as valuable as water. Water is needed in every moment of life. How difficult and indescribable is the condition of those who are in dire straits. If we can extend a hand of cooperation to those who can afford it, then it is possible to put a smile on the face of such helpless people. God will be pleased with you inshaAllah.
              </p>
              <div className="story-card-footer">
                <p className="story-card-date">
                  {" "}
                  <FaClock className="date-icon" /> 10 June 2021
                </p>
                <a className="Read-more-btn">
                  Read More <FaArrowRight className="Read-more-icon" />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="story-card">
            <div className="story-card-img ">
              <img src="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg" />
            </div>
            <div className="story-card-details">
              <p className="story-card-title">
                <strong>
                  Gambia Statement - children safe and case has been suspended
                </strong>
              </p>
              <p className="story-card-news">
                Gambia Statement - children safe and case has been suspended
                Gambia Statement - children safe and case has been suspended
              </p>
              <div className="story-card-footer">
                <p className="story-card-date">
                  {" "}
                  <FaClock className="date-icon" /> 10 June 2021
                </p>
                <a className="Read-more-btn">
                  Read More <FaArrowRight className="Read-more-icon" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStory;
