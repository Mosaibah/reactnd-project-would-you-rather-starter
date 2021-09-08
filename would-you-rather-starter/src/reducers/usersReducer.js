import { USER} from "../actions/usersActions"

export const usersReducer = (state = {}, action) => {
    switch (action.type) {
      case USER:
        return {
          user: action.data,
        };
  
      default:
        return state;
    }
  };