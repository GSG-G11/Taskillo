import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Home = () => {
  // const user = useSelector((state) => state.user.value);
  return (
    <div className='page'>
      <Outlet />
      <h1>Hello World!</h1>
      {/* {<h3>{user.username}</h3>} */}
    </div>
  );
};

export default Home;