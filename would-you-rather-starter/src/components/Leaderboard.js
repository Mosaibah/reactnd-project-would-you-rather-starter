import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  state = {
    Sarah_true: 0, Sarah_false: 0,
    Tyler_true: null, Tyler_false: null,
    John_true: null, John_false: null,
  };
  componentDidMount() {
    //   Sarah
    this.props.questions && Object.values(this.props.questions).map((question) =>
        question.optionOne.votes.includes("sarahedo") ||  question.optionTwo.votes.includes("sarahedo")
          ? 
          this.setState((prevState, props) => ({
              Sarah_true: prevState.Sarah_true + 1,
            }))
          : 
          this.setState((prevState, props) => ({
            Sarah_false: prevState.Sarah_false + 1,
          }))
      );
    //   Tyler
    this.props.questions && Object.values(this.props.questions).map((question) =>
        question.optionOne.votes.includes("tylermcginnis") ||  question.optionTwo.votes.includes("tylermcginnis")
          ? 
          this.setState((prevState, props) => ({
            Tyler_true: prevState.Tyler_true + 1,
            }))
          : 
          this.setState((prevState, props) => ({
            Tyler_false: prevState.Tyler_false + 1,
          }))
      );
    //   John
    this.props.questions && Object.values(this.props.questions).map((question) =>
        question.optionOne.votes.includes("johndoe") ||  question.optionTwo.votes.includes("johndoe")
          ? 
          this.setState((prevState, props) => ({
            John_true: prevState.John_true + 1,
            }))
          : 
          this.setState((prevState, props) => ({
            John_false: prevState.John_false + 1,
          }))
      );
  }
  render() {
    <>{}</>;
    return (
      <div className="container">
        {/* Sarah */}
        {this.props.users&&(
<>
            <div className="card w-50 mx-auto mt-5">
            <div className="card-body">
                <div className="row">
                    <div className="col-8 ">
                        <h3 className="mb-4">
                            Sarah
                        </h3>
                        <p className="border-bottom border-2 pb-4">
                            Answered questions
                            <strong className="ps-4">
                                {this.state.Sarah_true} 
                            </strong>
                        </p>
                        <p>Created questions
                        <strong className="ps-4">
                                {this.props.users.sarahedo.questions.length} 
                            </strong>
                        </p>
                    </div>
                    <div className="col-3 align-items-center d-flex">
                        <div className="card">
                            <div className="card-header">
                                <h5>
                                    Score
                                </h5>
                            </div>
                            <div className="card-body text-center">
                                <div className="btn btn-success rounded-circle">
                                    {
                                        this.props.users.sarahedo.questions.length
                                        +
                                        this.state.Sarah_true
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* Tyler */}
        <div className="card w-50 mx-auto mt-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-8 ">
                        <h3 className="mb-4">
                            Tyler
                        </h3>
                        <p className="border-bottom border-2 pb-4">
                            Answered questions
                            <strong className="ps-4">
                                {this.state.Tyler_true} 
                            </strong>
                        </p>
                        <p>Created questions
                        <strong className="ps-4">
                                {this.props.users.tylermcginnis.questions.length} 
                            </strong>
                        </p>
                    </div>
                    <div className="col-3 align-items-center d-flex">
                        <div className="card">
                            <div className="card-header">
                                <h5>
                                    Score
                                </h5>
                            </div>
                            <div className="card-body text-center">
                                <div className="btn btn-success rounded-circle">
                                    {
                                        this.props.users.tylermcginnis.questions.length
                                        +
                                        this.state.Tyler_true
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* John  */}
        <div className="card w-50 mx-auto mt-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-8 ">
                        <h3 className="mb-4">
                            John
                        </h3>
                        <p className="border-bottom border-2 pb-4">
                            Answered questions
                            <strong className="ps-4">
                                {this.state.John_true} 
                            </strong>
                        </p>
                        <p>Created questions
                        <strong className="ps-4">
                                {this.props.users.johndoe.questions.length} 
                            </strong>
                        </p>
                    </div>
                    <div className="col-3 align-items-center d-flex">
                        <div className="card">
                            <div className="card-header">
                                <h5>
                                    Score
                                </h5>
                            </div>
                            <div className="card-body text-center">
                                <div className="btn btn-success rounded-circle">
                                    {
                                        this.props.users.johndoe.questions.length
                                        +
                                        this.state.John_true
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
)
}



      </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionsReducer.quesitons,
        users: state.fullusersReducer.users,
    };
};

export default connect(mapStateToProps)(Leaderboard);
