import React from "react";
import "./HeaderInfo.scss";
const HeaderInfo = () => {
  return (
    <div className="header-info">
      <div className="info-details">
        <h1>Give help, Share hope</h1>
        <p>
          There’s something in the eyes of a person who has received help in a
          time of desperation. A light — a hope. Al Manahil Foundation has an
          unstoppable drive to chase away the darkness of hunger and poverty.
          With your help, Al Manahil Foundation can do just that.
        </p>
      </div>
      <div className="donate-form">
        <div className="donate-type">
          <button className="active-button">Give Once</button>
          <button>Monthly</button>
        </div>
        <div className="form-details">
          <div className="form-header">
            <h3>Choose an amount give per month</h3>
          </div>
          <div className="form-body">
            <div className="amount-wrapper">
              <a>
                &#2547; 50 <span>BDT</span>
              </a>
              <a>
                &#2547; 100 <span>BDT</span>
              </a>
              <a className="active-button">
                &#2547; 500 <span>BDT</span>
              </a>
              <a>
                &#2547; 1000 <span>BDT</span>
              </a>
              <input type="text" placeholder="Custom Amount" />
            </div>
            <input type="button" value="Donate" />
            <div className="form-footer">
              <a>Give by check or stock</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
