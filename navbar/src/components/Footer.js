import React ,{useEffect} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Make sure this line is present to include AOS CSS

const Footer = () => {

    useEffect(() => {
        AOS.init({ 
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
          once: true, // Whether animation should happen only once
          mirror: false, // Whether elements should animate out while scrolling past them
          delay: 200, // Delay between animations
        });
      }, []);

  return (
    <div className='footer' data-aos= 'fade-up' data-aos-delay="100">
        <div className='footer_line_one'>
            <h2>AFRICAN CLIMATIC VINTAGE.</h2>
        <div className='social-media'>
            <a href="https://www.instagram.com" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.tiktok.com" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://x.com" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>
        </div>
        <div className='social_links'>
        <div className='services'>

            <h3>SERVICES</h3>
            <a href='education'>EDUCATION & COMMUNITY</a>
            <a href='advocacy'>ADVOCACY & CAMPAIGNS</a>
            <a href='news'>NEWS & MEDIA</a>
            <a href='podcast'>PODCAST</a>
        </div>

        <div className='aboutlinks'>
        <h3>ABOUT</h3>
            <a href='story'>SUCCESS STORY</a>
            <a href='teams'>TEAMS</a>
            <a href='interviews'>INTERVIEWS</a>
            <a href='discusion'>DISCUSION</a>
        </div>
        <div className='legal'>
            <h3>LEGAL</h3>
           <a href='#'>TERMS & CONDITION</a>
            <a href='#'>PRIVACY POLICY</a>
            <a href='#'>TERMS OF USE</a>
        </div>

        <div className='subscribe'>
            <h2>SUBSCRIBE NOW.</h2>
            <input type='EMAIL' name='email' placeholder='EMAIL'/>
            <button type='submit'  >SUBMIT</button>
        </div>
        </div>
    </div>
  );
}

export default Footer;