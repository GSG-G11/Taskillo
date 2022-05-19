import React from 'react';

import styled from 'styled-components';

export default function Card({
  task: {
    description: "create tasks router"
enddate: "2022-05-22T21:00:00.000Z"
priority: " low"
sectionid: 2
sectionname: "done"
status: "done"
taskid: 2
tasktitle: "to do routes"
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
