import React, { useEffect } from 'react';
import './Home.css';
import section1 from '../ASSET/Rich nations pledge funds at climate crisis summit.jpeg';
import background_section from '../ASSET/sun-savanna-African-Kenya-country.webp';
import Africa from '../ASSET/Download Detailed Map of Africa Continent in Black Silhouette for free.jpeg';
import Footer from '../Footer';
import { Button } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Make sure this line is present to include AOS CSS
import SliderImages from './SliderImages';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {

  const Navigate = useNavigate()

  const handleNavigation= () =>{
    Navigate('/contact/newsletter')
  }

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
    <>
      {/* Home Container */}
      <div className='home_container' style={{ paddingTop: '64px' }}>
        <div className='landing-container'>
          <h2 data-aos="zoom-in">DELIVERING CLIMATIC<br /> TO AFRICAN CONTINENT.</h2>
          <Button type='submit' data-aos="zoom-in" onClick={handleNavigation}>Newsletter-Signup</Button>
        </div>
      </div>

      {/* Section Images */}
      <div className='section-img-container'  data-aos="fade-up" data-aos-delay="200">
        <img src={section1} alt="Section 1" className='section1-img' />
          {/* Paragraph Section */}
      <div className='section-pagrh'>
        <h1>INTRODUCTION.</h1>
        <p>
            Welcome to our platform, where we are committed to fostering collaboration and dialogue to drive sustainable 
            change across the African continent. We provide accessible resources, expert insights, and a space for diverse
            voices to come together. Our goal is to bridge gaps, empower communities, and create a more just, inclusive, and 
            resilient future for all. Join us in our journey towards a thriving and equitable world.
        </p>
      </div>

      </div>
      {/* Video Section */}
      <div className='video-container' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '500px',
      }}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/rXu9vffJ2XQ?si=rCTWhd2Oxcngssvs" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </div>

      {/* Features Section */}
      <div className='section3_img'  data-aos="fade-up" data-aos-delay="100">
        <p>African Climatic Vintage is more than a study of weather patterns; it is an exploration of how climate shapes and is shaped by the continent’s rich natural and cultural landscapes. By understanding this intricate relationship, we gain valuable insights into the sustainability and resilience of Africa’s diverse environments and communities.</p>
      </div>

      <div>
        <SliderImages />
      </div>

      {/* Africa Image Section */}
      <div className='Africa' style={{
        marginTop: '10%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mixBlendMode:'color-burn'
      }} data-aos="fade-up" data-aos-delay="300">
         <div className='Africa_paragraph'>
          <h2>A Tapestry of Climate Diversity</h2>
          <p>Africa stands as a testament to the grandeur of climatic diversity, where the age-old landscapes meet the dynamic forces of nature, creating a mosaic of the world’s most striking climate patterns. From the vast, sun-baked deserts of the Sahara to the vibrant, verdant expanses of the Congo Basin, Africa’s climate is a rich tapestry that not only defines its ecological landscapes but also sustains the myriad life forms that flourish within its borders. At African Climatic Vintage, we delve into this remarkable climatic heritage, unveiling the profound ways in which Africa's diverse environments shape and inspire global understanding and appreciation.</p>
        </div>
        <img src={Africa} alt='Africa Climate' />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
