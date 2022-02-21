import {
  FETCH_COLLECTION,
  START_FETCHING_COLLECTION,
  END_FETCHING_COLLECTION,
} from "./collectionActions";

export const getCollectionThunk = (collection_id) => async (dispatch) => {
  try {
    dispatch({ type: START_FETCHING_COLLECTION });
    const collection = await fetch(
      `https://tcgdex.herokuapp.com/collection/${collection_id}`
    );
    const data = await collection.json();
    //console.log(data);
    dispatch({ type: FETCH_COLLECTION, payload: data });
    dispatch({ type: END_FETCHING_COLLECTION });
  } catch (error) {
    console.log(error);
  }
};
