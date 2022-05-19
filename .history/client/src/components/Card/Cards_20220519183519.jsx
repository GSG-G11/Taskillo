import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTask } from '../../state/tasks';

export default function Cards() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks.value);

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

  return <div>
      {tasks.map((task) => {
        return <div key={task.id}>
            <span>{task.status}</span>
            <span className="fw-bold">{task.taskTitle}</span>
            <p className="task-desc">{task.description}</p>
            <div>
              <span className="task-date">{task.endDate}</span>
            </div>
          </div>
      }
  </div>;
}
