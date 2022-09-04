import React from 'react';
import Thread from '../components/Thread';

const Home = () => {

  return (
    <div className="home">
      <div className="main">
        <Thread />
      </div>

      <div className="right-side">
        <div className="right-side-container">
        </div>
      </div>
    </div>
  );
};

export default Home;
