import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import generateGreeting from '../../utils/generateGreeting';
import { ActivityCard, ProjectCard, SlideCard, StaffCard, TaskCard } from '../../components/Card';

const Home = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  const greeting = generateGreeting();
  return (
    <div className="page-container">
      <Sidebar />
      <main
        className={
          open ? 'main-page' : 'main-page close'
        }
      >
        <Navbar title={`${greeting}, ${userInfo.username}`} />
      </main>

      <div className='d-flex'>
        <div className='d-flex w-75 flex-wrap' style={{ marginLeft: '320px' }}>
          <div className='d-flex'>
            <TaskCard />
            <ProjectCard />
          </div>
          <SlideCard/>
          <div className='d-flex'>
            <StaffCard />
            <StaffCard className={'ms-2'} />
          </div>
        </div>

        <ActivityCard />

      </div>


    </div>
  );
};

export default Home;
