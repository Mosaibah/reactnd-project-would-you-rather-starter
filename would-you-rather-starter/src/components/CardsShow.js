import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CardShow extends Component {
   
    render() {
        return (
          <div>
               {this.props.questions && Object.values(this.props.questions).filter((question) => (
                 !question.optionOne.votes.includes(this.props.user) &&  !question.optionTwo.votes.includes(this.props.user)
               )).map((question) => (
                  <div key={question.id} className="card w-75 mx-auto">
                    <div className="card-header">Name asks:</div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3 border-end border-2 me-3">
                          {question.author}
                        </div>
                        <div className="col">
                          <h4>Would you rather</h4>
                          <div className="text-center">
                            {/* check */}
                            
                            <p className="lead mt-4">
                              {question.optionOne.text}
                            </p> 
                            <div className="mb-3">
                              <strong>or..</strong>
                            </div>

                            {/* end check */}
                            <Link className="btn btn-success btn-lg px-5" to={{pathname: `/question/${question.id}`, state:question}}  >
                              Submit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} 
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      Auth: state.authReducer.authenticated,
      questions: state.questionsReducer.quesitons,
      user: state.usersReducer.user
    };
  };
  
  export default connect(mapStateToProps)(CardShow);
  
