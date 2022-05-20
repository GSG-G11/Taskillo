import React, { useEffect } from 'react';
import SectionName from './SectionName';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTask } from '../../state/tasks';
import Card from '../Card';

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
              <div>
                <im
              </div>
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
    overflow: scroll;
    ::-webkit-scrollbar {
      width: 1px;
    }
    ::-webkit-scrollbar-thumb {
      background: #818098;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: red;
    }
  }
  .sc-hKMtZM.byzGcZ {
    height: 40%;
  }
`;
