import React, { useContext, useState } from "react";
import { Button } from "reactstrap";
import "./BottomNav.css";
import Cart from "./Cart";
import { UserContext } from "../Context/UserContext";
import Continue from "./Continue";

const BottomNav = ({ NOI, total, cartItem, user, setUser }) => {
  const [cartClass, setCartClass] = useState("hide");
  const [continueClass, setContinueClass] = useState("hide");
  const context = useContext(UserContext);
  return (
    <div className="wrapper">
      <Cart cartItem={cartItem} total={total} cartClassName={cartClass} />
      <Continue continueClass={continueClass} user={user} setUser={setUser} />

      <div className="bot">
        {context.user ? (
          <>
            <Button
              color="success"
              onClick={() => {
                setContinueClass("hide");
                setCartClass("cart");
              }}
            >
              {NOI} Item(s) <br /> Total ${total}
            </Button>
            <Button
              color="success"
              onClick={() => {
                setCartClass("hide");
              }}
            >
              Continue
            </Button>
          </>
        ) : (
          <>
            <Button
              color="success"
              onClick={() => {
                setContinueClass("hide");
                setCartClass("cart");
              }}
            >
              {NOI} Item(s) <br /> Total ${total}
            </Button>
            <Button
              color="success"
              onClick={() => {
                setCartClass("hide");
                setContinueClass("showLogin");
              }}
            >
              Continue
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
