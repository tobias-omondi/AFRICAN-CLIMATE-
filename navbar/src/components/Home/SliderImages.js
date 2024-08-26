import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel theme CSS
import './SliderImages.css'

// Import images
import section8 from '../ASSET/floods.jpeg';
import section9 from '../ASSET/plantingtrees.jpeg';
import section5 from '../ASSET/drought.jpg';
import section6 from '../ASSET/flood.jpg';
import section7 from '../ASSET/24 hours in pictures.jpeg';

// Define the images and corresponding paragraphs
const slides = [
  { img: section5, text: "Drought in Africa: Severe water shortages and impact on agriculture." },
  { img: section6, text: "Flooding Events: The impact of heavy rainfall on communities." },
  { img: section7, text: "24 Hours in Pictures: A glimpse into daily life amid climatic challenges." },
  { img: section8, text: "Climate Crisis Summit: Global efforts to address climate issues." },
  { img: section9, text: "Planting Trees: Efforts to combat climate change through reforestation." },
];

const SliderImages = () => {
  // Slick Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time between slides in milliseconds
    arrows: true,
    dots: true, // Show pagination dots
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
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.img} alt={`Slide ${index}`} />
            <p className="slide-paragraph">{slide.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImages;
