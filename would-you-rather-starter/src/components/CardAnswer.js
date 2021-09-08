import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "..";
import { _saveQuestionAnswer } from "../_DATA";
import {getQuestions} from "../actions/questionsActions";

class CardAnswer extends Component {
  state = {
    id: null,
    question: null,
    answer: null,
    num2: null
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
      id: id,
      question: this.props.location.state,
    });
  }
  handleAnswer = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };

  handleSubmit = async () => {
    let fullAnswer = {
      authedUser: this.props.user,
      qid: this.state.id,
      answer: this.state.answer,
    };
      await _saveQuestionAnswer(fullAnswer).then(res => this.setState({num2: res}) )
      store.dispatch(getQuestions(this.state.num2))
    
  };

  render() {
    return (
      <div className="card w-75 mx-auto mt-5">
        <div className="card-header">Name asks:</div>
        <div className="card-body">
          <div className="row">
            {this.state.question && (
              <>
                <div className="col-3 border-end border-2 me-3">
                  {this.state.question.author}
                </div>
                <div className="col">
                  <h4>Would you rather</h4>
                  <div className="text-center">
                    {/* check */}
                    <div className="form-check mt-3">
                      <input
                        onClick={this.handleAnswer}
                        className="form-check-input"
                        value="optionOne"
                        type="radio"
                        name={this.state.question.id}
                        id={this.state.question.optionOne.text}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={this.state.question.optionOne.text}
                      >
                        {this.state.question.optionOne.text}
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        onClick={this.handleAnswer}
                        className="form-check-input"
                        value="optionTwo"
                        type="radio"
                        name={this.state.question.id}
                        id={this.state.question.optionTwo.text}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={this.state.question.optionTwo.text}
                      >
                        {this.state.question.optionTwo.text}
                      </label>
                    </div>
                    {/* end check */}
                    <button
                      onClick={this.handleSubmit}
                      className="btn btn-success btn-lg px-5"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer.user,
  };
};

export default connect(mapStateToProps)(CardAnswer);
