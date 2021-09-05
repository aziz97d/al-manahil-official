import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from './../../../images/amwfb logo (2).png'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineClose
} from "react-icons/ai";
import {FaPhone,FaBars,FaShoppingBasket,FaRegUserCircle,FaArrowLeft} from "react-icons/fa";
import "./Navbar.scss";
import "./ResponsiveNavbar.scss"

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  let navbarClasses = ["nav-container"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 200) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
    
  // });

  useEffect(() =>{
    //isShowed prevent multiple times call useEffect
    let isShowed = false;

    const navUl = document.getElementById('nav-ul');
    // const navRight = document.getElementById('nav-right');
    const navTop = document.getElementById('nav-top');
    const navBtn = document.getElementById('nav-btn');
    const navCloseBtn = document.getElementById('nav-close-btn');
    navBtn.addEventListener('click', ()=>{

      if(!isShowed){
        // navUl.classList.toggle('show-menu');
        // // navRight.classList.toggle('show-menu');
        // navTop.classList.toggle('show-menu');
        openNav()
      }
      return;
    });
    navCloseBtn.addEventListener('click', ()=>{

      if(!isShowed){
        // navUl.classList.toggle('show-menu');
        // // navRight.classList.toggle('show-menu');
        // navTop.classList.toggle('show-menu');
        closeNav()
      }
      return;
    });
    

    return () =>{
      isShowed = true;
    }
    function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    }
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    
  })

  return (
    <div>
    <div className="navbar">
      <div id="nav-top" className="nav-top"> 
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

      <div className={navbarClasses.join(" ")}>
        <div className='brand-logo'>
          <img src={logo} />
        </div>
        
        <button id="nav-btn" onclick="openNav()" className="nav-bar nav-show-icon">
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
          <li>
            <Link className="nav-item nav-button donate-button">Donate</Link>
          </li>
          <li>
            <Link className="nav-item nav-icon"><FaRegUserCircle /></Link>
          </li>
          <li>
          <Link className="nav-item nav-icon"><FaShoppingBasket /></Link>
          </li>
        </ul>

      </div>

      </div>
      <div id="mySidenav" class="sidenav">
        <div className="nav-bar-close">

          <button id="nav-close-btn">
            <FaArrowLeft  />
          </button>
        </div>
      <div className='sidenav__logo'>
          <img src={logo} />
        </div>
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
        <Link className="nav-item brand-orange-button">Donate</Link>
        <div className="nav-feature">
            <Link className="nav-icon-button"><FaRegUserCircle /></Link>
            <Link className="nav-icon-button"><FaShoppingBasket /></Link>
        </div>
      </div>
    
      </div>
  );
}

export default Navbar;
