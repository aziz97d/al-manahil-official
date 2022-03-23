import React from "react";
import "./OurProgress.scss";
import CountUp from "react-countup";
import {
  GiSelfLove,
  GiLoveLetter,
  GiClover,
  GiFirstAidKit,
} from "react-icons/gi";
import { FaMosque, FaHouseDamage, FaClock, FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import ProgressList from "./ProgressList.js";

function OurProgress({ isBackground }) {
  return (
    <div>
      <div
        style={{ backgroundColor: isBackground ? "" : "#fff" }}
        className="our-progress"
      >
        <h2>Our Progress</h2>
        <p>
          We are dedicated to improving lives and building a future for poor
          children around the world. Here’s the progress we’ve made since we
          started working in 1999.
        </p>

        <>
          <ProgressList />
        </>
        {isBackground && (
          <Link className="Read-more-btn button-info">
            View More <FaArrowRight className="Read-more-icon" />{" "}
          </Link>
        )}
      </div>
      {isBackground && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 200">
          <path
            fill="#E1ECF9"
            fill-opacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,122.7C672,128,768,192,864,186.7C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      )}
    </div>
  );
}

export default OurProgress;
