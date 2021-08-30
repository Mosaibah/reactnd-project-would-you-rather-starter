import React from "react";

const NewPoll = () => {
  return (
    <div>
      <div className="card w-50 mx-auto mt-5 ">
        <div className="card-header">
          <h3>Create a New Poll</h3>
        </div>
        <div className="card-body">
          <p className="lead">Complete this question</p>
          <br />
          <div className="text-center ">
            <p className="text-center fw-bold mb-2">Would you rather...</p>
            <br />
            <div className="row text-center justify-content-center">
              <input
                type="text"
                placeholder="Enter option one.."
                className="col-10"
              />
              <p>or</p>
              <input
                type="text"
                placeholder="Enter option two"
                className="col-10"
              />
              <button className="btn btn-success btn-lg px-5 col-10 mt-4" disabled>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPoll;
