import React from 'react'
import './support.scss'
import Supimg from '../../assets/images/supp.svg'

export const Support = () => {
    return ( 
        <div className="container">
            <div className="support">
                <div className="support__left">
                    <img src={Supimg} alt="" />
                </div>
                <div className="support__right">
                    <h4 className="support__right-h4">24/7 Support</h4>
                    <p className="support__right-p">Managing is difficult work. Indeed harder on the off chance that you do not utilize computer program or have work spread over as well numerous devices. It's simple to lose track of all the extreme to remain up to date.</p>
                </div>
            </div>
        </div>
    )
}