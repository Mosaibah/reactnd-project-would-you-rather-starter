import {LOGOUT,LOGIN} from "../actions/authActions";
import { loadState } from "../localStorage";


export const authReducer = (state = loadState().authReducer, action) => {
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