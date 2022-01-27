import {
  FETCH_COLLECTION,
  END_FETCHING_COLLECTION,
  START_FETCHING_COLLECTION,
} from "../actions/collectionActions";

const initialState = {
  collection: [],
  isFetchingCollection: true,
};

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return {
        ...state,
        collection: action.payload,
      };
    case START_FETCHING_COLLECTION:
      return {
        ...state,
        isFetchingCollection: true,
      };
    case END_FETCHING_COLLECTION:
      return {
        ...state,
        isFetchingCollection: false,
      };
    default:
      return state;
  }
};
