import "./style.css";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Alice1() {
  const items = [
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/charmander-delta-pop-series-5-10.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/meowth-delta-pop-series-5-11.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/pikachu-pop-series-5-12.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/wobbuffet-neo-discovery-16.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/butterfree-neo-discovery-19.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/smeargle-neo-discovery-30.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/corsola-neo-discovery-37.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/caterpie-neo-discovery-53.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/hoppip-neo-discovery-55.jpg?fit=600%2C825&ssl=1"
  ].map((item, i) => (
    <div
      style={{
        display: "inline-block",
        width: 200,
        height: 300,
        border: "2px solid #fff",
        background: "teal"
      }}
      role="button"
    >
      <img
        style={{
          width: 200,
          height: 300
        }}
        src={item}
        alt="item"
      />
    </div>
  ));

  return (
    <div>
      <AliceCarousel
        items={items}
        infinite
        animationDuration={200}
        autoWidth
        mouseTracking
        touchTracking
      />
    </div>
  );
}

function Tile({ onClick }) {
  return (
    <div
      style={{
        display: "inline-block",
        width: 200,
        height: 300,
        border: "2px solid #fff",
        background: "teal"
      }}
      tabIndex={0}
      role="button"
    />
  );
}
