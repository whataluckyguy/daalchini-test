import React from "react";
import { Container } from "reactstrap";

const Cart = ({ cartItem, removeItem, Buy }) => {
  let total = 0;

  cartItem.forEach((item) => {
    total = parseFloat(total) + parseFloat(item.productPrice);
  });

  return <Container fluid></Container>;
};

export default Cart;
