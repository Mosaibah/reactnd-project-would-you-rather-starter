export const GET_USERS = "GET_USERS";
export const USER = 'USER'

export const getUsers = (res) => {
  return {
    type: GET_USERS,
    data: res
  };
};

export const addUser = (res) => {
  return {
    type: USER,
    data: res
  };
};