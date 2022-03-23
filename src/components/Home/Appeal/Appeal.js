import React, { useState } from "react";
import "./Appeal.scss";
import waterWell from "../../../images/card-image/Water Well.png";
import food from "../../../images/card-image/FOOD.png";
import mosque from "../../../images/card-image/MOSQUE.png";
import orphans from "../../../images/card-image/ORPHANS.png";
import qurbani from "../../../images/card-image/QURBANI.png";
import ramdan from "../../../images/card-image/RAMADAN.png";
import rohingya from "../../../images/card-image/ROHINGYA.png";
import ablution from "../../../images/card-image/ABLUTION.png";
import { Link, useParams } from "react-router-dom";
import data from "../../../data/AppealData.js";
function Appeal() {
  return (
    <section className="appeal-section">
      <div className="appeal-section-header">
        <h1>
          “<span>Charity </span> extinguishes the sins like water <br />{" "}
          extinguishes a <span> fire</span>”{" "}
        </h1>
        <p>(Ibn Majah)</p>
      </div>

      <div className="appeals">
        {data.map((appeal) => (
          <Link to={`/appealDetails/${appeal.appealId}`} className="appeal">
            <div className="appeal-sub">
              <img src={appeal["appealImage"]} />
              <p>
                <strong>{appeal["appealTitle"]}</strong>
                <br />
                <br />
                {appeal["appealDescription"]}
                {/* Otherwise, there is no alternative way for saving human life. Tube wells and deep tube wells are very beneficial for the water supply and by the virtue of which difficulty of water can be mitigated. */}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Appeal;
