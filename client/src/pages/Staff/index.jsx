import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import generateGreeting from '../../utils/generateGreeting';

const Staff = () => {
  const { open } = useSelector((state) => state.sidebar.value);
  return (
    <div className="page-container">
      <Sidebar />
      <main
        className={
          open ? 'main-page' : 'main-page close'
        }
      >
        <Navbar title={`Staff`} />
        <section className="page-content">
          'Staff'
        </section>
      </main>
    </div>
  );
};

export default Staff;
