import React, { useEffect, useState } from 'react';
import './Multimedia.css';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';

const Loader = () => {
  return <div className="loader">Loading...</div>;
};

const Multimedia = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({}); // State to track expanded descriptions

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/multimedia");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the expanded state for the specific post
    }));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='multimedia_page'>
        <div className='multimedia_heading'>
          <h1>MULTIMEDIA</h1>
        </div>
      </div>

      <div className='multimedia-content'>
        <p>This page will fetch data for multimedia</p>
      </div>
      <div className='HEADING_multimedia'>
        <h2>FROM REFRESH __</h2>
      </div>

      {/* Display fetched data */}
      <div className='multimedia-list'>
        {data.map((item) => (
          <div key={item.id} className='multimedia-post'>
            {item.content_type === 'image' && (
              <img src={item.file_url} alt={item.title} className='multimedia-image' />
            )}
              <h2>{item.title}</h2>
            {item.content_type === 'video' && (
              <video src={item.file_url} controls className='multimedia-video' />
            )}
            {item.content_type === 'audio' && (
              <audio src={item.file_url} controls className='multimedia-audio' />
            )}
            
            {/* Description with Read More/Read Less */}
            <p>
              {expanded[item.id]
                ? item.description
                : `${item.description.slice(0, 300)}...`} {/* Show first 100 characters */}
              <button onClick={() => toggleReadMore(item.id)} className='btn-mutlimedia'>
                {expanded[item.id] ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        ))}
      </div>
      <div className='social-media_links'>
        <h2>Follow pov Interactive_</h2>
            <a href="https://www.instagram.com" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.tiktok.com" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://x.com" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/" className='social-icon' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>
      <Footer />
    </div>
  );
};

export default Multimedia;
