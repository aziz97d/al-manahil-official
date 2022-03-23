import React from "react";
import {
  AiFillHeart,
  AiOutlineAudioMuted,
  AiOutlineTaobaoCircle,
} from "react-icons/ai";
import {
  FaAmbulance,
  FaDonate,
  FaHeart,
  FaHospital,
  FaMosque,
  FaWallet,
  FaWater,
} from "react-icons/fa";
import { GiWell, GiAmbulance } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./MainAppeal.scss";

const MainAppeal = () => {
  return (
    <section className="main-appeal">
      <div className="main-appeal-card">
        <FaAmbulance className="main-appeal-card-icon" />
        <h2>COVID 19 Crisis</h2>
        <p>
          The world has never faced a crisis like COVID-19. The pandemic is
          impacting communities everywhere. Help us save lives and reduce the
          impact of COVID-19
        </p>
        <Link to="/donate" className="main-appeal-card-button">
          Donate <FaWallet className="button-icon" />{" "}
        </Link>
      </div>
      <div className="main-appeal-card">
        <FaHospital className="main-appeal-card-icon" />
        <h2>Hospital</h2>
        <p>
          Your financial gifts empower us to heal patients, transform pediatric
          healthcare and one day, end childhood disease.
        </p>
        <Link to="/donate" className="main-appeal-card-button">
          Donate <FaWallet className="button-icon" />{" "}
        </Link>
      </div>
      <div className="main-appeal-card">
        <GiWell className="main-appeal-card-icon" />
        <h2>Water Well</h2>
        <p>
          Water is the key to all life: Nearly every single living organism
          needs water to survive. Yet across the globe, one in three people do
          not have access to clean water (UNICEF, WHO).
        </p>
        <Link to="/donate" className="main-appeal-card-button">
          Donate <FaWallet className="button-icon" />{" "}
        </Link>
      </div>
      <div className="main-appeal-card">
        <FaMosque className="main-appeal-card-icon" />
        <h2>Mosque</h2>
        <p>
          "I heard the Messenger of Allah (saw) say: 'Whoever builds a masjid
          (mosque) in which the Name of Allah is mentioned, Allah will build a
          house for him in Paradise.'" (Sahih)
        </p>
        <Link to="/donate" className="main-appeal-card-button">
          Donate <FaWallet className="button-icon" />{" "}
        </Link>
      </div>
    </section>
  );
};

export default MainAppeal;
