import React, { useEffect, useState } from 'react';
import { Navbar, TableTask } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTask } from '../../state/task';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { setPageName } from '../../state/page';

const List = () => {
  const pagination = useSelector((state) => state.pagination.value);

  const dispatch = useDispatch();
  dispatch(setPageName('list'));
  
  const [count, setCount] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const handleData = async () => {
      try {
        const Response = await axios.get(`/api/v1/project/${id}/tasksSection?q=${pagination}`);
        if (Response.status === 200) {
          dispatch(getTask(Response.data.data));
          setCount(Response.data.data[0].totaltask);
        }
      } catch (error) {
        console.log(error, 'error');
      }
    };
    handleData();
  }, [dispatch, pagination, id]);

  const taskDeleted = async (id) => {
    try {
      const Response = await axios.delete(`/api/v1/task/${id}`);
      if (Response.status === 200) {
        dispatch(deleteTask(id));
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <div>
      <Navbar title={`Tasks`} />
      <Tasks>
        <TableTask taskDeleted={taskDeleted} count={count} />
      </Tasks>
    </div>
  );
};
const Tasks = styled.div`
  margin-left:20px;  
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 0rem;
  max-width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar-track {
    background-color: rgba(57, 57, 83, 0.475);
    border-radius: 0.4rem;
  }
  &::-webkit-scrollbar {
    height: 0.9rem;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #53535e;
    border-radius: 0.4rem;
  }
`;

export default List;
