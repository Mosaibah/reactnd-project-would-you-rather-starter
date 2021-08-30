import "./App.css";
import Navbar from "./components/Navbar";
import NewPoll from "./components/NewPoll";
import Leaderboard from "./components/Leaderboard";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import React, { Component } from 'react'

import { _getUsers } from "./_DATA";

import { connect } from "react-redux";
import { logoutUser, loginUser, store } from "./index.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

class App extends Component{


  componentDidMount(){
    store.dispatch(getUsers())
  };
render(){

  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          {!this.props.Auth.authenticated ? (
            <>
              <Route path="/login">
                <LogIn />
              </Route>
              <Redirect to="/login"/>
            </>
          ) : (
            <>
              <Route path="/new-poll">
                <NewPoll />
              </Route>
              <Route path="/leaderboard">
                <Leaderboard />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
}
}

const mapStateToProps = (state) => {
  return { Auth: state };
};

export default connect(mapStateToProps)(App);
