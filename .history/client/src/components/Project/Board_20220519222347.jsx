import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '..';
import { setTask } from '../../state/tasks';
import Section from '../Section';

export default function Board() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [sections, setSections] = React.useState([]);

  useEffect(() => {
    async function getSections(projectid) {
      try {
        const response = await axios.get(
          `/api/v1/project/${projectid}/sections`
        );
        if (response.status === 200) {
          setSections(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getSections(id);
  }, [dispatch, id]);

  return (
    <div className="page-container d-flex flex-row">
      <Title className="container">
        <Text text="Tasks & Sections" className="text-white title" />
        <div className="section-container d-flex">
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
        </div>
      </Title>
    </div>
  );
}

const Title = styled.div`
  .title {
    font-weight: 600;
    margin: 20px;
  }
  .section-container {
    overflow: scroll;
    gap: 20px;
    margin-left: 20px;
    ::-webkit-scrollbar {
      width: 1px;
    }

    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 50px;
      width: 1px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: red;
    }
  }
  .container {
    margin-top: 20px;
  }
`;
