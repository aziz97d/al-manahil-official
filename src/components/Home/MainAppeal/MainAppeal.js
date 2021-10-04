import React from "react";
import { AiFillHeart, AiOutlineAudioMuted, AiOutlineTaobaoCircle } from "react-icons/ai";
import { FaDonate, FaHeart, FaHospital, FaMosque, FaWallet, FaWater } from "react-icons/fa";
import { GiWell } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./MainAppeal.scss";

const MainAppeal = () => {
  return (
    <section className="main-appeal">
      <div className="main-appeal-card">
        <AiFillHeart className="main-appeal-card-icon" />
        <h2>COVID 19 Crisis</h2>
        <p>Your content goes here. Edit or remove this text inline or in .</p>
        <Link className="main-appeal-card-button">
          Donate <FaWallet className="button-icon" />{" "}
        </Link>
      </div>
      <div className="main-appeal-card">
        <FaHospital className="main-appeal-card-icon" />
        <h2>Hospital</h2>
        <p>Your content goes here. Edit or remove this text inline or in .</p>
        <Link className="main-appeal-card-button">
          Donate <FaWallet className="button-icon" />{" "}
        </Link>
      </div>
      <div className="main-appeal-card">
        <GiWell className="main-appeal-card-icon" />
        <h2>Water Well</h2>
        <p>Your content goes here. Edit or remove this text inline or in .</p>
        <Link className="main-appeal-card-button">
          Donate <FaWallet className="button-icon" />{" "}
        </Link>
      </div>
      <div className="main-appeal-card">
        <FaMosque className="main-appeal-card-icon" />
        <h2>Mosque</h2>
        <p>Your content goes here. Edit or remove this tasdasdaaa ext inline or in .</p>
        <Link className="main-appeal-card-button">
          Donate <FaWallet className="button-icon" />{" "}
        </Link>
      </div>
    </section>
  );
};

export default MainAppeal;
