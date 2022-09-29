import React from "react";
import CountUp from "react-countup";
import {
  GiSelfLove,
  GiLoveLetter,
  GiClover,
  GiFirstAidKit,
} from "react-icons/gi";
import { FaMosque, FaHouseDamage, FaClock, FaArrowRight } from "react-icons/fa";
import { GiWaterTank } from "react-icons/gi";

const ProgressList = () => {
  return (
    <div className="progress-list">
      <div className="our-progress-item">
        <FaHouseDamage className="icon" />
        <h1>
          <CountUp end={50} duration={4} />+
        </h1>
        <p>Shelter Houses</p>
      </div>
      <div className="our-progress-item">
        <GiWaterTank className="icon" />
        <h1>
          <CountUp end={5000} duration={4} />+
        </h1>
        <p>Water well</p>
      </div>
      <div className="our-progress-item">
        <GiClover className="icon" />
        <h1>
          <CountUp end={500} duration={4} />
          K+
        </h1>
        <p>Beneficiaries</p>
      </div>
      <div className="our-progress-item">
        <FaMosque className="icon" />
        <h1>
          <CountUp end={100} duration={4} />+
        </h1>
        <p>Mosque</p>
      </div>
    </div>
  );
};

export default ProgressList;
