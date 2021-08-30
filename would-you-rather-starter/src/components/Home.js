import React from "react";
import { connect } from "react-redux";
import { logoutUser, loginUser, store } from "../index.js";

const Home = ({ Auth }) => {
  console.log("inside home");
  console.log(Auth);

  const handleChange = () => {
    store.dispatch(loginUser());
    console.log("inside handle");
    console.log(Auth);
  };
  return (
    <div className="container mt-5">
      <div className="btn btn-danger" onClick={handleChange}>
        change
      </div>

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
                <div className="card w-75 mx-auto">
                  <div className="card-header">Name asks:</div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3 border-end border-2 me-3">img</div>
                      <div className="col">
                        <h4>Would you rather</h4>
                        <div className="text-center">
                          <p className="lead">any question</p>
                          <br />
                          <p className="lead">or...</p>
                          <button className="btn btn-success btn-lg px-5">
                            Answer Poll
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="card-head">dfdf</div>
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
  return { Auth: state };
};

export default connect(mapStateToProps)(Home);
