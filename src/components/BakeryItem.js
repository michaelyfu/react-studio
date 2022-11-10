import "./BakeryItem.css";
import { useState } from "react";

export default function BakeryItem({name, price, description, image, addToCart}) {
  return (
      <div className="cardWrapper">
        <h1>{name}</h1>
          <img className="image" src={image} alt="food" />
        <h2>{price}</h2>
        <h2>{description}</h2>
        <button onClick={() => addToCart(name, price)} style={{maxWidth: "200px"}}>Add to Cart</button>  
      </div>
  );
}
