import React from 'react';
import './Home.css';
import homeimg from '../components/ASSET/wildlife.jpeg';
import section1 from '../components/ASSET/Rich nations pledge funds at climate crisis summit.jpeg';
import section2 from '../components/ASSET/Download Detailed Map of Africa Continent in Black Silhouette for free.jpeg';

const Home = () => {
  return (
    <div className='home_container' style={{ paddingTop: '64px' }}> {/* Adjust padding based on Navbar height */}
      <img src={homeimg} className='image-home' alt="Wildlife" />
      
      <div className='section-img-container'>
        <img src={section1} alt="Section 1" className='section1-img' />
        <p>Our mission is to empower communities and stakeholders by providing accessible resources, expert insights, and a collaborative space for dialogue. We aim to amplify African voices in the global climate conversation and inspire actionable solutions for a sustainable future. Feel free to adjust any wording to better fit your website's tone!</p>
        </div>
        <div>
        <img src={section2} alt="Section 2" className='section2-img'  />
      </div>
    </div>
  );
}

export default Home;