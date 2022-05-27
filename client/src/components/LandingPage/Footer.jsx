import React from "react";
import { Link } from "react-router-dom";
import FLogo from './img/footer-logo.svg';
import FMobile from './img/mobile-footer.svg'

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="content-div">
          <div className="row">
            <div className="col-lg-7 clm">
              <div className="footer-content">
                <div className="logo-div">
                  <img src={FLogo} alt="Footer Logo" />
                </div>
                <h2 className="footer-title">
                  Get a full picture <br className="d-none d-sm-inline" /> On what’s
                  going on
                </h2>
                <Link className="btn try-btn" to='/signup'>Try for free</Link>
              </div>
            </div>

            <div className="col-lg-5 clm">
              <div className="image-div">
                <img src={FMobile} alt="Mobile Footer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circles circle1"></div>
      <div className="circles circle2"></div>
      <div className="circles circle3"></div>
    </footer>
  );
};

export default Footer;
