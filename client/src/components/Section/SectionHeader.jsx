import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

export default function SectionHeader({ name, id, setClicked }) {
  return (
      <Title className="section-title"  onClick={() => setClicked(id)}>
      <p>{name}</p>
      <div>
        <AiOutlinePlus className="icon" />
        <FiMoreVertical className="text-white more icon" />
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  button.section-header-btn{
    background: none;
  }
  p {
    margin-bottom: 0;
  }
  .more {
    font-size: 20px;
    margin-left: 0.2rem;
  }
  .icon {
    cursor: pointer;
  }
`;