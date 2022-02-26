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
        const response = await fetch("https://tcgdex.herokuapp.com/card", {
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
      const response = await fetch("https://tcgdex.herokuapp.com/collection", {
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

  async function addToCollection2(card_id) {
    //e.preventDefault;
    console.log(card_id);
    try {
      const body = { collection_id, cardId };
      const response = await fetch("https://tcgdex.herokuapp.com/collection", {
        mode: "cors",
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 1024 1024"
          fill="currentColor"
        >
          <path
            strokeWidth="1"
            d="M 512.00,96.80
           C 304.28,96.94 132.17,249.33 101.24,448.41
             101.24,448.41 312.51,448.80 312.51,448.80
             339.50,364.37 418.60,303.25 512.00,303.20
             605.25,303.31 684.24,364.33 711.33,448.61
             711.33,448.61 922.53,448.80 922.53,448.80
             891.82,249.60 719.75,97.06 512.00,96.80
             512.00,96.80 512.00,96.80 512.00,96.80 Z
           M 512.00,376.80
           C 436.89,376.80 376.00,437.69 376.00,512.80
             376.00,587.91 436.89,648.80 512.00,648.80
             512.00,648.80 512.00,648.80 512.00,648.80
             587.11,648.80 648.00,587.91 648.00,512.80
             648.00,512.80 648.00,512.80 648.00,512.80
             648.00,437.69 587.11,376.80 512.00,376.80
             512.00,376.80 512.00,376.80 512.00,376.80
             512.00,376.80 512.00,376.80 512.00,376.80 Z
           M 101.47,576.80
           C 132.18,776.00 304.25,928.54 512.00,928.80
             719.72,928.66 891.83,776.27 922.76,577.19
             922.76,577.19 711.49,576.80 711.49,576.80
             684.50,661.23 605.40,722.35 512.00,722.40
             418.75,722.29 339.76,661.27 312.67,576.99
             312.67,576.99 101.47,576.80 101.47,576.80
             101.47,576.80 101.47,576.80 101.47,576.80 Z"
          />
        </svg>
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

        <div className="ContainerColumn">
          <br />
          <p>
            <img
              src="https://i0.wp.com/pkmncards.com/wp-content/uploads/en_US-Promo_HGSS-HGSS05-hoothoot.jpg?fit=734%2C1024&ssl=1"
              width="150"
              alt="pokemon png image famous anime character png only"
            />
            <img
              src="https://i0.wp.com/pkmncards.com/wp-content/uploads/en_US-Promo_HGSS-HGSS13-smoochum.jpg?fit=734%2C1024&ssl=1"
              width="150"
              alt="pokemon png jigglypuff pok dex"
            />
            <img
              src="https://i0.wp.com/pkmncards.com/wp-content/uploads/en_US-Promo_HGSS-HGSS17-minun.jpg?fit=734%2C1024&ssl=1"
              width="150"
              alt="pokemon png image famous anime character png only"
            />
            <img
              src="https://i0.wp.com/pkmncards.com/wp-content/uploads/en_US-Promo_HGSS-HGSS12-cleffa.jpg?fit=734%2C1024&ssl=1"
              width="150"
              alt="pokemon everything all you will ever need know"
            />
          </p>
        </div>
      </form>
      <div className="cardImages">
        {cardsFetched ? (
          cards.data.map((card) => (
            <div className="searchedCards" key={card.id}>
              <div className="singleCard">
                <img src={card.images.small} />
                <p>Card ID : {card.id}</p>
                <button onClick={(card) => addToCollection2(card)}>
                  Add Card
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>Searched cards will appear below</div>
        )}
      </div>

      <br />
      <br />
      <br />
      <form>
        <p>Enter card id here to add it to your collection</p>
        <input onChange={(e) => setCard_id(e.target.value)}></input>
        <button type="button" onClick={addToCollection}>
          Add Card
        </button>
      </form>
      <br />
    </Fragment>
  );
}
