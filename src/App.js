import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import BuyPage from "./Components/BuyPage";
import BottomNav from "./Components/BottomNav";

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);

  const addInCart = (item) => {
    if (cartItem.indexOf(item) !== -1) return;
    setCartItem([...cartItem, item]);
  };

  const handleChange = (item, d) => {
    const ind = cartItem.indexOf(item);
    const arr = cartItem;
    arr[ind].amount += d;

    if (arr[ind].amount <= 0) arr[ind].amount = 0;
    setCartItem([...arr]);
  };

  const handlePrice = () => {
    let val = 0;
    cartItem.map((item) => (val += item.amount * item.price));
    setTotal(val);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="App">
      <BuyPage addInCart={addInCart} handleChange={handleChange} />
      <BottomNav NOI={cartItem.length} total={total} />
    </div>
  );
};

export default App;
