export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginUser = () => {
  return {
    type: LOGIN,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};