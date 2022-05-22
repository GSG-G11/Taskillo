import React from 'react';

export default function Button({ title, onClick, className }) {
  return (
    <button className={`btn ${className}`} type="button" onClick={onClick}>
      {title}
    </button>
  );
}
