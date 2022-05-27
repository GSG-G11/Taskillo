import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from '../Modal';
import { setTaskOpen, getTask } from '../../state';
import axios from 'axios';

export default function Calender() {
  const { tasks } = useSelector((state) => state.tasks.value);
  const { openTask } = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const handleData = async () => {
  //     try {
  //       const Response = await axios.get(`/api/v1/allTasks`);
  //       if (Response.status === 200) {
  //         dispatch(getTask(Response.data.data));
  //         setCount(Response.data.data[0].totaltask);
  //       }
  //     } catch (error) {
  //       console.log(error, 'error');
  //     }
  //   };
  //   handleData();
  // }, [dispatch, pagination]);

  const dataa = () => {
    const newd = tasks.map((task) => {
      return {
        title: task.name,
        date: task.enddate.split('T')[0],
      };
    });
    return newd;
  };

  const handleDateClick = () => {
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
      {openTask ? <Modal handleSubmit={() => console.log('ok')} /> : ''}
    </Div>
  );
}

const Div = styled.div`
  .fc-toolbar-title {
    color: #fff;
  }
`;
