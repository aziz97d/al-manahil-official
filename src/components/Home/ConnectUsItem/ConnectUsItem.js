import React from 'react'
import './ConnectUsItem.scss'

import { GiSelfLove, GiLoveLetter, GiClover, GiFirstAidKit } from "react-icons/gi";
import { Link } from 'react-router-dom';
function ConnectUsItem(props) {
    const { title, description, icon, buttonTitle } = props.data;

    const setIcon = (iconName) => {
        switch (iconName) {
            case "GiLoveLetter": return <GiLoveLetter className="icon" />
            case "GiClover": return <GiClover className="icon" />
            case "GiFirstAidKit": return <GiFirstAidKit className="icon" />
            default: return <GiSelfLove className="icon" />
        }
    }
    return (
        <div className="connect-us-item">
            <h4>{title}</h4>
            <p>{description}</p>
            <Link>{buttonTitle}</Link>
            {
                setIcon(icon)
            }
        </div>
    )
}
export default ConnectUsItem
