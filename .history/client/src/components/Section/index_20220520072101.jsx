import React from 'react';
import SectionName from './SectionName';
import Cards from '../Card/Cards';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Section({ name, sectionId }) {
  const { tasks } = useSelector((state) => state.tasks.value);

  return (
    <Div>
      <div className="section">
        <SectionName name={name} />
        <div className="cards">
          <Cards sectionId={sectionId} />
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
