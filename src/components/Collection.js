import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCollectionThunk } from "../redux/actions/collectionThunk";
import { getUserThunk } from "../redux/actions/userThunk";
import UserCards from "./UserCards";

export default function Collection() {
  const [user] = useSelector((state) => [state.user.user]);
  const [collection] = useSelector((state) => [state.collection.collection]);
  const [usercards] = useSelector((state) => [state.usercards.usercards]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionThunk(user.collection_id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  const [cards, setCards] = useState([]);
  const [collectionFetched, setCollectionFetched] = useState(false);
  const [gotCards, setGotCards] = useState(false);

  // const addCard = (newCard) => {
  //   dispatch({ type: "ADD_CARD", newItem: newCard });
  // };

  // const reset = () => {
  //   dispatch({ type: "RESET" });
  // };

  useEffect(() => {
    getCardsFromCollection();
  }, [collection]);

  console.log(collection);
  console.log(cards);

  async function getCardsFromCollection() {
    let currentCardId = "";
    for (let i = 0; i < collection.length; i++) {
      currentCardId = collection[i].card_id;
      console.log(currentCardId);
      try {
        console.log("hello");
        const response = await fetch(
          `http://localhost:5000/card/${currentCardId}`
        );
        const cardData = await response.json();
        console.log(cardData);
        console.log(response);
        cards.push(cardData);
        console.log(cards);
      } catch (err) {
        console.error(err.message);
      }
    }
  }

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
        <UserCards usercards={cards}></UserCards>
        {/* {cards.map((card) => (
          <div key={card.card_id}>
            <img src={card.image} />
          </div>
        ))} */}
      </div>
    </Fragment>
  );
}
