import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { saveState } from "./localStorage.js";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/authReducer";
import { usersReducer } from "./reducers/usersReducer";
import { questionsReducer } from "./reducers/questionsReducer";
import { fullusersReducer } from "./reducers/fullusersReducer";
import { combineReducers } from "redux";

// Redux Import
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

export const store = createStore(
  combineReducers({ usersReducer, authReducer, questionsReducer,fullusersReducer }),
  composeWithDevTools()
);

store.subscribe(() => {
  saveState(store.getState());
});

const mapStateToProps = (state) => {
  return { Auth: state };
};

const Container = connect(mapStateToProps)(App);

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