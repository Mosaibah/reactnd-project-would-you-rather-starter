import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


import { connect } from "react-redux";
import { logoutUser, loginUser, store } from "../index.js";

const Navbar = ({ Auth }) => {

  // eslint-disable-next-line no-lone-blocks
  // {Auth.authenticated && <Redirect  to="/" /> }
  // console.log(Auth.authenticated)
  // if (Auth.authenticated) {
  //   console.log('indside if')
  //   return(

  //     <Redirect to="/"/>
  //   )
  // }

  const handleLogIn = () => {
    store.dispatch(logoutUser());
  };

  const handleLogOut = () => {
    store.dispatch(loginUser());
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
        <button onClick={handleLogOut} className="btn btn-outline-success">
          Log in
        </button>
        {!Auth.authenticated?''
        :(
        <button onClick={handleLogIn} className="btn btn-outline-dark">
          Log out
        </button>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { Auth: state };
};

export default connect(mapStateToProps)(Navbar);



