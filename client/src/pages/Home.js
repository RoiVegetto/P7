import React, { useContext } from 'react';
import Log from '../components/Log';
import { UidContext } from '../components/AppContext';
import Wall from './Wall';

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home-page">
      {uid ? (
        <Wall />
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
