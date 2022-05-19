import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTask } from '../../state/tasks';
import { Text } from '../UI';

// { taskTitle, priority, description, endDate }
export default function Card() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.value);

  const getDetails = async (projectid) => {
    try {
      const response = await axios.get(
        `/api/v1/project/${projectid}/tasksSection`
      );
      if (response.status === 200) {
        dispatch(setTask({ tasks: response.data.data }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, [id]);

  return (
    <div>
      <span>Done</span>
      <Text title='Design Profile Page' />
      <Text title='we need to redesign a profile, There are many examples you can try to use.' />
      <div>
        <span>{task.tasks[0].endDate}</span>
      </div>
    </div>
  );
}
