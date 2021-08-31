import React from 'react'
import './DonateForm.scss'

export default function DonateForm() {
    return (
        <div className="donate-form">
            <div className="donate-form-text">
                <p>Donate to fund</p>
            </div>
            <div className="donate-form-body">
                <input type="text" placeholder="&#2547;"/>
                <select >
                    <option>Single</option>
                    <option>Monthly</option>
                </select>
                <select >
                    <option>Where Most Need</option>
                    <option>Zakat</option>
                    <option>No More Hunger</option>
                    <option>Water For Life</option>
                    <option>Orphans And Needy Children</option>
                </select>
                <input type="button" value="Donate" />
                
                <div className="donate-form-img">
                    <img  src='https://pennyappeal.org/themes/pennyappeal/assets/images/zkpolicy.png' />
                </div>
                
            </div>
            
        </div>
    )
}
