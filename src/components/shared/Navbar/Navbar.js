import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from './../../../images/amwfb logo (2).png'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import {FaPhone,FaBars,FaShoppingBasket} from "react-icons/fa";

import "./Navbar.scss";
// import {
//   IoMailOutline,
//   IoLocationOutline,
//   IoCallOutline,
// } from "react-icons/io5";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  let navbarClasses = ["is-show-nav"];
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

  useEffect(() =>{
    //isShowed prevent multiple times call useEffect
    let isShowed = false;

    const navUl = document.getElementById('nav-ul');
    const navRight = document.getElementById('nav-right');
    const navBottom = document.getElementById('nav-bottom');
    const navBtn = document.getElementById('nav-btn');
    navBtn.addEventListener('click', ()=>{

      if(!isShowed){
        navUl.classList.toggle('show-menu');
        navRight.classList.toggle('show-menu');
        navBottom.classList.toggle('show-menu');
        
      }
      
      return;
    });

    return () =>{
      isShowed = true;
    }
  })

  

  
  return (
    <div className={navbarClasses.join(" ")}>
    <div className="navbar">
    <div id="nav-bottom" className="nav-bottom"> 
        <div className="contact-info">
          <p>24/7 DONATION HOTLINE <span><FaPhone /></span> 03000 11 11 11</p>
        </div>
          <ul className="nav-social-icons">
            <li className="social-icon"><AiFillFacebook /></li>
            <li className="social-icon"><AiFillYoutube /></li>
            <li className="social-icon"><AiFillInstagram /></li>
            <li className="social-icon"><AiFillTwitterSquare/></li>
          </ul>
      </div>

      <div className="nav-container">
      <div className='brand-logo'>
          <img src={logo} />
        </div>
        <button id="nav-btn" className="nav-bar">
        <FaBars  />
        </button>
        <ul id="nav-ul" className="nav-ul">
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

        <ul id="nav-right" className="nav-right">
          <li>
            <Link className="nav-item nav-button donate-button">Donate</Link>
          </li>
          <li>
            <Link className="nav-item nav-button sign-in-button">Sign In</Link>
          </li>
          <li>
            <FaShoppingBasket className="nav-item" />
          </li>
        </ul>
      
      </div>
      </div>
    </div>
  );
}

export default Navbar;
