import React from 'react';
import './Home.css';
import homeimg from '../components/ASSET/wildlife.jpeg';
import section1 from '../components/ASSET/Rich nations pledge funds at climate crisis summit.jpeg';
import section2 from '../components/ASSET/heart of Africa.jpeg';

const Home = () => {
  return (
    <div className='home_container' style={{ paddingTop: '64px' }}> {/* Adjust padding based on Navbar height */}
      <img src={homeimg} className='image-home' alt="Wildlife" />
      <p>This is a home page</p>
      <div>
        <img src={section1} alt="Section 1" />
        <img src={section2} alt="Section 2" />
      </div>
    </div>
  );
}

export default Home;