import React from 'react'
import './rocket.scss'
import Rocketimg from '../../assets/images/rocket-img.svg'

export const Rocket = () => {
    return (
        <div className="container">
            <div className="rocket">
                <div className="rocket__left">
                    <img src={Rocketimg} alt="" />
                </div>
                <div className="rocket__right">
                    <div className="rocket__right-h2">Load Fast your Site</div>
                    <div className="rocket__right-p">Managing is difficult work. Indeed harder on the off chance that you do not utilize computer program or have work spread over as well numerous devices. It's simple to lose track of all the extreme to remain up to date.</div>
                </div>
            </div>
        </div>
    )
}