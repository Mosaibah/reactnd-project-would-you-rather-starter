import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, loginUser, store } from "../index.js";


const LogIn = ({Auth}) => {

  const handleLogIn = () => {
    store.dispatch(loginUser());
  }
  return (
    <div className="w-50 mx-auto">
      <div className="w-75 mx-auto mt-5">
        <div className="card">
          <div className="card-header p-2 text-center">
            <h4 className="mt-2">
              Welcome to the Would You Rather App!
              <p className="lead mt-2">Please sign in to continue</p>
            </h4>
          </div>
          <div className="card-body row justify-content-center text-center">
            <h3 className="text-success mb-3">Sign In</h3>
            <div className="col-10 mt-3 mb-2">
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                  Users
                </label>
                <select className="form-select" id="inputGroupSelect01">
                  <option defaultValue disabled>
                    Choose...
                  </option>
                  <option value="1">user 1</option>
                  <option value="2">user 2</option>
                  <option value="3">user 3</option>
                </select>
              </div>
            </div>
            <button className="btn btn-success btn-lg col-10" onClick={handleLogIn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return { Auth: state };
};

export default connect(mapStateToProps)(LogIn);
