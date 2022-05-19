import React from 'react'
import { Text } from '../UI'
import { VscCircleFilled } from "react-icons/vsc";
import styled from 'styled-components';

export default function ProjectCard() {
  return (
    <Card className='project mt-2'>
      <div className='ms-4 mt-2'>
        <Text text={'Projects'} className={'fw-bold text-white fs-3'} />
      </div>

      <div className='mt-2 ms-4 d-flex flex-column'>
        <div className='text-white mt-2 fs-5' >
          <VscCircleFilled className='text-white me-2' />
          Design profile page
        </div>
        <div className='text-white mt-2 fs-5' >
          <VscCircleFilled className='text-white me-2' />
          Design profile page
        </div>
        <div className='text-white mt-2 fs-5' >
          <VscCircleFilled className='text-white me-2' />
          Design profile page
        </div>

      </div>



    </Card>
  )
}

const Card = styled.div`
    background-color: #21222C;
    width: 300px;
    height: 250px;
    margin-left: 10px;
    border-radius:12px;
`;