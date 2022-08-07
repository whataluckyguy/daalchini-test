import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./BottomNav.css";
import Cart from "./Cart";

const BottomNav = ({ NOI, total, cartItem }) => {
  const [cartClass, setCartClass] = useState("hide");
  const [continueClass, setContinueClass] = useState("hide");
  return (
    <div className="wrapper">
      <Cart cartItem={cartItem} total={total} cartClassName={cartClass} />
      <div className="bot">
        <Button color="success" onClick={() => setCartClass("cart")}>
          {NOI} Item(s) <br /> Total ${total}
        </Button>
        <Button color="success" onClick={() => setCartClass("hide")}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BottomNav;
