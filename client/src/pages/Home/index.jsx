import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { ActivityCard, ProjectCard, SlideCard, StaffCard, TaskCard } from '../../components/Card';
import member1 from '../../images/member1.svg'
import member2 from '../../images/member2.svg'

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
        <div className='d-flex w-75 flex-wrap' style={{ marginLeft: '320px' }}>
          <div className='d-flex'>
            <TaskCard />
            <ProjectCard />
          </div>
          <SlideCard/>
          <div className='d-flex'>
            <StaffCard avatar={member1} memberName={'Amran Elmasri'}/>
            <StaffCard className={'ms-2'} avatar={member2} memberName={'Karam Zomlot'}/>
          </div>
        </div>

        <ActivityCard />

      </div>


    </div>
  );
};

export default Home;
