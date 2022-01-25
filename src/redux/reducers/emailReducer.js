import { GET_EMAIL, SET_EMAIL } from "../actions/emailActions";

const initialState = {
  email: "",
};

export const usernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAIL:
      return {
        state,
      };
    case SET_EMAIL:
      return {
        state,
      };
    default:
      return state;
  }
};
