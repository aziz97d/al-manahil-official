import React from 'react';
import Appeal from '../Home/Appeal/Appeal.js';
import DonateForm from '../Home/DonateForm/DonateForm.js';
import Footer from '../shared/Footer/Footer.js';
import Navbar from '../shared/Navbar/Navbar.js';

const OurProjects = () => {
    return (
        <section style={{background:'#E1ECF9'}}>
            <Navbar />
            <h1 style={{textAlign:'center', color:'#F57920'}}>Our Projects</h1>
            <hr />

            <Appeal />
            <Appeal />
            <Footer />
        </section>
    );
};

export default OurProjects;