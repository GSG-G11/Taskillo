import React from "react";
import DoingTasks from './img/doing-tasks.svg';
import JustWhat from './img/just-what.svg';

const ArticlesSec = () => {
  return (
    <>
      <section className="new-sec article-sec f-article">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clm">
              <div className="content-div">
                <h3 className="sec-title">
                  Doing tasks in a <br className="d-none d-sm-inline" /> Colorful
                  way
                </h3>
                <p className="sec-para">
                  Morem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et
                </p>

                <button className="btn grab-btn">Grab it now</button>
              </div>
            </div>

            <div className="col-lg-6 clm">
              <div className="image-div">
                <img src={DoingTasks} alt="Tasks" />
              </div>
            </div>
          </div>
        </div>

        <div className="circles circle1"></div>
      </section>
      <section className="new-sec article-sec s-article">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clm">
              <div className="image-div">
                <img src={JustWhat} alt="Just What" />
              </div>
            </div>

            <div className="col-lg-6 clm">
              <div className="content-div">
                <h3 className="sec-title">
                  Just what you need, <br className="d-none d-sm-inline" /> And
                  more!
                </h3>
                <p className="sec-para">
                  Morem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et
                </p>

                <button className="btn grab-btn">Grab it now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="circles circle1"></div>
        <div className="circles circle2"></div>
      </section>
    </>
  );
};

export default ArticlesSec;
