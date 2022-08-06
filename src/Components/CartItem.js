import React from "react";
import { Button } from "reactstrap";
import "./CartItem.css";

const CartItem = ({ product, addInCart }) => {
  return (
    <div className="Item">
      <div className="productImage">
        <img src={product.smallImage} alt="product iamge" />
      </div>
      <div className="productDetails">
        <h4>{product.productName}</h4>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem impedit quos nemo ducimus rem minima, tempore, neque
          tenetur aperiam aliquam vero odio porro repellendus qui, dolorum ipsa
          accusantium! Est, magnam.
        </div>
        <div className="priceAndNumber">
          <strong>${product.productPrice}</strong>
          <Button color="success" onClick={() => addInCart(product)}>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
