import React from "react";
import { Link } from "react-router-dom";
import Logo from './img/Logo.svg';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/home">
          <img src={Logo} alt="Logo" />
          Taskillo
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Browse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Teachers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Help
              </Link>
            </li>
          </ul>

          <div className="btns">
            <Link to="/login" className="btn login">
              Login
            </Link>
            <Link to="/signup" className="btn app">
              Try for free
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
