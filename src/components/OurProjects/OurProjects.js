import React from "react";
import Appeal from "../Home/Appeal/Appeal.js";
import Footer from "../shared/Footer/Footer.js";
import Navbar from "../shared/Navbar/Navbar.js";

const OurProjects = () => {
  return (
    <section className="ramadan-section">
      {/* <Navbar /> */}
      <div className="ramada-header">
        <h1>Appeals </h1>
        <p>Helping could change the world for one person</p>
      </div>
      <div class="ramadan-projects">
        <Appeal></Appeal>
      </div>
    </section>
  );
};

export default OurProjects;
