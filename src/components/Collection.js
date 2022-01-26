import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch, ReactReduxContext } from "react-redux";
import { Link } from "react-router-dom";
import { getCollectionThunk } from "../redux/actions/collectionThunk";

import { getUserThunk } from "../redux/actions/userThunk";

export default function Collection() {
  const [user] = useSelector((state) => [state.user.user]);
  const [collection] = useSelector((state) => [state.collection.collection]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  const [collectionItems, setCollectionItems] = useState([]);
  const [cards, setCards] = useState([]);
  const [collectionFetched, setCollectionFetched] = useState(false);
  const [gotCards, setGotCards] = useState(false);

  async function getCollection() {
    try {
      const response = await fetch("http://localhost:5000/collection");
      //console.log(response);
      const collectionData = await response.json();
      //console.log(collectionData);
      setCollectionItems(collectionData);
      //console.log(collectionItems);
      setCollectionFetched(true);
      getCardsFromCollection();
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getCollection();
  }, []);

  //getCardsFromCollection();

  async function getCardsFromCollection() {
    let currentCardId = "blank";
    //console.log("In getcardfromcollection");
    //console.log(collectionItems);
    for (let i = 0; i < collection.length; i++) {
      //console.log(collection[i].collection_id);
      if (collection[i].collection_id == user.collection_id) {
        currentCardId = collection[i].card_id;
        console.log(currentCardId);
        try {
          const response = await fetch(
            `http://localhost:5000/card/${currentCardId}`
          );
          const cardData = await response.json();
          //const newCards = [...cards];
          //console.log(newCards);
          cards.push(cardData);
          console.log("Hi");
          //setCards(newCards);
          //cards.push(cardData);
          console.log(cards);
          setGotCards(true);
        } catch (err) {
          console.error(err.message);
        }
      }
    }
  }

  //console.log(gotCards);
  //console.log(cards);

  // useEffect(() => {
  //   getCardsFromCollection();
  // }, []);

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
      <div>{user.username}'s Collection</div>
      <div>
        {/* {gotCards ? ( */}
        {cards.map((card) => (
          <div key={card.card_id}>
            <img src={card.image} />
          </div>
        ))}
        {/* ))
        ) : (
          <p>Add cards to your collection!</p>
        )} */}
      </div>
    </Fragment>
  );
}
