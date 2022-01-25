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

  const [collectionItems, setCollectionItems] = useState([]);
  let cards = [];

  async function getCollection() {
    try {
      const response = await fetch("http://localhost:5000/collection");
      console.log(response);
      const collectionData = response.data;
      console.log(collectionData);
      setCollectionItems(collectionData);
      //console.log(collectionItems);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getCollection();
  }, []);

  async function getCardsFromCollection() {
    let currentCardId = "";
    for (let i = 0; i < collectionItems.length; i++) {
      console.log("hello");
      if (collectionItems.collection_id == user.collection_id) {
        currentCardId = collectionItems[i].card_id;
        try {
          const response = await fetch(
            `http://localhost:5000/card/${currentCardId}`
          );
          const cardData = response.json();
          cards.push(cardData);
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
        {cards.map((card) => (
          <div key={card}>
            <img src={card.image} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}
