import React from 'react';
import { ClipLoader } from 'react-spinners';

// Simple loader component
const Loader = () => {
  return (
    <div className="loader" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ClipLoader size={50} color={"#3498db"} loading={true} />
      <p>Loading...</p>
    </div>
  );
};

export default Loader; // Don't forget to export the Loader component