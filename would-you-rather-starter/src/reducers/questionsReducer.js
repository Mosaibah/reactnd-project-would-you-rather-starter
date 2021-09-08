import {GET_QUESTIONS} from "../actions/questionsActions"
import {UPDATE_QUESTION} from "../actions/questionsActions"

export const questionsReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_QUESTIONS:
        return {
          ...state,
          quesitons: action.data,
        };
      case UPDATE_QUESTION:
        return {
          ...state,
          [action.data.id]: action.data,
        };
      default:
        return state;
    }
  };