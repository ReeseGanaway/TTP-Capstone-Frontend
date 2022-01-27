import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCardsThunk } from "../redux/actions/cardsThunk";
import { getCollectionThunk } from "../redux/actions/collectionThunk";
import { Link } from "react-router-dom";
import { getUserThunk } from "../redux/actions/userThunk";

export default function ReduxTest() {
  // const [loading, setLoading] = useState(true);
  // let collectionId = useSelector((state) => state.collectionId.collectionId);
  // collectionId = 2;

  const [collection, isFetchingCollection] = useSelector((state) => [
    state.collection.collection,
    state.collection.isFetchingCollection,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionThunk());
  }, [dispatch]);

  // const increment = () => {
  //   dispatch({ type: "INCREMENT" });
  // };

  // const reset = () => {
  //   dispatch({ type: "RESET" });
  // };

  /*useEffect(() => {
    dispatch({ type: "GET_COLLECTIONID" });
    setLoading(false);
  }, [dispatch]);*/

  // const [card, isFetchingCards] = useSelector((state) => [
  //   state.card.card,
  //   state.card.isFetchingCards,
  // ]);

  // const [user, isFetchingUser] = useSelector((state) => [
  //   state.user.user,
  //   state.user.isFetchingUser,
  // ]);

  // const [collection] = useSelector((state) => [state.collection.collection]);

  // useEffect(() => {
  //   dispatch(getCardsThunk());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getUserThunk());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getCollectionThunk());
  // }, [dispatch]);

  /*const [email, setEmail] = useState("");

  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDispatch = () => {
    dispatch(getUserThunk(email));
    dispatch({ type: SET_USERNAME });
  };*/

  return (
    <Fragment>
      <div className="NavBars">
        <Link className="Links" to="/home">
          Home
        </Link>
        <Link className="Links" to="/userProfile">
          UserProfile
        </Link>
        <Link className="Links" to="/login">
          Login
        </Link>
        <Link className="Links" to="/collection">
          Collection
        </Link>
        <Link className="Links" to="/search">
          Search
        </Link>
        <Link className="Links" to="/reduxtest">
          ReduxTest
        </Link>
      </div>
      {/* <div>
        <p>{collectionId}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div> */}
      <div>
        <h1>{collection.length}</h1>
        {isFetchingCollection ? (
          <p>Loading...</p>
        ) : (
          collection.map((pair) => (
            <div>
              <p>{pair.collection_id}</p>
            </div>
          ))
        )}
      </div>
      )
      {/* {
        <div>
          {isFetchingCards ? (
            <p>Loading...</p>
          ) : (
            card.map((card) => (
              <div key={card.id}>
                <h1>{card.pokemon}</h1>
              </div>
            ))
          )}{" "}
        </div>
      } */}
      {/* {<div>
        {isFetchingUser ?(
          <p> Loading... </p>
        ) : (user)   
        }
        </div>} */}
    </Fragment>
  );
}
