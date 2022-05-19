import React from 'react';
import SectionName from './SectionName';
import Cards from '../Card/Cards';

export default function Section() {
  return (
    <div className=''>
      <SectionName name="To do" />
      <div>
        <Cards />
      </div>
    </div>
  );
}
