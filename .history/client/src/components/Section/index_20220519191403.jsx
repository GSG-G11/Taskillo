import React from 'react';
import SectionName from './SectionName';
import Cards from '../Card/Cards';
import styled from 'styled-components';

export default function Section() {
  return (
    <Div className="section">
      <SectionName name="To do" />
      <div>
        <Cards />
      </div>
    </Div>
  );
}

const Div = styled.div`
bac
`