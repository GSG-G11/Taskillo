import React, { useEffect, useState } from 'react';
import { Navbar, TableTask } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { deleteTask, getTask } from '../../state/task';
import axios from 'axios';
import generateGreeting from '../../utils/generateGreeting';
import Sidebar from '../../components/Sidebar';

const Task = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  const pagination = useSelector((state) =>state.pagination.value);
  const greeting = generateGreeting();

  console.log(pagination,'page');
  const dispatch = useDispatch();

  const [count, setCount] = useState(0)
  useEffect(() => {
    const handleData = async () => {
      try {
        const Response = await axios.get(`/api/v1/tasks?q=${pagination}`);
        console.log(Response.data.data,'dataaadt data ');
        console.log(Response.data.data[0].totaltask,'get data pagnation');
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
    <div className='page-container'>
      <Sidebar />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`${greeting}, ${userInfo.username}`} />
        <TableTask taskDeleted={taskDeleted} count={count}/>
      </main>
    </div>
  );
};

export default Task;
