import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { collectionIdReducer } from "./totalcollectionReducer";
import { userReducer } from "./userReducer";
import { collectionReducer } from "./collectionReducer";
import { usercardsReducer } from "./usercardsReducer";

export default combineReducers({
  collectionId: collectionIdReducer,
  card: cardsReducer,
  user: userReducer,
  collection: collectionReducer,
  usercards: usercardsReducer,
});
