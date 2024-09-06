import React from 'react';
import Footer from '../Footer';
import Swal from 'sweetalert2';
import './News__Latter.css';

const NewsLatter = () => {

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className='newslater_page'>
        <video
          src="https://res.cloudinary.com/djyfoquip/video/upload/v1724418530/videoplayback_pdo3ve.mp4"
          autoPlay
          muted
          loop
          className="video-background"
        />
        <h2 className='contact-heading'>SIGN UP FOR DAILY NEWS</h2><br/>
        <p className='contact-heading-paragraph'>Discover the latest stories, updates, and insights from African Climatic Vintage. Subscribe to our newsletter and stay connected with our ongoing efforts to drive positive change for the environment and communities across Africa.</p>
      </div>

      <div className='signup_section'>
        <section className='signup-form'>
          <h2>SIGN UP.</h2>
          <div className='signup_input_box'>
            <label>Full Name:</label>
            <input type='text' className='field_signup' placeholder='Enter your Name' name='name' required />
          </div>
          <div className='signup_input_box'>
            <label>Email:</label>
            <input type='email' className='field_signup' placeholder='Enter your email' name='email' required />
          </div>
          <div className='signup_input_box'>
            <label>Password:</label>
            <input type='password' className='field_signup' placeholder='Enter your password' name='password' required />
          </div>
          <div className='signup_input_box'>
            <label>Confirm Password:</label>
            <input type='password' className='field_signup' placeholder='Enter your password again' name='confirm_password' required />
          </div>
          <button type='submit' className='signup-btn'>SIGN UP</button>
        </section>
        <div className='signup_letter'>
          <h3>Create Your Account and Stay Updated!</h3>
          <p>Sign up today to stay informed about the latest updates, events, and exclusive content. By creating an account, you’ll have access to personalized newsletters, the ability to manage your preferences, and more. It only takes a few moments to get started!</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsLatter;
