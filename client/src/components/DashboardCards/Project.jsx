import React, { useEffect } from 'react'
import { Text } from '../UI'
import { VscCircleFilled } from "react-icons/vsc";
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../../state/projectDashboard';

export default function ProjectCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProjectsByUserId = async () => {
      try {
        const res = await axios.get('/api/v1/projects');
        if (res.status === 200) {
          dispatch(setProjects(res.data.data))
        }
      }
      catch (error) {
        console.log(error);
      }

    }
    getProjectsByUserId();

  }, [dispatch])

  const projects = useSelector((state) => state.projectDashboard.value);

  return (
    <Card className='project mt-2'>
      <div className='ms-4 mt-2'>
        <Text text={'My  Projects'} className={'fw-bold text-white fs-5'} />
      </div>

      <div className='mt-2 ms-4 d-flex flex-column'>
        {projects.length ? projects.map((project, index) => (
          <div className='text-white mt-2 fs-5' key={index}>
            <VscCircleFilled className='text-white me-2' />
            {project.name}
          </div>
        )) : <div className='text-white mt-5 fs-5 ms-3'>
          You don't have any project
        </div>}

      </div>



    </Card>
  )
}

const Card = styled.div`
    background-color: #21222C;
    width: 300px;
    height: 250px;
    margin-left: 10px;
    border-radius:12px;
    @media(max-width: 576px) {
      margin:0;
    }
    @media (min-width: 768px) and (max-width: 1024px){
      width: 250px;
    }


`;