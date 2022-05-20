import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

export default function SectionHeader({ name }) {
  return (
    <Title className="section-title">
      <p>{name}</p>
      <div>
      <AiOutlinePlus />
      <FiMoreVertical className="text-white nore" />
      </div>
    </Title>
  );
}

const Title = styled.div`
  background: #21222c;
  color: #fff;
  width: 300px;
  padding: 8px;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 10px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-bottom: 0;
  }
`;
