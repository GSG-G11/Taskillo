import React from 'react';
import SectionName from './SectionName';
import Cards from '../Card/Cards';

export default function Section() {
  return (
    <div>
      <SectionName name="To do" />
      <div>
        <Cards />
      </div>
    </div>
  );
}
