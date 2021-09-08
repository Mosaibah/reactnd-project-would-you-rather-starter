import {GET_USERS} from "../actions/usersActions"

export const fullusersReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_USERS:
        return {
          users: Object.assign({},action.data)
        };
  
      default:
        return state;
    }
  };