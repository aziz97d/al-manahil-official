import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import "./SuccessStory.scss";
import successStoryData from "../../data/SuccessStoryData";
const SuccessStory = () => {

  return (
    <section className="ramadan-section">
      {/* <Navbar /> */}
      <div className="ramada-header">
        <h1>Success Story</h1>
        <p>Helping could change the world for one person</p>
      </div>
      <div class="ramadan-projects">
        {
          successStoryData.map(data =>(
            <div class="complete-project-card-dc">
          <img
            src={data.image}
            class="cpc-image-dc"
            alt=""
          />
          <div class="cpc-body-dc">
            <h4 class="bangla-title-font">{data.title} </h4>
            <p class="bangla-text-font">
              {data.description}
            </p>
            <a href="#" class="bangla-text-font">
              See More...
            </a>
          </div>
        </div>
          ))
        }
        <div class="complete-project-card-dc">
          <img
            src="https://i.ibb.co/L9wVYvS/ifter-for-needy-2.jpg"
            class="cpc-image-dc"
            alt=""
          />
          <div class="cpc-body-dc">
            <h4 class="bangla-title-font">Iftar for needy </h4>
            <p class="bangla-text-font">
              Iftar helps to create a peaceful atmosphere in Ramadan. This is a
              special blessing from God for mankind. It is not only a duty to
              observe, but also a joy.
            </p>
            <a href="#" class="bangla-text-font">
              See More...
            </a>
          </div>
        </div>
        <div class="complete-project-card-dc">
          <img
            src="https://i.ibb.co/4Yhz83g/Food-Pack.jpg"
            class="cpc-image-dc"
            alt=""
          />
          <div class="cpc-body-dc">
            <h4 class="bangla-title-font">
              Appeal for Ramadan Food Package to needy families
            </h4>
            <p class="bangla-text-font">
              ‘Abdullah ibn ‘Amr (r.A.) said, “A man asked the Prophet (ﷺ),
              “Which aspect of Islam is best?” He said, “feeding people and
              greeting those you know and those you do not know.” [Sahih
              Bukhari]
            </p>
            <a href="#" class="bangla-text-font">
              See More...
            </a>
          </div>
        </div>
        <div class="complete-project-card-dc">
          <img
            src="https://i.ibb.co/p2WxTMn/Sewing-Maching.jpg"
            class="cpc-image-dc"
            alt=""
          />
          <div class="cpc-body-dc">
            <h4 class="bangla-title-font">
              Self-employment can be a sewing machine
            </h4>
            <p class="bangla-text-font">
              Sewing machines are provided to the backward people of the society
              through the small effort of cotton to make them self-reliant
              through Al Manahil's self-help project.
            </p>
            <a href="#" class="bangla-text-font">
              See More...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
