import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

function App() {
  const [count, setCount] = useState(0);

  function addToCart(event) {
    setCount(count + 1);
  }

  function removeFromCart(event) {
    setCount(count - 1);
  }

  return (
    <div>
      <Navbar count={count} />
      <Header />
      <Section onAdd={addToCart} onRemove={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
