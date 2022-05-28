import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from '../Modal';
import { setTaskOpen, setAction, setDate } from '../../state';
import axios from 'axios';

export default function Calender() {
  const { openTask } = useSelector((state) => state.modal.value);
  const projectId = useSelector((state) => state.id.value);
  const dateTask = useSelector((state) => state.date.value);
  const [tasks, setTask] = useState([]);
  const [add, setAdd] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAction({ type: 'calendar' }));
    const handleData = async () => {
      try {
        const Response = await axios.get(`/api/v1/allTasks`);
        if (Response.status === 200) {
          setTask(Response.data.data);
        }
      } catch (error) {
        console.log(error, 'error');
      }
    };
    handleData();
  }, [dispatch, add]);

  const addTask = async (task) => {
    const { name, description, priority, sectionid, status } = task;
    const newTask = {
      name,
      description,
      priority,
      sectionid,
      status,
      projectId,
      enddate: dateTask,
    };
    try {
      const response = await axios.post(
        `/api/v1/project/${newTask.projectId}/task`,
        newTask
      );
      if (response.status === 201) {
        dispatch(setTaskOpen(!openTask));
        dispatch(setAdd(!add));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dataa = () => {
    const newd = tasks.map((task) => {
      return {
        title: task.name,
        date: task.enddate.split('T')[0],
      };
    });
    return newd;
  };

  const handleDateClick = ({ dateStr }) => {
    dispatch(setDate(dateStr));
    dispatch(setTaskOpen(true));
  };

  return (
    <Div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={dataa()}
      />
      {openTask ? <Modal handleSubmit={(task) => addTask(task)} /> : ''}
    </Div>
  );
}

const Div = styled.div`
  .fc-toolbar-title {
    color: #fff;
    font-size: 1.5em;
  }
  a {
    color: #8a8989;
  }
  .fc-h-event {
    display: block;
    border: none;
    background-color: #3e4247;
  }
  .fc .fc-button-primary {
    background-color: #21222c;
    border: 1px solid #343333;
  }
`;
