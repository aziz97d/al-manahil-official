import React from 'react';
import './Appeal.scss';
import waterWell from '../../../images/card-image/Water Well.png'
import food from '../../../images/card-image/FOOD.png'
import mosque from '../../../images/card-image/MOSQUE.png'
import orphans from '../../../images/card-image/ORPHANS.png'
import qurbani from '../../../images/card-image/QURBANI.png'
import ramdan from '../../../images/card-image/RAMADAN.png'
import rohingya from '../../../images/card-image/ROHINGYA.png'
import ablution from '../../../images/card-image/ABLUTION.png'
import { Link } from 'react-router-dom';
function Appeal() {

    return (
        <section className="appeal-section">
            {/* <>  */}
                <Link to="/appealDetails"  className="appeal">
                    <div className="appeal-sub" style={{borderBottom: "3px solid #00AD50"}}>
                        <img src={waterWell}/>
                        
                        <p><strong>Water Well</strong>
                    <br/>In this world, drinking water is the most essential thing for human life during day and night. 
                    {/* Otherwise, there is no alternative way for saving human life. Tube wells and deep tube wells are very beneficial for the water supply and by the virtue of which difficulty of water can be mitigated. */}
                    </p>
                    </div>
                </Link>
            {/* </Link> */}
            <div className="appeal">
            <div className="appeal-sub" style={{borderBottom: "3px solid #F57920"}}>
                    <img src={food}/>
                    
                    <p><strong>Food</strong>
                   <br/>Donate your sadaqah online today to make a real difference for someone in need. </p>
                </div>
            </div>
            <div className="appeal">
                <div className="appeal-sub" style={{borderBottom: "3px solid #00AD50"}}>
                    <img src={ablution}/>
                    
                    <p><strong>Ablution</strong>
                   <br/>
                   The necessity of toilets/bathrooms is profound in the life of mankind during day and night as these are necessary for natural waste excretion as well as for bathing, ablution, and cleanliness purposes.
                    {/* By this, social environment and discipline are maintained. There are many poor and helpless people who suffer difficulty from era to era due to their financial inability, but no way or measure is found to relieve their difficulty. */}
                   </p>
                </div>
            </div>
            <div className="appeal">
            <div className="appeal-sub" style={{borderBottom: "3px solid #F57920"}}>
                    <img src={mosque}/>
                    
                    <p><strong>Mosque</strong>
                   <br/>To construct a Masjid of Allah is the best construction project in the world.
                    {/* Considering each particle of sand in such construction, there are unimaginable nobilities and many virtues. Construction of Masjid is a very important function in the life of the Muslim community wherein the Muslim will perform their daily prayer as well as Zikir, Dua and Dorud.  */}
                   </p>
                </div>
            </div>

            <div className="appeal">
                <div className="appeal-sub" style={{borderBottom: "3px solid #00AD50"}}>
                    <img src={orphans}/>
                    
                    <p><strong>Orphans</strong>
                   <br/>   Build a well in the name of Prophet's Mohammad (saw) family </p>
                </div>
            </div>
            <div className="appeal">
            <div className="appeal-sub" style={{borderBottom: "3px solid #F57920"}}>
                    <img src={qurbani}/>
                    
                    <p><strong>Hospital</strong>
                   <br/>Donate your sadaqah online today to make a real difference for someone in need. </p>
                </div>
            </div>
            <div className="appeal">
                <div className="appeal-sub" style={{borderBottom: "3px solid #00AD50"}}>
                    <img src={ramdan}/>
                    
                    <p><strong>Ramadan</strong>
                   <br/>The month Ramadan is a great gift for the Muslim nation from Allah. In one hand a golden chance for gaining virtue awaits and on the other hand there are great means for forgiving sins in the month of Ramadan. There is a golden chance for gaining virtues by performing multifaceted welfare activities including worship, prayer, zikir, du'a, dorud etc.</p>
                </div>
            </div>
            <div className="appeal">
            <div className="appeal-sub" style={{borderBottom: "3px solid #F57920"}}>
                    <img src="https://pennyappeal.org/storage/app/media/appeals/sadaqah/pa---website---sadaqah---websitethumbnail.jpg"/>
                    
                    <p><strong>Sadaqah</strong>
                   <br/>Donate your sadaqah online today to make a real difference for someone in need. </p>
                </div>
            </div>
        </section>
    )
}

export default Appeal
