import React, { useEffect, useState } from 'react'
import { VscCircleFilled } from "react-icons/vsc";
import styled from 'styled-components';
import { Text } from '../UI';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function TaskCard() {

  const [tasks, setTasks] = useState([]);

  const projects = useSelector(state => state.project.value);

  useEffect(() => {
    const fetchTasksByProjectId = async () => {
      try {
        const res = await axios.get(`/api/v1/project/${projects[0].id}/tasks`);

        if (res.status === 200) {
          console.log(res.data.data, 'the tasks');
          setTasks(res.data.data)
        }
      }
      catch (error) {
        console.log(error);
        // console.log(error.response.data);
      }
    }
    fetchTasksByProjectId();

  }, [projects])


  const currenetTask = [];
  if ((tasks.length) > 3) {
    for (let i = 0; i < 3; i++) {
      currenetTask.push(tasks[i])
    }
  }

  return (
    <Card className='task mt-2'>
      <div className='ms-4 mt-2'>
        <Text text={'My Tasks'} className={'fw-bold text-white fs-3'} />
      </div>

      <div className="d-flex justify-content-around status-task mt-2 me-4">
        <Text text={'Upcoming'} className={'text-white fs-6'} />
        <Text text={'Completed'} className={'text-white fs-6'} />
      </div>

      <div className='mt-2 ms-4 d-flex flex-column'>

        {tasks.length ?
          (tasks.length > 3 ? currenetTask.map((task, index) => (
            <div className='text-white mt-2 fs-5' key={index}>
              <VscCircleFilled className='text-white me-2' />
              {task.name}
            </div>
          ))
            :
            (
              tasks.map((task, index) => (
                <div className='text-white mt-2 fs-5' key={index}>
                  <VscCircleFilled className='text-white me-2' />
                  {task.name}
                </div>
              ))))
          : <div className='text-white mt-3 fs-5 ms-2'>
            You don't have any task
          </div>}
        <div className='ms-2 mt-2'>
          <Link to={'tasks'} className={'text-decoration-none text-white'}>Show more</Link>
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
    @media (min-width: 768px) and (max-width: 1024px){
      width: 250px;
    }
`;