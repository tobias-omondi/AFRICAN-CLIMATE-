import React, { useState, useEffect } from 'react';
import './Contact.css';
import Footer from '../Footer';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [result, setResult] = useState("");
  const [apiData, setApiData] = useState(null);

  // Fetch data from the Flask backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/user'); // Flask API endpoint
        const data = await response.json();
        setApiData(data);  // Save the data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ebccf34c-ba2d-47eb-bcd4-d0334895eee9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Network error!",
      });
      console.log("Network Error", error);
      setResult("Network error!");
    }
  };

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
        <h2 className='contact-heading'>CONTACT US</h2><br />
        <p className='contact-heading-paragraph'>
          Welcome to the African Climatic Vintage contact page. Whether you have questions, suggestions, or just want to connect, we are here to help. Fill out the form below, and our team will get back to you as soon as possible. Your feedback and inquiries are important to us!
        </p>
      </div>

      <div className='contact_information'>
        <div className='information'>
          <h2>Contact Us</h2>
          <p>
            At African Climatic Vintage, we are committed to fostering communication and collaboration to drive sustainable change across Africa.
          </p>
          <div className='information_heading'>
            <h3><strong>Call:</strong> +254 70000000</h3>
            <h3>africanvintage@gmail.com</h3>
          </div>
          <div className='social-media'>
            <a href="https://www.instagram.com" className='social-icon' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com" className='social-icon' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://x.com" className='social-icon' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/" className='social-icon' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        <section className='contact-form'>
          <form onSubmit={onSubmit}>
            <h2>GET IN TOUCH WITH US.</h2>
            <div className='input_box'>
              <label>Full Name:</label>
              <input type='text' className='field' placeholder='Enter your Name' name='name' required />
            </div>
            <div className='input_box'>
              <label>Email:</label>
              <input type='email' className='field' placeholder='Enter your email' name='email' required />
            </div>
            <div className='input_box'>
              <label>Your Message:</label>
              <textarea name="message" className='field mess' placeholder='Enter Your Message' required />
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
