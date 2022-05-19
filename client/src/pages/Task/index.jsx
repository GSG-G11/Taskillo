import  React,  { useEffect } from 'react';
import { Navbar,TableTask } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getTask } from '../../state/task';
import axios from 'axios';

const Task = () => {
  const userInfo = useSelector((state) => state.user.value);
  const { open } = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  const handleData = async () =>{
    try {
      const Response = await axios.get('/api/v1/tasks');
      if(Response.status === 200){

        dispatch(getTask(Response.data.data))
      }
    } catch (error) {
      console.log(error,'error');
    }

  };
 useEffect(()=>{
 handleData();
 },[])

  return (
    <div className="page-container d-flex flex-row">
      <div className={open ? 'sidebar' : 'sidebar close'}>
        <Outlet />
      </div>
      <div
        className={
          open ? 'page page-content-wrapper' : 'page page-content-wrapper-close'
        }
      >
        <Navbar title={`Good Morning, ${userInfo.username}`} />
        <TableTask />
      </div>
    </div>
  );
};

export default Task;
