import React from 'react';
import './Success.css';
import Footer from '../Footer';
import Successone from '../ASSET/food.jpg';
import Successtwo from '../ASSET/24 hours in pictures.jpeg';
import Successthree from '../ASSET/people planting trees.jpg';
import Successfour from '../ASSET/rescued.jpg';
import Successfive from '../ASSET/relief-food.jpg';
import Slider from 'react-slick';

// Import slick-carousel CSS for default styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 2, // Show 2 images at a time on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile and below
        settings: {
          slidesToShow: 1, // Show 1 image at a time on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='success_stories_page'>
        <div className='success_stories_headings'>
          <h1>OUR SUCCESS</h1>
          <p>At African Climatic Vintage, we celebrate the remarkable achievements and transformative impacts driven by our advocacy efforts. Our success stories highlight the resilience and innovation of communities across Africa who have embraced sustainable practices and overcome environmental challenges. Through collaborative projects, dedicated local initiatives, and impactful campaigns, these stories illustrate the power of collective action and the significant progress made toward a greener, more sustainable future. Join us in exploring these inspiring journeys and see how the commitment to positive change is creating a lasting difference.</p>
        </div>
      </div>
      <div className='success_img'>
        <Slider {...settings}>
          <div>
            <img src={Successone} alt='food' />
            <div className='slide-text'>
               <h4>Empowering Communities Through Food Security Initiatives</h4>
               <p>In response to climate challenges in Africa, African Climatic Vintage ensures food security by distributing nutritious, climate-resilient crops. This not only addresses hunger but also empowers communities to adapt and build resilience for a sustainable future.</p>
            </div>
          </div>
          <div>
            <img src={Successtwo} alt='24 hours in pictures' />
            <div className='slide-text'>
              <h4>Documenting the Impact: A Day in the Life</h4>
              <p>Our "24 Hours in Pictures" captures the daily experiences of those directly impacted by climate change and our initiatives. Through compelling visuals, we showcase the real-life stories of communities working towards sustainable solutions and overcoming adversity.</p>
            </div>
          </div>
          <div>
            <img src={Successthree} alt='people planting trees' />
            <div className='slide-text'>
              <h4>Reforestation Efforts: Planting for the Future</h4>
              <p>Our reforestation projects aim to restore vital ecosystems and combat deforestation. By engaging local communities in tree planting activities, we not only enhance biodiversity but also contribute to climate resilience and environmental sustainability.</p>
            </div>
          </div>
          <div>
            <img src={Successfour} alt='rescued' />
            <div className='slide-text'>
              <h4>Rescue Operations: Providing Urgent Relief</h4>
              <p>In times of crisis, our rescue operations deliver crucial support to affected areas. From emergency supplies to humanitarian aid, our efforts ensure that those in need receive timely assistance and care during environmental disasters.</p>
            </div>
          </div>
          <div>
            <img src={Successfive} alt='relief food' />
            <div className='slide-text'>
              <h4>Relief Food Distribution: Alleviating Hunger</h4>
              <p>We distribute relief food to communities struggling with food insecurity due to climate change impacts. Our initiatives focus on providing nutritious meals and fostering long-term food security through sustainable practices.</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className='main_content'>
          <h2>Empowering Communities Through Food Security Initiatives</h2>
          <p>In response to the growing challenges of climate change in Africa, African Climatic Vintage is committed to ensuring food security for vulnerable communities. By distributing nutritious, climate-resilient crops, we provide immediate relief while promoting sustainable agricultural practices. These efforts not only address hunger but also empower communities to adapt to environmental changes, fostering resilience and hope for a sustainable future.</p>
        </div>
    </>
  );
}

export default SuccessStories;
