import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
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
              <div class="blog-card">
                <div class="meta">
                  <div class="photo" style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"}}></div>
                  <ul class="details">
                    <li class="author"><a href="#">John Doe</a></li>
                    <li class="date">Aug. 24, 2015</li>
                    <li class="tags">
                      <ul>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">Code</a></li>
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="description" style={{borderRight: "3px solid #00AD50"}}>
                  <h5 style={{color: "#00AD50"}}>Learning to Code</h5>
                  <p className="news-details"> Lorem ipsum dolor sit  Neque ad aliquam facilis numquam  Neque ad aliquam facilis numquam Neque ad aliquam facilis numquam  Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                  <p class="read-more">
                    <a href="#" style={{color: "#0F95A9"}}>Read More</a>
                  </p>
                </div>
              </div>
              <div class="blog-card">
                <div class="meta">
                  <div class="photo" style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"}}></div>
                  <ul class="details">
                    <li class="author"><a href="#">John Doe</a></li>
                    <li class="date">Aug. 24, 2015</li>
                    <li class="tags">
                      <ul>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">Code</a></li>
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="description" style={{borderRight: "3px solid #F57920"}}>
                  <h5 style={{color: "#F57920"}}>Learning to Code Learning to Code Learning to Code</h5>
                  <p className="news-details"> Lorem ipsum dolor sit  Neque ad aliquam facilis numquam  Neque ad aliquam facilis numquam Neque ad aliquam facilis numquam  Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                  <p class="read-more">
                    <a href="#" style={{color: "#F57920"}}>Read More</a>
                  </p>
                </div>
              </div>
              <div class="blog-card">
                <div class="meta">
                  <div class="photo" style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"}}></div>
                  <ul class="details">
                    <li class="author"><a href="#">John Doe</a></li>
                    <li class="date">Aug. 24, 2015</li>
                    <li class="tags">
                      <ul>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">Code</a></li>
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="description" style={{borderRight: "3px solid #00AD50"}}>
                  <h5 style={{color: "#00AD50", '&5:after':{background:'#00AD50'}}}>Learning to Code</h5>
                  <p className="news-details"> Lorem ipsum dolor sit  Neque ad aliquam facilis numquam  Neque ad aliquam facilis numquam Neque ad aliquam facilis numquam  Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                  <p class="read-more">
                    <a href="#" style={{color: "#00AD50"}}>Read More</a>
                  </p>
                </div>
              </div>
  
              </div>
            
            </div>
        </section>
    )
}

export default SuccessStory
