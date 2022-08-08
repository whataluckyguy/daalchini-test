import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BuyPage from "./Components/BuyPage";
import BottomNav from "./Components/BottomNav";
import { UserContext } from "./Context/UserContext";
import Checkout from "./Components/Checkout";

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);
  const [prev, setPrev] = useState(false);

  // main screen start
  const MainScreen = () => {
    return (
      <div className="App">
        <BuyPage addInCart={addInCart} handleChange={handleChange} />
        <BottomNav
          total={total}
          cartItem={cartItem}
          user={user}
          setUser={setUser}
        />
      </div>
    );
  };
  // main screen end

  const addInCart = (item) => {
    if (cartItem.indexOf(item) !== -1) {
      const ind = cartItem.indexOf(item);
      const arr = cartItem;
      arr[ind].isAdded = true;
      console.log(arr[ind].isAdded);
      return;
    }

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

  return (
    <Router>
      {/* <div className="App"> */}
      {/* <BuyPage addInCart={addInCart} handleChange={handleChange} /> */}
      <UserContext.Provider value={{ user, setUser, prev, setPrev }}>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route
            path="/checkout"
            element={<Checkout cartItem={cartItem} total={total} />}
          />
        </Routes>
        {/* <BottomNav */}
        {/* total={total} */}
        {/* cartItem={cartItem} */}
        {/* user={user} */}
        {/* setUser={setUser} */}
        {/* /> */}
      </UserContext.Provider>
      {/* </div> */}
    </Router>
  );
};

export default App;
