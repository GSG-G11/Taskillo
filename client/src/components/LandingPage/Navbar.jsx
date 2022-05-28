import React from "react";
import { Link } from "react-router-dom";
import Logo from './img/Logo.svg';

const Navbar = ({open , setOpen}) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/home">
          <img src={Logo} alt="Logo" />
          Taskillo
        </Link>

        <button
          className={open ? "navbar-toggler active" : "navbar-toggler"}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(prev => !prev)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className={open ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNav">
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
            <Link to="/sendEmail" className="btn app">
              Try for free
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
