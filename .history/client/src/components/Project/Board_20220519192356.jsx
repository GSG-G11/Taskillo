import React from 'react';
import styled from 'styled-components';
import { Text } from '..';
import Section from '../Section';

export default function Board() {
  return (
    <div className="page-container d-flex flex-row">
      <Title></Title>
        <div>
          <Text text="Tasks & Sections" className="text-white title" />
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
`;
