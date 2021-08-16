import React from "react";
import "./OurProgress.scss";

import {
  GiSelfLove,
  GiLoveLetter,
  GiClover,
  GiFirstAidKit,
} from "react-icons/gi";
import { Link } from "react-router-dom";

function OurProgress() {
  return (
    <div>
      <div className="our-progress">
        <h2>Our Progress</h2>
        <p>
          We are dedicated to improving lives and building a future for poor
          children around the world. Here’s the progress we’ve made since we
          started working in 1999.
        </p>

        <div className="progress-list">
          <div className="our-progress-item">
            <GiClover className="icon" />
            <h1>3000+</h1>
            <p>Shelter Houses and Counting</p>
          </div>
          <div className="our-progress-item">
            <GiClover className="icon" />
            <h1>3000+</h1>
            <p>Shelter Houses and Counting</p>
          </div>
          <div className="our-progress-item">
            <GiClover className="icon" />
            <h1>3000+</h1>
            <p>Shelter Houses and Counting</p>
          </div>
          <div className="our-progress-item">
            <GiClover className="icon" />
            <h1>3000+</h1>
            <p>Shelter Houses and Counting</p>
          </div>
        </div>
        <Link className="button-info">View More</Link>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#b1d3e4"
          fill-opacity="1"
          d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,122.7C672,128,768,192,864,186.7C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default OurProgress;
