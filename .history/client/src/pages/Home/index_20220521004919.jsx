import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import generateGreeting from '../../utils/generateGreeting';

const Home = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  const greeting = generateGreeting();
  return (
    <div className="page-container">
      <Sidebar />
<<<<<<< HEAD
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`Good Morning, ${userInfo.username}`} />
=======
      <main
        className={
          open ? 'main-page' : 'main-page close'
        }
      >
        <Navbar title={`${greeting}, ${userInfo.username}`} />
>>>>>>> development
      </main>
    </div>
  );
};

export default Home;
