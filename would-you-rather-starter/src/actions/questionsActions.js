export const GET_QUESTIONS = "GET_QUESTIONS";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export const getQuestions = (res) => {
  return {
    type: GET_QUESTIONS,
    data: res
  };
};

export const updateQuestion = (res) => {
  return {
    type: UPDATE_QUESTION,
    data: res
  };
};





