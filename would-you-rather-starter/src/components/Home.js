import React from "react";
import { connect } from "react-redux";
import CardAnswers from "./CardsShow.js";
import CardsShowAnswered from "./CardsShowAnswered.js";

const Home = ({ Auth}) => {

  return (
    <div className="container mt-5">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {/* First */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Unanswered
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="accordion-body">
                {/* Card */}
                <CardAnswers/>
                {/* Card */}
              </div>
            </div>
          </div>
        </div>
        {/* End First */}

        {/* Second */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Answered
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="card">
                <div className="card-head">
                  <CardsShowAnswered/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Second */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Auth: state.authReducer.authenticated,
    questions: state.questionsReducer.quesitons,
  };
};

export default connect(mapStateToProps)(Home);
