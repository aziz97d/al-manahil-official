import React from 'react'
import './DonateForm.scss'

export default function DonateForm() {
    return (
        <div className="donate-form">
            <div className="donate-form-text">
                <p>Donate to fund</p>
            </div>
            <div className="donate-input">
                <span className="taka-sign">&#2547;</span>
                <input type="text" />
            </div>
            <div className="donate-input">
                <select >
                    <option>Single</option>
                    <option>Monthly</option>
                </select>
            </div>
            <div className="donate-button">
                <a href='#' >Donate Now</a>
                <img src='https://pennyappeal.org/themes/pennyappeal/assets/images/zkpolicy.png' />
            </div>
        </div>
    )
}
