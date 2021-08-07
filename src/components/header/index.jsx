import React from 'react';
import './header.scss'
import Logo from '../../assets/images/logo.png';
import Trash from '../../assets/images/basket.svg'

export const Header = () => {
    return (
        <header className="header container">
            <div className="header__left">
                <div className="image__logo">
                <img src={Logo} />
                </div>
            <ul className="header__nav">
                <li className="header__nav-list">Domain</li>
                <li className="header__nav-list">Hosting</li>
                <li className="header__nav-list">Website</li>
                <li className="header__nav-list">Pricing</li>
                <li className="header__nav-list">Affiliate</li>
            </ul>
            </div>
            <div className="header__right">
                <div className="header__right-trash">
                    <img src={Trash} />
                </div>
                <div className="header__right-btn">Sign in</div>
            </div>
        </header>
    )
}

