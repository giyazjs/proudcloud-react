import React from "react";
import './security.scss'
import Securityimg from '../../assets/images/security.svg'

export const Security = () => {
    return (
        <div className="container">
            <div className="security">
                <div className="security__left">
                    <h3 className="security__left-h3">DDoS Protection</h3>
                    <p className="security__left-p">Managing is difficult work. Indeed harder on the off chance that you do not utilize computer program or have work spread over as well numerous devices. It's simple to lose track of all the extreme to remain up to date.</p>
                </div>  
                <div className="security__right">
                    <img src={Securityimg} alt="" />
                </div>
            </div>
        </div>
    )
}