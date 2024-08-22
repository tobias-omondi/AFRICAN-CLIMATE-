import React from 'react';
import './Contact.css';
import Footer from '../Footer';

const Contact = () => {
  return (
    <>
    <div className='contact_page'>
      <video
        src="https://res.cloudinary.com/djyfoquip/video/upload/v1724335392/Planet_Earth_Spinning_in_Space_-_4K_Video_pqmiv6.mp4"
        autoPlay
        muted
        loop
        className="video-background"
      />
     </div>
      <Footer />
      </>
  );
}

export default Contact;
