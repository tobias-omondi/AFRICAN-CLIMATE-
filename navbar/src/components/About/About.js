import React from 'react'
import './About.css'
import Aboutimg from '../ASSET/Sommet africain sur le climat _ le projet de déclaration finale sous le feu des critiques.jpeg'
import missionicons from '../ASSET/missionicons.jpeg'
import missioniconsONE from '../ASSET/images (1).png'
import missioniconsTWO from '../ASSET/success-26.png'
import missioniconsTHREE from '../ASSET/images.png'
import team1 from '../ASSET/team1.jpeg'
import team2 from '../ASSET/team2.jpeg'
import team3 from '../ASSET/team3.jpeg'
import team4 from '../ASSET/team4.jpeg'
import team5 from '../ASSET/team5.jpeg'
import team6 from '../ASSET/team6.jpeg'
import Footer from '../Footer'

const About = () => {
  return (
    <>
    <div className='About_page'>\
    <div className='about_heading'>
      <h3>ABOUT US</h3>
      <p>African Climatic Vintage champions sustainable environmental practices across Africa by connecting communities with innovative solutions. Our mission is to drive resilience and foster a greener future for the continent.</p>
    </div>
    </div>

    <div className='mission_heading'>
      <div className='about_pargraph'>
      <h2>OUR MISSION.</h2>
      <p>At African Climatic Vintage, our mission is to promote environmental
         sustainability and resilience across Africa. We empower communities by
          providing innovative solutions and resources to address climate challenges. 
          Through education, advocacy, and collaborative action, we aim to build a greener, 
          more sustainable future for the continent, ensuring the preservation of its unique 
          natural heritage for future generations.</p>
        </div>

        <div className='about_img'>
        <img src={Aboutimg} />
        </div>
    </div>
    <div className='organisation_'>
    <div className='organisation_unique_heading'>
      <h2>ORGANISATION UNIQUE FACTOR</h2>
      </div>
    <div className='organisation_unique '>
      <div className='success_icons'>
        <img src={missionicons} />
      <h5>OUR Success</h5>
      </div>
      <div  className='success_icons'>
      <img src={missioniconsONE} />
      <h5>OUR Mission</h5>
      </div>
      <div  className='success_icons'>
      <img src={missioniconsTWO} />
      <h5>OUR Vision</h5>
      </div>
      <div  className='success_icons'>
      <img src={missioniconsTHREE} />
      <h5>OUR Journey</h5>
      </div>
    </div>
    </div>
    <div className='our_team'>
      <h2>MEET OUR TEAM</h2>
      <div>
        <p>At African Climatic Vintage, our team is dedicated to driving impactful environmental
           change across the African continent. Comprising experts in climate science, community 
           engagement, and sustainable development, we work collaboratively to provide innovative solutions
          and support. Our diverse backgrounds and shared commitment empower us to address the challenges of climate change and foster resilient, thriving communities. Together, we are committed to making a difference and building a sustainable future for all.</p>
      </div>
      <div className='team_members'>
        <div>
        <img src={team1} />
        <h3>Emily Johnson</h3>
        <p>"Our website is a powerful tool for spreading awareness and engaging with our community.
           It’s exciting to see our mission come to life online."</p>
        </div>
        <div>
        <img src={team2} />
        <h3>Aisha Ahmed</h3>
        <p>"The web platform has significantly enhanced our outreach and ability to connect with supporters. It’s a fantastic resource for driving our initiatives forward."</p>
        </div>
        <div>
        <img src={team3} />
       <h3>  Sophia Martinez</h3>
       <p>"I’m thrilled with how our website showcases our work and values. It’s both user-friendly and visually appealing, making a real impact."</p>
        </div>
        <div>
        <img src={team4} />
       <h3>Michael Smith</h3> 
       <p>"The website perfectly reflects our dedication to environmental change. It’s a great asset for informing and inspiring our audience."</p>
       </div>
        <div>
        <img src={team5} />
        <h3>David Brown</h3>
        <p>"Our online presence is essential for building connections and sharing our message. The website does a fantastic job of highlighting our efforts."</p>
        </div>
        <div>
        <img src={team6} />
       <h3> James Williams</h3>
       <p>"I’m impressed with how effectively our website communicates our goals and achievements. It’s a vital part of our strategy for making a difference."</p>
        </div>
      </div>
    </div>
    <div className='our_vision'>
        <h2>OUR VISSION</h2>
        <p>Our vision is to see a thriving Africa where communities live in harmony with nature,
           embracing sustainable practices that safeguard the environment for future generations. 
           We envision a continent where innovative solutions drive resilience against climate change,
            and every individual is empowered to contribute to a sustainable and prosperous future.</p>
      </div>
    <Footer />
    </>
  )
}

export default About;
