import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch, ReactReduxContext } from "react-redux";
import { Link } from "react-router-dom";

import { getUserThunk } from "../redux/actions/userThunk";

export default function Collection(props) {
  const [user] = useSelector((state) => [state.user.user]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  const [collectionItems, setCollectionItems] = useState([{ number: "1" }]);
  let cards = [];
  const [collectionFetched, setCollectionFetched] = useState(false);

  async function getCollection() {
    try {
      const response = await fetch("http://localhost:5000/collection");
      console.log(response);
      const collectionData = await response.json();
      console.log(collectionData);
      setCollectionItems(collectionData);
      setCollectionFetched(true);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getCollection();
    //getCardsFromCollection();
  }, []);

  //getCardsFromCollection();

  async function getCardsFromCollection() {
    let currentCardId = "";
    console.log(collectionItems);
    for (let i = 0; i < collectionItems.length; i++) {
      console.log(user.collection_id);
      if (collectionItems[i].collection_id == user.collection_id) {
        currentCardId = collectionItems[i].card_id;
        try {
          const response = await fetch(
            `http://localhost:5000/card/${currentCardId}`
          );
          const cardData = await response.json();
          cards.push(cardData);
          console.log(cards);
        } catch (err) {
          console.error(err.message);
        }
      }
    }
  }

  useEffect(() => {
    getCardsFromCollection();
  }, []);

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
      </div>
      <div>{user.username}'s Collection</div>
      <div>
        {collectionFetched ? (
          cards.map((card) => (
            <div>
              <img src={card.image} />
            </div>
          ))
        ) : (
          <p>Add cards to your collection!</p>
        )}
      </div>
    </Fragment>
  );
}
