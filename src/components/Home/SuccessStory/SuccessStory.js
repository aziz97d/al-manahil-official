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
      <div className="media-coverage">
        <h3>Media Coverage</h3>
        <div className="media-card-list">
          <div className="media-card">
            <div className="media-card-body">
              <img
                className="media-card-image"
                style={{ background: "#345153" }}
                src="https://tbsnews.net/sites/all/themes/sloth/banner.png"
              />

              <div className="media-card-details">
                <h4>
                  Al Manahil distributes relief worth Tk16cr amid pandemic
                </h4>
                <p>
                  Al Manahil Welfare Foundation Bangladesh, a nonprofit
                  humanitarian aid and solidarity organisation, extended their
                  helping hands to the marginalised community during the ongoing
                  Covid-19 global pandemic in Bangladesh.
                </p>
              </div>
            </div>
            <div className="media-card-footer">
              <a className="media-card-download">Download PDF</a>
              <a
                className="media-card-read-more"
                target="_blank"
                href="https://www.tbsnews.net/coronavirus-chronicle/covid-19-bangladesh/al-manahil-distributes-relief-worth-tk16cr-amid-pandemic"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="media-card">
            <div className="media-card-body">
              <img
                className="media-card-image"
                src="https://img.thedailystar.net/sites/all/themes/sloth/logo.svg"
              />

              <div className="media-card-details">
                <h4>They too deserve a dignified burial</h4>
                <p>
                  With deaths due to Covid-19 rising in Chattogram, bereaved
                  families are facing yet another grim reality -- not being able
                  to bury their loved ones with full rituals due to the fear of
                  exposing themselves to the virus. In many cases, families and
                  community members have not been able to attend the funeral
                  prayers either because of physical distancing measures or due
                  to fear of the infection.{" "}
                </p>
              </div>
            </div>
            <div className="media-card-footer">
              <a className="media-card-download">Download PDF</a>
              <a
                className="media-card-read-more"
                target="_blank"
                href="https://www.thedailystar.net/city/news/they-too-deserve-dignified-burial-1910745"
              >
                Read More
              </a>
            </div>
          </div>
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
