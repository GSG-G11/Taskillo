import React, { useEffect } from 'react';
import SectionName from './SectionName';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTask } from '../../state/tasks';
import Card from '../Card';
import { FiMoreVertical } from 'react-icons/fi';

export default function Section({ name, sectionId }) {
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
    <Div>
      <div className="section">
        <div className='d-flex'>
          <SectionName name={name} />

        <Droppable droppableId={sectionId.toString()} className="divv">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="card-container"
            >
              {tasks.map((task, index) => {
                if (task.sectionid === sectionId) {
                  return <Card key={task.id} task={task} index={index} />;
                } else return true;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .section {
    color: #fff;
  }
  .card-container {
    height: 58vh;
    overflow-y: scroll;
    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 1rem;
    }
    &::-webkit-scrollbar {
      width: 5px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #323239;
      border-radius: 1rem;
    }
  }
  .sc-hKMtZM.byzGcZ {
    height: 40%;
  }
`;
