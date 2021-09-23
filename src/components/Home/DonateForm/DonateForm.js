import React from 'react'
import './DonateForm.scss'
import jkPolicy from '../../../images/zkpolicyManahil.png'

export default function DonateForm({isBackgroundColor}) {
    return (
        <div style={{backgroundColor: isBackgroundColor ? '#00ad51a2': '#fff'}} className="donate-form">
            <div style={{backgroundColor : isBackgroundColor ? '#00AD50' : '#fff', color: isBackgroundColor ? '#fff' : '#00AD50'}} className="donate-form-text">
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
                    <img  src={jkPolicy} />
                </div>
                
            </div>
            
        </div>
    )
}
