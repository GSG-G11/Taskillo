import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import generateGreeting from '../../utils/generateGreeting';
import StaffHeader from '../../components/StaffHeader';

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
          <div className="staffs">
            <div className="single-staff">
              <StaffHeader />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Staff;
