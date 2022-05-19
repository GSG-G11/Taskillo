import React from 'react';

import styled from 'styled-components';

export default function Card({
  task: {
    description,
    enddate,
    priority,
    sectionid,
    sectionname,
    status,
    taskid,
    tasktitle,
  },
}) {
  return (
    <CardDiv>
      <span>{status}</span>
      <span className="fw-bold">{tasktitle}</span>
      <p className="task-desc">{description}</p>
      <div>
        <span className="task-date">{enddate}</span>
      </div>
    </CardDiv>
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
  color: #fff;
  // margin: 15px;
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
