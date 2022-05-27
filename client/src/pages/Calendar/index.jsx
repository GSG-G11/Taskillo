import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import Calender from '../../components/Calendar';
import { AddProjectModal } from '../../components';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../../utils';

const Calendar = () => {
  const { open } = useSelector((state) => state.sidebar.value);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = checkAuth();
    if (!auth) {
      navigate('/');
    }
  }, [navigate]);
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