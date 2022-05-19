import React from 'react';

import styled from 'styled-components';

export default function Card({
  task: {
    taskid,
    tasktitle,
    
    //   status,
    //   taskTitle,
    //   description,
    //   endDate,
    //   //   priority, >> border-bottom
  },
}) {
  return (
    <Cards>
      <span>{status}</span>
      <span className="fw-bold">{taskTitle}</span>
      <p className="task-desc">{description}</p>
      <div>
        <span className="task-date">{endDate}</span>
      </div>
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  border-radius: 10px;
  padding: 10px;
  height: 100%;
  background: #21222c;
  color: #fff;
  .task-desc,
  .task-date {
    color: #818098;
  }
  .task-date {
    color: #818098;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;
