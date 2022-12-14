import React, { useContext } from 'react';
import { UidContext } from "../components/AppContext";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from '../components/Thread';
import Log from "../components/Log";

const Wall = () => {
  const uid = useContext(UidContext);
  return (
    <div className="home">
      <div className="main">
      <div className="home-header">
        {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
    </div>
  );
};

export default Wall;
