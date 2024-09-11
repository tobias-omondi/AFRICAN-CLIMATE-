import React, { useEffect, useState } from 'react';
import './Podcast.css';
import Footer from '../Footer';

const Loader = () => {
  return <div className="loader">Loading...</div>;
};

const Podcast = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/podcast"); // Replace with your API endpoint
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
  }, []); // Empty dependency array means it will run once after the component mounts.

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='podcast_page'>
        <div className='podcast_heading'>
          <h1>PODCAST</h1>
        </div>
      </div>
      
      <div className='podcast-content'>
        <p>This page will fetch data for podcast</p>
      </div>
      <div className='Podcast_music'>
        <h2>Listening to our momemnts__</h2>
      </div>
      <div className='podcast-list'>
        {data.map((item) => (
          <div key={item.id} className='podcast-post'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image_url_file} alt='African images' />
            <audio controls>
              <source src={item.audio_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Podcast;
