import React from 'react';

export default function Button({ title, onClick }) {
  return (
    <button className="btn btn-primary " type="button" onClick={onClick}>
      {title}
    </button>
  );
}
