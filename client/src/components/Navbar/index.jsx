import React from 'react';
import { Button, Image, Text } from '../UI';
import { RiNotification2Line } from 'react-icons/ri';
import './style.css';

export default function Navbar({ title }) {
  return (
    <nav className="nav-top w-100 d-flex justify-content-end">
      <div className="navbar-container d-flex justify-content-between align-items-center">
        <Text text={title} />
        <div className="d-flex align-items-center gap-3">
          <Button
            title="+ Add"
            onClick={() => console.log('ok')}
            className="btn btn-primary add-project"
          />
          <RiNotification2Line className="icon" />
          <Image src="https://via.placeholder.com/40x40" className="user-img" />
        </div>
      </div>
    </nav>
  );
}
