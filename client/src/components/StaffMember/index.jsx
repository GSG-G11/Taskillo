import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import generateAvatarColor from '../../utils/generateAvatarColor'

const StaffMember = ({user: {image, name, role}}) => {
  const [color, setColor] = useState('')
  useEffect(() => {
    const avatarColor = generateAvatarColor(name);
    setColor(avatarColor);
  }, [name])
  return (
    <Member className="staff-member">
      <div className="member-image">
        {
          image ? (
            <img src={image} alt="User" />
          )
          : (
            <div className="user-avatar" style={{backgroundColor: color}}>
              <span>{name[0]}</span>
            </div>
          )
        }
      </div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <span className="member-role">{role}</span>
      </div>
    </Member>
  )
}

const Member = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: #fff;
  background-color: #21222C;
  border-radius: .7rem;
  padding: .5rem 1rem;
  margin-left: calc(.5rem + 45px);
  margin-top: 1.2rem;
  position: relative;

  &::before{
    content: '';
    width: calc((.8rem + 45px) / 2);
    height: 2px;
    background-color: #323239;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
  }

  &::after{
    content: '';
    width: 2px;
    height: 135%;
    background-color: #323239;
    position: absolute;
    left: calc((-.8rem + -45px) / 2);
    bottom: 50%;
    transform: translate(-100%, 1px);
    z-index: 0;
  }

  .member-image {
    width: 40px;
    height: 40px;
    margin-right: .7rem;
    border-radius: 50%;

    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-avatar{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }

  .member-info{
    .member-name{
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 0;
      color: #B8B8B8;
    }
    .member-role{
      color: #817676;
      font-size: .9rem;
      text-transform: capitalize;
    }
  }
`;

export default StaffMember