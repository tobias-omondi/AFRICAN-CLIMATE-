import React from 'react';
import './Contact.css';
import Footer from '../Footer';
import Swal from 'sweetalert2'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ebccf34c-ba2d-47eb-bcd4-d0334895eee9");

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
      console.log("Error", data);
      setResult(data.message);
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
     </div>
     <section className='contact-form'>
      <form onSubmit={onSubmit}>
      <h2>CONTACT FORM.</h2>
      <div className='input_box'>
        <label>Full Name:</label>
        <input type='text' className='field' placeholder='Enter your Name' name='name' required/>
      </div>
      <div className='input_box'>
        <label>Email:</label>
        <input type='mail' className='field' placeholder='Enter your email' name='email' required/>
      </div>
      <div className='input_box'>
        <label>Your Message:</label>
        <textarea name = "message" id=''className='field mess' placeholder='Enter Your Message' required />
      </div>
      <button type='submit'> Send Message</button>
      </form>
     

     </section>
      <Footer />
      </>
  );
}

export default Contact;
