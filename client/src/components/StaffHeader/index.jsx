import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StaffHeader = ({ name='Movflx'}) => {
  const [ color, setColor ] = useState('')
  useEffect(() => {
    const generateAvatarColor = () => {
      const letters = name.split('');
      const redColor = letters[0].charCodeAt(0);
      const greenColor = letters[1].charCodeAt(0);
      const blueColor = letters[2].charCodeAt(0);
      const color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
      return color;
    }
    const avatarColor = generateAvatarColor();
    setColor(avatarColor);
  }, [name])

  return (
    <Header className='staff-header'>
      <div className="avatar" style={{backgroundColor: color}}>
        <span className='chart'>{name.split('')[0].toUpperCase()}</span>
      </div>
      <h3 className="project-name">{name}</h3>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .avatar{
    width: 45px;
    height: 45px;
    border-radius: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-right: .5rem;
    color: #FFF;
  }

  .project-name{
    margin-bottom: 0;
    font-size: 1.4rem;
    color: #B8B8B8;
  }
`

export default StaffHeader