import React from 'react';

export default function Image({ alt, className, src }) {
  return <img className={className} alt={alt} src={src} />;
}
