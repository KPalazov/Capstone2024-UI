import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Play extends Component {
  // constructor (props) {
  //     super(props);
  // }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <h2>Quiz Mode</h2>
          <div className="lifeline-container">
            <p>
              <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
            </p>
            <p>
              <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
              <span className="lifeline">5</span>
            </p>
          </div>
          <div>
            <p>
              <span className="left">1 of 15</span>

              <span className="right">
                02:15<span className="mdi mdi-clock-outline mdi-24px"></span>
              </span>
            </p>
          </div>
          <h5>
            How do cybercriminals commonly use document-sharing platforms for
            malicious purposes?
          </h5>
          <div className="options-container">
            <p className="option">They provide free document storage</p>
            <p className="option">They embed malware in shared documents</p>
          </div>
          <div className="options-container">
            <p className="option">They offer encryption services</p>
            <p className="option">They promote secure sharing practices</p>
          </div>
          <div className="button-container">
            <button>Previous</button>
            <button>Next</button>
            <button>
              <Link to="/">Quit</Link>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
