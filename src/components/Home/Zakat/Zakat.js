import React, { useState } from "react";
import "./Zakat.scss";
import { Link, useParams } from "react-router-dom";
//import data from "../../../data/AppealData.js";
import Zakalculator from '../../../images/zakat calculator.png';
import zakatPay from '../../../images/Zakat pay.png';
import zakatTips from '../../../images/ZAKATTIPS.png';
function Zakat() {
    const data = [
        {
            "cardDataId":"01",
            "title":"Calculate Your Zakat",
            "description":"Our Handy Tools Makes It Easy",
            "image":"https://i.ibb.co/THc932N/zakat-calculator.png"
        },
        {
            "cardDataId":"02",
            "title":"Pay Your Zakat",
            "description":"Give to our eligible Project",
            "image":"https://i.ibb.co/zQwjRRd/Zakat-pay.png"
        },
        {
            "cardDataId":"03",
            "title":"Zakat Tips",
            "description":"Everything You need to know",
            "image":"https://i.ibb.co/GMphksf/ZAKATTIPS.png"
        },
    ]
  return (
    <section className="zakat-section">
      <div className="section-header">
        <h1>
          <span>Your Zakat </span> 
        </h1>
        <p>All you need to fulfil the third pillar</p>
      </div>

      <div className="zakat-cards">
        {data.map((cardData) => (
          <Link to={`/appealDetails/${cardData.appealId}`} className="zakat-card">
            <div className="appeal-sub">
              <div className="card-image-div"><img src={cardData.image} /></div>
              <h3><strong>{cardData.title}</strong></h3>
              <p>
                {cardData.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Zakat;
