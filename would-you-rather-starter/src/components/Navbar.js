import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


import { connect } from "react-redux";
import { store } from "../index.js";
import {logoutUser, loginUser} from "../actions/authActions"

const Navbar = ({ Auth }) => {


  const handleLogOut = () => {
    store.dispatch(logoutUser());
    return <Redirect to="/login" />
  };

  const handleLogIn = () => {
    store.dispatch(loginUser());
    <Redirect to="/" />

  };

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/new-poll" className="nav-link">
                New Poll
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/leaderboard" className="nav-link">
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>
        {!Auth?(   
        <button onClick={handleLogIn} className="btn btn-outline-success">
          Log in
        </button>
          )
        :(
        <button onClick={handleLogOut} className="btn btn-outline-dark">
          Log out
        </button>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { Auth: state.authReducer.authenticated };
};

export default connect(mapStateToProps)(Navbar);



