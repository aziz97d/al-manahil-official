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
  FaLinkedinIn,
} from "react-icons/fa";
import { FaClock, FaArrowRight } from "react-icons/fa";
import "./SuccessStory.scss";

function SuccessStory() {

  return (
    <section className="success-story">
      <div className="success-story-left">
        <img
          className="success-story-left-img"
          src="https://themuslimkit.com/wp-content/uploads/2020/10/sadaqah-jariyah.jpg"
        />
        <div className="hadith-part">
          <h3>Earn Rewards Through Sadaqah</h3>
          <p>
            Believe in ALLAH and His messenger, and spend (in charity) out of
            the (substance) where of He has made you heirs. For, those of you
            who believe and spend (in charity), - for them is a great Reward
          </p>
          <p>
            <strong>Reference: </strong> Chapter (57) sūrat l-ḥadid, Verse 7
          </p>
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
              <FaFacebookF className="social-icon" />
            </a>
            <a
              className="social-link"
              target="_blank"
              href="https://twitter.com/amwfborg"
              rel="noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>

            <a
              className="social-link"
              target="_blank"
              href="https://www.youtube.com/channel/UCr7gpLwHDGS_vc0NIFU70Eg"
              rel="noreferrer"
            >
              <FaYoutube className="social-icon" />
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
              <img src="https://i.ibb.co/SdQp9C4/Water-Well.jpg" />
            </div>
            <div className="story-card-details">
              <p className="story-card-title">
                <strong>
                  Tubewell for five families of disabled in a water crisis.
                </strong>
              </p>
              <p className="story-card-news">
                Tubewell for five families of disabled in water crisis. About
                five helpless families, including physically challenged beggars,
                were in indescribable distress for water. Being a poor beggar
                class, it was not possible for them to provide proper water. No
                one but the sufferer will understand how difficult life becomes
                when one of the water of life is scarce. Al Manahil has arranged
                a soup tubewell for the helpless people. After a long time, the
                disabled beggar got a tubewell and started praying in the court
                of the great Lord. Helpless people pray from the bottom of their
                hearts whenever they use tubewells. And Allah Almighty will not
                return their prayers, InshaAllah. Al-Manahil receives news from
                countless families and communities who are constantly struggling
                for something as valuable as water. Water is needed in every
                moment of life. How difficult and indescribable is the condition
                of those who are in dire straits. If we can extend a hand of
                cooperation to those who can afford it, then it is possible to
                put a smile on the face of such helpless people. God will be
                pleased with you inshaAllah.
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
              <img src="https://i.ibb.co/hRgYFGy/289465816-3502950636612356-4377080412054784796-n.jpg" />
            </div>
            <div className="story-card-details">
              <p className="story-card-title">
                <strong>Bangladesh Flood Relief</strong>
              </p>
              <p className="story-card-news">
                North-eastern Bangladesh has been hit by the worst flooding in
                the region in more than 30 years, causing widespread destruction
                and impacting the lives of over 4 million people. At least 59
                people have lost their lives, and many more have been injured.
                Al Manahil Welfare Foundation works to provide immediate food to
                communities devastated by flooding. The world's largest
                humanitarian agency says millions of people are now in need of
                nutritious food and clean water.
              </p>
              <div className="story-card-footer">
                <p className="story-card-date">
                  {" "}
                  <FaClock className="date-icon" /> 10 June 2022
                </p>
                <a className="Read-more-btn">
                  Read More <FaArrowRight className="Read-more-icon" />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="story-card">
            <div className="story-card-img ">
              <img src="https://i.ibb.co/qMgd630/311344176-3594713114102774-2354506063942895491-n.jpg" />
            </div>
            <div className="story-card-details">
              <p className="story-card-title">
                <strong>
                  Distribution of Sewing Machines for Self Reliant Sustainable
                  Future
                </strong>
              </p>
              <p className="story-card-news">
                Sewing machines were distributed among 10 skilled and deprived
                deserving women in Rangamati
              </p>
              <div className="story-card-footer">
                <p className="story-card-date">
                  {" "}
                  <FaClock className="date-icon" /> 08 October 2022
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
