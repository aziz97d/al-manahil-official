import React from "react";
import founder from "../../../images/speech/Jamir-Uddin-Rh..jpg";
import chairman from "../../../images/speech/Chairman.jpg";
import avarter from "../../../images/speech/avarter.webp";
import "./Speech.scss";
function Speech() {
  return (
    <div className="speech-container">
      <div className="section-header">
        <h1>
          <span>Speech</span>
        </h1>
        <p>speech of visionaries</p>
      </div>
      <div className="speech-list">
        <figure class="speech-card">
          <img src={founder} alt="profile-sample5" class="profile" />
          <figcaption>
            <h2>Late Allama Jamir Uddin (Rh.)</h2>
            <h4>Founder</h4>
            <blockquote>
              Prophet Muhammad (SAW), said: “A crafty one, a miser, and one who
              keeps reminding people of what he has given, will not enter
              Paradise.” (Tirmidhi).{" "}
            </blockquote>
          </figcaption>
        </figure>
        <figure class="speech-card">
          <img src={chairman} alt="profile-sample5" class="profile" />
          <figcaption>
            <h2>Helal Uddin</h2>
            <h4>Chairman</h4>
            <blockquote>
            We are trying our heart and soul to support the underprivileged society of Bangladesh.{" "}
            </blockquote>
          </figcaption>
        </figure>
        <figure class="speech-card">
          <img src={avarter} alt="profile-sample5" class="profile" />
          <figcaption>
            <h2>Farid Uddin</h2>
            <h4>CEO</h4>
            <blockquote>
              Prophet Muhammad (SAW), said: “A crafty one, a miser, and one who
              keeps reminding people of what he has given, will not enter
              Paradise.” (Tirmidhi).{" "}
            </blockquote>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Speech;
