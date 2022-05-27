import React from 'react'
import { Link } from 'react-router-dom';
import { Text } from '../UI';

export default function SlideCard() {
  return (
    <div className='text-white w-100 d-flex justify-content-between mt-2' >
        <div className='staff'>
            <Text text={'Staff'}/>
        </div>
        <div className='show-more ms-2'>
            <Link to='/staff' className='text-decoration-none me-3 text-white'> Show more</Link>
        </div>
    </div>
  )
};


