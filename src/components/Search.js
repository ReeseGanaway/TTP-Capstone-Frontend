import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserThunk } from "../redux/actions/userThunk";
import { useSelector, useDispatch } from "react-redux";

export default function Search() {
  const [user] = useSelector((state) => [state.user.user]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  const [card_id, setCard_id] = useState("");
  const [collection_id, setCollection_id] = useState(user.collection_id);
  const [pokename, setPokename] = useState("");
  const [cards, setCards] = useState([]);
  const [cardsFetched, setCardsFetched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=name:${pokename}`
      );
      const cardData = await response.json();
      setCards(cardData);
      setCardsFetched(true);
      console.log(response);
      console.log(cards);
    } catch (err) {
      console.error(err.message);
    }
  };

  async function addSearchedCards() {
    try {
      for (let i = 0; i < cards.data.length; i++) {
        let card_id = cards.data[i].id;
        let pokemon = cards.data[i].name;

        let type = cards.data[i].types;
        let hp = cards.data[i].hp;
        let image = cards.data[i].images.small;
        const body = { card_id, pokemon, type, hp, image };
        const response = await fetch("http://localhost:5000/card", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(response);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    addSearchedCards();
  }, [cards]);

  async function addToCollection() {
    //e.preventDefault;
    try {
      const body = { collection_id, card_id };
      const response = await fetch("http://localhost:5000/collection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    return false;
  }

  // async function addCard(card_id, pokemon, type, hp, image) {
  //   try {
  //     const body = { card_id, pokemon, type, hp, image };
  //     const response = await fetch("http://localhost:5000/card", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });
  //     console.log(response);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }

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

      <form>
        <input
          placeholder="Search Pokemon Name"
          onChange={(e) => setPokename(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </form>

      <div className="cardImages">
        {cardsFetched ? (
          cards.data.map((card) => (
            <div className="searchedCards" key={card.id}>
              <div className="singleCard">
                <img src={card.images.small} />
                <p>{card.id}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="nosearch">Searched cards will appear below</div>
        )}
      </div>

      <form>
        <p>Enter card id here to add it to your collection</p>
        <input onChange={(e) => setCard_id(e.target.value)}></input>
        <button type="button" onClick={addToCollection}>
          Add Card
        </button>
      </form>
    </Fragment>
  );
}
