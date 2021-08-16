import React from "react";
import { Link } from "react-router-dom";
import "./LatestCauses.scss";

function LatestCauses() {
  return (
    <div className="latest-causes">
      <div className="heading">
        <div className="causes-title">
          <p>What we can do?</p>
          <h1>Latest Causes.</h1>
        </div>
        <div className="causes-description">
          <p className="brandDescriptionTwo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            hic suscipit <br /> doloremque deleniti ipsa quia dolor laborum
            natus tenetur, excepturi?
          </p>
        </div>
      </div>
      <div className="causes-list">
        <a class="cause-card">
          <div class="cause-card__img"></div>
          <div class="cause-card__caption">
            <h2 class="cause-card__caption__title">Food For All</h2>
            <p class="cause-card__caption__snippet">
              NASA released a list of 219 new “planet candidates” discovered by
              the Kepler space telescope, 10 of which are similar to Earth’s
              size and may be habitable by other life forms.
            </p>
            <a href="" class="cause-card__caption__button">
              Read more
            </a>
          </div>
        </a>
        <a class="cause-card">
          <div class="cause-card__img"></div>
          <div class="cause-card__caption">
            <h2 class="cause-card__caption__title">Water Well</h2>
            <p class="cause-card__caption__snippet">
              NASA released a list of 219 new “planet candidates” discovered by
              the Kepler space telescope, 10 of which are similar to Earth’s
              size and may be habitable by other life forms.
            </p>
            <a href="" class="cause-card__caption__button">
              Read more
            </a>
          </div>
        </a>
        <a class="cause-card">
          <div class="cause-card__img"></div>
          <div class="cause-card__caption">
            <h2 class="cause-card__caption__title">Orphans</h2>
            <p class="cause-card__caption__snippet">
              NASA released a list of 219 new “planet candidates” discovered by
              the Kepler space telescope, 10 of which are similar to Earth’s
              size and may be habitable by other life forms.
            </p>
            <a href="" class="cause-card__caption__button">
              Read more
            </a>
          </div>
        </a>

        <a class="cause-card">
          <div class="cause-card__img"></div>
          <div class="cause-card__caption">
            <h2 class="cause-card__caption__title">Mosque Projects</h2>
            <p class="cause-card__caption__snippet">
              NASA released a list of 219 new “planet candidates” discovered by
              the Kepler space telescope, 10 of which are similar to Earth’s
              size and may be habitable by other life forms.
            </p>
            <a href="" class="cause-card__caption__button">
              Read more
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}

export default LatestCauses;
