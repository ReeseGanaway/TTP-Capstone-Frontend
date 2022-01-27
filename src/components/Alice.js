import "./style.css";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Alice() {
  const items = [
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/plusle-ex-trainer-kit-plusle-tk2p-6.jpg?fit=700%2C990&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/ditto-delta-species-ds-36.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/eevee-delta-species-ds-69.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/h24.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/chansey-base-set-2-b2-3.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/dugtrio-base-set-2-b2-23.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/raichu-mysterious-treasures-mt-15.jpg?fit=600%2C825&ssl=1",
    "https://i0.wp.com/pkmncards.com/wp-content/uploads/dunsparce-mysterious-treasures-mt-47.jpg?fit=600%2C825&ssl=1"
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
