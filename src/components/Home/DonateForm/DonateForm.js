import React from "react";
import "./DonateForm.scss";
import jkPolicy from "../../../images/zkpolicyManahil.png";

export default function DonateForm({
  isBackgroundColor,
  isDirectionColumn,
  isNameEmailShow,
}) {
  return (
    <div
      style={{
        backgroundColor: isBackgroundColor ? "#5DCB90" : "transparent",
        gridTemplateColumns: isDirectionColumn ? "1fr" : "1.3fr 4fr",
      }}
      className="donate-form"
    >
      <div
        style={{
          backgroundColor: isBackgroundColor ? "#00AD50" : "transparent",
          color: isBackgroundColor ? "#fff" : "#00AD50",
        }}
        className="donate-form-text"
      >
        <p>Donate to fund</p>
      </div>
      <div
        style={{
          gridTemplateColumns: isDirectionColumn
            ? "1fr"
            : "1fr 2fr 2fr 2fr 2fr",
        }}
        className="donate-form-body"
      >
        {isNameEmailShow && (
          <>
            <input
              style={{ marginBottom: isNameEmailShow && "12px" }}
              type="text"
              placeholder="Your Name"
            />
            <input
              style={{ marginBottom: isNameEmailShow && "12px" }}
              type="text"
              placeholder="Your Email"
            />
          </>
        )}

        <input
          style={{ marginBottom: isNameEmailShow && "12px" }}
          type="text"
          placeholder="&#2547; Amount"
        />
        <select style={{ marginBottom: isNameEmailShow && "12px" }}>
          <option>Single</option>
          <option>Monthly</option>
        </select>
        <select style={{ marginBottom: isNameEmailShow && "12px" }}>
          <option>Where Most Need</option>
          <option>Zakat</option>
          <option>No More Hunger</option>
          <option>Water For Life</option>
          <option>Orphans And Needy Children</option>
        </select>
        <input
          style={{ marginBottom: isNameEmailShow && "12px" }}
          type="button"
          value="Donate"
        />
        
        {/* <div
          style={{ marginTop: isDirectionColumn ? "50px" : "" }}
          className="donate-form-img"
        >
          <img src={jkPolicy} alt="" />
        </div> */}
      </div>
    </div>
  );
}
