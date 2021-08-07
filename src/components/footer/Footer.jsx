import './Footer.scss' 
import Logo from '../../assets/images/logo.png';
import YouTubeIcon from '../../assets/images/yt.png';
import TwitterIcon from '../../assets/images/twitter.png';
import InstIcon from '../../assets/images/inst.png';
import FacebookIcon from '../../assets/images/facebook.png';






export const Footer = () => {
    return (
        <div> 
                <div className="container">
            <div className="footer">
                    <div className="footer__left">
                        <div className="footer__log">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="networks">
                        <div className="network">
                            <img src={YouTubeIcon} alt="" />
                        </div>
                        <div className="network">
                        <img src={TwitterIcon} alt="" />
                        </div>
                        <div className="network">
                        <img src={InstIcon} alt="" />
                        </div>
                        <div className="network">
                        <img src={FacebookIcon} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="footer__right">
                        <p className="footer__text">Sign up Newsletter</p>
                        <div className="footer__inp-btn">
                        <input placeholder="Enter Email" type="email" className="footer__inp" />
                        <button className="footer__btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}