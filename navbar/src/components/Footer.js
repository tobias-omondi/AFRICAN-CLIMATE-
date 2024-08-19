import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons'; // Import SocialIcon component

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <h1>AFRICAN CLIMATIC VINTAGE.</h1>
        </div>
        <div className='social-media'>
            <SocialIcon url="https://www.instagram.com" network="instagram" />
            <SocialIcon url="https://www.youtube.com" network="youtube" />
            <SocialIcon url="https://www.tiktok.com" network="tiktok" />
            <SocialIcon url="https://x.com" network="twitter" />
        </div>
    </div>
  );
}

export default Footer;
