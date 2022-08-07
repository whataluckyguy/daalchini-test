import React from "react";
import { Button } from "reactstrap";
import "./CartItem.css";

const CartItem = ({ item, addInCart, handleChange }) => {
  const { title, author, price, img } = item;
  return (
    <div className="Item">
      <div className="productImage">
        <img src={img} alt="product iamge" />
      </div>
      <div className="productDetails">
        <h4>{title}</h4>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem impedit quos nemo ducimus rem minima, tempore, neque
          tenetur aperiam aliquam vero odio porro repellendus qui, dolorum ipsa
          accusantium! Est, magnam.
        </div>
        <div className="priceAndNumber">
          <strong>${price}</strong>
          <Button
            color="success"
            onClick={() => {
              addInCart(item);
            }}
          >
            ADD
          </Button>
        </div>

        <div className="counter">
          <button color="success" onClick={() => handleChange(item, -1)}>
            -
          </button>
          {item.amount}
          <button color="success" onClick={() => handleChange(item, 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
