import React, { useEffect, useState } from 'react';
import { Navbar, TableTask } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTask } from '../../state/task';
import axios from 'axios';
import generateGreeting from '../../utils/generateGreeting';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';

const Task = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  const pagination = useSelector((state) =>state.pagination.value);
  const greeting = generateGreeting();

  const dispatch = useDispatch();

  const [count, setCount] = useState(0)
  useEffect(() => {
    const handleData = async () => {
      try {
        const Response = await axios.get(`/api/v1/tasks?q=${pagination}`);
        
       
        if (Response.status === 200) {
          dispatch(getTask(Response.data.data));
          setCount(Response.data.data[0].totaltask);
        }
      } catch (error) {
        console.log(error, 'error');
      }
    };
    handleData();
  }, [dispatch, pagination]);


  const taskDeleted= async (id) =>{
    try {
      const Response = await axios.delete(`/api/v1/task/${id}`);
      if(Response.status === 200){
        dispatch(deleteTask(id))
      }
    } catch (error) {
      console.log(error,'error');
    }

  };
  return (
    // <div className='page-container'>
    //   <Sidebar />
    //   <main className={open ? 'main-page' : 'main-page close'}>
    //     <Navbar title={`${greeting}, ${userInfo.username}`} />
    //     <TableTask taskDeleted={taskDeleted} count={count}/>
    //   </main>
    // </div>
    <div className='page-container'>
      <Sidebar />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`${greeting}, ${userInfo.username}`} />
        <section className='page-content'  style={{paddingBottom: 0}}>
      <Tasks >
      <TableTask taskDeleted={taskDeleted} count={count}/>
      </Tasks>
        </section>
      </main>
    </div>
  );
};
const Tasks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 0rem;
  max-width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar-track {
    background-color: rgba(57, 57, 83, 0.475);
    border-radius: .4rem;
  }
  &::-webkit-scrollbar {
    height: .9rem;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #53535e;
    border-radius: .4rem;
  }
`;

export default Task;
