import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTask } from '../../state/tasks';
import Card from '../Card';

export default function Cards({ sectionId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks.value);

  useEffect(() => {
    async function getDetails(projectid) {
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
    }
    getDetails(id);
  }, [dispatch, id]);

  return (
    <div>
      {tasks.filter((task) => {
        console.log(task);
      })}
    </div>
  );
}
