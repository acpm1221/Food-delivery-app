import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.geeks} alt=''/>
            <p>© 2024 Geeks Technologies Pvt. Ltd</p>
            <div className='footer-social-icons'>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
                <img src={assets.facebook_icon} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy-Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>contact@geeksfood.com</li>
                <li>+91-9876543210</li>
            </ul>
        </div>
      </div>
      
      <p className='footer-copyright'>Copyright 2024 © Geeksfood.com All Right Reserved</p>
    </div>
  )
}

export default Footer
