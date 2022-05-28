import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import Calendar from '../../components/Calendar';
import { AddProjectModal } from '../../components';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../../utils';

const Calendarr = () => {
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
        <Navbar title={`Calendar`} />
        <AddProjectModal />

        <section className="page-content" style={{ paddingBottom: 0 }}>
          <Calendar />
        </section>
      </main>
    </div>
  );
};

export default Calendarr;
