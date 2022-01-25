import {
  FETCH_USER,
  START_FETCHING_USER,
  END_FETCHING_USER,
  GET_COLLECTIONID,
} from "../actions/userActions";

const initialState = {
  user: {},
  isFetchingUser: true,
  collection_id: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case START_FETCHING_USER:
      return {
        ...state,
        isFetchingUser: true,
      };
    case END_FETCHING_USER:
      return {
        ...state,
        isFetchingUser: false,
      };
    case GET_COLLECTIONID:
      return {
        ...state,
        collection_id: action.payload,
      };
    default:
      return state;
  }
};
