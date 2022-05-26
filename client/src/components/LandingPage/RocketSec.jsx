import React from "react";
import Rocket from './img/rocket.png'
import DoneMan from './img/done-man.svg'
import DoneWomen from './img/done-women.svg'

const RocketSec = () => {
  return (
    <section className="new-sec rocket-sec">
      <div className="container">
        <div className="rocket-box">
          <h2 className="box-title">
            Get your team organized. <br className="d-none d-md-inline" />
            <span className="color">Ship products faster.</span>
          </h2>
          <p className="box-para">
            Morem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. <br /> At vero eos et
          </p>

          <img
            src={Rocket}
            className="floating-images rocket"
            alt="Rocket"
          />
          <img
            src={DoneMan}
            className="floating-images man"
            alt="Done Man"
          />
          <img
            src={DoneWomen}
            className="floating-images women"
            alt="Done Women"
          />
        </div>

        <div className="circles circle1"></div>
        <div className="circles circle2"></div>
        <div className="circles circle3"></div>
        <div className="circles circle4"></div>
      </div>
    </section>
  );
};

export default RocketSec;
