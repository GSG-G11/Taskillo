import React from 'react'
import styled from 'styled-components'
import { Text } from '../UI'

export default function ActivityCard({className}) {
  return (
    <Card className={`mt-2 ${className}`}>
      <div className='ms-4 mt-2'>
        <Text text={'Latest news'} className={'fw-bold text-white fs-3'} />
      </div>

      <div className="d-flex flex-column  my-3 ms-4">
        <div className="activite-date fs-8">Tuesday, 11:00 Am</div>
        <Text text={'Today is Teresa Parker birthday!'} className={'text-white fs-8 mt-1'} />
      </div>
      <div className="d-flex flex-column  my-3 ms-4">
        <div className="activite-date fs-8">Tuesday, 8:00 Am</div>
        <Text text={'your vacation starts in 2 weeks'} className={'text-white fs-8 mt-1'} />
      </div>
      <div className="d-flex flex-column  my-3 ms-4">
        <div className="activite-date fs-8">Monday, 1:15 Am</div>
        <Text text={'Session CS'} className={'text-white fs-8 mt-1'} />
      </div>
      <div className="d-flex flex-column  my-3 ms-4">
        <div className="activite-date fs-8">Saturday, 1:15 Am</div>
        <Text text={'Session soft skills'} className={'text-white fs-8 mt-1'} />
      </div>
      <div className="d-flex flex-column  my-3 ms-4">
        <div className="activite-date fs-8">yestarday, 1:15 Am</div>
        <Text text={'Playing football'} className={'text-white fs-8 mt-1'} />
      </div>

      <div className='text-white mt-5 ms-4'>Show more</div>



    </Card>
  )
}

const Card = styled.div`
  background-color: #21222C;
  width: 500px;
  height: calc(100vh - 100px);
  border-radius:12px;
  margin-right: 30px;
  @media (min-width: 768px) and (max-width: 992px){
    height: 900px
  }
  @media (min-width: 1024px) and (max-width: 1200px){
    margin-right: 10px
  }
  @media (max-width: 992px) {
    display: none;
  }
  .activite-date {
    color: #6F7074;
  }
`;