import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons";
import "./Navbar.scss";
// import {
//   IoMailOutline,
//   IoLocationOutline,
//   IoCallOutline,
// } from "react-icons/io5";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  let navbarClasses = ["nav-container"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="navbar">
      <div className={navbarClasses.join(" ")}>
        <ul>
          <li>
            <Link className="nav-item">Home</Link>
          </li>
          <li>
            <Link className="nav-item">Features</Link>
          </li>
          <li>
            <Link className="nav-item">Get Involved</Link>
          </li>
          <li>
            <Link className="nav-item">Volunteer</Link>
          </li>
          <li>
            <Link className="nav-item">Portfolio</Link>
          </li>
          <li>
            <Link className="nav-item">Blog</Link>
          </li>
        </ul>

        <ul className="right-navbar">
          <li>
            <Link className="nav-item nav-button donate-button">Donate</Link>
          </li>
          <li>
            <Link className="nav-item nav-button sign-in-button">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
