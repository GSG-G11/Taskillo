import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import Calender from '../../components/Calendar';
import { AddProjectModal } from '../../components';

const Calendar = () => {
  const { open } = useSelector((state) => state.sidebar.value);

  return (
    <div className="page-container">
      <Sidebar />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`Calender`} />
        <AddProjectModal />

        <section className="page-content" style={{ paddingBottom: 0 }}>
          <Calender />
        </section>
      </main>
    </div>
  );
};

export default Calendar;