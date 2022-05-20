import React from 'react'
import { Link } from 'react-router-dom';
import { Text } from '../UI';

export default function SlideCard() {
  return (
    <div className='text-white w-100 d-flex justify-content-between mt-1' >
        <div>
            <Text text={'Staff'}/>
        </div>
        <div>
            <Link to='/staff' className='text-decoration-none me-4 text-white'> Show more</Link>
        </div>
    </div>
  )
};


