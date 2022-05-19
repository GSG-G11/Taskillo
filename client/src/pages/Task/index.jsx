import React, { useEffect } from 'react';
import { Navbar, TableTask } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getTask } from '../../state/task';
import axios from 'axios';
import generateGreeting from '../../utils/generateGreeting';

const Task = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  const greeting = generateGreeting();
  const dispatch = useDispatch();
  const handleData = async () => {
    try {
      const Response = await axios.get('/api/v1/tasks');
      if (Response.status === 200) {
        console.log('hello handledata');
        console.log(Response.data.data, 'data');
        dispatch(getTask(Response.data.data));
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className='page-container'>
      <Outlet />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`${greeting}, ${userInfo.username}`} />
        <TableTask />
      </main>
    </div>
  );
};

export default Task;
