import React from 'react';
import { Button, Image, Text } from '../UI';
import { RiNotification2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../state/modal';
import './style.css';
import styled from 'styled-components';

export default function Navbar({ title }) {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.sidebar.value);
  return (
    <Div>
      <div className="align-items-center navbar-container" style={open? {left: '300px'} : {left: '65px'}}>
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
    position: fixed;
    top: 0;
    right: 0;
    transition: all .5s;
    background-color: #21222C;
    z-index: 100;
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
