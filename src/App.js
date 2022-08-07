import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import BuyPage from "./Components/BuyPage";
import BottomNav from "./Components/BottomNav";
import { UserContext } from "./Context/UserContext";
import Checkout from "./Components/Checkout";

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(false);

  const addInCart = (item) => {
    if (cartItem.indexOf(item) !== -1) return;
    setCartItem([...cartItem, item]);
  };

  const handleChange = (item, d) => {
    const ind = cartItem.indexOf(item);
    const arr = cartItem;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
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

  const forCart = () => {};

  return (
    <div className="App">
      {user ? (
        <>
          <Checkout setUser={setUser} cartItem={cartItem} total={total} />
        </>
      ) : (
        <>
          <BuyPage addInCart={addInCart} handleChange={handleChange} />
          <UserContext.Provider value={{ user, setUser }}>
            <BottomNav
              NOI={cartItem.length}
              total={total}
              cartItem={cartItem}
              user={user}
              setUser={setUser}
            />
          </UserContext.Provider>
        </>
      )}
    </div>
  );
};

export default App;
