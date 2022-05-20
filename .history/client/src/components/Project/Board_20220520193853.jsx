import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '..';
import Section from '../Section';
import { setSection } from '../../state/sections';
import { DragDropContext } from 'react-beautiful-dnd';
import { setTask } from '../../state/tasks';
import 
export default function Board() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { sections } = useSelector((state) => state.sections.value);
  const { tasks } = useSelector((state) => state.tasks.value);

  useEffect(() => {
    async function getSections(projectid) {
      try {
        const response = await axios.get(
          `/api/v1/project/${projectid}/sections`
        );
        if (response.status === 200) {
          dispatch(setSection({ sections: response.data.data }));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getSections(id);
  }, [dispatch, id]);

  const onDragEnd = ({ source, destination, draggableId, type }) => {
    if (!destination || type === 'section') return;
    if (destination.droppableId === source.droppableId) {
      const items = Array.from(tasks);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);
      dispatch(setTask({ tasks: items }));
    } else {
      onDragStart({ destination, draggableId });
    }
  };

  const onDragStart = async ({ destination, draggableId }) => {
    const draggableTask = tasks.filter((task) => task.id === +draggableId);
    try {
      const response = await axios.put(`/api/v1/task/drag`, {
        destinationSection: +destination.droppableId,
        taskId: draggableTask[0].id,
      });
      if (response.status === 200) {
        const dragged = {
          ...response.data.data.task,
          sectionname: response.data.data.sectionname,
        };
        const ordered = tasks.map((task) => {
          if (task.id === dragged.id) {
            return dragged;
          } else {
            return task;
          }
        });
        dispatch(setTask({ tasks: ordered }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page-container d-flex flex-row">
      <Title className="container">
        <div>
          <Text text="Tasks & Sections" className="text-white title" />
          
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="section-container d-flex">
            {sections.map(({ id, name }, index) => {
              return <Section name={name} sectionId={id} key={id} />
            })}
          </div>
        </DragDropContext>
      </Title>
    </div>
  );
}

const Title = styled.div`
  .title {
    font-weight: 600;
    margin: 10px 20px;
  }
  .section-container {
    gap: 20px;
    margin-left: 20px;
    overflow-x: auto;
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
  .container {
    margin-top: 20px;
  }
`;
