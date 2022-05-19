import React from 'react';
import styled from 'styled-components';
import { Text } from '..';
import Section from '../Section';

export default function Board() {
  return (
    <div className="page-container d-flex flex-row">
      <Title>
      <Text text="Tasks & Sections" className="text-white title" />
        <div className='section-container'>
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
  .section-container{
    background: #fff;
    max-height: 100
  }
`;
