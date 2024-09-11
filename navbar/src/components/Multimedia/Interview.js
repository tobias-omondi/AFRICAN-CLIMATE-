import React, { useEffect, useState } from 'react';
import './Interview.css';
import Footer from '../Footer';
import Loader from './Loader';


const Interview = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/interview"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Set the fetched data to state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <Loader />; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='interview_page'>
        <div className='interview_heading'>
          <h1>INTERVIEW PAGE</h1>
        </div>
      </div>

      {/* fetching server Data */}
      <div><p>This page will fetch data for interview data</p></div>
      <div className='Interview-list'>
        {data.map((item) => (
          <div key={item.id} className='post'>
            <h2>{item.title}</h2>
            <img src={item.image_url} alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Interview;

