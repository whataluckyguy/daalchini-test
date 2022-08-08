import React from "react";
import { Button } from "reactstrap";
import "./CartItem.css";

const CartItem = ({ item, addInCart, handleChange, amount }) => {
  const { title, author, price, img } = item;
  return (
    <div className="Item">
      <div className="productImage">
        <img src={img} alt="product iamge" />
      </div>
      <div className="productDetails">
        <h4>{title}</h4>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div className="priceAndNumber">
          <strong>${price}</strong>
          <Button
            color="success"
            onClick={() => {
              addInCart(item);
            }}
            className="ButtonSize"
          >
            ADD
          </Button>
        </div>

        <div className="counter">
          <Button onClick={() => handleChange(item, -1)}>-</Button>
          <span className="qty">{item.amount}</span>
          <Button onClick={() => handleChange(item, 1)}>+</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
