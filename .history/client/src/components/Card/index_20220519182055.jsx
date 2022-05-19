import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTask } from '../../state/tasks';
import { Text } from '../UI';
import styled from 'styled-components';

// { taskTitle, priority, description, endDate }
export default function Card() {
  //   const { id } = useParams();
  //   const dispatch = useDispatch();
  //   const task = useSelector((state) => state.tasks.value);

  //   const getDetails = async (projectid) => {
  //     try {
  //       const response = await axios.get(
  //         `/api/v1/project/${projectid}/tasksSection`
  //       );
  //       if (response.status === 200) {
  //         dispatch(setTask({ tasks: response.data.data }));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getDetails(id);
  //   }, [id]);

  return (
    <Cards>
      <span>Done</span>
      <span className="fw-bold">Design Profile Page</span>
      <p>
        we need to redesign a profile, There are many examples you can try to
        use.
      </p>

      <div>
        <span>28 Mar</span>
      </div>
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  background: #21222C;
  color: #fff;
`;
