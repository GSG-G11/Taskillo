import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { ActivityCard, ProjectCard, SlideCard, StaffCard, TaskCard } from '../../components/Card';
import member1 from '../../images/member1.svg';
import member2 from '../../images/member2.svg';
import './style.css'

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
        <Navbar title={`${userInfo.username}`} />
      </main>

      <div className='d-flex'>
        <div className=' w-75 cards d-flex flex-column align-items-center' style={{ marginLeft: '320px' }}>
          <div className='d-flex cont-card1'>
            <TaskCard />
            <ProjectCard />
          </div>
          <SlideCard/>
          <div className='d-flex cont-card2'>
            <StaffCard avatar={member1} memberName={'Amran Elmasri'}/>
            <StaffCard avatar={member2} memberName={'Karam Zomlot'}/>
          </div>
        </div>

        <ActivityCard />

      </div>


    </div>
  );
};

export default Home;
