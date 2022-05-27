import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import generateGreeting from '../../utils/generateGreeting';
import { ActivityCard, AddProjectModal, ProjectCard, SlideCard, StaffCard, TaskCard, Text } from '../../components';
import axios from 'axios';
import './style.css'

const Dashboard = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  const projects = useSelector((state) => state.projectDashboard.value)

  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getProjectMember = async () => {
      try {
        const res = await axios.get(`api/v1/project/${projects[0].id}`);
        if (res.status === 200) {
          setMembers(res.data.data.staff);
        }
      }
      catch (error) {
        console.log(error);
      }

    }
    getProjectMember();

  }, [projects]);

  return (
    <div className="page-container">
      <Sidebar />
      <main
        className={
          open ? 'main-page' : 'main-page close'
        }
      >
        <Navbar title={`${generateGreeting()}, ${userInfo.username}`} />
        <AddProjectModal/>
      </main>

      <div className='d-flex'>
        <div className={open ? 'w-75 open-slide' : 'w-75 close-slide'}>
          <div className='d-flex cont-card1'>
            <TaskCard />
            <ProjectCard />
          </div>
          <SlideCard />
          <div className='d-flex cont-card2'>
            {members.length ? members.slice(0,2).map((member, index) => (
              <div key={index}>
                <StaffCard avatar={member.image} memberName={member.username} role={member.role} />
              </div>
            )) : <div className='mx-1 member mt-2 d-flex flex-column justify-content-center align-items-center '>
              <Text text={'there is no members'} className={'text-white'}/>
            </div>
            }
          </div>
        </div>

        <ActivityCard />

      </div>

    </div>
  );
};
export default Dashboard;
