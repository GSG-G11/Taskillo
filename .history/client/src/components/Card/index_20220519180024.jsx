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
      console.log(response);
      if (response.status === 200) {
        dispatch(setTask({ tasks: response.data.data }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  return (
    <div>
      {console.log(task)}
      {/* <span>{task.tasks[0].priority}</span> */}
      {/* <Text title={task.tasks[0].description} />
      <Text title={task.tasks[0].taskTitle} />
      <div>
        <span>{task.tasks[0].endDate}</span>
      </div>
    </div> */}
    </div>
  );
}
