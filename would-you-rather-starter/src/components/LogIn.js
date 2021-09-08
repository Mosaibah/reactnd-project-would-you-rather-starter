import React, { Component } from "react";
import {  Link } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "../index.js";
import { loginUser } from "../actions/authActions";
import { addUser } from "../actions/usersActions";


    
  class LogIn extends Component {
    state = {
      value:''
    }
    handleValue = (event) => {
     this.setState({
       value: event.target.value
     })
   }
   
   handleLogIn = () => {
     store.dispatch(loginUser());
     store.dispatch(addUser(this.state.value));
   };

   handleUser = (users) => {
    return Object.values(users);
  };

    render() {
    
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
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Users
                </label>
                <select className="form-select" id="inputGroupSelect01" onChange={this.handleValue}>
                  <option defaultValue disabled>
                    Choose...
                  </option>
                  {this.props.users &&
                    this.handleUser(this.props.users).map((user) => (
                      <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
              </div>
            </div>
            <Link
              className="btn btn-success btn-lg col-10"
              onClick={this.handleLogIn}
              to="/"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Auth: state.authReducer.authenticated,
    users: state.fullusersReducer.users,
  };
};

export default connect(mapStateToProps)(LogIn);
