import React, { useEffect, useRef, useState } from 'react';
import DonateForm from '../DonateForm/DonateForm.js';
import './FixedForm.scss';

const FixedForm = () => {
    const showForm = useRef(null);
    const [isShowMenu,setIsShowMenu] = useState(false)
    const [scrolled,setScrolled] = useState(false)
    const handleButton = () =>{
            if(isShowMenu){
                showForm.current.style.bottom = "-335px";
                setIsShowMenu(false)
            }else{
                showForm.current.style.bottom ='0';
                setIsShowMenu(true)
            }
        
         
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 600) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        
        
        if(showForm.current){
            if(scrolled){
                showForm.current.style.display = "block";
            }else{
                showForm.current.style.display = "none";
            }
        }
        
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return (
        <div ref={showForm} className="fixed-form">
            <div className="fixed-form-donate-button"><button onClick={handleButton}>Donate Now</button></div>
            <DonateForm isBackgroundColor={true} />
        </div>
    );
};

export default FixedForm;