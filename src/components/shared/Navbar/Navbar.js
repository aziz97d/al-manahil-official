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

import { useTranslation, Trans } from 'react-i18next';
const lngs = {
  en: { nativeName: 'English' },
  bn: { nativeName: 'বাংলা' }
};
function Navbar() {
  const {t, i18n} = useTranslation();
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

  function handleChange(e){
    i18n.changeLanguage(e.target.value)
  }  
  return (
    <div>
    <div className="navbar">
      <div id="nav-top" className="nav-top"> 
        <div className="contact-info">
          <p>24/7 DONATION HOTLINE <span><FaPhone /></span> 03000 11 11 11</p>
        </div>
        <div>
        <select onChange={handleChange}>
                <option value="en">ENG</option>
                <option value="bn">বাংলা</option>
                <option value="ar">عربي</option>
              </select>
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
            <Link to="/home" className="nav-item">{t('menu.home')}</Link>
          </li>
          <li>
            <Link className="nav-item">{t('menu.aboutUs')}</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-item">{t('menu.ourProjects')}</Link>
          </li>
          <li>
            <Link className="nav-item">{t('menu.contactUs')}</Link>
          </li>
          <li>
            <Link className="nav-item brand-orange-button">{t('buttons.donate')}</Link>
          </li>
          <div className="nav-feature">
            <Link className="nav-icon-button"><FaRegUserCircle /></Link>
            <Link className="nav-icon-button"><FaShoppingBasket /></Link>
          </div>
        </ul>

      </div>

      </div>

      {/* --------- Mobile Responsive Menu Start-------- */}
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
            <Link to="/home" className="nav-item">{t('menu.home')}</Link>
          </li>
          <li>
            <Link className="nav-item">{t('menu.aboutUs')}</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-item">{t('menu.ourProjects')}</Link>
          </li>
          <li>
            <Link className="nav-item">{t('menu.contactUs')}</Link>
          </li>
          <li>
            <Link className="nav-item brand-orange-button">{t('buttons.donate')}</Link>
          </li>
        </ul>
        
        <div className="nav-feature">
            <Link className="nav-icon-button"><FaRegUserCircle /></Link>
            <Link className="nav-icon-button"><FaShoppingBasket /></Link>
        </div>
      </div>
      {/* --------- Mobile Responsive Menu Start-------- */}
    
      </div>
  );
}

export default Navbar;
