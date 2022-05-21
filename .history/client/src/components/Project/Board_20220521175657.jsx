import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '..';
import Section from '../Section';
import { setSection } from '../../state/sections';
import { DragDropContext } from 'react-beautiful-dnd';
import { setTask } from '../../state/tasks';

export default function Board() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { sections } = useSelector((state) => state.sections.value);
  const { tasks } = useSelector((state) => state.tasks.value);
  const [isOpen, setIsOpen] = useState(false);
  const [newSection, setNewSection] = useState({});

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
              return <Section name={name} sectionId={id} key={id} />;
            })}
            <Div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="label-container"
              >
                <label className="add-section-label">+ Add your section</label>
              </div>
              {isOpen ? (
                <div className="carrd">
                  <input
                    type="text"
                    placeholder="Enter Section Name"
                    onChange={(e) => setNewSection(e.target.value)}
                    onBlur={() => setIsOpen(false)}
                  />
                  <div className="d-flex justify-content-end w-100">
                    <button
                      type="submit"
                      className="btn btn-primary add-section-btn"
                      onClick={async (e) => {
                        setIsOpen(false);
                        const response = await axios.post(
                          `/api/v1/project/${id}/section`,
                          {
                            name: newSection,
                          }
                        );
                        if (response.status === 201) {
                          dispatch(
                            setSection({
                              sections: [...sections, response.data.data],
                            })
                          );
                        }
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ) : null}
            </Div>
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
  .container {
    margin: 0;
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
    width: 1300px;
  }
  @media (max-width: 630px) {
    .section-container,
    .section,
    .carrd,
    .section-title,
    .card-container {
      width: 100%;
      max-width: 100%;
      margin: 0;
    }
    .section-container {
      display: flex;
      flex-direction: column;
      margin-left: 0;
      gap: 20px;
      height: 100vh;
      justify-content: start;
    }
    .card-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 0;
    }
    .section-title {
      margin-bottom: 10px;
    }
    .title {
      margin: 5px 0 10px 10px;
    }
  }
`;

const Div = styled.div`
  .label-container {
    background: #21222c;
    color: #fff;
    width: 300px;
    padding: 8px;
    border-radius: 10px;
    font-weight: bold;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .carrd {
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    background: #21222c;
    margin-bottom: 10px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input[type='text'] {
    background: #323239;
    border: none;
    padding: 8px;
    width: 96%;
    border-radius: 10px;
    margin-top: 10px;
    
  }
  .add-section-btn {
    justify-content: flex-end;
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    margin: 10px;
  }
`;
