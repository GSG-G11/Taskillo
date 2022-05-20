import React from 'react';

export default function Text({ text, className }) {
  return <div className={className}>
    <p>{text}</p>
    <FiMoreVertical className='text-white' />
  </div>;
}
