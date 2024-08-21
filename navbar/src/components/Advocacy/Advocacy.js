import React from 'react'
import './Advocacy.css'
import Footer from '../Footer'
import Advocacyone from '../ASSET/flood.jpg'
import Advocacytwo from '../ASSET/the-drought-has-destro.jpg'

const Advocacy = () => {
  return (
    <>
    <div className='advocacy_page'>
    <div className='Advocacy_heading_one'><h2>RAISING AWARENESS</h2></div>
      <div className='advocacy_headings'>
        <h3>ADVOCACY</h3>
        <p>Advocacy at African Climatic Vintage focuses on empowering African communities to address climate challenges. 
          We work to raise awareness, influence policies, and promote sustainable practices that protect the environment and ensure a resilient future for all.</p>
      </div>
    </div>
    <div className='advocacy_paragraph'><h2>Advocacy for a Better Africa</h2>
      <p>Advocacy at African Climatic Vintage is dedicated to driving meaningful change across Africa by addressing critical environmental and climate-related issues.
       We empower communities with the knowledge, tools, and support needed to advocate for sustainable practices and policies. 
       Through strategic campaigns, grassroots mobilization, and partnerships, we strive to amplify the voices of those
        most affected by climate change and work towards a future where every African can thrive in a safe, healthy, and resilient environment.</p></div>
        <div className='Advocacy_harzard'>
          <div className='Advocacy_harzard_life'>
            <img src={Advocacyone} alt='flood' />
            <h4>Environmental Damage </h4>
            <p>Floods can lead to soil erosion, contamination of water sources, and loss of biodiversity. Ecosystems may be disrupted, affecting both flora and fauna.</p> <br/>
            <p>Floods often result in loss of life, displacement of communities, and destruction of homes and infrastructure. This leads to a humanitarian crisis where affected individuals face food and water shortages, health risks, and a lack of shelter.</p>
          </div>
          <div className='Advocacy_harzard_life'>
          <img src={Advocacytwo} alt='drought' />
          <h4>Environmental Degradation</h4>
          <p> Droughts cause soil degradation, loss of vegetation, and reduced water levels in rivers and lakes. This degradation affects ecosystems and wildlife, reducing biodiversity and altering natural habitats.</p> <br/>
          <p> Droughts lead to severe water shortages and reduced agricultural productivity, resulting in food insecurity and malnutrition. Communities dependent on agriculture for their livelihoods are particularly vulnerable.</p>
        </div>
        </div>
        <div className='Advocacy_empowering'>
          <h2>Empowering communities</h2>
          <p>Empowering communities is central to our advocacy efforts, as it involves equipping individuals with the knowledge, skills, and resources they need to drive meaningful change. By providing education and training, we help communities understand and address critical issues such as climate change and environmental sustainability. We support local initiatives, foster participation in decision-making processes, and build networks that amplify their voices. Our approach encourages the adoption of sustainable practices and innovative solutions, enhancing resilience and self-reliance. Celebrating their successes further inspires and motivates, demonstrating the profound impact of their contributions and paving the way for a more equitable and sustainable future.</p>
        </div>
    <Footer />
    </>
  )
}

export default Advocacy
