import React from "react";
import { Link } from 'react-router-dom'
import Mobile from './img/mobile-header.svg';

const BannerSec = () => {
  return (
    <section className="new-sec header-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 clm">
            <div className="content-div">
              <span className="tag">Get 50% off - New year sale!</span>
              <h1 className="page-title">
                <span className="txt">Tackle daily tasks with peace of mind</span>{" "}
                <span className="no-color">&#9996;</span>
              </h1>
              <p className="sec-para">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et
              </p>
              <div className="btns-div">
                <Link className="btn try-btn" to="/sendEmail">Try for free</Link>
                <button className="btn see-btn">
                  <span className="icon-arrow-right icon"></span> Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 clm">
            <div className="image-div">
              <img src={Mobile} alt="Mobile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSec;
