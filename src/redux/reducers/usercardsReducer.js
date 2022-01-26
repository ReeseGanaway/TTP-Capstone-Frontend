import { GET_CARDS, ADD_CARD, RESET } from "../actions/usercardsActions";

const initialState = {
  usercards: [],
};

export const usercardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        state: (state.usercards = []),
        ...state,
      };
    case ADD_CARD:
      return {
        ...state,
        usercards: [...state.usercards, action.newItem],
      };
    case GET_CARDS:
      return {
        state: state.usercards,
        ...state,
      };
    default:
      return state;
  }
};
