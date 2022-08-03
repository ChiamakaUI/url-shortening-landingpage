import React from "react";
import logo from './Images/logo.svg'
import facebook from './Images/icon-facebook.svg'
import instagram from './Images/icon-instagram.svg'
import twitter from './Images/icon-twitter.svg'
import pinterest from './Images/icon-pinterest.svg'


const Footer = () => {
  return (
    <footer>
      <div className="footer-first">
        <div className="inner-footer">
          <h3> Boost your links today</h3>
          <div style={{display: "flex",  alignItems: "center", justifyContent: "center"}}>
          <button className="sign-up">Get Started</button>
          </div>
     
        </div>
      </div>

      <div className="footer-second">
        <div className="footer-logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="footer-text">
        <div>
            <h4>Features</h4>
            <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
        </div>
        <div>
        <h4>Resources</h4>
            <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
        </div>
        <div>
        <h4>Company</h4>
            <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="social-media">
    <img src={facebook} alt="facebook"/>
    <img src={instagram} alt="instagram"/>
    <img src={twitter} alt="twitter"/>
    <img src={pinterest} alt="facebook"/>
        </div>
        </div>
      

      </div>
    </footer>
  );
};

export default Footer;
