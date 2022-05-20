import React from 'react';
import { Button, Image, Text } from '../UI';
import { RiNotification2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setOpen } from '../../state/modal';
import './style.css';
import styled from 'styled-components';

export default function Navbar({ title }) {
  const dispatch = useDispatch();
  return (
    <Div>
      <div className="align-items-center navbar-container">
        <Text text={title} className="nav-title" />
        <div className="d-flex align-items-center gap-3">
          <Button
            type="button"
            title="+ Add"
            onClick={() => dispatch(setOpen({ open: 'true' }))}
            className="btn btn-primary add-project"
          />
          <button className="btn notification">
            <RiNotification2Line className="icon" />
          </button>
          <Image src="https://via.placeholder.com/40x40" className="user-img" />
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .navbar-container {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 630px) {
    .nav-title {
      font-size: 1rem;
    }
  }
  @media (max-width: 400px) {
    .align-items-center.navbar-container {
      display: flex;
      justify-content: center;
    }
  }
`;
