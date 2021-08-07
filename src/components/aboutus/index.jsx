import React from 'react'
import { GreenButton } from '../GreenButton'
import AboutusImg from '../../assets/images/photoMain.svg'
import './aboutus.scss'

export const Aboutus = () => {
    return(
        <div className="aboutus">
            <div className="container">
                <div className="aboutus__inner">
                    <div className="aboutus__left">
                        <h1 className="aboutus__left-title">Fast & Unlimited Web Hosting</h1>
                        <p className="aboutus__left-desc">The best web hosting service with the most complete hosting features and 24-hour support for your business convenience</p>
                        <GreenButton />
                    </div>
                    <div className="aboutus__right">
                        <img src={AboutusImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}