import {LOGOUT,LOGIN} from "../actions/authActions";



export const authReducer = (state = {}, action) => {
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