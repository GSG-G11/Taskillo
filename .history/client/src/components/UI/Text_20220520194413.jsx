import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

export default function Text({ text, className }) {
  return <div className={className}>
    <p>{text}</p>
    <FiMoreVertical className='text-white' />
  </div>;
}
