import React from 'react';
import './Home.css';
import section1 from '../components/ASSET/Rich nations pledge funds at climate crisis summit.jpeg';
import section2 from '../components/ASSET/Download Detailed Map of Africa Continent in Black Silhouette for free.jpeg';
import { Button } from 'react-scroll';

const Home = () => {
  return (
    <>
      <div className='home_container' style={{ paddingTop: '64px' }}>
        <div className='landing-container'>
        <h2>DELIVERING CLIMATIC<br/> TO AFRICAN CONTINENT.</h2>
        <Button type='submit'>Sign-Up</Button>
      </div>
      </div>

      <div className='section-img-container'>
        <img src={section1} alt="Section 1" className='section1-img' />
        <img src={section2} alt="Section 2" className='section2-img' />
      </div>
      <div className='section-pagrh'>
        <p>Our mission is to empower communities and stakeholders by providing accessible resources, 
          expert insights, and a collaborative space for dialogue, fostering a shared vision for a 
          sustainable and equitable future.** We strive to bridge gaps, amplify diverse voices, 
          and catalyze collective action to address pressing challenges and create thriving 
          communities. Through our work, we aim to build a more just, inclusive, and resilient world for all. 
        </p>
        </div>
    </>
  );
}

export default Home;