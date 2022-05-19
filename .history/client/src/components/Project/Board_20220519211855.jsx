import React from 'react';
import styled from 'styled-components';
import { Text } from '..';
import Section from '../Section';

export default function Board() {
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
    <div className="page-container d-flex flex-row">
      <Title>
        <Text text="Tasks & Sections" className="text-white title" />
        <div className="section-container">
          <Section />
        </div>
      </Title>
    </div>
  );
}

const Title = styled.div`
  .title {
    font-weight: 600;
    margin: 1rem 2rem;
  }
  .section-container {
    background: #fff;
  }
`;
