import React from "react";
import { Link } from "react-router-dom";
import "./ConnectUs.scss";

import { connectUsData } from "./connectUsData";
import ConnectUsItem from "../ConnectUsItem/ConnectUsItem";

function ConnectUs() {
  return (
    <div className="connect-us">
      <h1>Join the movement.</h1>
      <p>
        Your kindness helps create brighter futures for communities and families
        across the world.
      </p>
      <div className="top">
        {connectUsData.map((data) => (
          <ConnectUsItem data={data}></ConnectUsItem>
        ))}
      </div>
    </div>
  );
}

export default ConnectUs;
