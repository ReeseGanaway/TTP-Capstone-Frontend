import {
  FETCH_COLLECTION,
  START_FETCHING_COLLECTION,
  END_FETCHING_COLLECTION,
} from "./collectionActions";

export const getCollectionThunk = async (dispatch) => {
  try {
    dispatch({ type: START_FETCHING_COLLECTION });
    const collection = await fetch("http://localhost:5000/collection");
    const data = await collection.json();
    dispatch({ type: FETCH_COLLECTION, payload: data });
    dispatch({ type: END_FETCHING_COLLECTION });
  } catch (err) {
    console.error(err.message);
  }
};
