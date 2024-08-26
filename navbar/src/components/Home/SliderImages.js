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
  { img: section5, text: "Drought in Africa causes severe water shortages that cripple agriculture, leading to poor crop yields and food insecurity. It also impacts livestock, further harming rural economies. Communities often face health risks from using distant, unsafe water sources. Addressing the crisis involves better water management, drought-resistant crops, and improved irrigation infrastructure." },
  { img: section6, text: "Heavy rainfall and flooding can devastate communities by damaging homes, infrastructure, and farmland. The deluge often leads to displacement, increased health risks from waterborne diseases, and disruption of essential services. Recovery is hindered by the destruction of resources and economic instability, underscoring the need for effective flood management and disaster preparedness." },
  { img: section7, text: "24 Hours in Pictures: offers a snapshot of daily life faced with climatic challenges, showcasing how individuals and communities navigate severe weather events and environmental shifts. It highlights the resilience and adaptability required to cope with issues like flooding, drought, and extreme temperatures, capturing moments of struggle, ingenuity, and hope as people respond to the impacts of climate change in real time." },
  { img: section8, text: "The Climate Crisis Summit brings together global leaders, scientists, and activists to address urgent climate issues through collaborative discussions and action plans. The summit focuses on reducing greenhouse gas emissions, advancing renewable energy, and implementing sustainable practices to combat climate change. It serves as a platform for sharing innovative solutions, committing to ambitious climate targets, and fostering international cooperation to mitigate the impact of the climate crisis." },
  { img: section9, text: "Planting trees is a crucial effort to combat climate change through reforestation. Trees absorb carbon dioxide, help restore ecosystems, and prevent soil erosion, playing a key role in reducing global warming. Reforestation projects also support biodiversity, improve air and water quality, and provide economic benefits to local communities through sustainable forestry practices. These initiatives are vital for enhancing climate resilience and mitigating the effects of climate change." },
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
