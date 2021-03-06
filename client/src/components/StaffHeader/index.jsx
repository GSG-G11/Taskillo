import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { generateAvatarColor } from '../../utils';

const StaffHeader = ({ name = 'Movflx' }) => {
  const [color, setColor] = useState('');
  useEffect(() => {
    const avatarColor = generateAvatarColor(name);
    setColor(avatarColor);
  }, [name]);

  return (
    <Header className="staff-header">
      <div className="avatar" style={{ backgroundColor: color }}>
        <span className="chart">{name.split('')[0].toUpperCase()}</span>
      </div>
      <h3 className="project-name">{name}</h3>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 10;
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-right: 0.5rem;
    color: #fff;
  }

  .project-name {
    margin: 0;
    font-size: 1.2rem;
    color: #b8b8b8;
  }
`;

export default StaffHeader;
