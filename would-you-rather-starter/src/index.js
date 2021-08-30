import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {loadState, saveState} from './localStorage.js';
import { combineReducers } from 'redux';


import { _getUsers } from "./_DATA";

// Redux Import
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
// End Redux Import

// Redux:
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GETUSERS = "GETUSERS";

export const loginUser = () => {
  return {
    type: LOGIN,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

export const getUsers = () => {
  return {
    type: GETUSERS,
  };
};

const defaultState = {
  authenticated: false,
  users: null
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GETUSERS:
      return {
        users: _getUsers(),
      };

    default:
      return state;
  }
};

export default combineReducers({
  authReducer,
  usersReducer
});


const persistedState = loadState()

export const store = createStore(combineReducers,persistedState);

store.subscribe(() => {
  saveState(store.getState())
});
// Change code above this line

const mapStateToProps = (state) => {
  return { Auth: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(loginUser(message));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
// --------------

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
