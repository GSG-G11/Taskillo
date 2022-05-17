import React from 'react';
import { Navbar } from '../../components';
import { useSelector } from 'react-redux';

const Home = () => {
  const userInfo = useSelector((state) => state.user.value);
  return (
    <div className="page d-flex flex-column">
      <Navbar title={`Good Morning, ${userInfo.username}`} />
    </div>
  );
};

export default Home;
