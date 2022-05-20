import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export default function Card({
  task: {
    description,
    enddate,
    priority,
    sectionid,
    sectionname,
    status,
    id,
    tasktitle,
  },
  index,
}) {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <CardDiv
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{status}</span>
          <span className="fw-bold task-title">{tasktitle}</span>
          <p className="task-desc">{description}</p>
          <div>
            <span className="task-date">{enddate}</span>
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
  height: 100%;
  background: #21222c;
  margin-bottom: 10px;
  color: #fff;
  .task-title {
    font-size: 1rem;
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
