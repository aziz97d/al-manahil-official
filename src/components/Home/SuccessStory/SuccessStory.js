import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaClock, FaArrowRight } from "react-icons/fa";
import "./SuccessStory.scss";

function SuccessStory() {
  return (
    <section className="success-story">
      <img  src="https://demo.artureanec.com/html/helpo/img/events_bg.png" className="image-bg-success" />
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
            <li className="social-icon">
              <AiFillFacebook />
            </li>
            <li className="social-icon">
              <AiFillYoutube />
            </li>
            <li className="social-icon">
              <AiFillInstagram />
            </li>
            <li className="social-icon">
              <AiFillTwitterSquare />
            </li>
          </ul>
        </div>

        <div className="story-list">
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
