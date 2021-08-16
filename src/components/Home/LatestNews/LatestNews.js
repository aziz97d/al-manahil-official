import React from "react";
import "./LatestNews.scss";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";

function LatestNews() {
  return (
    <div className="latest-news">
      <div className="heading">
        <div className="causes-title">
          <p>What we can do?</p>
          <h1>Latest News.</h1>
        </div>
        <div className="causes-description">
          <p className="brandDescriptionTwo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            hic suscipit <br /> doloremque deleniti ipsa quia dolor laborum
            natus tenetur, excepturi?
          </p>
        </div>
      </div>
      <div className="news-list">
        <div className="news-card">
          <img
            src="http://html.kodesolution.live/html/nonprofit/charity/charitypress-html/v3.1/demo/images/project/1.jpg"
            alt=""
          />
          <div className="details">
            <div className="top">
              <div className="date">
                <p>28</p>
                <p>FEB</p>
              </div>
              <div className="news-info">
                <p>Post Title</p>
                <div className="activity">
                  <p>
                    <span>
                      {" "}
                      <AiOutlineComment />{" "}
                    </span>
                    214 Comments
                  </p>
                  <p>
                    <span>
                      {" "}
                      <AiOutlineLike />{" "}
                    </span>
                    214 Likes
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <p className="news-text">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisici consectetur adipisici elit. Illo,
                laudantium, accusantium impedit magnam nobis
              </p>
              <Link className="read-more-button">Read More </Link>
            </div>
          </div>
        </div>
        <div className="news-card">
          <img
            src="http://html.kodesolution.live/html/nonprofit/charity/charitypress-html/v3.1/demo/images/project/1.jpg"
            alt=""
          />
          <div className="details">
            <div className="top">
              <div className="date">
                <p>28</p>
                <p>FEB</p>
              </div>
              <div className="news-info">
                <p>Post Title</p>
                <div className="activity">
                  <p>
                    <span>
                      {" "}
                      <AiOutlineComment />{" "}
                    </span>
                    214 Comments
                  </p>
                  <p>
                    <span>
                      {" "}
                      <AiOutlineLike />{" "}
                    </span>
                    214 Likes
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <p className="news-text">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisici consectetur adipisici elit. Illo,
                laudantium, accusantium impedit magnam nobis
              </p>
              <Link className="read-more-button">Read More </Link>
            </div>
          </div>
        </div>
        <div className="news-card">
          <img
            src="http://html.kodesolution.live/html/nonprofit/charity/charitypress-html/v3.1/demo/images/project/1.jpg"
            alt=""
          />
          <div className="details">
            <div className="top">
              <div className="date">
                <p>28</p>
                <p>FEB</p>
              </div>
              <div className="news-info">
                <p>Post Title</p>
                <div className="activity">
                  <p>
                    <span>
                      {" "}
                      <AiOutlineComment />{" "}
                    </span>
                    214 Comments
                  </p>
                  <p>
                    <span>
                      {" "}
                      <AiOutlineLike />{" "}
                    </span>
                    214 Likes
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <p className="news-text">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisici consectetur adipisici elit. Illo,
                laudantium, accusantium impedit magnam nobis
              </p>
              <Link className="read-more-button">Read More </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
