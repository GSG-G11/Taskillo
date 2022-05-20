import React from 'react'
import styled from 'styled-components';
import githubIcon from '../../images/github.svg';
import linkedinIcon from '../../images/linkedin.svg';
import twitterIcon from '../../images/twitter.svg'
import { Text } from '../UI';


function StaffCard({ className, avatar, memberName }) {
  return (
    <Card className={`member mt-2 d-flex flex-column justify-content-center align-items-center ${className}`}>
      <div className='text-white'><img src={avatar} alt="avatar" className='img-fluid w-100' /></div>
      <Text text={memberName} className={'text-white mt-4'}/>
      <div className='mt-2'>
      <img src={twitterIcon} alt="githubIcon" role="button" className='mx-2'/>
      <img src={linkedinIcon} alt="linkedinIcon" role="button" className='mx-2'/>
      <img src={githubIcon} alt="githubIcon" role="button" className='mx-2'/>
      </div>
    </Card>
  )
}
const Card = styled.div`
    background-color: #21222C;
    width: 300px;
    height: 250px;
    border-radius:12px;
`;
export default StaffCard