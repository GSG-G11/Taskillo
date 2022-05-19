import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
// import { Outlet } from 'react-router-dom';
// import Menu from '../../components/Menu';
import Sidebar from '../../components/Sidebar';
// import './style.css';

const Home = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  return (
    <div className="page-container">
      <Sidebar />
      <main
        className={
          open ? 'main-page' : 'main-page close'
        }
      >
        <Navbar title={`Good Morning, ${userInfo.username}`} />
        {/* <Menu /> */}
      </main>
    </div>
  );
};

export default Home;
