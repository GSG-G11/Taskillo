import React, { useEffect, useState } from 'react'
import { VscCircleFilled } from "react-icons/vsc";
import styled from 'styled-components';
import { Text } from '../UI';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function TaskCard() {
  const [projects, setProjects] = useState([]);
  const [taskCard, setTaskCard] = useState([]);

  useEffect(() => {
    const fetchProjectsByUserId = async () => {
      try {
        const res = await axios.get('/api/v1/projects');
          setProjects(res.data.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    // const fetchTasksByProjectId = async () => {
    //   try{
    //     const res = await axios.get('/project/:projectid/tasks');
    //     if(res.status === 200 ) {

    //     }

    //   }
    //   catch (error){

    //   }

    // }
    fetchProjectsByUserId();

  }, []);

  return (
    <Card className='task mt-2'>
      <div className='ms-4 mt-2'>
        <Text text={'My tasks'} className={'fw-bold text-white fs-3'} />
      </div>

      <div className="d-flex justify-content-around status-task mt-2 me-4">
        <Text text={'Upcoming'} className={'text-white fs-6'} />
        <Text text={'Completed'} className={'text-white fs-6'} />
      </div>

      <div className='mt-2 ms-4 d-flex flex-column'>
        <div className='text-white mt-2 fs-5' >
          <VscCircleFilled className='text-white me-2' />
          Design profile page
        </div>
        <div className='text-white mt-2 fs-5' >
          <VscCircleFilled className='text-white me-2' />
          Design profile page
        </div>
        <div className='text-white mt-2 fs-5' >
          <VscCircleFilled className='text-white me-2' />
          Design profile page
        </div>
      </div>

    </Card>
  )
};

const Card = styled.div`
    background-color: #21222C;
    width: 300px;
    height: 250px;
    border-radius: 12px;
`;