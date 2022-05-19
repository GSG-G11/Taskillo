import React from 'react';
import { Button, Image, Text } from '../UI';
import { RiNotification2Line } from 'react-icons/ri';
import './style.css';

export default function Navbar({ title }) {

  return (
    <div className="d-flex justify-content-between align-items-center navbar-container">
      <Text text={title} />
      <div className="d-flex align-items-center gap-3">
        <Button
          title="+ Add"
          // onClick={openModal}
          className="btn btn-primary add-project"
        />
        <button className='btn notification'>
          <RiNotification2Line className="icon" />
        </button>
        <Image src="https://via.placeholder.com/40x40" className="user-img" />
      </div>
    </div>
  );
}

