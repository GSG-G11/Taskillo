import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import {
  RiCalendar2Line,
  RiDashboardLine,
  RiGroupLine,
  RiListCheck2,
} from 'react-icons/ri';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../state/sidebar';
import { useEffect } from 'react';
import { setUserProjects } from '../../state/userProjects';
import axios from 'axios';

const Sidebar = () => {
  const { open } = useSelector((state) => state.sidebar.value);
<<<<<<< HEAD
  const { userProjects } = useSelector((state) => state.userProjects.value);

=======
>>>>>>> development
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getUserProjects = async () => {
      try {
        const response = await axios.get('/api/v1/projects');
        dispatch(setUserProjects({ userProjects: response.data.data }));
      } catch (error) {
        console.log(error);
      }
    };
    getUserProjects();
  }, [dispatch]);

  return (
    <ASide className={open ? 'sidebar' : 'sidebar close'}>
      <header className='side-header'>
        <div className='logo'>
          <img src={logo} alt='Taskillo' width='25' />
          <h2 className='logo-name'>Taskillo</h2>
        </div>
        <button
          onClick={() => dispatch(setOpen({ open: !open }))}
          className={open ? 'btn navbar-toggler active' : 'btn navbar-toggler'}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </button>
      </header>
      <nav className='side-nav'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <NavLink to='/dashboard' className='nav-link'>
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
<<<<<<< HEAD
      <nav className='side-projects'>
        <h3 className='side-title'>Projects</h3>
        <ul className='nav flex-column'>
          {
            userProjects.map(({name, id}) => (
              <li className='nav-item' key={id}>
                <NavLink to={`/projects/${id}`} className='nav-link'>
                  <span className='link-name'>{name}</span>
                </NavLink>
              </li>
            ) )
          }
=======
      <nav className="side-projects">
        <h3 className="side-title">Projects</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/project/1" className="nav-link">
              <span className="link-name">Graduation Project</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/project/2" className="nav-link">
              <span className="link-name">Movflx Website</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/project/6" className="nav-link">
              <span className="link-name">Taskillo Team</span>
            </NavLink>
          </li>
>>>>>>> development
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
  padding: 1.4rem 1rem;
  transition: all 0.5s;
  overflow: hidden;
  z-index: 1000;
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
        color: #fff;
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
    margin-bottom: 3rem;
    .nav-link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0.9rem 1rem;
      border-radius: 0.7rem;
      font-size: 1.1rem;
      color: #b8b8b8;
      .link-name {
        white-space: nowrap;
      }
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
  .side-projects {
    .side-title {
      font-size: 1rem;
      font-weight: 400;
      color: #777777;
      margin-bottom: 0.6rem;
    }
    .nav-link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0.9rem 1rem;
      border-radius: 0.7rem;
      font-size: 1.1rem;
      color: #b8b8b8;
      .link-name {
        white-space: nowrap;
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
    padding: 1.4rem 0.3rem;
    .side-header {
      justify-content: center;
      .logo {
        display: none;
      }
    }
    .side-nav {
      .nav-item {
        width: 100%;
        .nav-link {
          justify-content: center;
          svg {
            margin-right: 0;
          }
          .link-name {
            display: none;
          }
        }
      }
    }
    .side-projects {
      display: none;
    }
  }

  @media (max-width: 630px) {
    width: 100%;
  }
`;

export default Sidebar;
