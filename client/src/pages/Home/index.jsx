import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Hello World!</h1>
      {
        <h3>{user.username}</h3>
      }
    </div>
  )
}

export default Home