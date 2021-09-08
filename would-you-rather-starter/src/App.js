import Navbar from "./components/Navbar";
import NewPoll from "./components/NewPoll";
import Leaderboard from "./components/Leaderboard";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import React, { Component } from "react";

import { _getUsers, _getQuestions } from "./_DATA";

import { connect } from "react-redux";
import { store } from "./index.js";
import { getUsers } from "./actions/usersActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {getQuestions} from "./actions/questionsActions"
import CardAnswer from "./components/CardAnswer";

class App extends Component {
  componentDidMount() {

    _getUsers().then((res) => {
      store.dispatch(getUsers(res));
    });

    _getQuestions().then((res) => {
      store.dispatch(getQuestions(res))
    })

  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            
            <Route path="/login">
              <LogIn />
            </Route>

            <Route path="/new-poll">
            {!this.props.Auth ? <Redirect to="/login" />
            :
            <NewPoll />
            }
            </Route>

            <Route path="/leaderboard">
            {!this.props.Auth ? <Redirect to="/login" />
            :
            <Leaderboard />
            }
            </Route>
            
            <Route path="/question/:id" component={CardAnswer}/>

            <Route path="/" >
            {!this.props.Auth ? <Redirect to="/login" />
            :
            <Home />
            }
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { Auth: state.authReducer.authenticated };
};

export default connect(mapStateToProps)(App);
