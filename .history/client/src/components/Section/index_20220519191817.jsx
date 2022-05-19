import React from 'react';
import SectionName from './SectionName';
import Cards from '../Card/Cards';
import styled from 'styled-components';

export default function Section() {
  return (
    <Div>
      <div className="section">
        <SectionName name="To do" />
        <div>
          <Cards />
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .section {
    background: #fff;
  }
`;
