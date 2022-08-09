import React, { useContext, useState } from "react";
import { Button } from "reactstrap";
import "./BottomNav.css";
import Cart from "./Cart";
import { UserContext } from "../Context/UserContext";
import Continue from "./Continue";
import { useNavigate } from "react-router-dom";

const BottomNav = ({ total, cartItem }) => {
  const [cartClass, setCartClass] = useState("hide");
  const [continueClass, setContinueClass] = useState("hide");
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const checkout = () => {
    setCartClass("hide");
    navigate("/checkout", { replace: true });
  };
  return (
    <div className="wrapper">
      <Cart
        cartItem={cartItem}
        total={total}
        cartClassName={cartClass}
        setCartClassName={setCartClass}
      />
      <Continue
        continueClass={continueClass}
        cartItem={cartItem}
        total={total}
        setContinueClassName={setContinueClass}
      />

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
              {cartItem.length} Item(s) Total ${total}
            </Button>
            <Button color="success" onClick={checkout}>
              CheckOut
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
              {cartItem.length} Item(s) Total ${total}
            </Button>
            <Button
              color="success"
              onClick={() => {
                setCartClass("hide");
                setContinueClass("showLogin");
              }}
            >
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
