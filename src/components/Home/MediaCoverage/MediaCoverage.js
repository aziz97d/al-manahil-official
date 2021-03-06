import React from "react";
import './MediaCoverage.scss'
import { AiOutlineEye, AiOutlineCalendar } from "react-icons/ai";

const MediaCoverage = () => {
  return (
    <section className="media-coverage-section">
      <div className="section-header">
        
        <h1>
          <span>Media Coverage</span> 
        </h1>
        <p>News</p>
      </div>

      <div className="news-card-list">
        <a href="https://www.thedailystar.net/city/news/they-too-deserve-dignified-burial-1910745" target="_blank" className="news-card">
            <div className="news-card-body">
              <div className="card-image-div">
                <img src="https://www.tbsnews.net/sites/default/files/styles/very_big_1/public/images/2021/06/28/picture_al_manahil.jpg?itok=Ro6YGMH9" /></div>
              <p className="news-category">Food Distribution</p>
              <h4>Al Manahil distributes relief worth Tk16cr amid pandemic</h4>
              <p>
              It, so far, distributed around 80,000 relief packets with various food items among the people in need
              </p>
            </div>
            <div className="news-card-footer">
                <p> <AiOutlineCalendar /> 28 Jun 2021</p>
                <p> <AiOutlineEye /> 500</p>
            </div>  
          </a>

          <a href="https://www.tbsnews.net/coronavirus-chronicle/covid-19-bangladesh/al-manahil-distributes-relief-worth-tk16cr-amid-pandemic" target="_blank" className="news-card">
            <div className="news-card-body">
              <div className="card-image-div">
                <img src="https://images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/body-covid-19-deceased-graveyard.jpg?itok=D6GqHthg&timestamp=1591552688" /></div>
              <p className="news-category">COVID - 19</p>
              <h4>They too deserve a dignified burial</h4>
              <p>
              Al Manahil Welfare Foundation Bangladesh, a nonprofit humanitarian aid and solidarity organisation, extended their helping hands to the marginalised community during the ongoing Covid-19 global pandemic in Bangladesh.
              </p>
            </div>
            <div className="news-card-footer">
                <p> <AiOutlineCalendar /> 23 Jan 2019</p>
                <p> <AiOutlineEye /> 500</p>
            </div>  
          </a>
          <a href="https://www.kalerkantho.com/print-edition/islamic-life/2020/06/23/926255" target="_blank" className="news-card">
            <div className="news-card-body">
              <div className="card-image-div"><img src="https://www.kalerkantho.com/assets/news_images/2020/06/23/0007045_kalerkantho-2020-22-pic-6.jpg" /></div>
              <p className="news-category">COVID - 19</p>
              <h4>?????????????????????????????? ?????????????????????????????? ?????? ?????????????????????</h4>
              <p>
              ??????????????????????????? ???????????? ??????????????????????????? ????????? ???????????? ????????????????????? ?????????????????? ?????? ?????????????????? ??????????????? ?????????????????? ??????????????? ?????????????????????????????? ?????????????????????????????? ?????????????????? ??? ?????????????????? ???????????? ???????????? ??????????????? ????????????????????? ???????????? ????????? ?????????????????? ?????? ???????????? ?????? ?????????????????? ???????????? ??????????????? ???????????????????????? ??????????????? ?????????????????? ?????????????????? ?????? ????????????????????? ??????????????????????????? ?????????????????????????????? ????????????????????????????????? ????????????????????? ???????????? ????????????????????? ????????? ?????????????????????????????? (??????.)-?????? ?????????????????? ???????????????????????? ???????????????????????? ??????????????????
              </p>
            </div>
            <div className="news-card-footer">
                <p> <AiOutlineCalendar />  23 Jun 2020</p>
                <p> <AiOutlineEye /> 500</p>
            </div>  
          </a>

          
          <a href="https://www.prothomalo.com/bangladesh/district/%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%BE%E0%A6%A8%E0%A6%BE%E0%A7%9F-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%93-%E0%A6%AE%E0%A7%83%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A7%81%E2%80%93%E0%A6%B8%E0%A6%82%E0%A6%AC%E0%A6%BE%E0%A6%A6-%E0%A6%AA%E0%A7%87%E0%A6%B2%E0%A7%87%E0%A6%87-%E0%A6%9B%E0%A7%8B%E0%A6%9F%E0%A7%87%E0%A6%A8-%E0%A6%A4%E0%A6%BE%E0%A6%81%E0%A6%B0%E0%A6%BE" target="_blank" className="news-card">
            <div className="news-card-body">
              <div className="card-image-div"><img src="https://images.prothomalo.com/prothomalo%2Fimport%2Fmedia%2F2020%2F05%2F19%2F99178a07b579a587ae05455170775aef-5ec39216b364e.jpg?auto=format%2Ccompress&format=webp&w=300&dpr=1.3" /></div>
              <p className="news-category">COVID - 19</p>
              <h4>????????????????????? ???????????? ??????????????????-??????????????? ??????????????? ??????????????? ???????????????</h4>
              <p>
              ??????????????????????????????????????? ?????? ?????????????????? ???????????? ???????????? ????????? ???????????????????????? ??????-?????? ???????????? ???????????? ???????????????????????????????????? ????????? ????????????????????? ???????????????????????? ????????? ?????????????????? ?????????????????? ????????????????????? ????????? ??????????????? ?????????????????? ?????????????????????????????? ?????????????????? ???????????? ????????????????????? ????????????????????? ??????????????? ??????????????? ????????? ?????????????????? ????????? ?????????????????????????????????????????? ???????????? ???????????? ????????? ?????????????????????????????? ??????????????? ????????????????????? ???????????? ????????? ??????????????? ????????? ??????????????? ??????????????? ??????????????? ?????? ??????????????? ???????????? ??????????????? ??????????????? ?????????????????? ????????????????????? ???????????? ??????????????? ????????????????????? ???????????????????????? ??????????????? ????????????????????? ?????????????????? ?????????????????? ???????????????
              </p>
            </div>
            <div className="news-card-footer">
                <p> <AiOutlineCalendar /> 19 May 2020</p>
                <p> <AiOutlineEye /> 500</p>
            </div>  
          </a>
      </div>
    </section>
  );
};

export default MediaCoverage;
