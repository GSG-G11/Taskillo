import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import generateGreeting from '../../utils/generateGreeting';
import { ActivityCard, ProjectCard, SlideCard, StaffCard, TaskCard } from '../../components';
import member1 from '../../images/member1.svg';
import member2 from '../../images/member2.svg';
import axios from 'axios';
import './style.css'

const Home = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  const projects = useSelector((state) => state.project.value)
  const greeting = generateGreeting();

  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchProjectMember = async () => {
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
    fetchProjectMember();

  }, [projects]);

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

      <div className={ open ? 'dash-cont': 'dash-cont-close'}>
        <div className=' w-75 cards d-flex flex-column align-items-center' style={{ marginLeft: '320px' }}>
          <div className='d-flex cont-card1'>
            <TaskCard />
            <ProjectCard />
          </div>
          <SlideCard />
          <div className='d-flex cont-card2'>
            {members.map((member, index) => (
              <div key={index}>
                <StaffCard avatar={member1} memberName={member.username} role={member.role}/>
              </div>
            ))
            }
          </div>
        </div>

        <ActivityCard />

      </div>


    </div>
  );
};

export default Home;
