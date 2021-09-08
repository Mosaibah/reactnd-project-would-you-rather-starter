import React, { Component } from 'react'
import { connect } from 'react-redux'
import {_saveQuestion} from '../_DATA'
import { getQuestions } from '../actions/questionsActions'
import { store } from '../index'
import {getUsers} from '../actions/usersActions'

class NewPoll extends Component {
  state = {
    optionOne: null, 
    optionTwo: null,
    formatted: null,
    users: null
  }

  handleOptionOne = (e) => {
    this.setState({
      optionOne: e.target.value
    })
  }

  handleOptionTwo = (e) => {
    this.setState({
      optionTwo: e.target.value
    })
  }

  handleSubmit = async () => {
    let fullAnswer = {
      author: this.props.user,
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
    };
      await _saveQuestion(fullAnswer).then(res => 
        this.setState({formatted: res.questions, users: res.users})
        )
     await store.dispatch(getQuestions(this.state.formatted))
      await  store.dispatch(getUsers(this.state.users))
    }

  render() {
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
                onChange={this.handleOptionOne}
              />
              <p>or</p>
              <input
                type="text"
                placeholder="Enter option two"
                className="col-10"
                onChange={this.handleOptionTwo}
              />
              <button className="btn btn-success btn-lg px-5 col-10 mt-4" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer.user
  };
};

export default connect(mapStateToProps)(NewPoll);

