import React from 'react';
import styled from 'styled-components';

export default function SectionName({ name }) {
  return (
    <div className="section-title">
      <p>{name}</p>
    </div>
  );
}

const Title = styled.dev