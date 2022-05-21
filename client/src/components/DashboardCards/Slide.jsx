import React from 'react'
import { Link } from 'react-router-dom';
import { Text } from '../UI';
import styled from 'styled-components';

export default function SlideCard() {
  return (
    <Card className='text-white w-100 d-flex justify-content-between mt-2' >
        <div className='staff ms-2'>
            <Text text={'Staff'}/>
        </div>
        <div className='show-more ms-2'>
            <Link to='/staff' className='text-decoration-none me-3 text-white'> Show more</Link>
        </div>
    </Card>
  )
};

const Card = styled.div `
@media (min-width: 1400px){
    .staff {
      margin-left: 4.5rem !important;      
    }
    .show-more {
      margin-right: 2.7rem;;
    }
}
`

