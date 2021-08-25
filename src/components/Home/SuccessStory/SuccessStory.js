import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FaClock, FaArrowRight
} from "react-icons/fa";
import './SuccessStory.scss'

function SuccessStory() {
    return (
        <section className='success-story'>
            <div className="media-coverage">
              <h3>Media Coverage</h3>
                <div className="media-card-list">
                    <div className="media-card">
                      <div className="media-card-body">
                              <img className="media-card-image" src="https://basmah-bd.org/wp-content/uploads/2021/04/Banglatribune.png" />
                            
                            <div className="media-card-details">
                                <h4>Manahil Activity In Covid-19</h4>
                                <p>img elements must have text, or an empty string for decorative imagesimg elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                            </div>

                      </div>
                      <div className="media-card-footer">
                      <a className="media-card-download">Download PDF</a>
                        <Link className="media-card-read-more">Read More</Link>
                      </div>
                    </div>
                    <div className="media-card">
                      <div className="media-card-body">
                              <img className="media-card-image" src="https://basmah-bd.org/wp-content/uploads/2021/04/Banglatribune.png" />
                            
                            <div className="media-card-details">
                                <h4>Manahil Activity In Covid-19</h4>
                                <p>img elements must have text, or an empty string for decorative imagesimg elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                            </div>

                      </div>
                      <div className="media-card-footer">
                      <a className="media-card-download">Download PDF</a>
                        <Link className="media-card-read-more">Read More</Link>
                      </div>
                    </div>
                
                </div>
  
            </div>
            <div className="latest-success-story">
              <div className="success-story-header">
                <h3>Latest Success Story</h3>
                <ul className="nav-social-icons">
                  <li className="social-icon"><AiFillFacebook /></li>
                  <li className="social-icon"><AiFillYoutube /></li>
                  <li className="social-icon"><AiFillInstagram /></li>
                  <li className="social-icon"><AiFillTwitterSquare/></li>
                </ul>
              </div>
            
              <div className="story-list">
              <div className="story-card">
                  <div className="story-card-img ">
                    <img src="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg" />
                  </div>
                  <div className="story-card-details">
                    <p className="story-card-title"><strong>Gambia Statement - children safe and case has been suspended</strong></p>
                    <p className="story-card-news">Gambia Statement - children safe and case has been suspended Gambia Statement - children safe and case has been suspended</p>
                    <div className="story-card-footer">
                      <p className="story-card-date"> <FaClock className="date-icon" /> 10 June 2021</p>
                      <a className="Read-more-btn">Read More <FaArrowRight className="Read-more-icon" /> </a>
                    </div>
                  </div>

                </div>
                <div className="story-card">
                  <div className="story-card-img ">
                    <img src="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg" />
                  </div>
                  <div className="story-card-details">
                    <p className="story-card-title"><strong>Gambia Statement - children safe and case has been suspended</strong></p>
                    <p className="story-card-news">Gambia Statement - children safe and case has been suspended Gambia Statement - children safe and case has been suspended</p>
                    <div className="story-card-footer">
                      <p className="story-card-date"> <FaClock className="date-icon" /> 10 June 2021</p>
                      <a className="Read-more-btn">Read More <FaArrowRight className="Read-more-icon" /> </a>
                    </div>
                  </div>

                </div>
                <div className="story-card">
                  <div className="story-card-img ">
                    <img src="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg" />
                  </div>
                  <div className="story-card-details">
                    <p className="story-card-title"><strong>Gambia Statement - children safe and case has been suspended</strong></p>
                    <p className="story-card-news">Gambia Statement - children safe and case has been suspended Gambia Statement - children safe and case has been suspended</p>
                    <div className="story-card-footer">
                      <p className="story-card-date"> <FaClock className="date-icon" /> 10 June 2021</p>
                      <a className="Read-more-btn">Read More <FaArrowRight className="Read-more-icon" /> </a>
                    </div>
                  </div>

                </div>
              
              </div>
            
            </div>
        </section>
    )
}

export default SuccessStory
