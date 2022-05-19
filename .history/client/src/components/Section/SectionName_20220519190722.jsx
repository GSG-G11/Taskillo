import React from 'react';
import styled from 'styled-components';

export default function SectionName({ name }) {
  return (
    <Title className="section-title">
      <p>{name}</p>
    </Title>
  );
}

const Title = styled.div`
  background: #21222c;
  color: #fff;
  width: 300px;
  margin: 10px;
`;
