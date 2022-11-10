import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState("");

  function addToCart(name, price) {
    setCart(cart + name + ", ");
    setTotal(total + price);
  }  

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
      <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} addToCart={addToCart}></BakeryItem>
        // <p><BakeryItem name =item.name, item.description, item.price, item.image></</p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <h2>Items: {cart}</h2>
        <h2>Cart Total: ${total}</h2>
      </div>
    </div>
  );
}

export default App;
