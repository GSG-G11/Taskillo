import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import {
  RiCalendar2Line,
  RiDashboardLine,
  RiGroupLine,
  RiListCheck2,
} from 'react-icons/ri';
import styled from 'styled-components';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ASide className={isOpen ? 'sidebar' : 'sidebar close'}>
      <header className='side-header'>
        <div className='logo'>
          <img src={logo} alt='Taskillo' width='25' />
          <h2 className='logo-name'>Taskillo</h2>
        </div>
        <button onClick={() => setIsOpen(prev => !prev)} className='btn navbar-toggler'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </button>
      </header>
      <nav className='side-nav'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <NavLink to='/dashboard' className='nav-link active'>
              <RiDashboardLine />
              <span className='link-name'>Dashboard</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/tasks' className='nav-link'>
              <RiListCheck2 />
              <span className='link-name'>Tasks</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/calender' className='nav-link'>
              <RiCalendar2Line />
              <span className='link-name'>Calender</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/staff' className='nav-link'>
              <RiGroupLine />
              <span className='link-name'>Staff</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </ASide>
  );
};

const ASide = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #21222c;
  border-right: 1px solid rgba(82, 82, 82, 0.4);
  padding: 2rem 1rem;
  transition: all .5s;

  .side-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    .logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        margin-right: 0.5rem;
      }

      .logo-name {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 0;
      }
    }
    .navbar-toggler {
      width: 35px;
      height: 35px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;

      .line {
        position: absolute;
        width: 25px;
        height: 3px;
        border-radius: 5px;
        background-color: #fff;
        transition: 0.5s;

        :nth-child(1) {
          transform: translateY(-8px);
          transition-delay: 0.125s;
        }
        :nth-child(2) {
          transform: translateY(8px);
          transition-delay: 0.25s;
        }
        :nth-child(3) {
          width: 18px;
          right: 4px;
          transition: 0.5s;
        }
      }
      &.active {
        .line {
          :nth-child(1) {
            transform: translateY(0) rotate(45deg);
          }
          :nth-child(2) {
            transform: translateY(0) rotate(-225deg);
          }
          :nth-child(3) {
            transform: translateX(-100px);
          }
        }
      }
    }
  }

  .side-nav {
    margin-bottom: 2rem;

    .nav-link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0.9rem 1rem;
      border-radius: 0.7rem;
      font-size: 1.1rem;
      color: #b8b8b8;
      svg {
        margin-right: 0.5rem;
        font-size: 1.4rem;
      }

      &.active {
        background-color: #282a36;
        color: #fff;
      }

      &:hover {
        color: #fff;
      }
    }
  }

  &.close {
    width: 65px;
    padding: 2rem 0.3rem;

    .side-header {
      justify-content: center;
      .logo {
        display: none;
      }
    }

    .side-nav {
      .nav-item {
        width: 100%;
        .nav-link{
          justify-content: center;
          svg{
            margin-right: 0;
          }
          .link-name {
            display: none;
          }
        }
      }
    }
  }
`;

export default Sidebar;
