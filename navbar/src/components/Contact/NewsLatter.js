import React from 'react'
import Footer from '../Footer';
import Swal from 'sweetalert2'
import './NewsLatter.css'

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
     <section className='contact-form'>
      <form onSubmit={onSubmit}>
      <h2>SIGN UP.</h2>
      <div className='input_box'>
        <label>Full Name:</label>
        <input type='text' className='field' placeholder='Enter your Name' name='name' required/>
      </div>
      <div className='input_box'>
        <label>Email:</label>
        <input type='mail' className='field' placeholder='Enter your email' name='email' required/>
      </div>
      <div className='input_box'>
        <label>PassWord:</label>
        <input type='password' className='field' placeholder='Enter your password' name='password' required/>
      </div>
      <div className='input_box'>
        <label>Confirm PassWord:</label>
        <input type='password' className='field' placeholder='Enter your password' name='password' required/>
      </div>
      <button type='submit'>SIGN UP</button>
      </form>
     

     </section>
      <Footer />
      </>
  )
}

export default NewsLatter
