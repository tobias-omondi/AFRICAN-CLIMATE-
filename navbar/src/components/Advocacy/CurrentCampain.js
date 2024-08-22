import React from 'react';
import './CurrentCampain.css';
import Footer from '../Footer';
import currentCampainimg from '../ASSET/3 young black climate activists in Africa trying to save the world _ Greenpeace UK.jpeg';
import currentCampainimgtwo from '../ASSET/wildlife.jpeg';

const CurrentCampain = () => {
  return (
    <div>
      <div className='CurrentCampain_page'>
        <div className='CurrentCampain_page_headings'>
          <h2>The Current Climatic <br /> Happening In Africa</h2>
        </div>
      </div>

      <div className='our_current_work'>
        <div>
          <h3>Strengthening Communities with Our Current Campaign</h3>
          <p>African Climatic Vintage's current campaign focuses on empowering communities to combat climate change through sustainable practices, fostering resilience, and promoting environmental stewardship across the continent.</p>
          <p>Our ongoing campaign at African Climatic Vintage is dedicated to mobilizing local efforts to restore ecosystems, ensuring a greener and more sustainable future for generations to come.</p>
        </div>
        <div>
          <img src={currentCampainimg} alt='children planting trees' />
        </div>
      </div>

      <div className='our_current_work_one'>
        <div>
        <img src={currentCampainimgtwo} alt='animals' />
        
        </div>
        <div>
        <h4>Restoring Hope Through Environmental Action</h4>
        <p>African Climatic Vintage's current campaign is focused on empowering communities to take meaningful steps toward environmental restoration. By engaging in reforestation, sustainable farming, and conservation efforts, we are not just combating climate change but also revitalizing the land and livelihoods of those most affected.</p>
        </div>
      </div>

      <div className='main_current_work_two'>
        <h3>Ongoing Projects in Our Current Campaign</h3>
        <p>Our ongoing projects under the current campaign of African Climatic Vintage are dedicated to fostering sustainable development and resilience. These initiatives include large-scale tree planting, renewable energy education, and community-driven conservation efforts, all aimed at creating a greener, more sustainable future across Africa.</p>
      </div>
      
      <Footer />
    </div>
  );
}

export default CurrentCampain;
