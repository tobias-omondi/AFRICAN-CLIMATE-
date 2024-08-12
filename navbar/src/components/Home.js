import React from 'react'
import './Home.css'
import homeimg from '../components/ASSET/wildlife.jpg'

const Home = () => {
  return (
    <div className='home_container'>
      <img src={homeimg} />
      <p>This is a home page</p>
    </div>
  )
}

export default Home
