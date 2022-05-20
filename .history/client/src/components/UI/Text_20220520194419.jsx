import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

export default function Text({ text, className }) {
  return <div >
    <p>{text}</p>
    <FiMoreVertical className='text-white' />
  </div>;
}
