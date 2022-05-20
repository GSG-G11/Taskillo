import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Menu() {
  const { id } = useParams();
  return (
    <Div>
      <nav className="side-nav">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to={`/project/${id}/overview`} className="nav-link">
              <span className="link-name active">Overview</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/project/${id}/list`} className="nav-link">
              <span className="link-name">List</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/project/${id}/board`} className="nav-link">
              <span className="link-name">Board</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/project/${id}/staff`} className="nav-link">
              <span className="link-name">Staff</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Div>
  );
}

const Div = styled.nav`
  .side-nav {
    .nav {
      padding-left: 1rem;
      margin-top: 10px;
      .link-name {
        color: #b8b8b8;
        &.active {
          color: #fff;
        }
        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 630px) {
    .nav-link {
      padding: 0.5rem;
    }
    .link-name {
      font-size: 1rem;
    }
  }
`;

export default Menu;
