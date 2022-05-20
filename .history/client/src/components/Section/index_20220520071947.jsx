import React from 'react';
import SectionName from './SectionName';
import Cards from '../Card/Cards';
import styled from 'styled-components';

export default function Section({ name, sectionId }) {
  return (
    <Div>
      <div className="section">
        <SectionName name={name} />
        <div className="cards">
         {
           ()
         }
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .section {
    color: #fff;
  }
  .cards {
    height: 55vh;
  }
`;
