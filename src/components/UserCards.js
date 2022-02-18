import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCollectionThunk } from "../redux/actions/collectionThunk";
import { getUserThunk } from "../redux/actions/userThunk";

export default function UserCards(props) {
  //   const [user] = useSelector((state) => [state.user.user]);
  //   const [collection] = useSelector((state) => [state.collection.collection]);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getCollectionThunk());
  //   }, [dispatch]);

  //   useEffect(() => {
  //     dispatch(getUserThunk());
  //   }, [dispatch]);

  //   const [cards, setCards] = useState([]);

  //   async function getCardsFromCollection() {
  //     setCards([]);
  //     let currentCardId = "";
  //     for (let i = 0; i < collection.length; i++) {
  //       if (collection[i].collection_id == user.collection_id) {
  //         currentCardId = collection[i].card_id;
  //         console.log(currentCardId);
  //         try {
  //           const response = await fetch(
  //             `http://localhost:5000/card/${currentCardId}`
  //           );
  //           const cardData = await response.json();
  //           cards.push(cardData);

  //           console.log("Hi");
  //           console.log(cards);
  //         } catch (err) {
  //           console.error(err.message);
  //         }
  //       }
  //     }
  //   }

  //   useEffect(() => {
  //     getCardsFromCollection();
  //   }, []);

  return (
    <div className="">
      {props.usercards.map((card) => (
        <div className="searchedCards">
          <div className="singleCard" key={card.card_id}>
            <img src={card.image} />
            <p>{card.pokemon}</p>
            <p>HP : {card.hp}</p>
            <p>Card ID : {card.card_id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
