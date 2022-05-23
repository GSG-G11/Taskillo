import React from 'react'
import { Link } from 'react-router-dom';
import { Text } from '../UI';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function SlideCard() {
  const {open} = useSelector(state => state.sidebar.value)
  return (
    <Card className='text-white w-100 d-flex justify-content-between mt-2' >
        <div className={open ? 'staff ms-2' : 'staff Staff-close'}>
            <Text text={'Staff'}/>
        </div>
        <div className={open ? 'show-more ms-2 show-open': 'show-more ms-2 show-close'}>
            <Link to='/staff' className='text-decoration-none me-3 text-white'> Show more</Link>
        </div>
    </Card>
  )
};

const Card = styled.div `
.Staff-close {
  margin-left: 1.5rem;
  transition: 0.5s;

}
.show-close {
  margin-right: 10rem;
  transition: 0.5s;
}
.show-open{
  transition: 0.5s;
}

@media (min-width: 1400px){
    .staff {
      margin-left: 4.5rem !important;      
    }
    .show-more {
      margin-right: 2.7rem;;
    }
}
`

