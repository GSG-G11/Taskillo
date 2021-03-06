import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { statusColor, formatDate } from '../../utils';

export default function Card({
  task: { description, enddate, priority, status, id, name },
  index,
}) {
  let formatedTime = `${formatDate(enddate.split('T')[0])}`;
  const color = statusColor(status);
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <CardDiv
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`carrd ${priority}`}
        >
          <span className={`status ${color}`} status={status}>
            {status}
          </span>
          <span className="fw-bold task-title">{name}</span>
          <p className="task-desc">{description}</p>
          <div>
            <span className="task-date">{formatedTime}</span>
          </div>
        </CardDiv>
      )}
    </Draggable>
  );
}

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  background: #21222c;
  margin-bottom: 10px;
  color: #fff;
  :hover{
    cursor:pointer;
  }
  .task-title {
    font-size: 1rem;
  }
  .status {
    width: fit-content;
    padding: 0 0.6rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .todo {
    background: #ff8800;
  }
  .progress {
    background: #6600cc;
  }
  .done {
    background: #06c270;
  }
  .task-desc {
    color: #818098;
    font-size: 0.8rem;
  }
  .task-date {
    color: #818098;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
