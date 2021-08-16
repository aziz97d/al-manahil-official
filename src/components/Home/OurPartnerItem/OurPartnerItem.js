import React from 'react'

function OurPartnerItem(props) {
    const {img} = props.data;
    return (
        <div className="p-slider-item">
            <img src={img} />
        </div>
    )
}

export default OurPartnerItem
